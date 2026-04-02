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
      <div className="border border-rose-100 rounded-2xl bg-white shadow-sm overflow-hidden">
        <div className="px-4 py-4 border-b border-rose-50 flex items-center gap-3">
          <Trophy className="w-5 h-5 text-amber-500" />
          <h3 className="text-gray-900 text-lg font-semibold">
            Top Rated Episodes
          </h3>
        </div>
        <div className="px-4 py-8 text-center text-slate-500 text-sm">
          No rated episodes yet
        </div>
      </div>
    );
  }

  return (
    <div className="border border-rose-100 rounded-2xl bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-4 py-4 border-b border-rose-50 flex items-center gap-3">
        <Trophy className="w-5 h-5 text-amber-500" />
        <h3 className="text-gray-900 text-lg font-semibold">
          Top Rated Episodes
        </h3>
      </div>

      {/* Episode List */}
      <div className="p-4 space-y-4">
        {topEpisodes.map((episode, index) => (
          <div
            key={episode.id}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-rose-50 transition-colors"
          >
            {/* Rank Number */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/15 border border-amber-500/40 flex-shrink-0">
              <span className="text-amber-600 font-semibold text-sm">
                {index + 1}
              </span>
            </div>

            {/* Episode Info */}
            <div className="flex-1 min-w-0">
              <div className="text-slate-500 text-sm mb-1">
                S{episode.season}E{episode.number}
              </div>
              <div className="text-gray-900 text-sm font-medium mb-2 line-clamp-1">
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

