import { MoviesResponse } from "../types";
import React from "react";

async function getData() {
  const res = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=1a27fd0c1cfa5314510b15ddb9bf7d00"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

type Props = {};

export const MovieList = async (props: Props) => {
  const movieData = await getData();
  const [movie] = await Promise.all([movieData]);
  return (
    <div>
      MovieList
      <div>{JSON.stringify(movie.results)}</div>
    </div>
  );
};
