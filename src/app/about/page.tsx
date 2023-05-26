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
              MovieKyuu is just a fun website I built for finding and sharing
              movies that interest you.
            </p>
            <p>
              <b>NO SIGNUP REQUIRED</b> all movies added to list are saved
              locally to device.
            </p>
          </div>
        </div>
      </div>
      <article className="flex flex-col gap-2 container items-center py-8">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          FAQ
        </h1>
        <div className="w-3/4 container">
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
                Requiring no signups or logins, your data is yours. <br />
                <b>
                  Note: Because data is stored in browser, cleaning browser
                  cache can result in emptying you list.
                </b>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why local storage?</AccordionTrigger>
              <AccordionContent>
                For me this was just a small project to play around with, I
                considered the option of adding login and signup functionality
                for users to save and store their favorite movies to a cloud
                based storage. However, for now I decided to go with local
                storage instead, main reason was I just want users to have fun
                with the app without the hassle of signing up for a small app
                like this and losing their data if I decide to use the database
                for another project
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </article>
    </main>
  );
}
