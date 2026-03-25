import penyuBg from '../assets/penyu/bg jenis penyu.png'
import penyuBelimbing from '../assets/penyu/pennyu belimbing.png'
import penyuHijau from '../assets/penyu/penyu hijau.png'
import penyuKempi from '../assets/penyu/penyu kempi.png'
import penyuLekang from '../assets/penyu/penyu lekang.png'
import penyuSisik from '../assets/penyu/penyu sisik.png'
import penyuTempayan from '../assets/penyu/penyu tempayan.png'

export const penyuSectionBackground = penyuBg

export const turtleBodyPartConfigs = [
  {
    id: 'kepala',
    focus: { position: [0, 1.6, 7.8], target: [0, 1.1, 0] },
  },
  {
    id: 'tangan-kiri',
    focus: { position: [-2.8, 0.7, 7.4], target: [-1.4, 0.1, 0] },
  },
  {
    id: 'tangan-kanan',
    focus: { position: [2.8, 0.7, 7.4], target: [1.4, 0.1, 0] },
  },
  {
    id: 'kaki-kiri',
    focus: { position: [-2.2, -2.1, 7.2], target: [-0.95, -1.65, 0] },
  },
  {
    id: 'kaki-kanan',
    focus: { position: [2.2, -2.1, 7.2], target: [0.95, -1.65, 0] },
  },
  {
    id: 'tempurung',
    focus: { position: [0, 0.2, 6.8], target: [0, 0, 0] },
  },
]

export const turtleSpeciesConfigs = [
  {
    id: 'hijau',
    accent: 'from-[#6fd88b] to-[#1c8c4d]',
    image: penyuHijau,
  },
  {
    id: 'belimbing',
    accent: 'from-[#77e0ff] to-[#2d7ff0]',
    image: penyuBelimbing,
  },
  {
    id: 'sisik',
    accent: 'from-[#ffbf6d] to-[#f18a28]',
    image: penyuSisik,
  },
  {
    id: 'tempayan',
    accent: 'from-[#ffd36b] to-[#df9f2c]',
    image: penyuTempayan,
  },
  {
    id: 'kempi',
    accent: 'from-[#ffb28a] to-[#de6f48]',
    image: penyuKempi,
  },
  {
    id: 'lekang',
    accent: 'from-[#7de0dc] to-[#278f96]',
    image: penyuLekang,
  },
]
