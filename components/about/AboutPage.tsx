"use client";
import { Shield, Target, Award, Leaf, HardHat, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: <Shield />, title: "Quality", desc: "High compressive strength and dimensional accuracy adhering to KEBS standards." },
    { icon: <Target />, title: "Mission", desc: "Providing market-leading solutions through efficient service and long-term partnerships." },
    { icon: <Award />, title: "Integrity", desc: "Honest business practices and reliable delivery across all sectors." },
    { icon: <Leaf />, title: "Sustainability", desc: "Environmentally responsible manufacturing and efficient material use." },
    { icon: <HardHat />, title: "Safety", desc: "Prioritizing safe working conditions and dependable, secure products." },
    { icon: <Users />, title: "Customer Focus", desc: "Tailored precast solutions designed to meet unique client specifications." }
  ];

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] pt-32 transition-colors duration-500">
      <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center mb-40">
        <div className="reveal">
          <span className="uppercase tracking-[0.6em] text-[10px] font-bold mb-8 block border-l pl-4 text-[var(--stroke-color)] border-[var(--stroke-color)]">
            Established July 09, 2024
          </span>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-none">
            Building <br />
            <span
              className="text-transparent italic"
              style={{ WebkitTextStroke: "1px var(--stroke-color)" }}
            >
              Tomorrow
            </span>
          </h1>

          <p className="text-[color:color-mix(in srgb, var(--foreground) 60%, transparent)] text-lg md:text-xl leading-relaxed max-w-xl">
            Titern Concrete Solutions Ltd specializes in the manufacturing of high-quality precast concrete products for Kenya&apos;s infrastructure and real estate sectors.
          </p>
        </div>

        <div className="relative aspect-square lg:aspect-4/5 group overflow-hidden border border-[var(--card-border)]">
          <div className="absolute inset-0 bg-linear-to-t from-[var(--background)] via-transparent to-transparent z-10" />
          <div className="w-full h-full bg-[color-mix(in srgb, var(--foreground) 5%, transparent)] relative overflow-hidden">
            <div className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-700 bg-[url('/assets/Road_kerb.jpeg')] bg-cover grayscale" />
          </div>
        </div>
      </section>

      <section className="py-32 border-y border-[var(--card-border)] bg-[color-mix(in srgb, var(--foreground) 3%, transparent)]">
        <div className="container mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.5em] mb-20 text-center text-[color:color-mix(in srgb, var(--foreground) 40%, transparent)]">
            Core Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--card-border)] border border-[var(--card-border)]">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[var(--background)] p-12 hover:bg-[color-mix(in srgb, var(--foreground) 5%, transparent)] transition-all group relative overflow-hidden"
              >
                <div className="mb-8 transform group-hover:-translate-y-1 transition-transform text-[var(--stroke-color)]">
                  {v.icon}
                </div>

                <h3 className="uppercase tracking-widest text-sm font-bold mb-4">
                  {v.title}
                </h3>

                <p className="text-xs leading-relaxed uppercase tracking-wider text-[color:color-mix(in srgb, var(--foreground) 60%, transparent)]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
