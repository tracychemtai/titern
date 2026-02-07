export default function ProductsPage() {
  const productCategories = [
    {
      title: 'Road & Pavement Products',
      products: [
        { name: 'Road Kerbs', description: 'High-quality road kerbs for clear road demarcation' },
        { name: 'Road Channels', description: 'Durable channels for effective water drainage' },
        { name: 'Paving Slabs', description: 'Various sizes and designs for pedestrian pathways' },
        { name: 'Cabro Blocks (80 mm)', description: 'Thick cabro blocks for heavy-duty applications' },
        { name: 'Cabro Blocks (60 mm)', description: 'Standard cabro blocks for residential use' },
        { name: 'Side Slabs', description: 'Sidewalk slabs for urban infrastructure' }
      ]
    },
    {
      title: 'Drainage & Infrastructure Products',
      products: [
        { name: 'IBD 300 mm', description: 'Industrial drainage systems' },
        { name: 'Shallow Drains', description: 'Surface water drainage solutions' },
        { name: 'Culverts (300 mm)', description: 'Small culverts for minor drainage' },
        { name: 'Culverts (450 mm)', description: 'Medium-sized culverts' },
        { name: 'Culverts (600 mm)', description: 'Large culverts for major drainage' },
        { name: 'Culverts (900 mm)', description: 'Extra-large culverts for highways' }
      ]
    },
    {
      title: 'Coping & Finishing Products',
      products: [
        { name: 'Wall Coping', description: 'Decorative and protective wall coping' },
        { name: 'Pillow Coping (400 mm)', description: 'Standard pillow coping for walls' }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Wide range of high-quality precast concrete products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Range</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              All products are manufactured using quality-approved raw materials and controlled production methods
            </p>
          </div>

          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 pb-4 border-b-2 border-yellow-500">
                {category.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-full h-48 bg-gray-100 mb-4 rounded-lg flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <div className="text-5xl mb-2">🏗️</div>
                        <p className="text-sm">Product Image</p>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <a href="/contact" className="text-yellow-600 font-semibold hover:text-yellow-700">
                      Request Quote →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Specifications */}
          <div className="bg-gray-50 p-8 rounded-xl mt-12">
            <h3 className="text-2xl font-bold mb-6">Quality Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <ul className="space-y-2">
                  <li>• High compressive strength</li>
                  <li>• Dimensional accuracy</li>
                  <li>• Durability and weather resistance</li>
                  <li>• Compliance with relevant construction standards</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4">Production Capability</h4>
                <p className="text-gray-700">
                  We have the capacity to handle small to large-scale supply requirements for both public and private sector projects. Our flexible production approach allows customization based on project specifications and timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}