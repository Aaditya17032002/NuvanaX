"use client"

import { useRef, useMemo } from 'react'
import { Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'
import { generateParticles } from '@/lib/globe-utils'
import { useMouseMovement } from '@/hooks/use-mouse-movement'
import * as THREE from "three";


export default function GlobeParticles() {
  const particlesRef = useRef<THREE.Points | null>(null);
  const particles = useMemo(() => generateParticles(500), [])
  const mouseMovement = useMouseMovement(0.15)
  
  useFrame(({ clock }) => {
    if (!particlesRef.current) return
    
    const time = clock.getElapsedTime()
    const baseRotationY = time * 0.015
    
    particlesRef.current.rotation.x += (mouseMovement.y * 0.2 - particlesRef.current.rotation.x) * 0.015
    particlesRef.current.rotation.y += (baseRotationY + mouseMovement.x * 0.2 - particlesRef.current.rotation.y) * 0.015
  })

  return (
    <Points ref={particlesRef} positions={particles} stride={3}>
      <pointsMaterial
        size={0.008}
        color={new Color("#ffffff")}
        sizeAttenuation
        transparent
        opacity={0.4}
        depthWrite={false}
      />
    </Points>
  )
}