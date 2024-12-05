import { Vector3 } from 'three'

const memoizedData = new Map<string, Float32Array | Vector3[][]>()

export function generateGlobePoints(count: number): Float32Array {
  const key = `points-${count}`
  if (memoizedData.has(key)) return memoizedData.get(key) as Float32Array

  const points = new Float32Array(count * 3)
  const radius = 2

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos((Math.random() * 2) - 1)
    
    points[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    points[i * 3 + 2] = radius * Math.cos(phi)
  }

  memoizedData.set(key, points)
  return points
}

export function generateGlobeLines(count: number): Vector3[][] {
  const key = `lines-${count}`
  if (memoizedData.has(key)) return memoizedData.get(key) as Vector3[][]

  const lines: Vector3[][] = []
  const radius = 2

  for (let i = 0; i < count; i++) {
    const line: Vector3[] = []
    const startTheta = Math.random() * Math.PI * 2
    const startPhi = Math.acos((Math.random() * 2) - 1)
    
    const steps = 20
    for (let j = 0; j < steps; j++) {
      const theta = startTheta + (j / steps) * Math.PI
      const phi = startPhi + (j / steps) * Math.PI * 0.5
      
      line.push(new Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ))
    }
    
    lines.push(line)
  }

  memoizedData.set(key, lines)
  return lines
}

export function generateParticles(count: number): Float32Array {
  const key = `particles-${count}`
  if (memoizedData.has(key)) return memoizedData.get(key) as Float32Array

  const particles = new Float32Array(count * 3)
  const radius = 2.5

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos((Math.random() * 2) - 1)
    const r = radius + (Math.random() - 0.5) * 0.2
    
    particles[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    particles[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    particles[i * 3 + 2] = r * Math.cos(phi)
  }

  memoizedData.set(key, particles)
  return particles
}

