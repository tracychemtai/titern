"use client";

import { useState } from "react";

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
        // Optional: Reset status to idle after 5 seconds
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
    <div className="min-h-screen pt-32 md:pt-40 pb-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16">
        
        {/* Info Column */}
        <div className="lg:col-span-5">
          <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8">
            Let's Build <br /> 
            <span className="text-[var(--stroke-color)] italic">Together</span>
          </h1>
          <p className="text-lg text-[var(--foreground)]/60 max-w-md uppercase tracking-widest leading-relaxed">
            Inquire about our structural concrete services and industrial solutions.
          </p>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-12">
            
            <div className="group relative">
              <input
                required
                type="text"
                placeholder="YOUR NAME"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-[var(--stroke-color)]/30 py-4 outline-none 
                focus:border-[var(--stroke-color)] transition-colors uppercase tracking-widest text-sm"
              />
            </div>

            <div className="group relative">
              <input
                required
                type="email"
                placeholder="YOUR EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-[var(--stroke-color)]/30 py-4 outline-none 
                focus:border-[var(--stroke-color)] transition-colors uppercase tracking-widest text-sm"
              />
            </div>

            <div className="group relative">
              <textarea
                required
                rows={4}
                placeholder="PROJECT DESCRIPTION"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full bg-transparent border-b border-[var(--stroke-color)]/30 py-4 outline-none 
                focus:border-[var(--stroke-color)] transition-colors uppercase tracking-widest text-sm resize-none"
              />
            </div>

            <div className="flex flex-col gap-4">
              <button
                disabled={status === "loading"}
                className="group relative overflow-hidden px-16 py-6 border border-[var(--stroke-color)]/30 
                uppercase tracking-[0.3em] font-bold text-xs transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  {status === "loading" ? "Processing..." : "Send Inquiry"}
                </span>
                <div className="absolute inset-0 bg-[var(--stroke-color)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              {status === "success" && (
                <p className="text-green-500 text-xs uppercase tracking-widest">✓ Message Sent Successfully</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-xs uppercase tracking-widest">✕ Error Sending Message</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}