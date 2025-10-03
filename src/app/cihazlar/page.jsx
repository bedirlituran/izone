"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Cihazlar() {
  const devices = [
    {
      id: 1,
      name: "WORLD VISION T624D2",
      desc: "World Vision T624 D2 konsolu GUOXIN GX6701 prosessor üzərində işləyir. Rəqəmsal TV-nin DVB-T/T2 efir, DVB-C kabel televiziyasının standartlarında...",
      price: "120₼",
      img: "/world.png",
    },
    {
      id: 2,
      name: "TVIP-410",
      desc: "Amlogic S805 quad core 1,5 HHZ prosessorla təmin olunub. Yaddaş RAM 512 Mb, Flash 4 Gb-dır. HDMI, USB, MicroSD Card, ext.IR girişləri mövcuddur...",
      price: "",
      img: "/tvip.png",
    },
    {
      id: 3,
      name: "TP-LINK Archer C20 AC750",
      desc: "Ötürmə qabiliyyəti 733 Mbit/s-ə qədərdir: 2,4 GHz-da 300 Mbit/s, 5 GHz-da isə 433 Mbit/s-a qədərdir. Üç antena sayəsində siqnal daimidir. HD axını...",
      price: "",
      img: "/modem.png",
    },
    {
      id: 4,
      name: "TP-Link Wi-Fi Router Archer C24",
      desc: "Cihaz Amlogic S805 quad core 1,5 MHz çipi üzərində işləyir. Görüntünü 1920x1080 keyfiyyətində ötürür. HEVC dəstəklənir. RAM 512 Mb, Flash...",
      price: "",
      img: "/modem1.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-full py-16 px-6 bg-white text-center">
        {/* Başlıq */}
        <h1 className="text-3xl font-bold mb-2">Cihazlar</h1>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Həyatınızı asanlaşdıracaq cihazlarımızı almağa tələsin 👌
        </p>

        {/* Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-16">
          {devices.map((device) => (
            <div
              key={device.id}
              className="relative flex flex-col items-center text-center p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Qiymət */}
              {device.price && (
                <span className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg font-semibold">
                  {device.price}
                </span>
              )}

              {/* Şəkil */}
              <div className="w-32 h-32 flex items-center justify-center mb-4">
                <Image
                  src={device.img}
                  alt={device.name}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>

              {/* Məhsul məlumatı */}
              <h3 className="text-lg font-semibold mb-2">{device.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{device.desc}</p>

              {/* Sifariş düyməsi */}
              <button className="mt-auto border border-black px-4 py-2 rounded-lg font-medium hover:bg-black hover:text-white transition">
                Sifariş et
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
