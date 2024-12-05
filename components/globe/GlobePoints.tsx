"use client"

import { useRef, useMemo } from 'react'
import { Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'
import { generateGlobePoints } from '@/lib/globe-utils'
import { useMouseMovement } from '@/hooks/use-mouse-movement'

export default function GlobePoints() {
  const pointsRef = useRef<any>()
  const points = useMemo(() => generateGlobePoints(1000), [])
  const mouseMovement = useMouseMovement(0.15)
  
  useFrame(({ clock }) => {
    if (!pointsRef.current) return
    
    const time = clock.getElapsedTime()
    const baseRotationY = time * 0.02
    
    pointsRef.current.rotation.x += (mouseMovement.y * 0.2 - pointsRef.current.rotation.x) * 0.02
    pointsRef.current.rotation.y += (baseRotationY + mouseMovement.x * 0.2 - pointsRef.current.rotation.y) * 0.02
  })

  return (
    <Points ref={pointsRef} positions={points} stride={3}>
      <pointsMaterial
        size={0.015}
        color={new Color("#4fc3dc")}
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </Points>
  )
}