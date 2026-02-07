"use client";

import Link from "next/link";
import Image from "next/image";
import LogoDark from "@/public/assets/Logo.png";
import LogoLight from "@/public/assets/Logo2.2.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* NAV BAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-10 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--card-border)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-450 mx-auto flex justify-between items-center">
          
          {/* Brand */}
          <Link href="/" className="relative z-50 flex items-center">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image src={LogoDark} alt="Titern" fill className="hidden dark:block transition-opacity duration-500" />
              <Image src={LogoLight} alt="Titern" fill className="block dark:hidden transition-opacity duration-500" />
            </div>
            <div className="ml-3 flex flex-col">
              <span className="text-[var(--foreground)] font-black tracking-tighter text-lg uppercase transition-colors duration-500">
                Titern
              </span>
              <span className="text-[var(--stroke-color)] text-[8px] tracking-[0.3em] uppercase font-bold transition-colors duration-500">
                Concrete
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.3em] font-medium
                  opacity-60 hover:opacity-100
                  hover:text-[var(--stroke-color)]
                  transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-8 py-3 bg-[var(--foreground)] text-[var(--background)]
                text-[10px] uppercase tracking-[0.2em] font-bold
                hover:bg-[var(--stroke-color)] hover:text-white hover:-translate-y-1.5
                transition-all duration-500"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span className={`h-px bg-[var(--foreground)] transition-all duration-500 ${
                isSidebarOpen ? "w-8 rotate-45 translate-y-2" : "w-8"
              }`} />
              <span className={`h-px bg-[var(--foreground)] transition-all duration-500 ${
                isSidebarOpen ? "opacity-0" : "w-5 self-end"
              }`} />
              <span className={`h-px bg-[var(--foreground)] transition-all duration-500 ${
                isSidebarOpen ? "w-8 -rotate-45 -translate-y-1" : "w-8"
              }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-700 ${
          isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[var(--background)]/95 backdrop-blur-2xl" />
        <div
          className={`relative h-full flex flex-col justify-center items-center gap-8
            transition-transform duration-700 ${
              isSidebarOpen ? "translate-y-0" : "translate-y-10"
            }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className="text-5xl font-black uppercase tracking-tighter
                text-[var(--foreground)] opacity-20
                hover:opacity-100 hover:text-[var(--stroke-color)]
                transition-all duration-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
