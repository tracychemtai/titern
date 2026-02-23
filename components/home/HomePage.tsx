// import Hero from './Hero';
// import Features from './Features';
// import ProductShowcase from './ProductShowcase';
// import CTA from './CTA';

// export default function HomePage() {
//   return (
//     <main className="relative min-h-screen bg-[var(--background)]">
//       <Hero />
//       <div className="relative z-10">
//         <Features />
//         <ProductShowcase />
//         <CTA />
//       </div>
//     </main>
//   );
// }

import Hero from './Hero';
import Features from './Features';
import ProductShowcase from './ProductShowcase';
import CTA from './CTA';

export default function HomePage() {
  return (
    <main className="relative min-h-screen selection:bg-[#4A69BD] selection:text-white">
      <Hero />
      <div className="relative z-10">
        <Features />
        <ProductShowcase />
        <CTA />
      </div>
    
    </main>
  );
}