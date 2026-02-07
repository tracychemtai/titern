export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Start Your Project?</h2>
        <p className="text-xl mb-8 text-gray-900 max-w-2xl mx-auto">
          Contact us today for enquiries, quotations, or partnerships
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+254759622760" className="bg-gray-900 hover:bg-black text-white font-bold py-3 px-8 rounded-lg transition">
            Call Now: +254 759 622 760
          </a>
          <a href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg transition border-2 border-gray-900">
            Send Message
          </a>
        </div>
      </div>
    </section>
  )
}