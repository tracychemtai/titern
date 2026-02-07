export default function CTA() {
  return (
    <section className="py-32 bg-[var(--background)] border-t border-[var(--card-border)] relative overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-light mb-12 tracking-tight text-[var(--foreground)]">
          Ready to{" "}
          <span
            className="italic font-serif"
            style={{ color: "var(--stroke-color)" }}
          >
            build?
          </span>
        </h2>

        <div className="inline-flex flex-col md:flex-row items-center border border-[var(--card-border)]">
          {/* Primary */}
          <a
            href="tel:+254759622760"
            className="px-12 py-6 font-bold uppercase tracking-tighter transition-all duration-500 w-full md:w-auto
              bg-[var(--foreground)] text-[var(--background)]
              hover:bg-[var(--stroke-color)] hover:text-white hover:scale-110"
          >
            Direct Line
          </a>

          {/* Secondary */}
          <a
            href="/contact"
            className="px-12 py-6 font-bold uppercase tracking-tighter transition-all duration-500 w-full md:w-auto
              text-[var(--foreground)]
              hover:bg-[var(--stroke-color)] hover:text-white hover:scale-110"
          >
            Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
