import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge tailwind classes with clsx utility for constructing className strings conditionally.
 *
 * @see
 * - [clsx](https://github.com/lukeed/clsx)
 * - [tailwind-merge](https://github.com/dcastil/tailwind-merge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
