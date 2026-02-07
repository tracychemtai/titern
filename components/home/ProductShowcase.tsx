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
  const gridRef = useRef(null);

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
    setMounted(true);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
        },
      );
    }, gridRef);
    return () => ctx.revert();
  }, []);

  if (!mounted) return <div className="min-h-screen bg-[var(--background)]" />;

  return (
    <section
      ref={gridRef}
      className="py-20 md:py-32 bg-[var(--background)] transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--foreground)]">
            The{" "}
            <span
              className="italic text-transparent transition-all duration-500"
              style={{ WebkitTextStroke: "1px var(--stroke-color)" }}
            >
              Collections
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-1">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="product-card group relative h-112.5 md:h-150 overflow-hidden border border-black/5 dark:border-white/5 transition-colors duration-500"
            >
              <div className="absolute inset-0 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 opacity-30 dark:opacity-40 group-hover:opacity-100">
                <Image
                  src={cat.img}
                  alt={cat.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Dynamic Gradient uses CSS variable background */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-70"
                style={{
                  background: `linear-gradient(to top, var(--background) 0%, transparent 100%)`,
                }}
              />

              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 transition-all duration-500 group-hover:bottom-10 md:group-hover:bottom-16">
                <span
                  className="font-serif italic text-sm mb-2 block"
                  style={{ color: "var(--stroke-color)" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-[var(--foreground)] uppercase tracking-widest mb-4">
                  {cat.title}
                </h3>
                <ul className="space-y-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  {cat.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-[var(--foreground)] opacity-60 text-[10px] md:text-xs uppercase tracking-widest border-b border-black/10 dark:border-white/10 pb-2"
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
