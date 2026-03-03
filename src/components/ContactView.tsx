"use client";
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

export default function ContactView() {
    return (
        <>
            <Header />
            <main className="main-container container-fluid d-flex pt-20 px-0 position-relative">
                <Sidebar />
                <article className="main-content mt-lg-10">
                    <div className="container-fluid px-lg-15 px-md-10 px-6">
                        <Breadcrumbs />
                        <h1 className="display-four tcn-1 text-uppercase mb-8">Contact Us</h1>
                        <div className="content-card-premium p-8 rounded-4 bgn-3">
                            <p className="tcn-6 fs-lg mb-6">
                                Hubungi kami melalui formulir di bawah ini atau melalui saluran resmi kami.
                            </p>
                            <div className="d-grid gap-4">
                                <div className="d-flex align-items-center gap-3">
                                    <i className="ti ti-mail text-orange-glow fs-2xl"></i>
                                    <span className="tcn-1">info@gameforsmart.com</span>
                                </div>
                                <div className="d-flex align-items-center gap-3">
                                    <i className="ti ti-phone text-orange-glow fs-2xl"></i>
                                    <span className="tcn-1">+62 812-3456-7890</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </article>
            </main>
            <style jsx>{`
                .content-card-premium {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                .text-orange-glow {
                    color: #ff8c00;
                    filter: drop-shadow(0 0 5px rgba(255, 140, 0, 0.5));
                }
            `}</style>
        </>
    );
}
