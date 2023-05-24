import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

type Props = {};

export default function MainNav({}: Props) {
  return (
    <div className="mr-4 flex font-display">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="bg-purple-600 h-full w-full aspect-square rounded-full text-center">
          🎬
        </span>
        {/* <Icons.logo aria-label="Home Icon" className="h-6 w-6" /> */}
        <span className="hidden font-bold sm:inline-block">{"MovieKyuu"}</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/movie"
          className={cn("transition-colors hover:text-foreground/80")}
        >
          Movies
        </Link>
      </nav>
    </div>
  );
}
