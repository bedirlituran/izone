import React from 'react'

const Why = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-14">
    Üstünlüklərimiz
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {[
      {
        icon: "👨‍💼",
        title: "Təcrübəli personal",
        desc: "Mütəxəssislərimiz sürətli quraşdırma və istənilən problemi həll etməyə kömək edəcək.",
      },
      {
        icon: "🎧",
        title: "24/7 Dəstək",
        desc: "İstənilən vaxt zəng edin. Texniki dəstək 24/7 aktivdir.",
      },
      {
        icon: "👍",
        title: "Keyfiyyətli xidmət",
        desc: "Yüksək sürət, sabit qoşulma və peşəkar personal.",
      },
      {
        icon: "💰",
        title: "Ən yaxşı qiymət planları",
        desc: "Keyfiyyətli xidməti sərfəli qiymətə əldə edin.",
      },
      {
        icon: "⚡",
        title: "Sürətli Bağlantı",
        desc: "Şəraitdən asılı olmayaraq yüksək sürət və fasiləsiz qoşulma.",
      },
      {
        icon: "📡",
        title: "Ən reytinqli kanallar",
        desc: "HD keyfiyyətində yerli və xarici kanalları izləyin.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center hover:-translate-y-1"
      >
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full  text-white text-3xl shadow-md group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>

        <h3 className="mt-6 text-lg md:text-xl font-semibold text-slate-900">
          {item.title}
        </h3>
        <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>

        {/* Hover overlay effekt */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    ))}
  </div>
</section>

  )
}

export default Why