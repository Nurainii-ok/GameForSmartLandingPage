import Link from "next/link";

interface TournamentHexCardProps {
  id: number;
  title: string;
  type: string;
  image: string;
  status: string;
  prizeMoney?: string;
  ticketFee?: string;
  date?: string;
  teams?: string;
  players?: string;
  description?: string;
  slug?: string;
  isDetailed?: boolean;
}

export default function TournamentHexCard({
  id,
  title,
  type,
  image,
  status,
  prizeMoney,
  ticketFee,
  date,
  teams,
  players,
  slug,
  isDetailed = false,
}: TournamentHexCardProps) {
  return (
    <div className="game-card-wrapper position-relative">
      <Link
        href={`/competitions/${slug || id}`}
        className="d-flex align-items-center gap-4 text-decoration-none h-100"
      >
        <div className="game-card p-1 w-[120px] h-[180px] shrink-0">
          <div className="game-card-border"></div>
          <div className="game-card-border-overlay"></div>
          <div className="game-img h-full">
            <img
              className="w-100 h-100 object-fit-cover"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="tournament-content flex-grow-1">
          <h4 className="game-title text-base sm:text-lg font-bold text-white mb-1">
            {title}
          </h4>
          <p className="tcn-6 fs-sm mb-2">{type}</p>
          {isDetailed && (
            <div className="detailed-info d-flex flex-column gap-1">
              {prizeMoney && (
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-currency-dollar tcp-2 fs-sm"></i>
                  <span className="tcn-1 fs-xs">Prize: {prizeMoney}</span>
                </div>
              )}
              {teams && (
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-users tcn-6 fs-sm"></i>
                  <span className="tcn-6 fs-xs">Players: {teams}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
