import { useEffect, useRef } from 'react'

export default function MusicPlayer({ shouldAutoplay = true }) {
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
        return Promise.resolve()
      }

      hasStartedRef.current = true

      const playPromise = audio.play()

      if (playPromise !== undefined) {
        return playPromise.catch(() => {
          hasStartedRef.current = false
        })
      }

      return Promise.resolve()
    }

    const handleUserPlayback = () => {
      startPlayback().finally(() => {
        if (hasStartedRef.current) {
          window.removeEventListener('pointerdown', handleUserPlayback)
          window.removeEventListener('keydown', handleUserPlayback)
        }
      })
    }

    if (shouldAutoplay) {
      startPlayback()
    }

    window.addEventListener('pointerdown', handleUserPlayback, { passive: true })
    window.addEventListener('keydown', handleUserPlayback)

    return () => {
      window.removeEventListener('pointerdown', handleUserPlayback)
      window.removeEventListener('keydown', handleUserPlayback)
    }
  }, [shouldAutoplay])

  return (
    <audio
      ref={audioRef}
      src="/music/music.mp3"
      preload="auto"
      loop
    />
  )
}
