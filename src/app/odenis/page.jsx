"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
export default function Odenis() {
  const payments = [
    {
      id: 1,
      name: "MilliÖdəniş (eManat, etc.)",
      img: "/Untitled.png", // şəkilini public/payments qovluğuna qoy
      link: "#", // istədiyin linki əlavə edə bilərsən
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="w-full py-16 px-6 bg-white text-center">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          <Link href='/' className="text-black font-medium">Ana səhifə</Link> • Ödə
        </p>

        {/* Başlıq */}
        <h1 className="text-3xl font-bold mb-2">Ödəniş üsulları</h1>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded"></div>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          Aşağıda verilən ödəniş xidmətlərindən birinə keçid edərək, Bossnet ödənişlərinizi həyata keçirin
        </p>

        {/* Ödəniş kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center max-w-4xl mx-auto">
          {payments.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center border rounded-xl shadow-sm hover:shadow-md transition bg-white p-8 cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={120}
                height={120}
                className="object-contain mb-4"
              />
              <span className="text-gray-700 font-medium">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
