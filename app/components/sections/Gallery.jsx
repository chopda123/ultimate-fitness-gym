'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?auto=format&fit=crop&w=800',
    category: 'Facilities',
    title: 'Main Training Floor'
  },
  {
    src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800',
    category: 'Equipment',
    title: 'Premium Strength Zone'
  },
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w-800',
    category: 'Training',
    title: 'Personal Coaching Session'
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800',
    category: 'Facilities',
    title: 'Functional Training Area'
  },
  {
    src: 'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?auto=format&fit=crop&w=800',
    category: 'Equipment',
    title: 'Cardio Theater'
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800',
    category: 'Community',
    title: 'Group Training'
  }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Facilities', 'Equipment', 'Training', 'Community']

  return (
    <section id="gallery" className="section-padding bg-black">
      <div className="container-lg">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            INSIDE <span className="text-red-600">THE GYM</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Experience our world-class facilities designed for serious training.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Preview */}
        <div className="mb-12 relative rounded-2xl overflow-hidden">
          <div className="aspect-video bg-gray-900 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200)'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 rounded-full p-6 transition-transform hover:scale-110">
                <Play className="w-8 h-8 text-white" fill="white" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <span className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
              Tour Our Facility
            </span>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages
            .filter(img => selectedCategory === 'All' || img.category === selectedCategory)
            .map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-red-500 text-sm font-semibold">
                    {image.category}
                  </span>
                  <h4 className="text-white text-lg font-bold">{image.title}</h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}