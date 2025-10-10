import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/recent-projects?limit=6
// https://d2j83cbk-4000.inc1.devtunnels.ms/api/project/videos