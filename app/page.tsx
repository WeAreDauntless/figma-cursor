"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/header";
import { SeasonCard } from "@/components/season-card";
import { TopRatedEpisodes } from "@/components/top-rated-episodes";
import { TriviaSection } from "@/components/trivia-section";
import { episodes, triviaFacts } from "@/data/stranger-things";
import type { Episode, DashboardStats } from "@/types/dashboard";

export default function Dashboard() {
  const [episodesState, setEpisodesState] = useState<Episode[]>(episodes);

  // Calculate stats
  const stats: DashboardStats = useMemo(() => {
    const watched = episodesState.filter((ep) => ep.watched).length;
    const total = episodesState.length;
    const completion = Math.round((watched / total) * 100);

    return {
      episodesWatched: watched,
      totalEpisodes: total,
      completionPercentage: completion,
    };
  }, [episodesState]);

  // Group episodes by season
  const seasons = useMemo(() => {
    const seasonMap = new Map<number, Episode[]>();
    episodesState.forEach((episode) => {
      if (!seasonMap.has(episode.season)) {
        seasonMap.set(episode.season, []);
      }
      seasonMap.get(episode.season)!.push(episode);
    });

    return Array.from(seasonMap.entries())
      .map(([seasonNumber, episodes]) => ({
        seasonNumber,
        episodes: episodes.sort((a, b) => a.number - b.number),
      }))
      .sort((a, b) => a.seasonNumber - b.seasonNumber);
  }, [episodesState]);

  const handleEpisodeWatchedChange = (id: string, watched: boolean) => {
    setEpisodesState((prev) =>
      prev.map((ep) => (ep.id === id ? { ...ep, watched } : ep))
    );
  };

  const handleEpisodeRatingChange = (id: string, rating: number) => {
    setEpisodesState((prev) =>
      prev.map((ep) => (ep.id === id ? { ...ep, rating } : ep))
    );
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <Header stats={stats} />

      {/* Main Content */}
      <div className="max-w-[1359px] mx-auto px-4 sm:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_394px] gap-8">
          {/* Left Column - Seasons */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-6">Seasons</h2>
            <div className="space-y-6">
              {seasons.map(({ seasonNumber, episodes: seasonEpisodes }) => (
                <SeasonCard
                  key={seasonNumber}
                  seasonNumber={seasonNumber}
                  episodes={seasonEpisodes}
                  onEpisodeWatchedChange={handleEpisodeWatchedChange}
                  onEpisodeRatingChange={handleEpisodeRatingChange}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <TopRatedEpisodes episodes={episodesState} />
            <TriviaSection facts={triviaFacts} />
          </div>
        </div>
      </div>
    </div>
  );
}
