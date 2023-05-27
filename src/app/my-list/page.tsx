"use client";
import { MovieCard } from "@/components/movie-card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Movie } from "@/types";
import { useEffect } from "react";

// Component for displaying favorite movies
export default function MyList() {
  const localStorageAvailable =
    typeof window !== "undefined" && typeof localStorage !== "undefined";
  const [list, setList] = useLocalStorage<Movie[]>(
    "list",
    localStorageAvailable ? [] : []
  );

  useEffect(() => {
    if (localStorageAvailable) {
      const storedList = localStorage.getItem("list");
      if (storedList) {
        // Handle the retrieved list from localStorage
        const parsedListsetList = JSON.parse(storedList);
        setList(parsedListsetList);
      }
    }
  }, []);

  const removeMovie = (movie: Movie) => {
    setList(list.filter((fav) => fav.id !== movie.id));
  };

  const clearList = () => {
    setList([]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 pb-8">
      <h1 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        My List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-start py-16">
        {list.map((movie, index) => (
          <div key={index} className="flex flex-col justify-stretch gap-2">
            <Button variant={"outline"} onClick={() => removeMovie(movie)}>
              Remove From List
            </Button>
            <MovieCard movieData={movie} />
          </div>
        ))}
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"outline"}>Clear My List</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={clearList}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
