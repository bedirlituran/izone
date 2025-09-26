// components/Services.jsx
import { Phone, Wifi, Monitor } from "lucide-react";

const xidmetler = [
  {
    icon: <Phone className="w-10 h-10 text-red-600" />,
    title: "IP Telefon (SIP)",
    desc: "Çoxsaylı zənglərin qəbulunu təmin edən sabit və etibarlı qoşulma.",
  },
  {
    icon: <Wifi className="w-10 h-10 text-red-600" />,
    title: "Sürətli İnternet",
    desc: "300 mb/s sürətə qədər fasiləsiz və stabil internet qoşulması.",
  },
  {
    icon: <Monitor className="w-10 h-10 text-red-600" />,
    title: "IPTV Xidməti",
    desc: "IPTV vasitəsilə 300+ keyfiyyətli TV kanalını izləyin.",
  },
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Başlıq */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
        Xidmətlərimiz
      </h2>

      {/* Xidmət Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {xidmetler.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center border hover:border-red-400"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
