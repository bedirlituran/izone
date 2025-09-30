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
    progress: 0.5,
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
  const angle = Math.round(progress * 240);
  const style = {
    background: `conic-gradient(var(--accent) ${angle}deg, var(--track) ${angle}deg)`,
  };

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div
        className="w-full h-full rounded-full p-3 shadow-inner transition-all"
        style={style}
      >
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-slate-900">{speed}</div>
            <div className="text-xs text-slate-500 -mt-1">{unit}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        :root {
          --accent: #6366f1; /* indigo-500 */
          --track: #e5e7eb;  /* gray-200 */
        }
      `}</style>
    </div>
  );
}

export default function Packages() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-14">
        İnternet paketləri
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative bg-gradient-to-b from-white to-slate-50 rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-10 flex flex-col items-center text-center"
          >
            {pkg.note && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs px-4 py-1.5 rounded-full shadow-md font-medium tracking-wide">
                ⭐ {pkg.note}
              </div>
            )}

            <SpeedDial speed={pkg.speed} unit={pkg.unit} progress={pkg.progress} />

            <h3 className="mt-6 text-xl md:text-2xl font-bold text-slate-900">{pkg.title}</h3>

            <ul className="mt-6 mb-8 space-y-3">
              {pkg.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 justify-center">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <p className="text-3xl font-extrabold text-indigo-600">{pkg.price}</p>
              <span className="text-sm text-slate-500">/ayda</span>
            </div>

            <button className="mt-8 w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold py-2.5 px-6 rounded-xl shadow hover:scale-105 hover:shadow-lg transition-all duration-300">
              İndi qoşul
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
