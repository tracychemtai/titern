"use client";

import Image from "next/image";
import { MoveRight, ShieldCheck, Factory, Zap, ChevronRight } from "lucide-react";
import { Cul2, RoadKerb, WallCopping } from "@/public/assets";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const capabilityCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const productSectorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionHeadersRef = useRef<(HTMLDivElement | null)[]>([]);

  const productSectors = [
    {
      id: "01",
      title: "Road & Paving Infrastructure",
      description:
        "Precision-engineered components for heavy-duty transit and urban walkways. Designed for maximum durability and load-bearing capacity.",
      products: [
        "Road Kerbs",
        "Road Channels",
        "Paving Slabs",
        "Cabro Blocks (60mm & 80mm)",
        "Side Slabs",
      ],
      image: RoadKerb,
    },
    {
      id: "02",
      title: "Water & Drainage Systems",
      description:
        "Standardized hydraulic solutions for effective water management and civil works. Manufactured to resist erosion and environmental stress.",
      products: [
        "IBD 300mm",
        "Shallow Drains",
        "Culverts (300mm - 900mm Range)",
      ],
      image: Cul2,
    },
    {
      id: "03",
      title: "Architectural Finishing",
      description:
        "Refining the aesthetic and structural longevity of perimeter walls and buildings through bespoke precast solutions.",
      products: ["Wall Coping", "Pillow Coping (400mm)"],
      image: WallCopping,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      if (headerRef.current) {
        gsap.set(headerRef.current, { y: 100, opacity: 0 });
      }
      
      capabilityCardsRef.current.forEach((card) => {
        if (card) gsap.set(card, { y: 50, opacity: 0 });
      });
      
      productSectorsRef.current.forEach((sector) => {
        if (sector) gsap.set(sector, { y: 100, opacity: 0 });
      });
      
      sectionHeadersRef.current.forEach((header) => {
        if (header) gsap.set(header, { scale: 0.8, opacity: 0 });
      });

      // Master timeline with reduced durations
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 0.8 } // Reduced from 1.2
      });

      // Section 1: Header animation - faster
      if (headerRef.current) {
        tl.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 1 // Reduced from 1.5
        });
      }

      // Section 2: Capability cards animation - faster
      tl.to(capabilityCardsRef.current.filter(Boolean), {
        y: 0,
        opacity: 1,
        stagger: 0.15, // Reduced from 0.2
        duration: 0.7, // Reduced from 1
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      }, "-=0.3"); // Reduced overlap

      // Section headers animation - faster
      tl.to(sectionHeadersRef.current.filter(Boolean), {
        scale: 1,
        opacity: 1,
        stagger: 0.2, // Reduced from 0.3
        duration: 0.7, // Reduced from 1
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse"
        }
      }, "-=0.5"); // Reduced overlap

      // Section 3: Product sectors animation - faster
      productSectorsRef.current.forEach((sector) => {
        if (sector) {
          gsap.fromTo(sector,
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8, // Reduced from 1.2
              scrollTrigger: {
                trigger: sector,
                start: "top 75%",
                end: "top 40%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Animate products list items - faster
          const productItems = sector.querySelectorAll('.product-item');
          if (productItems.length > 0) {
            gsap.fromTo(productItems,
              { x: -30, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                stagger: 0.05, // Reduced from 0.1
                duration: 0.5, // Reduced from 0.8
                scrollTrigger: {
                  trigger: sector,
                  start: "top 60%",
                  end: "top 30%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        }
      });

      // Parallax effect on background
      gsap.to(".bg-parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5 // Reduced from 1 for faster response
        }
      });

      // Section 2 cards hover animation - faster
      capabilityCardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.05,
              duration: 0.2, // Reduced from 0.3
              ease: "power2.out"
            });
            const svg = card.querySelector('svg');
            if (svg) {
              gsap.to(svg, {
                scale: 1.2,
                rotation: 5,
                duration: 0.2, // Reduced from 0.3
                ease: "power2.out"
              });
            }
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              duration: 0.2, // Reduced from 0.3
              ease: "power2.out"
            });
            const svg = card.querySelector('svg');
            if (svg) {
              gsap.to(svg, {
                scale: 1,
                rotation: 0,
                duration: 0.2, // Reduced from 0.3
                ease: "power2.out"
              });
            }
          });
        }
      });

    }, [section1Ref, section2Ref, section3Ref, headerRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">
      {/* --- CINEMATIC BACKGROUND LAYER --- */}
      <div className="fixed inset-0 z-0 opacity-20 bg-parallax">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      {/* SECTION 1: HERO / HEADER */}
      <section ref={section1Ref} className="relative z-10">
        <div ref={headerRef} className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-48 pb-16 md:pb-32">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 mb-16 md:mb-32 border-b border-white/10 pb-12 md:pb-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-12 h-1px bg-[#4A69BD]" />
                <span className="text-[#4A69BD] text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.5em]">
                  Product Portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[1.05] tracking-tight">
                Our <br />
                <span className="italic font-light text-[#BDC3C7]">Capabilities</span>
              </h1>
              <p className="mt-6 md:mt-10 text-[#BDC3C7] text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] leading-relaxed max-w-xl opacity-80">
                Setting new standards in precast manufacturing excellence across Kenya through precision engineering and KEBS compliant protocols.
              </p>
            </div>

            <div className="lg:text-right space-y-2 mt-4 lg:mt-0">
              <div className="text-[#4A69BD] font-bold text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                KEBS CERTIFIED // 2024
              </div>
              <div className="text-white/20 text-[7px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.5em] uppercase font-medium">
                REF: TCS/PRD/KENYA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CAPABILITY GRID */}
      <section ref={section2Ref} className="relative z-10 bg-[#F4F4F6] py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div ref={(el) => { sectionHeadersRef.current[0] = el; }} className="flex flex-col items-center text-center mb-12 md:mb-20">
            <div className="w-1 h-8 md:h-12 bg-[#4A69BD] mb-4 md:mb-6" />
            <h2 className="text-[8px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-bold text-[#4A69BD]">
              Our Manufacturing Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden p-3 sm:p-4">
            {[
              { icon: ShieldCheck, title: "Standardized Testing", desc: "Compressive strength checks for every batch to meet Kenya Building Standards." },
              { icon: Factory, title: "Custom Production", desc: "Tailored precast molds for unique project specifications and infrastructure goals." },
              { icon: Zap, title: "Efficient Delivery", desc: "Optimized logistics network ensuring timely delivery for site-critical timelines." }
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => { capabilityCardsRef.current[i] = el; }}
                className="bg-[#1A365D] p-6 sm:p-8 md:p-10 lg:p-14 hover:bg-[#2A4A7A] transition-all duration-500 group relative overflow-hidden backdrop-blur-md rounded-lg sm:rounded-xl flex flex-col items-center text-center cursor-pointer"
              >
                <div className="mb-4 sm:mb-6 text-[#4A69BD] group-hover:text-white group-hover:scale-110 transform transition-all duration-500">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-all duration-500 group-hover:text-white" />
                </div>

                <h4 className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 text-white">
                  {item.title}
                </h4>

                <p className="text-[9px] sm:text-[10px] md:text-[11px] leading-relaxed uppercase tracking-wider text-[#BDC3C7] opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT SECTORS */}
      <section ref={section3Ref} className="relative z-10 bg-[#0A192F] py-16 sm:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <div ref={(el) => { sectionHeadersRef.current[1] = el; }} className="flex flex-col items-center text-center mb-16 md:mb-24 lg:mb-32">
            <div className="w-8 h-1 bg-[#4A69BD] rotate-90 mb-6 md:mb-8" />
            <h2 className="text-[8px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.6em] font-bold text-[#4A69BD]">
              Specialized Product Lines
            </h2>
          </div>

          <div className="space-y-24 sm:space-y-32 md:space-y-40 lg:space-y-48 xl:space-y-64">
            {productSectors.map((sector, idx) => (
              <div
                key={sector.id}
                ref={(el) => { productSectorsRef.current[idx] = el; }}
                className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center group"
              >
                {/* Text Content */}
                <div className={`lg:col-span-5 space-y-6 md:space-y-8 lg:space-y-10 ${idx % 2 !== 0 ? 'lg:order-2' : ''} ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
                  <div className="space-y-4 md:space-y-6">
                    <span className="text-[#4A69BD] font-serif italic text-xl md:text-2xl">
                      {sector.id}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight">
                      {sector.title}
                    </h2>
                    <p className="text-[#BDC3C7] text-xs sm:text-sm leading-relaxed max-w-sm opacity-80">
                      {sector.description}
                    </p>
                  </div>

                  <div className="grid gap-1 md:gap-2">
                    {sector.products.map((item) => (
                      <div
                        key={item}
                        className="product-item flex items-center justify-between border-b border-white/5 py-3 md:py-4 group/item hover:border-[#4A69BD] transition-colors duration-500"
                      >
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#BDC3C7] group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                        <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 text-[#1A365D] opacity-0 group-hover/item:opacity-100 transition-all transform -translate-x-2 group-hover/item:translate-x-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cinematic Image Frame */}
                <div className={`lg:col-span-7 relative aspect-4/3 sm:aspect-16/10 md:aspect-video overflow-hidden rounded-sm border border-white/10 shadow-2xl ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1500ms opacity-50 group-hover:opacity-100"
                  />

                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0A192F]/80 via-transparent to-transparent opacity-60" />

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <span className="text-white/5 text-[10vw] sm:text-[12vw] lg:text-[15vw] font-serif italic tracking-tighter uppercase whitespace-nowrap">
                      {sector.title.split(" ")[0]}
                    </span>
                  </div>

                  <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 p-4 sm:p-6 md:p-8 z-20">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-[#1A365D]/40 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:bg-[#1A365D] group-hover:text-white transition-all duration-500">
                      <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}