"use client";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { ModeToggle } from "../inputs/ModeToggle";

export const Navbar = () => {
  const scrolled = useScroll();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-md"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {/* {isLoading && <Spinner />} */}
        {/* {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Get Jotion free</Button>
            </SignInButton>
          </>
        )} */}
        {/* {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/documents">Enter Jotion</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )} */}
        <ModeToggle />
      </div>
    </div>
  );
};
