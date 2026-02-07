"use client";

import Image from "next/image";
import { MoveRight, ShieldCheck, Factory, Zap } from "lucide-react";
import { Cul2, RoadKerb, WallCopping } from "@/public/assets";

export default function ServicesPage() {
  const productSectors = [
    {
      id: "01",
      title: "Road & Paving Infrastructure",
      description:
        "Precision-engineered components for heavy-duty transit and urban walkways.",
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
        "Standardized hydraulic solutions for effective water management and civil works.",
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
        "Refining the aesthetic and structural longevity of perimeter walls and buildings.",
      products: ["Wall Coping", "Pillow Coping (400mm)"],
      image: WallCopping,
    },
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] pt-40 pb-20 transition-colors duration-500 selection:bg-[var(--stroke-color)]/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 border-b border-[var(--card-border)] pb-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-9xl font-light tracking-[-0.04em] leading-[0.85]">
              The{" "}
              <span className="italic font-serif opacity-40">
                Portfolio
              </span>
            </h1>
            <p className="mt-8 text-gray-500 text-xs uppercase tracking-[0.4em] leading-loose">
              Setting new standards in precast manufacturing <br />
              across Kenya since July 2024.
            </p>
          </div>

          <div className="hidden lg:block text-right">
            <div className="text-[var(--stroke-color)] font-mono text-sm mb-2">
              KEBS COMPLIANT
            </div>
            <div className="text-[var(--foreground)]/20 text-[10px] tracking-widest uppercase font-bold">
              Ref No: TCS/PRD/2024
            </div>
          </div>
        </div>

        {/* Sectors */}
        <div className="space-y-40">
          {productSectors.map((sector) => (
            <div key={sector.id} className="grid lg:grid-cols-12 gap-12 group">
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <span className="text-[var(--stroke-color)] font-mono text-lg mb-6 block font-bold">
                    {sector.id} //
                  </span>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {sector.title}
                  </h2>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed mb-8">
                    {sector.description}
                  </p>
                </div>

                <div className="grid gap-4">
                  {sector.products.map((item) => (
                    <div
                      key={item}
                      className="flex items-center space-x-4 border-l border-[var(--card-border)]
                        pl-6 py-2 hover:border-[var(--stroke-color)]
                        transition-colors duration-300"
                    >
                      <span className="text-[10px] uppercase tracking-widest opacity-60">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="lg:col-span-7">
                <div className="relative aspect-video overflow-hidden border border-[var(--card-border)]
                  bg-[color-mix(in srgb, var(--foreground) 6%, transparent)]"
                >
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0
                      group-hover:scale-105 transition-all duration-1000
                      opacity-60 group-hover:opacity-100"
                  />

                  <div className="absolute md:flex hidden inset-0 items-center justify-center pointer-events-none">
                    <span className="text-[var(--foreground)]/25 text-8xl font-black uppercase italic tracking-tighter select-none">
                      {sector.title.split(" ")[0]}
                    </span>
                  </div>

                  <div className="absolute bottom-0 right-0 p-8 z-20">
                    <div
                      className="w-16 h-16 bg-black/40 backdrop-blur-md flex items-center justify-center
                        border border-[var(--card-border)]
                        group-hover:bg-[var(--stroke-color)]
                        group-hover:text-white
                        transition-all duration-500"
                    >
                      <MoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Capability Grid */}
        <div className="mt-60 grid md:grid-cols-3 gap-12
          bg-[color-mix(in srgb, var(--foreground) 5%, transparent)]
          p-12 border border-[var(--card-border)]"
        >
          {[ShieldCheck, Factory, Zap].map((Icon, i) => (
            <div key={i} className="flex flex-col gap-6">
              <Icon className="text-[var(--stroke-color)] w-8 h-8" />
              <h4 className="uppercase tracking-widest text-sm font-bold">
                {[
                  "Standardized Testing",
                  "Custom Production",
                  "Efficient Delivery",
                ][i]}
              </h4>
              <p className="text-gray-500 text-[10px] leading-loose uppercase tracking-wider">
                {[
                  "Compressive strength checks for every batch to meet Kenya Building Standards.",
                  "Tailored precast molds for unique project specifications and infrastructure goals.",
                  "Optimized logistics network ensuring timely delivery for site-critical timelines.",
                ][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
