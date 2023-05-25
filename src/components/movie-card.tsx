import { formatDate } from "@/lib/utils";
import { Movie } from "@/types";
import Link from "next/link";
import React from "react";

interface MovieDataProps {
  movieData: Movie;
}

const baseurl = "https://image.tmdb.org/t/p/w500/";

export const MovieCard = ({ movieData }: MovieDataProps) => {
  return (
    <Link href={`/movie/${movieData.id}`}>
      <div className="w-[220px] relative">
        <div className="overflow-hidden rounded">
          {movieData.poster_path ? (
            <img
              aria-label={`${movieData.title} image backdrop`}
              src={`${baseurl}${movieData.poster_path}`}
              className="h-auto w-auto object-cover aspect-[2/3] transition-all hover:scale-110"
            />
          ) : (
            <div
              //   src={`${baseurl}${movieData.poster_path}`}
              className="h-auto w-auto object-cover aspect-[2/3] transition-all hover:scale-110 bg-gradient-to-r from-violet-500 to-fuchsia-500"
            />
          )}
        </div>
        <div className="py-4 text-sm">
          <h3 className="font-medium leading-none">{movieData.title}</h3>
          <p className="text-xs text-muted-foreground">
            {movieData.release_date ? formatDate(movieData.release_date) : ""}
          </p>
        </div>
        {/* <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
        Dwayne
    </div> */}
      </div>
    </Link>
  );
};
