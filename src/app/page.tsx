import { Icons } from "@/components/icons";
import { MovieCard } from "@/components/movie-card";
import { Button } from "@/components/ui/button";
import { getMovieDataByPage } from "@/lib/fetchers";
import { cn } from "@/lib/utils";
import { MoviesResponse } from "@/types";
import Link from "next/link";

// interface MovieParamsProps {
//   searchParams: { [key: string]: string | string[] | undefined };
// }

export default async function Home() {
  // const page = typeof searchParams.page === "string" ? +searchParams.page : 1;

  // const allShows: MoviesResponse = await getMovieDataByPage(page);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <div className="bg-gradient-to-r w-full from-violet-500 to-fuchsia-500 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto container">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Welcome to MovieKyuu
          </h1>
          <p className="text-white text-lg md:text-xl mb-10">
            Discover and explore a vast collection of movies.
          </p>
          <div className="flex flex-wrap space-x-4">
            <Link href={"/movie"}>
              <Button className="btn-primary">Browse Movies</Button>
            </Link>
            {/* <Button className="btn-secondary">Watch Trailer</Button> */}
          </div>
        </div>
      </div>
    </main>
  );
}
