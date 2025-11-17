// src/app/page.js
"use client"; // WAJIB ADA: Karena kita pakai useState untuk FAQ

import Link from "next/link";
import { useState } from "react";
import GoogleReviews from "@/components/GoogleReviews";

export default function Home() {
  // Logic untuk FAQ (Buka/Tutup)
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Apakah harga sewa bisa nego?", a: "Tentu saja! Kami menerapkan sistem kekeluargaan. Silahkan hubungi kami via WhatsApp untuk membicarakan budget Anda." },
    { q: "Apakah melayani luar kota Pemalang?", a: "Fokus utama kami di Pemalang, Comal, Petarukan. Namun untuk event besar kami siap melayani area Tegal & Pekalongan dengan penyesuaian transport." },
    { q: "Apa saja yang harus disiapkan penyewa?", a: "Cukup sediakan tempat dan sumber listrik (jika paket kecil). Untuk paket besar, kami bawa Genset sendiri." },
    { q: "Bagaimana cara booking tanggal?", a: "Booking dianggap sah jika sudah memberikan DP (Uang Muka). Segera amankan tanggal Anda karena hari 'baik' seringkali penuh cepat." },
  ];

  return (
    <main className="bg-slate-50 overflow-hidden">
      
      {/* --- 1. HERO SECTION (Sama tapi lebih rapi) --- */}
      <section className="relative bg-slate-900 text-white min-h-[85vh] flex items-center justify-center px-6 text-center pt-20">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="animate-fade-up inline-block bg-yellow-500/10 border border-yellow-500/50 text-yellow-300 text-sm font-bold px-4 py-1 rounded-full mb-6 backdrop-blur-sm">
            ★ Sejak 2005 di Pemalang
          </div>

          <h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Hajatan Meriah,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
               Budget Ramah.
            </span>
          </h1>
          
          <p className="animate-fade-up delay-200 text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Pusat sewa <strong>Zaky Musik</strong>: Sound System, Tenda Dekorasi, dan Panggung Rigging. Solusi satu pintu untuk acara sukses.
          </p>

          <div className="animate-fade-up delay-300 flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/6285226770959" className="bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition hover:scale-105 shadow-lg shadow-yellow-500/20">
              Konsultasi Gratis via WA
            </a>
            <Link href="/layanan" className="border border-slate-600 text-slate-300 font-bold px-8 py-4 rounded-full hover:bg-white hover:text-slate-900 transition">
              Lihat Paket & Alat
            </Link>
          </div>
        </div>
      </section>

      {/* --- 2. MARQUEE (RUNNING TEXT) - FITUR BARU --- */}
      <div className="bg-blue-900 py-4 overflow-hidden relative z-20 border-y border-blue-800">
        <div className="whitespace-nowrap animate-marquee flex gap-10">
          {/* Kita ulang teksnya biar nyambung terus (Loop) */}
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-blue-200 font-bold text-xl uppercase tracking-widest flex items-center gap-4">
              SOUND SYSTEM <span className="text-yellow-500">•</span> TENDA LAYOS <span className="text-yellow-500">•</span> PANGGUNG RIGGING <span className="text-yellow-500">•</span> ALAT PRASMANAN <span className="text-yellow-500">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* --- 3. STATISTIK KEPERCAYAAN (TRUST STATS) --- */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div>
              <h3 className="text-4xl font-extrabold text-blue-600 mb-1">18+</h3>
              <p className="text-slate-500 text-sm">Tahun Pengalaman</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-blue-600 mb-1">1000+</h3>
              <p className="text-slate-500 text-sm">Acara Sukses</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-blue-600 mb-1">24/7</h3>
              <p className="text-slate-500 text-sm">Konsultasi WA</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-blue-600 mb-1">100%</h3>
              <p className="text-slate-500 text-sm">Amanah & Tepat Waktu</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. KEUNGGULAN --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">Kenapa Zaky Musik?</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-blue-500">
              <div className="text-5xl mb-4">🔊</div>
              <h3 className="text-xl font-bold mb-3">Anti Feedback</h3>
              <p className="text-slate-600">Kami menggunakan mixer dan manajemen speaker yang baik. Dijamin tidak ada suara "nguing" yang mengganggu telinga tamu.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-yellow-500">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Nego Sampai Jadi</h3>
              <p className="text-slate-600">Punya budget mepet? Bicarakan saja. Kami akan carikan spesifikasi alat yang pas dengan kantong Anda.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-green-500">
              <div className="text-5xl mb-4">🚛</div>
              <h3 className="text-xl font-bold mb-3">Armada Sendiri</h3>
              <p className="text-slate-600">Kami punya armada angkut sendiri. Tidak perlu khawatir alat telat datang. Kami selalu *standby* lebih awal.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Layanan Kami</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
              Apa yang Anda Butuhkan?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Sound */}
            <div className="group relative bg-slate-900 rounded-3xl p-8 overflow-hidden min-h-[250px] flex flex-col justify-center hover:shadow-2xl hover:shadow-blue-900/20 transition-all">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-9xl rotate-12">🔊</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Sewa Sound System</h3>
                <p className="text-slate-300 mb-6 max-w-md">Paket hemat syukuran hingga paket konser. Mixer & Mic Wireless ready.</p>
                <Link href="/layanan" className="inline-flex items-center text-white font-bold hover:gap-2 transition-all">
                  Cek Spesifikasi <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Box 2: Tenda */}
            <div className="group relative bg-blue-600 rounded-3xl p-8 overflow-hidden min-h-[250px] flex flex-col justify-center hover:shadow-2xl hover:shadow-blue-600/20 transition-all">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-9xl rotate-12">⛺</div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Tenda & Panggung</h3>
                <p className="text-blue-100 mb-6 max-w-md">Tenda plafon VIP, Panggung Rigging (Rejing), dan Dekorasi Lamaran.</p>
                <Link href="/layanan" className="inline-flex items-center text-white font-bold hover:gap-2 transition-all">
                  Lihat Model Tenda <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

             {/* Box 3: Alat Dapur (Baru) */}
             <div className="group relative bg-orange-500 rounded-3xl p-8 overflow-hidden min-h-[250px] flex flex-col justify-center hover:shadow-2xl hover:shadow-orange-500/20 transition-all md:col-span-2">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity text-9xl rotate-12">🍽️</div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Alat Prasmanan & Dapur</h3>
                  <p className="text-orange-100 max-w-lg">Lengkap! Piring, Sendok, Dandang, Pemanas. Bersih dan siap pakai untuk hajatan besar.</p>
                </div>
                <Link href="/layanan" className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors">
                  Cek Daftar Alat
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- 5. FAQ INTERAKTIF (ACCORDION) - FITUR BARU --- */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Pertanyaan Umum</h2>
          
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100 transition text-left"
                >
                  <span className="font-bold text-slate-700">{item.q}</span>
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`bg-white px-5 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <p className="text-slate-600">{item.a}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

<GoogleReviews/>

      {/* --- CTA FINAL --- */}
      <section className="py-20 px-6 bg-blue-900 text-center">
        <h2 className="text-3xl text-white font-bold mb-6">Siap Memeriahkan Acara Anda?</h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">Tanggal cantik cepat penuh! Segera hubungi kami untuk mengamankan jadwal sound system & tenda Anda.</p>
        <a href="https://wa.me/6285226770959" className="inline-block bg-green-500 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-green-400 hover:shadow-lg transition">
          Booking Tanggal Sekarang
        </a>
      </section>

    </main>
  );
}