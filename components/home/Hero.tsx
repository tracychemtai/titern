"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  // Handle mounting to prevent hydration mismatch when checking document classes
  useEffect(() => {
    setMounted(true);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([logoRef.current, ".reveal-text"], { y: 60, opacity: 0 });

      tl.to(logoRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        delay: 0.2,
      })
      .to(".reveal-text", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      }, "-=0.8");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] lg:min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white flex items-center overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors duration-500"
    >
      <div className="container mx-auto px-6 2xl:max-w-400 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-x border-black/5 dark:border-white/5">
          
          {/* Branding Section */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5 p-8 md:p-12 lg:p-20">
            <div 
              ref={logoRef} 
              className="relative w-full aspect-square max-w-50 sm:max-w-70 lg:max-w-100 mx-auto lg:mx-0 transition-all duration-500"
            >
              {/* Dark Mode Logo (Logo.png) */}
              <div className="hidden dark:block relative w-full h-full">
                <Image 
                  src='/assets/Logo.png' 
                  alt="Titern Logo Dark" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
              
              {/* Light Mode Logo (Logo2.2.png) */}
              <div className="block dark:hidden relative w-full h-full">
                <Image 
                  src='/assets/Logo2.2.png' 
                  alt="Titern Logo Light" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Block */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-between p-8 md:p-16 lg:p-24 relative bg-gray-50 dark:bg-[#0d0d0d] transition-colors duration-500">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10 grayscale pointer-events-none bg-[url('/assets/Road_kerb.jpeg')] bg-cover bg-center" />
            
            <div className="relative z-10 py-10 lg:py-0">
              <span className="reveal-text text-[#4E67A5] dark:text-gray-400 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] mb-6 block">
                01 — Precast Excellence
              </span>
              <h2 className="reveal-text text-3xl sm:text-5xl xl:text-7xl font-light leading-[1.2] lg:leading-[1.1] mb-8 lg:mb-12 tracking-tighter">
                Building Kenya’s future with <span className="italic font-serif text-[#4E67A5] dark:text-white/40">precision-cast</span> solutions.
              </h2>
              
              <div className="reveal-text flex flex-wrap gap-4 sm:gap-8">
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto text-center group relative border border-black/20 dark:border-white/20 px-10 lg:px-12 py-4 lg:py-5 overflow-hidden hover:border-black dark:hover:border-white hover:-translate-y-1.5 transition-all"
                >
                  <span className="relative z-10 uppercase text-[10px] sm:text-[11px] tracking-[0.3em] font-bold group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
                    Get Quote
                  </span>
                  <div className="absolute inset-0 bg-[#4E67A5] dark:bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Link>
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="reveal-text mt-12 lg:mt-24 border-t border-black/10 dark:border-white/10 pt-8 lg:pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 font-medium">
              <div className="flex gap-6 sm:gap-10">
                <span>Roads</span>
                <span>Infrastructure</span>
                <span className="hidden sm:inline">Real Estate</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <Link href="/products" className="cursor pointer">
                 <span className="group-hover:text-black dark:group-hover:text-white transition-colors">Scroll</span> 
                </Link>
                 <span className="w-12 lg:w-16 h-px bg-black/20 dark:bg-white/20 group-hover:w-24 dark:group-hover:bg-yellow-500 group-hover:bg-[#4E67A5] transition-all duration-700"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}