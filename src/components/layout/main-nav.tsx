import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

type Props = {};

export default function MainNav({}: Props) {
  return (
    <div className="mr-4 font-display hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <div className="flex flex-row flex-nowrap items-center gap-2">
          <div className="bg-purple-600 h-8 w-8 rounded-full text-center items-center flex justify-center">
            🎬
          </div>
          <span className="font-bold sm:inline-block">{"MovieKyuu"}</span>
        </div>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/movie"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Movies
        </Link>
        <Link
          href="/my-list"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          My List
        </Link>
        <Link
          href="/about"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          About
        </Link>
      </nav>
    </div>
  );
}
