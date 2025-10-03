"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 sticky top-0 bg-black/40 backdrop-blur-md z-50">
      <Link href='/' className="text-2xl font-bold text-white">izone</Link>

      <nav className="hidden md:flex gap-10 text-white font-medium relative">
        {/* Xidmətlər Dropdown */}
        <div className="group relative">
          <button className="hover:text-yellow-400 transition">
            Xidmətlər ▽
          </button>
          <div className="absolute mt-2 w-40 bg-black/80 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
            <Link
              href="/telefon"
              className="block px-4 py-2 hover:bg-yellow-400 hover:text-black rounded-t-lg"
            >
              Telefon
            </Link>
            <Link
              href="/internet"
              className="block px-4 py-2 hover:bg-yellow-400 hover:text-black"
            >
              İnternet
            </Link>
            <Link
              href="/iptv"
              className="block px-4 py-2 hover:bg-yellow-400 hover:text-black rounded-b-lg"
            >
              IP TV
            </Link>
          </div>
        </div>

        {/* Digər linklər */}
        <Link href="/cihazlar" className="hover:text-yellow-400 transition">
          Cihazlar
        </Link>
        <Link href="/odenis" className="hover:text-yellow-400 transition">
          Ödə
        </Link>
        <Link href="/elaqe" className="hover:text-yellow-400 transition">
          Əlaqə
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl shadow hover:bg-yellow-300 transition font-semibold">
          Ödəniş et
        </button>
      </div>
    </header>
  );
}
