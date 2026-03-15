import { useEffect, useRef, useState } from 'react'

function DeferredSection({
  children,
  className = '',
  fallback = null,
  minHeight = '100vh',
  rootMargin = '320px 0px',
  once = true,
}) {
  const containerRef = useRef(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element || shouldRender) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        setShouldRender(true)

        if (once) {
          observer.disconnect()
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, rootMargin, shouldRender])

  return (
    <div
      ref={containerRef}
      className={className}
      style={!shouldRender ? { minHeight } : undefined}
    >
      {shouldRender ? children : fallback}
    </div>
  )
}

export default DeferredSection
