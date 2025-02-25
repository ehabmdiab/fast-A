import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Function to merge tailwind classes together without overlapping.
 *
 * @param inputs - contains the classes to be merged.
 *
 * @returns the merged classes.
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
