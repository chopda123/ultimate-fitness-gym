'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { 
    label: 'Services', 
    dropdown: [
      { name: 'Personal Training', href: '#personal-training' },
      { name: 'Strength Training', href: '#strength-training' },
      { name: 'Weight Loss Programs', href: '#weight-loss' },
      { name: 'Muscle Building', href: '#muscle-building' },
      { name: 'Beginner Programs', href: '#beginner' },
    ]
  },
  { 
    label: 'Gallery', 
    dropdown: [
      { name: 'Gym Facilities', href: '#gym-facilities' },
      { name: 'Equipment Tour', href: '#equipment' },
      { name: 'Training Sessions', href: '#sessions' },
    ]
  },
  { 
    label: 'Trainers', 
    dropdown: [
      { name: 'Our Team', href: '#trainers' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Success Stories', href: '#stories' },
    ]
  },
  { 
    label: 'Contact', 
    dropdown: [
      { name: 'Location', href: '#location' },
      { name: 'Hours', href: '#hours' },
      { name: 'Book a Tour', href: '#tour' },
    ]
  },
]

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  return (
    <>
      <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-900 sticky top-0 z-50 shadow-2xl shadow-red-500/5">
        <div className="container-lg">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="font-montserrat text-2xl font-black tracking-tighter">
                <span className="text-red-600">ULTIMATE</span>
                <span className="text-white">FITNESS</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center text-gray-300 hover:text-white font-semibold text-sm transition-colors">
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  
                  {/* Desktop Dropdown */}
                  {openDropdown === item.label && (
                    <div className="dropdown-menu">
                      {item.dropdown.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <a 
                href="https://wa.me/18005551234"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button text-sm"
              >
                Join Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-400 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden bg-black border-t border-gray-800 py-4">
              {navItems.map((item) => (
                <div key={item.label} className="mb-4">
                  <button
                    className="flex justify-between items-center w-full text-left text-gray-300 hover:text-white font-semibold py-2"
                    onClick={() => setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )}
                  >
                    {item.label}
                    <ChevronDown className={`transition-transform ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {openDropdown === item.label && (
                    <div className="mobile-dropdown">
                      {item.dropdown.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block text-gray-400 hover:text-white text-sm py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="https://wa.me/18005551234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button block text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}