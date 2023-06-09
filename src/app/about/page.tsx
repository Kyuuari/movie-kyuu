import { Icons } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16 pb-8">
      <div className="bg-gradient-to-r w-full from-violet-500 to-fuchsia-500 py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto container">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 select-none">
            About
          </h1>
          <div className="flex flex-col gap-2">
            <p>
              MovieKyuu is just a small website I built for finding and sharing
              movies that interest you.
            </p>
            <p>
              <b>NO SIGNUP REQUIRED</b> all movies added to list are saved
              locally to device.
            </p>
          </div>
        </div>
      </div>
      <article className="flex flex-col gap-2 h-1/2 max-w-4xl mx-auto container py-8">
        <div className="justify-start self-start py-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl my-4 font-semibold tracking-tight transition-colors first:mt-0">
            Source and Socials
          </h2>

          <div>
            Source code is available here on my{" "}
            <a
              href={"https://github.com/Kyuuari/movie-kyuu"}
              target="_blank"
              rel="noreferrer"
              aria-label="github link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              GitHub
            </a>{" "}
            if you liked the project and want to see more like it feel free to
            follow me at{" "}
            <a
              href={"https://twitter.com/Kyu_uari"}
              target="_blank"
              rel="noreferrer"
              aria-label="twitter link"
              className="font-medium underline underline-offset-4 hover:opacity-30"
            >
              @Kyu_uari
            </a>
          </div>
        </div>

        <div className="py-4">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            FAQ
          </h2>
          {/* <div className="max-w-4xl mx-auto container"> */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why MovieKyuu?</AccordionTrigger>
              <AccordionContent>
                MovieKyuu is a play on words with &quot;Queue&quot; and my
                username 😅
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Where is my list being saved?</AccordionTrigger>
              <AccordionContent>
                All saved data is being stored into your browsers local storage.
                Requiring no signups or logins, your data is yours.
                <br />
                <br />
                <b>
                  Note: Because data is stored in browser, cleaning browser
                  cache can result in emptying your list, and lists are not
                  transferable to other devices.
                </b>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        {/* </div> */}
      </article>
    </main>
  );
}
