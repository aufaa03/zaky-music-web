// src/app/kontak/page.js
import Link from "next/link";

export default function Kontak() {
  return (
    <main className="bg-slate-50 min-h-screen">
      
      {/* --- 1. HERO HEADER MODERN --- */}
      <section className="relative bg-blue-900 py-24 px-6 text-center overflow-hidden">
        {/* Background Pattern Abstrak */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Hubungi Zaky Musik
          </h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
            Siap mensukseskan hajatan Anda di Pemalang, Comal, Petarukan, & Sekitarnya.
            Konsultasi gratis, nego sampai jadi!
          </p>
        </div>
      </section>

      {/* --- 2. KONTEN KONTAK & MAPS (Glass Effect) --- */}
      <section className="container mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* KARTU KIRI: Info Kontak */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-yellow-400 rounded-full"></span>
              Kontak Resmi
            </h3>
            
            <div className="space-y-6">
              {/* Tombol WA Besar */}
              <a 
                href="https://wa.me/6285226770959?text=Halo,%20saya%20mau%20tanya%20paket%20sewa..."
                target="_blank"
                className="group flex items-center gap-4 p-5 bg-green-50 border border-green-100 rounded-2xl hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-green-200"
              >
                <div className="bg-green-500 text-white p-3 rounded-full group-hover:bg-white group-hover:text-green-500 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium opacity-80 mb-1">Chat WhatsApp (24 Jam)</p>
                  <p className="text-xl font-bold tracking-tight">085226770959</p>
                </div>
              </a>

              {/* Alamat */}
              <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Lokasi Gudang</p>
                  <p className="text-lg font-medium text-slate-800 leading-relaxed">
                    Desa Gondang RT 07 / RW 02<br/>
                    Kec. Taman, Kab. Pemalang<br/>
                    Jawa Tengah 52361
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KARTU KANAN: Maps Modern */}
          <div className="h-[500px] bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.1490944174061!2d109.44282546947524!3d-6.938746768283496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fdd6529b15041%3A0x84b1dd45e1074e03!2sZaky%20Music%20-%20Sewa%20Sound%20System%20%26%20Layos%20Pemalang!5e0!3m2!1sid!2sid!4v1763387979338!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{border:0, filter: "grayscale(0%)"}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:scale-105 transition-transform duration-700"
            ></iframe>
            
            {/* Badge Melayang */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg border border-white/50">
              <p className="text-xs font-bold text-blue-600 mb-1">TITIK LOKASI</p>
              <p className="font-bold text-slate-800">Zaky Musik Basecamp</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}