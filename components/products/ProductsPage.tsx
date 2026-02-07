"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsPage() {
  const productData = [
    { title: "Culvert Pipes", img: Cul1, speed: "0.15", category: "Drainage" },
    {
      title: "Paving Slabs",
      img: Paving,
      speed: "-0.08",
      category: "Roadwork",
    },
    {
      title: "Inverted Block Drain",
      img: IBD,
      speed: "0.2",
      category: "Infrastructure",
    },
    {
      title: "Road Channels",
      img: RoadChannel,
      speed: "0.1",
      category: "Drainage",
    },
    {
      title: "Heavy Duty Kerbs",
      img: RoadKerb,
      speed: "0.25",
      category: "Infrastructure",
    },
    {
      title: "Shallow Drains",
      img: ShallowDrain,
      speed: "-0.12",
      category: "Drainage",
    },
    {
      title: "Wall Coping",
      img: WallCopping,
      speed: "0.18",
      category: "Finishing",
    },
    {
      title: "Side Slabs",
      img: SideSlabs,
      speed: "0.06",
      category: "Roadwork",
    },
    {
      title: "Infrastructure 02",
      img: Cul2,
      speed: "0.22",
      category: "Drainage",
    },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".product-card");

      cards.forEach((card) => {
        const speed = parseFloat(card.dataset.speed || "0");
        gsap.to(card, {
          y: speed * 400,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });

      gsap.from(".reveal-text", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".image-grid",
          start: "top 90%",
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="bg-[var(--background)] min-h-screen text-[var(--foreground)] overflow-hidden transition-colors duration-500">
      <section className="relative z-10 pt-32 lg:pt-40 pb-32 lg:pb-60 px-4 md:px-6 container mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-32 max-w-4xl">
          <span className="reveal-text text-[var(--stroke-color)] uppercase tracking-[0.4em] text-[9px] lg:text-[10px] font-bold mb-4 block">
            Our Inventory
          </span>
          <h1 className="reveal-text text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
            Structural <br />
            <span
              className="text-transparent italic"
              style={{ WebkitTextStroke: "1px var(--stroke-color)" }}
            >
              Solutions
            </span>
          </h1>
        </div>

        {/* Product Grid */}
        <div className="image-grid grid grid-cols-12 gap-6 lg:gap-12">
          {productData.map((product, i) => (
            <div
              key={i}
              data-speed={product.speed}
              className={`product-card relative overflow-hidden
                bg-[color-mix(in srgb, var(--foreground) 6%, transparent)]
                border border-[var(--card-border)] group
                col-span-12
                ${i % 3 === 0 ? "lg:col-span-7 h-[50vh] lg:h-[70vh]" : "lg:col-span-5 h-[45vh] lg:h-[60vh]"}
                ${i === 1 ? "lg:mt-32" : ""}
                ${i === 4 ? "lg:-mt-20" : ""}
              `}
            >
              {/* Overlay */}
              <div className="absolute inset-0 z-20 p-6 lg:p-8 flex flex-col justify-end bg-linear-to-t from-black via-black/40 to-transparent">
                <span className="text-[var(--stroke-color)] text-[9px] lg:text-[10px] tracking-[0.4em] mb-2 font-bold uppercase">
                  {product.category}
                </span>
                <h3 className="text-xl text-white lg:text-2xl font-light uppercase tracking-widest">
                  {product.title}
                </h3>
              </div>

              {/* Image */}
              <Image
                src={product.img}
                alt={product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i < 2}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-60
                  lg:opacity-50 lg:group-hover:grayscale-0 lg:group-hover:opacity-100
                  lg:group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 lg:mt-60 border-t border-[var(--card-border)] pt-16 lg:pt-20 text-center">
          <p className="text-gray-500 uppercase tracking-[0.2em] text-[10px] mb-8">
            Looking for custom specifications?
          </p>
          <a
            href="/contact"
            className="inline-block w-full md:w-auto px-10 py-5 
    border border-[var(--stroke-color)] 
    text-[var(--stroke-color)] 
    hover:bg-[var(--stroke-color)] hover:text-white 
    /* Fixed logic below */
    hover:-translate-y-1 
    transition-all duration-500 ease-in-out
    uppercase text-[9px] tracking-[0.3em] font-bold"
          >
            Request Technical Data Sheet
          </a>
        </div>
      </section>
    </main>
  );
}
