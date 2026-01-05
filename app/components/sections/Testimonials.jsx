import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Michael R.",
    role: "Lost 42 lbs",
    content: "After trying 3 other gyms, Ultimate Fitness was the first place that felt serious. The trainers actually know what they're doing. 6 months in, I'm stronger than I was in my 20s.",
    rating: 5,
    duration: "6 months"
  },
  {
    name: "Sarah L.",
    role: "Transformation Challenge Winner",
    content: "The programming is next level. Not just random workouts - actual progressive overload that gets results. The equipment is always maintained, never broken.",
    rating: 5,
    duration: "8 months"
  },
  {
    name: "David K.",
    role: "Gained 18 lbs muscle",
    content: "As someone who lifts heavy, the equipment quality matters. Everything here is commercial grade. The trainers actually compete and know advanced techniques.",
    rating: 5,
    duration: "1 year"
  },
  {
    name: "Jessica M.",
    role: "First-time gym member",
    content: "Was nervous starting out, but the beginner program was perfect. Trainers are patient but push you correctly. Now I train 5x a week and love it.",
    rating: 5,
    duration: "4 months"
  }
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-black">
      <div className="container-lg">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
            ))}
            <span className="ml-3 text-gray-300 font-semibold">4.9/5 • 1,247 Reviews</span>
          </div>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            REAL <span className="text-red-600">RESULTS</span>, REAL MEMBERS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't take our word for it. Here's what our members say about their transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-red-600/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-red-500 font-semibold">{testimonial.role}</p>
                </div>
                <Quote className="w-8 h-8 text-red-600/30" />
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">{testimonial.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">14+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">100k+</div>
              <div className="text-gray-400">Members Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
              <div className="text-gray-400">Certified Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">4.9</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}