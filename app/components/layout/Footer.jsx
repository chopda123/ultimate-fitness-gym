import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="container-lg">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-montserrat text-2xl font-black mb-4">
                <span className="text-red-600">ULTIMATE</span>
                <span className="text-white">FITNESS</span>
              </div>
              <p className="text-gray-400 mb-6">
                Serious training for serious results. Transform your body with intention.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                <li><a href="#trainers" className="text-gray-400 hover:text-white">Trainers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#personal-training" className="text-gray-400 hover:text-white">Personal Training</a></li>
                <li><a href="#weight-loss" className="text-gray-400 hover:text-white">Weight Loss</a></li>
                <li><a href="#muscle-building" className="text-gray-400 hover:text-white">Muscle Building</a></li>
                <li><a href="#beginner" className="text-gray-400 hover:text-white">Beginner Programs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">123 Fitness Avenue</li>
                <li className="text-gray-400">Downtown, NY 10001</li>
                <li>
                  <a href="tel:+18005551234" className="text-gray-400 hover:text-white">
                    +1 (800) 555-1234
                  </a>
                </li>
                <li>
                  <a href="mailto:info@ultimatefitness.com" className="text-gray-400 hover:text-white">
                    info@ultimatefitness.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} ULTIMATE FITNESS. All rights reserved.</p>
            <p className="mt-2">Professional gym website template for fitness businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}