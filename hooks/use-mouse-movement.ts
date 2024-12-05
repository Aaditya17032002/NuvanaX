"use client"

import { useState, useEffect, useCallback } from 'react'

interface MousePosition {
  x: number
  y: number
}

export function useMouseMovement(sensitivity: number = 0.5): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      
      setPosition({
        x: x * sensitivity,
        y: y * sensitivity
      })
    })
  }, [sensitivity])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return position
}