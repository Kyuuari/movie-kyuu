import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import YouTubePlayer from "@/components/youtube-player";
import { getMovieDataById, getMovieVideosById } from "@/lib/fetchers";
import { MovieCastResponse, MovieDetails, VideoResult } from "@/types";
import Link from "next/link";
import React from "react";

// interface MovieDetailsProps {
//   movieId: string ;
// }
const baseurl = "https://image.tmdb.org/t/p/w500/";

export default async function page({
  params,
}: {
  params: { movieId: number };
}) {
  const movieData: MovieDetails = await getMovieDataById(params.movieId);
  const movieVideos: VideoResult = await getMovieVideosById(params.movieId);
  const movieCast: MovieCastResponse = await getMovieVideosById(params.movieId);

  // Find the first video with type "Trailer"
  const trailerVideo = movieVideos.results.find(
    (video) => video.type === "Trailer"
  );

  const cast = movieCast.cast.slice(10);

  return (
    <main className="py-16">
      {/* <div className="overflow-hidden w-screen">
        <img
          src={`${baseurl}${movieData.backdrop_path}`}
          className="h-auto w-full object-fill rounded transition-all hover:scale-110"
        />
      </div> */}
      <section className="container py-4">
        <div className="flex flex-col gap-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {movieData.title}
          </h1>
          <p>{movieData.overview}</p>
          <p>{movieData.popularity}</p>
          <p>{movieData.release_date}</p>

          <div className="flex flex-row gap-2">
            {movieData.genres.map((genres) => (
              <p>{genres.name}</p>
            ))}
          </div>

          {movieData.homepage !== "" && (
            <Link href={movieData.homepage}>
              <Button>
                Go To Site <Icons.upRight size={20} />
              </Button>
            </Link>
          )}
        </div>

        <div></div>
      </section>

      {trailerVideo && (
        <div className="px-4">
          <YouTubePlayer id={trailerVideo.key} />
        </div>
      )}
      <p>{movieData.video}</p>
    </main>
  );
}
