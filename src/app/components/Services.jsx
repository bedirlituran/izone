// components/Services.jsx
import { Phone, Wifi, Monitor } from "lucide-react";

const xidmetler = [
  {
    icon: Phone,
    title: "IP Telefon (SIP)",
    desc: "Çoxsaylı zənglərin qəbulunu təmin edən sabit və etibarlı qoşulma.",
  },
  {
    icon: Wifi,
    title: "Sürətli İnternet",
    desc: "300 mb/s sürətə qədər fasiləsiz və stabil internet qoşulması.",
  },
  {
    icon: Monitor,
    title: "IPTV Xidməti",
    desc: "IPTV vasitəsilə 300+ keyfiyyətli TV kanalını izləyin.",
  },
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-14">
        Xidmətlərimiz
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {xidmetler.map((item, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-3xl shadow-md border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 p-10 flex flex-col items-center text-center hover:-translate-y-1"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <item.icon className="w-10 h-10 text-white" />
            </div>

            <h3 className="mt-6 text-xl md:text-2xl font-bold text-slate-900">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
