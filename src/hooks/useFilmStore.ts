import { useState, useEffect, useMemo, useCallback } from 'react';
import { Film, UserFilmState, ReactionType, CategoryWatchStats, MovementId } from '../types/film';
import { INITIAL_FILMS } from '../data/films';

const STORAGE_KEYS = {
  USER_STATES: 'cinematheque_user_film_states_v2',
  CUSTOM_FILMS: 'cinematheque_custom_films_v2',
  GENRE_OVERRIDES: 'cinematheque_genre_overrides_v1',
  DELETED_FILMS: 'cinematheque_deleted_films_v1'
};

export function useFilmStore() {
  const [userStates, setUserStates] = useState<Record<string, UserFilmState>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_STATES);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed reading user states from localStorage', e);
    }
    return {
      'the-400-blows-1959': { isWatched: true, watchedAt: '2026-03-10', reaction: 'like' },
      'rear-window-1954': { isWatched: true, watchedAt: '2026-04-02', reaction: 'like' },
      'bicycle-thieves-1948': { isWatched: true, watchedAt: '2026-04-15', reaction: 'like' }
    };
  });

  const [customFilms, setCustomFilms] = useState<Film[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_FILMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed reading custom films from localStorage', e);
    }
    return [];
  });

  const [genreOverrides, setGenreOverrides] = useState<Record<string, string[]>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.GENRE_OVERRIDES);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed reading genre overrides from localStorage', e);
    }
    return {};
  });

  const [deletedFilmIds, setDeletedFilmIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.DELETED_FILMS);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed reading deleted films from localStorage', e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_STATES, JSON.stringify(userStates));
    } catch (e) {
      console.error('Failed saving user states to localStorage', e);
    }
  }, [userStates]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_FILMS, JSON.stringify(customFilms));
    } catch (e) {
      console.error('Failed saving custom films to localStorage', e);
    }
  }, [customFilms]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.GENRE_OVERRIDES, JSON.stringify(genreOverrides));
    } catch (e) {
      console.error('Failed saving genre overrides to localStorage', e);
    }
  }, [genreOverrides]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.DELETED_FILMS, JSON.stringify(deletedFilmIds));
    } catch (e) {
      console.error('Failed saving deleted films to localStorage', e);
    }
  }, [deletedFilmIds]);

  const allFilms = useMemo(() => {
    const raw = [...INITIAL_FILMS, ...customFilms].filter(
      (f) => !deletedFilmIds.includes(f.id)
    );
    return raw.map((f) => {
      if (genreOverrides[f.id]) {
        return { ...f, genres: genreOverrides[f.id] };
      }
      return f;
    });
  }, [customFilms, genreOverrides, deletedFilmIds]);

  // Update genres for any film
  const updateFilmGenres = useCallback((filmId: string, newGenres: string[]) => {
    setGenreOverrides((prev) => ({
      ...prev,
      [filmId]: newGenres
    }));
  }, []);

  // Undo / Revert edited genres back to original
  const resetFilmGenres = useCallback((filmId: string) => {
    setGenreOverrides((prev) => {
      const copy = { ...prev };
      delete copy[filmId];
      return copy;
    });
  }, []);

  const isFilmGenreEdited = useCallback(
    (filmId: string) => {
      return Boolean(genreOverrides[filmId]);
    },
    [genreOverrides]
  );

  // Delete any film (custom or catalogue)
  const deleteFilm = useCallback((filmId: string) => {
    setDeletedFilmIds((prev) => (prev.includes(filmId) ? prev : [...prev, filmId]));
    setCustomFilms((prev) => prev.filter((f) => f.id !== filmId));
  }, []);

  // Toggle Watched
  const toggleWatched = useCallback((filmId: string) => {
    setUserStates((prev) => {
      const current = prev[filmId] || { isWatched: false, reaction: 'none' };
      const nextWatched = !current.isWatched;
      return {
        ...prev,
        [filmId]: {
          ...current,
          isWatched: nextWatched,
          watchedAt: nextWatched ? new Date().toISOString().split('T')[0] : undefined
        }
      };
    });
  }, []);

  // Toggle Like (Heart)
  const toggleLike = useCallback((filmId: string, explicitReaction?: ReactionType) => {
    setUserStates((prev) => {
      const current = prev[filmId] || { isWatched: false, reaction: 'none' };
      const nextReaction: ReactionType =
        explicitReaction !== undefined
          ? explicitReaction
          : current.reaction === 'like'
            ? 'none'
            : 'like';
      return {
        ...prev,
        [filmId]: {
          ...current,
          reaction: nextReaction
        }
      };
    });
  }, []);

  // Add Custom Film
  const addCustomFilm = useCallback((filmData: Omit<Film, 'id'>) => {
    const slug = filmData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + filmData.releaseYear;
    const newFilm: Film = {
      ...filmData,
      id: `custom-${slug}-${Date.now()}`,
      isCustom: true
    };
    setCustomFilms((prev) => [newFilm, ...prev]);
    return newFilm.id;
  }, []);

  const deleteCustomFilm = useCallback((filmId: string) => {
    deleteFilm(filmId);
  }, [deleteFilm]);

  const getFilmState = useCallback(
    (filmId: string): UserFilmState => {
      return userStates[filmId] || { isWatched: false, reaction: 'none' };
    },
    [userStates]
  );

  const computeStats = useCallback(
    (predicate: (film: Film) => boolean): CategoryWatchStats => {
      const filtered = allFilms.filter(predicate);
      const total = filtered.length;
      if (total === 0) {
        return { total: 0, watched: 0, liked: 0, percentage: 0 };
      }
      let watched = 0;
      let liked = 0;

      for (const film of filtered) {
        const state = userStates[film.id];
        if (state?.isWatched) watched++;
        if (state?.reaction === 'like') liked++;
      }

      const percentage = Math.round((watched / total) * 100);
      return { total, watched, liked, percentage };
    },
    [allFilms, userStates]
  );

  const getMovementStats = useCallback(
    (movementId: MovementId) => computeStats((f) => f.movementId === movementId),
    [computeStats]
  );

  const getDirectorStats = useCallback(
    (directorIdOrName: string) =>
      computeStats(
        (f) =>
          f.directorId === directorIdOrName ||
          f.director.toLowerCase().includes(directorIdOrName.toLowerCase())
      ),
    [computeStats]
  );

  const getCinematographerStats = useCallback(
    (cinematographerIdOrName: string) =>
      computeStats(
        (f) =>
          f.cinematographerId === cinematographerIdOrName ||
          f.cinematographer.toLowerCase().includes(cinematographerIdOrName.toLowerCase())
      ),
    [computeStats]
  );

  const getGenreStats = useCallback(
    (genre: string) => computeStats((f) => f.genres.includes(genre)),
    [computeStats]
  );

  const overallStats = useMemo(() => computeStats(() => true), [computeStats]);

  return {
    allFilms,
    userStates,
    toggleWatched,
    setReaction: toggleLike,
    updateFilmGenres,
    resetFilmGenres,
    isFilmGenreEdited,
    deleteFilm,
    addCustomFilm,
    deleteCustomFilm,
    getFilmState,
    getMovementStats,
    getDirectorStats,
    getCinematographerStats,
    getGenreStats,
    overallStats
  };
}
