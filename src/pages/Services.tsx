import { ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-blue-600 mb-4">Services</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Construction Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive scaffolding, equipment, and maintenance solutions tailored to your project needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Scaffolding Solutions',
                desc: 'Complete scaffolding systems for all project types and sizes.',
                features: [
                  'Residential construction',
                  'Commercial projects',
                  'Industrial installations',
                  'Bridge work',
                  'Expert installation',
                  'Safety certified',
                ],
              },
              {
                title: 'Equipment Rental',
                desc: 'Wide range of construction and specialized equipment.',
                features: [
                  'Heavy machinery',
                  'Lifting equipment',
                  'Power tools',
                  'Safety gear',
                  'Maintenance included',
                  'Flexible terms',
                ],
              },
              {
                title: 'Maintenance Services',
                desc: 'Professional maintenance and support throughout your project.',
                features: [
                  'Regular inspections',
                  'Preventive maintenance',
                  'Emergency repair',
                  'Safety compliance',
                  'On-site support',
                  'Expert teams',
                ],
              },
              {
                title: 'Consulting',
                desc: 'Expert guidance on construction safety and planning.',
                features: [
                  'Project assessment',
                  'Safety planning',
                  'Resource optimization',
                  'Cost efficiency',
                  'Timeline planning',
                  'Risk management',
                ],
              },
            ].map((service) => (
              <div key={service.title} className="border border-gray-200 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose TTS?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '35+ Years', desc: 'Trusted since 1988 with proven track record' },
              { title: 'Expert Team', desc: 'Highly trained and certified professionals' },
              { title: 'Quality', desc: 'Premium equipment and services' },
              { title: 'Safety First', desc: 'All safety standards and certifications met' },
              { title: 'Responsive', desc: 'Quick response to project needs' },
              { title: 'Local', desc: 'Based in Kigali, Rwanda' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold mb-6">Need construction services?</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact us today for a consultation on your project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
