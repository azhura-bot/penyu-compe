function Rectangle17Blend({ position = 'bottom' }) {
  const positionClass =
    position === 'top'
      ? 'top-0 -translate-y-[50%]'
      : position === 'center'
        ? 'top-1/2 -translate-y-1/2'
        : 'bottom-0 translate-y-[50%]'

  const maskStyle = {
    WebkitMaskImage:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.62) 58%, rgba(0,0,0,0.22) 74%, transparent 88%)',
    maskImage:
      'radial-gradient(ellipse at center, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.62) 58%, rgba(0,0,0,0.22) 74%, transparent 88%)',
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 z-0 h-[18rem] w-[min(185%,128rem)] max-w-none -translate-x-1/2 opacity-85 ${positionClass}`}
      style={maskStyle}
    >
      <div className="absolute inset-x-[-14%] inset-y-[-28%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(3,17,79,0.92)_0%,rgba(4,24,98,0.62)_32%,rgba(6,39,124,0.28)_54%,rgba(6,39,124,0.08)_68%,rgba(3,17,79,0)_84%)] blur-[112px]" />
      <div className="absolute inset-x-[-2%] top-1/2 h-24 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(100,185,255,0.12),rgba(100,185,255,0.05)_34%,rgba(100,185,255,0)_76%)] blur-[38px]" />
      <div className="absolute inset-x-[20%] top-1/2 h-10 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(190,232,255,0.08),rgba(190,232,255,0)_72%)] blur-[20px]" />
    </div>
  )
}

export default Rectangle17Blend
