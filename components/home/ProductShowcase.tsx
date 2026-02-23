"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Cul1, RoadKerb, WallCopping } from "@/public/assets/index";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductShowcase() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef(null);

  const categories = [
    {
      title: "Infrastructure",
      img: Cul1,
      items: ["Culverts (300-900mm)", "IBD 300mm"],
    },
    {
      title: "Road & Pave",
      img: RoadKerb,
      items: ["Road Kerbs", "Paving Slabs"],
    },
    {
      title: "Finishing",
      img: WallCopping,
      items: ["Wall Coping", "Pillow Coping"],
    },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const ctx = gsap.context(() => {
      // Reveal Product Cards
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          },
        },
      );

      // Parallax for the thick architectural background stripes
      gsap.to(".architectural-stripes", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 lg:py-48 overflow-hidden bg-[#1A365D]"
    >
      {/* --- FULL BLUE DYNAMIC PATTERN BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base Layer: Deep Navy */}
        <div className="absolute inset-0 bg-[#1A365D]" />

        {/* Layer 1: Massive Architectural Stripes (Lighter Blue) */}
        <div
          className="architectural-stripes absolute inset-0 w-[150%] h-[150%] opacity-10"
          style={{
            backgroundImage: `linear-gradient(115deg, #1E3A8A 25%, transparent 25%, transparent 50%, #1E3A8A 50%, #1E3A8A 75%, transparent 75%, transparent 100%)`,
            backgroundSize: `400px 1000px`,
            transform: 'rotate(-5deg)'
          }}
        />

        {/* Layer 2: Subtle Mesh Texture Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https:www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {/* Layer 3: Vignette Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] opacity-60" />
      </div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">

        {/* Header Section (Adjusted for Full Blue Theme) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#4A69BD]" />
              <span className="text-[#4A69BD] text-[10px] font-bold uppercase tracking-[0.5em]">
                The Collection
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.85] tracking-tighter">
              Mastered <br />
              <span className="italic font-light text-[#4A69BD]/60">Form & Function.</span>
            </h2>
          </div>
          <div className="max-w-xs border-l border-white/10 pl-8 pb-2">
            <p className="text-[#BDC3C7] text-[10px] lg:text-[11px] uppercase tracking-[0.25em] leading-loose opacity-80">
              Standardized precision for large-scale development and high-end residential architecture.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="product-card group relative h-112.5 md:h-150 overflow-hidden border border-white/20 transition-colors duration-500 rounded-2xl"
            >
              {/* Image Layer */}
              <div className="absolute inset-0 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-40 group-hover:opacity-100">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dynamic Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-70"
                style={{
                  background: `linear-gradient(to top, #1A365D 0%, transparent 100%)`,
                }}
              />

              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 transition-all duration-500 xl:group-hover:bottom-16">
                <span
                  className="font-serif italic text-sm mb-2 block text-[#4A69BD]"
                >
                  0{i + 1}
                </span>
                <h3 className="text-xl lg:text-xl md:text-3xl font-light text-white uppercase tracking-widest mb-4">
                  {cat.title}
                </h3>

                {/* RESPONSIVE VISIBILITY: 
                   - Visible by default (Mobile, iPad, iPad Pro)
                   - xl:opacity-0: Hidden on Large Laptops/Desktops
                   - xl:group-hover:opacity-100: Reveal on hover for Desktops
                */}
                <ul className="space-y-2 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-all duration-500">
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-white opacity-60 text-[10px] md:text-xs uppercase tracking-widest border-b border-white/10 pb-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}