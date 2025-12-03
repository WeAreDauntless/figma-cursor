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
    <div className="border border-gray-700 rounded-lg bg-gray-800/50 overflow-hidden">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-700 flex items-center gap-3">
        <Lightbulb className="w-5 h-5 text-red-500" />
        <h3 className="text-white text-lg font-semibold">Fun Facts & Trivia</h3>
      </div>

      {/* Fact Content */}
      <div className="p-4">
        {/* Fact Card */}
        <div className="relative rounded-lg overflow-hidden bg-gray-900/50 border border-gray-700 mb-4">
          {/* Image Placeholder */}
          <div className="w-full h-[180px] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-white/20 text-sm">Image Placeholder</div>
          </div>

          {/* Fact Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-6 flex flex-col justify-end">
            <div className="text-white/60 text-xs mb-2">
              Fact {currentIndex + 1} of {facts.length}
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">
              {currentFact.title}
            </h4>
            <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
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
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-1.5">
            {facts.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToFact(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-red-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to fact ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}

