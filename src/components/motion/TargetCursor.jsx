import { useEffect, useRef } from 'react'

import gsap from 'gsap'

function TargetCursor({ containerRef, selector = '[data-cursor-target]' }) {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)
  const pointerRef = useRef({ x: 0, y: 0 })
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const container = containerRef.current
    const cursor = cursorRef.current
    const label = labelRef.current

    if (!container || !cursor || !label || prefersReducedMotion) {
      return undefined
    }

    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!finePointer) {
      return undefined
    }

    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.22, ease: 'power3.out' })
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.22, ease: 'power3.out' })
    let activeTarget = null

    const showCursor = () => {
      gsap.to(cursor, { autoAlpha: 1, duration: 0.18, ease: 'power2.out' })
    }

    const hideCursor = () => {
      activeTarget = null
      gsap.to(cursor, { autoAlpha: 0, duration: 0.18, ease: 'power2.out' })
    }

    const resetCursor = () => {
      label.textContent = ''

      gsap.to(cursor, {
        width: 42,
        height: 42,
        borderRadius: 999,
        '--cursor-scale': 1,
        duration: 0.22,
        ease: 'power2.out',
      })
    }

    const moveToPointer = () => {
      moveX(pointerRef.current.x)
      moveY(pointerRef.current.y)
    }

    const activateTarget = (target) => {
      activeTarget = target
      const rect = target.getBoundingClientRect()

      label.textContent = target.dataset.cursorLabel ?? target.getAttribute('aria-label') ?? ''

      gsap.to(cursor, {
        width: rect.width + 26,
        height: rect.height + 18,
        borderRadius: 24,
        '--cursor-scale': 1.08,
        duration: 0.22,
        ease: 'power3.out',
      })

      moveX(rect.left + rect.width / 2)
      moveY(rect.top + rect.height / 2)
    }

    const handlePointerMove = (event) => {
      pointerRef.current = { x: event.clientX, y: event.clientY }

      if (!activeTarget) {
        moveToPointer()
      }
    }

    const targets = Array.from(container.querySelectorAll(selector))
    const cleanupFns = targets.map((target) => {
      const onEnter = () => activateTarget(target)
      const onLeave = () => {
        activeTarget = null
        resetCursor()
        moveToPointer()
      }

      target.addEventListener('pointerenter', onEnter)
      target.addEventListener('pointerleave', onLeave)

      return () => {
        target.removeEventListener('pointerenter', onEnter)
        target.removeEventListener('pointerleave', onLeave)
      }
    })

    container.addEventListener('pointerenter', showCursor)
    container.addEventListener('pointerleave', hideCursor)
    container.addEventListener('pointermove', handlePointerMove)

    resetCursor()

    return () => {
      cleanupFns.forEach((cleanup) => cleanup())
      container.removeEventListener('pointerenter', showCursor)
      container.removeEventListener('pointerleave', hideCursor)
      container.removeEventListener('pointermove', handlePointerMove)
    }
  }, [containerRef, prefersReducedMotion, selector])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-[#9ddfff]/80 bg-[radial-gradient(circle_at_center,rgba(157,223,255,0.18),rgba(157,223,255,0.04)_55%,rgba(157,223,255,0)_100%)] shadow-[0_0_30px_rgba(90,207,255,0.24)] backdrop-blur-sm [transform:translate3d(-50%,-50%,0)_scale(var(--cursor-scale,1))] md:flex"
      style={{ opacity: 0, visibility: 'hidden' }}
    >
      <div className="absolute inset-[6px] rounded-[inherit] border border-white/16" />
      <div className="h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
      <span
        ref={labelRef}
        className="absolute -bottom-9 left-1/2 min-w-max -translate-x-1/2 rounded-full border border-[#9ddfff]/35 bg-[#041857]/76 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.08em] text-[#dff8ff] shadow-[0_12px_24px_rgba(2,9,40,0.32)]"
      />
    </div>
  )
}

export default TargetCursor
