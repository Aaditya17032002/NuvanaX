"use client"

import { useState, useEffect } from 'react'

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight
        })
      })
    }

    window.addEventListener('mousemove', updatePosition, { passive: true })
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  return position
}