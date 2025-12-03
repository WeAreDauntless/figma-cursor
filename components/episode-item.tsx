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
    <div className="flex items-center rounded-lg px-4 py-4 transition-colors hover:bg-[var(--theme-card-hover)]">
      <button
        type="button"
        onClick={handleCheckboxChange}
        className={cn(
          "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 transition-colors",
          episode.watched
            ? "bg-[var(--theme-accent)] border-[var(--theme-accent)]"
            : "border-[var(--theme-text-muted)] bg-transparent hover:border-[var(--theme-text-secondary)]"
        )}
        aria-label={`Mark episode ${episode.number} as ${episode.watched ? "unwatched" : "watched"}`}
      >
        {episode.watched && (
          <Check
            className="h-4 w-4 text-[var(--theme-accent-contrast)]"
            strokeWidth={3}
          />
        )}
      </button>

      <div className="ml-3 flex flex-1 items-center justify-between gap-4">
        <span className="flex-1 text-base text-[var(--theme-text-primary)]">
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

