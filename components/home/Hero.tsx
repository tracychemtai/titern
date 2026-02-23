/* eslint-disable react/no-unescaped-entities */
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import Link from "next/link";
// import Image from "next/image";
// import { BG2 } from "@/public/assets"; // Ensure this import path is correct

// export default function Hero() {
//   const containerRef = useRef(null);
//   const logoRef = useRef(null);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
    
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

//       gsap.set([logoRef.current, ".reveal-text"], { y: 60, opacity: 0 });

//       tl.to(logoRef.current, {
//         y: 0,
//         opacity: 1,
//         duration: 1.5,
//         delay: 0.2,
//       })
//       .to(".reveal-text", {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         stagger: 0.15,
//       }, "-=0.8");
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const bgUrl = typeof BG2 === 'string' ? BG2 : BG2?.src;

//   return (
//     <section 
//       ref={containerRef} 
//       className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden border-b border-black/5 dark:border-white/5 transition-colors duration-500"
//     >
//       {/* BACKGROUND LAYER */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
//         style={{ backgroundImage: `url(${bgUrl})` }}
//       />

//       {/* TRAPEZIUM OVERLAY (Light Mode Only) */}
//       <div 
//         className="absolute inset-y-0 right-0 w-[60%] bg-white/5 backdrop-blur-md z-10 dark:hidden"
//         style={{
//           clipPath: "polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)"
//         }}
//       />
      
//       {/* Global Image Overlay for Contrast */}
//       <div className="absolute inset-0 bg-black/5 dark:bg-[#0a0a0a]/80 z-0" />

//       <div className="container mx-auto px-6 2xl:max-w-400 relative z-20 mt-28 2xl:mt-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-x border-black/5 dark:border-white/5">
          
//           {/* Branding Section */}
//           <div className="col-span-1 lg:col-span-5 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/5 dark:border-white/5 p-8 md:p-12 lg:p-20">
//             <div 
//               ref={logoRef} 
//               className="relative w-full aspect-square max-w-50 sm:max-w-70 lg:max-w-100 mx-auto lg:mx-0 transition-all duration-500"
//             >
//               <div className="hidden dark:block relative w-full h-full">
//                 <Image src='/assets/Logo.png' alt="Titern Logo Dark" fill className="object-contain" priority />
//               </div>
//               <div className="block dark:hidden relative w-full h-full">
//                 <Image src='/assets/Logo2.3.png' alt="Titern Logo Light" fill className="object-contain" priority />
//               </div>
//             </div>
//           </div>

//           {/* Content Block */}
//           <div className="col-span-1 lg:col-span-7 flex flex-col justify-between p-8 md:p-16 lg:p-24 relative transition-all duration-500
//             bg-white/15 backdrop-blur-xl shadow-2xl border border-white/20 
//             dark:bg-[#0d0d0d]/90 dark:backdrop-blur-none dark:shadow-none dark:border-none">
            
//             <div className="absolute inset-0 opacity-0 dark:opacity-20 pointer-events-none bg-[url('/assets/Road_kerb.jpeg')] bg-cover bg-center" />
            
//             <div className="relative z-10 py-10 lg:py-0">
//               <span className="reveal-text text-[#4E67A5] dark:text-gray-400 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] mb-6 block">
//                 01 — Precast Excellence
//               </span>
//               <h2 className="reveal-text text-3xl sm:text-5xl xl:text-7xl font-light leading-[1.2] lg:leading-[1.1] mb-8 lg:mb-12 tracking-tighter text-black dark:text-white">
//                 Building Kenya’s future with <span className="italic font-serif text-[#4E67A5] dark:text-white/40">precision-cast</span> solutions.
//               </h2>
              
//               <div className="reveal-text flex flex-wrap gap-4 sm:gap-8">
//                 <Link 
//                   href="/contact" 
//                   className="w-full sm:w-auto text-center group relative border border-black/20 dark:border-white/20 px-10 lg:px-12 py-4 lg:py-5 overflow-hidden hover:border-black dark:hover:border-white hover:-translate-y-1.5 transition-all"
//                 >
//                   <span className="relative z-10 uppercase text-[10px] sm:text-[11px] tracking-[0.3em] font-bold group-hover:text-white dark:group-hover:text-black transition-colors duration-300 text-black dark:text-white">
//                     Get Quote
//                   </span>
//                   <div className="absolute inset-0 bg-[#4E67A5] dark:bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
//                 </Link>
//               </div>
//             </div>

//             <div className="reveal-text mt-12 lg:mt-24 border-t border-black/10 dark:border-white/10 pt-8 lg:pt-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 font-medium">
//               <div className="flex gap-6 sm:gap-10">
//                 <span>Roads</span>
//                 <span>Infrastructure</span>
//                 <span className="hidden sm:inline">Real Estate</span>
//               </div>
//               <div className="flex items-center gap-4 group cursor-pointer">
//                 <Link href="/products">
//                  <span className="group-hover:text-black dark:group-hover:text-white transition-colors">Scroll</span> 
//                 </Link>
//                  <span className="w-12 lg:w-16 h-px bg-black/20 dark:bg-white/20 group-hover:w-24 dark:group-hover:bg-yellow-500 group-hover:bg-[#4E67A5] transition-all duration-700"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const stripesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

      // Initial States
      gsap.set(".reveal-item", { y: 40, opacity: 0 });
      gsap.set(imageContainerRef.current, { scale: 1.2, opacity: 0 });

      // Entrance Animation
      tl.to(imageContainerRef.current, {
        scale: 1,
        opacity: 1,
        duration: 2,
      })
      .to(".reveal-item", {
        y: 0,
        opacity: 1,
        stagger: 0.15,
      }, "-=1.5");
      
      // Dynamic Stripe Parallax
      gsap.to(stripesRef.current, {
        yPercent: -20,
        xPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-transparent flex flex-col overflow-hidden"
    >
      <div className="grow flex flex-col md:flex-row w-full min-h-screen">
        
        {/* Left Side: Dynamic Blue Pattern Block */}
        <div 
          ref={leftContentRef}
          className="w-full md:w-[45%] bg-transparent flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-24 md:py-0 mt-20 md:mt-0 relative z-10 md:border-r md:border-white/10 overflow-hidden"
        >
          {/* --- THE DYNAMIC PATTERN (Explicitly inside the Left Block) --- */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Base Layer: Deep Navy */}
            <div className="absolute inset-0 bg-[#1A365D]" />

            {/* Layer 1: Massive Architectural Stripes (Increased opacity for visibility) */}
            <div
              ref={stripesRef}
              className="absolute inset-x-[-25%] inset-y-[-25%] w-[150%] h-[150%] opacity-20"
              style={{
                backgroundImage: `linear-gradient(115deg, #1E3A8A 25%, transparent 25%, transparent 50%, #1E3A8A 50%, #1E3A8A 75%, transparent 75%, transparent 100%)`,
                backgroundSize: `350px 900px`,
                transform: 'rotate(-5deg)'
              }}
            />

            {/* Layer 2: Mesh Texture */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Layer 3: Radial Vignette to focus on text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] opacity-70" />
          </div>

          {/* Content Block: Higher z-index to stay above background */}
          <div className="max-w-xl space-y-[4vh] relative ">
            <div className="reveal-item w-16 h-px bg-transparent"></div>
            
            <p className="reveal-item text-[#A0AEC0] text-[clamp(9px,1vw,10px)] uppercase tracking-[0.5em] font-medium">
              Premium Precast Solutions
            </p>
            
            <h1 className="reveal-item text-white text-[clamp(2.5rem,5.5vw,6rem)] font-serif leading-[1.05] tracking-tight">
              Crafting <br /> 
              <span className="italic font-light text-[#BDC3C7]">Architectural</span> <br />
              Permanence.
            </h1>
            
            <p className="reveal-item text-[#BDC3C7] text-[clamp(0.875rem,1.2vw,1.125rem)] leading-relaxed max-w-[85%] font-light opacity-80">
              Bespoke concrete engineering for Kenya's most ambitious residential and infrastructure projects.
            </p>
            
            <div className="reveal-item pt-[2vh]">
              <button className="group relative flex items-center gap-6 text-white text-[10px] uppercase tracking-[0.4em] transition-all hover:scale-105 active:scale-95">
                Explore Solutions
                <span className="w-12 h-px bg-white group-hover:w-20 transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Side: Full-Bleed Image Section */}
        <div className="w-full md:w-[55%] h-[45vh] md:h-auto relative overflow-hidden bg-[#142a4a]">
          <div ref={imageContainerRef} className="absolute inset-0 w-full h-full">
            <Image 
              src="/assets/bg.jpg" 
              alt="Titern Construction" 
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </div>

          {/* Distinct Divider Line */}
          <div className="absolute inset-y-0 left-0 w-px bg-white/10 hidden md:block z-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;