import penyuBg from '../assets/penyu/bg jenis penyu.png'
import penyuBelimbing from '../assets/penyu/pennyu belimbing.png'
import penyuHijau from '../assets/penyu/penyu hijau.png'
import penyuKempi from '../assets/penyu/penyu kempi.png'
import penyuLekang from '../assets/penyu/penyu lekang.png'
import penyuSisik from '../assets/penyu/penyu sisik.png'
import penyuTempayan from '../assets/penyu/penyu tempayan.png'

export const penyuSectionBackground = penyuBg

export const turtleBodyParts = [
  {
    id: 'kepala',
    title: 'Kepala Penyu',
    objectLabel: 'Kepala',
    shortLabel: 'Kepala',
    description:
      'Kepala penyu membantu mereka melihat, mencium, dan mengenali arah di laut. Bentuk rahangnya juga berbeda pada tiap spesies, menyesuaikan jenis makanan yang biasa mereka santap.',
    focus: { position: [0, 1.6, 7.8], target: [0, 1.1, 0] },
  },
  {
    id: 'tangan-kiri',
    title: 'Tangan Depan Kiri',
    objectLabel: 'Sirip Depan Kiri',
    shortLabel: 'Tangan Penyu',
    description:
      'Sirip depan kiri berfungsi seperti dayung utama saat penyu berenang jauh di lautan. Bentuknya pipih, kuat, dan sangat penting untuk manuver serta kestabilan gerak.',
    focus: { position: [-2.8, 0.7, 7.4], target: [-1.4, 0.1, 0] },
  },
  {
    id: 'tangan-kanan',
    title: 'Tangan Depan Kanan',
    objectLabel: 'Sirip Depan Kanan',
    shortLabel: 'Tangan Penyu',
    description:
      'Sirip depan kanan bekerja berpasangan dengan sirip kiri untuk menghasilkan dorongan kuat. Bagian ini membantu penyu menjelajah samudra, naik ke permukaan, dan menjaga arah renang.',
    focus: { position: [2.8, 0.7, 7.4], target: [1.4, 0.1, 0] },
  },
  {
    id: 'kaki-kiri',
    title: 'Kaki Belakang Kiri',
    objectLabel: 'Sirip Belakang Kiri',
    shortLabel: 'Kaki Penyu',
    description:
      'Sirip belakang kiri membantu penyu menjaga keseimbangan ketika berenang. Pada penyu betina, bagian belakang juga penting saat menggali pasir untuk membuat sarang telur.',
    focus: { position: [-2.2, -2.1, 7.2], target: [-0.95, -1.65, 0] },
  },
  {
    id: 'kaki-kanan',
    title: 'Kaki Belakang Kanan',
    objectLabel: 'Sirip Belakang Kanan',
    shortLabel: 'Kaki Penyu',
    description:
      'Sirip belakang kanan berperan sebagai penyeimbang gerak dan kemudi tambahan. Saat penyu mendarat di pantai, bagian ini ikut membantu tubuh tetap stabil di pasir.',
    focus: { position: [2.2, -2.1, 7.2], target: [0.95, -1.65, 0] },
  },
  {
    id: 'tempurung',
    title: 'Tempurung Penyu',
    objectLabel: 'Tempurung',
    shortLabel: 'Tempurung',
    description:
      'Tempurung adalah pelindung utama tubuh penyu. Bagian ini tersusun dari lempeng keras yang menyatu dengan tulang, melindungi organ vital sekaligus membantu bentuk tubuh tetap hidrodinamis di air.',
    focus: { position: [0, 0.2, 6.8], target: [0, 0, 0] },
  },
]

export const turtleSpecies = [
  {
    id: 'hijau',
    title: 'Penyu Hijau',
    accent: 'from-[#6fd88b] to-[#1c8c4d]',
    image: penyuHijau,
    description:
      'Penyu hijau dikenal karena warna kehijauan pada lemak tubuhnya. Spesies ini banyak memakan lamun dan alga, sehingga penting untuk menjaga padang lamun tetap sehat.',
  },
  {
    id: 'belimbing',
    title: 'Penyu Belimbing',
    accent: 'from-[#77e0ff] to-[#2d7ff0]',
    image: penyuBelimbing,
    description:
      'Penyu belimbing merupakan penyu terbesar di dunia dan tidak memiliki tempurung keras seperti spesies lainnya. Mereka piawai menyelam dalam dan sering memakan ubur-ubur.',
  },
  {
    id: 'sisik',
    title: 'Penyu Sisik',
    accent: 'from-[#ffbf6d] to-[#f18a28]',
    image: penyuSisik,
    description:
      'Penyu sisik memiliki paruh runcing yang membantu mereka mencari makan di sela terumbu karang. Kehadirannya penting dalam menjaga keseimbangan ekosistem karang.',
  },
  {
    id: 'tempayan',
    title: 'Penyu Tempayan',
    accent: 'from-[#ffd36b] to-[#df9f2c]',
    image: penyuTempayan,
    description:
      'Penyu tempayan mempunyai kepala yang relatif besar dan rahang kuat. Mereka memakan hewan bercangkang seperti kepiting, moluska, dan organisme dasar laut lainnya.',
  },
  {
    id: 'kempi',
    title: 'Penyu Kempi',
    accent: 'from-[#ffb28a] to-[#de6f48]',
    image: penyuKempi,
    description:
      'Penyu kempi dikenal sebagai salah satu penyu laut paling langka. Tubuhnya relatif kecil, namun perannya tetap penting dalam rantai makanan pesisir dan laut dangkal.',
  },
  {
    id: 'lekang',
    title: 'Penyu Lekang',
    accent: 'from-[#7de0dc] to-[#278f96]',
    image: penyuLekang,
    description:
      'Penyu lekang berukuran lebih kecil dibanding beberapa spesies lain, tetapi populasinya juga rentan. Spesies ini sering bertelur secara massal di pantai tertentu.',
  },
]
