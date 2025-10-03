"use client";
import { FaBolt, FaTachometerAlt, FaFileAlt, FaVideo } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Internet() {
  const features = [
    {
      icon: <FaBolt className="text-yellow-600 text-3xl" />,
      title: "Yüksək keyfiyyətli",
      desc: "100 mb/san qədər sürət eyni zamanda bir neçə çox cihazda rahat işləməyinizi təmin edir.",
    },
    {
      icon: <FaTachometerAlt className="text-yellow-600 text-3xl" />,
      title: "Sürətli",
      desc: "Saat, ərazi, hava şəraitindən asılı olmayaraq yüksək sürət və kəsintisiz qoşulma.",
    },
    {
      icon: <FaFileAlt className="text-yellow-600 text-3xl" />,
      title: "1GB Fayllar",
      desc: "Sabit sürət və qoşulma sayəsində 1GB faylların rahat ötürülməsi.",
    },
    {
      icon: <FaVideo className="text-yellow-600 text-3xl" />,
      title: "4K Video",
      desc: "İstənilən kontenti 4K keyfiyyətində izləmək imkanı.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-full py-16 px-6 bg-white text-center">
        {/* Başlıq */}
        <h1 className="text-3xl font-bold mb-6">Fiber Optik İnternet</h1>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          Bossnet yeni nəsil <span className="font-semibold">Fiber-optik (optik lifli)</span> qoşulma xidmətini təklif edir.
          Keyfiyyəti və güvənliliyi ilə seçilən Fiber-optik kabellər məlumatın ötürülməsini
          <span className="font-semibold"> 300 000 km/san sürətlə </span>
          gerçəkləşdirir və bir çox üstünlüklərə malikdir. Beləliklə, qoşulmaq üçün telefon qovşağına ehtiyac yoxdur.
          Digər internetə qoşulma sistemləri ilə müqayisədə daha sürətlidir. Şəbəkənin həddindən artıq yüklənməsi
          saatlarında, hava şəraiti, ərazi və s. amillərdən asılı olmayaraq məlumatların sürətli ötürülməsini təmin edir.
          Bossnet Fiber-optik qoşulma xidməti ölkəmizin bir çox şəhər və bölgələrini əhatə edir.
          Əhatə dairəsinə <span className="font-semibold">Bakı, Abşeron, Xırdalan, Sumqayıt</span> daxildir.
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
