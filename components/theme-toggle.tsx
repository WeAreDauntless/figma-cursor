"use client";

import { Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type ThemeName = "light" | "blue-grey" | "dark";

interface ThemeOption {
  id: ThemeName;
  label: string;
  description: string;
  preview: {
    background: string;
    card: string;
    accent: string;
    accentMuted: string;
  };
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "light",
    label: "Light",
    description: "Bright surface with crisp contrast",
    preview: {
      background: "linear-gradient(135deg, #fff1f2, #f8fafc)",
      card: "#ffffff",
      accent: "#dc2626",
      accentMuted: "rgba(15, 23, 42, 0.08)",
    },
  },
  {
    id: "blue-grey",
    label: "Blue-Grey",
    description: "Moody slate with cyan highlights",
    preview: {
      background: "linear-gradient(135deg, #0f172a, #1f2a37)",
      card: "rgba(15, 23, 42, 0.9)",
      accent: "#38bdf8",
      accentMuted: "rgba(56, 189, 248, 0.25)",
    },
  },
  {
    id: "dark",
    label: "Dark",
    description: "High contrast cinematic vibe",
    preview: {
      background: "linear-gradient(135deg, #0b1120, #1a1a1a)",
      card: "rgba(30, 41, 59, 0.85)",
      accent: "#f43f5e",
      accentMuted: "rgba(244, 63, 94, 0.2)",
    },
  },
];

interface ThemeToggleProps {
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
}

export function ThemeToggle({ currentTheme, onThemeChange }: ThemeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  const handleSelect = (theme: ThemeName) => {
    onThemeChange(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative text-[var(--theme-text-primary)]">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-[var(--theme-card-hover)]"
        style={{ borderColor: "var(--theme-card-border)" }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Open theme settings"
      >
        <Settings className="h-5 w-5 text-[var(--theme-text-secondary)]" />
      </button>

      {isOpen && (
        <div
          ref={panelRef}
          className="absolute right-0 mt-3 w-[320px] rounded-2xl border p-4 shadow-2xl backdrop-blur-md"
          style={{
            backgroundColor: "var(--theme-card-bg)",
            borderColor: "var(--theme-card-border)",
          }}
        >
          <div className="mb-4">
            <p className="text-sm font-semibold text-[var(--theme-text-muted)]">
              Personalize
            </p>
            <h4 className="text-lg font-semibold text-[var(--theme-text-primary)]">
              Theme &amp; Contrast
            </h4>
          </div>

          <div className="space-y-3">
            {THEME_OPTIONS.map((option) => {
              const isActive = option.id === currentTheme;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelect(option.id)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-colors",
                    "hover:bg-[var(--theme-card-hover)]"
                  )}
                  style={{
                    borderColor: isActive
                      ? "var(--theme-accent)"
                      : "var(--theme-card-border)",
                  }}
                  aria-pressed={isActive}
                >
                  <div
                    className="relative h-16 w-20 overflow-hidden rounded-xl border"
                    style={{ borderColor: "var(--theme-card-border)" }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: option.preview.background,
                      }}
                    />
                    <div
                      className="absolute inset-x-2 bottom-2 h-5 rounded-md border"
                      style={{
                        background: option.preview.card,
                        borderColor: option.preview.accentMuted,
                      }}
                    />
                    <div
                      className="absolute left-2 top-2 h-5 w-5 rounded-md shadow-sm"
                      style={{
                        background: option.preview.accent,
                        boxShadow: `0 6px 18px ${option.preview.accentMuted}`,
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--theme-text-primary)]">
                        {option.label}
                      </span>
                      {isActive && (
                        <span className="text-xs font-medium text-[var(--theme-accent)]">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--theme-text-muted)]">
                      {option.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
