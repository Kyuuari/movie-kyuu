"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { SidebarOpen } from "lucide-react";

// import { docsConfig } from "@/config/docs";
// import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "@/components/icons";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-4 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent size="full" position="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <div className="flex flex-row flex-nowrap items-center gap-2">
            <div className="bg-purple-600 h-8 w-8 rounded-full text-center items-center flex justify-center">
              🎬
            </div>
            <span className="font-bold sm:inline-block">{"MovieKyuu"}</span>
          </div>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-3">
            <MobileLink href="/movie" onOpenChange={setOpen}>
              Movies
            </MobileLink>
            <MobileLink href="/my-list" onOpenChange={setOpen}>
              My List
            </MobileLink>
            <MobileLink href="/about" onOpenChange={setOpen}>
              About
            </MobileLink>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={(cn(className), "py-8 font-bold")}
      {...props}
    >
      {children}
    </Link>
  );
}
