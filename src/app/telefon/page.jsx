"use client";
import { FaVolumeUp, FaWifi, FaKeyboard, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Telefon() {
  const features = [
    {
      icon: <FaVolumeUp className="text-red-600 text-3xl" />,
      title: "Təbii səs",
      desc: "Sabit qoşulma siqnalı gecikməsiz və əngəlsiz zənglərin aparılmasına imkan verir.",
    },
    {
      icon: <FaWifi className="text-red-600 text-3xl" />,
      title: "İnternetə qoşulma",
      desc: "İnternet vasitəsilə zənglər anlaq telefoniyə nisbətən daha sərfəli olur.",
    },
    {
      icon: <FaKeyboard className="text-red-600 text-3xl" />,
      title: "İşıqlandırma ilə klaviatura",
      desc: "Zəif işıq şəraitində belə rahat istifadəyə imkan verir.",
    },
    {
      icon: <FaPhoneAlt className="text-red-600 text-3xl" />,
      title: "Çoxfunksiyalılıq",
      desc: "Eyni zamanda çoxsaylı zənglərin qəbulu və ötürülməsini təmin edir.",
    },
  ];

  return (
    <div>
       <Navbar/>
        <div className="w-full py-16 px-6 bg-white text-center">
      {/* Başlıq */}
      <h1 className="text-3xl font-bold mb-6">Telefon</h1>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
        Bossnet ənənəvi telefon xidmətlərinə alternativ olan IP telefon xidmətinin
        qoşulması ilə məşğuldur. Bu texnologiya adi telefon ilə internetin
        xüsusiyyətlərini birləşdirir, daha sərfəli və istifadədə daha rahatdır.
        IP telefon SIP nömrələr üzərində işləyir və istənilən ölkə kodunu istifadə
        etməyə imkan verir.
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
    <Footer/>
    </div>
    
  );
}
