// import { Shield, Target, Users, Leaf } from "lucide-react";

// export default function Features() {
//   const values = [
//     { icon: <Shield size={20} />, title: "Quality", desc: "Precision concrete for durable builds." },
//     { icon: <Target size={20} />, title: "Focus", desc: "Tailored client-specific solutions." },
//     { icon: <Users size={20} />, title: "Integrity", desc: "Honest and reliable delivery." },
//     { icon: <Leaf size={20} />, title: "Sustainability", desc: "Environmentally responsible manufacturing." },
//   ];

//   return (
//     <section className="py-32 bg-[var(--background)] border-t border-[var(--card-border)] transition-colors duration-500">
//       <div className="container mx-auto px-6">
//         <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
//           <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[var(--foreground)]">
//             Core{" "}
//             <span
//               className="italic text-transparent"
//               style={{ WebkitTextStroke: "1px var(--stroke-color)" }}
//             >
//               Values
//             </span>
//           </h2>

//           <p className="max-w-xs text-sm uppercase tracking-widest leading-relaxed text-[color:color-mix(in srgb, var(--foreground) 60%, transparent)]">
//             Standardized precision for large-scale development and residential architecture.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-4 gap-0 border border-[var(--card-border)]">
//           {values.map((v, i) => (
//             <div
//               key={i}
//               className="p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-[var(--card-border)]
//                 hover:bg-[color-mix(in srgb, var(--foreground) 4%, transparent)] transition-all group"
//             >
//               <div
//                 className="mb-8 transform group-hover:-translate-y-2 transition-transform"
//                 style={{ color: "var(--stroke-color)" }}
//               >
//                 {v.icon}
//               </div>

//               <h3 className="uppercase tracking-widest text-sm font-bold mb-4 text-[var(--foreground)]">
//                 {v.title}
//               </h3>

//               <p className="text-xs leading-relaxed uppercase tracking-wider text-[color:color-mix(in srgb, var(--foreground) 60%, transparent)]">
//                 {v.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
export default function Features() {
  const values = [
    { title: "Structural Integrity", desc: "Every cast is tested for extreme durability and precision fit." },
    { title: "Bespoke Design", desc: "Custom molds and finishes to match unique architectural aesthetics." },
    { title: "Rapid Logistics", desc: "Reliable site delivery ensuring your project stays on schedule." },
    { title: "Legacy Builds", desc: "Concrete solutions designed to withstand the test of decades." },
  ];

  return (
    <section className="bg-white py-32 border-b border-gray-100">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="group">
              <div className="text-[#4A69BD] font-serif italic text-3xl mb-8 group-hover:-translate-y-2 transition-transform duration-500 block">
                0{i + 1}
              </div>
              <h3 className="text-[#1A365D] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {v.title}
              </h3>
              <p className="text-black text-sm leading-relaxed font-light">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}