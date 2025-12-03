"use client";

import { Check } from "lucide-react";
import { StarRating } from "./star-rating";
import { cn } from "@/lib/utils";
import type { Episode } from "@/types/dashboard";

interface EpisodeItemProps {
  episode: Episode;
  onWatchedChange: (id: string, watched: boolean) => void;
  onRatingChange: (id: string, rating: number) => void;
}

export function EpisodeItem({
  episode,
  onWatchedChange,
  onRatingChange,
}: EpisodeItemProps) {
  const handleCheckboxChange = () => {
    onWatchedChange(episode.id, !episode.watched);
  };

  const handleRatingChange = (rating: number) => {
    onRatingChange(episode.id, rating);
  };

  return (
    <div className="flex items-center py-4 px-4 rounded-lg hover:bg-white/5 transition-colors">
      <button
        type="button"
        onClick={handleCheckboxChange}
        className={cn(
          "flex items-center justify-center w-6 h-6 rounded border-2 transition-colors flex-shrink-0",
          episode.watched
            ? "bg-red-500 border-red-500"
            : "border-gray-400 bg-transparent hover:border-gray-300"
        )}
        aria-label={`Mark episode ${episode.number} as ${episode.watched ? "unwatched" : "watched"}`}
      >
        {episode.watched && (
          <Check className="w-4 h-4 text-white" strokeWidth={3} />
        )}
      </button>

      <div className="flex-1 flex items-center justify-between gap-4 ml-3">
        <span className="text-white text-base flex-1">
          Episode {episode.number}: {episode.title}
        </span>

        <StarRating
          rating={episode.rating}
          onRatingChange={handleRatingChange}
          size="sm"
        />
      </div>
    </div>
  );
}

