import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit", // Bikin variabel CSS
});
export const metadata = {
  metadataBase: new URL('https://zaky-music.vercel.app'), // Ganti nama link nanti pas udah deploy
  title: {
    default: "Zaky Musik - Sewa Sound System & Layos Pemalang",
    template: "%s | Zaky Musik"
  },
  description: "Jasa sewa Sound System Horeg, Tenda Dekorasi, Panggung Rigging, dan Alat Prasmanan terlengkap di Pemalang. Est. 2005.",
  
  // Tambahkan ini biar ganteng di WA/FB/IG
  openGraph: {
    title: "Zaky Musik Pemalang - Solusi Hajatan Lengkap",
    description: "Sound System, Tenda, Panggung & Alat Dapur. Nego Sampai Jadi!",
    url: 'https://zaky-music.vercel.app',
    siteName: 'Zaky Musik',
    locale: 'id_ID',
    type: 'website',
  },

  verification: {
    google: 's6uN85qVgPqdK9nJG-kc1WmWqgmbi9E158DNLjOmwFU',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="{`${outfit.className} bg-gray-50 text-gray-900 flex flex-col min-h-screen antialiased`}">
        {/* 2. Pasang Navbar di sini */}
        <Navbar />
        
        {/* 3. Ini adalah konten halaman (Page.js) */}
        {children}

        {/* Nanti Footer taruh sini */}
        <Footer/>
      </body>
    </html>
  );
}
