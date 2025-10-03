"use client";
import { FaTv, FaTools, FaCrown, FaMobileAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Iptv() {
  const features = [
    {
      icon: <FaTv className="text-green-600 text-3xl" />,
      title: "Yüksək keyfiyyət",
      desc: "Parlaq və detallı görüntü, güclü və aydın səs.",
    },
    {
      icon: <FaTools className="text-green-600 text-3xl" />,
      title: "Pulsuz quraşdırılma",
      desc: "Qoşulma zamanı ustalarımız tərəfindən tam ödənişsiz quraşdırılma.",
    },
    {
      icon: <FaCrown className="text-green-600 text-3xl" />,
      title: "Premium kanallar",
      desc: "Hər gün izləyə biləcəyiniz 300+ yerli və xarici televiziya kanalları.",
    },
    {
      icon: <FaMobileAlt className="text-green-600 text-3xl" />,
      title: "Bütün cihazlara qoşulma",
      desc: "Televizor, kompüter, notbuk və hətta smartfona qoşula bilər.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-full py-16 px-6 bg-white text-center">
        {/* Başlıq */}
        <h1 className="text-3xl font-bold mb-6">İPTV</h1>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Bossnet İnternet və İnternet Protokolu (IP) üzərindən standart televiziya kanallarının ötürülməsini dəstəkləyir.
          Kabel və peyk televiziyası ilə müqayisədə IPTV görüntünün və səsin yüksək keyfiyyətdə ötürülməsini təmin edir.
          Xidmətə qoşulmaq üçün xüsusi konsol və sabit, sürətli internet lazımdır.
          IPTV vasitəsilə siz <span className="font-semibold">300+ yerli və xarici televiziya kanallarını</span> izləyə bilərsiniz.
        </p>

        {/* Xüsusiyyətlər */}
        <h2 className="text-2xl font-semibold mb-10">Xüsusiyyətlər</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
