import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import TournamentCard from '@/components/TournamentCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { tournamentsData } from '@/data/tournamentsData';

export const metadata = {
    title: 'Competition | GameForSmart 2026',
    description: 'Ikuti berbagai kompetisi cerdas cermat dan game edukatif dengan hadiah menarik.',
};

export default function TournamentsPage() {
    return (
        <>
            <Header />
            <main className="main-container container-fluid d-flex pt-sm-20 pt-15 px-0 position-relative">
                <Sidebar />
                <article className="main-content mt-lg-10">
                    <section className="tournament-banner mb-lg-15 mb-sm-10 mb-4 pb-lg-10 pb-sm-6">
                        <div className="container-fluid">
                            <div className="parallax-banner-area parallax-container">
                                <img className="w-100 h-100 rounded-5 parallax-img" src="/assets/img/tournament-banner.png" alt="tournament banner" />
                            </div>
                        </div>
                    </section>

                    <section className="tournament-section pb-120">
                        <div className="tournament-wrapper alt">
                            <div className="container-fluid px-lg-15 px-md-10 px-6">
                                <Breadcrumbs />
                                <div className="row justify-content-between align-items-end mb-8">
                                    <div className="col">
                                        <h1 className="display-four tcn-1 cursor-scale growUp title-anim text-uppercase">Competition</h1>
                                    </div>
                                </div>
                                <div className="singletab tournaments-tab">
                                    <div className="d-between gap-6 flex-wrap mb-lg-15 mb-sm-10 mb-6">
                                        <ul className="tablinks d-flex flex-wrap align-items-center gap-3">
                                            <li className="nav-links active"><button className="tablink py-sm-3 py-2 px-sm-8 px-6 rounded-pill tcn-1">All</button></li>
                                            <li className="nav-links"><button className="tablink py-sm-3 py-2 px-sm-8 px-6 rounded-pill tcn-1">Active</button></li>
                                            <li className="nav-links"><button className="tablink py-sm-3 py-2 px-sm-8 px-6 rounded-pill tcn-1">Upcoming</button></li>
                                            <li className="nav-links"><button className="tablink py-sm-3 py-2 px-sm-8 px-6 rounded-pill tcn-1">Finished</button></li>
                                        </ul>
                                    </div>
                                    <div className="tabcontents">
                                        <div className="tabitem active">
                                            <div className="row justify-content-md-start justify-content-center g-6">
                                                {tournamentsData.map((tournament) => (
                                                    <div key={tournament.id} className="col-xxl-3 col-lg-4 col-md-6 col-sm-8">
                                                        <TournamentCard {...tournament} isDetailed />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </article>
            </main>
        </>
    );
}
