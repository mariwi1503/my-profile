"use client";

import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle, Linkedin } from "lucide-react";
import Image from "next/image";
import { RiDiscordLine } from "react-icons/ri";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl mx-auto md:mt-14">
        {/* Profile Image */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-secondary rounded-full blur-lg opacity-30 scale-110 animate-pulse"></div>
          <Image
            src="/images/cover.png"
            alt="Muhammad Ary Widodo - Backend Developer"
            width={200}
            height={200}
            className="relative rounded-full mx-auto animate-float"
            priority
          />
        </div>

        {/* Name and Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeIn text-balance">
          <span className="lg:hidden">MUHAMMAD ARY W</span>
          <span className="hidden lg:block">MUHAMMAD ARY WIDODO</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 animate-fadeIn">Backend Developer</p>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto md:mb-8 leading-relaxed animate-fadeIn text-pretty">
          I build secure, scalable, and efficient systems that drive your digital products to success. Let&apos;s turn
          your complex challenges into seamless solutions with robust architecture and powerful integrations.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          onClick={() => scrollToSection("summary")}
          className="m-8 px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 text-slate-800"
        >
          Explore My Work
        </Button>

        {/* Divider */}
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-8"></div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-2xl sm:text-3xl">
          
          <a
            href="https://wa.me/6285338714313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle />
          </a>
          <a
            href="https://www.instagram.com/ary_code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="Instagram Profile"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-ary-687552209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="LinkedIn Profile"
          >
            <Linkedin />
          </a>
          <a
            href="https://discord.com/users/834295200931250216"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-orange-500 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="LinkedIn Profile"
          >
            <RiDiscordLine />
          </a>
          
        </div>
      </div>
    </section>
  )
}
