import Link from "next/link";
import Image from "next/image";
import LogoDark from "@/public/assets/Logo.png";
import LogoLight from "@/public/assets/Logo2.2.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] text-[var(--foreground)] pt-24 pb-12 border-t border-[var(--card-border)] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-7 flex flex-col md:flex-row gap-12">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              {/* Light Mode Logo: Visible by default, hidden in dark mode */}
              <Image
                src={LogoLight}
                alt="Titern"
                fill
                className="object-contain dark:hidden"
                priority
              />

              {/* Dark Mode Logo: Hidden by default, visible in dark mode */}
              <Image
                src={LogoDark}
                alt="Titern"
                fill
                className="object-contain hidden dark:block"
                priority
              />
            </div>

            <div className="border-l border-[var(--card-border)] pl-8 flex items-center">
              <p className="text-sm uppercase tracking-widest italic opacity-60">
                Engineering the foundation of Kenya&apos;s infrastructure with
                precision-cast excellence.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-5 text-xs uppercase tracking-[0.25em] font-bold opacity-60">
            <span className="opacity-100">Discovery</span>
            <Link
              href="/products"
              className="hover:text-[var(--stroke-color)] transition-colors"
            >
              Our Products
            </Link>
            <Link
              href="/services"
              className="hover:text-[var(--stroke-color)] transition-colors"
            >
              The Portfolio
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--stroke-color)] transition-colors"
            >
              Our Legacy
            </Link>
          </div>

          <div className="md:col-span-3 flex flex-col gap-5 text-xs uppercase tracking-[0.25em] font-bold opacity-60">
            <span className="opacity-100">Connection</span>
            <a
              href="mailto:info@titernconcretesolutions.co.ke"
              className="hover:text-[var(--stroke-color)] transition-colors normal-case"
            >
              info@titernconcretesolutions.co.ke
            </a>
            <span>Nairobi, Kenya</span>
            <span className="opacity-100 text-lg">+254 759 622 760</span>
          </div>
        </div>

        <div className="flex justify-between border-t border-[var(--card-border)] pt-12 text-xs uppercase tracking-[0.4em] opacity-50">
          <p>© {new Date().getFullYear()} Titern Concrete Solutions Ltd.</p>
          <div className="flex gap-8">
            <span className="hover:text-[var(--stroke-color)] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-[var(--stroke-color)] cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
