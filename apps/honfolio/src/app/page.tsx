import { Metadata } from "next";
import { DemoButton } from "@neri/ui-components";

export const metadata: Metadata = {
  title: "My Honfolio",
};

export default function Page() {
  return (
    <>
      <h1 className="text-red-800">Hello, Next.js!</h1>
      <DemoButton>my button</DemoButton>
    </>
  );
}
