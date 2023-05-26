"use client";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Movie } from "@/types";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

// Component for adding movies to favorites
export function SaveButton({ movie }: { movie: Movie }) {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", []);

  const { toast } = useToast();

  const addToFavorites = () => {
    const isFavorite = favorites.find((fav) => fav.id === movie.id);

    if (isFavorite) {
      // Remove the movie from favorites
      const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
      setFavorites(updatedFavorites);
      toast({
        title: "Removed from Favorites",
        description: `${movie.title} has been removed from your favorites.`,
      });
    } else {
      // Add the movie to favorites
      setFavorites([...favorites, movie]);
      toast({
        title: "Added to Favorites",
        description: `${movie.title} has been added to your favorites.`,
        variant: "share",
      });
    }
  };
  return (
    <>
      {favorites.find((fav) => fav.id === movie.id) ? (
        <Button
          variant={"outline"}
          onClick={addToFavorites}
          className="transition-all border-primary "
        >
          Remove from Favorite
        </Button>
      ) : (
        <Button onClick={addToFavorites} className="transition-all ">
          Add to Favorite
        </Button>
      )}
    </>
  );
}
