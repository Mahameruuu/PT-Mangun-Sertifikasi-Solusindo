import type { ImageMetadata } from 'astro';

// Logo klien diambil dari halaman Customers situs lama. Nama dibaca dari logo.
// KONFIRMASI ke pemilik: izin menampilkan setiap logo.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/klien/*', { eager: true });

// sector: 'bank' = perbankan; 'lainnya' = perusahaan & institusi lain.
const list: [file: string, name: string, sector: 'bank' | 'lainnya'][] = [
  ['BI_Logo-1.png', 'Bank Indonesia', 'bank'],
  ['image-removebg-preview-8.webp', 'BNI', 'bank'],
  ['image-removebg-preview.png', 'Bank Mandiri', 'bank'],
  ['image-removebg-preview-3-e1732000881225.webp', 'BCA', 'bank'],
  ['image-removebg-preview-24.png', 'BTN', 'bank'],
  ['image-removebg-preview-18.png', 'Bank Sumut', 'bank'],
  ['image-removebg-preview-5.webp', 'KB Bukopin', 'bank'],
  ['image-removebg-preview-31.webp', 'Panin Bank', 'bank'],
  ['image-removebg-preview-29.webp', 'Bank Mayapada', 'bank'],
  ['image-removebg-preview-20.png', 'Bank Bumi Arta', 'bank'],
  ['image-removebg-preview-30.webp', 'BCA Syariah', 'bank'],
  ['image-removebg-preview-23.png', 'Mandiri Taspen', 'bank'],
  ['image-removebg-preview-25.png', 'BPR (Bank Perkreditan Rakyat)', 'bank'],
  ['Logo-Inalum-MIND-ID.png', 'Inalum', 'lainnya'],
  ['image-removebg-preview-11-e1732000521775.webp', 'AQUA', 'lainnya'],
  ['image-removebg-preview-10.webp', 'Abacus Cash Solution', 'lainnya'],
  ['image-removebg-preview-6-1.png', 'BGI Integrated Cash Solutions', 'lainnya'],
  ['image-removebg-preview-16-e1732592734201.webp', 'PT Tunas Artha Gardatama', 'lainnya'],
  ['image-removebg-preview-9-1.webp', 'SSI (Telkom Indonesia)', 'lainnya'],
  ['image-removebg-preview-27.webp', 'Primus Prime ICT Services', 'lainnya'],
  ['image-removebg-preview-13-1.webp', 'PT Gemma Paramitra', 'lainnya'],
  ['image-removebg-preview-17-e1732592714969.webp', 'PT Sumber Cipta Multiniaga', 'lainnya'],
  ['image-removebg-preview-21-e1732592852327.webp', 'PT Surya Madistrindo', 'lainnya'],
  ['image-removebg-preview-19.webp', 'RS Ibu & Anak Stella Maris', 'lainnya'],
  ['image-removebg-preview-33.png', 'JMJ', 'lainnya'],
];

export const clients = list.map(([file, name, sector]) => {
  const mod = files[`../assets/klien/${file}`];
  if (!mod) throw new Error(`Logo klien tidak ditemukan: ${file}`);
  return { name, sector, logo: mod.default };
});

export const clientSectors = [
  { id: 'bank', name: 'Perbankan' },
  { id: 'lainnya', name: 'Perusahaan & Institusi Lainnya' },
] as const;
