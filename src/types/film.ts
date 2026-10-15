export type MovementId =
  | 'soviet-montage' | 'film-noir' | 'italian-neorealism' | 'french-new-wave'
  | 'early-cinema' | 'german-expressionism' | 'new-hollywood' | 'classical-hollywood'
  | 'nordic-cinema' | 'surrealism' | '' | string;

export type DirectorId = 'kurosawa' | 'bergman' | 'lynch' | 'hitchcock' | 'pawlikowski' | 'fellini' | 'godard' | 'truffaut' | 'wenders' | string;
export type ReactionType = 'like' | 'none';

export interface MovementInfo {
  id: MovementId; name: string; era: string; timelineStartYear: number; timelineEndYear: number;
  originCountry: string; manifesto: string; coreAesthetics: string[]; historicalContext: string;
  visualMotif: { symbol: string; description: string; accentColor: string };
}

export interface DirectorInfo {
  id: DirectorId; name: string; nativeName?: string; link?: string; lifespan: string; nationality: string;
  signatureStyle: string; thematicFixations: string[]; quote: string;
}

export interface CinematographerInfo {
  id: string; name: string; lifespan: string; nationality: string; lightingStyle: string;
  cameraPhilosophy: string; notableCollaborators: string[]; keyTechnique: string;
}

export interface Film {
  id: string; title: string; originalTitle?: string; releaseYear: number; director: string; directorId?: DirectorId;
  writer: string; cinematographer: string; cinematographerId?: string; genres: string[]; movementId?: MovementId;
  movementName?: string; runtimeMinutes: number; aspectRatio: string;
  colorProcess: 'Black & White' | 'Color' | 'Color & Black/White' | 'Black & White / Color' | string;
  synopsis: string; cinematographyAnalysis?: string; historicalSignificance?: string; keyScene?: string;
  posterUrl?: string; posterArt?: string; link?: string; isCustom?: boolean;
}

export interface UserFilmState { isWatched: boolean; watchedAt?: string; reaction: ReactionType; personalNotes?: string; }
export interface CategoryWatchStats { total: number; watched: number; liked: number; percentage: number; }
