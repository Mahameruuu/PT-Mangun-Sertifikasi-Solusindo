// Satu sumber data untuk identitas & kontak perusahaan.
// Semua nilai di bawah berasal dari glorystore.online (audit 17 Okt 2026).
// Item bertanda KONFIRMASI belum diverifikasi ke pemilik — jangan diisi dengan tebakan.

export const site = {
  name: 'PT. Mangun Sertifikasi Solusindo',
  // Tagline resmi sesuai logo perusahaan.
  tagline: 'Banking Equipment, Computer, General Supplier, Service & Maintenance',
  description:
    'Pengadaan dan layanan purna jual peralatan perbankan, perkantoran, dan industri — mesin hitung & sortir uang, printer, mesin antrian, CCTV, access control, dan sistem parkir otomatis. Berdiri di Medan sejak 2009.',
  since: 2009,
  // Alamat No. 43 A dikonfirmasi pemilik (17 Okt 2026). Profil Google Maps masih menulis "No.43B";
  // perbarui profil tersebut di Google Business Profile agar konsisten.
  address: {
    street: 'Jalan Sembada No. 43 A',
    district: 'Kecamatan Medan Selayang',
    city: 'Kota Medan',
    province: 'Sumatera Utara',
    country: 'ID',
  },
  phone: { display: '(061) 822-3737', tel: '+62618223737' },
  mobiles: [
    { display: '0851-0330-2760', tel: '+6285103302760' },
    { display: '0813-9792-8106', tel: '+6281397928106' },
  ],
  // KONFIRMASI: nomor yang aktif di WhatsApp untuk menerima permintaan penawaran.
  whatsapp: '6285103302760',
  // KONFIRMASI: alamat email bisnis (tidak tercantum di situs lama).
  email: null as string | null,
  servicePoints: [
    { city: 'Batam', contact: 'Harmoko', display: '0812-6058-2740', tel: '+6281260582740' },
    { city: 'Pekanbaru', contact: 'Seprianto', display: '0852-7082-7747', tel: '+6285270827747' },
  ],
  facebook: 'https://www.facebook.com/profile.php?id=61560364886536',
};

export const fullAddress = `${site.address.street}, ${site.address.district}, ${site.address.city}, ${site.address.province}`;

// Lokasi resmi "PT. Masa Mitra Pratama" di Google Maps (embed dari pemilik).
export const maps = {
  embed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1756671987105!2d98.6561627!3d3.546929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f8cfb1b1c4b%3A0x59c7036fbb89a2a6!2sPT.%20Masa%20Mitra%20Pratama!5e0!3m2!1sid!2sid!4v1792229535355!5m2!1sid!2sid',
};

// Template pesan WhatsApp otomatis (dipakai di seluruh situs).
export const waMessages = {
  general: `Halo ${site.name}, saya ingin mendiskusikan kebutuhan peralatan/layanan untuk perusahaan kami.`,
  product: (name: string) => `Halo ${site.name}, saya tertarik dengan produk ${name} dan ingin mendapatkan penawaran harga.`,
  category: (name: string) => `Halo ${site.name}, saya ingin mendapatkan informasi mengenai produk kategori ${name}.`,
  service: (name: string) => `Halo ${site.name}, saya ingin berkonsultasi mengenai layanan ${name}.`,
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type NavItem = {
  href: string;
  label: string;
  /** 'produk' = mega-menu kategori produk (diisi dari data/categories.ts). */
  mega?: 'produk';
  children?: { href: string; label: string; desc: string }[];
  /** Path lain yang membuat menu ini tampil aktif. */
  match?: string[];
};

export const nav: NavItem[] = [
  { href: '/', label: 'Beranda' },
  { href: '/produk/', label: 'Produk', mega: 'produk' },
  {
    href: '/layanan/',
    label: 'Layanan',
    children: [
      { href: '/layanan/#it-perbankan', label: 'IT & Perbankan', desc: 'Mesin hitung & sortir uang, antrian, encoder, CCTV' },
      { href: '/layanan/#konstruksi', label: 'Konstruksi & Teknik', desc: 'Sistem parkir, sipil, mekanikal, elektrikal, pabrikasi' },
    ],
  },
  { href: '/proyek/', label: 'Proyek' },
  {
    href: '/tentang/',
    label: 'Perusahaan',
    match: ['/tentang/', '/klien/'],
    children: [
      { href: '/tentang/', label: 'Tentang Kami', desc: 'Profil perusahaan, visi & misi, jaringan layanan' },
      { href: '/klien/', label: 'Klien', desc: 'Perbankan & industri yang kami layani' },
    ],
  },
  { href: '/kontak/', label: 'Kontak' },
];
