"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TournamentCard from './TournamentCard';
import { useSearch } from '@/context/SearchContext';
import { tournamentsData } from '@/data/tournamentsData';

export default function TournamentSection() {
    const { searchQuery } = useSearch();
    const [activeTab, setActiveTab] = useState('All');

    const filteredTournaments = tournamentsData.filter(t => {
        const matchesTab = activeTab === 'All' || t.status === activeTab;
        const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.type.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <section className="tournament-section game-section pb-10">
            <div className="tournament-wrapper alt">
                <div className="container-fluid px-lg-15 px-md-10 px-6">
                    <div className="row justify-content-between align-items-end mb-8">
                        <div className="col">
                            <Link href="/competitions">
                                <h2 className="display-four tcn-1 cursor-scale growUp title-anim" style={{ fontSize: 'calc(1.1rem + 1vw)' }}>Competitions</h2>
                            </Link>
                        </div>
                    </div>
                    <div className="singletab tournaments-tab">
                        <div className="d-between gap-6 flex-wrap mb-lg-8 mb-sm-6 mb-4">
                            <ul className="tablinks d-flex flex-wrap align-items-center gap-3">
                                {['All', 'Active', 'Upcoming', 'Finished'].map((tab) => (
                                    <li key={tab} className={`nav-links ${activeTab === tab ? 'active' : ''}`}>
                                        <button
                                            className="tablink py-sm-3 py-2 px-sm-8 px-6 rounded-pill tcn-1"
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="col-auto">
                                <Link href="/competitions" className="btn-half-border position-relative d-inline-block py-2 bgp-1 px-6 rounded-pill text-nowrap">
                                    View More
                                </Link>
                            </div>
                        </div>
                        <div className="tabcontents">
                            <div className="tabitem active">
                                <div className="row justify-content-start g-md-6 g-4">
                                    {filteredTournaments.length > 0 ? (
                                        filteredTournaments.map((tournament) => (
                                            <div key={tournament.id} className="col-xxl-3 col-lg-4 col-md-6 col-sm-11 col-12">
                                                <TournamentCard {...tournament} isDetailed />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-12 text-center py-20">
                                            <h3 className="tcn-1">No competitions found for "{searchQuery}"</h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
