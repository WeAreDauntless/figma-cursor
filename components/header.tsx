import type { DashboardStats } from "@/types/dashboard";
import { ThemeToggle, type ThemeName } from "./theme-toggle";

interface HeaderProps {
  stats: DashboardStats;
  theme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
}

export function Header({ stats, theme, onThemeChange }: HeaderProps) {
  return (
    <div className="relative h-[266px] w-full overflow-hidden text-[var(--theme-text-primary)]">
      {/* Background Image */}
      <div className="absolute inset-0" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            background: `linear-gradient(180deg, var(--theme-hero-from) 0%, var(--theme-hero-via) 60%, var(--theme-hero-to) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1OSIgaGVpZ2h0PSIyNjYiIHZpZXdCb3g9IjAgMCAxMzU5IDI2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEzNTkiIGhlaWdodD0iMjY2IiBmaWxsPSIjMUUxRTFFIi8+Cjwvc3ZnPgo=')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent 30%, var(--theme-hero-overlay) 100%)`,
          }}
        />
      </div>

      <div className="absolute right-6 top-6 z-20">
        <ThemeToggle currentTheme={theme} onThemeChange={onThemeChange} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-2 text-2xl font-bold tracking-wider">
          STRANGER THINGS
        </h1>
        <p className="mb-8 text-lg text-[var(--theme-text-secondary)]">
          Watch Tracker Dashboard
        </p>

        {/* Stats Cards */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {/* Episodes Watched */}
          <div
            className="min-w-[200px] rounded-lg border px-6 py-4 text-center backdrop-blur-sm"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-card-border)",
            }}
          >
            <div className="mb-1 text-2xl font-bold text-[var(--theme-accent)]">
              {stats.episodesWatched}
            </div>
            <div className="text-sm text-[var(--theme-text-muted)]">
              Episodes Watched
            </div>
          </div>

          {/* Total Episodes */}
          <div
            className="min-w-[200px] rounded-lg border px-6 py-4 text-center backdrop-blur-sm"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-card-border)",
            }}
          >
            <div className="mb-1 text-2xl font-bold text-[var(--theme-accent)]">
              {stats.totalEpisodes}
            </div>
            <div className="text-sm text-[var(--theme-text-muted)]">
              Total Episodes
            </div>
          </div>

          {/* Completion */}
          <div
            className="min-w-[200px] rounded-lg border px-6 py-4 text-center backdrop-blur-sm"
            style={{
              backgroundColor: "var(--theme-card-bg)",
              borderColor: "var(--theme-card-border)",
            }}
          >
            <div className="mb-1 text-2xl font-bold text-[var(--theme-accent)]">
              {stats.completionPercentage}%
            </div>
            <div className="text-sm text-[var(--theme-text-muted)]">Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

