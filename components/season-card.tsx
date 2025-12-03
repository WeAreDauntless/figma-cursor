"use client";

import { ChevronDown, ChevronUp, TrendingUp } from "lucide-react";
import { useState, useMemo } from "react";
import { EpisodeItem } from "./episode-item";
import type { Episode } from "@/types/dashboard";

interface SeasonCardProps {
  seasonNumber: number;
  episodes: Episode[];
  onEpisodeWatchedChange: (id: string, watched: boolean) => void;
  onEpisodeRatingChange: (id: string, rating: number) => void;
}

export function SeasonCard({
  seasonNumber,
  episodes,
  onEpisodeWatchedChange,
  onEpisodeRatingChange,
}: SeasonCardProps) {
  const [isExpanded, setIsExpanded] = useState(seasonNumber === 1);

  const watchedCount = useMemo(
    () => episodes.filter((ep) => ep.watched).length,
    [episodes]
  );

  const averageRating = useMemo(() => {
    const ratedEpisodes = episodes.filter(
      (ep) => ep.watched && ep.rating !== null
    );
    if (ratedEpisodes.length === 0) return null;

    const sum = ratedEpisodes.reduce((acc, ep) => acc + (ep.rating ?? 0), 0);
    return Math.round((sum / ratedEpisodes.length) * 10) / 10;
  }, [episodes]);

  return (
    <div className="border border-rose-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 flex items-center justify-between hover:bg-rose-50 transition-colors border-b border-rose-50"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-rose-600 text-lg font-semibold">
              Season {seasonNumber}
            </span>
            <span className="text-slate-500 text-sm">
              {watchedCount} / {episodes.length} watched
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Avg Rating:</span>
            <span className="font-medium">
              {averageRating !== null ? averageRating.toFixed(1) : "N/A"}
            </span>
            {averageRating !== null && (
              <TrendingUp className="w-5 h-5 text-rose-500" />
            )}
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-slate-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-slate-500" />
          )}
        </div>
      </button>

      {/* Episode List */}
      {isExpanded && (
        <div className="px-4 py-4">
          <div className="space-y-0">
            {episodes.map((episode) => (
              <EpisodeItem
                key={episode.id}
                episode={episode}
                onWatchedChange={onEpisodeWatchedChange}
                onRatingChange={onEpisodeRatingChange}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
