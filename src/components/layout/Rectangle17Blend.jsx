function Rectangle17Blend({ position = 'bottom' }) {
  const positionClass =
    position === 'top'
      ? 'top-0 -translate-y-[76%]'
      : position === 'center'
        ? 'top-1/2 -translate-y-1/2'
        : 'bottom-0 translate-y-[58%]'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 z-0 h-56 w-[min(140%,108rem)] max-w-none -translate-x-1/2 ${positionClass}`}
    >
      <div className="absolute inset-x-[-18%] inset-y-[-58%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(1,18,76,0.98)_0%,rgba(1,24,92,0.88)_24%,rgba(1,21,79,0.64)_46%,rgba(2,17,64,0.34)_68%,rgba(2,17,64,0)_88%)] blur-[102px]" />
      <div className="absolute inset-x-[-8%] top-1/2 h-36 -translate-y-1/2 rounded-full bg-[linear-gradient(180deg,rgba(2,16,66,0)_0%,rgba(2,31,102,0.12)_16%,rgba(3,45,136,0.34)_50%,rgba(2,31,102,0.12)_84%,rgba(2,16,66,0)_100%)] blur-[76px]" />
      <div className="absolute inset-x-[8%] top-1/2 h-14 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(0,13,109,0),rgba(65,156,222,0.12),rgba(20,92,168,0.1),rgba(65,156,222,0.12),rgba(0,13,109,0))] blur-[36px]" />
      <div className="absolute inset-x-[-2%] top-1/2 h-48 -translate-y-1/2 bg-[linear-gradient(180deg,rgba(1,24,92,0)_0%,rgba(2,39,118,0.05)_18%,rgba(2,49,140,0.1)_34%,rgba(2,32,102,0.24)_50%,rgba(2,49,140,0.1)_66%,rgba(2,39,118,0.05)_82%,rgba(1,24,92,0)_100%)] blur-[62px]" />
    </div>
  )
}

export default Rectangle17Blend
