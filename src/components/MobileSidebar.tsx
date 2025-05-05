import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function MobileSidebar() {
  // Update these links to match your main navigation
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/generate-program", label: "Generate" },
    { href: "/profile", label: "Profile" },
    // Add other links if needed, e.g., a link to '/plans' if you have that page
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          {" "}
          <Menu className="h-6 w-6" /> {/* Slightly larger icon */}
          <span className="sr-only">Toggle Navigation Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pt-10">
        <nav className="grid gap-4 text-lg font-medium">
          {navLinks.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
