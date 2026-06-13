import projStadium from '@/assets/project-stadium.jpg'
import projPlant from '@/assets/project-plant.jpg'
import projHydro from '@/assets/project-hydro.jpg'
import projConvention from '@/assets/project-convention.jpg'
import productCuplock from '@/assets/product-cuplock.jpg'

export default function Projects() {
  const projects = [
    {
      img: projStadium,
      title: 'National Stadium',
      location: 'Kigali, Rwanda',
      desc: 'Major sports facility construction with extensive scaffolding systems.',
    },
    {
      img: projPlant,
      title: 'Industrial Plant',
      location: 'Kigali, Rwanda',
      desc: 'Large-scale industrial facility requiring specialized equipment.',
    },
    {
      img: projHydro,
      title: 'Hydro Power Project',
      location: 'Rwanda',
      desc: 'Complex hydroelectric project with challenging terrain requirements.',
    },
    {
      img: projConvention,
      title: 'Convention Center',
      location: 'Kigali, Rwanda',
      desc: 'Modern convention facility with innovative architectural design.',
    },
    {
      img: productCuplock,
      title: 'Commercial Complex',
      location: 'Kigali, Rwanda',
      desc: 'Mixed-use commercial development project.',
    },
  ]

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="text-xs uppercase tracking-widest text-blue-600 mb-4">Portfolio</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Showcase of major construction projects we've supported across Rwanda.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group">
                <div className="overflow-hidden rounded-lg mb-4 bg-gray-200 h-64">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-3xl font-bold mb-12">By The Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '35+', label: 'Years of Service' },
              { stat: '100+', label: 'Major Projects' },
              { stat: '50+', label: 'Equipment Items' },
              { stat: '24/7', label: 'Support Available' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {item.stat}
                </div>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
