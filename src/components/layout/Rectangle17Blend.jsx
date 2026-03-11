function Rectangle17Blend({ position = 'bottom' }) {
  const positionClass =
    position === 'top'
      ? 'top-0 -translate-y-1/2'
      : position === 'center'
        ? 'top-1/2 -translate-y-1/2'
        : 'bottom-0 translate-y-1/2'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 z-10 h-40 w-[min(128%,94rem)] max-w-none -translate-x-1/2 ${positionClass}`}
    >
      <div className="absolute inset-x-[-10%] inset-y-[-38%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,13,109,0.78)_0%,rgba(2,25,122,0.62)_30%,rgba(3,17,79,0.42)_54%,rgba(2,10,52,0.22)_72%,rgba(3,17,79,0)_88%)] blur-[72px]" />
      <div className="absolute inset-x-[-4%] top-1/2 h-24 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,rgba(0,13,109,0)_0%,rgba(0,13,109,0.24)_18%,rgba(1,22,120,0.54)_50%,rgba(0,13,109,0.24)_82%,rgba(0,13,109,0)_100%)] blur-[56px]" />
      <div className="absolute inset-x-[12%] top-1/2 h-10 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(0,13,109,0),rgba(9,33,145,0.3),rgba(0,13,109,0))] blur-3xl" />
    </div>
  )
}

export default Rectangle17Blend
