import { Dumbbell, Heart, Target, Shield } from 'lucide-react'

const features = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Premium Equipment",
    description: "State-of-the-art strength & cardio machines from leading brands.",
    gradient: "from-red-500/20 to-amber-500/20"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Personal Training",
    description: "1-on-1 coaching with certified elite trainers.",
    gradient: "from-amber-500/20 to-red-500/20"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Elite Fitness Culture",
    description: "Train alongside dedicated individuals in a focused environment.",
    gradient: "from-red-500/20 to-amber-500/20"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Certified Expertise",
    description: "All trainers hold elite certifications with 5+ years experience.",
    gradient: "from-amber-500/20 to-red-500/20"
  }
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-black">
      <div className="container-lg">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            WHY <span className="text-gradient">ULTIMATE FITNESS</span> IS DIFFERENT
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We don't just provide equipment—we deliver transformations through expertise, environment, and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-red-500/10 to-amber-500/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                    <div className="text-gradient">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}