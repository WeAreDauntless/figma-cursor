import type { DashboardStats } from "@/types/dashboard";

interface HeaderProps {
  stats: DashboardStats;
}

export function Header({ stats }: HeaderProps) {
  return (
    <div className="relative w-full h-[266px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-rose-100 via-amber-50 to-white" />
        {/* Placeholder for background image - you can replace with actual Stranger Things image */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1OSIgaGVpZ2h0PSIyNjYiIHZpZXdCb3g9IjAgMCAxMzU5IDI2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEzNTkiIGhlaWdodD0iMjY2IiBmaWxsPSIjRkY5RURCIi8+Cjwvc3ZnPgo=')] bg-cover bg-center blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-rose-700 text-2xl font-bold mb-2 tracking-wider">
          STRANGER THINGS
        </h1>
        <p className="text-rose-600/80 text-lg mb-8">Watch Tracker Dashboard</p>

        {/* Stats Cards */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {/* Episodes Watched */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[200px] text-center border border-rose-100 shadow-sm">
            <div className="text-rose-600 text-2xl font-bold mb-1">
              {stats.episodesWatched}
            </div>
            <div className="text-slate-500 text-sm">Episodes Watched</div>
          </div>

          {/* Total Episodes */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[200px] text-center border border-rose-100 shadow-sm">
            <div className="text-rose-600 text-2xl font-bold mb-1">
              {stats.totalEpisodes}
            </div>
            <div className="text-slate-500 text-sm">Total Episodes</div>
          </div>

          {/* Completion */}
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[200px] text-center border border-rose-100 shadow-sm">
            <div className="text-rose-600 text-2xl font-bold mb-1">
              {stats.completionPercentage}%
            </div>
            <div className="text-slate-500 text-sm">Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

