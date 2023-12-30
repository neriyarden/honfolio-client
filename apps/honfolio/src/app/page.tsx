import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Honfolio",
};

export default function Page() {
  return (
    <div>
      <h1 className="p-3 py-2 text-red-800">Hello, Next.js!</h1>
      <Button>Click</Button>
    </div>
  );
}
