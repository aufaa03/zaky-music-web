// src/app/blog/page.js
import { client } from "@/lib/contentfulClient";
import Link from "next/link";
import Image from "next/image";

// Fungsi untuk mengambil data dari Contentful
async function getBlogPosts() {
  const response = await client.getEntries({
    content_type: 'blogPost', // Pastikan ID ini SAMA dengan yang kamu buat di Contentful
    // order: '-sys.createdAt' // (Opsional) Urutkan dari yang terbaru
  });

  return response.items;
}

export const metadata = {
  title: "Blog & Tips Hajatan - Zaky Musik",
  description: "Tips seputar pernikahan, sewa sound system, dan panduan hajatan di Pemalang.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      
      {/* HEADER */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog & Tips Hajatan</h1>
        <p className="text-blue-200 max-w-2xl mx-auto">
          Informasi menarik seputar persiapan acara, rekomendasi gedung, dan tips memilih vendor di Pemalang.
        </p>
      </section>

      {/* LIST ARTIKEL */}
      <section className="container mx-auto px-6 -mt-10">
        {posts.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <p>Belum ada artikel terbaru.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => {
              // Kita ambil data dari struktur Contentful
              const { judul, slug, thumbnail, tanggal } = post.fields;
              const imageUrl = thumbnail?.fields?.file?.url;

              return (
                <div key={post.sys.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  
                  {/* Gambar Thumbnail */}
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    {imageUrl && (
                      <Image 
                        src={`https:${imageUrl}`} // Contentful URL butuh "https:"
                        alt={judul}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    )}
                  </div>

                  {/* Konten Singkat */}
                  <div className="p-6">
                    <p className="text-xs text-blue-600 font-bold mb-2">
                      {new Date(tanggal).toLocaleDateString('id-ID', { dateStyle: 'long' })}
                    </p>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition">
                      {judul}
                    </h2>
                    
                    {/* Tombol Baca */}
                    <Link 
                      href={`/blog/${slug}`} 
                      className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mt-2"
                    >
                      Baca Selengkapnya →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

    </main>
  );
}