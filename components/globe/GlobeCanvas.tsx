"use client"

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei'
import GlobePoints from './GlobePoints'
import GlobeLines from './GlobeLines'
import GlobeParticles from './GlobeParticles'

export default function GlobeCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
          near: 0.1,
          far: 1000
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true // Enable depth if necessary
        }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Preload all />
        <Suspense fallback={<div>Loading 3D Content...</div>}>
          <color attach="background" args={['#000B1F']} />
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <GlobePoints />
          <GlobeLines />
          <GlobeParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}
