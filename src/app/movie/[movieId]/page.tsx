import CastCard from "@/components/cast-card";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import YouTubePlayer from "@/components/youtube-player";
import {
  getMovieCastById,
  getMovieDataById,
  getMovieVideosById,
} from "@/lib/fetchers";
import { MovieCastResponse, MovieDetails, VideoResult } from "@/types";
import Link from "next/link";
import React from "react";

const baseurl = "https://image.tmdb.org/t/p/w500/";
const baseurl_backdrop =
  "https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/";

export default async function page({
  params,
}: {
  params: { movieId: number };
}) {
  const movieData: MovieDetails = await getMovieDataById(params.movieId);
  const movieVideos: VideoResult = await getMovieVideosById(params.movieId);
  const movieCast: MovieCastResponse = await getMovieCastById(params.movieId);

  // Find the first video with type "Trailer"
  const trailerVideo = movieVideos.results.find(
    (video) => video.type === "Trailer"
  );

  //Get first 12 cast list
  const castList = movieCast.cast.slice(0, 12);

  const imdb_url = `https://www.imdb.com/title/${movieData.imdb_id}/`;

  return (
    <main className="py-16">
      <div className="absolut sticky z-50 top-16 left-16">
        <Link href={`/`}>
          <Button variant={"ghost"}>
            <Icons.ArrowLeft size={20} />
            back
          </Button>
        </Link>
      </div>
      <section className="overflow-hidden w-screen md:relative md:h-screen ">
        <img
          src={`${baseurl_backdrop}${movieData.backdrop_path}`}
          className="h-auto w-full object-cover filter brightness-50 md:blur-sm"
        />
        <div className="md:absolute inset-0 z-10 flex justify-center items-center">
          <div className="flex flex-col md:flex-row container">
            <div className="overflow-hidden rounded hidden md:block">
              <img
                src={`${baseurl}${movieData.poster_path}`}
                className="h-auto w-auto object-cover aspect-[2/3] transition-all hover:scale-110"
              />
            </div>
            <div className="flex flex-col gap-4 container">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {movieData.title}
              </h1>

              <p className="max-w-[60ch]">{movieData.overview}</p>
              <p>
                <b>Release Date:</b> {movieData.release_date}
              </p>
              <p className="flex flex-row gap-2">
                <b>Status:</b> {movieData.status}
                <span className="relative flex h-4 w-4 items-center">
                  <span className="absolute h-full w-full rounded-full bg-green-500 animate-pulse" />
                  <span className="absolute inset-1/4 h-1/2 w-1/2 rounded-full bg-green-400 animate-pulse" />
                </span>
              </p>

              <div className="flex flex-row flex-wrap gap-2">
                <p className="font-bold">Genres: </p>
                {movieData.genres.map((genres) => (
                  <p>{genres.name}</p>
                ))}
              </div>

              <div className="flex flex-row">
                {movieData.homepage !== "" && (
                  <Link href={movieData.homepage}>
                    <Button variant={"ghost"}>
                      WEBSITE <Icons.upRight size={20} />
                    </Button>
                  </Link>
                )}
                {movieData.homepage !== "" && (
                  <Link href={imdb_url}>
                    <Button variant={"ghost"}>
                      IMDB <Icons.upRight size={20} />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        {trailerVideo?.key && (
          <>
            <h2 className="scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Trailer
            </h2>
            <div className="px-4">
              <YouTubePlayer id={trailerVideo.key} />
            </div>
          </>
        )}

        <section>
          <h2 className="scroll-m-20 border-b py-4 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Cast
          </h2>
          <div className="flex flex-wrap gap-2 justify-evenly">
            {castList.map((cast, index) => (
              <CastCard key={index} cast={cast} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
