"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { tournamentsData } from "@/data/tournamentsData";
import { motion } from "framer-motion";

export default function TournamentSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  const visibleTournaments = tournamentsData.filter(
    (t) => t.status === "Active" || t.status === "Upcoming",
  );

  useEffect(() => {
    let swiperInstance: any = null;
    let retryCount = 0;
    const maxRetries = 20;

    const initSwiper = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        const Swiper = (window as any).Swiper;

        if (swiperInstance) {
          swiperInstance.destroy();
        }

        swiperInstance = new Swiper(".tournament-swiper", {
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          loop: true,
          speed: 800,
          coverflowEffect: {
            rotate: 0,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          },
          on: {
            slideChange: (swiper: any) => {
              setActiveIndex(swiper.realIndex);
            },
          },
          breakpoints: {
            // Mobile: normal swipe
            320: {
              coverflowEffect: {
                depth: 0,
                stretch: 0,
              },
            },
            // Desktop: stacked
            1024: {
              coverflowEffect: {
                rotate: 0,
                stretch: 50,
                depth: 200,
                modifier: 1,
              },
            },
          },
        });
        swiperRef.current = swiperInstance;
        return true;
      }
      return false;
    };

    if (!initSwiper()) {
      const interval = setInterval(() => {
        retryCount++;
        if (initSwiper() || retryCount >= maxRetries) {
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, []);

  const next = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const prev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const paginate = (index: number) => {
    if (swiperRef.current) swiperRef.current.slideToLoop(index);
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-3 text-uppercase">
            KOMPETISI
            {/* AKTIF & MENDATANG */}
          </p>

          <h2 className="text-4xl font-extrabold text-white mb-4">
            Siap Unjuk Kemampuan?
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Pilih lomba sesuai jenjang dan wilayahmu
          </p>
        </div>

        {/* CARD WRAPPER */}
        <div className="relative max-w-7xl mx-auto">
          {/* NAVIGATION ARROWS */}
          <button
            onClick={prev}
            className="absolute -left-4 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1c1f2a] border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 z-20 transition-all shadow-lg"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="absolute -right-4 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1c1f2a] border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 z-20 transition-all shadow-lg"
          >
            ›
          </button>

          {/* SWIPER CONTAINER */}
          <div className="swiper tournament-swiper !overflow-visible">
            <div className="swiper-wrapper py-10">
              {visibleTournaments.map((tournament, index) => (
                <div
                  key={tournament.id}
                  className="swiper-slide !w-[90%] lg:!w-[900px]"
                >
                  <div className="relative h-auto lg:h-[480px] rounded-2xl overflow-hidden border border-orange-500/30 bg-[#0f1118] transition-all duration-500 tournament-card">
                    {/* TOP GRADIENT */}
                    <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />

                    <div className="flex flex-col lg:flex-row-reverse h-full">
                      {/* IMAGE (Top on Mobile, Right on Desktop) */}
                      <div className="relative h-[240px] lg:h-full lg:w-1/2 overflow-hidden">
                        <img
                          src={tournament.image}
                          alt={tournament.title}
                          className="w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-black/50 via-black/10 to-transparent" />

                        {/* CATEGORY */}
                        <div className="absolute bottom-5 right-5 bg-orange-600/20 border border-orange-500/40 text-orange-300 text-xs px-3 py-1 rounded-lg">
                          {tournament.slug.toUpperCase()}
                        </div>
                      </div>

                      {/* CONTENT (Bottom on Mobile, Left on Desktop) */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center lg:w-1/2">
                        {/* STATUS */}
                        <span className="mb-5 bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-md w-fit">
                          ● Upcoming
                        </span>

                        {/* TITLE */}
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
                          {tournament.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-400 mb-6 leading-relaxed line-clamp-2">
                          {tournament.description.split("\n")[0]}
                        </p>

                        {/* STATS */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-gray-300">
                            {tournament.date}
                          </div>

                          <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-gray-300">
                            {tournament.prizeMoney}
                          </div>

                          <div className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-sm text-gray-300">
                            {tournament.type}
                          </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-4">
                          <Button
                            asChild
                            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                          >
                            <Link href={tournament.href}>Daftar Sekarang</Link>
                          </Button>

                          <Button
                            asChild
                            variant="outline"
                            className="border-white/20 text-gray-300 px-6 py-3 rounded-xl hover:bg-white/5 transition-colors whitespace-nowrap"
                          >
                            <Link href={tournament.href}>Detail →</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-12">
            {visibleTournaments.map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i)}
                className={`h-[4px] rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-orange-500" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="text-center mt-10">
            <Link
              href="/competitions"
              className="text-gray-400 hover:text-white text-sm transition-colors group inline-flex items-center"
            >
              Lihat Semua Kompetisi
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .tournament-swiper .swiper-slide {
          transition: all 0.5s ease-in-out;
          opacity: 0.4;
          filter: blur(2px);
          transform: scale(0.85);
        }

        .tournament-swiper .swiper-slide-active {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1);
          z-index: 10;
        }

        .tournament-swiper .swiper-slide-prev,
        .tournament-swiper .swiper-slide-next {
          opacity: 0.7;
          filter: blur(1px);
          transform: scale(0.92);
          z-index: 5;
        }

        .tournament-card {
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .swiper-slide-active .tournament-card {
          box-shadow: 0 0 30px rgba(249, 115, 22, 0.2);
          border-color: rgba(249, 115, 22, 0.5);
        }
      `}</style>
    </section>
  );
}
