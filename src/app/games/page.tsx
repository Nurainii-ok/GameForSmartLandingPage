import type { Metadata } from "next";
import GamesView from "@/components/features/games/GamesView";

export const metadata: Metadata = {
    title: 'Permainan',
    description: 'Jelajahi berbagai game interaktif dan edukatif di GameForSmart.',
};

export default function GamesPage() {
    return <GamesView />;
}
