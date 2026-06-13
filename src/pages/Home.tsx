import { Link } from 'react-router-dom'
import heroVideo from '@/assets/hero-gacuriro.mp4'
import heroPoster from '@/assets/hero-scaffolding.jpg'
import projStadium from '@/assets/project-stadium.jpg'
import projPlant from '@/assets/project-plant.jpg'
import projHydro from '@/assets/project-hydro.jpg'
import projConvention from '@/assets/project-convention.jpg'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[640px] overflow-hidden bg-black">
        <video
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex flex-col justify-end">
          <div className="max-w-7xl w-full mx-auto px-6 pb-20 md:pb-28 lg:px-10">
            <div className="text-xs uppercase tracking-widest text-white/70 mb-5">
              Est. 1988 · Kigali
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
              Trustable Technical Services
              <br />
              <span className="text-blue-400">for Rwanda's biggest builds.</span>
            </h1>
            <p className="mt-8 text-lg text-white/80 max-w-2xl">
              Premium scaffolding rental, construction equipment, and maintenance services engineered for trust. Serving Rwanda's most iconic projects since 1988.
            </p>
            <div className="mt-12 flex gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Scaffolding Rental', desc: 'Professional scaffolding solutions for safe, efficient construction.' },
              { title: 'Equipment Services', desc: 'Full range of construction equipment available for rent.' },
              { title: 'Maintenance', desc: 'Expert maintenance and support for all your project needs.' },
            ].map((s) => (
              <div key={s.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Explore All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: projStadium, title: 'Stadium Construction' },
              { img: projPlant, title: 'Industrial Plant' },
              { img: projHydro, title: 'Hydro Power Project' },
              { img: projConvention, title: 'Convention Center' },
            ].map((p) => (
              <div key={p.title} className="group cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center lg:px-10">
          <h2 className="text-4xl font-bold mb-6">Ready to build something trustable?</h2>
          <p className="text-xl opacity-90 mb-8">
            Get in touch with our team to discuss your project requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
