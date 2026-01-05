'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated Rings */}
        <div className="absolute inset-0">
          <div className="w-24 h-24 border-4 border-transparent border-t-red-500 rounded-full animate-spin" />
          <div className="w-32 h-32 border-4 border-transparent border-t-amber-500 rounded-full animate-spin" style={{ animationDelay: '-0.5s' }} />
        </div>
        
        {/* Logo */}
        <div className="relative z-10">
          <div className="font-montserrat text-3xl font-black">
            <span className="text-gradient">ULTIMATE</span>
            <span className="text-white">FITNESS</span>
          </div>
          <div className="text-center mt-2">
            <div className="text-gray-400 text-sm">Loading Elite Experience</div>
          </div>
        </div>
      </div>
    </div>
  )
}