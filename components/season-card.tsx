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
    <div
      className="overflow-hidden rounded-lg border"
      style={{
        backgroundColor: "var(--theme-card-bg)",
        borderColor: "var(--theme-card-border)",
      }}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between px-4 py-4 transition-colors hover:bg-[var(--theme-card-hover)] border-b"
        style={{ borderColor: "var(--theme-card-border)" }}
      >
        <div className="flex items-center gap-4 text-left">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-[var(--theme-accent)]">
              Season {seasonNumber}
            </span>
            <span className="text-sm text-[var(--theme-text-secondary)]">
              {watchedCount} / {episodes.length} watched
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--theme-text-secondary)]">
            <span>Avg Rating:</span>
            <span className="font-medium text-[var(--theme-text-primary)]">
              {averageRating !== null ? averageRating.toFixed(1) : "N/A"}
            </span>
            {averageRating !== null && (
              <TrendingUp className="h-5 w-5 text-[var(--theme-accent)]" />
            )}
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-[var(--theme-text-secondary)]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[var(--theme-text-secondary)]" />
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
