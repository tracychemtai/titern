import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">TITERN</Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/about" className="hover:text-yellow-400 transition">About Us</Link>
            <Link href="/products" className="hover:text-yellow-400 transition">Products</Link>
            <Link href="/services" className="hover:text-yellow-400 transition">Services</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </div>

          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}