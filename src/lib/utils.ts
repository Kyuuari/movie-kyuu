import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function percent(value: number): number {
  const percentage = Math.round(value * 10);
  return percentage;
}

export function formatDate(dateInput: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  const dateParts = dateInput.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
    undefined,
    options
  );

  return formattedDate;
}
