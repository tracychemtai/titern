import Link from 'next/link'
import { Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TITERN Concrete Solutions Ltd</h3>
            <p className="text-gray-300">
              Quality precast concrete products for construction, infrastructure, and real estate sectors.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-yellow-400 transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-yellow-400 transition">Services</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>+254 759 622 760</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>info@titernconcretesolutions.co.ke</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={18} />
                <span>www.titernconcretesolutions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Titern Concrete Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}