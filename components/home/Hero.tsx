export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Kenya Future with Quality Precast Concrete
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            TITERN Concrete Solutions Limited - Your trusted partner for high-quality precast concrete products serving construction, infrastructure, and real estate sectors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition">
              Get Quote
            </a>
            <a href="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}