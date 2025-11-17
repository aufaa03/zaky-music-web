// src/components/Navbar.js
"use client"; // WAJIB: Karena ada interaksi klik (useState)

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // Import state

export default function Navbar() {
  // State untuk cek apakah menu mobile sedang terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* 1. LOGO BRAND */}
        <Link href="/" className="text-xl font-bold hover:text-yellow-400 transition z-50">
          Zaky Musik<span className="text-yellow-400">.</span>
        </Link>

        {/* 2. TOMBOL HAMBURGER (Hanya Muncul di HP) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {/* Ikon berubah: Kalau buka jadi 'X', kalau tutup jadi 'Garis 3' */}
          {isOpen ? (
            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

        {/* 3. MENU DESKTOP (Tersembunyi di HP) */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="hover:text-yellow-400 transition font-medium">Beranda</Link>
          <Link href="/layanan" className="hover:text-yellow-400 transition font-medium">Paket & Harga</Link>
          <Link href="/galeri" className="hover:text-yellow-400 transition font-medium">Galeri</Link>
          <Link href="/blog" className="hover:text-yellow-400 transition font-medium">Blog</Link>
          <Link href="/kontak" className="hover:text-yellow-400 transition font-medium">Kontak</Link>
          
          {/* Tombol WA Desktop (Opsional, sudah ada tombol melayang) */}
          {/* <a href="..." className="...">WhatsApp</a> */} 
        </div>

      </div>

      {/* 4. MENU MOBILE (Overlay Fullscreen / Dropdown) */}
      {/* Logika: Kalau isOpen=true, tampilkan. Kalau false, sembunyikan. */}
      <div 
        className={`
          md:hidden absolute top-0 left-0 w-full h-screen bg-blue-950/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-xl transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Beranda</Link>
        <Link href="/layanan" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Paket & Harga</Link>
        <Link href="/galeri" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Galeri Foto</Link>
        <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Blog & Tips</Link>
        <Link href="/kontak" onClick={() => setIsOpen(false)} className="hover:text-yellow-400 transition">Hubungi Kami</Link>
      </div>

      {/* 5. TOMBOL WA MELAYANG (Tetap Ada) */}
      <a
        href="https://wa.me/6285226770959"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 border-2 border-white p-3 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 animate-bounce"
        aria-label="Chat WhatsApp"
      >
        <Image
          src="/whatsapp.svg"
          alt="Logo WhatsApp"
          width={35}
          height={35}
          className="object-contain"
        />
      </a>

    </nav>
  );
}