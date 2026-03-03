import Link from 'next/link';

interface GameCardProps {
    title: string;
    image: string;
    href: string;
}

export default function GameCard({ title, image, href }: GameCardProps) {
    return (
        <div className="game-card-wrapper mx-auto">
            <Link href={href} className="text-decoration-none">
                <div className="game-card mb-5 p-2">
                    <div className="game-card-border"></div>
                    <div className="game-card-border-overlay"></div>
                    <div className="game-img">
                        <img className="w-100 h-100" src={image} alt={title} />
                    </div>
                    <div className="game-link d-center">
                        <div className="btn2">
                            <i className="ti ti-arrow-right fs-2xl"></i>
                        </div>
                    </div>
                </div>
                <h4 className="game-title mb-0 tcn-1 cursor-scale growDown2 title-anim text-center">{title}</h4>
            </Link>
        </div>
    );
}
