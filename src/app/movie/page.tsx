import { Icons } from "@/components/icons";
import { MovieCard } from "@/components/movie-card";
import { SideMenu } from "@/components/side-menu";
import { Button } from "@/components/ui/button";
import { getMovieDataByPage, getMovieDataByParams } from "@/lib/fetchers";
import { MoviesResponse } from "@/types";
import Link from "next/link";

interface MovieParamsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: MovieParamsProps) {
  const page = typeof searchParams.page === "string" ? +searchParams.page : 1;
  const genre =
    typeof searchParams.genre === "string" ? searchParams.genre : "all";

  const allShows: MoviesResponse = await getMovieDataByParams(page, genre);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("hello World");
  //   // const formData = new FormData(event.currentTarget);
  //   // const params = new URLSearchParams(searchParams);
  //   // for (const [key, value] of formData.entries()) {
  //   //   params.set(key, value.toString());
  //   // }
  //   // router.push(`/?${params.toString()}`);
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 pb-8">
      <div className="grid lg:grid-cols-5">
        <SideMenu />
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
            {allShows.results.map((movie, index) => (
              <MovieCard key={index} movieData={movie} />
            ))}
          </div>
        </div>
      </div>
      <div className="sticky bottom-8 flex flex-row justify-center gap-8">
        <Link href={`/movie?page=${Math.max(page - 1, 1)}&genre=${genre}`}>
          <Button aria-label="previous page">
            <Icons.ArrowLeft />
          </Button>
        </Link>
        <h1 className="flex items-center bg-primary text-primary-foreground rounded-full aspect-square h-8 w-8 justify-center">
          {searchParams.page ?? 1}
        </h1>
        <Link href={`/movie?page=${page + 1}&genre=${genre}`}>
          <Button aria-label="next page">
            <Icons.arrowRight />
          </Button>
        </Link>
      </div>
    </main>
  );
}
