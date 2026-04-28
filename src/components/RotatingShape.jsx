import { useEffect, useRef } from 'react'
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  MeshStandardMaterial,
  IcosahedronGeometry,
  TorusGeometry,
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  Fog,
  Color,
  Group,
} from 'three'

export default function RotatingShape({ className = '' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new Scene()
    scene.background = new Color(0x00000)


    const width = mount.clientWidth || 600
    const height = mount.clientHeight || 360

    const camera = new PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(0, 0, 6)

    const renderer = new WebGLRenderer({ alpha: false, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x0a0a0a, 1)
    mount.appendChild(renderer.domElement)

    const group = new Group()
    scene.add(group)

    // Main mesh
    const geom = new IcosahedronGeometry(1.08, 2)
    const mat = new MeshStandardMaterial({
      color: 0xff6a00,
      metalness: 0,
      roughness: 0.88,
      emissive: 0xff5a00,
      emissiveIntensity: 0.55,
    })
    const mesh = new Mesh(geom, mat)
    group.add(mesh)

    // solid orbital ring
    const geom2 = new TorusGeometry(1.62, 0.08, 16, 96)
    const mat2 = new MeshStandardMaterial({
      color: 0x102a33,
      metalness: 0,
      roughness: 0.7,
      emissive: 0x00b7ff,
      emissiveIntensity: 0.22,
    })
    const mesh2 = new Mesh(geom2, mat2)
    mesh2.rotation.x = Math.PI * 0.5
    group.add(mesh2)

    const geom3 = new TorusGeometry(1.95, 0.04, 10, 120)
    const mat3 = new MeshStandardMaterial({
      color: 0x20150d,
      metalness: 0,
      roughness: 1,
      emissive: 0xff6a00,
      emissiveIntensity: 0.08,
    })
    const mesh3 = new Mesh(geom3, mat3)
    mesh3.rotation.y = Math.PI * 0.35
    group.add(mesh3)

    const amb = new AmbientLight(0xffffff, 0.6)
    scene.add(amb)

    const hemi = new HemisphereLight(0xffb27a, 0x00b7ff, 0.5)
    scene.add(hemi)

    const dir = new DirectionalLight(0xffffff, 0.9)
    dir.position.set(5, 5, 5)
    scene.add(dir)

    let raf = null
    let start = performance.now()

    function onResize() {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    function animate(now) {
      const t = (now - start) * 0.001
      // rotate group and bob camera slightly
      group.rotation.x = Math.sin(t * 0.6) * 0.15
      group.rotation.y += 0.0075
      group.rotation.z = Math.cos(t * 0.4) * 0.08

      // subtle pulsate color blend
      const r = 0.5 + 0.5 * Math.sin(t * 1.2)
      mat.color.lerpColors(new Color(0xff6a00), new Color(0xff9c4d), r)
      mat.emissive.lerpColors(new Color(0xff4d00), new Color(0xff7f2a), r)
      mat2.emissiveIntensity = 0.18 + 0.05 * Math.sin(t * 1.4)
      mat3.emissiveIntensity = 0.06 + 0.02 * Math.sin(t * 1.1)
      mesh2.rotation.z = t * 0.42
      mesh3.rotation.x = -t * 0.25

      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', onResize)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
      // cleanup three objects
      mesh.geometry.dispose()
      mat.dispose()
      mesh2.geometry.dispose()
      mat2.dispose()
      mesh3.geometry.dispose()
      mat3.dispose()
      renderer.dispose()
      try {
        mount.removeChild(renderer.domElement)
      } catch (e) {
        // ignore
      }
    }
  }, [])

  return <div ref={mountRef} className={`relative overflow-hidden ${className}`} />
}
