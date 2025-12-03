"use client";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number | null;
  onRatingChange?: (rating: number) => void;
  size?: "sm" | "md" | "lg";
  readonly?: boolean;
}

export function StarRating({
  rating,
  onRatingChange,
  size = "md",
  readonly = false,
}: StarRatingProps) {
  const sizeClasses = {
    sm: "w-[18px] h-[18px]",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const handleStarClick = (value: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((value) => {
        const isFilled = rating !== null && value <= Math.round(rating);
        const isHalf = rating !== null && value - 0.5 <= rating && value > rating;

        return (
          <button
            key={value}
            type="button"
            onClick={() => handleStarClick(value)}
            disabled={readonly}
            className={cn(
              "transition-colors",
              !readonly && "cursor-pointer hover:opacity-80",
              readonly && "cursor-default"
            )}
            aria-label={`Rate ${value} out of 5 stars`}
          >
            <Star
              className={cn(
                sizeClasses[size],
                isFilled
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-transparent text-gray-400"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

