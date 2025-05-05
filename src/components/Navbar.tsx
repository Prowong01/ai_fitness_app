"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { MobileSidebar } from "./MobileSidebar"; // Import the MobileSidebar

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3">
      <div className="container mx-auto flex items-center justify-between gap-4 p-1">
        {/* Mobile Sidebar Trigger - Appears only on small screens */}
        <div className="md:hidden">
          <MobileSidebar />
        </div>

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-4 h-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            code<span className="text-primary">flex</span>.ai
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 flex-grow justify-end">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
            </>
          ) : null}
        </nav>

        {/* Auth Buttons / User Button - Always visible */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <>
              {/* Optional: Move Get Started button here if desired on all screen sizes */}
              {/* <Button asChild size="sm" className="hidden sm:flex">
                 <Link href="/generate-program">Get Started</Link>
               </Button> */}
              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            // Show Sign In and Sign Up buttons on all screen sizes when logged out
            <>
              <SignInButton>
                <Button
                  variant={"ghost"}
                  size="sm"
                  className="text-primary hover:text-primary/90 hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
