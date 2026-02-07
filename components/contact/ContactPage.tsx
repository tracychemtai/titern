"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", description: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-20 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16">
        {/* Info */}
        <div className="lg:col-span-5">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">
            Connect <br />
            <span
              className="text-transparent italic"
              style={{ WebkitTextStroke: "1px var(--stroke-color)" }}
            >
              With Us
            </span>
          </h1>

          <div className="space-y-10">
            {[
              ["Email", "info@titernconcretesolutions.co.ke"],
              ["Direct", "+254 759 622 760"],
              ["Location", "Nairobi, Kenya"],
            ].map(([label, value]) => (
              <div key={label}>
                <span className="uppercase tracking-[0.4em] text-xs block mb-3 text-[var(--stroke-color)]">
                  {label}
                </span>
                <p className="text-lg hover:text-[var(--stroke-color)] transition-colors duration-300">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div
          className="lg:col-span-7 p-8 sm:p-10 md:p-12 border border-[var(--card-border)]
          bg-[color-mix(in srgb, var(--foreground) 4%, transparent)] transition-colors duration-500"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            {["name", "email"].map((field) => (
              <div key={field} className="group relative">
                <input
                  required
                  type={field === "email" ? "email" : "text"}
                  placeholder={
                    field === "email" ? "EMAIL ADDRESS" : "FULL NAME"
                  }
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  value={(formData as any)[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-[var(--card-border)]
                    py-4 outline-none uppercase text-xs tracking-widest
                    transition-colors duration-300"
                />
                <span
                  className="absolute bottom-0 left-0 w-0 h-px bg-[var(--stroke-color)]
                  transition-all duration-500 group-focus-within:w-full"
                />
              </div>
            ))}

            <div className="group relative">
              <textarea
                required
                rows={5}
                placeholder="PROJECT DESCRIPTION"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-transparent border-b border-[var(--card-border)]
                  py-4 outline-none uppercase text-xs tracking-widest resize-y
                  transition-colors duration-300"
              />
              <span
                className="absolute bottom-0 left-0 w-0 h-px bg-[var(--stroke-color)]
                transition-all duration-500 group-focus-within:w-full"
              />
            </div>

            {/* SEND INQUIRY BUTTON — FIXED */}
            <button
              disabled={status === "loading"}
              className="group relative overflow-hidden px-14 sm:px-16 py-5 sm:py-6
    border border-[var(--stroke-color)]/30
    uppercase tracking-[0.3em] font-bold text-xs
    text-[var(--foreground)]
    transition-all duration-500"
            >
              {/* Text */}
              <span
                className="relative z-10
      text-[var(--foreground)]
      group-hover:text-white
      transition-colors duration-500"
              >
                {status === "loading" ? "Processing..." : "Send Inquiry"}
              </span>

              {/* Hover Fill */}
              <div
                className="absolute inset-0
      bg-[var(--stroke-color)]
      translate-y-full group-hover:translate-y-0
      transition-transform duration-500 ease-out"
              />
            </button>

            {status === "success" && (
              <p className="text-[var(--stroke-color)] text-xs uppercase tracking-widest animate-pulse">
                ✓ Inquiry received. Talk soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
