import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categorySlugs } from './data/categories';

const specTable = z.object({
  title: z.string().optional(),
  // Baris pertama tabel (judul kolom). Kolom pertama = nama spesifikasi.
  columns: z.array(z.string()).min(2),
  rows: z.array(z.array(z.string()).min(2)),
});

const produk = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produk' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      brand: z.string().optional(),
      type: z.string(),
      category: z.enum(categorySlugs),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      summary: z.string(),
      images: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      features: z.array(z.string()).default([]),
      specs: z.array(specTable).default([]),
      youtube: z.string().optional(),
    }),
});

const proyek = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/proyek' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(['sipil', 'mekanikal', 'elektrikal', 'pabrikasi', 'parkir', 'antrian', 'perbankan']),
      order: z.number().default(100),
      scope: z.array(z.string()).default([]),
      photos: z.array(z.object({ src: image(), alt: z.string() })).min(1),
    }),
});

export const collections = { produk, proyek };
