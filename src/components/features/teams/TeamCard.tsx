import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TeamCardProps {
  id: number;
  name: string;
  logo: string;
  playersCount: string;
  language: string;
  slots: string;
  members: string[];
}

export default function TeamCard({
  id,
  name,
  logo,
  playersCount,
  language,
  slots,
  members,
}: TeamCardProps) {
  return (
    <div
      className="team-card gap-6 p-xxl-8 p-4 bgn-4 box-style alt-box"
      data-tilt
    >
      <div className="team-thumb">
        <img className="w-100 rounded-circle" src={logo} alt="team" />
      </div>
      <div className="team-info w-100">
        <div className="title-area d-flex gap-5 align-items-end mb-5">
          <Link href={`/teams/${id}`}>
            <h3 className="tcn-1 cursor-scale growDown title-anim">{name}</h3>
          </Link>
          <span className="tcn-6">{slots}</span>
        </div>
        <div className="player-info d-flex gap-6 align-items-center mb-6">
          <div className="d-flex gap-3 align-items-center">
            <i className="ti ti-users fs-2xl"></i>
            <span className="tcn-6">{playersCount}</span>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <i className="ti ti-world fs-2xl"></i>
            <span className="tcn-6">{language}</span>
          </div>
        </div>
        <div className="d-between justify-content-center justify-content-xl-between flex-wrap w-100 gap-xxl-6 gap-3">
          <ul className="player-lists d-flex align-items-center">
            {members.slice(0, 4).map((member, idx) => (
              <li key={idx} className="rounded-circle overflow-hidden me-n4">
                <img src={member} alt="player" />
              </li>
            ))}
            {members.length > 4 && (
              <li className="rounded-circle overflow-hidden heading-font fs-base">
                99+
              </li>
            )}
          </ul>
          <Button
            asChild
            className="rounded-full px-8 py-5 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-btn hover-lift text-nowrap border-none z-2"
          >
            <Link href={`/teams/${id}`}>Request to join</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
