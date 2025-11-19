// src/app/galeri/page.js
import { client } from "@/lib/contentfulClient";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const revalidate = 0; // Artinya: Selalu cek data terbaru (Real-time)
async function getGaleriItems() {
  const response = await client.getEntries({
    content_type: 'galeriItem', 
  });
  return response.items;
}

export const metadata = {
  title: "Galeri Dokumentasi - Zaky Musik",
  description: "Foto-foto asli peralatan dan hasil kerja Zaky Musik di berbagai event Pemalang.",
};

export default async function Galeri() {
  const galeriItems = await getGaleriItems();

  return (
    <main className="bg-slate-50 min-h-screen">
      
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Galeri Dokumentasi</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Bukti nyata kualitas peralatan dan hasil kerja tim <br/>
          <span className="font-bold text-yellow-400">Zaky Musik Pemalang</span>
        </p>
      </section>

      <section className="container mx-auto px-6 py-12">
        
        {galeriItems.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <p>Belum ada foto yang diupload.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galeriItems.map((item) => {
              const { judul, kategori, deskripsi, foto } = item.fields;
              
              // Kita ambil file aslinya dulu
              const imageItem = Array.isArray(foto) ? foto[0] : foto;
              // Baru kita ambil URL-nya
              const imageUrl = imageItem?.fields?.file?.url;
              // -------------------------------------

              return (
                <div key={item.sys.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group border border-slate-100">
                  
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {imageUrl ? (
                      <Image 
                        src={`https:${imageUrl}`} 
                        alt={judul || "Dokumentasi Zaky Musik"} 
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    
                    <div className="absolute top-4 left-4 bg-blue-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      {kategori || "Umum"}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition">
                      {judul}
                    </h3>
                    
                    <div className="text-slate-500 text-sm leading-relaxed prose prose-sm">
                       {deskripsi ? documentToReactComponents(deskripsi) : ''}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      <section className="container mx-auto px-6 pb-20 text-center">
        <div className="bg-green-50 border border-green-200 p-8 rounded-2xl max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-green-900 mb-4">
            Mau Lihat Video Cek Sound Terbaru? 🔊
          </h3>
          <p className="text-green-800 mb-6">
            Kami sering update aktivitas, video cek sound, dan pemasangan tenda di Status WhatsApp.
            Simpan nomor kami untuk lihat update harian!
          </p>
          <a 
            href="https://wa.me/6285226770959"
            className="inline-block bg-green-600 text-white font-bold px-8 py-3 rounded-full hover:bg-green-700 transition transform hover:scale-105"
          >
            Lihat di WhatsApp →
          </a>
        </div>
      </section>

    </main>
  );
}