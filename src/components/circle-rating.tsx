import { cn } from "@/lib/utils";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ProgressProps {
  percent: number;
}

export const CircleRating = ({ percent }: ProgressProps) => {
  const circumference = 2 * Math.PI * 30; // Circumference of the circle

  let circleColor;
  if (percent >= 0 && percent <= 25) {
    circleColor = cn("text-red-500");
  } else if (percent > 25 && percent <= 50) {
    circleColor = cn("text-orange-500");
  } else if (percent > 50 && percent <= 75) {
    circleColor = cn("text-yellow-400");
  } else {
    circleColor = cn("text-green-500");
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center justify-center overflow-hidden rounded-full hover:scale-125 transition-all">
            <svg className="w-20 h-20">
              <circle
                className="text-gray-300"
                strokeWidth="5"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <circle
                className={cn(circleColor)}
                strokeWidth="5"
                strokeDasharray={circumference}
                strokeDashoffset={
                  circumference - (percent / 100) * circumference
                }
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
            </svg>
            <span
              className={cn(circleColor, "absolute text-xl select-none")}
            >{`${percent}`}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>User Ratings</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
