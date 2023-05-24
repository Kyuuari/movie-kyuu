import { MovieCard } from "@/components/movie-card";
import { getMovieDataByPage } from "@/lib/fetchers";
import { MoviesResponse } from "@/types";
import Link from "next/link";

interface MovieParamsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: MovieParamsProps) {
  const page = typeof searchParams.page === "string" ? +searchParams.page : 1;

  const allShows: MoviesResponse = await getMovieDataByPage(page);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <h1>{searchParams.page}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allShows.results.map((movie, index) => (
          <MovieCard index={index} movieData={movie} />
        ))}
        {/* @ts-expect-error Server Component
      <MovieList /> */}
      </div>
      <Link href={`/?page=${page + 1}`}>Next</Link>
    </main>
  );
}
