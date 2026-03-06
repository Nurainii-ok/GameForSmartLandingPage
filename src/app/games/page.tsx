import type { Metadata } from "next";
import GamesView from "@/components/features/games/GamesView";

export const metadata: Metadata = {
    title: 'Games | GameForSmart 2026',
    description: 'Jelajahi berbagai game interaktif dan edukatif di GameForSmart 2026.',
};

export default function GamesPage() {
    return <GamesView />;
}
