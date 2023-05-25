import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center min-w-full gap-4 px-8 md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Powered by{" "}
            <Link className="underline" href="https://www.themoviedb.org/">
              TMDB
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
