// src/app/not-found.js
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white relative overflow-hidden">
      
      {/* --- Background Effects (Glow) --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]"></div>

      <div className="relative z-10 text-center px-6">
        
        {/* --- IKON 404 KUSTOM (Vinyl Record Pecah) --- */}
        <div className="mb-8 relative inline-block">
          {/* Angka 404 Besar */}
          <h1 className="text-[10rem] md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 select-none leading-none">
            404
          </h1>
          
          {/* Ikon Melayang di Depan Angka */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="1" 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               className="w-40 h-40 text-blue-500 animate-bounce"
             >
               {/* Gambar Speaker Silang (Mute) */}
               <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
               <line x1="23" y1="9" x2="17" y2="15"></line>
               <line x1="17" y1="9" x2="23" y2="15"></line>
             </svg>
          </div>
        </div>

        {/* --- TEKS PESAN --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Waduh, Suaranya Hilang!
        </h2>
        <p className="text-slate-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Halaman yang Anda cari mungkin kabelnya putus, mic-nya mati, atau sudah dipindah ke panggung lain.
        </p>

        {/* --- TOMBOL KEMBALI --- */}
        <Link 
          href="/"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform duration-300"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
          <span>🏠 Kembali ke Beranda</span>
        </Link>

      </div>
    </div>
  );
}