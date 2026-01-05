// import { CheckCircle, Award, Users } from 'lucide-react'

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-[url('/images/gym/hero-bg.jpg')] bg-cover bg-center"
//         style={{
//           backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2070)'
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
//       </div>

//       <div className="container-lg relative z-10">
//         <div className="max-w-3xl">
//           <div className="mb-6">
//             <div className="inline-flex items-center bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-4">
//               <span className="text-red-400 text-sm font-semibold">
//                 SINCE 2010 • 100,000+ TRANSFORMATIONS
//               </span>
//             </div>
            
//             <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
//               TRANSFORM YOUR
//               <span className="block text-red-600">PHYSIQUE</span>
//               WITH INTENTION
//             </h1>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl">
//               Where discipline meets results. Join the 1% who commit to real transformation with certified trainers, elite equipment, and a culture of excellence.
//             </p>
//           </div>

//           {/* CTAs */}
//           <div className="flex flex-col sm:flex-row gap-4 mb-12">
//             <a 
//               href="https://wa.me/18005551234"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="cta-button text-center"
//             >
//               📱 Start on WhatsApp
//             </a>
//             <a 
//               href="tel:+18005551234"
//               className="cta-button-secondary text-center"
//             >
//               📞 Call for Consultation
//             </a>
//           </div>

//           {/* Trust Signals */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="flex items-center space-x-3">
//               <CheckCircle className="text-red-500 w-6 h-6 flex-shrink-0" />
//               <div>
//                 <div className="text-lg font-bold">50+ Certified Trainers</div>
//                 <div className="text-gray-400 text-sm">Expert guidance</div>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <Award className="text-red-500 w-6 h-6 flex-shrink-0" />
//               <div>
//                 <div className="text-lg font-bold">14 Years Excellence</div>
//                 <div className="text-gray-400 text-sm">Proven results</div>
//               </div>
//             </div>
            
//             <div className="flex items-center space-x-3">
//               <Users className="text-red-500 w-6 h-6 flex-shrink-0" />
//               <div>
//                 <div className="text-lg font-bold">100k+ Members</div>
//                 <div className="text-gray-400 text-sm">Community trusted</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }















import { CheckCircle, Award, Users, ArrowRight } from 'lucide-react'
import Particles from '@/app/components/ui/Particles'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>
      
      {/* Particles Effect */}
      <Particles />
      
      {/* Animated Rings */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-lg relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-red-500/20 to-amber-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <span className="text-gradient font-bold text-sm tracking-widest">
                ELITE FITNESS SINCE 2010 • 100,000+ TRANSFORMATIONS
              </span>
            </div>
            
            {/* Enhanced Headline */}
            <h1 className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-glow">
              <span className="block">REDEFINE</span>
              <span className="block text-gradient">YOUR LIMITS</span>
            </h1>
            
            {/* Premium Subtitle */}
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              Where discipline meets excellence. Join the elite who choose transformation over temporary fixes, with certified trainers, state-of-the-art equipment, and a culture of achievement.
            </p>
          </div>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a 
              href="https://wa.me/18005551234"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-3">
                📱 Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-white/10 to-red-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </a>
            
            <a 
              href="tel:+18005551234"
              className="border-gradient bg-black/50 backdrop-blur-sm text-white font-bold py-4 px-10 rounded-lg hover:bg-black/70 transition-all duration-300 flex items-center justify-center gap-3"
            >
              📞 Book Elite Consultation
            </a>
          </div>

          {/* Enhanced Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <CheckCircle className="w-7 h-7" />, title: "50+ Certified Elite Trainers", desc: "Expert guidance" },
              { icon: <Award className="w-7 h-7" />, title: "14 Years Excellence", desc: "Proven methodologies" },
              { icon: <Users className="w-7 h-7" />, title: "100k+ Members", desc: "Elite community" }
            ].map((item, idx) => (
              <div key={idx} className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <div className="text-gradient">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}