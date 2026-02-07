import { Target, Eye, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TITERN Concrete Solutions</h1>
          <p className="text-xl max-w-3xl mx-auto">Discover who we are and what drives us</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                TITERN Concrete Solutions Limited is a dynamic and customer-focused manufacturer of high-quality precast concrete products serving the construction, infrastructure, and real estate sectors.
              </p>
              <p className="text-lg text-gray-700">
                Incorporated on 9th July 2024, the company is driven by innovation, reliability, and a strong commitment to delivering products that enhance the durability and aesthetics of modern developments.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-yellow-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-700">
                  To become a preferred brand in precast concrete manufacturing by consistently delivering dependable products that shape strong and attractive infrastructure.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-gray-700 mr-3" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  To provide market-leading concrete solutions through quality manufacturing, efficient service delivery, and long-term partnerships with our clients.
                </p>
              </div>
            </div>

            {/* Sustainability */}
            <div className="bg-gray-900 text-white p-8 rounded-xl mb-12">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold">Sustainability & Social Responsibility</h3>
              </div>
              <p className="mb-4">Our Health, Safety & Environment (HSE) priorities include:</p>
              <ul className="space-y-2">
                <li>• Safe working conditions for employees</li>
                <li>• Environmentally responsible waste management</li>
                <li>• Reduced environmental impact through efficient material use</li>
              </ul>
            </div>

            {/* Client Base */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Clientele</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border p-4 rounded-lg">Road and civil engineering contractors</div>
                <div className="bg-white border p-4 rounded-lg">Real estate developers</div>
                <div className="bg-white border p-4 rounded-lg">Government and county infrastructure projects</div>
                <div className="bg-white border p-4 rounded-lg">Private construction firms</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}