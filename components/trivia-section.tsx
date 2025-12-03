"use client";

import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import type { TriviaFact } from "@/types/dashboard";

interface TriviaSectionProps {
  facts: TriviaFact[];
}

export function TriviaSection({ facts }: TriviaSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentFact = facts[currentIndex];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? facts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === facts.length - 1 ? 0 : prev + 1));
  };

  const goToFact = (index: number) => {
    setCurrentIndex(index);
  };

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
        <Lightbulb className="h-5 w-5 text-[var(--theme-accent)]" />
        <h3 className="text-lg font-semibold text-[var(--theme-text-primary)]">
          Fun Facts &amp; Trivia
        </h3>
      </div>

      {/* Fact Content */}
      <div className="p-4">
        {/* Fact Card */}
        <div
          className="relative mb-4 overflow-hidden rounded-lg border"
          style={{
            backgroundColor: "var(--theme-hero-overlay)",
            borderColor: "var(--theme-card-border)",
          }}
        >
          {/* Image Placeholder */}
          <div
            className="flex h-[180px] w-full items-center justify-center"
            style={{
              background: `linear-gradient(135deg, var(--theme-hero-from), var(--theme-hero-to))`,
            }}
          >
            <div
              className="text-sm"
              style={{ color: "var(--theme-text-muted)", opacity: 0.7 }}
            >
              Image Placeholder
            </div>
          </div>

          {/* Fact Content Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, var(--theme-hero-overlay-soft) 45%, var(--theme-hero-overlay) 100%)",
            }}
          >
            <div className="mb-2 text-xs text-[var(--theme-text-secondary)]">
              Fact {currentIndex + 1} of {facts.length}
            </div>
            <h4 className="mb-2 text-lg font-semibold text-[var(--theme-text-primary)]">
              {currentFact.title}
            </h4>
            <p className="line-clamp-3 text-sm leading-relaxed text-[var(--theme-text-secondary)]">
              {currentFact.description}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrevious}
            className="text-[var(--theme-text-secondary)] hover:bg-[var(--theme-card-hover)] hover:text-[var(--theme-text-primary)]"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Previous
          </Button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5">
            {facts.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToFact(index)}
                className="h-2 w-2 rounded-full transition-colors"
                style={{
                  backgroundColor:
                    index === currentIndex
                      ? "var(--theme-accent)"
                      : "var(--theme-card-border)",
                }}
                aria-label={`Go to fact ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="text-[var(--theme-text-secondary)] hover:bg-[var(--theme-card-hover)] hover:text-[var(--theme-text-primary)]"
          >
            Next
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

