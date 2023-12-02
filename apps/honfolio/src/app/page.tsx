import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Honfolio",
};

export default function Page() {
  return <h1 className="p-3 py-2 text-red-800">Hello, Next.js!</h1>;
}
