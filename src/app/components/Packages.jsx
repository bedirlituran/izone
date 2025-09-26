// components/Packages.jsx
'use client'
import React from "react";
import { Check } from "lucide-react";



const packages = [
  {
    id: "basic",
    title: "İnternet",
    speed: "100",
    unit: "mb/s",
    progress: 0.5, // 0..1 arası vizual göstərici
    features: ["Fiber optik"],
    price: "25 ₼",
    note: "",
  },
  {
    id: "tv",
    title: "İnternet + Rəqəmsal TV",
    speed: "150",
    unit: "mb/s",
    progress: 0.75,
    features: ["Fiber optik", "200+ kanal"],
    price: "31 ₼",
    note: "Məşhurdur",
  },
  {
    id: "full",
    title: "İnternet + TV + Telefon",
    speed: "200",
    unit: "mb/s",
    progress: 0.9,
    features: ["Fiber optik", "200+ kanal", "Telefon xətti"],
    price: "34.50 ₼",
    note: "",
  },
];

function SpeedDial({ speed, unit, progress = 0.6 }) {
  // progress: 0..1 — istifadə etdim ki, conic-gradient ilə vizual göstərək
  const angle = Math.round(progress * 240); // 240deg semi-circle effektinə uyğun
  const style = {
    background: `conic-gradient(var(--accent) ${angle}deg, var(--track) ${angle}deg)`,
  };

  return (
    <div className="w-28 h-28 rounded-full relative flex items-center justify-center">
      <div
        className="w-full h-full rounded-full p-4"
        style={style}
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-extrabold">{speed}</div>
            <div className="text-xs text-gray-500 -mt-1">{unit}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :root { --accent: #ef4444; --track: #e6e6e6; }
      `}</style>
    </div>
  );
}

export default function Packages() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
        İnternet paketləri
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition p-8 flex flex-col items-center text-center"
          >
            {/* note / badge */}
            {pkg.note && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {pkg.note}
              </div>
            )}

            {/* Speed dial */}
            <SpeedDial speed={pkg.speed} unit={pkg.unit} progress={pkg.progress} />

            {/* Title */}
            <h3 className="mt-6 text-lg md:text-xl font-bold text-gray-900">{pkg.title}</h3>

            {/* Features */}
            <ul className="mt-4 mb-6 space-y-3">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div className="mt-auto">
              <p className="text-2xl md:text-3xl font-extrabold text-red-600">{pkg.price}</p>
              <span className="text-sm text-gray-500">/ayda</span>
            </div>

            {/* CTA */}
            <button className="mt-6 w-full bg-transparent border border-red-600 text-red-600 py-2 px-4 rounded-lg hover:bg-red-600 hover:text-white transition">
              İndi qoşul
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
