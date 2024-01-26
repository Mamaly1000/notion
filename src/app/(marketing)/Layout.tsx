import { Navbar } from "@/components/shared/Navbar";

import '../globals.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full bg-red-800 min-w-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
