import { useLocalStorage } from "@/hooks/use-localstorage";
import { Movie } from "@/types";
import { create } from "zustand";

// interface Movie {
//   id: number;
//   title: string;
// }

interface MovieState {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movie: Movie) => void;
  updateFavorite: (movie: Movie) => void;
  clearFavorites: () => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  favorites: [],
  addFavorite: (movie) => {
    set((state) => {
      // Check for duplicates
      if (!state.favorites.find((fav) => fav.id === movie.id)) {
        return { favorites: [...state.favorites, movie] };
      }
      return state;
    });
  },
  removeFavorite: (movie) => {
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.id !== movie.id),
    }));
  },
  updateFavorite: (updatedMovie) => {
    set((state) => ({
      favorites: state.favorites.map((fav) =>
        fav.id === updatedMovie.id ? updatedMovie : fav
      ),
    }));
  },
  clearFavorites: () => {
    set({ favorites: [] });
  },
}));
