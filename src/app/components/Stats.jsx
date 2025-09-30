"use client";
import { useEffect, useState } from "react";

const stats = [
  { value: 11, suffix: "+", label: "İllərin təcrübəsi" },
  { value: 1209, suffix: "", label: "Korporativ müştəri" },
  { value: 25, suffix: "k+", label: "Aktiv müştərilər" },
  { value: 99.9, suffix: "%", label: "İş qarantiyası" },
];

export default function Stats() {
  const [counted, setCounted] = useState(false);
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!counted) {
      setCounted(true);
      stats.forEach((stat, i) => {
        let start = 0;
        let end = stat.value;
        let duration = 1000; // ms
        let stepTime = Math.abs(Math.floor(duration / end));

        let timer = setInterval(() => {
          start++;
          setCounters((prev) => {
            const newVals = [...prev];
            newVals[i] = start;
            return newVals;
          });
          if (start >= end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [counted]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white border-2 border-pink-500 rounded-3xl shadow-lg p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {counters[i]}
              {stat.suffix}
            </span>
            <span className="mt-2 text-slate-600 font-medium uppercase tracking-wide text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

