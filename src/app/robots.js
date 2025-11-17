// src/app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*', // Semua robot (Google, Bing, Yahoo) boleh masuk
      allow: '/',     // Boleh baca semua halaman
    },
    sitemap: 'https://zaky-music.vercel.app/sitemap.xml', // ⚠️ GANTI URL INI JUGA
  }
}