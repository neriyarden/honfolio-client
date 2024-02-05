/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hQO0IAxQcAA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import Link from "next/link";

import { DollarSignIcon } from "@/components/icons/DollarSignIcon";
import { LogOutIcon } from "@/components/icons/LogOutIcon";
import { LineChart } from "@/components/LineChart";
import { PieChart } from "@/components/PieChart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function UserSpace() {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="flex w-64 flex-col items-center justify-between bg-gray-100 p-4 dark:bg-gray-800">
        <div>
          <Image
            alt="User avatar"
            className="h-24 w-24 rounded-full"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "cover",
            }}
            width="100"
          />
          <h2 className="mt-4 text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
            John Doe
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            Total Portfolio Value: $45,231.89
          </p>
        </div>
        <div className="flex w-full flex-col items-center">
          <Link
            className="mt-4 w-full rounded bg-white p-2 text-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            href="#"
          >
            Profile
          </Link>
          <button
            className="mt-4 flex w-full items-center justify-center rounded bg-white p-2 text-center text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            type="button"
          >
            <LogOutIcon className="mr-2 h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>
      <div className="flex w-full flex-col">
        <header className="flex h-16 shrink-0 items-center border-b px-4 md:px-6">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
              href="#"
            >
              <DollarSignIcon className="h-6 w-6" />
              <span className="sr-only">My Stocks</span>
            </Link>
            <Link className="font-bold" href="#">
              Dashboard
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Transactions
            </Link>
            <Link className="text-gray-500 dark:text-gray-400" href="#">
              Settings
            </Link>
          </nav>
        </header>
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
          <div>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Stock</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Holdings</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">AAPL</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell className="text-right">$15,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">GOOGL</TableCell>
                    <TableCell>$2,500.00</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell className="text-right">$50,000.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">AMZN</TableCell>
                    <TableCell>$3,500.00</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell className="text-right">$35,000.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardDescription>Portfolio Value</CardDescription>
                <CardTitle>$45,231.89</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart className="aspect-[3/4] w-full" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Sector Distribution</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart className="aspect-[3/4] w-full" />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
