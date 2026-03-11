"use client";

import { ReactNode, useEffect, useState } from "react";

interface GameHeroProps {
  image: string;
  title: string;
  videoUrl?: string;
  children?: ReactNode;

}

export default function GameHero({
  image,
  title,
  videoUrl,
  children,
}: GameHeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getYoutubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = videoUrl ? getYoutubeId(videoUrl) : null;

  return (
    <section
      className="hero-section"
      style={{ minHeight: "70vh", backgroundColor: "#0a0c12" }}
    >
      {/* Background Banner — full width, absolute */}
      <div className="hero-bg">
        {mounted && videoId ? (
          <iframe
            title={title}
            loading="eager"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&playlist=${videoId}`}
            allow="autoplay; encrypted-media"
            className="hero-video"
          />
        ) : (
          <img src={image} alt={title} className="hero-img" />
        )}
        <div className="hero-gradient" />
      </div>

      {/* Content — padding horizontal sama dengan konten utama halaman */}
      <div className="hero-content-wrap">
        <div className="hero-content">{children}</div>
      </div>

      <style jsx global>{`
        :root {
          --page-px: clamp(20px, 4vw, 72px);
        }
      `}</style>
      <style jsx>{`
        .hero-section {
          position: relative;
          width: 100%;
        }

        /* === BACKGROUND: selalu full width === */
        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 56.25vw;
          min-height: 100%;
          min-width: 177.77vh;
          border: 0;
          pointer-events: none;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background:
            linear-gradient(
              to right,
              rgba(15, 17, 24, 1) 0%,
              rgba(15, 17, 24, 0.9) 40%,
              rgba(15, 17, 24, 0.2) 100%
            ),
            linear-gradient(to top, rgba(15, 17, 24, 1) 0%, transparent 100%);
        }

        /* === CONTENT: padding disesuaikan dengan layout utama === */
        .hero-content-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          min-height: 70vh;
          padding-left: calc(var(--sidebar-w, 105px) + var(--page-px, clamp(20px, 4vw, 72px)));
          padding-right: var(--page-px, clamp(20px, 4vw, 72px));
        }

        .hero-content {
          width: 100%;
          text-align: left;
          padding-bottom: 64px;
        }

        /* --page-px sudah pakai clamp(20px, 4vw, 72px), otomatis responsive */
      `}</style>
    </section>
  );
}