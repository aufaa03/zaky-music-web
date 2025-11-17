// src/app/layanan/page.js
import Link from "next/link";

export default function Layanan() {
  return (
    <main className="bg-gray-50 min-h-screen pb-20">
      
      {/* --- 1. HEADER --- */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Layanan & Paket Sewa
        </h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          Solusi Hajatan Terlengkap di Pemalang: <br/>
          <span className="font-bold text-yellow-400">
            Sound • Tenda • Panggung • Alat Prasmanan
          </span>
        </p>
        <p className="mt-4 text-sm text-gray-300 font-semibold bg-blue-800 inline-block px-4 py-1 rounded-full">
          EST. 2005 (Berpengalaman Hampir 20 Tahun)
        </p>
      </section>

      {/* --- 2. DAFTAR LAYANAN (Grid 2 Kolom di Desktop) --- */}
      <section className="container mx-auto px-6 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* KARTU 1: Sound System */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="bg-blue-100 p-6 flex items-center gap-4">
              <div className="text-4xl">🔊</div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Sound System</h2>
                <p className="text-sm text-gray-600">Jernih & Horeg (Anti Feedback)</p>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Paket Hajatan:</strong> Speaker 15" + 18" Subwoofer</li>
                <li>✓ <strong>Paket Event:</strong> Line Array & Monitor Panggung</li>
                <li>✓ Mixer Audio Professional & Mic Wireless</li>
                <li>✓ Termasuk Operator Standby</li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a href="https://wa.me/6285226770959?text=Tanya%20Sound" className="block w-full bg-green-600 text-white text-center font-bold py-2 rounded hover:bg-green-700 transition">Cek Spek via WA</a>
            </div>
          </div>

          {/* KARTU 2: Tenda & Panggung (Update ada Rejing) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="bg-green-100 p-6 flex items-center gap-4">
              <div className="text-4xl">⛺</div>
              <div>
                <h2 className="text-2xl font-bold text-green-900">Tenda & Panggung</h2>
                <p className="text-sm text-gray-600">Dari Tenda Biasa sampai Rigging</p>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Tenda Hajatan:</strong> Plafon / Serut / VIP</li>
                <li>✓ <strong>Panggung Rigging (Rejing):</strong> Kokoh & Tinggi (Untuk Konser/Event)</li>
                <li>✓ Panggung Pelaminan Standar</li>
                <li>✓ Terpal Layos Kualitas Bagus (Tidak Bocor)</li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a href="https://wa.me/6285226770959?text=Tanya%20Tenda" className="block w-full bg-green-600 text-white text-center font-bold py-2 rounded hover:bg-green-700 transition">Tanya Ukuran via WA</a>
            </div>
          </div>

          {/* KARTU 3: Alat Dapur & Prasmanan (NEW!) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="bg-orange-100 p-6 flex items-center gap-4">
              <div className="text-4xl">🍽️</div>
              <div>
                <h2 className="text-2xl font-bold text-orange-900">Alat Catering & Dapur</h2>
                <p className="text-sm text-gray-600">Lengkap! Tinggal Masak & Saji</p>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Alat Makan:</strong> Piring, Sendok, Garpu, Mangkok, Gelas</li>
                <li>✓ <strong>Alat Masak:</strong> Dandang Besar, Wajan, Kompor Gas</li>
                <li>✓ <strong>Alat Saji:</strong> Pemanas Prasmanan (Roll Top), Centong</li>
                <li>✓ Kondisi Bersih & Siap Pakai</li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a href="https://wa.me/6285226770959?text=Tanya%20Alat%20Dapur" className="block w-full bg-orange-600 text-white text-center font-bold py-2 rounded hover:bg-orange-700 transition">List Harga Sewa via WA</a>
            </div>
          </div>

          {/* KARTU 4: Perlengkapan Pendukung */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="bg-gray-100 p-6 flex items-center gap-4">
              <div className="text-4xl">💡</div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Perlengkapan Lain</h2>
                <p className="text-sm text-gray-600">Genset, Kursi, & Kipas</p>
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-2 text-gray-700">
                <li>✓ Kursi Plastik + Sarung (Cover)</li>
                <li>✓ Meja Tamu & Meja Prasmanan</li>
                <li>✓ Genset (Silent / Open) berbagai Kapasitas</li>
                <li>✓ Kipas Angin Blower (Misty Fan)</li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a href="https://wa.me/6285226770959?text=Tanya%20Perlengkapan" className="block w-full bg-gray-700 text-white text-center font-bold py-2 rounded hover:bg-gray-800 transition">Cek Ketersediaan via WA</a>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. CTA FOOTER --- */}
      <section className="container mx-auto px-6 mt-16 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Butuh Paket Komplit (Sound + Tenda + Alat Dapur)?
        </h3>
        <p className="text-gray-600 mb-6">
          Ambil paket borongan pasti lebih murah. Nego sampai jadi!
        </p>
        <Link href="/kontak" className="inline-block border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-900 hover:text-white transition">
          📍 Cek Lokasi Kami
        </Link>
      </section>

    </main>
  );
}