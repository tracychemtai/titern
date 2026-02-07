import { Truck, Settings, CheckCircle, Headphones } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Supply & Delivery',
      description: 'Timely delivery of precast concrete products to your construction site across Kenya.',
      features: ['On-time delivery', 'Proper handling', 'Nationwide coverage']
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Custom Manufacturing',
      description: 'Custom precast products manufactured to your specific project requirements.',
      features: ['Design consultation', 'Custom molds', 'Project-specific solutions']
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes ensuring top-notch product standards.',
      features: ['Material testing', 'Production monitoring', 'Final inspection']
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Technical Support',
      description: 'Expert advice and support for your concrete construction projects.',
      features: ['Installation guidance', 'Technical consultation', 'After-sales support']
    }
  ]

  const projects = [
    'Road construction projects',
    'Urban infrastructure development',
    'Real estate developments',
    'Industrial construction',
    'Government infrastructure',
    'Commercial buildings'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive concrete solutions for your construction needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end concrete solutions from manufacturing to delivery and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
                <div className="text-yellow-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Project Types */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Projects We Serve</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">🏗️</div>
                  <p className="font-medium">{project}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="bg-gray-900 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold mb-2">Consultation</h4>
                <p className="text-gray-300 text-sm">Understanding your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold mb-2">Manufacturing</h4>
                <p className="text-gray-300 text-sm">Quality-controlled production</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-gray-300 text-sm">Safe and timely delivery</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold mb-2">Support</h4>
                <p className="text-gray-300 text-sm">Ongoing technical support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}