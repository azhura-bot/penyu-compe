import threatBeach from '../assets/homepage/threat-beach.jpg'
import threatEgg from '../assets/homepage/threat-egg.jpg'
import threatIllegal from '../assets/homepage/threat-illegal.jpg'
import threatNet from '../assets/homepage/threat-net.jpg'
import threatTourism from '../assets/homepage/threat-tourism.jpg'
import threatTrash from '../assets/homepage/threat-trash.jpg'

export const threatCards = [
  {
    title: 'Pencurian Telur',
    description:
      'Telur penyu sering digali dari sarangnya untuk dikonsumsi atau dijual. Akibatnya, banyak tukik tidak pernah sempat menetas dan kembali ke laut.',
    image: threatEgg,
  },
  {
    title: 'Sampah Plastik di Laut',
    description:
      'Plastik yang mengapung sering dikira ubur-ubur oleh penyu. Saat tertelan, plastik bisa menyumbat pencernaan dan membahayakan nyawa mereka.',
    image: threatTrash,
  },
  {
    title: 'Perburuan Illegal',
    description:
      'Penyu masih diburu untuk diambil daging, cangkang, atau bagian tubuh lainnya. Padahal sebagian besar spesies penyu sudah dilindungi.',
    image: threatIllegal,
  },
  {
    title: 'Kerusakan Pantai Tempat Bertelur',
    description:
      'Pembangunan berlebihan, lampu yang terlalu terang, dan abrasi membuat pantai tidak lagi aman untuk bertelur.',
    image: threatBeach,
  },
  {
    title: 'Jaring dan Alat Tangkap Ikan',
    description:
      'Penyu sering tidak sengaja terjerat jaring nelayan. Banyak yang terluka bahkan tidak bisa kembali ke permukaan untuk bernapas.',
    image: threatNet,
  },
  {
    title: 'Pariwisata Massal',
    description:
      'Wisata tanpa aturan, kendaraan di pantai, hingga polusi laut bisa mengganggu proses bertelur dan perjalanan hidup penyu.',
    image: threatTourism,
  },
]

export const programCards = [
  { title: ['Laut', 'Tanpa Plastik'], position: '0% 56%' },
  { title: ['Perlindungan', 'Sarang'], position: '50% 56%' },
  { title: ['Gerakan', 'JagaPenyu'], position: '100% 56%' },
]
