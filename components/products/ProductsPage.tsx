"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ChevronRight } from "lucide-react";
import {
  Cul1,
  Cul2,
  Paving,
  IBD,
  RoadChannel,
  RoadKerb,
  ShallowDrain,
  SideSlabs,
  WallCopping,
} from "@/public/assets";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 products initially
  const productCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const masonryRef = useRef<HTMLDivElement>(null);

  // Flattened products for masonry grid
  const allProducts = [
    // Heavy Infrastructure
    { title: "Heavy Duty Kerbs", img: RoadKerb, desc: "K55 compliant structural edging.", category: "Heavy Infrastructure", size: "large", span: "md:col-span-2 md:row-span-2" },
    { title: "Inverted Block Drain", img: IBD, desc: "High-flow hydraulic efficiency.", category: "Heavy Infrastructure", size: "small", span: "md:col-span-1 md:row-span-1" },

    // Drainage Systems
    { title: "Culvert Pipes", img: Cul1, desc: "Reinforced transit solutions.", category: "Drainage Systems", size: "medium", span: "md:col-span-1 md:row-span-2" },
    { title: "Road Channels", img: RoadChannel, desc: "Surface water redirection.", category: "Drainage Systems", size: "small", span: "md:col-span-1 md:row-span-1" },
    { title: "Shallow Drains", img: ShallowDrain, desc: "Urban walkway drainage.", category: "Drainage Systems", size: "small", span: "md:col-span-1 md:row-span-1" },

    // Surface & Finishing
    { title: "Paving Slabs", img: Paving, desc: "Industrial grade pedestrian surfaces.", category: "Surface & Finishing", size: "medium", span: "md:col-span-2 md:row-span-1" },
    { title: "Wall Coping", img: WallCopping, desc: "Moisture protection & aesthetics.", category: "Surface & Finishing", size: "small", span: "md:col-span-1 md:row-span-1" },
    { title: "Side Slabs", img: SideSlabs, desc: "Pedestrian walkway solutions.", category: "Surface & Finishing", size: "small", span: "md:col-span-1 md:row-span-1" },
    { title: "Culvert 900mm", img: Cul2, desc: "Heavy-duty water conveyance.", category: "Drainage Systems", size: "medium", span: "md:col-span-2 md:row-span-1" },
  ];

  const visibleProducts = allProducts.slice(0, visibleCount);
  const hasMore = visibleCount < allProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allProducts.length));

    // Animate new cards after they're added
    setTimeout(() => {
      const newCards = productCardsRef.current.slice(visibleCount, visibleCount + 3);
      gsap.fromTo(newCards.filter(Boolean),
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }, 50);
  };

  useGSAP(() => {
    // Initial states for visible cards
    productCardsRef.current.slice(0, visibleCount).forEach((card) => {
      if (card) {
        gsap.set(card, { y: 50, opacity: 0, scale: 0.95 });
      }
    });

    // Staggered reveal animation for masonry grid
    gsap.to(productCardsRef.current.slice(0, visibleCount).filter(Boolean), {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: {
        amount: 1.5,
        from: "random"
      },
      ease: "power3.out",
      scrollTrigger: {
        trigger: masonryRef.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse"
      }
    });

    // Parallax effect on images within cards
    productCardsRef.current.slice(0, visibleCount).forEach((card) => {
      if (card) {
        const img = card.querySelector('img');
        if (img) {
          gsap.fromTo(img,
            { scale: 1.1 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8
              }
            }
          );
        }
      }
    });

    // Hover animations for product cards
    productCardsRef.current.slice(0, visibleCount).forEach((card) => {
      if (card) {
        const img = card.querySelector('img');
        const content = card.querySelector('.content-overlay');
        const title = card.querySelector('h3');
        const desc = card.querySelector('p');
        const button = card.querySelector('.move-icon');
        const category = card.querySelector('.category-tag');

        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.2,
            ease: "power2.out",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          });

          if (img) {
            gsap.to(img, {
              scale: 1.2,
              filter: "grayscale(0%) brightness(110%)",
              duration: 0.4,
              ease: "power2.out"
            });
          }

          if (content) {
            gsap.to(content, {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (title) {
            gsap.to(title, {
              color: "#ffffff",
              x: 5,
              duration: 0.2,
              ease: "power2.out"
            });
          }

          if (desc) {
            gsap.to(desc, {
              opacity: 1,
              x: 5,
              duration: 0.3,
              delay: 0.1,
              ease: "power2.out"
            });
          }

          if (button) {
            gsap.to(button, {
              scale: 1.1,
              backgroundColor: "#1A365D",
              rotation: 360,
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (category) {
            gsap.to(category, {
              backgroundColor: "rgba(74, 105, 189, 0.3)",
              borderColor: "#4A69BD",
              duration: 0.2,
              ease: "power2.out"
            });
          }
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
            boxShadow: "none"
          });

          if (img) {
            gsap.to(img, {
              scale: 1.1,
              filter: "grayscale(100%) brightness(50%)",
              duration: 0.3,
              ease: "power2.out"
            });
          }

          if (content) {
            gsap.to(content, {
              y: 10,
              opacity: 0,
              duration: 0.2,
              ease: "power2.out"
            });
          }

          if (title) {
            gsap.to(title, {
              color: "#ffffff",
              x: 0,
              duration: 0.2,
              ease: "power2.out"
            });
          }

          if (desc) {
            gsap.to(desc, {
              opacity: 0,
              x: 0,
              duration: 0.2,
              ease: "power2.out"
            });
          }

          if (button) {
            gsap.to(button, {
              scale: 1,
              backgroundColor: "#4A69BD",
              rotation: 0,
              duration: 0.2,
              ease: "power2.out"
            });
          }

          if (category) {
            gsap.to(category, {
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.1)",
              duration: 0.2,
              ease: "power2.out"
            });
          }
        });
      }
    });

  }, [visibleCount]);

  return (
    <div className="bg-transparent text-white w-full overflow-hidden">

      {/* --- HERO HEADER --- */}
      <section className="container bg-transparent mx-auto px-4 sm:px-6 pt-24 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 border-b border-white/5">
        <div className="max-w-5xl">
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="w-12 h-1px bg-[#4A69BD]" />
            <span className="text-[#4A69BD] text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em]">
              Product Collection 2024
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.9] tracking-tighter">
            Structural <br />
            <span className="italic font-light text-[#BDC3C7]">Portfolio</span>
          </h1>
        </div>
      </section>

      {/* --- MASONRY GRID SECTION --- */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 reveal-element">
            {["All", "Heavy Infrastructure", "Drainage Systems", "Surface & Finishing"].map((cat, idx) => (
              <button
                key={idx}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#BDC3C7] hover:bg-[#4A69BD] hover:text-white transition-all duration-300"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div
            ref={masonryRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[280px] lg:auto-rows-[300px]"
          >
            {visibleProducts.map((product, idx) => (
              <div
                key={idx}
                ref={(el) => { productCardsRef.current[idx] = el; }}
                className={`relative group overflow-hidden border border-white/10 rounded-lg sm:rounded-xl cursor-pointer col-span-1 ${product.span}`}
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full bg-[#1A365D]">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale brightness-50 transition-all duration-300"
                    style={{ objectPosition: "center" }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent opacity-80" />
                </div>

                {/* Category Tag */}
                <div className="category-tag absolute top-3 sm:top-4 left-3 sm:left-4 z-30">
                  <span className="text-[7px] sm:text-[8px] lg:text-[9px] uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-2 sm:px-3 py-1 border border-white/10 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="content-overlay absolute inset-0 p-4 sm:p-5 lg:p-6 flex flex-col justify-end z-20 translate-y-10 opacity-0 transition-all duration-300">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif italic text-white leading-tight mb-1 sm:mb-2">
                    {product.title}
                  </h3>
                  <p className="text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#BDC3C7] mb-3 sm:mb-4">
                    {product.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 group-hover:w-12 h-1px bg-[#4A69BD] transition-all duration-500" />
                    <span className="text-[8px] uppercase tracking-[0.3em] text-[#4A69BD]">Details</span>
                  </div>
                </div>

                {/* Move Icon - Bottom Right */}
                <div className="move-icon absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-[#4A69BD] flex items-center justify-center rounded-sm z-30">
                  <MoveRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-16 sm:mt-20 lg:mt-24">
              <button
                onClick={loadMore}
                className="group relative inline-flex items-center gap-6 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 border border-white/20 bg-[#1A365D] text-white text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold rounded-sm overflow-hidden hover:border-[#4A69BD] transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-white transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-3 sm:gap-4 group-hover:text-[#1A365D] transition-colors duration-500">
                  Load More Products
                  <ChevronRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </button>
            </div>
          )}

          {/* View All Products Link */}
          {!hasMore && (
            <div className="flex justify-center mt-16 sm:mt-20 lg:mt-24">
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-6 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 border border-white/20 bg-[#1A365D] text-white text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold rounded-sm overflow-hidden hover:border-[#4A69BD] transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-white transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-3 sm:gap-4 group-hover:text-[#1A365D] transition-colors duration-500">
                  View All Products
                  <ChevronRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* --- TECHNICAL FOOTER - Full Width --- */}
      <section className="w-full bg-[#F4F4F6] py-20 sm:py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="reveal-element space-y-6 sm:space-y-8 lg:space-y-10 text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif italic text-black font-light">
              Custom molds available for <br className="hidden md:block" /> unique project requirements.
            </h3>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-6 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 border border-black/20 bg-[#1A365D] text-white uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-[9px] sm:text-[10px] rounded-sm overflow-hidden hover:border-[#4A69BD] transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-white transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0" />
              <span className="relative z-10 flex items-center gap-3 sm:gap-4 group-hover:text-[#1A365D] transition-colors duration-500">
                Request Technical Data Sheet
                <ChevronRight size={14} className="transition-transform duration-500 group-hover:translate-x-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )};