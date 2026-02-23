/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", description: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Submission Error:", result.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0A192F] mt-20 lg:mt-0 2xl:mt-0">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
          alt="Modern Architectural Glass Building"
          fill
          priority
          className="object-cover object-center scale-110 grayscale"
        />
        <div className="absolute inset-0 bg-[#1A365D]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0A192F] via-transparent to-transparent opacity-80" />
      </div>

      <div className="relative z-10 min-h-screen pt-28 md:pt-36 xl:pt-48 pb-20 text-white">
        {/* Changed grid logic: 
            Stack on Mobile.
            Side-by-side on iPad Pro and Desktop (xl:grid-cols-12).
            Added max-width for tablet-sized viewports. */}
        <div className="container mx-auto px-6 grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-24 items-center">
          
          {/* Left Column: Branding */}
          <div className="xl:col-span-5 space-y-6 md:space-y-8 max-w-2xl xl:max-w-none mx-auto xl:mx-0">
            <div className="space-y-4">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-px bg-[#4A69BD]" />
                <span className="text-[#4A69BD] text-[10px] font-bold uppercase tracking-[0.5em]">
                  Structural Excellence
                </span>
              </div>
              {/* Responsive Text: Smaller on iPad Pro Portrait, Massive on Desktop */}
              <h1 className="text-5xl md:text-6xl xl:text-8xl font-serif leading-[1.05] tracking-tight">
                Let's Build <br /> 
                <span className="italic font-light text-[#BDC3C7]">Together</span>
              </h1>
            </div>
            
            <p className="text-sm md:text-base xl:text-lg text-[#BDC3C7] max-w-sm uppercase tracking-[0.2em] leading-relaxed opacity-80 font-light">
              Premium precast concrete engineering for Kenya&apos;s most ambitious architectural visions.
            </p>

            {/* iPad Layout: Horizontal contact blocks on tablet viewports */}
            <div className="pt-6 lg:pt-10 flex flex-col sm:flex-row xl:flex-col gap-8">
              <div className="group border-l border-[#4A69BD]/30 pl-6 transition-all hover:border-[#4A69BD]">
                <p className="text-[#4A69BD] text-[9px] uppercase tracking-widest mb-2 font-bold">General Inquiries</p>
                <p className="text-lg xl:text-xl font-light tracking-wide">info@titern.com</p>
              </div>
              <div className="group border-l border-[#4A69BD]/30 pl-6 transition-all hover:border-[#4A69BD]">
                <p className="text-[#4A69BD] text-[9px] uppercase tracking-widest mb-2 font-bold">Project Management</p>
                <p className="text-lg xl:text-xl font-light tracking-wide">+254 759 622 760</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="xl:col-span-7 max-w-2xl xl:max-w-none mx-auto xl:mx-0 w-full">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-8 md:space-y-10 bg-white/3 p-8 md:p-12 xl:p-14 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="group relative">
                <label className="text-[10px] text-white/80 uppercase tracking-[0.4em] font-bold block mb-3 transition-colors group-focus-within:text-white">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="E.G. TITUS NJERU"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none 
                  focus:border-[#4A69BD] transition-all uppercase tracking-widest text-xs placeholder:text-white/10"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] text-white/80 uppercase tracking-[0.4em] font-bold block mb-3 transition-colors group-focus-within:text-white">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="OFFICE@PROJECT.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none 
                  focus:border-[#4A69BD] transition-all uppercase tracking-widest text-xs placeholder:text-white/10"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] text-white/80 uppercase tracking-[0.4em] font-bold block mb-3 transition-colors group-focus-within:text-white">
                  Project Brief
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="DESCRIBE YOUR STRUCTURAL REQUIREMENTS..."
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none 
                  focus:border-[#4A69BD] transition-all uppercase tracking-widest text-xs resize-none placeholder:text-white/10"
                />
              </div>

              <div className="flex flex-col gap-6 pt-4">
                <button
                  disabled={status === "loading"}
                  className="group relative overflow-hidden px-10 py-6 bg-[#4A69BD] text-white 
                  uppercase tracking-[0.4em] font-bold text-[10px] transition-all duration-500 rounded-sm"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1A365D]">
                    {status === "loading" ? "Transmitting..." : "Send Inquiry"}
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-3 text-green-400 justify-center">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Inquiry Sent Successfully</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}