"use client";

import Link from "next/link";
import Image from "next/image";
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
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* NAV BAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 sm:px-16 transition-all duration-700  ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-500 py-4 shadow-sm"
            : "bg-transparent py-8 "
        }`}
      >
        <div className="max-w-360 mx-auto flex justify-between items-center">
          
          {/* Brand */}
          <Link href="/" className="relative z-50 flex items-center group transition-transform duration-500 hover:scale-105">
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image 
                src={LogoLight} 
                alt="Titern" 
                fill 
                className="object-contain" 
                priority
              />
            </div>
            <div className="ml-4 flex flex-col">
              <span className={`font-serif text-xl tracking-tight font-bold transition-colors duration-500 ${
                isScrolled ? "text-[#1A365D]" : "text-white"
              }`}>
                TITERN
              </span>
              <span className={`text-[9px] tracking-[0.4em] uppercase font-bold transition-colors duration-500 ${
                isScrolled ? "text-[#4A69BD]" : "text-white/80"
              }`}>
                CONCRETE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 hover:scale-110 active:scale-95 ${
                  isScrolled 
                    ? "text-[#1A365D]/70 hover:text-[#1A365D]" 
                    : "text-white hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className={`px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-sm hover:scale-110 active:scale-95 shadow-sm ${
                isScrolled
                  ? "bg-[#1A365D] text-white hover:bg-[#4A69BD]"
                  : "bg-white text-[#1A365D] hover:shadow-xl"
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button
              className="flex flex-col gap-2 p-2 transition-transform hover:scale-110"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <span className={`h-0.5 transition-all duration-500 ${
                isScrolled || isSidebarOpen ? "bg-[#1A365D]" : "bg-white"
              } ${isSidebarOpen ? "w-8 rotate-45 translate-y-2.5" : "w-8"}`} />
              
              <span className={`h-0.5 transition-all duration-500 ${
                isScrolled || isSidebarOpen ? "bg-[#1A365D]" : "bg-white"
              } ${isSidebarOpen ? "opacity-0" : "w-5 self-end"}`} />
              
              <span className={`h-0.5 transition-all duration-500 ${
                isScrolled || isSidebarOpen ? "bg-[#1A365D]" : "bg-white"
              } ${isSidebarOpen ? "w-8 -rotate-45 -translate-y-2.5" : "w-8"}`} />
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
        <div className="absolute inset-0 bg-white/98 backdrop-blur-2xl" />
        <div
          className={`relative h-full flex flex-col justify-center items-center gap-10 transition-transform duration-700 ${
            isSidebarOpen ? "translate-y-0" : "translate-y-12"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsSidebarOpen(false)}
              className="text-4xl font-serif italic text-[#1A365D] opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-500"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="mt-8 px-12 py-5 bg-[#1A365D] text-white text-xs uppercase tracking-[0.4em] font-bold hover:scale-110 transition-transform"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}