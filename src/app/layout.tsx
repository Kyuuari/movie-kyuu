import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieKyuu",
  description:
    "Discover and find you next favorite movie, save it and share it with your friends",
  openGraph: {
    title: `MovieKyuu`,
    images: "https://movie-kyuu.vercel.app/og",
    description:
      "Discover and find you next favorite movie, save it and share it with your friends",
    siteName: "MovieKyuu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "dark")}>
        <SiteHeader />
        {children}
        <Toaster />
        <SiteFooter />
      </body>
    </html>
  );
}
