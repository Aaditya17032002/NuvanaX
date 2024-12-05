"use client"

import { useRef, useMemo } from 'react'
import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { generateGlobeLines } from '@/lib/globe-utils'
import { useMouseMovement } from '@/hooks/use-mouse-movement'

export default function GlobeLines() {
  const linesRef = useRef<any>()
  const lines = useMemo(() => generateGlobeLines(30), [])
  const mouseMovement = useMouseMovement(0.15)
  
  useFrame(({ clock }) => {
    if (!linesRef.current) return
    
    const time = clock.getElapsedTime()
    const baseRotationY = time * 0.02
    
    linesRef.current.rotation.x += (mouseMovement.y * 0.2 - linesRef.current.rotation.x) * 0.02
    linesRef.current.rotation.y += (baseRotationY + mouseMovement.x * 0.2 - linesRef.current.rotation.y) * 0.02
  })

  return (
    <group ref={linesRef}>
      {lines.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#4fc3dc"
          lineWidth={0.3}
          transparent
          opacity={0.2}
        />
      ))}
    </group>
  )
}