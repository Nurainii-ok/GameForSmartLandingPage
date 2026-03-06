"use client";
import { useState } from "react";
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import TournamentCard from "@/components/features/tournaments/TournamentCard";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Footer from "@/components/shared/Footer";
import { tournamentsData } from "@/data/tournamentsData";

export default function TournamentsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredTournaments = tournamentsData.filter((t) => {
    return activeTab === "All" || t.status === activeTab;
  });
  return (
    <>
      <Header />
      <main
        className="main-container container-fluid d-flex align-items-start pt-sm-20 pt-15 pb-20 px-0 position-relative"
        style={{ overflow: "visible" }}
      >
        <Sidebar />
        <article className="main-content mt-lg-10">
          <section className="tournament-banner mb-lg-15 mb-sm-10 mb-4 pb-lg-10 pb-sm-6">
            <div className="container-fluid">
              <div className="parallax-banner-area parallax-container">
                <img
                  className="w-100 h-100 rounded-5 parallax-img"
                  src="/assets/img/tournament-banner.png"
                  alt="tournament banner"
                />
              </div>
            </div>
          </section>

          <section className="tournament-section pb-120">
            <div className="tournament-wrapper alt">
              <div className="container-fluid px-lg-15 px-md-10 px-6">
                <Breadcrumbs />
                <div className="row justify-content-between align-items-end mb-8">
                  <div className="col">
                    <h1 className="display-four tcn-1 cursor-scale growUp title-anim text-uppercase">
                      Competition
                    </h1>
                  </div>
                </div>
                <div className="singletab tournaments-tab">
                  <div className="d-between gap-6 flex-wrap mb-lg-15 mb-sm-10 mb-6">
                    <ul className="tablinks d-flex flex-wrap align-items-center gap-3">
                      {["All", "Active", "Upcoming", "Finished"].map((tab) => (
                        <li
                          key={tab}
                          className={`nav-links ${activeTab === tab ? "active" : ""}`}
                        >
                          <button
                            className="tablink py-sm-3 py-2 px-sm-8 px-6 rounded-pill tcn-1"
                            onClick={() => setActiveTab(tab)}
                          >
                            {tab}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tabcontents">
                    <div className="tabitem active">
                      <div className="row justify-content-md-start justify-content-center g-6">
                        {filteredTournaments.length > 0 ? (
                          filteredTournaments.map((tournament) => (
                            <div
                              key={tournament.id}
                              className="col-xxl-3 col-lg-4 col-md-6 col-sm-8"
                            >
                              <TournamentCard {...tournament} />
                            </div>
                          ))
                        ) : (
                          <div className="col-12 text-center py-20">
                            <h3 className="tcn-1">
                              No competitions found for "{activeTab}"
                            </h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
