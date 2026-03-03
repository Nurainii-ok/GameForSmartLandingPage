import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Banner from '@/components/Banner';
import TournamentSection from '@/components/TournamentSection';
import GamesSection from '@/components/GamesSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Home | GameForSmart 2026',
    description: 'Mainkan berbagai game seru dan ikuti turnamen berhadiah di GameForSmart 2026.',
};

export default function Home() {
    return (
        <>
            <Header />
            <main className="main-container container-fluid d-flex pt-20 px-0 position-relative">
                <Sidebar />
                <article className="main-content">
                    <Banner />
                    <GamesSection />
                    <TournamentSection />
                    <CTA />
                    <Footer />
                </article>
            </main>
        </>
    );
}
