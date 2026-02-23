"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="relative w-full bg-[#F4F4F5] py-20 lg:py-40 overflow-hidden">
      <div className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-0">

          {/* Left Image - Hidden on Mobile, Visible on Large Screens */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-tr-[200px] rounded-br-[200px] shadow-2xl shadow-black/5">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                alt="Modern Architecture Left"
                fill
                priority
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Central Content - Takes full width on mobile, 6 cols on large screens */}
          <div className="w-full lg:col-span-6 text-center flex flex-col items-center px-6">
            <div className="mb-8 lg:mb-12">
              <div className="w-4 h-4 lg:w-5 lg:h-5 bg-[#1A365D] rotate-45 flex items-center justify-center">
                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rotate-45" />
              </div>
            </div>

            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-serif text-[#1A365D] leading-[1.1] mb-8 lg:mb-10 tracking-tight">
              If you can <span className="italic font-light text-[#BDC3C7]">dream it</span>, <br className="hidden lg:block" />
              we can <span className="italic font-light text-[#BDC3C7]">build it.</span>
            </h2>

            <p className="text-black text-sm lg:text-base leading-relaxed max-w-md mb-10 lg:mb-14 font-light tracking-wide px-4 opacity-80">
              We adapt a uniquely personalised perspective to each project to deliver stunning spaces of optimal function.
            </p>

            <Link
              href="/contact"
              className="group relative overflow-hidden px-12 lg:px-14 py-4 lg:py-5 bg-[#1A365D] text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.4em] rounded-sm shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-white transition-all duration-500 ease-in-out -translate-x-full group-hover:translate-x-0" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1A365D]">
                Get in touch
              </span>
            </Link>
          </div>

          {/* Right Image - Hidden on Mobile, Visible on Large Screens */}
          <div className="hidden lg:block lg:col-span-3 flex justify-end">
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-tl-[200px] rounded-bl-[200px] shadow-2xl shadow-black/5">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80"
                alt="Modern Architecture Right"
                fill
                priority
                sizes="25vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}