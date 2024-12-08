export type SortOption = 'average' | 'mhi' | 'distance' | 'cei' | 'english';

export interface CompanyData {
  tradeName: string;
  mhiScore: number;      // MHI Score
  distanceScore: number; // Distance Score
  ceiScore: number;      // CEI Score
  englishScore: number;  // English Score
}

export interface ScoreWeights {
  mhi: number;
  distance: number;
  cei: number;
  english: number;
}

export interface LockedWeights {
  mhi: boolean;
  distance: boolean;
  cei: boolean;
  english: boolean;
}

export interface Theme {
  isDark: boolean;
}