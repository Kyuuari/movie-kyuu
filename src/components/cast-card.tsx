import { CastMember } from "@/types";
import React from "react";
import { Icons } from "./icons";

type Props = {
  cast: CastMember;
};

const baseurl = "https://image.tmdb.org/t/p/w500/";

export default function CastCard({ cast }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      {cast.profile_path ? (
        <>
          <div className="overflow-hidden rounded w-[200px]">
            <img
              alt={`${cast.name}`}
              aria-label={`${cast.name} photo`}
              src={`${baseurl}${cast.profile_path}`}
              className="h-auto w-auto object-cover aspect-[2/3] rounded transition-all"
            />
          </div>
        </>
      ) : (
        <div className="overflow-hidden rounded w-[200px]">
          <Icons.user className="h-full w-full object-cover aspect-[2/3] rounded transition-all" />
        </div>
      )}

      <p>{cast.name}</p>
      <p className="text-xs text-muted-foreground text-center flex flex-wrap">
        {cast.character}
      </p>
    </div>
  );
}
