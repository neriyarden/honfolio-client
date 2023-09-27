import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'My Honfolio',
}
 

export default function Page() {
  return <h1 className="text-red-800">Hello, Next.js!</h1>
}