import { Shield, Target, Users, Leaf } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Shield />,
      title: 'Quality Assurance',
      description: 'Consistent production of strong, durable, and precise concrete products.'
    },
    {
      icon: <Target />,
      title: 'Customer Focus',
      description: 'Tailored solutions to meet specific client requirements.'
    },
    {
      icon: <Users />,
      title: 'Integrity',
      description: 'Honest business practices and reliable delivery.'
    },
    {
      icon: <Leaf />,
      title: 'Sustainability',
      description: 'Environmentally responsible manufacturing practices.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">What we stand for and believe in</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}