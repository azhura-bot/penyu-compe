import homeLogo from '../../assets/image.png'

function HomeLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[120] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(8,52,99,0.44),transparent_34%),linear-gradient(180deg,#062b4a_0%,#031a32_58%,#02101f_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(86,191,255,0.08)_0%,rgba(86,191,255,0)_46%)]" />
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#53c9ff]/8 blur-3xl sm:h-64 sm:w-64" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="relative flex h-[12.5rem] w-[12.5rem] items-center justify-center sm:h-[14.5rem] sm:w-[14.5rem]">
          <div className="home-loader-ring home-loader-ring-outer" />
          <div className="home-loader-ring home-loader-ring-inner" />
          <div className="home-loader-core" />

          <div className="relative z-10 flex h-[7.4rem] w-[7.4rem] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,rgba(15,60,102,0.96),rgba(4,22,43,0.98))] shadow-[0_0_34px_rgba(78,191,255,0.18)] sm:h-[8.4rem] sm:w-[8.4rem]">
            <img
              src={homeLogo}
              alt="Logo Penyu EDU"
              className="h-[5.2rem] w-[5.2rem] object-contain drop-shadow-[0_0_18px_rgba(122,220,255,0.26)] sm:h-[5.9rem] sm:w-[5.9rem]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-14 left-1/2 w-full max-w-sm -translate-x-1/2 px-6 text-center">
          <p className="font-nav text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#8fdcff]/72 sm:text-xs">
            Menyiapkan Website
          </p>
          <div className="mt-4 h-px overflow-hidden rounded-full bg-white/8">
            <div className="home-loader-line h-full w-full origin-left bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(108,212,255,0.9),rgba(0,0,0,0))]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeLoadingScreen
