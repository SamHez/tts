import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-blue-600 mb-4">About</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trustable Technical Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Established 1988 — Engineering trust through 35+ years of reliable service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                TTS Ltd was founded in 1988 with a mission to provide reliable, professional scaffolding and construction services to Rwanda. What began as a small operation has grown into a trusted partner for some of Rwanda's most iconic construction projects.
              </p>
              <p>
                Over three decades, we've built our reputation on three core principles: quality workmanship, safety excellence, and customer service. Every project we undertake reflects our commitment to these values.
              </p>
              <p>
                Today, TTS serves as a critical resource for construction companies, contractors, and developers throughout Rwanda, providing scaffolding solutions, equipment rental, and maintenance services that keep projects on track and on budget.
              </p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To be Rwanda's most trusted provider of scaffolding, construction equipment, and maintenance services, delivering exceptional quality and safety on every project.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                {[
                  'Safety First — Every project priority',
                  'Quality Excellence — No compromises',
                  'Customer Focus — Your success is ours',
                  'Integrity — Always trustable',
                  'Innovation — Continuous improvement',
                ].map((v) => (
                  <li key={v} className="flex gap-3">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                role: 'Operations',
                desc: 'Experienced professionals managing all aspects of our operations and client relationships.',
              },
              {
                role: 'Technical Experts',
                desc: 'Certified technicians and engineers ensuring quality and safety standards.',
              },
              {
                role: 'Support Staff',
                desc: 'Dedicated team providing 24/7 support and maintenance services.',
              },
              {
                role: 'Equipment Management',
                desc: 'Specialists managing and maintaining our comprehensive equipment inventory.',
              },
            ].map((t) => (
              <div key={t.role} className="bg-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-3">{t.role}</h3>
                <p className="text-gray-600">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center lg:px-10">
          <h2 className="text-3xl font-bold mb-6">Learn More About Our Services</h2>
          <p className="text-xl opacity-90 mb-8">
            Contact our team to discuss how TTS can support your next project.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
