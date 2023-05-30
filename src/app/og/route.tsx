import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        <div tw="bg-purple-500 justify-center h-full items-center flex">
          <div tw="flex flex-col w-full py-12 px-16 justify-center items-center">
            <div tw="flex flex-col">
              <h1 tw="text-white text-6xl font-bold mb-6 select-none">
                Welcome to MovieKyuu
              </h1>
              <p tw="text-white text-lg mb-10">
                Discover and explore a vast collection of movies.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
