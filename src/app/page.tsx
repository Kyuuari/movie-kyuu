import { Icons } from "@/components/icons";
import { MovieCard } from "@/components/movie-card";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  getMovieDataByPage,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/fetchers";
import { cn } from "@/lib/utils";
import { MoviesResponse } from "@/types";
import Link from "next/link";

// interface MovieParamsProps {
//   searchParams: { [key: string]: string | string[] | undefined };
// }

export default async function Home() {
  // const page = typeof searchParams.page === "string" ? +searchParams.page : 1;
  const popularList: MoviesResponse = await getPopularMovies();
  const nowPlayingList: MoviesResponse = await getNowPlayingMovies();
  const topRatedList: MoviesResponse = await getTopRatedMovies();
  const upcomingList: MoviesResponse = await getUpcomingMovies();

  // const allShows: MoviesResponse = await getMovieDataByPage(page);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <div className="bg-gradient-to-r w-full from-violet-500 to-fuchsia-500 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto container">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 select-none">
            Welcome to{" "}
            <span className="animate-bounce inline-block transition-all">
              🎬
            </span>{" "}
            MovieKyuu
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

      <section className="w-full px-4 py-6">
        <h2 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Now Playing
        </h2>
        <div className="px-4">
          <div className="">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {nowPlayingList.results.map((movie, index) => (
                  <MovieCard key={index} movieData={movie} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6">
        <h2 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Upcoming
        </h2>
        <div className="px-4">
          <div className="">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {upcomingList.results.map((movie, index) => (
                  <MovieCard key={index} movieData={movie} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6">
        <h2 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Top Rated
        </h2>
        <div className="px-4">
          <div className="">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {topRatedList.results.map((movie, index) => (
                  <MovieCard key={index} movieData={movie} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-6">
        <h2 className="scroll-m-20 border-b my-4 py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Popular
        </h2>
        <div className="px-4">
          <div className="">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {popularList.results.map((movie, index) => (
                  <MovieCard key={index} movieData={movie} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </section>
    </main>
  );
}
