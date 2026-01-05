'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Check if hovering over clickable element
      const target = e.target
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      )
    }

    window.addEventListener('mousemove', moveCursor)
    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      {/* Outer Cursor */}
      <div 
        className="fixed z-[9999] pointer-events-none mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
            isPointer 
              ? 'bg-white/20 border-white scale-150' 
              : 'border-white'
          }`}
        />
      </div>
      
      {/* Inner Dot */}
      <div 
        className="fixed z-[10000] pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-100 ${
            isPointer ? 'bg-red-500 scale-0' : 'bg-white'
          }`}
        />
      </div>
    </>
  )
}