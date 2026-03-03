import type { Metadata } from 'next';
import AboutView from '@/components/AboutView';

export const metadata: Metadata = {
    title: 'About Us | GameForSmart 2026',
    description: 'Pelajari lebih lanjut tentang GameForSmart, platform kompetisi pendidikan digital terbaik di Indonesia.',
};

export default function AboutPage() {
    return <AboutView />;
}
