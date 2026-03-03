"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface RegistrationViewProps {
    competitionTitle: string;
    competitionSlug: string;
    fee: string;
}

export default function RegistrationView({ competitionTitle, competitionSlug, fee }: RegistrationViewProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="registration-view py-12 px-6 d-flex flex-column align-items-center justify-content-center text-center h-100" style={{ minHeight: '60vh' }}>
                <div className="success-icon mb-6 bgn-3 rounded-circle d-center" style={{ width: '80px', height: '80px', border: '2px solid #72ff00', boxShadow: '0 0 20px rgba(114, 255, 0, 0.2)' }}>
                    <i className="ti ti-check display-four" style={{ color: '#72ff00' }}></i>
                </div>
                <h2 className="tcn-1 mb-4 fw-bold">Pendaftaran Berhasil!</h2>
                <p className="tcn-6 mb-8 max-w-lg mx-auto">
                    Terima kasih telah mendaftar di <strong>{competitionTitle}</strong>. Tim kami akan segera menghubungi Anda melalui email atau WhatsApp untuk instruksi selanjutnya.
                </p>
                <Link href="/competitions" className="btn-half-border position-relative d-inline-block py-3 bgp-1 px-8 rounded-pill text-nowrap fw-bold transition-all hover-scale">
                    Kembali ke Kompetisi
                </Link>
            </div>
        );
    }

    return (
        <div className="registration-view py-lg-12 py-8 px-sm-6 px-4">
            <div className="container-fluid max-w-3xl mx-auto">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href={`/competitions/${competitionSlug}`} className="d-inline-flex align-items-center justify-content-center rounded-circle transition-all hover-scale bg-orange-gradient neon-orange-glow" style={{ width: '40px', height: '40px' }} title="Kembali ke Detail">
                        <i className="ti ti-arrow-left fs-xl text-white"></i>
                    </Link>
                </div>

                <div className="registration-header text-center mb-10">
                    <h2 className="display-five tcn-1 fw-bold mb-3">Formulir Pendaftaran</h2>
                    <p className="tcn-6 fs-five">
                        <span className="tcp-1 fw-bold">{competitionTitle}</span>
                    </p>
                </div>

                <div className="registration-card bgn-4 p-md-8 p-6 rounded-4 border border-secondary border-opacity-10 shadow-lg position-relative overflow-hidden">
                    <div className="custom-gradient-bg position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ pointerEvents: 'none' }}></div>

                    <form onSubmit={handleSubmit} className="position-relative z-1 d-flex flex-column gap-6">
                        {/* Team Info Section */}
                        <div className="form-section">
                            <h4 className="tcn-1 fs-six fw-bold mb-4 d-flex align-items-center gap-2">
                                <i className="ti ti-users tcp-1"></i> Informasi Tim
                            </h4>
                            <div className="row g-4">
                                <div className="col-12">
                                    <label className="tcn-1 fs-sm fw-medium mb-2 d-block">Nama Tim / Peserta <span className="tcp-1">*</span></label>
                                    <input type="text" className="w-100 py-3 px-4 bgn-3 rounded-3 tcn-1 border border-secondary border-opacity-10 focus-neon" placeholder="Masukkan nama tim" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="tcn-1 fs-sm fw-medium mb-2 d-block">Nama Ketua <span className="tcp-1">*</span></label>
                                    <input type="text" className="w-100 py-3 px-4 bgn-3 rounded-3 tcn-1 border border-secondary border-opacity-10 focus-neon" placeholder="Nama lengkap ketua" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="tcn-1 fs-sm fw-medium mb-2 d-block">Asal Sekolah / Institusi <span className="tcp-1">*</span></label>
                                    <input type="text" className="w-100 py-3 px-4 bgn-3 rounded-3 tcn-1 border border-secondary border-opacity-10 focus-neon" placeholder="Nama instansi" required />
                                </div>
                            </div>
                        </div>

                        <div className="hr-line line3 my-2 opacity-50"></div>

                        {/* Contact Info Section */}
                        <div className="form-section">
                            <h4 className="tcn-1 fs-six fw-bold mb-4 d-flex align-items-center gap-2">
                                <i className="ti ti-address-book tcp-1"></i> Informasi Kontak
                            </h4>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <label className="tcn-1 fs-sm fw-medium mb-2 d-block">Email Aktif <span className="tcp-1">*</span></label>
                                    <input type="email" className="w-100 py-3 px-4 bgn-3 rounded-3 tcn-1 border border-secondary border-opacity-10 focus-neon" placeholder="contoh@email.com" required />
                                </div>
                                <div className="col-md-6">
                                    <label className="tcn-1 fs-sm fw-medium mb-2 d-block">No. WhatsApp <span className="tcp-1">*</span></label>
                                    <input type="tel" className="w-100 py-3 px-4 bgn-3 rounded-3 tcn-1 border border-secondary border-opacity-10 focus-neon" placeholder="08xx xxxx xxxx" required />
                                </div>
                            </div>
                        </div>

                        {/* Summary & Submit */}
                        <div className="mt-4 p-4 bgn-3 rounded-3 border border-secondary border-opacity-10 d-flex flex-wrap align-items-center justify-content-between gap-4">
                            <div>
                                <span className="tcn-6 fs-sm d-block mb-1">Biaya Pendaftaran</span>
                                <span className="tcn-1 fs-five fw-bold tcp-1">{fee !== 'Free Entry' ? fee : 'Gratis'}</span>
                            </div>
                            <button
                                type="submit"
                                className="btn-half-border position-relative d-inline-block py-3 bgp-1 px-8 rounded-pill text-nowrap fw-bold transition-all hover-scale"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="d-flex align-items-center gap-2">
                                        <i className="ti ti-loader animate-spin"></i> Memproses...
                                    </span>
                                ) : (
                                    "Konfirmasi Pendaftaran"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .max-w-3xl { max-width: 800px; }
                .max-w-lg { max-width: 500px; }
                .focus-neon:focus {
                    outline: none;
                    border-color: var(--tcp-1) !important;
                    box-shadow: 0 0 10px rgba(255, 140, 0, 0.2);
                }
                .form-section input {
                    transition: all 0.3s ease;
                }
                .form-section input::placeholder {
                    color: rgba(255,255,255,0.2);
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
