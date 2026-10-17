// Daftar layanan sesuai halaman Services situs lama.
// `projects` = kategori proyek terkait di galeri (lihat src/content/proyek).

export const services = [
  {
    id: 'it-perbankan',
    icon: 'bank',
    title: 'IT & Perbankan',
    intro: 'Pengadaan, instalasi, dan layanan purna jual peralatan IT untuk perbankan dan perkantoran.',
    items: [
      { name: 'Mesin hitung & sortir uang', href: '/produk/mesin-hitung-uang/' },
      { name: 'Mesin antrian', href: '/produk/mesin-antrian/' },
      { name: 'Mesin encoder', href: '/produk/encoder/' },
      { name: 'Mesin tera meterai' },
      { name: 'Instalasi & servis CCTV', href: '/produk/cctv/' },
      { name: 'Sistem kontrol akses', href: '/produk/access-control/' },
    ],
    projects: ['perbankan', 'antrian'],
  },
  {
    id: 'konstruksi',
    icon: 'hard-hat',
    title: 'Konstruksi & Teknik',
    intro: 'Pekerjaan teknik sipil, mekanikal, elektrikal, dan pabrikasi untuk kebutuhan perkantoran dan industri.',
    items: [
      { name: 'Instalasi & servis sistem parkir otomatis', href: '/produk/sistem-parkir/' },
      { name: 'Pekerjaan sipil' },
      { name: 'Pekerjaan mekanikal' },
      { name: 'Pekerjaan elektrikal' },
      { name: 'Pabrikasi baja tahan karat' },
      { name: 'Pabrikasi konveyor' },
      { name: 'Konstruksi besi' },
    ],
    projects: ['sipil', 'mekanikal', 'elektrikal', 'pabrikasi', 'parkir'],
  },
] as const;
