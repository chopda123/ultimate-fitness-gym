import { TrendingUp, Scale, Target, UserPlus, Flame, Brain } from 'lucide-react'

const services = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Personal Training",
    description: "Customized workout plans with dedicated coach",
    benefits: ["Goal-specific programming", "Form correction", "Nutrition guidance", "Accountability"]
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Weight Loss",
    description: "Sustainable fat loss programs",
    benefits: ["Metabolic conditioning", "Diet planning", "Progress tracking", "Lifestyle coaching"]
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Muscle Building",
    description: "Hypertrophy-focused training",
    benefits: ["Strength progression", "Volume programming", "Recovery protocols", "Supplement advice"]
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Beginner Programs",
    description: "Foundation building for new members",
    benefits: ["Form fundamentals", "Confidence building", "Safe progression", "Community integration"]
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Strength Training",
    description: "Powerlifting & strength development",
    benefits: ["Technique mastery", "Strength cycles", "Competition prep", "Equipment specialized"]
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Mindset Coaching",
    description: "Psychological edge training",
    benefits: ["Mental toughness", "Habit formation", "Stress management", "Performance mindset"]
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-900/30">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            OUR <span className="text-red-600">TRANSFORMATION</span> SERVICES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive programs designed for measurable results, not just workouts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black border border-gray-800 rounded-xl p-6 hover:border-red-600/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                  <div className="text-red-500">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <span className="text-red-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <a 
                href={`https://wa.me/18005551234?text=I'm interested in ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-red-500 hover:text-red-400 font-semibold text-sm"
              >
                Enquire Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}