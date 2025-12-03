export interface Episode {
  id: string;
  season: number;
  number: number;
  title: string;
  watched: boolean;
  rating: number | null; // 1-5 or null if not rated
}

export interface Season {
  number: number;
  episodes: Episode[];
  watchedCount: number;
  averageRating: number | null; // Calculated from episode ratings
}

export interface TriviaFact {
  id: string;
  title: string;
  description: string;
  image?: string; // URL or path to image
}

export interface DashboardStats {
  episodesWatched: number;
  totalEpisodes: number;
  completionPercentage: number;
}

