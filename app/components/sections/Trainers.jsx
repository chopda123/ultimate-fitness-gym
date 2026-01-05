import { Award, Target, Users, Clock } from 'lucide-react'

export default function Trainers() {
  return (
    <section id="trainers" className="section-padding bg-gray-900/30">
      <div className="container-lg">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
              TRAIN WITH <span className="text-red-600">PURPOSE</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Our trainers aren't just coaches—they're transformation specialists. Each brings a unique methodology but shares one philosophy: <span className="text-red-500 font-semibold">real results require real work.</span>
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600/10 rounded-lg">
                  <Award className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Certified Excellence</h4>
                  <p className="text-gray-400">
                    Minimum 5 years experience with NASM, ACE, or ISSA certifications. Continuous education ensures cutting-edge methods.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600/10 rounded-lg">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Goal-Focused Approach</h4>
                  <p className="text-gray-400">
                    Every program starts with your specific objectives. We measure progress scientifically, not emotionally.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-600/10 rounded-lg">
                  <Users className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Community Driven</h4>
                  <p className="text-gray-400">
                    Train in an environment of motivated individuals. Our culture fosters accountability, support, and shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800)' }}
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800)' }}
                  />
                </div>
              </div>
              <div className="pt-12">
                <div className="aspect-square rounded-xl overflow-hidden mb-4">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800)' }}
                  />
                </div>
                <div className="bg-black border border-gray-800 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-red-500" />
                    <span className="font-semibold">Average Results</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">15-25</div>
                      <div className="text-gray-400 text-sm">lbs lost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">5-10</div>
                      <div className="text-gray-400 text-sm">% body fat</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">12</div>
                      <div className="text-gray-400 text-sm">weeks avg</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}