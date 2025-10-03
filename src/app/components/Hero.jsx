"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/izon.png", alt: "Router və internet təklifi" },
  { src: "/offer2.png", alt: "Hədiyyə Apple TV" },
  { src: "/offer3.png", alt: "Sürətli internet" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const canvasRef = useRef(null);
  const shootingStarTimeoutRef = useRef(null);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const next = () =>
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🌟 Starfield background (qalan hissə eynidir)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const layerCount = 3;
    const speeds = [0.05, 0.1, 0.2];
    const baseStarCount = 50;
    let shootingStar = null;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    function createStars() {
      stars = [];
      const scalingFactor = Math.max(canvas.width, canvas.height) / 1000;
      for (let i = 0; i < layerCount; i++) {
        const starCount = Math.floor(baseStarCount * scalingFactor * (i + 1));
        for (let j = 0; j < starCount; j++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * (i + 1) + 0.5,
            speed: speeds[i],
            opacity: Math.random(),
            baseOpacity: Math.random() * 0.5 + 0.5,
            layer: i,
          });
        }
      }
    }

    function updateStars() {
      stars.forEach((star) => {
        star.y -= star.speed;
        star.opacity =
          star.baseOpacity + Math.sin(Date.now() * 0.001 * star.speed) * 0.3;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 8,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width
      );
      gradient.addColorStop(0, "rgba(10, 20, 40, 1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);
      });
    }

    function animate() {
      updateStars();
      drawStars();
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(shootingStarTimeoutRef.current);
    };
  }, []);

  return (
    <main className="relative overflow-hidden min-h-screen">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[-1]" />

   

      {/* Hero content */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 gap-12 relative z-10 min-h-screen">
        <div className="space-y-4 text-center md:text-left max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Sürətli internet <br />
            <span className="text-yellow-400">Pulsuz qoşulma</span> + <br /> Router hədiyyə 🎁
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            Limitsiz əyləncə, sabit telefon xətti və 300+ TV kanalı ilə həyatınızı daha rahat edin.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-500 transition text-lg md:text-xl font-semibold">
            İndi qoşul
          </button>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[340px] h-[260px] md:w-[420px] md:h-[320px] overflow-hidden rounded-3xl shadow bg-white">
            <Image
              key={images[index].src}
              src={images[index].src}
              alt={images[index].alt}
              width={420}
              height={320}
              className="object-contain w-full h-full transition-all duration-700 ease-in-out"
            />

            {/* Manual controls */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
