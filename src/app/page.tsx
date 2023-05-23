import { MovieCard } from "@/components/movie-card";
import { getMovieDataByPage } from "@/lib/fetchers";
import { MoviesResponse } from "@/types";

export default async function Home() {
  const allShows: MoviesResponse = await getMovieDataByPage(1);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allShows.results.map((movie, index) => (
          <MovieCard index={index} movieData={movie} />
        ))}
        {/* @ts-expect-error Server Component
      <MovieList /> */}
      </div>
    </main>
  );
}
