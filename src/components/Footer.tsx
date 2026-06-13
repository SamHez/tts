import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">TTS</h3>
            <p className="text-gray-300 text-sm">
              Trustable Technical Services — Scaffolding, equipment and maintenance services for Rwanda's biggest builds.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p>+250 788 751 529</p>
                  <p>+250 727 045 447</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <p>trustabletechnicalservices@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Location</h4>
            <div className="flex gap-2 text-sm text-gray-300">
              <MapPin size={16} className="flex-shrink-0 mt-1" />
              <p>Gasabo District<br />Kigali, Rwanda</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TTS Ltd. All rights reserved. Est. 1988</p>
        </div>
      </div>
    </footer>
  )
}
