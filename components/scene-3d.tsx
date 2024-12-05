"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import {
  Environment,
  Float,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei"

function Model() {
  const gltf = useGLTF("/assets/3d/duck.glb")
  return <primitive object={gltf.scene} scale={2} />
}

export default function Scene3D() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Float
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Model />
        </Float>
      </Suspense>
    </Canvas>
  )
}

