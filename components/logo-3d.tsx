"use client"

import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PerspectiveCamera, Float } from "@react-three/drei"
import * as THREE from "three"

function LogoGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#0066FF"
          roughness={0.3}
          metalness={0.8}
          emissive="#0044AA"
          emissiveIntensity={0.2}
        />
      </mesh>
      <mesh position={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
        <meshStandardMaterial
          color="#0088FF"
          roughness={0.2}
          metalness={0.9}
          emissive="#0055CC"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

export function Logo3D() {
  return (
    <div className="w-16 h-16">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <LogoGeometry />
      </Canvas>
    </div>
  )
}

