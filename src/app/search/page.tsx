import { Icons } from "@/components/icons";
import { MovieCard } from "@/components/movie-card";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { getMovieSearchDataByPage } from "@/lib/fetchers";
import { MoviesResponse } from "@/types";
import Link from "next/link";
import React from "react";

type SearchParamsProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ searchParams }: SearchParamsProps) {
  const page = typeof searchParams.page === "string" ? +searchParams.page : 1;
  const keywords =
    typeof searchParams.keywords === "string" ? searchParams.keywords : "";

  const allShows: MoviesResponse = await getMovieSearchDataByPage(
    page,
    keywords
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-16">
      {/* <h1>{keywords}</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allShows.results.map((movie, index) => (
          <MovieCard key={index} movieData={movie} />
        ))}
      </div>
      <div className="fixed bottom-8 flex flex-row gap-8 md:bottom-[-10]">
        <Link
          href={`/search?keywords=${encodeURIComponent(
            keywords
          )}&page=${Math.max(page - 1, 1)}`}
        >
          <Button>
            <Icons.ArrowLeft />
          </Button>
        </Link>
        <h1 className="flex items-center bg-primary text-primary-foreground rounded-full aspect-square h-8 w-8 justify-center">
          {searchParams.page ?? 1}
        </h1>
        <Link
          href={`/search?keywords=${encodeURIComponent(keywords)}&page=${
            page + 1
          }`}
        >
          <Button>
            <Icons.arrowRight />
          </Button>
        </Link>
      </div>
      {/* <div className="fixed bottom-8 flex flex-row gap-8 md:bottom-[-10]">
        <SearchBar />
      </div> */}
    </main>
  );
}
