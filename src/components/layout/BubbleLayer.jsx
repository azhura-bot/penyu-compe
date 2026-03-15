const DEFAULT_BUBBLES = [
  { left: '6%', size: '0.82rem', delay: '-8.2s', duration: '14s', drift: '14px', opacity: 0.62 },
  { left: '11%', size: '0.64rem', delay: '-2.6s', duration: '10.5s', drift: '7px', opacity: 0.42 },
  { left: '14%', size: '1.22rem', delay: '-5.4s', duration: '17s', drift: '-10px', opacity: 0.38 },
  { left: '22%', size: '0.9rem', delay: '-10.1s', duration: '12.5s', drift: '12px', opacity: 0.5 },
  { left: '27%', size: '0.72rem', delay: '-6.3s', duration: '11.8s', drift: '-7px', opacity: 0.38 },
  { left: '33%', size: '1.46rem', delay: '-13.2s', duration: '20s', drift: '-16px', opacity: 0.34 },
  { left: '39%', size: '1rem', delay: '-9.7s', duration: '15s', drift: '11px', opacity: 0.36 },
  { left: '44%', size: '0.86rem', delay: '-7.2s', duration: '13s', drift: '8px', opacity: 0.56 },
  { left: '49%', size: '0.66rem', delay: '-1.9s', duration: '9.8s', drift: '-5px', opacity: 0.36 },
  { left: '56%', size: '1.08rem', delay: '-11.8s', duration: '16.5s', drift: '-12px', opacity: 0.42 },
  { left: '62%', size: '0.7rem', delay: '-7.4s', duration: '12.2s', drift: '6px', opacity: 0.44 },
  { left: '67%', size: '1.54rem', delay: '-15.6s', duration: '21s', drift: '18px', opacity: 0.3 },
  { left: '72%', size: '0.8rem', delay: '-4.5s', duration: '13.4s', drift: '-10px', opacity: 0.38 },
  { left: '77%', size: '0.76rem', delay: '-4.8s', duration: '11.5s', drift: '-8px', opacity: 0.54 },
  { left: '81%', size: '0.58rem', delay: '-3.4s', duration: '9.6s', drift: '5px', opacity: 0.34 },
  { left: '86%', size: '1.24rem', delay: '-9.6s', duration: '18s', drift: '10px', opacity: 0.36 },
  { left: '93%', size: '0.94rem', delay: '-6.9s', duration: '14.5s', drift: '-6px', opacity: 0.44 },
  { left: '96%', size: '0.72rem', delay: '-12.4s', duration: '12.8s', drift: '7px', opacity: 0.3 },
]

function BubbleLayer({ className = '', density = 'default' }) {
  const bubbles =
    density === 'light'
      ? DEFAULT_BUBBLES.filter((_, index) => index % 2 === 0)
      : density === 'dense'
        ? [
            ...DEFAULT_BUBBLES,
            { left: '10%', size: '0.66rem', delay: '-3.7s', duration: '12s', drift: '8px', opacity: 0.38 },
            { left: '18%', size: '0.78rem', delay: '-8.8s', duration: '11.2s', drift: '-7px', opacity: 0.34 },
            { left: '29%', size: '1rem', delay: '-12.7s', duration: '15.5s', drift: '-9px', opacity: 0.36 },
            { left: '37%', size: '0.62rem', delay: '-6.1s', duration: '10.4s', drift: '6px', opacity: 0.38 },
            { left: '53%', size: '0.84rem', delay: '-9.1s', duration: '13.8s', drift: '-8px', opacity: 0.3 },
            { left: '61%', size: '0.68rem', delay: '-6.9s', duration: '10.8s', drift: '7px', opacity: 0.44 },
            { left: '74%', size: '0.58rem', delay: '-11.3s', duration: '9.9s', drift: '5px', opacity: 0.34 },
            { left: '82%', size: '1.04rem', delay: '-14.1s', duration: '17.2s', drift: '-11px', opacity: 0.32 },
            { left: '90%', size: '0.78rem', delay: '-5.9s', duration: '12.6s', drift: '8px', opacity: 0.36 },
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
