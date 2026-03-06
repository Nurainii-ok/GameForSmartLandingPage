const fs = require('fs');
const path = require('path');

const srcFile = path.resolve('src/components/features/competitions/CompetitionDetailView.tsx');
const tournamentFile = path.resolve('src/components/features/competitions/sections/TournamentDetails.tsx');
const gameFile = path.resolve('src/components/features/competitions/sections/GameDetails.tsx');

const content = fs.readFileSync(srcFile, 'utf8');

// The shared imports and top level stuff:
const imports = `import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from "@/components/shared/Header";
import Sidebar from "@/components/shared/Sidebar";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Link from 'next/link';
import { TournamentInfo } from '@/data/allItemsData';

interface Props {
    tournament: TournamentInfo;
}
`;

const stateAndHelpers = `
    const router = useRouter();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    const CHAR_LIMIT = 200;
    const isLong = tournament.description.length > CHAR_LIMIT;

    const toggleDescription = () => setIsExpanded(!isExpanded);

    const renderDescription = (text) => {
        if (!isLong || isExpanded) {
            return text.split('\\n\\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
            ));
        }
        return <p className="mb-0">{text.substring(0, CHAR_LIMIT)}...</p>;
    };
`;

const tournamentSpecific = `
    const maxQuota = 100;
    const currentRegistered = 64;
    const progressPercent = (currentRegistered / maxQuota) * 100;
    const isFull = currentRegistered >= maxQuota;
`;

// Extract tournament section string (simplified logic using regex or index)
const tournamentStart = content.indexOf('<section className="tournament-details pb-120">');
const tournamentEnd = content.indexOf('</section>', content.lastIndexOf('<!-- RIGHT CONTENT: Premium Info Card -->') > -1 ? content.lastIndexOf('<!-- RIGHT CONTENT: Premium Info Card -->') : tournamentStart) + 10;
// Actually, safely extracting JSX using index is hard due to nested sections.
// Best approach: regex for isTournament block
const tournamentMatch = content.match(/{isTournament && \(\s*([\s\S]*?)\s*\)}\s*{!isTournament/);
const tournamentJSX = tournamentMatch ? tournamentMatch[1] : '';

// For game details, everything from first !isTournament until just before video modal or style
const gameMatch = content.match(/{!isTournament && \(\s*(<section className="game-details-modern[\s\S]*?)<\/main>/);
// Wait, the structure is:
/*
<main>
    <Sidebar />
    <article>
        <div>
           {isTournament && ( ... )}
           {!isTournament && ( ... )}
           {!isTournament && ( ... )}
        </div>
    </article>
</main>
{isVideoModalOpen && ( ... )}
<style jsx>...
*/

// I will just copy the entire component file three times with writeFileSync, but I won't use JS string parsing since it's brittle. Let me just use `run_command` to physically copy the files.
