"use client";
import { useLocalStorage } from "@/hooks/use-localstorage";
import { Movie } from "@/types";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { useRouter } from "next/navigation";

// Component for adding movies to List
export function SaveButton({ movie }: { movie: Movie }) {
  const [list, setList] = useLocalStorage<Movie[]>("list", []);
  const router = useRouter();

  const { toast } = useToast();

  const addToList = () => {
    const isFavorite = list.find((fav) => fav.id === movie.id);

    if (isFavorite) {
      // Remove the movie from List
      const updatedList = list.filter((fav) => fav.id !== movie.id);
      setList(updatedList);
      toast({
        title: "Removed from List",
        description: `${movie.title} has been removed from your List.`,
      });
    } else {
      // Add the movie to List
      setList([...list, movie]);
      toast({
        title: "Added to List",
        description: `${movie.title} has been added to your List.`,
        variant: "share",
        action: (
          <ToastAction
            onClick={() => router.push(`/my-list`)}
            altText="Goto list"
          >
            Go to List
          </ToastAction>
        ),
      });
    }
  };
  return (
    <>
      {list.find((fav) => fav.id === movie.id) ? (
        <Button
          variant={"outline"}
          onClick={addToList}
          className="transition-all border-primary "
        >
          Remove from Favorite
        </Button>
      ) : (
        <Button onClick={addToList} className="transition-all ">
          Add to Favorite
        </Button>
      )}
    </>
  );
}
