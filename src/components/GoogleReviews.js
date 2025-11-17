// src/components/GoogleReviews.js
import Image from "next/image";

export default function GoogleReviews() {
  // DATA REVIEW (Ambil dari Google Maps asli Zaky Musik nanti)
  const reviews = [
    {
      name: "Budi Santoso",
      date: "2 minggu lalu",
      rating: 5,
      text: "Pelayanan mantap! Sound systemnya horeg banget, anti feedback. Mas Zaky juga enak diajak diskusi soal harga. Recommended buat hajatan di Pemalang👍",
      avatarColor: "bg-red-500" // Warna-warni ala Google
    },
    {
      name: "Siti Aminah",
      date: "1 bulan lalu",
      rating: 5,
      text: "Sewa tenda dekorasi di sini hasilnya memuaskan. Pemasangan cepat dan rapi. Alat piringnya juga bersih semua. Makasih Zaky Musik!",
      avatarColor: "bg-green-500"
    },
    {
      name: "Heri Purnomo",
      date: "3 bulan lalu",
      rating: 5,
      text: "Paket sound hajatan paling worth it di Comal. Suara jernih, operatornya standby terus. Sukses terus gan..👍",
      avatarColor: "bg-blue-500"
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* HEADER ALA GOOGLE */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <div className="flex items-center gap-2 mb-2">
             {/* Logo Google G (SVG) */}
            <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <h2 className="text-2xl font-bold text-slate-700">Google Rating</h2>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-4xl font-bold text-slate-800">5.0</span>
            <div className="flex text-yellow-400 text-2xl">
              ★★★★★
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-2">Berdasarkan ulasan pelanggan asli</p>
        </div>

        {/* GRID REVIEW CARD */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white border border-slate-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar Inisial */}
                <div className={`w-10 h-10 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.date}</p>
                </div>
                <div className="ml-auto">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="google" className="w-5 h-5 opacity-50" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 text-sm mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Text Review */}
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                "{review.text}"
              </p>

            </div>
          ))}
        </div>

        {/* BUTTON WRITE REVIEW */}
        <div className="text-center mt-10">
          <a 
            href="https://maps.app.goo.gl/UCxdnDMRynojjJPe6" // Ganti Link ini nanti
            target="_blank"
            className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3 rounded-full text-slate-600 hover:bg-slate-50 transition font-medium"
          >
            <span>Tulis Ulasan di Google</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>

      </div>
    </section>
  );
}