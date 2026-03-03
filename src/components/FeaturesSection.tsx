export default function FeaturesSection() {
    const features = [
        { id: 1, title: "Kurikulum Terstruktur", desc: "Belajar dari dasar hingga mahir dengan kurikulum standar industri.", image: "/assets/img/star.png" },
        { id: 2, title: "Mentor Berpengalaman", desc: "Bimbingan langsung dari praktisi teknologi yang ahli di bidangnya.", image: "/assets/img/user.png" },
        { id: 3, title: "Proyek Real-World", desc: "Bangun portofolio nyata untuk persiapan karir masa depan kamu.", image: "/assets/img/tropy2.png" },
        { id: 4, title: "Sertifikat Resmi", desc: "Dapatkan pengakuan atas keahlian kamu dengan sertifikat internasional.", image: "/assets/img/winner-prize.png" },
    ];

    return (
        <section className="features-section pb-120 bgn-4">
            <div className="container-fluid pt-120">
                <div className="row justify-content-center mb-lg-15 mb-sm-10 mb-8">
                    <div className="col-lg-6 text-center">
                        <h2 className="display-four tcn-1 cursor-scale growUp title-anim">Kenapa Memilih Kami?</h2>
                        <p className="tcn-6 fs-lg mt-4">Platform belajar coding paling interaktif untuk mempersiapkan generasi digital masa depan.</p>
                    </div>
                </div>
                <div className="row g-6">
                    {features.map((feature) => (
                        <div key={feature.id} className="col-xl-3 col-md-6">
                            <div className="feature-card p-xxl-10 p-6 bgn-3 rounded-5 text-center" data-tilt>
                                <h3 className="feature-title tcn-1 mb-4 cursor-scale growDown title-anim">{feature.title}</h3>
                                <p className="feature-desc tcn-6">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
