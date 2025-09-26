'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/izon.png", alt: "Router və internet təklifi" },
  { src: "/offer2.png", alt: "Hədiyyə Apple TV" },
  { src: "/offer3.png", alt: "Sürətli internet" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // 🔄 Avtomatik şəkil dəyişmə
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 saniyədən bir dəyişir
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="text-2xl font-bold text-red-600">izone</div>

        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-red-600 transition">
            Xidmətlər
          </a>
          <a href="#" className="hover:text-red-600 transition">
            Cihazlar
          </a>
          <a href="#" className="hover:text-red-600 transition">
            Ödə
          </a>
          <a href="#" className="hover:text-red-600 transition">
            Əlaqə
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <select className="border rounded-md px-2 py-1 text-sm">
            <option value="az">AZ</option>
            <option value="en">EN</option>
          </select>
          <button className="bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition">
            Ödəniş et
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-8">
        <div className="space-y-4 text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Pulsuz internet qoşulma <br /> + Router hədiyyə
          </h1>
          <p className="text-gray-600 text-lg">
            Sürətli və etibarlı internetə qoşul və router hədiyyə qazan.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-red-700 transition text-lg">
            İndi qoşul
          </button>
        </div>

        {/* Şəkil slider */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[350px] h-[280px] md:w-[400px] md:h-[300px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              width={400}
              height={300}
              className="object-contain w-full h-full transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Manual Controls */}
          <button
            onClick={prev}
            className="absolute left-0 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </section>
    </main>
  );
}
