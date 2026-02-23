"use client"; 

import { useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const inter = Inter({ subsets: ['latin'] });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const stripesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global parallax for the background stripes
      gsap.to(stripesRef.current, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#1A365D] relative min-h-screen`}>
        {/* --- GLOBAL DYNAMIC BACKGROUND LAYER --- */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
          {/* Base Layer: Deep Navy */}
          <div className="absolute inset-0 bg-[#1A365D]" />

          {/* Layer 1: Massive Architectural Stripes */}
          <div
            ref={stripesRef}
            className="absolute inset-x-[-25%] inset-y-[-25%] w-[150%] h-[150%] opacity-20"
            style={{
              backgroundImage: `linear-gradient(115deg, #1E3A8A 25%, transparent 25%, transparent 50%, #1E3A8A 50%, #1E3A8A 75%, transparent 75%, transparent 100%)`,
              backgroundSize: `400px 1000px`,
              transform: 'rotate(-5deg)'
            }}
          />

          {/* Layer 2: Mesh Texture */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

          {/* Layer 3: Subtle Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] opacity-60" />
        </div>

        <Navbar />
        <main className="relative z-10 pt-8 lg:pt-0 2xl:pt-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}