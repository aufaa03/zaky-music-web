// src/app/blog/[slug]/page.js
import { client } from "@/lib/contentfulClient";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

// --- 1. STYLING KONTEN (Supaya Teksnya Cantik) ---
const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-bold text-slate-900">{text}</span>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields;
      return (
        <div className="my-10 relative rounded-2xl overflow-hidden shadow-lg group">
          <Image
            src={`https:${file.url}`}
            height={file.details.image.height}
            width={file.details.image.width}
            alt={title}
            className="w-full h-auto object-cover group-hover:scale-105 transition duration-700"
          />
          {title && (
            <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-4 py-2 rounded-tr-lg">
              {title}
            </div>
          )}
        </div>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-slate-600 leading-loose mb-6 text-lg font-light">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-3xl font-bold text-blue-900 mt-12 mb-6 border-l-4 border-yellow-400 pl-4">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
        {children}
      </h3>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-outside ml-6 space-y-2 mb-8 text-slate-700">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-outside ml-6 space-y-2 mb-8 text-slate-700">{children}</ol>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-6 my-8 italic text-slate-700 rounded-r-lg">
        "{children}"
      </blockquote>
    ),
  },
};

// --- 2. FUNGSI GET DATA ---
async function getBlogPost(slug) {
  const response = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return response.items[0];
}

// --- 3. METADATA DINAMIS ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  return {
    title: `${post?.fields.judul || 'Artikel'} - Zaky Musik`,
  };
}

// --- 4. KOMPONEN UTAMA ---
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-4xl mb-4">😕</h1>
        <p className="text-xl text-slate-600">Artikel tidak ditemukan.</p>
        <Link href="/blog" className="mt-6 text-blue-600 hover:underline">Kembali ke Blog</Link>
      </div>
    );
  }

  const { judul, tanggal, thumbnail, konten, author } = post.fields; // Pastikan field 'author' ada atau hapus jika tidak

  return (
    <main className="bg-slate-100 min-h-screen pb-24">
      
      {/* --- HERO IMAGE (FULL WIDTH) --- */}
      <div className="relative h-[60vh] w-full">
        {thumbnail ? (
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            alt={judul}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-blue-900"></div> // Fallback jika tidak ada gambar
        )}
        
        {/* Gradient Overlay (Supaya Teks Terbaca) */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

        {/* Judul di Atas Gambar */}
        <div className="absolute bottom-0 left-0 w-full p-6 pb-24 md:pb-32">
          <div className="container mx-auto max-w-4xl">
            <Link href="/blog" className="inline-flex items-center text-yellow-400 hover:text-white font-bold mb-6 transition">
              ← Kembali ke Tips Hajatan
            </Link>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              {judul}
            </h1>
            
            {/* Metadata Kecil */}
            <div className="flex items-center gap-4 mt-6 text-blue-200 text-sm md:text-base font-medium">
              <span className="bg-blue-600/80 px-3 py-1 rounded-full text-white">Tips & Trik</span>
              <span>•</span>
              <span>{new Date(tanggal).toLocaleDateString('id-ID', { dateStyle: 'full' })}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- KONTEN ARTIKEL (FLOATING CARD EFFECT) --- */}
      <article className="relative z-10 -mt-20 container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl shadow-blue-900/10">
          
          {/* Isi Konten (Rich Text Rendered) */}
          <div className="prose prose-lg max-w-none text-slate-600">
            {documentToReactComponents(konten, renderOptions)}
          </div>

          {/* --- BAGIAN PENUTUP / CTA --- */}
          <div className="mt-16 pt-10 border-t border-slate-100">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Suka dengan tips ini?
              </h3>
              <p className="text-slate-600 mb-6 max-w-lg mx-auto">
                Jangan lupa, urusan alat pesta serahkan pada ahlinya. Konsultasikan kebutuhan acaramu sekarang.
              </p>
              <a 
                href="https://wa.me/6281234567890" 
                className="inline-block bg-green-500 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                Chat Zaky Musik di WhatsApp 💬
              </a>
            </div>
          </div>

        </div>
      </article>

    </main>
  );
}