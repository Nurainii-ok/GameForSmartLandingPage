"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { tournamentsData } from "@/data/tournamentsData";

export default function TournamentSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleTournaments = tournamentsData.filter(
    (t) => t.status === "Active" || t.status === "Upcoming"
  );

  const activeTournament = visibleTournaments[activeIndex];

  const next = () => {
    setActiveIndex((prev) =>
      prev === visibleTournaments.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? visibleTournaments.length - 1 : prev - 1
    );
  };

  if (!activeTournament) return null;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-3">
            KOMPETISI AKTIF & MENDATANG
          </p>

          <h2 className="text-4xl font-extrabold text-white mb-4">
            Siap Unjuk Kemampuan?
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Pilih lomba sesuai jenjang dan wilayahmu
          </p>
        </div>

        {/* CARD WRAPPER */}
        <div className="relative max-w-5xl mx-auto">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1c1f2a] border border-white/10 flex items-center justify-center text-white hover:bg-[#262a38]"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#1c1f2a] border border-white/10 flex items-center justify-center text-white hover:bg-[#262a38]"
          >
            ›
          </button>

          {/* MAIN CARD */}
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f1118]">

            {/* TOP GRADIENT */}
            <div className="h-[3px] w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500" />

            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}
              <div className="relative h-[260px] lg:h-full">

                <img
                  src={activeTournament.image}
                  alt={activeTournament.title}
                  className="w-full h-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute bottom-5 left-5 bg-purple-600/20 border border-purple-500/40 text-purple-300 text-xs px-3 py-1 rounded-lg">
                  {activeTournament.slug.toUpperCase()}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-10 flex flex-col justify-center">

                {/* STATUS */}
                <span className="mb-5 bg-green-500/10 border border-green-500/20 text-green-400 text-xs px-3 py-1 rounded-md w-fit">
                  ● Upcoming
                </span>

                {/* TITLE */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-snug">
                  {activeTournament.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {activeTournament.description.split("\n")[0]}
                </p>

                {/* STATS */}
                <div className="flex flex-wrap gap-3 mb-8">

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                    {activeTournament.date}
                  </div>

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                    {activeTournament.prizeMoney}
                  </div>

                  <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm text-gray-300">
                    {activeTournament.type}
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl"
                  >
                    <Link href={activeTournament.href}>
                      Daftar Sekarang
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-gray-300 px-6 py-3 rounded-xl"
                  >
                    <Link href={activeTournament.href}>
                      Detail →
                    </Link>
                  </Button>

                </div>

                {/* COUNTER */}
                <div className="text-right text-xs text-gray-500 mt-8">
                  {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(visibleTournaments.length).padStart(2, "0")}
                </div>

              </div>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-7">
            {visibleTournaments.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-[4px] rounded-full transition-all ${
                  i === activeIndex
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="text-center mt-8">
            <Link
              href="/competitions"
              className="text-gray-400 hover:text-white text-sm"
            >
              Lihat Semua Kompetisi →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}