import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleSphere() {
  const canvasRef = useRef(null)
  const particlesRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const hoverRef = useRef({ active: false, strength: 0 })

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(68, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    })

    camera.position.z = 4
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setClearAlpha(0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    canvasRef.current.style.background = 'transparent'

    const createDotTexture = () => {
      const size = 128
      const textureCanvas = document.createElement('canvas')
      textureCanvas.width = size
      textureCanvas.height = size
      const context = textureCanvas.getContext('2d')

      if (!context) {
        return null
      }

      const gradient = context.createRadialGradient(size / 2, size / 2, size * 0.08, size / 2, size / 2, size / 2)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.55, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.75)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      context.fillStyle = gradient
      context.fillRect(0, 0, size, size)

      const texture = new THREE.CanvasTexture(textureCanvas)
      texture.needsUpdate = true
      return texture
    }

    const particleCount = 3200
    const sphereRadius = 1.78
    const maxRadius = 2.12
    const baseColor = new THREE.Color(0xff6b35)
    const hoverColor = new THREE.Color(0x00b7ff)
    const mixedColor = new THREE.Color()
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const originalPositions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const x = sphereRadius * Math.sin(phi) * Math.cos(theta)
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta)
      const z = sphereRadius * Math.cos(phi)

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      originalPositions[i * 3] = x
      originalPositions[i * 3 + 1] = y
      originalPositions[i * 3 + 2] = z

      colors[i * 3] = baseColor.r
      colors[i * 3 + 1] = baseColor.g
      colors[i * 3 + 2] = baseColor.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const dotTexture = createDotTexture()

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.058,
      sizeAttenuation: true,
      map: dotTexture,
      alphaMap: dotTexture,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = {
      particles,
      positions,
      originalPositions,
      colors,
      geometry,
    }

    const onPointerMove = (event) => {
      const rect = canvasRef.current.getBoundingClientRect()
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      hoverRef.current.active = true
    }

    const onPointerLeave = () => {
      hoverRef.current.active = false
    }

    const canvas = canvasRef.current
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerleave', onPointerLeave)

    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      velocityRef.current.x += (mouseRef.current.x - velocityRef.current.x) * 0.035
      velocityRef.current.y += (mouseRef.current.y - velocityRef.current.y) * 0.035
      hoverRef.current.strength += ((hoverRef.current.active ? 1 : 0) - hoverRef.current.strength) * 0.045

      const pos = particlesRef.current.positions
      const orig = particlesRef.current.originalPositions
      const colorArray = particlesRef.current.colors
      const time = performance.now() * 0.001

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        const nx = orig[i3] / sphereRadius
        const ny = orig[i3 + 1] / sphereRadius
        const nz = orig[i3 + 2] / sphereRadius

        const slowWave = Math.sin(nx * 2.1 + ny * 1.4 + nz * 2.7 + time * 0.24)
        const crossWave = Math.sin(ny * 3.3 - nz * 1.9 + nx * 1.2 + time * 0.18)
        const swell = 1 + slowWave * 0.06 + crossWave * 0.032

        const waveX = orig[i3] * swell
        const waveY = orig[i3 + 1] * swell
        const waveZ = orig[i3 + 2] * swell

        const hoverX = velocityRef.current.x * 1.9
        const hoverY = velocityRef.current.y * 1.9
        const dx = waveX - hoverX
        const dy = waveY - hoverY
        const dz = waveZ
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

        const influence = Math.max(0, 1 - distance / 2.85) * hoverRef.current.strength
        const smoothInfluence = influence * influence * (3 - 2 * influence)
        const pushStrength = smoothInfluence * 0.18

        let x = waveX + velocityRef.current.x * pushStrength
        let y = waveY + velocityRef.current.y * pushStrength
        let z = waveZ * (1 - smoothInfluence * 0.11)

        const length = Math.sqrt(x * x + y * y + z * z)

        if (length > maxRadius) {
          const scale = maxRadius / length
          x *= scale
          y *= scale
          z *= scale
        }

        pos[i3] = x
        pos[i3 + 1] = y
        pos[i3 + 2] = z

        const colorMix = Math.min(1, smoothInfluence * 1.35)
        mixedColor.copy(baseColor).lerp(hoverColor, colorMix)
        colorArray[i3] = mixedColor.r
        colorArray[i3 + 1] = mixedColor.g
        colorArray[i3 + 2] = mixedColor.b
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.geometry.attributes.color.needsUpdate = true

      particles.rotation.x += 0.00012
      particles.rotation.y += 0.00018
      particles.rotation.z += 0.000035
      particles.position.y = Math.sin(time * 0.32) * 0.022
      particles.position.x = Math.cos(time * 0.24) * 0.014

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      const width = canvasRef.current.clientWidth
      const height = canvasRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      geometry.dispose()
      dotTexture?.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <canvas ref={canvasRef} className="block h-full overflow-visible w-full" />
    </div>
  )
}
