import Image from "next/image";
import type { DashboardStats } from "@/types/dashboard";

interface HeaderProps {
  stats: DashboardStats;
}

export function Header({ stats }: HeaderProps) {
  return (
    <div className="relative w-full h-[266px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        {/* Placeholder for background image - you can replace with actual Stranger Things image */}
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM1OSIgaGVpZ2h0PSIyNjYiIHZpZXdCb3g9IjAgMCAxMzU5IDI2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEzNTkiIGhlaWdodD0iMjY2IiBmaWxsPSIjMUUxRTFFIi8+Cjwvc3ZnPgo=')] bg-cover bg-center blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-white text-2xl font-bold mb-2 tracking-wider">
          STRANGER THINGS
        </h1>
        <p className="text-white/80 text-lg mb-8">Watch Tracker Dashboard</p>

        {/* Stats Cards */}
        <div className="flex items-center gap-6 flex-wrap justify-center">
          {/* Episodes Watched */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[200px] text-center border border-gray-700">
            <div className="text-red-500 text-2xl font-bold mb-1">
              {stats.episodesWatched}
            </div>
            <div className="text-white/70 text-sm">Episodes Watched</div>
          </div>

          {/* Total Episodes */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[200px] text-center border border-gray-700">
            <div className="text-red-500 text-2xl font-bold mb-1">
              {stats.totalEpisodes}
            </div>
            <div className="text-white/70 text-sm">Total Episodes</div>
          </div>

          {/* Completion */}
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg px-6 py-4 min-w-[200px] text-center border border-gray-700">
            <div className="text-red-500 text-2xl font-bold mb-1">
              {stats.completionPercentage}%
            </div>
            <div className="text-white/70 text-sm">Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
}

