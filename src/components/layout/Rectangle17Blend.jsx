function Rectangle17Blend({ position = 'bottom' }) {
  const positionClass =
    position === 'top'
      ? 'top-0 -translate-y-[56%]'
      : position === 'center'
        ? 'top-1/2 -translate-y-1/2'
        : 'bottom-0 translate-y-[56%]'

  const maskStyle = {
    WebkitMaskImage:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 34%, rgba(0,0,0,0.58) 62%, transparent 84%)',
    maskImage:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 34%, rgba(0,0,0,0.58) 62%, transparent 84%)',
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 z-0 h-[24rem] w-[min(170%,122rem)] max-w-none -translate-x-1/2 opacity-80 ${positionClass}`}
      style={maskStyle}
    >
      <div className="absolute inset-x-[-18%] inset-y-[-24%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(3,17,79,0.96)_0%,rgba(4,22,95,0.84)_26%,rgba(5,29,108,0.52)_48%,rgba(4,22,95,0.18)_70%,rgba(3,17,79,0)_88%)] blur-[124px]" />
      <div className="absolute inset-x-[-10%] top-1/2 h-52 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,rgba(3,17,79,0)_0%,rgba(5,28,103,0.1)_22%,rgba(7,42,126,0.18)_50%,rgba(5,28,103,0.1)_78%,rgba(3,17,79,0)_100%)] blur-[82px]" />
      <div className="absolute inset-x-[8%] top-1/2 h-24 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(3,17,79,0),rgba(25,84,173,0.08),rgba(17,62,145,0.1),rgba(25,84,173,0.08),rgba(3,17,79,0))] blur-[40px]" />
      <div className="absolute inset-x-[24%] top-1/2 h-10 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(3,17,79,0),rgba(113,176,233,0.06),rgba(3,17,79,0))] blur-[22px]" />
    </div>
  )
}

export default Rectangle17Blend
