import type { Metadata } from 'next';
import ContactView from '@/components/ContactView';

export const metadata: Metadata = {
    title: 'Contact Us | GameForSmart 2026',
    description: 'Hubungi tim GameForSmart untuk pertanyaan, kerjasama, atau bantuan teknis.',
};

export default function ContactPage() {
    return <ContactView />;
}
