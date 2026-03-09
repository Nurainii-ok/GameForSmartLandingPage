"use client";

// components/GameGallery.tsx
// Galeri screenshot dan video — landscape wide items, arrow nav, lightbox on click

import { useRef, useState, useEffect, useCallback } from "react";

interface MediaItem {
    type: 'image' | 'video';
    src: string;
}

interface GameGalleryProps {
    media: MediaItem[];
    activeIndex: number;
    onSelect: (idx: number) => void;
    onOpenVideo: () => void;
}

export default function GameGallery({ media, activeIndex, onSelect, onOpenVideo }: GameGalleryProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canLeft, setCanLeft]   = useState(false);
    const [canRight, setCanRight] = useState(false);
    const [lightbox, setLightbox] = useState<number | null>(null);

    const checkScroll = useCallback(() => {
        const el = scrollRef.current;
        if (!el) return;
        setCanLeft(el.scrollLeft > 4);
        setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    }, []);

    useEffect(() => {
        checkScroll();
        const el = scrollRef.current;
        el?.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            el?.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, [media, checkScroll]);

    // close lightbox on Escape, navigate with arrow keys
    useEffect(() => {
        if (lightbox === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
            if (e.key === "ArrowRight") setLightbox(i => i !== null ? Math.min(i + 1, media.length - 1) : null);
            if (e.key === "ArrowLeft")  setLightbox(i => i !== null ? Math.max(i - 1, 0) : null);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightbox, media.length]);

    const scrollGallery = (dir: "left" | "right") => {
        scrollRef.current?.scrollBy({ left: dir === "left" ? -460 : 460, behavior: "smooth" });
    };

    const handleItemClick = (item: MediaItem, idx: number) => {
        onSelect(idx);
        if (item.type === "video") {
            onOpenVideo();
        } else {
            setLightbox(idx);
        }
    };

    if (media.length === 0) return null;

    const lbItem = lightbox !== null ? media[lightbox] : null;

    return (
        <>
            {/* ── GALLERY STRIP ── */}
            <div className="gps-gallery">
                {/* left fade + arrow */}
                <div className={`gps-fade gps-fade-left${canLeft ? ' visible' : ''}`}>
                    {canLeft && (
                        <button className="gps-arrow" onClick={() => scrollGallery("left")} aria-label="Scroll left">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>
                    )}
                </div>

                <div className="gps-gallery-scroll" ref={scrollRef}>
                    {media.map((item, idx) => (
                        <div
                            key={idx}
                            className={`gps-gallery-item${activeIndex === idx ? ' active' : ''}`}
                            onClick={() => handleItemClick(item, idx)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={e => e.key === "Enter" && handleItemClick(item, idx)}
                        >
                            <img src={item.src} alt={`Screenshot ${idx + 1}`} draggable={false} />

                            {/* hover overlay */}
                            <div className="gps-item-hover">
                                {item.type === "video" ? (
                                    <div className="gps-play-btn">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                    </div>
                                ) : (
                                    <div className="gps-zoom-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                            <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                                        </svg>
                                    </div>
                                )}
                            </div>

                            {/* video badge */}
                            {item.type === "video" && (
                                <div className="gps-video-badge">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                    Video
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* right fade + arrow */}
                <div className={`gps-fade gps-fade-right${canRight ? ' visible' : ''}`}>
                    {canRight && (
                        <button className="gps-arrow" onClick={() => scrollGallery("right")} aria-label="Scroll right">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* ── LIGHTBOX ── */}
            {lbItem && lightbox !== null && (
                <div className="gps-lightbox" onClick={() => setLightbox(null)}>
                    <button className="gps-lb-close" onClick={() => setLightbox(null)} aria-label="Close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>

                    {/* counter */}
                    <div className="gps-lb-counter">{lightbox + 1} / {media.length}</div>

                    {/* prev */}
                    {lightbox > 0 && (
                        <button className="gps-lb-nav gps-lb-prev" onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1); }} aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"/>
                            </svg>
                        </button>
                    )}

                    <div className="gps-lb-img-wrap" onClick={e => e.stopPropagation()}>
                        <img src={lbItem.src} alt={`Screenshot ${lightbox + 1}`} className="gps-lb-img" />
                    </div>

                    {/* next */}
                    {lightbox < media.length - 1 && (
                        <button className="gps-lb-nav gps-lb-next" onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1); }} aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                        </button>
                    )}
                </div>
            )}

            <style jsx>{`
                /* ── Strip ── */
                .gps-gallery {
                    position: relative;
                    padding: 20px 0;
                    border-bottom: 1px solid var(--border);
                    display: flex;
                    align-items: center;
                }

                .gps-gallery-scroll {
                    display: flex;
                    gap: 8px;
                    overflow-x: auto;
                    scroll-behavior: smooth;
                    scrollbar-width: none;
                    flex: 1;
                    min-width: 0;
                }
                .gps-gallery-scroll::-webkit-scrollbar { display: none; }

                /* ── Fade + arrow wrapper ── */
                .gps-fade {
                    position: relative;
                    z-index: 5;
                    width: 0;
                    flex-shrink: 0;
                    transition: width 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .gps-fade.visible { width: 48px; }

                .gps-arrow {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.13);
                    background: rgba(15,17,24,0.88);
                    color: #e8eaed;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 2px 14px rgba(0,0,0,0.5);
                    transition: background 0.15s, border-color 0.15s, transform 0.15s;
                    flex-shrink: 0;
                }
                .gps-arrow:hover {
                    background: rgba(35,38,52,0.98);
                    border-color: rgba(255,255,255,0.28);
                    transform: scale(1.08);
                }

                /* ── Items — wide landscape like the reference ── */
                .gps-gallery-item {
                    flex-shrink: 0;
                    width: 420px;
                    height: 236px;
                    border-radius: 10px;
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid transparent;
                    position: relative;
                    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
                }
                .gps-gallery-item.active {
                    border-color: var(--accent, #ff7a00);
                    box-shadow: 0 0 0 3px rgba(255,122,0,0.2);
                }
                .gps-gallery-item:hover {
                    border-color: rgba(255,255,255,0.22);
                    transform: translateY(-2px);
                }
                .gps-gallery-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.35s;
                    user-select: none;
                }
                .gps-gallery-item:hover img { transform: scale(1.03); }

                /* hover overlay */
                .gps-item-hover {
                    position: absolute;
                    inset: 0;
                    background: rgba(0,0,0,0);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: background 0.2s;
                }
                .gps-gallery-item:hover .gps-item-hover { background: rgba(0,0,0,0.38); }

                .gps-play-btn, .gps-zoom-icon {
                    opacity: 0;
                    transform: scale(0.8);
                    transition: opacity 0.2s, transform 0.2s;
                }
                .gps-play-btn {
                    width: 60px; height: 60px;
                    background: rgba(255,122,0,0.9);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff;
                    box-shadow: 0 4px 20px rgba(255,122,0,0.45);
                }
                .gps-zoom-icon {
                    width: 52px; height: 52px;
                    background: rgba(255,255,255,0.15);
                    border: 1.5px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    color: #fff;
                    backdrop-filter: blur(4px);
                }
                .gps-gallery-item:hover .gps-play-btn,
                .gps-gallery-item:hover .gps-zoom-icon {
                    opacity: 1;
                    transform: scale(1);
                }

                /* video badge */
                .gps-video-badge {
                    position: absolute;
                    bottom: 10px; left: 10px;
                    background: rgba(0,0,0,0.65);
                    color: #fff;
                    font-size: 11px;
                    font-weight: 600;
                    padding: 3px 9px;
                    border-radius: 20px;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    backdrop-filter: blur(4px);
                    letter-spacing: 0.3px;
                }

                /* ── Lightbox ── */
                .gps-lightbox {
                    position: fixed; inset: 0;
                    background: rgba(0,0,0,0.92);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(12px);
                    animation: lbFadeIn 0.18s ease;
                }
                @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }

                .gps-lb-img-wrap {
                    max-width: 90vw;
                    max-height: 88vh;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 32px 80px rgba(0,0,0,0.8);
                    animation: lbScale 0.22s cubic-bezier(0.34,1.56,0.64,1);
                }
                @keyframes lbScale { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

                .gps-lb-img {
                    display: block;
                    max-width: 90vw;
                    max-height: 88vh;
                    object-fit: contain;
                }

                .gps-lb-close {
                    position: absolute; top: 20px; right: 20px;
                    width: 42px; height: 42px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.12);
                    color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .gps-lb-close:hover { background: rgba(255,255,255,0.2); }

                .gps-lb-counter {
                    position: absolute; top: 24px; left: 50%;
                    transform: translateX(-50%);
                    font-size: 13px; color: rgba(255,255,255,0.55);
                    font-weight: 500; letter-spacing: 0.5px;
                    pointer-events: none;
                }

                .gps-lb-nav {
                    position: absolute; top: 50%; transform: translateY(-50%);
                    width: 48px; height: 48px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.13);
                    color: #fff;
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer;
                    transition: background 0.15s, transform 0.15s;
                }
                .gps-lb-nav:hover {
                    background: rgba(255,255,255,0.18);
                    transform: translateY(-50%) scale(1.08);
                }
                .gps-lb-prev { left: 24px; }
                .gps-lb-next { right: 24px; }

                /* ── Responsive ── */
                @media (max-width: 768px) {
                    .gps-gallery-item { width: 280px; height: 158px; }
                    .gps-fade.visible { width: 36px; }
                    .gps-arrow { width: 32px; height: 32px; }
                    .gps-lb-nav { display: none; }
                }
            `}</style>
        </>
    );
}