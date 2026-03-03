"use client";
import Header from './Header';
import Sidebar from './Sidebar';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

export default function AboutView() {
    return (
        <>
            <Header />
            <main className="main-container container-fluid d-flex pt-20 px-0 position-relative">
                <Sidebar />
                <article className="main-content mt-lg-10">
                    <div className="container-fluid px-lg-15 px-md-10 px-6">
                        <Breadcrumbs />
                        <h1 className="display-four tcn-1 text-uppercase mb-8">About Us</h1>
                        <div className="content-card-premium p-8 rounded-4 bgn-3">
                            <p className="tcn-6 fs-lg mb-0">
                                GameForSmart adalah platform kompetisi pendidikan digital yang dirancang untuk mengasah kecerdasan dan sportivitas pelajar di seluruh Indonesia.
                            </p>
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
            `}</style>
        </>
    );
}
