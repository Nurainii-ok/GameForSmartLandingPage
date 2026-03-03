import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function ProfilePage() {
    const gamingAccounts = [
        { id: 1, name: "Axie Origin", image: "/assets/img/gl-1.png", connected: false },
        { id: 2, name: "Rocket League", image: "/assets/img/gl-2.png", connected: false },
        { id: 3, name: "Valorant", image: "/assets/img/gl-3.png", connected: false },
        { id: 4, name: "Battlegrounds", image: "/assets/img/gl-4.png", connected: false },
        { id: 5, name: "Hollow Knight", image: "/assets/img/gl-5.png", connected: false },
        { id: 6, name: "Rocket League", image: "/assets/img/gl-6.png", connected: false },
        { id: 7, name: "Apex Legends", image: "/assets/img/gl-7.png", connected: false },
        { id: 8, name: "Doom Eterna", image: "/assets/img/gl-8.png", connected: false },
        { id: 9, name: "Stardew Valley", image: "/assets/img/gl-9.png", connected: false },
        { id: 10, name: "Genshin Impact", image: "/assets/img/gl-10.png", connected: false },
    ];

    return (
        <>
            <Header />
            <main className="main-container container-fluid d-flex pt-md-20 pt-sm-10 px-0 position-relative">
                <Sidebar />
                <article className="main-content mt-10">
                    <section className="profile-banner-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="parallax-banner-area parallax-container">
                                        <div className="change-banner-btn position-absolute py-1 px-2 rounded bgn-4 top-0 end-0 mt-sm-10 mt-15 me-10 z-2">
                                            <i className="ti ti-camera fs-2xl"></i>
                                        </div>
                                        <div className="parallax-img profile-banner position-relative">
                                            <img className="w-100 h-100 tbi rounded-5" src="/assets/img/profile-banner.png" alt="profile banner" />
                                            <div className="user-profile d-between position-absolute z-1 w-100 px-xxl-15 px-md-10 px-sm-6">
                                                <div className="d-flex align-items-center gap-sm-6 gap-3">
                                                    <div className="profile-thumb">
                                                        <img className="w-100 rounded-circle" src="/assets/img/user-profile.png" alt="team logo" />
                                                    </div>
                                                    <div className="user-details mb-3">
                                                        <div className="d-flex align-items-center gap-3">
                                                            <h3 className="user-name">Mohammad Rony</h3>
                                                            <div className="edit-btn">
                                                                <i className="ti ti-edit-circle fs-2xl"></i>
                                                            </div>
                                                        </div>
                                                        <ul className="user-social d-flex align-items-center gap-sm-3 gap-1">
                                                            <li className="box-style"> <a href="#"><i className="ti ti-brand-facebook fs-2xl"></i></a></li>
                                                            <li className="box-style"> <a href="#"><i className="ti ti-brand-twitter fs-2xl"></i></a></li>
                                                            <li className="box-style"> <a href="#"><i className="ti ti-brand-instagram fs-2xl"></i></a></li>
                                                            <li className="box-style"> <a href="#"><i className="ti ti-brand-discord fs-2xl"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="user-earning-section pb-120 mt-10">
                        <div className="container-fluid">
                            <div className="row g-6">
                                <div className="col-xl-3 col-lg-4">
                                    <div className="user-earning-area py-8 px-4 bgn-4 rounded">
                                        <div className="d-between mb-8">
                                            <h5 className="tcn-1">Your Earnings</h5>
                                            <a href="#" className="claim-btn tcn-1">Claim</a>
                                        </div>
                                        <span className="tcn-1 d-block mb-2">Your Balance</span>
                                        <span className="tcn-1 fs-three">$ 150.00</span>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                    <div className="user-earning-chart py-8 px-4 bgn-4 rounded">
                                        <div id="earning-chart"></div>
                                        <p className="text-center tcn-6">Earnings Chart Placeholder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="gaming-accounts-section pb-120">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="display-three tcn-1 cursor-scale growUp title-anim mb-lg-15 mb-sm-10 mb-6">Gaming Accounts</h2>
                                </div>
                            </div>
                            <div className="row g-6">
                                {gamingAccounts.map((account) => (
                                    <div key={account.id} className="col-xxl-3 col-lg-4 col-md-6">
                                        <div className="gaming-account-card p-sm-8 p-3 bgn-4 rounded card-tilt" data-tilt>
                                            <div className="d-between mb-10">
                                                <div className="gaming-account-thumb">
                                                    <img className="w-100" src={account.image} alt="game-logo" />
                                                </div>
                                                <span className="py-2 px-3 bgn-3 rounded-pill tcn-1">{account.connected ? "Connected" : "Not Connected"}</span>
                                            </div>
                                            <span className="tcn-1 fs-four title mb-3 title-anim">{account.name}</span>
                                            <a href="#" className="tcn-1 d-block mb-8 text-decoration-underline">How to setup account <i className="ti ti-external-link"></i></a>
                                            <div className="d-flex align-items-center gap-5 mb-15">
                                                <div className="single-input py-3">
                                                    <input type="text" placeholder="User1234" className="w-100" />
                                                </div>
                                                <i className="ti ti-edit fs-2xl edit-id"></i>
                                            </div>
                                            <div className="text-center">
                                                <a href="#" className="claim-btn tcn-1">Connect</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="connected-accounts pb-120">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <span className="display-four tcn-1 cursor-scale growUp mb-10 d-block title-anim">Connected Accounts</span>
                                    <div className="d-between p-lg-10 p-sm-6 p-3 bgn-4 rounded">
                                        <div className="d-flex align-items-center gap-6">
                                            <div className="connected-thumb">
                                                <img className="w-100 rounded" src="/assets/img/google.png" alt="google" />
                                            </div>
                                            <span className="fs-2xl tcn-1">Google</span>
                                        </div>
                                        <span className="tcn-1">Connected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <CTA />
                    <Footer />
                </article>
            </main>
        </>
    );
}
