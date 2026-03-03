"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Listen for sidebar-toggle event from Header
    React.useEffect(() => {
        const handler = (e: any) => {
            setOpen(e.detail.open);
        };
        window.addEventListener('sidebar-toggle', handler);
        return () => window.removeEventListener('sidebar-toggle', handler);
    }, []);

    const isActive = (path: string) => {
        if (path === '/home' && pathname === '/') return true;
        return pathname === path || pathname.startsWith(path + '/');
    };

    const menuItems = [
        { href: '/home', icon: 'ti-home', label: 'Home' },
        { href: '/competitions', icon: 'ti-trophy', label: 'Competitions' },
        { href: '/games', icon: 'ti-device-gamepad-2', label: 'Games' },
        { href: '/community', icon: 'ti-users', label: 'Community' },
        { href: '/about', icon: 'ti-info-circle', label: 'About' },
        { href: '/contact', icon: 'ti-mail', label: 'Contact' },
    ];

    return (
        <aside className="sidebar">
            {/* Hamburger for mobile */}
            <button
                className="sidebar-hamburger d-lg-none d-block"
                aria-label="Toggle menu"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className={`hamburger-bar ${open ? 'open' : ''}`}></span>
                <span className={`hamburger-bar ${open ? 'open' : ''}`}></span>
                <span className={`hamburger-bar ${open ? 'open' : ''}`}></span>
            </button>
            {/* Sidebar menu capsule: always visible on desktop, toggled on mobile */}
            <div className={`sidebar-wrapper d-flex ${open ? 'show-menu' : ''} d-lg-flex ${open ? '' : 'd-none d-lg-flex'}`}>
                <div className="sidebar-menu-capsule py-xxl-20 py-sm-15 py-10 px-6">
                    <div className="d-grid gap-sm-12 gap-8 sidebar-menu-items text-center">
                        {menuItems.map((item) => (
                            <div key={item.href} className="p-1">
                                <Link
                                    href={item.href}
                                    className={`menu-link transition-all ${isActive(item.href) ? 'active-menu' : ''}`}
                                    title={item.label}
                                    onClick={() => setOpen(false)}
                                >
                                    <i
                                        className={`${item.icon.startsWith('ti') ? 'ti ' + item.icon : item.icon}`}
                                        style={{
                                            fontSize: '36px',
                                            color: isActive(item.href) ? '#ff8c00' : 'rgba(255, 255, 255, 0.4)',
                                            textShadow: isActive(item.href)
                                                ? '0 0 10px #ff8c00, 0 0 20px #ff4500, 0 0 30px #ff8c00'
                                                : undefined,
                                            transition: 'all 0.3s ease',
                                        }}
                                    ></i>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                .sidebar {
                    background: transparent !important;
                    border: none !important;
                    box-shadow: none !important;
                    position: relative;
                }
                .sidebar-hamburger {
                    background: #1a1a1a;
                    border: none;
                    border-radius: 12px;
                    padding: 12px 16px;
                    margin: 16px 0 0 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    z-index: 100;
                }
                .hamburger-bar {
                    width: 32px;
                    height: 4px;
                    background: #ff8c00;
                    border-radius: 2px;
                    transition: all 0.3s;
                }
                .hamburger-bar.open:nth-child(1) {
                    transform: translateY(8px) rotate(45deg);
                }
                .hamburger-bar.open:nth-child(2) {
                    opacity: 0;
                }
                .hamburger-bar.open:nth-child(3) {
                    transform: translateY(-8px) rotate(-45deg);
                }
                .sidebar-wrapper {
                    transition: all 0.3s;
                }
                .show-menu {
                    display: flex !important;
                    position: absolute;
                    top: 60px;
                    left: 0;
                    z-index: 99;
                }
                .sidebar-menu-capsule {
                    background: #1a1a1a;
                    border-radius: 100px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                    display: inline-block;
                    margin-left: 15px;
                    margin-top: 15px;
                }
                .menu-link {
                    color: rgba(255, 255, 255, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 70px !important;
                    height: 70px !important;
                    min-width: 70px !important;
                    border-radius: 50% !important;
                    position: relative;
                    border: none !important;
                    background: transparent !important;
                }
                .active-menu {
                    background: transparent !important;
                    color: #ff8c00 !important;
                    border: none !important;
                    box-shadow: none !important;
                }
                .menu-link:hover {
                    color: #fff !important;
                    background: rgba(255, 140, 0, 0.4) !important;
                    border: none !important;
                    box-shadow: 0 0 15px rgba(255, 140, 0, 0.3) !important;
                }
                .menu-link:hover i {
                    text-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
                    transform: scale(1.1);
                }
                .transition-all {
                    transition: all 0.3s ease;
                }
                @media (min-width: 992px) {
                    .sidebar-hamburger {
                        display: none !important;
                    }
                    .sidebar-wrapper {
                        display: flex !important;
                        position: static !important;
                    }
                }
            `}</style>
        </aside>
    );
}
