import React from "react";
import MainNav from "./main-nav";
// import { CommandSearch } from "./command-search";
// import { Icons } from "./icons";
import { SearchBar } from "../search-bar";

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="supports-backdrop-blur:bg-background/50 fixed top-0 z-40 w-full border-b bg-background/50 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
