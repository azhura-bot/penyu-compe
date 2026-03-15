import { useEffect, useRef } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current

    if (!audio) {
      return undefined
    }

    audio.volume = 0.3

    const startPlayback = () => {
      if (hasStartedRef.current) {
        return
      }

      hasStartedRef.current = true

      const playPromise = audio.play()

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          hasStartedRef.current = false
        })
      }
    }

    window.addEventListener('pointerdown', startPlayback, { once: true, passive: true })
    window.addEventListener('keydown', startPlayback, { once: true })

    return () => {
      window.removeEventListener('pointerdown', startPlayback)
      window.removeEventListener('keydown', startPlayback)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/music/music.mp3"
      preload="none"
      loop
    />
  )
}
