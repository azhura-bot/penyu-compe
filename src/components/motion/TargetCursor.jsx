import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import turtleCursor from '../../assets/images/penyu.png'

function TargetCursor({ containerRef }) {
  const cursorRef = useRef(null)
  const turtleRef = useRef(null)
  const trailLayerRef = useRef(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const spawnTimeRef = useRef(0)

  useEffect(() => {
    const container = containerRef?.current ?? document.documentElement
    const cursor = cursorRef.current
    const turtle = turtleRef.current
    const trailLayer = trailLayerRef.current

    if (!container || !cursor || !turtle || !trailLayer) {
      return undefined
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotionQuery.matches) {
      return undefined
    }

    const root = document.documentElement
    let isVisible = false
    cursor.style.opacity = '0'
    cursor.style.transform = 'translate3d(-9999px, -9999px, 0)'

    const showCursor = () => {
      if (!isVisible) {
        isVisible = true
        root.classList.add('has-fancy-cursor')
        cursor.style.opacity = '1'
      }
    }

    const hideCursor = () => {
      if (!isVisible) {
        return
      }

      isVisible = false
      root.classList.remove('has-fancy-cursor')
      cursor.style.opacity = '0'
    }

    const spawnBubble = (x, y, deltaX, deltaY, multiplier = 1) => {
      for (let index = 0; index < multiplier; index += 1) {
        const bubble = document.createElement('span')
        const size = gsap.utils.random(5, 12, 1)
        const driftX = gsap.utils.random(-14, 14, 1) - deltaX * 0.18
        const driftY = gsap.utils.random(-26, -10, 1) - deltaY * 0.08

        bubble.className = 'cursor-bubble'
        bubble.style.left = `${x - deltaX * 0.4 + gsap.utils.random(-8, 8, 1)}px`
        bubble.style.top = `${y - deltaY * 0.4 + gsap.utils.random(-8, 8, 1)}px`
        bubble.style.setProperty('--cursor-bubble-size', `${size}px`)
        bubble.style.setProperty('--cursor-bubble-drift-x', `${driftX}px`)
        bubble.style.setProperty('--cursor-bubble-drift-y', `${driftY}px`)
        bubble.style.setProperty('--cursor-bubble-duration', `${gsap.utils.random(620, 1180, 1)}ms`)
        bubble.style.setProperty('--cursor-bubble-opacity', `${gsap.utils.random(0.18, 0.4, 0.01)}`)

        bubble.addEventListener(
          'animationend',
          () => {
            bubble.remove()
          },
          { once: true },
        )

        trailLayer.appendChild(bubble)
      }
    }

    const handleMouseMove = (event) => {
      const previousPointer = pointerRef.current
      const nextPointer = { x: event.clientX, y: event.clientY }
      const deltaX = nextPointer.x - previousPointer.x
      const deltaY = nextPointer.y - previousPointer.y
      const speed = Math.hypot(deltaX, deltaY)

      pointerRef.current = nextPointer
      showCursor()

      cursor.style.transform = `translate3d(${nextPointer.x}px, ${nextPointer.y}px, 0)`
      turtle.style.setProperty('--cursor-heading', `${gsap.utils.clamp(-18, 18, deltaX * 0.55)}deg`)
      turtle.style.setProperty('--cursor-swim-scale', `${gsap.utils.clamp(1, 1.1, 1 + speed / 240)}`)

      const now = performance.now()

      if (speed > 1.5 && now - spawnTimeRef.current > 24) {
        spawnBubble(nextPointer.x, nextPointer.y, deltaX, deltaY, speed > 24 ? 2 : 1)
        spawnTimeRef.current = now
      }
    }

    const handlePointerDown = (event) => {
      if (event.pointerType === 'touch') {
        hideCursor()
      }
    }

    const handleWindowMouseOut = (event) => {
      if (!event.relatedTarget) {
        hideCursor()
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('blur', hideCursor)
    window.addEventListener('mouseout', handleWindowMouseOut)

    return () => {
      hideCursor()
      root.classList.remove('has-fancy-cursor')
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('blur', hideCursor)
      window.removeEventListener('mouseout', handleWindowMouseOut)
    }
  }, [containerRef])

  return (
    <>
      <div ref={trailLayerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[118]" />

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] h-0 w-0 overflow-visible"
      >
        <div
          className="absolute left-0 top-0 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,216,255,0.26),rgba(125,216,255,0.1)_52%,rgba(125,216,255,0)_100%)] blur-lg"
        />
        <div ref={turtleRef} className="cursor-turtle-vehicle absolute left-0 top-0">
          <div
            className="cursor-turtle-image h-16 w-16 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${turtleCursor})` }}
          />
        </div>
      </div>
    </>
  )
}

export default TargetCursor
