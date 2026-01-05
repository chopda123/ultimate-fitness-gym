export default function FinalCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-black to-gray-900">
      <div className="container-lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="font-montserrat text-3xl md:text-5xl font-bold mb-6">
              YOUR <span className="text-red-600">TRANSFORMATION</span> STARTS TODAY
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop planning. Start doing. Join the gym where serious people get serious results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-500 mb-2">1</div>
              <h4 className="text-lg font-bold mb-2">Free Consultation</h4>
              <p className="text-gray-400 text-sm">Meet with a trainer, discuss goals</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-500 mb-2">2</div>
              <h4 className="text-lg font-bold mb-2">Custom Plan</h4>
              <p className="text-gray-400 text-sm">Get your personalized program</p>
            </div>
            <div className="bg-black border border-gray-800 rounded-xl p-6">
              <div className="text-3xl font-bold text-red-500 mb-2">3</div>
              <h4 className="text-lg font-bold mb-2">Start Training</h4>
              <p className="text-gray-400 text-sm">Begin your transformation journey</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <a 
              href="https://wa.me/18005551234"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block text-lg px-12 py-4"
            >
              📱 WhatsApp for Quick Start
            </a>
            <div className="text-gray-400">
              or call us directly at{' '}
              <a href="tel:+18005551234" className="text-red-500 hover:text-red-400 font-semibold">
                +1 (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}