import { useEffect, useMemo, useRef } from 'react'

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

function toLocalPoint(event, element, bounds) {
  const rect = element.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / Math.max(1, rect.width)) * bounds.width
  const y = ((event.clientY - rect.top) / Math.max(1, rect.height)) * bounds.height
  return { x, y }
}

export default function PhysicsGrid({
  rows = 4,
  columns = 4,
  gap = 14,
  strength = 0.0018,
  radius = 220,
  className = '',
}) {
  const containerRef = useRef(null)
  const tilesRef = useRef([])
  const reducedMotionRef = useRef(false)

  const tileCount = rows * columns

  const style = useMemo(
    () => ({
      '--pg-gap': `${gap}px`,
      touchAction: 'none',
      cursor: 'crosshair',
    }),
    [gap],
  )

  useEffect(() => {
    const container = containerRef.current
    if (!container) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const tiles = []
    const ripples = []

    const pointer = {
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      lastX: 0,
      lastY: 0,
      hasLast: false,
    }

    let bounds = { width: 0, height: 0 }
    let rafId = 0
    let disposed = false
    let lastTime = 0
    let time = 0

    const setReducedMotion = () => {
      reducedMotionRef.current = media.matches
    }

    const ensureTile = (index, row, column) => {
      if (tiles[index]) return tiles[index]

      const parity = (row + column) % 2 === 0
      const tile = {
        row,
        column,
        homeX: 0,
        homeY: 0,
        width: 10,
        height: 46,
        baseAngle: ((row - (rows - 1) / 2) * 0.036 + (column - (columns - 1) / 2) * 0.026) * (parity ? 1 : -1),
        angle: 0,
        angularVelocity: 0,
        scale: 1,
        scaleTarget: 1,
        phase: row * 0.92 + column * 0.61,
      }

      tile.angle = tile.baseAngle
      tiles[index] = tile
      return tile
    }

    const layout = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      if (!width || !height) return

      bounds = { width, height }

      const safeColumns = Math.max(1, columns)
      const safeRows = Math.max(1, rows)
      const tightGap = clamp(gap * 0.35, 1, 8)

      const usableWidth = width - tightGap * (safeColumns - 1)
      const usableHeight = height - tightGap * (safeRows - 1)
      const cellWidth = usableWidth / safeColumns
      const cellHeight = usableHeight / safeRows

      for (let row = 0; row < safeRows; row += 1) {
        for (let column = 0; column < safeColumns; column += 1) {
          const index = row * safeColumns + column
          const tile = ensureTile(index, row, column)

          const x = column * (cellWidth + tightGap) + cellWidth * 0.5
          const y = row * (cellHeight + tightGap) + cellHeight * 0.5
          tile.homeX = x
          tile.homeY = y

          tile.width = clamp(cellWidth * 0.3, 10, 20)
          tile.height = clamp(cellHeight * 0.82, 34, 94)

          const node = tilesRef.current[index]
          if (!node) continue

          node.style.width = `${tile.width}px`
          node.style.height = `${tile.height}px`
          node.style.transform = `translate3d(${tile.homeX}px, ${tile.homeY}px, 0) translate(-50%, -50%) rotate(${tile.angle}rad) scale(${tile.scale})`
        }
      }
    }

    const exciteFromPointer = (x, y, pointerVx, pointerVy, intensity) => {
      const maxDist = Math.max(40, radius)

      for (let i = 0; i < tiles.length; i += 1) {
        const tile = tiles[i]
        if (!tile) continue

        const dx = tile.homeX - x
        const dy = tile.homeY - y
        const dist = Math.hypot(dx, dy)
        if (dist > maxDist) continue

        const falloff = 1 - dist / maxDist
        const tangential = (-dy * pointerVx + dx * pointerVy) / Math.max(60, dist)
        const impulse = tangential * intensity * falloff * falloff

        tile.angularVelocity += impulse
        tile.angularVelocity = clamp(tile.angularVelocity, -4.6, 4.6)
      }
    }

    const addRipple = (x, y, intensity = 1) => {
      const lifespan = (Math.max(bounds.width, bounds.height) + radius) / 460
      ripples.push({
        x,
        y,
        intensity,
        start: time,
        life: Math.max(0.45, lifespan),
        width: clamp(radius * 0.27, 38, 90),
        speed: clamp(radius * 2.3, 320, 620),
      })
    }

    const render = () => {
      const gradientWidth = Math.max(320, bounds.width * 1.5)
      const travel = (time * 140) % gradientWidth
      const gradientImage =
        'linear-gradient(90deg, #ff6a00 0%, #00b7ff 28%, #ff8b00 52%, #00b7ff 76%, #ff6a00 100%)'

      for (let i = 0; i < tiles.length; i += 1) {
        const tile = tiles[i]
        const node = tilesRef.current[i]
        if (!tile || !node) continue

        node.style.transform = `translate3d(${tile.homeX}px, ${tile.homeY}px, 0) translate(-50%, -50%) rotate(${tile.angle}rad) scale(${tile.scale})`
        node.style.backgroundImage = gradientImage
        node.style.backgroundRepeat = 'repeat-x'
        node.style.backgroundSize = `${gradientWidth}px 100%`
        node.style.backgroundPosition = `${travel - tile.homeX}px 50%`
      }
    }

    const animate = (now) => {
      if (disposed) return

      if (!lastTime) lastTime = now
      const dt = clamp((now - lastTime) * 0.001, 1 / 240, 1 / 24)
      lastTime = now
      time += dt

      if (!reducedMotionRef.current) {
        if (pointer.active) {
          exciteFromPointer(pointer.x, pointer.y, pointer.vx, pointer.vy, strength * 260)
          pointer.vx *= 0.76
          pointer.vy *= 0.76
        }

        for (let r = ripples.length - 1; r >= 0; r -= 1) {
          const ripple = ripples[r]
          const elapsed = time - ripple.start
          if (elapsed > ripple.life) {
            ripples.splice(r, 1)
            continue
          }

          const ring = elapsed * ripple.speed
          for (let i = 0; i < tiles.length; i += 1) {
            const tile = tiles[i]
            if (!tile) continue

            const dx = tile.homeX - ripple.x
            const dy = tile.homeY - ripple.y
            const dist = Math.hypot(dx, dy)
            const edgeDistance = Math.abs(dist - ring)
            if (edgeDistance > ripple.width) continue

            const band = 1 - edgeDistance / ripple.width
            const direction = (tile.row + tile.column) % 2 === 0 ? 1 : -1
            const pulse = direction * ripple.intensity * band * band * strength * 320

            tile.angularVelocity += pulse
            tile.scaleTarget = Math.max(tile.scaleTarget, 1 + band * 0.22)
          }
        }

        const idleAmount = pointer.active ? 0.016 : 0.04
        for (let i = 0; i < tiles.length; i += 1) {
          const tile = tiles[i]
          if (!tile) continue

          const idle = Math.sin(time * 0.95 + tile.phase) * idleAmount
          const base = tile.baseAngle + idle
          const displacement = tile.angle - base

          tile.angularVelocity += (-displacement * 14 - tile.angularVelocity * 6.2) * dt
          tile.angle += tile.angularVelocity * dt

          tile.scaleTarget += (1 - tile.scaleTarget) * 0.09
          tile.scale += (tile.scaleTarget - tile.scale) * 0.18
        }
      } else {
        for (let i = 0; i < tiles.length; i += 1) {
          const tile = tiles[i]
          if (!tile) continue
          tile.angle += (tile.baseAngle - tile.angle) * 0.2
          tile.scale += (1 - tile.scale) * 0.2
          tile.scaleTarget = 1
          tile.angularVelocity = 0
        }
      }

      render()
      rafId = window.requestAnimationFrame(animate)
    }

    const onPointerMove = (event) => {
      if (reducedMotionRef.current) return
      const { x, y } = toLocalPoint(event, container, bounds)

      if (!pointer.hasLast) {
        pointer.lastX = x
        pointer.lastY = y
        pointer.hasLast = true
      }

      const dx = x - pointer.lastX
      const dy = y - pointer.lastY

      pointer.active = true
      pointer.x = x
      pointer.y = y
      pointer.vx = dx
      pointer.vy = dy
      pointer.lastX = x
      pointer.lastY = y

      exciteFromPointer(x, y, dx, dy, strength * 380)
    }

    const onPointerDown = (event) => {
      if (reducedMotionRef.current) return
      const { x, y } = toLocalPoint(event, container, bounds)
      pointer.active = true
      pointer.x = x
      pointer.y = y
      addRipple(x, y, 1.2)
      exciteFromPointer(x, y, 0.8, -0.5, strength * 460)
    }

    const onPointerLeave = () => {
      pointer.active = false
      pointer.hasLast = false
      pointer.vx = 0
      pointer.vy = 0
    }

    const onResize = () => {
      layout()
    }

    setReducedMotion()
    media.addEventListener?.('change', setReducedMotion)
    media.addListener?.(setReducedMotion)

    layout()
    const measureRetry = window.setTimeout(layout, 120)
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)

    window.addEventListener('resize', onResize)
    container.addEventListener('pointermove', onPointerMove)
    container.addEventListener('pointerdown', onPointerDown)
    container.addEventListener('pointerleave', onPointerLeave)

    rafId = window.requestAnimationFrame(animate)

    return () => {
      disposed = true
      window.removeEventListener('resize', onResize)
      container.removeEventListener('pointermove', onPointerMove)
      container.removeEventListener('pointerdown', onPointerDown)
      container.removeEventListener('pointerleave', onPointerLeave)
      media.removeEventListener?.('change', setReducedMotion)
      media.removeListener?.(setReducedMotion)
      window.clearTimeout(measureRetry)
      try {
        resizeObserver.disconnect()
      } catch {
        // noop
      }
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [columns, gap, radius, rows, strength])

  return (
    <div ref={containerRef} style={style} className={`physics-grid relative overflow-hidden border border-white/0 ${className}`}>
      {Array.from({ length: tileCount }).map((_, index) => (
        <div
          key={index}
          ref={(node) => {
            tilesRef.current[index] = node
          }}
          className="physics-grid__tile absolute left-0 top-0 overflow-hidden will-change-transform"
          style={{
            transform: 'translate3d(-9999px, -9999px, 0)',
            opacity: 0.92,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
