"use client"; // ✅ Wajib agar ini Client Component

import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import { RiDiscordLine } from "react-icons/ri";

export function HeroCsr() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Button
        size="lg"
        onClick={() => scrollToSection("summary")}
        className="m-8 px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 text-slate-800"
      >
        Explore My Work
      </Button>

      <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-8"></div>

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
          aria-label="Discord Profile"
        >
          <RiDiscordLine />
        </a>
      </div>
    </>
  );
}
