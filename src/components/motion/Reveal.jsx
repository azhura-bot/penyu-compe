import { useEffect, useRef, useState } from 'react'

function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  variant = 'up',
  delay = 0,
  duration = 850,
  distance = '42px',
  threshold = 0.18,
  once = false,
  ...props
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(entry.target)
          }

          return
        }

        if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [once, threshold])

  const style = {
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
    '--reveal-distance': distance,
    ...props.style,
  }

  return (
    <Tag
      ref={elementRef}
      className={`reveal reveal-${variant} ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Reveal
