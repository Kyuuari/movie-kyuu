import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MovieKyuu",
  description: "Queue up your favourite movies",
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
      </body>
    </html>
  );
}
