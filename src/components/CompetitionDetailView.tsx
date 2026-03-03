"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { TournamentInfo } from '@/data/allItemsData';

interface CompetitionDetailViewProps {
    tournament: TournamentInfo;
}

export default function CompetitionDetailView({ tournament }: CompetitionDetailViewProps) {
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isPlayInline, setIsPlayInline] = useState(false);

    // Limits for truncation
    const CHAR_LIMIT = 200;
    const isLong = tournament.description.length > CHAR_LIMIT;

    const toggleDescription = () => setIsExpanded(!isExpanded);

    const renderDescription = (text: string) => {
        if (!isLong || isExpanded) {
            return text.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
            ));
        }
        return <p className="mb-0">{text.substring(0, CHAR_LIMIT)}...</p>;
    };
    const isTournament = tournament.type === "tournament";
    const maxQuota = 100;
    const currentRegistered = 64;
    const progressPercent = (currentRegistered / maxQuota) * 100;
    const isFull = currentRegistered >= maxQuota;

    return (
        <>
            <Header />
            <main className="main-container container-fluid d-flex pt-sm-20 pt-15 px-0 position-relative">
                <Sidebar />
                <article className="main-content mt-lg-20 mt-10 animate-fade-in-up">
                    <div className="container-fluid px-lg-15 px-md-10 px-6">
                        {isTournament && (
                            <section className="tournament-details pb-120">
                                <Breadcrumbs />

                                {/* PREMIUM HERO SECTION (TOURNAMENT) */}
                                <div className="row mb-12">
                                    <div className="col-12 text-center mb-12 position-relative animate-fade-in-up">
                                        <div className="hero-glow-bg position-absolute top-50 start-50 translate-middle w-100 h-100" style={{ pointerEvents: 'none', zIndex: -1 }}>
                                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '150%', background: 'radial-gradient(circle, rgba(255, 140, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)', filter: 'blur(50px)' }}></div>
                                        </div>
                                        <button onClick={() => router.back()} className="btn-back-floating shadow-btn d-none d-md-flex" style={{ left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                            <i className="ti ti-arrow-left fs-xl"></i>
                                        </button>
                                        <h1 className="premium-title text-uppercase fw-extrabold display-two mb-4 tracking-tighter position-relative z-1" style={{ textShadow: '0 0 40px rgba(255, 140, 0, 0.3)' }}>
                                            {tournament.title.includes(' - ') ? (
                                                <>
                                                    {tournament.title.split(' - ')[0]} - <span className="text-orange-gradient">{tournament.title.split(' - ')[1]}</span>
                                                </>
                                            ) : tournament.title}
                                        </h1>
                                        <p className="tcn-6 fs-four max-w-2xl mx-auto position-relative z-1">
                                            Ajang Kompetisi Bergengsi dengan Hadiah Puluhan Juta Rupiah
                                        </p>
                                    </div>
                                    <div className="col-12 px-xl-20">
                                        <div className="video-hero-wrapper rounded-4 overflow-hidden shadow-premium-orange animate-zoom-in">
                                            <div className="ratio ratio-16x9">
                                                <iframe
                                                    src="https://www.youtube.com/embed/_FCYtKCGMjk"
                                                    title="Tournament Preview"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    style={{ border: 'none' }}
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-10">
                                    {/* LEFT CONTENT: Description, Highlight Box & Rules */}
                                    <div className="col-lg-8 animate-slide-up">
                                        {/* DESKRIPSI COMPETITION VISUAL */}
                                        <div className="content-card-premium mb-8 p-sm-10 p-6 position-relative border" style={{ background: 'linear-gradient(145deg, rgba(20,20,20,0.95), rgba(10,10,10,0.9))', borderColor: 'rgba(255,140,0,0.3)', boxShadow: '0 0 20px rgba(255,140,0,0.05)' }}>
                                            <h3 className="premium-section-title mb-8 d-flex align-items-center gap-3">
                                                <i className="ti ti-target text-orange-glow fs-two"></i>
                                                Deskripsi Competition
                                            </h3>

                                            <div className="row g-4 mb-8">
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-start gap-3 p-4 rounded-4 h-100" style={{ background: 'rgba(255,140,0,0.05)', border: '1px solid rgba(255,140,0,0.15)' }}>
                                                        <div className="icon-circle bg-orange-gradient text-white mt-1" style={{ width: '48px', height: '48px', flexShrink: 0, boxShadow: '0 0 15px rgba(255,140,0,0.2)' }}>
                                                            <i className="ti ti-bulb fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="tcn-1 fw-bold fs-md mb-2">Tujuan Kompetisi</h5>
                                                            <p className="tcn-6 fs-sm mb-0">Menguji kemampuan akademik, mental juara, dan ketepatan siswa/i secara real-time.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-start gap-3 p-4 rounded-4 h-100" style={{ background: 'rgba(255,140,0,0.05)', border: '1px solid rgba(255,140,0,0.15)' }}>
                                                        <div className="icon-circle bg-orange-gradient text-white mt-1" style={{ width: '48px', height: '48px', flexShrink: 0, boxShadow: '0 0 15px rgba(255,140,0,0.2)' }}>
                                                            <i className="ti ti-trophy fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="tcn-1 fw-bold fs-md mb-2">Tingkat Kompetisi</h5>
                                                            <p className="tcn-6 fs-sm mb-0">Persaingan skala besar antar siswa-siswi terbaik.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-start gap-3 p-4 rounded-4 h-100" style={{ background: 'rgba(255,140,0,0.05)', border: '1px solid rgba(255,140,0,0.15)' }}>
                                                        <div className="icon-circle bg-orange-gradient text-white mt-1" style={{ width: '48px', height: '48px', flexShrink: 0, boxShadow: '0 0 15px rgba(255,140,0,0.2)' }}>
                                                            <i className="ti ti-rocket fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="tcn-1 fw-bold fs-md mb-2">Manfaat Peserta</h5>
                                                            <p className="tcn-6 fs-sm mb-0">Sertifikat nasional & relasi komunitas eksklusif.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="d-flex align-items-start gap-3 p-4 rounded-4 h-100" style={{ background: 'rgba(255,140,0,0.05)', border: '1px solid rgba(255,140,0,0.15)' }}>
                                                        <div className="icon-circle bg-orange-gradient text-white mt-1" style={{ width: '48px', height: '48px', flexShrink: 0, boxShadow: '0 0 15px rgba(255,140,0,0.2)' }}>
                                                            <i className="ti ti-ticket fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <h5 className="tcn-1 fw-bold fs-md mb-2">Biaya Daftar</h5>
                                                            <p className="tcp-1 fw-bold fs-md mb-0">{tournament.ticketFee || 'Gratis'}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tcn-6 fs-lg premium-description pt-6 border-top border-secondary border-opacity-10 position-relative">
                                                {renderDescription(tournament.description)}
                                                {isLong && (
                                                    <button
                                                        onClick={toggleDescription}
                                                        className="btn-show-hide mt-4 d-flex align-items-center gap-2"
                                                    >
                                                        {isExpanded ? (
                                                            <i className="ti ti-chevron-up"></i>
                                                        ) : (
                                                            <i className="ti ti-chevron-down"></i>
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                        </div>


                                        <div className="content-card-premium mb-10 p-sm-10 p-6">
                                            <h3 className="premium-section-title mb-8">Syarat & Ketentuan</h3>
                                            <div className="rules-grid">
                                                {tournament.rules?.map((rule, index) => (
                                                    <div key={index} className="rule-item d-flex align-items-center gap-4 p-4 rounded-3 mb-3 transition-all">
                                                        <div className="icon-circle-check bg-orange-gradient">
                                                            <i className="ti ti-check fs-xl"></i>
                                                        </div>
                                                        <span className="tcn-1 fs-lg fw-medium">{rule}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT CONTENT: Premium Info Card */}
                                    <div className="col-lg-4">
                                        <div className="sticky-info-card" style={{ top: '120px' }}>
                                            <div className="premium-info-card p-8 rounded-4 shadow-orange-intense">
                                                <div className="status-badge-area d-flex justify-content-between align-items-center mb-8">
                                                    <span className="premium-status-pill text-uppercase">Registration Open</span>
                                                    <div className="live-dot-wrapper d-flex align-items-center gap-2">
                                                        <span className="live-dot"></span>
                                                        <span className="tcn-6 fs-xs fw-bold text-uppercase">Online</span>
                                                    </div>
                                                </div>

                                                <div className="prize-main-area mb-8">
                                                    <span className="tcn-6 fs-sm text-uppercase tracking-widest d-block mb-1">Total Hadiah</span>
                                                    <h1 className="display-five fw-extrabold text-orange-gradient m-0">
                                                        {tournament.prizeMoney} <span className="fs-two">+ Grand Prize</span>
                                                    </h1>
                                                </div>

                                                <div className="premium-divider mb-6"></div>

                                                <div className="features-list d-grid gap-6 mb-10">
                                                    <div className="d-flex align-items-center gap-4 mb-6">
                                                        <div className="icon-circle bgn-3 tcn-1">
                                                            <i className="ti ti-calendar fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <label className="d-block tcn-6 fs-xs text-uppercase fw-bold">Babak Penyisihan</label>
                                                            <span className="tcn-1 fw-bold fs-four">{tournament.date}</span>
                                                        </div>
                                                    </div>

                                                    {tournament.finalRound && (
                                                        <div className="d-flex align-items-center gap-4 mb-6">
                                                            <div className="icon-circle bgn-3" style={{ border: '1px solid rgba(255, 172, 5, 0.4)' }}>
                                                                <i className="ti ti-trophy fs-2xl text-orange-glow"></i>
                                                            </div>
                                                            <div>
                                                                <label className="d-block tcn-6 fs-xs text-uppercase fw-bold">Babak Final</label>
                                                                <span className="tcn-1 fw-bold fs-four text-orange-glow">{tournament.finalRound}</span>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="d-flex align-items-center gap-4 mb-6">
                                                        <div className="icon-circle bgn-3 tcn-1">
                                                            <i className="ti ti-ticket fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <label className="d-block tcn-6 fs-xs text-uppercase fw-bold">Biaya Pendaftaran</label>
                                                            <span className="tcn-1 fw-bold fs-four text-orange-gradient">{tournament.ticketFee || 'Gratis'}</span>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex align-items-center gap-4 mb-10">
                                                        <div className="icon-circle bgn-3 tcn-1">
                                                            <i className="ti ti-users fs-2xl"></i>
                                                        </div>
                                                        <div>
                                                            <label className="d-block tcn-6 fs-xs text-uppercase fw-bold">Total Kuota</label>
                                                            <span className="tcn-1 fw-bold fs-four">{tournament.teams}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="quota-logic mb-10">
                                                    <div className="d-flex justify-content-between align-items-end mb-3">
                                                        <span className="tcn-6 fs-xs text-uppercase fw-bold">Kapasitas Terisi</span>
                                                        <span className="tcn-1 fw-bold fs-five">{progressPercent}%</span>
                                                    </div>
                                                    <div className="premium-progress-bar">
                                                        <div className="progress-fill shadow-glow-orange" style={{ width: `${progressPercent}%` }}></div>
                                                    </div>
                                                </div>

                                                {isFull ? (
                                                    <button
                                                        className="premium-cta-btn w-100 py-2 rounded-pill text-uppercase fw-bold tracking-widest transition-all d-flex justify-content-center align-items-center btn-disabled"
                                                        disabled
                                                    >
                                                        Kuota Penuh
                                                    </button>
                                                ) : (
                                                    <Link
                                                        href={`/competitions/${tournament.slug}/register`}
                                                        className="premium-cta-btn w-100 py-2 rounded-pill text-uppercase fw-bold tracking-widest transition-all d-flex justify-content-center align-items-center bg-orange-gradient hover-lift shadow-btn text-white text-decoration-none"
                                                    >
                                                        Daftar <i className="ti ti-chevron-right ms-2 animate-bounce-right"></i>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* TIMELINE KOMPETISI SECTION */}
                                <div className="row mt-15 animate-slide-up">
                                    <div className="col-12 text-center mb-10">
                                        <h2 className="display-six tcn-1 fw-extrabold text-uppercase m-0 d-inline-flex align-items-center gap-3">
                                            <i className="ti ti-calendar-stats text-orange-gradient"></i> Timeline Kompetisi
                                        </h2>
                                        <div className="title-underline mx-auto mt-4" style={{ width: '80px', height: '4px', background: '#ff8c00', borderRadius: '2px' }}></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="timeline-horizontal-premium p-10 rounded-4 border border-secondary border-opacity-10 position-relative overflow-hidden" style={{ background: 'rgba(20,20,20,0.8)' }}>
                                            <div className="timeline-line position-absolute top-50 start-0 w-100" style={{ height: '4px', background: 'rgba(255,255,255,0.05)', transform: 'translateY(-50%)', zIndex: 0 }}></div>
                                            <div className="timeline-line-active position-absolute top-50 start-0" style={{ height: '4px', width: '50%', background: 'linear-gradient(90deg, #ff8c00, #ff4500)', transform: 'translateY(-50%)', zIndex: 1, boxShadow: '0 0 15px rgba(255,140,0,0.5)' }}></div>

                                            <div className="row position-relative z-2 text-center">
                                                <div className="col-4">
                                                    <div className="timeline-step">
                                                        <div className="mb-4 tcn-6 fs-md fw-bold text-uppercase">Tahap 1</div>
                                                        <div className="timeline-dot mx-auto mb-4 bg-orange-gradient neon-orange-glow" style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #111' }}></div>
                                                        <h4 className="tcn-1 fw-bold fs-lg mb-1">Pendaftaran</h4>
                                                        <p className="tcp-1 fs-sm fw-bold">Dibuka</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="timeline-step">
                                                        <div className="mb-4 tcn-6 fs-md fw-bold text-uppercase">Tahap 2</div>
                                                        <div className="timeline-dot mx-auto mb-4 bg-orange-gradient neon-orange-glow" style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid #111' }}></div>
                                                        <h4 className="tcn-1 fw-bold fs-lg mb-1">Penyisihan</h4>
                                                        <p className="tcp-1 fs-sm fw-bold">{tournament.date}</p>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="timeline-step">
                                                        <div className="mb-4 tcn-6 fs-md fw-bold text-uppercase">Tahap 3</div>
                                                        <div className="timeline-dot mx-auto mb-4 bgn-3" style={{ width: '24px', height: '24px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.2)' }}></div>
                                                        <h4 className="tcn-6 fw-bold fs-lg mb-1">Grand Final</h4>
                                                        <p className="tcn-6 fs-sm opacity-50">{tournament.finalRound}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* HADIAH & PENGHARGAAN SECTION */}
                                <div className="row mt-15 animate-slide-up">
                                    <div className="col-12 text-center mb-12">
                                        <h2 className="display-four tcn-1 fw-extrabold text-uppercase m-0 d-inline-flex align-items-center gap-3">
                                            <i className="ti ti-gift text-orange-gradient"></i> Hadiah & Penghargaan
                                        </h2>
                                        <div className="title-underline mx-auto mt-4" style={{ width: '100px', height: '4px', background: '#ff8c00', borderRadius: '2px' }}></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row g-6 justify-content-center">
                                            {/* Juara 1 */}
                                            <div className="col-xl-4 col-md-6">
                                                <div className="glass-prize-card prize-gold text-center transition-all p-10 h-100 rounded-5" style={{ background: 'linear-gradient(180deg, rgba(255,140,0,0.1) 0%, rgba(20,20,20,0.8) 100%)', border: '1px solid rgba(255,140,0,0.3)', boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,140,0,0.05)' }}>
                                                    <div className="prize-visual mb-6 position-relative z-1">
                                                        <i className="ti ti-trophy fs-display-one text-orange-glow d-inline-block hover-float" style={{ filter: 'drop-shadow(0 0 20px rgba(255,140,0,0.6))' }}></i>
                                                    </div>
                                                    <h4 className="fw-extrabold mb-2 text-uppercase tracking-widest text-warning">{tournament.prizes?.[0]?.place || 'JUARA 1'}</h4>
                                                    <h2 className="display-five fw-extrabold text-orange-gradient mb-4">{tournament.prizes?.[0]?.amount || 'Rp 7.500.000'}</h2>
                                                    <p className="tcn-6 fs-md mb-0">{tournament.prizes?.[0]?.reward || 'Trofi Eksklusif & Sertifikat Nasional Gold'}</p>
                                                </div>
                                            </div>
                                            {/* Juara 2 */}
                                            <div className="col-xl-4 col-md-6 mt-xl-10">
                                                <div className="glass-prize-card prize-silver text-center transition-all p-10 h-100 rounded-5" style={{ background: 'linear-gradient(180deg, rgba(200,200,200,0.05) 0%, rgba(20,20,20,0.8) 100%)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                                    <div className="prize-visual mb-6 position-relative z-1">
                                                        <i className="ti ti-medal fs-display-two tcn-1 d-inline-block hover-float" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}></i>
                                                    </div>
                                                    <h4 className="tcn-1 fw-extrabold mb-2 text-uppercase tracking-widest text-secondary">{tournament.prizes?.[1]?.place || 'JUARA 2'}</h4>
                                                    <h2 className="display-six fw-extrabold tcn-1 mb-4">{tournament.prizes?.[1]?.amount || 'Rp 5.000.000'}</h2>
                                                    <p className="tcn-6 fs-md mb-0">{tournament.prizes?.[1]?.reward || 'Medali Perak & Sertifikat Nasional Silver'}</p>
                                                </div>
                                            </div>
                                            {/* Juara 3 */}
                                            <div className="col-xl-4 col-md-6 mt-xl-14">
                                                <div className="glass-prize-card prize-bronze text-center transition-all p-10 h-100 rounded-5" style={{ background: 'linear-gradient(180deg, rgba(205,127,50,0.05) 0%, rgba(20,20,20,0.8) 100%)', border: '1px solid rgba(205,127,50,0.2)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                                                    <div className="prize-visual mb-6 position-relative z-1">
                                                        <i className="ti ti-medal fs-display-two d-inline-block hover-float" style={{ color: '#cd7f32', filter: 'drop-shadow(0 0 20px rgba(205,127,50,0.3))' }}></i>
                                                    </div>
                                                    <h4 className="fw-extrabold mb-2 text-uppercase tracking-widest" style={{ color: '#cd7f32' }}>{tournament.prizes?.[2]?.place || 'JUARA 3'}</h4>
                                                    <h2 className="display-six fw-extrabold mb-4" style={{ color: '#e89e5a' }}>{tournament.prizes?.[2]?.amount || 'Rp 2.500.000'}</h2>
                                                    <p className="tcn-6 fs-md mb-0">{tournament.prizes?.[2]?.reward || 'Medali Perunggu & Sertifikat Nasional Bronze'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {!isTournament && (
                            <section className="game-details-modern pb-120 position-relative">
                                <Breadcrumbs customCrumbs={[
                                    { href: '/games', label: 'Games', isLast: false },
                                    { href: `/competitions/${tournament.slug}`, label: tournament.title, isLast: true }
                                ]} />

                                {/* MODERN STORE-STYLE HERO SECTION */}
                                <div className="row mt-10 mb-15">
                                    <div className="col-12">
                                        <div className="store-hero-banner rounded-5 overflow-hidden position-relative shadow-premium-orange animate-zoom-in">
                                            <div className="banner-overlay"></div>
                                            {tournament.slug === '2' ? (
                                                <div className="quiz-bg-animation position-absolute w-100 h-100" style={{ zIndex: 0, opacity: 0.6 }}>
                                                    <div className="glow-circle position-absolute top-0 start-0 translate-middle" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255, 122, 0, 0.2) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
                                                    <div className="glow-circle position-absolute bottom-0 end-0 translate-middle" style={{ width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255, 69, 0, 0.15) 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
                                                    <img src={tournament.image} alt={tournament.title} className="banner-bg-img" />
                                                </div>
                                            ) : (
                                                <img src={tournament.image} alt={tournament.title} className="banner-bg-img" />
                                            )}

                                            <div className="banner-content p-md-15 p-8 position-relative z-2">
                                                <h1 className="display-one fw-extrabold tcn-1 mb-2 text-uppercase tracking-tighter title-glow">
                                                    {tournament.title}
                                                </h1>
                                                <div className="d-flex flex-wrap gap-3 mb-8">
                                                    <span className="badge-store-free text-uppercase">FREE</span>
                                                </div>

                                                <div className="play-cta-wrapper-modern mt-10 d-inline-block animate-slide-up">
                                                    <Link href={`/play/${tournament.slug}`} className="play-now-btn-hero py-4 px-12 rounded-2 bg-orange-gradient text-white fw-extrabold text-uppercase tracking-widest transition-all hover-scale neon-orange-glow d-flex align-items-center gap-3">
                                                        <i className="ti ti-player-play-filled fs-xl"></i> MAIN SEKARANG
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row g-15">
                                    <div className="col-lg-8">
                                        {/* VIDEO PREVIEW SECTION */}
                                        <div className="row mb-15">
                                            <div className="col-12 animate-fade-in">
                                                <div className="section-header mb-8">
                                                    <h3 className="tcn-1 fw-bold text-uppercase d-flex align-items-center gap-3">
                                                        <div className="otp-dots" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--tcp-1)', boxShadow: '0 0 10px var(--tcp-1)' }}></div>
                                                        Cuplikan Permainan
                                                    </h3>
                                                </div>
                                                <div
                                                    className="video-preview-modern rounded-4 overflow-hidden shadow-glow-subtle position-relative"
                                                >
                                                    <div className="ratio ratio-16x9">
                                                        <iframe
                                                            src={`${tournament.videoUrl}`}
                                                            title="Game Trailer"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                            style={{ border: 'none' }}
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* DESCRIPTION SECTION */}
                                        <div className="description-modern mb-15 animate-slide-up position-relative">
                                            <h2 className="tcn-1 fw-extrabold mb-6 text-uppercase d-flex align-items-center gap-3">
                                                <span className="otp-dots" style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--tcp-1)', boxShadow: '0 0 12px var(--tcp-1)' }}></span>
                                                Tentang Game
                                            </h2>
                                            <div className="tcn-6 fs-lg line-height-comfortable max-w-readable glass-content-layer p-8 rounded-4 mb-10 overflow-hidden position-relative" style={{ background: 'rgba(15, 15, 15, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <div className="glow-accent-top" style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'radial-gradient(ellipse at center, rgba(255, 122, 0, 0.15) 0%, transparent 70%)', filter: 'blur(30px)' }}></div>
                                                {renderDescription(tournament.description)}
                                            </div>

                                            {/* FEATURES GRID */}
                                            <div className="features-grid-modern row g-6">
                                                {tournament.features?.map((feature, index) => (
                                                    <div key={index} className="col-md-6">
                                                        <div className="feature-card-glass-premium p-6 rounded-4 h-100 d-flex gap-5 transition-all hover-lift" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 122, 0, 0.1)', backdropFilter: 'blur(10px)' }}>
                                                            <div className="feature-icon-wrapper rounded-3 d-center text-orange-gradient" style={{ width: '60px', height: '60px', background: 'rgba(255, 122, 0, 0.1)', border: '1px solid rgba(255, 122, 0, 0.2)', flexShrink: 0 }}>
                                                                <i className={`${feature.icon} fs-two`}></i>
                                                            </div>
                                                            <div>
                                                                <h4 className="tcn-1 fw-bold mb-1">{feature.title}</h4>
                                                                <p className="tcn-6 fs-sm mb-0 opacity-75">{feature.description}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* SCREENSHOTS SECTION */}
                                        {tournament.screenshots && tournament.screenshots.length > 0 && (
                                            <div className="screenshots-section-modern mb-15 animate-slide-up">
                                                <div className="section-header mb-8">
                                                    <h3 className="tcn-1 fw-bold text-uppercase d-flex align-items-center gap-3">
                                                        <div className="otp-dots" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--tcp-1)', boxShadow: '0 0 10px var(--tcp-1)' }}></div>
                                                        Screenshot Permainan
                                                    </h3>
                                                </div>
                                                <div className="screenshot-slider d-flex gap-6 overflow-auto pb-6 custom-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
                                                    {tournament.screenshots.map((ss, index) => (
                                                        <div key={index} className="screenshot-item rounded-4 overflow-hidden border border-secondary border-opacity-10 transition-all hover-zoom-light" style={{ flex: '0 0 300px', scrollSnapAlign: 'start' }}>
                                                            <img src={ss} alt={`Screenshot ${index + 1}`} className="w-100 h-100 object-fit-cover h-180" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* RIGHT SIDEBAR: RATING & SOCIAL */}
                                    <div className="col-lg-4 animate-slide-right">
                                        <div className="sticky-top" style={{ top: '120px' }}>
                                            <div className="rating-sidebar-card p-8 rounded-5 mb-8 shadow-glow-subtle" style={{ background: 'rgba(15, 15, 15, 0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <h4 className="tcn-1 fw-bold mb-6 d-flex align-items-center gap-2">
                                                    <div className="otp-dots" style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--tcp-1)', boxShadow: '0 0 8px var(--tcp-1)' }}></div>
                                                    Rating Komunitas
                                                </h4>
                                                <div className="d-flex align-items-end gap-3 mb-6">
                                                    <h1 className="display-three fw-extrabold tcn-1 m-0" style={{ lineHeight: 1 }}>{tournament.rating}</h1>
                                                    <span className="tcn-6 fs-four pb-1">/ 5</span>
                                                </div>

                                                <div className="rating-stats-bars mb-8">
                                                    {[5, 4, 3, 2, 1].map((star) => (
                                                        <div key={star} className="d-flex align-items-center gap-3 mb-2">
                                                            <span className="tcn-6 fs-xs fw-bold" style={{ width: '12px' }}>{star}</span>
                                                            <div className="flex-grow-1 bg-dark rounded-pill overflow-hidden" style={{ height: '6px' }}>
                                                                <div
                                                                    className="bg-orange-gradient h-100 rounded-pill"
                                                                    style={{ width: star === 5 ? '85%' : star === 4 ? '10%' : '5%', opacity: 0.8 }}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="rating-input-wrapper mb-6 position-relative">
                                                    <textarea
                                                        className="rating-input w-100 p-4 rounded-3 bgn-4 tcn-1 fs-sm"
                                                        placeholder="Tulis pendapatmu..."
                                                        rows={2}
                                                        style={{ border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(0,0,0,0.2)' }}
                                                    ></textarea>
                                                </div>

                                                <button className="w-100 py-3 rounded-2 bg-orange-gradient text-white fw-bold text-uppercase tracking-widest transition-all hover-scale neon-orange-glow border-0">
                                                    Kirim Rating
                                                </button>
                                            </div>

                                            <div className="rating-sidebar-card p-8 rounded-5" style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                                <h5 className="tcn-1 fw-bold mb-6">Informasi Tambahan</h5>
                                                <div className="d-grid gap-4">
                                                    <div className="d-flex justify-content-between">
                                                        <span className="tcn-6 fs-sm">Penerbit</span>
                                                        <span className="tcn-1 fs-sm fw-bold">Gameforsmart.com</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="tcn-6 fs-sm">Versi</span>
                                                        <span className="tcn-1 fs-sm fw-bold">v1.2.4 (Terbaru)</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <span className="tcn-6 fs-sm">Genre</span>
                                                        <span className="tcn-1 fs-sm fw-bold">{tournament.genre}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </section>
                        )}

                        {!isTournament && (
                            <section className="game-details pb-120">
                                <Breadcrumbs />

                                {/* 1. GAME HEADER */}
                                <div className="row g-6 align-items-center mb-10 mt-6">
                                    <div className="col-xl-4 col-lg-5 col-md-5 mb-4 mb-md-0">
                                        <div className="game-header-poster d-flex align-items-center justify-content-center rounded-4 overflow-hidden h-100 shadow-premium-orange border border-secondary border-opacity-25">
                                            <img
                                                src={tournament.image}
                                                alt={tournament.title}
                                                className="w-100 h-100 object-fit-cover"
                                                style={{ maxHeight: '320px' }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-xl-8 col-lg-7 col-md-7">
                                        <div className="d-flex flex-column gap-3">
                                            <span className="text-uppercase tcn-6 fw-bold fs-xs tracking-widest">
                                                Game Detail
                                            </span>

                                            <h1 className="tcn-1 fw-extrabold display-four mb-1 title-glow">
                                                {tournament.title}
                                            </h1>
                                            {tournament.subtitle && (
                                                <p className="tcn-6 fs-four mb-2">
                                                    {tournament.subtitle}
                                                </p>
                                            )}

                                            <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
                                                <span className="badge rounded-pill px-3 py-1 bg-orange-gradient text-uppercase fw-bold fs-xs">
                                                    {tournament.genre}
                                                </span>
                                                <span className="badge rounded-pill px-3 py-1 bgn-3 tcn-1 fs-xs d-flex align-items-center gap-1">
                                                    <i className="ti ti-device-gamepad-2"></i>
                                                    {tournament.platform}
                                                </span>
                                                <span className="badge rounded-pill px-3 py-1 bgn-3 tcn-1 fs-xs d-flex align-items-center gap-1">
                                                    <i className="ti ti-users"></i>
                                                    {tournament.players}+ Pemain
                                                </span>
                                                <span className="badge rounded-pill px-3 py-1 bgn-3 tcn-1 fs-xs d-flex align-items-center gap-1">
                                                    <i className="ti ti-star text-warning"></i>
                                                    {tournament.rating} / 5
                                                </span>
                                            </div>

                                            <div className="d-flex flex-wrap align-items-center gap-3 mt-2">
                                                <button
                                                    className="btn btn-lg bg-orange-gradient text-white fw-bold rounded-pill px-5 py-2 play-now-btn-hero d-flex align-items-center gap-2"
                                                    onClick={() => router.push(tournament.href || '#')}
                                                >
                                                    <i className="ti ti-player-play-filled"></i>
                                                    Main Sekarang
                                                </button>
                                                <span className="tcn-6 fs-sm d-flex align-items-center gap-2">
                                                    <i className="ti ti-shield-check text-success"></i>
                                                    Konten ramah pelajar
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2 & 3. VIDEO PREVIEW + DESKRIPSI GAME */}
                                <div className="row g-10">
                                    <div className="col-lg-8 d-flex flex-column gap-8">
                                        {/* Video Preview */}
                                        <div className="content-card-premium rounded-4 p-sm-8 p-5 shadow-premium-orange bg-dark-gradient">
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <h3 className="tcn-1 fw-bold d-flex align-items-center gap-2 mb-0">
                                                    <span className="otp-dots-small"></span>
                                                    Cuplikan Permainan
                                                </h3>
                                                {tournament.videoUrl && (
                                                    <span className="tcn-6 fs-xs text-uppercase tracking-widest">
                                                        Official Trailer
                                                    </span>
                                                )}
                                            </div>
                                            <div className="ratio ratio-16x9 rounded-3 overflow-hidden border border-secondary border-opacity-25">
                                                <iframe
                                                    width="100%"
                                                    height="400"
                                                    src={tournament.videoUrl || 'https://www.youtube.com/embed/RkQ1cbL8Nqk'}
                                                    title={`${tournament.title} Trailer`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>

                                        {/* Deskripsi Game */}
                                        <div className="content-card-premium rounded-4 p-sm-8 p-5 bg-dark-gradient shadow-glow-subtle">
                                            <h3 className="tcn-1 fw-bold mb-4 d-flex align-items-center gap-2">
                                                <span className="otp-dots-small"></span>
                                                Tentang Game
                                            </h3>
                                            <div className="tcn-6 fs-md line-height-comfortable">
                                                {renderDescription(tournament.description)}
                                            </div>

                                            {/* Fitur Utama */}
                                            {tournament.features && tournament.features.length > 0 && (
                                                <>
                                                    <h4 className="tcn-1 fw-bold mt-6 mb-3 d-flex align-items-center gap-2">
                                                        <i className="ti ti-stars text-orange-gradient"></i>
                                                        Fitur Utama
                                                    </h4>
                                                    <ul className="list-unstyled d-grid gap-3">
                                                        {tournament.features.map((feature, index) => (
                                                            <li key={index} className="d-flex align-items-start gap-3">
                                                                <div className="feature-bullet-icon d-center rounded-circle">
                                                                    <i className={feature.icon}></i>
                                                                </div>
                                                                <div>
                                                                    <p className="tcn-1 fw-semibold mb-1">{feature.title}</p>
                                                                    <p className="tcn-6 fs-sm mb-0 opacity-75">{feature.description}</p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}

                                            {/* Cara Bermain */}
                                            {tournament.rules && tournament.rules.length > 0 && (
                                                <>
                                                    <h4 className="tcn-1 fw-bold mt-6 mb-3 d-flex align-items-center gap-2">
                                                        <i className="ti ti-controller text-orange-gradient"></i>
                                                        Cara Bermain
                                                    </h4>
                                                    <ul className="list-unstyled d-grid gap-2">
                                                        {tournament.rules.map((rule, index) => (
                                                            <li key={index} className="d-flex align-items-start gap-2">
                                                                <span className="bullet-soft-dot mt-1"></span>
                                                                <span className="tcn-6 fs-sm">{rule}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    {/* 4. INFO BOX / RATING SEDERHANA */}
                                    <div className="col-lg-4">
                                        <div className="game-info-card rounded-4 p-6 shadow-glow-subtle mb-6">
                                            <h4 className="tcn-1 fw-bold mb-4">Ringkasan Game</h4>
                                            <div className="d-grid gap-3">
                                                <div className="d-flex justify-content-between">
                                                    <span className="tcn-6 fs-sm">Genre</span>
                                                    <span className="tcn-1 fs-sm fw-bold">{tournament.genre}</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="tcn-6 fs-sm">Platform</span>
                                                    <span className="tcn-1 fs-sm fw-bold">{tournament.platform}</span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="tcn-6 fs-sm">Rating</span>
                                                    <span className="tcn-1 fs-sm fw-bold">
                                                        {tournament.rating} / 5
                                                    </span>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <span className="tcn-6 fs-sm">Pemain</span>
                                                    <span className="tcn-1 fs-sm fw-bold">{tournament.players}+ pemain</span>
                                                </div>
                                            </div>
                                            <button
                                                className="w-100 mt-5 py-2 rounded-pill bg-orange-gradient text-white fw-bold text-uppercase tracking-widest hover-scale border-0"
                                                onClick={() => router.push(tournament.href || '#')}
                                            >
                                                Main Sekarang
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                </article>
            </main>

            {/* VIDEO MODAL at true root level to escape all parent transforms */}
            {isVideoModalOpen && (
                <div className="video-modal-overlay position-fixed inset-0 d-center animate-fade-in" style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}>
                    <button
                        className="modal-close-btn position-absolute top-10 end-10 btn-show-hide"
                        onClick={() => setIsVideoModalOpen(false)}
                        style={{ zIndex: 10001 }}
                    >
                        <i className="ti ti-x"></i>
                    </button>
                    <div className="container" onClick={(e) => e.stopPropagation()}>
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="video-modal-content rounded-5 overflow-hidden shadow-orange-intense animate-zoom-in">
                                    <div className="ratio ratio-16x9">
                                        <iframe
                                            src={`${tournament.videoUrl}?autoplay=1`}
                                            title="Game Trailer"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{ border: 'none' }}
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                .animate-slide-up {
                    animation: fadeInUp 0.8s ease-out 0.3s forwards;
                }
                .animate-zoom-in {
                    animation: zoomIn 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
                .d-center {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .tracking-tighter { letter-spacing: -0.05em; }
                .tracking-widest { letter-spacing: 0.2em; }
                
                .text-orange-gradient {
                    background: linear-gradient(90deg, #ff7a00, #ff4500);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .bg-orange-gradient {
                    background: linear-gradient(90deg, #ff7a00, #ff4500);
                }

                .premium-title {
                    font-size: 4rem;
                    line-height: 1;
                    background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 10px 20px rgba(0,0,0,0.5);
                }

                .shadow-premium-orange {
                    box-shadow: 0 30px 60px rgba(255, 122, 0, 0.1), 0 0 20px rgba(255, 122, 0, 0.05);
                }

                .glass-content-layer {
                    background: rgba(15, 15, 15, 0.8);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                /* GAME DETAIL LAYOUT */
                .bg-dark-gradient {
                    background: radial-gradient(circle at top left, rgba(255, 122, 0, 0.12), transparent 55%), #050608;
                }

                .otp-dots-small {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: var(--tcp-1);
                    box-shadow: 0 0 10px var(--tcp-1);
                    display: inline-block;
                }

                .feature-bullet-icon {
                    width: 32px;
                    height: 32px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }

                .bullet-soft-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.4);
                }

                .game-info-card {
                    background: rgba(10, 10, 10, 0.96);
                    border: 1px solid rgba(255, 255, 255, 0.04);
                }

                .store-hero-banner {
                    height: 550px;
                    background: #0f0f0f;
                    border: 1px solid rgba(255, 122, 0, 0.1);
                }
                .banner-bg-img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.3;
                    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .store-hero-banner:hover .banner-bg-img {
                    transform: scale(1.08);
                }
                .banner-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(0deg, #0f0f0f 0%, rgba(15, 15, 15, 0.2) 50%, transparent 100%);
                    z-index: 1;
                }

                .badge-store-free {
                    padding: 6px 16px;
                    background: rgba(255, 122, 0, 0.1);
                    border: 1px solid rgba(255, 122, 0, 0.4);
                    border-radius: 4px;
                    font-size: 13px;
                    font-weight: 800;
                    color: #ff7a00;
                    letter-spacing: 2px;
                    box-shadow: 0 0 15px rgba(255, 122, 0, 0.2);
                }

                .title-glow {
                    text-shadow: 0 0 40px rgba(255, 122, 0, 0.4);
                }

                .play-now-btn-hero {
                    border: none;
                    cursor: pointer;
                    box-shadow: 0 10px 30px rgba(255, 122, 0, 0.3);
                }

                .neon-orange-glow {
                    box-shadow: 0 0 25px rgba(255, 70, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
                }
                .neon-orange-glow:hover {
                    box-shadow: 0 0 45px rgba(255, 70, 0, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.3);
                }

                .video-preview-modern {
                    background: #000;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    transition: all 0.4s ease;
                }
                .video-preview-modern:hover {
                    border-color: rgba(255, 122, 0, 0.4);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(255, 122, 0, 0.2);
                }
                .play-btn-circle {
                    width: 90px;
                    height: 90px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .video-preview-modern:hover .play-btn-circle {
                    transform: scale(1.15);
                    box-shadow: 0 0 40px rgba(255, 122, 0, 0.6);
                }

                .feature-card-glass-premium {
                    transition: all 0.3s ease;
                }
                .feature-card-glass-premium:hover {
                    background: rgba(255, 122, 0, 0.08) !important;
                    border-color: rgba(255, 122, 0, 0.3) !important;
                    transform: translateY(-8px);
                }

                .screenshot-item {
                    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .screenshot-item:hover {
                    transform: scale(1.05);
                    border-color: rgba(255, 122, 0, 0.4) !important;
                    z-index: 2;
                }

                .custom-scrollbar::-webkit-scrollbar {
                    height: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 122, 0, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ff7a00;
                }

                .video-modal-overlay {
                    z-index: 9999 !important;
                    background: rgba(0, 0, 0, 0.98) !important;
                    backdrop-filter: blur(30px) !important;
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                }

                .video-modal-content {
                    background: #000;
                    border: 1px solid rgba(255, 122, 0, 0.4);
                    box-shadow: 0 0 50px rgba(255, 122, 0, 0.2);
                }

                .shadow-orange-intense {
                    box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 0 50px rgba(255, 122, 0, 0.2);
                }

                .hover-scale {
                    transition: transform 0.3s ease;
                }
                .hover-scale:hover {
                    transform: scale(1.05);
                }

                .h-180 { height: 180px; }

                @media (max-width: 768px) {
                    .premium-title { font-size: 2.2rem; }
                    .display-one { font-size: 2.8rem; }
                    .store-hero-banner { height: auto; min-height: 400px; }
                    .banner-content { padding: 2rem !important; }
                    .play-now-btn-hero { width: 100%; justify-content: center; }
                    .play-btn-circle { width: 60px; height: 60px; }
                    .play-btn-circle i { font-size: 2rem !important; }
                }

                .glass-prize-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 32px;
                    position: relative;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .glass-prize-card:hover {
                    transform: translateY(-15px) scale(1.02);
                }
                .prize-gold:hover {
                    border-color: #ffaa00 !important;
                    box-shadow: 0 15px 40px rgba(255, 140, 0, 0.4), inset 0 0 30px rgba(255, 140, 0, 0.1) !important;
                }
                .prize-silver:hover {
                    border-color: rgba(255, 255, 255, 0.6) !important;
                    box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1) !important;
                }
                .prize-bronze:hover {
                    border-color: #e89e5a !important;
                    box-shadow: 0 15px 40px rgba(205, 127, 50, 0.3), inset 0 0 30px rgba(205, 127, 50, 0.1) !important;
                }
                .hover-float {
                    transition: transform 0.4s ease;
                }
                .glass-prize-card:hover .hover-float {
                    transform: translateY(-8px) scale(1.1);
                }

                .store-hero-banner {
                    height: 500px;
                    background: #0b1117;
                }
                .banner-bg-img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.4;
                    transition: transform 0.8s ease;
                }
                .store-hero-banner:hover .banner-bg-img {
                    transform: scale(1.05);
                }
                .banner-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(0deg, #0b1117 0%, rgba(11, 17, 23, 0.4) 50%, transparent 100%);
                    z-index: 1;
                }

                .badge-store {
                    padding: 4px 12px;
                    background: rgba(255, 140, 0, 0.1);
                    border: 1px solid rgba(255, 140, 0, 0.3);
                    border-radius: 6px;
                    font-size: 12px;
                    font-weight: 800;
                    color: #ff8c00;
                    letter-spacing: 1px;
                }

                .title-glow {
                    text-shadow: 0 0 30px rgba(255, 140, 0, 0.3);
                }

                .play-cta-wrapper {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .play-cta-inner {
                    background: rgba(0, 0, 0, 0.3);
                }

                .neon-orange-glow {
                    box-shadow: 0 0 20px rgba(255, 140, 0, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.2);
                }
                .neon-orange-glow:hover {
                    box-shadow: 0 0 40px rgba(255, 140, 0, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.3);
                }

                .video-modern-wrapper {
                    background: #000;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .orange-dot {
                    width: 10px;
                    height: 10px;
                    background: #ff8c00;
                    border-radius: 50%;
                    display: inline-block;
                }

                .feature-card-glass {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(10px);
                }
                .feature-card-glass:hover {
                    background: rgba(255, 140, 0, 0.05);
                    border-color: rgba(255, 140, 0, 0.2);
                }

                .rating-sidebar-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(5px);
                }
                .rating-input {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    outline: none;
                    resize: none;
                }
                .rating-input:focus {
                    border-color: #ff8c00;
                }

                .text-orange-glow {
                    color: #ff8c00;
                    text-shadow: 0 0 15px rgba(255, 140, 0, 0.5);
                }

                .float-mascot {
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-20px) rotate(2deg); }
                }

                .btn-show-hide {
                    background: rgba(255, 140, 0, 0.1);
                    border: 1px solid rgba(255, 140, 0, 0.3);
                    color: #ff8c00;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    backdrop-filter: blur(12px);
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }
                .btn-show-hide:hover {
                    background: #ff8c00;
                    color: #fff;
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 8px 25px rgba(255, 140, 0, 0.4);
                    border-color: #ff8c00;
                }
                .btn-show-hide:active {
                    transform: translateY(0) scale(0.98);
                }

                .btn-back-floating {
                    position: absolute;
                    z-index: 100;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background: rgba(255, 140, 0, 0.1);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 140, 0, 0.3);
                    color: #ff8c00;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                .btn-back-floating:hover {
                    background: #ff8c00;
                    border-color: #ff8c00;
                    box-shadow: 0 0 15px rgba(255, 140, 0, 0.5);
                    transform: scale(1.1);
                }

                .shadow-orange-subtle {
                    box-shadow: 0 0 20px rgba(255, 172, 5, 0.15);
                    border: 1px solid rgba(255, 172, 5, 0.2);
                }

                @media (max-width: 991px) {
                    .premium-title { font-size: 2.5rem; }
                    .display-one { font-size: 3rem; }
                    .store-hero-banner { height: auto; }
                }
            `}</style>
        </>
    );
}
