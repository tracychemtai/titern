import Image from 'next/image'

export default function ProductShowcase() {
  const categories = [
    {
      title: 'Road & Pavement Products',
      items: ['Road Kerbs', 'Road Channels', 'Paving Slabs', 'Cabro Blocks (80 mm)', 'Cabro Blocks (60 mm)', 'Side Slabs']
    },
    {
      title: 'Drainage & Infrastructure',
      items: ['IBD 300 mm', 'Shallow Drains', 'Culverts (300 mm)', 'Culverts (450 mm)', 'Culverts (600 mm)', 'Culverts (900 mm)']
    },
    {
      title: 'Coping & Finishing',
      items: ['Wall Coping', 'Pillow Coping (400 mm)']
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Range</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">High-quality precast concrete products for all your construction needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-800">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ High compressive strength</li>
                <li>✓ Dimensional accuracy</li>
                <li>✓ Durability and weather resistance</li>
                <li>✓ Compliance with construction standards</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Capacity & Capability</h4>
              <p>We handle small to large-scale supply requirements for both public and private sector projects. Flexible production allows customization based on project specifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}