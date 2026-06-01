// ❌ Tidak ada 'use client' di atas, ini berarti Server Component
import Image from "next/image";
import { HeroCsr } from "./client/hero-csr-section";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto md:mt-14">
        {/* Profile Image */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-secondary rounded-full blur-lg opacity-30 scale-110 animate-pulse"></div>
          <Image
            src="/images/cover2.png"
            alt="Muhammad Ary Widodo - Backend Developer"
            width={130}
            height={130}
            className="relative rounded-[70px] mx-auto animate-float"
            priority
          />
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeIn text-balance">
          <span className="lg:hidden">MUHAMMAD ARY W</span>
          <span className="hidden lg:block">MUHAMMAD ARY WIDODO</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 animate-fadeIn">
          Software Developer
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto md:mb-8 leading-relaxed animate-fadeIn text-pretty">
          I build secure, scalable, and efficient systems that drive your digital products to success.
        </p>

        {/* Bagian interaktif dipisah ke Client Component */}
        <HeroCsr />
      </div>
    </section>
  );
}
