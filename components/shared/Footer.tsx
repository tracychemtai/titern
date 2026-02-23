"use client";
import Link from "next/link";

export default function Footer() {
  const links = [
    { name: "Our Products", href: "/products" },
    { name: "The Portfolio", href: "/services" },
    { name: "Our Legacy", href: "/about" },
  ];

  return (
    <footer className="bg-transparent text-white pt-20 pb-16 relative border-t border-white/5">
      <div className="container mx-auto px-8 md:px-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 space-y-8">
            <div className="text-2xl font-serif tracking-tight font-bold">
              TITERN<span className="font-light italic text-[#4A69BD]">CONCRETE</span>
            </div>
            <p className="max-w-sm text-[#BDC3C7] text-xs leading-loose font-light uppercase tracking-widest opacity-60">
              Leading Kenya’s infrastructure through <br /> high-precision precast engineering.
            </p>
          </div>

          {/* Navigation with Reveal Hovers */}
          <div className="md:col-span-3">
            <h4 className="text-[#4A69BD] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Navigation</h4>
            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-sm font-light tracking-wide text-[#BDC3C7] hover:text-white transition-all duration-500"
                  >
                    {/* Animated Line Hook */}
                    <span className="w-0 h-px bg-[#4A69BD] group-hover:w-4 transition-all duration-500"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Digital Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[#4A69BD] text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Headquarters</h4>
            <div className="space-y-6">
              <p className="text-sm font-light text-[#BDC3C7] leading-relaxed">
                Nairobi, Kenya <br />
                Industrial Area, Phase II
              </p>
              <a
                href="mailto:info@titernconcretesolutions.co.ke"
                className="inline-block text-[8px] font-bold uppercase tracking-[0.2em] text-white hover:text-[#4A69BD] transition-colors border-b border-[#4A69BD] pb-1"
              >
                info@titernconcretesolutions.co.ke
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex gap-10">
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#BDC3C7]/40">
              © {new Date().getFullYear()} Titern Concrete Solutions
            </p>
          </div>
          
          <div className="flex gap-8">
            {["Privacy", "Terms"].map((item) => (
              <span 
                key={item}
                className="text-[9px] uppercase tracking-[0.4em] text-[#BDC3C7]/40 hover:text-white cursor-pointer transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}