import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jotion",
  description: "The connected workspace where better, faster work happens.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo.svg",
        href: "/images/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo-dark.svg",
        href: "/images/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* <ConvexClientProvider> */}
        {/* <EdgeStoreProvider> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jotion-theme"
        >
          {/* <Toaster position="bottom-center" /> */}
          {/* <ModalProvider /> */}
          <Navbar />
          <section className="h-full pt-40">{children}</section>
        </ThemeProvider>
        {/* </EdgeStoreProvider>
        </ConvexClientProvider> */}
      </body>
    </html>
  );
}
