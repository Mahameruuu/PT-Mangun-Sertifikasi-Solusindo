# PT Mangun Sertifikasi Solusindo — Website (pengganti glorystore.online)

Situs statis berbasis [Astro](https://astro.build) untuk katalog produk dan profil perusahaan PT Mangun Sertifikasi Solusindo.
Konten diambil dari situs WordPress lama (glorystore.online) per 17 Oktober 2026.

## Menjalankan di lokal

Butuh Node.js ≥ 22.22.

```bash
npm install
npm run dev        # http://localhost:4321 — mode pengembangan
npm run build      # hasil statis di folder dist/
npm run preview    # menyajikan dist/ untuk dicek sebelum deploy
```

Untuk menguji di HP dalam jaringan Wi-Fi yang sama: `npm run dev -- --host`, lalu buka alamat IP yang tampil.

## Struktur

```
src/
├─ content/produk/*.md    ← satu file per produk (data + spesifikasi)
├─ content/proyek/*.md    ← satu file per proyek (foto galeri)
├─ assets/                ← gambar produk, proyek, logo klien (otomatis dioptimasi)
├─ data/site.ts           ← alamat, telepon, WhatsApp, email, service point
├─ data/categories.ts     ← daftar & urutan kategori produk
├─ data/services.ts       ← daftar layanan
├─ data/clients.ts        ← daftar logo klien
├─ components/            ← Header, Footer, kartu produk, tabel spesifikasi, lightbox, dll.
├─ layouts/BaseLayout.astro ← <head>, SEO, schema.org
└─ pages/                 ← setiap file = satu halaman/URL
vercel.json               ← redirect 301 dari URL WordPress lama + header cache
```

## Mengedit konten

**Kontak perusahaan** — ubah `src/data/site.ts`. Semua halaman ikut berubah.

**Menambah produk** — taruh foto di `src/assets/produk/`, lalu buat file baru di `src/content/produk/`, misalnya `glory-gfb-900.md`:

```yaml
---
name: "Glory GFB-900"
brand: "Glory"
type: "Mesin Hitung Uang Portable"
category: mesin-hitung-uang        # harus salah satu slug di src/data/categories.ts
order: 3                           # urutan di dalam kategori
featured: false                    # true = tampil di beranda
summary: "Deskripsi singkat 1–2 kalimat."
images:
  - src: ../../assets/produk/glory-gfb-900.png
    alt: "Mesin hitung uang Glory GFB-900"
features:
  - "Fitur 1"
specs:
  - columns: ["Spesifikasi", "Keterangan"]
    rows:
      - ["Dimensi", "275 x 235 x 230 mm"]
---
```

Nama file (tanpa `.md`) menjadi URL: `/produk/mesin-hitung-uang/glory-gfb-900/`.
Jika ada isian yang salah, `npm run build` akan gagal dan menunjukkan file serta baris yang bermasalah.

**Menambah proyek** — taruh foto di `src/assets/proyek/<folder>/` dan buat file di `src/content/proyek/` (lihat contoh yang ada).

## Data yang masih perlu dikonfirmasi pemilik

Cari komentar `KONFIRMASI` di kode (`grep -rn KONFIRMASI src`). Ringkasnya:

- Nomor WhatsApp untuk tombol "Minta Penawaran" (sementara: 0851-0330-2760).
- Alamat email bisnis (belum ada di situs lama, jadi belum ditampilkan).
- Izin menampilkan logo klien.
- Koreksi spesifikasi: GNH-710 (ketebalan uang), Maverick M712 (berat & deskripsi), TSP40 Plus (jenis printer), nama model Canon G6701, foto Epson LX-310.

## Deploy demo ke Vercel

1. Push repo ini ke GitHub (repo privat).
2. Di vercel.com → **Add New → Project** → import repo. Preset **Astro** terdeteksi otomatis (build `npm run build`, output `dist`). Tidak perlu adapter atau environment variable.
3. Setiap push ke GitHub otomatis menghasilkan URL preview baru.

Selama demo, semua halaman memiliki `<meta name="robots" content="noindex">` sehingga tidak masuk Google.

## Go-live (hanya setelah disetujui pemilik)

1. Di Vercel → Project → Settings → Environment Variables: tambahkan `PUBLIC_ALLOW_INDEXING` = `true` (Production), lalu redeploy. Tag noindex hilang dan sitemap diumumkan di `robots.txt`.
2. Settings → Domains: tambahkan `glorystore.online` dan ikuti instruksi DNS dari Vercel di panel Hostinger.
3. Cek beberapa URL lama (mis. `/company-profile/`, `/products/cctv/`) — harus redirect 301 ke halaman baru.
4. Daftarkan `https://glorystore.online/sitemap-index.xml` di Google Search Console.
5. Biarkan WordPress lama tetap ada (tanpa domain) beberapa minggu sebagai cadangan.
