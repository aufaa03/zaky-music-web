// src/app/sitemap.js
import { client } from "@/lib/contentfulClient";

export default async function sitemap() {
  const baseUrl = 'https://zaky-music.vercel.app'; // ⚠️ GANTI URL INI DENGAN LINK VERCEL ASLIMU

  // 1. Ambil semua artikel blog dari Contentful biar masuk SEO
  const response = await client.getEntries({
    content_type: 'blogPost',
  });

  const blogUrls = response.items.map((post) => ({
    url: `${baseUrl}/blog/${post.fields.slug}`,
    lastModified: new Date(post.sys.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 2. Halaman Utama (Statis)
  const routes = [
    '',
    '/layanan',
    '/galeri',
    '/kontak',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  return [...routes, ...blogUrls];
}