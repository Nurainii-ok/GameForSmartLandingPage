"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeRedirect() {
    const router = useRouter();

    useEffect(() => {
        router.push('/home');
    }, [router]);

    return (
        <div className="min-vh-100 bgn-4 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-orange" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <style jsx>{`
                .text-orange { color: #ff8c00; }
            `}</style>
        </div>
    );
}
