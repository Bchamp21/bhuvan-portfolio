import { Canvas } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei'

const orbs = [
  { pos: [0, 0, 0] as [number, number, number], color: '#3b4cff', scale: 1 },
  { pos: [-1.4, 0.4, -0.4] as [number, number, number], color: '#0ea5e9', scale: 0.45 },
  { pos: [1.2, 0.5, -0.2] as [number, number, number], color: '#db2777', scale: 0.38 },
  { pos: [0.7, -0.7, 0.3] as [number, number, number], color: '#16a34a', scale: 0.34 },
  { pos: [-0.8, -0.6, 0.2] as [number, number, number], color: '#ca8a04', scale: 0.3 },
]

function Orb({ pos, color, scale }: { pos: [number, number, number]; color: string; scale: number }) {
  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.2}>
      <Sphere args={[scale, 32, 32]} position={pos}>
        <MeshDistortMaterial color={color} distort={0.25} speed={1.5} roughness={0.25} metalness={0.1} />
      </Sphere>
    </Float>
  )
}

export default function SkillGalaxy() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 2]} intensity={1.1} />
      {orbs.map((o) => (
        <Orb key={o.color} {...o} />
      ))}
    </Canvas>
  )
}
