import { MapPin, Phone, Clock, Car } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-900/30">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
              VISIT OUR <span className="text-red-600">FACILITY</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Location</h4>
                  <p className="text-gray-300">
                    123 Fitness Avenue<br />
                    Downtown, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Contact</h4>
                  <p className="text-gray-300">
                    <a href="tel:+18005551234" className="hover:text-red-400">
                      +1 (800) 555-1234
                    </a><br />
                    <a href="mailto:info@ultimatefitness.com" className="hover:text-red-400">
                      info@ultimatefitness.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Hours</h4>
                  <div className="text-gray-300 space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">5:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">7:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">7:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Car className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold mb-1">Parking & Access</h4>
                  <p className="text-gray-300">
                    • Free underground parking for members<br />
                    • 24/7 secure access<br />
                    • Wheelchair accessible<br />
                    • Locker rooms with showers
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Ready to Start?</h4>
              <p className="text-gray-400 mb-6">
                Book a free tour and meet with a trainer to discuss your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://wa.me/18005551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button text-center text-sm"
                >
                  Book Free Tour
                </a>
                <a 
                  href="tel:+18005551234"
                  className="cta-button-secondary text-center text-sm"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            {/* Google Map Placeholder */}
            <div className="h-[500px] bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Map Integration Ready</h4>
                  <p className="text-gray-400">Embed Google Maps with your location</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-800">
              <h4 className="font-bold mb-2">📍 Getting Here</h4>
              <p className="text-gray-400 text-sm">
                Subway: Lines 1, 2, 3 to 34th St<br />
                Bus: M34, M16, M12<br />
                Parking: Enter on 35th St between 8th & 9th Ave
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}