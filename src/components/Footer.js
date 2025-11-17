// src/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* KOLOM 1: BRANDING */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-extrabold text-white mb-4 block">
              Zaky Musik<span className="text-yellow-500">.</span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Penyedia jasa sewa Sound System, Tenda Dekorasi, dan Panggung Rigging terpercaya di Pemalang sejak 2005. Solusi hajatan satu pintu.
            </p>
            <div className="flex gap-4">
              {/* Ikon Sosmed (Placeholder) */}
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                FB
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition">
                YT
              </a>
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Menu Cepat</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-yellow-400 transition">Beranda</Link></li>
              <li><Link href="/layanan" className="hover:text-yellow-400 transition">Paket & Harga</Link></li>
              <li><Link href="/galeri" className="hover:text-yellow-400 transition">Galeri Foto</Link></li>
              <li><Link href="/kontak" className="hover:text-yellow-400 transition">Hubungi Kami</Link></li>
            </ul>
          </div>

          {/* KOLOM 3: KONTAK */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500">📍</span>
                <span>Desa Gondang RT 07 / RW 02, Kec. Taman, Kab. Pemalang</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500">📞</span>
                <span>0852-2677-0959 (WA)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500">⏰</span>
                <span>Buka 24 Jam (Online)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* GARIS PEMBATAS & COPYRIGHT */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zaky Musik Production. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Dibuat dengan <span className="text-red-500">❤</span> oleh Anak Sendiri
          </p>
        </div>
      </div>
    </footer>
  );
}