// Kategori & kelompok produk. Urutan array = urutan tampil.

export const groups = [
  { id: 'perbankan', name: 'Peralatan Perbankan', icon: 'banknote' },
  { id: 'printer', name: 'Printer', icon: 'printer' },
  { id: 'antrian', name: 'Sistem Antrian & Digital Signage', icon: 'ticket' },
  { id: 'keamanan', name: 'Keamanan & Akses', icon: 'shield' },
] as const;

export type GroupId = (typeof groups)[number]['id'];

export const categories = [
  {
    slug: 'mesin-hitung-uang',
    group: 'perbankan',
    name: 'Mesin Hitung Uang',
    intro: 'Mesin hitung uang kertas Glory tipe portable dan standing untuk bank, CIT, dan bisnis dengan volume transaksi tunai tinggi.',
  },
  {
    slug: 'mesin-sortir-uang',
    group: 'perbankan',
    name: 'Mesin Sortir Uang',
    intro: 'Mesin sortir dan hitung uang Glory untuk memproses uang kertas dengan akurasi tinggi, termasuk deteksi mata uang asing.',
  },
  {
    slug: 'mesin-banding-uang',
    group: 'perbankan',
    name: 'Mesin Banding Uang',
    intro: 'Mesin pengikat (banding) uang kertas untuk merapikan bundel uang secara cepat dan konsisten.',
  },
  {
    slug: 'encoder',
    group: 'perbankan',
    name: 'Encoder',
    intro: 'Mesin encoder MICR untuk mencetak karakter E13B / CMC-7 pada dokumen perbankan.',
  },
  {
    slug: 'printer-transaksional',
    group: 'printer',
    name: 'Printer Transaksional',
    intro: 'Printer passbook dan dokumen untuk perbankan, keuangan, pos, dan administrasi publik.',
  },
  {
    slug: 'printer-impact',
    group: 'printer',
    name: 'Printer Impact',
    intro: 'Printer impact Compuprint untuk cetak multi-salinan dengan volume tinggi.',
  },
  {
    slug: 'printer-dot-matrix',
    group: 'printer',
    name: 'Printer Dot Matrix',
    intro: 'Printer dot matrix Compuprint dan Epson untuk formulir rangkap, faktur, dan dokumen bisnis.',
  },
  {
    slug: 'printer-thermal',
    group: 'printer',
    name: 'Printer Thermal & Barcode',
    intro: 'Printer thermal portabel dan printer barcode untuk ritel, gudang, dan logistik.',
  },
  {
    slug: 'printer-ink-tank',
    group: 'printer',
    name: 'Printer Ink Tank (Infus)',
    intro: 'Printer ink tank Canon PIXMA untuk kebutuhan cetak foto dan dokumen dalam jumlah besar.',
  },
  {
    slug: 'mesin-antrian',
    group: 'antrian',
    name: 'Mesin Antrian & Digital Banner',
    intro: 'Kios antrian yang dapat disesuaikan dengan alur layanan, serta digital banner untuk informasi di area layanan.',
  },
  {
    slug: 'cctv',
    group: 'keamanan',
    name: 'CCTV',
    intro: 'Kamera CCTV untuk memantau dan merekam aktivitas di kantor, toko, maupun area industri.',
  },
  {
    slug: 'access-control',
    group: 'keamanan',
    name: 'Kontrol Akses & Absensi',
    intro: 'Mesin absensi sidik jari dan sistem kontrol akses untuk mencatat kehadiran karyawan.',
  },
  {
    slug: 'sistem-parkir',
    group: 'keamanan',
    name: 'Sistem Parkir Otomatis',
    intro: 'Barrier gate dan sistem parkir otomatis untuk gedung perkantoran, pusat perbelanjaan, dan area parkir pribadi.',
  },
] as const satisfies readonly { slug: string; group: GroupId; name: string; intro: string }[];

export type CategorySlug = (typeof categories)[number]['slug'];

export const categorySlugs = categories.map((c) => c.slug) as [CategorySlug, ...CategorySlug[]];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
