"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { testimonial } from "@/lib/constants";
import { Linkedin, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

// Fungsi untuk parse **bold** dalam teks menjadi <strong>
function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, idx) =>
    idx % 2 === 1 ? <strong key={idx}>{part}</strong> : part
  );
}

export function TestimonySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const getItemsPerView = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    setItemsPerView(getItemsPerView());

    const handleResize = () => {
      setItemsPerView(getItemsPerView());
      setCurrentIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonial.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimony" className="py-20 px-4 bg-slate-700 text-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            What People Say
          </h2>
          <div className="w-1/3 h-1 bg-gradient-to-r from-orange-500 to-secondary rounded-full mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-pretty">
            Testimonials from colleagues, mentors, and clients I&apos;ve had the
            privilege to work with throughout my career.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Prev Button (desktop only) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <button
              onClick={prevSlide}
              className="h-10 w-10 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full flex items-center justify-center border border-border/50 hover:border-border transition-all"
            >
              <ChevronLeft className="h-4 w-4 text-slate-700" />
            </button>
          </div>

          {/* Next Button (desktop only) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <button
              onClick={nextSlide}
              className="h-10 w-10 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full flex items-center justify-center border border-border/50 hover:border-border transition-all"
            >
              <ChevronRight className="h-4 w-4 text-slate-700" />
            </button>
          </div>

          {/* Carousel Container */}
          <div className="overflow-hidden lg:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out items-stretch"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {!isMounted
                ? Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 px-2 lg:px-3"
                      style={{ width: `${100 / 3}%` }}
                    >
                      <Card className="h-[320px] flex flex-col w-full">
                        <CardContent className="p-6 flex flex-col h-full gap-4">
                          <div className="flex items-center gap-4">
                            <Skeleton className="w-14 h-14 rounded-full" />
                            <div className="flex-grow">
                              <Skeleton className="h-4 w-32 mb-2" />
                              <Skeleton className="h-3 w-20" />
                            </div>
                          </div>
                          <Skeleton className="h-20 w-full" />
                        </CardContent>
                      </Card>
                    </div>
                  ))
                : testimonial.map((person, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-2 lg:px-3 relative"
                      style={{ width: `${100 / itemsPerView}%` }}
                    >
                      {/* Mobile Nav */}
                      <div className="lg:hidden absolute left-0 top-0 bottom-0 w-8 z-10 flex items-center justify-center">
                        <button
                          onClick={prevSlide}
                          className="w-6 h-6 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all"
                        >
                          <ChevronLeft className="h-3 w-3 text-white" />
                        </button>
                      </div>

                      <div className="lg:hidden absolute right-0 top-0 bottom-0 w-8 z-10 flex items-center justify-center">
                        <button
                          onClick={nextSlide}
                          className="w-6 h-6 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-all"
                        >
                          <ChevronRight className="h-3 w-3 text-white" />
                        </button>
                      </div>

                      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col w-full h-full bg-gray-200">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="relative">
                              <Image
                                src={
                                  person.image || "/images/placeholder-user.jpg"
                                }
                                alt={person.name}
                                width={60}
                                height={60}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg">
                                {person.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {person.designation}
                              </p>
                              {person.linkedin && (
                                <a
                                  href={person.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 hover:underline text-base mt-1 text-blue-500"
                                >
                                  <Linkedin className="h-3 w-3" />
                                  LinkedIn
                                </a>
                              )}
                            </div>
                          </div>

                          <div className="relative flex-grow flex flex-col">
                            {/* Quote pembuka */}
                            <Quote className="h-6 w-6 text-orange-300 absolute -top-0 -left-0" />

                            <div className="pl-4 flex-grow overflow-y-auto">
                              <div className="text-sm text-muted-foreground leading-relaxed pr-2 text-justify">
                                <p className="indent-4 mt-2">
                                  {parseBold(person.review)}
                                  <Quote className="ml-2 inline-block h-6 w-6 text-orange-300" />
                                </p>
                                
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-400 w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
