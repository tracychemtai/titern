"use client";

import { useEffect, useState } from "react";
import { Shield, Target, Award, Leaf, HardHat, Users, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Cul1,
  Cul2,
  IBD,
  RoadChannel,
  RoadKerb,
  SideSlabs,
  WallCopping,
} from "@/public/assets";
import React from "react";

export default function AboutPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselImages = [
    {
      src: Cul1,
      label: "Precision Engineering"
    },
    {
      src: IBD,
      label: "Structural Integrity"
    },
    {
      src: SideSlabs,
      label: "Modern Infrastructure"
    },
    {
      src: Cul2,
      label: "Heavy-Duty Culverts"
    },
    {
      src: RoadKerb,
      label: "Road Kerb Systems"
    },
    {
      src: WallCopping,
      label: "Wall Coping Solutions"
    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const values = [
    { icon: <Shield size={20} />, title: "Quality Standards", desc: "Our products undergo rigorous testing to ensure high compressive strength and dimensional accuracy adhering to KEBS standards." },
    { icon: <Target size={20} />, title: "Our Mission", desc: "To provide market-leading precast solutions through efficient service, innovation, and long-term sustainable partnerships." },
    { icon: <Award size={20} />, title: "Integrity", desc: "We uphold honest business practices, transparent communication, and reliable delivery across all industrial sectors." },
    { icon: <Leaf size={20} />, title: "Sustainability", desc: "Environmentally responsible manufacturing focusing on minimal waste and efficient material use in every batch." },
    { icon: <HardHat size={20} />, title: "Safety First", desc: "Prioritizing secure working conditions and dependable products that ensure structural longevity and site safety." },
    { icon: <Users size={20} />, title: "Customer Focus", desc: "Tailored precast solutions engineered to meet unique technical specifications for large-scale infrastructure." }
  ];

  const highlights = [
    "Comprehensive drainage solutions (Road Kerbs, Channels, Culverts)",
    "Durable walling and fencing (Concrete Posts, Wall Copings)",
    "Rigorous Quality Control & Lab Testing",
    "On-time logistics and site delivery across Kenya"
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white overflow-hidden">

      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION WITH AUTOMATIC CAROUSEL */}
        <section className="container mx-auto px-6 pt-32 md:pt-48 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#4A69BD]" />
              <span className="text-[#4A69BD] text-[10px] font-bold uppercase tracking-[0.5em]">
                Founded July 09, 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.05] tracking-tight">
              Engineering <br />
              <span className="italic font-light text-[#BDC3C7]">The Future</span>
            </h1>

            <div className="space-y-6">
              <p className="text-[#BDC3C7] text-lg md:text-xl leading-relaxed max-w-xl font-light opacity-90">
                Titern Concrete Solutions Ltd is a leading manufacturer of high-performance precast products, dedicated to supporting Kenya&apos;s evolving infrastructure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="text-[#4A69BD] mt-1 shrink-0" size={16} />
                    <span className="text-[11px] uppercase tracking-wider text-[#BDC3C7]/80 leading-snug group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DYNAMIC CAROUSEL IMAGE */}
          <div className="lg:col-span-6 relative aspect-4/5 md:aspect-16/10 lg:aspect-square group overflow-hidden rounded-sm border border-white/10 shadow-2xl">
            {carouselImages.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${idx === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay with label */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0A192F] via-transparent to-black/20" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[9px] uppercase tracking-[0.6em] text-white/50 mb-2">/ 0{idx + 1}</p>
                  <p className="text-xl font-serif italic text-white tracking-wide">{img.label}</p>
                </div>
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute top-8 right-8 flex gap-2">
              {carouselImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 transition-all duration-500 ${idx === activeSlide ? "w-8 bg-[#4A69BD]" : "w-4 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES & VALUES SECTION */}
        <section className="py-24 md:py-32 bg-[#F4F4F6] border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-20 text-center">
              <div className="w-1 h-12 bg-[#4A69BD] mb-6" />
              <h2 className="text-[10px] uppercase tracking-[0.6em] font-bold text-[#4A69BD]">
                Our Structural Philosophy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 border border-white/10 rounded-2xl overflow-hidden p-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-[#1A365D] p-8 md:p-10 lg:p-14 hover:bg-[#2A4A7A] transition-all duration-500 group relative overflow-hidden backdrop-blur-md rounded-xl flex flex-col items-center text-center"
                >
                  <div className="mb-6 text-[#4A69BD] group-hover:text-white group-hover:scale-110 transform transition-all duration-500">
                    {React.cloneElement(v.icon, {
                      size: 24,
                      className: "transition-all duration-500 group-hover:text-white"
                    })}
                  </div>

                  <h3 className="uppercase tracking-[0.3em] text-xs font-bold mb-4 text-white">
                    {v.title}
                  </h3>

                  <p className="text-[11px] leading-relaxed uppercase tracking-wider text-[#BDC3C7] opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED CONTENT SECTION: Quality & Sustainability */}
        <section className="container mx-auto px-6 py-32 grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative aspect-video lg:aspect-square rounded-sm overflow-hidden border border-white/10">
            <Image
              src={RoadChannel}
              alt="Concrete Quality Control"
              fill
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-[#1A365D]/40 mix-blend-multiply" />
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight leading-tight">
              Quality Guaranteed by <br />
              <span className="italic text-[#4A69BD]">Rigorous Testing</span>
            </h2>

            <div className="space-y-6 text-[#BDC3C7] font-light leading-relaxed text-sm md:text-base">
              <p>
                At Titern, we believe that the strength of Kenya&apos;s infrastructure lies in the precision of the materials used. Our manufacturing facility utilizes high-grade molds and optimized vibration techniques to achieve superior density.
              </p>
              <p>
                Every batch is monitored for consistency, ensuring our Road Kerbs, Fencing Posts, and Drainage slabs meet the stringent requirements of urban developers and civil engineers alike.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 gap-10">
              <div>
                <p className="text-2xl font-serif text-white italic">KEBS</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#4A69BD] font-bold">Standard Compliance</p>
              </div>
              <div>
                <p className="text-2xl font-serif text-white italic">100%</p>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#4A69BD] font-bold">Inspected Batching</p>
              </div>
            </div>
          </div>
        </section>

        {/* BREAK SECTION - TRANSITION TO PRODUCTS */}
        <section className="relative py-32 bg-[#F4F4F6] overflow-hidden">




          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Section Label */}
              <div className="flex justify-center mb-8">
                <div className="w-12 h-px bg-[#4A69BD]" />
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black mb-8 leading-tight">
                Explore Our <br />
                <span className="italic text-[#1A365D]">Precast Product Range</span>
              </h2>

              <p className="text-black text-lg mb-12 max-w-2xl mx-auto opacity-90">
                From drainage solutions to structural elements — discover precision-engineered concrete products for every infrastructure need.
              </p>

              {/* CTA Button linking to products page */}
              <Link
                href="/products"
                className="group relative inline-flex items-center gap-8 px-12 py-5 border border-black/20 bg-[#1A365D] text-white text-xs uppercase tracking-[0.4em] font-bold rounded-sm overflow-hidden hover:border-[#4A69BD] transition-all duration-500"
              >
                <span className="absolute inset-0 w-full h-full bg-white transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-4 group-hover:text-[#1A365D] transition-colors duration-500">
                  View All Products
                  <ChevronRight size={16} className="transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </Link>

              {/* Product Category Pills */}
              <div className="flex flex-wrap justify-center gap-4 mt-16">
                {['Drainage', 'Road Kerbs', 'Fencing', 'Culverts', 'Slabs'].map((category, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-[#1A365D] backdrop-blur-sm border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-[#BDC3C7] hover:bg-white hover:border-[#1A365D] hover:text-[#1A365D] transition-all duration-300 cursor-default"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>



      </div>
    </div>
  );
}