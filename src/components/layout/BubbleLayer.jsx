const DEFAULT_BUBBLES = [
  { left: '6%', size: '0.56rem', delay: '-8.2s', duration: '14s', drift: '14px', opacity: 0.38 },
  { left: '14%', size: '0.95rem', delay: '-5.4s', duration: '17s', drift: '-10px', opacity: 0.22 },
  { left: '22%', size: '0.66rem', delay: '-10.1s', duration: '12.5s', drift: '12px', opacity: 0.3 },
  { left: '33%', size: '1.15rem', delay: '-13.2s', duration: '20s', drift: '-16px', opacity: 0.2 },
  { left: '44%', size: '0.62rem', delay: '-7.2s', duration: '13s', drift: '8px', opacity: 0.34 },
  { left: '56%', size: '0.82rem', delay: '-11.8s', duration: '16.5s', drift: '-12px', opacity: 0.26 },
  { left: '67%', size: '1.22rem', delay: '-15.6s', duration: '21s', drift: '18px', opacity: 0.18 },
  { left: '77%', size: '0.54rem', delay: '-4.8s', duration: '11.5s', drift: '-8px', opacity: 0.32 },
  { left: '86%', size: '0.98rem', delay: '-9.6s', duration: '18s', drift: '10px', opacity: 0.22 },
  { left: '93%', size: '0.7rem', delay: '-6.9s', duration: '14.5s', drift: '-6px', opacity: 0.28 },
]

function BubbleLayer({ className = '', density = 'default' }) {
  const bubbles =
    density === 'light'
      ? DEFAULT_BUBBLES.filter((_, index) => index % 2 === 0)
      : density === 'dense'
        ? [
            ...DEFAULT_BUBBLES,
            { left: '10%', size: '0.46rem', delay: '-3.7s', duration: '12s', drift: '8px', opacity: 0.24 },
            { left: '29%', size: '0.74rem', delay: '-12.7s', duration: '15.5s', drift: '-9px', opacity: 0.22 },
            { left: '61%', size: '0.5rem', delay: '-6.9s', duration: '10.8s', drift: '7px', opacity: 0.28 },
            { left: '82%', size: '0.82rem', delay: '-14.1s', duration: '17.2s', drift: '-11px', opacity: 0.19 },
          ]
        : DEFAULT_BUBBLES

  return (
    <div aria-hidden="true" className={`bubble-layer ${className}`.trim()}>
      {bubbles.map((bubble, index) => (
        <span
          key={`${bubble.left}-${index}`}
          className="bubble-particle"
          style={{
            '--bubble-left': bubble.left,
            '--bubble-size': bubble.size,
            '--bubble-delay': bubble.delay,
            '--bubble-duration': bubble.duration,
            '--bubble-drift': bubble.drift,
            '--bubble-opacity': bubble.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default BubbleLayer
