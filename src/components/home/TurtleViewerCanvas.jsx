import { Suspense, useEffect, useMemo, useRef } from 'react'

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Environment, Html, OrbitControls } from '@react-three/drei'
import gsap from 'gsap'
import { Box3, DoubleSide, MeshStandardMaterial, SRGBColorSpace, TextureLoader, Vector3 } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

import turtleObjUrl from '../../assets/3D/10042_Sea_Turtle_V2_iterations-2.obj?url'
import turtleDiffuseUrl from '../../assets/3D/10042_Sea_Turtle_V1_Diffuse.jpg'

const DEFAULT_FOCUS = {
  position: [0, 0.35, 7.8],
  target: [0, 0, 0],
}

function TurtleModel({ highlightedPartId, autoRotate = true }) {
  const groupRef = useRef(null)
  const obj = useLoader(OBJLoader, turtleObjUrl)
  const texture = useLoader(TextureLoader, turtleDiffuseUrl)

  const model = useMemo(() => {
    const clone = obj.clone(true)
    const box = new Box3().setFromObject(clone)
    const size = new Vector3()
    const center = new Vector3()

    texture.colorSpace = SRGBColorSpace

    box.getSize(size)
    box.getCenter(center)

    const maxDimension = Math.max(size.x, size.y, size.z) || 1
    const normalizedScale = 4.7 / maxDimension

    clone.position.sub(center)
    clone.scale.setScalar(normalizedScale)
    clone.rotation.set(-Math.PI / 2, 0, Math.PI / 2)

    clone.traverse((child) => {
      if (!child.isMesh) {
        return
      }

      child.castShadow = true
      child.receiveShadow = true

      const nextMaterial = new MeshStandardMaterial({
        map: texture,
        color: '#ffe2b0',
        roughness: 0.84,
        metalness: 0.02,
        side: DoubleSide,
      })

      nextMaterial.emissive.set('#1d437f')
      nextMaterial.emissiveIntensity = 0.08
      child.material = nextMaterial
    })

    return clone
  }, [obj, texture])

  useEffect(() => {
    model.traverse((child) => {
      if (!child.isMesh) {
        return
      }

      const material = Array.isArray(child.material) ? child.material[0] : child.material

      if (!material) {
        return
      }

      gsap.to(material.color, {
        r: highlightedPartId ? 1 : 0.95,
        g: highlightedPartId ? 0.86 : 0.76,
        b: highlightedPartId ? 0.56 : 0.49,
        duration: 0.35,
        ease: 'power2.out',
      })
      gsap.to(material, {
        emissiveIntensity: highlightedPartId ? 0.12 : 0.04,
        duration: 0.35,
        ease: 'power2.out',
      })
    })
  }, [highlightedPartId, model])

  useFrame((state) => {
    if (!groupRef.current) {
      return
    }

    if (autoRotate) {
      groupRef.current.rotation.z += 0.0042
    }

    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.1) * 0.06
  })

  return (
    <group ref={groupRef}>
      <primitive object={model} />
    </group>
  )
}

function CameraRig({ focus }) {
  const { camera } = useThree()

  useEffect(() => {
    const nextFocus = focus ?? DEFAULT_FOCUS

    gsap.to(camera.position, {
      x: nextFocus.position[0],
      y: nextFocus.position[1],
      z: nextFocus.position[2],
      duration: 0.6,
      ease: 'power3.out',
      onUpdate: () => camera.lookAt(nextFocus.target[0], nextFocus.target[1], nextFocus.target[2]),
    })
  }, [camera, focus])

  useFrame(() => {
    const nextFocus = focus ?? DEFAULT_FOCUS
    camera.lookAt(nextFocus.target[0], nextFocus.target[1], nextFocus.target[2])
  })

  return null
}

function TurtleCanvasFallback() {
  return (
    <Html center>
      <div className="rounded-full border border-[#8ed8ff]/40 bg-[#04175f]/74 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#d6f7ff] shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
        MEMUAT MODEL
      </div>
    </Html>
  )
}

function TurtleViewerCanvas({ highlightedPartId, focus, mode = 'stage' }) {
  const isDialog = mode === 'dialog'

  return (
    <Canvas
      camera={{ position: isDialog ? [0, 0.5, 7.2] : [0, 0.2, 7.8], fov: isDialog ? 27 : 25 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.8]}
      shadows
    >
      <fog attach="fog" args={['#041b57', 8, 16]} />
      <ambientLight intensity={1.55} color="#fff3d8" />
      <directionalLight position={[5, 7, 8]} intensity={2.4} color="#fff1c7" castShadow />
      <pointLight position={[-6, 2, 6]} intensity={1.1} color="#86ebff" />
      <pointLight position={[0, -4, 5]} intensity={0.68} color="#6ab7ff" />
      <spotLight position={[0, 6, 8]} intensity={1.2} angle={0.48} penumbra={0.6} color="#fff6d8" />

      <Suspense fallback={<TurtleCanvasFallback />}>
        <CameraRig focus={focus} />
        <TurtleModel highlightedPartId={highlightedPartId} autoRotate={isDialog} />
        <Environment preset="sunset" />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.1}
        maxPolarAngle={Math.PI / 2.1}
        rotateSpeed={0.65}
      />
    </Canvas>
  )
}

export default TurtleViewerCanvas
