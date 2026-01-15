
export interface AppItem {
  id: string;
  name: string;
  category: string;
  description: string;
  version: string;
  size: string;
  rating: number;
  downloads: string;
  icon: string;
  screenshots: string[];
  downloadUrl: string;
  isPremium: boolean;
  lastUpdated: string;
}

export type Category = 'Games' | 'Productivity' | 'Social' | 'Entertainment' | 'Tools' | 'Finance' | 'Photography';

export interface UserSession {
  isAdmin: boolean;
  username: string | null;
}
