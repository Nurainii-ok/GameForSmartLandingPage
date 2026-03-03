"use client";
import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function TournamentsRedirect() {
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        const idMap: { [key: string]: string } = {
            '21': 'malang-raya',
            '22': 'jawa-timur',
            '23': 'nasional'
        };

        const slug = Array.isArray(params.slug) ? params.slug[0] : (params.slug as string);
        const targetSlug = slug && idMap[slug] ? idMap[slug] : slug;

        if (targetSlug) {
            router.push(`/competitions/${targetSlug}`);
        } else {
            router.push('/competitions');
        }
    }, [router, params]);

    return (
        <div className="min-vh-100 bgn-4 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-orange" role="status">
                <span className="visually-hidden">Redirecting...</span>
            </div>
            <style jsx>{`
                .text-orange { color: #ff8c00; }
            `}</style>
        </div>
    );
}
