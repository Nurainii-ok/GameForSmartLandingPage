import type { Metadata } from 'next';
import AboutView from "@/components/features/about/AboutView";

export const metadata: Metadata = {
    title: 'Tentang Kami',
    description: 'Pelajari lebih lanjut tentang GameForSmart, platform kompetisi pendidikan digital terbaik di Indonesia.',
};

export default function AboutPage() {
    return <AboutView />;
}
