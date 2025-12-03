"use client";

import { Trophy } from "lucide-react";
import { useMemo } from "react";
import { StarRating } from "./star-rating";
import type { Episode } from "@/types/dashboard";

interface TopRatedEpisodesProps {
  episodes: Episode[];
}

export function TopRatedEpisodes({ episodes }: TopRatedEpisodesProps) {
  const topEpisodes = useMemo(() => {
    return episodes
      .filter((ep) => ep.rating !== null && ep.watched)
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
      .slice(0, 3);
  }, [episodes]);

  if (topEpisodes.length === 0) {
    return (
      <div
        className="overflow-hidden rounded-lg border"
        style={{
          backgroundColor: "var(--theme-card-bg)",
          borderColor: "var(--theme-card-border)",
        }}
      >
        <div
          className="flex items-center gap-3 border-b px-4 py-4"
          style={{ borderColor: "var(--theme-card-border)" }}
        >
          <Trophy className="h-5 w-5 text-[var(--theme-highlight)]" />
          <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">
            Top Rated Episodes
          </h3>
        </div>
        <div className="px-4 py-8 text-center text-sm text-[var(--theme-text-muted)]">
          No rated episodes yet
        </div>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden rounded-lg border"
      style={{
        backgroundColor: "var(--theme-card-bg)",
        borderColor: "var(--theme-card-border)",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 border-b px-4 py-4"
        style={{ borderColor: "var(--theme-card-border)" }}
      >
        <Trophy className="h-5 w-5 text-[var(--theme-highlight)]" />
        <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">
          Top Rated Episodes
        </h3>
      </div>

      {/* Episode List */}
      <div className="space-y-4 p-4">
        {topEpisodes.map((episode, index) => (
          <div
            key={episode.id}
            className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-[var(--theme-card-hover)]"
          >
            {/* Rank Number */}
            <div
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border"
              style={{
                backgroundColor: "var(--theme-highlight-muted)",
                borderColor: "var(--theme-highlight)",
              }}
            >
              <span className="text-sm font-semibold text-[var(--theme-highlight)]">
                {index + 1}
              </span>
            </div>

            {/* Episode Info */}
            <div className="flex-1 min-w-0">
              <div className="mb-1 text-sm text-[var(--theme-text-secondary)]">
                S{episode.season}E{episode.number}
              </div>
              <div className="mb-2 line-clamp-1 text-sm font-medium text-[var(--theme-text-primary)]">
                {episode.title}
              </div>
              <StarRating rating={episode.rating} size="sm" readonly />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

