"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX, HiPhone } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-[#1A237E]/95 backdrop-blur-xl shadow-lg shadow-[#1A237E]/20 border-b border-[#FFC107]/10"
          : "bg-[#1A237E]/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2"
          aria-label="Edushine Fast Food Home"
        >
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Edushine
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#FFC107] sm:text-xs">
              Fast Food
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Primary Navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200 hover:bg-white/10 hover:text-[#FFC107]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#FFC107] px-6 py-2 font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/25 hover:bg-[#FFD54F]!"
          >
            <Link href="#menu">Order Now</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Call Button */}
          <Link
            href="tel:+2349067565256"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Call Edushine Fast Food"
          >
            <HiPhone className="h-5 w-5" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <HiOutlineX className="h-6 w-6" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Drawer */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[85%] max-w-sm transform bg-[#FDFCF0] shadow-2xl transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-[#1A237E]/10 px-6 py-5">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#1A237E]">
                Edushine
              </h2>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFC107]">
                Fast Food
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1A237E]/5 text-[#1A237E] hover:bg-[#1A237E]/10"
              aria-label="Close menu"
            >
              <HiOutlineX className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-6 py-6" aria-label="Mobile Navigation">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-[#1A237E] transition-colors hover:bg-[#1A237E]/5 hover:text-[#B71C1C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Card */}
            <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm border border-[#1A237E]/5">
              <p className="text-sm font-medium text-slate-500">
                Call to Order
              </p>
              <Link
                href="tel:+2349067565256"
                className="mt-1 block text-lg font-bold text-[#1A237E]"
              >
                +234 906 756 5256
              </Link>
              <p className="mt-2 text-sm text-slate-600">
                Fresh meals delivered fast across Abuja.
              </p>
            </div>

            {/* Mobile CTA */}
            <Button
              asChild
              className="mt-6 h-12 w-full rounded-full bg-[#FFC107] font-semibold text-[#1A237E] shadow-lg shadow-[#FFC107]/20 hover:bg-[#FFD54F]!"
            >
              <Link href="#menu" onClick={() => setIsOpen(false)}>
                Order Now
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
