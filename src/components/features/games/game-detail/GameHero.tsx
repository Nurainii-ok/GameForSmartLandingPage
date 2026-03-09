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

  // Extract YouTube video ID
  const getYoutubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = videoUrl ? getYoutubeId(videoUrl) : null;

  return (
    <div
      className="hero-wrapper position-relative overflow-hidden w-100"
      style={{ backgroundColor: "#0a0c12" }}
    >
      {/* VIDEO BACKGROUND */}
      {mounted && videoId ? (
        <div className="hero-video">
          <iframe
            title={title}
            loading="eager"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&playlist=${videoId}`}
            allow="autoplay; encrypted-media"
          />
        </div>
      ) : (
        <img
          src={image}
          alt={title}
          className="hero-image"
        />
      )}

      {/* GRADIENT OVERLAY */}
      <div className="hero-gradient" />

      {/* CONTENT */}
      <div className="hero-content">
        <div className="hero-inner">{children}</div>
      </div>

      <style jsx>{`
        .hero-wrapper {
          width: 100%;
          min-height: 520px;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .hero-video iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 56.25vw;
          min-height: 100%;
          min-width: 177.77vh;
          transform: translate(-50%, -50%);
          border: none;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-gradient {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
              to right,
              rgba(15, 17, 24, 1) 0%,
              rgba(15, 17, 24, 0.9) 40%,
              rgba(15, 17, 24, 0.2) 100%
            ),
            linear-gradient(to top, rgba(15, 17, 24, 1) 0%, transparent 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 140px 24px 40px;
          min-height: 520px;
          display: flex;
          align-items: flex-end;
        }

        .hero-inner {
          width: 100%;
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 110px 16px 30px;
            min-height: auto;
          }
        }
      `}</style>
    </div>
  );
}