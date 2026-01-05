'use client'

import { Phone, MessageSquare } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href="https://wa.me/18005551234"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-all hover:scale-105"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-black border-t border-gray-800">
          <div className="container-lg">
            <div className="flex items-center justify-between py-3">
              <a
                href="tel:+18005551234"
                className="flex-1 flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md mx-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/18005551234"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md mx-2 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}