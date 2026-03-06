const fs = require('fs');
const path = require('path');

const replacements = {
  'Header': '@/components/shared/Header',
  'Footer': '@/components/shared/Footer',
  'Sidebar': '@/components/shared/Sidebar',
  'ConnectWalletModal': '@/components/shared/ConnectWalletModal',
  'Preloader': '@/components/shared/Preloader',
  'Breadcrumbs': '@/components/shared/Breadcrumbs',
  'NotificationArea': '@/components/shared/NotificationArea',
  'Banner': '@/components/features/home/Banner',
  'FeaturesSection': '@/components/features/home/FeaturesSection',
  'GamesSection': '@/components/features/home/GamesSection',
  'StatisticsSection': '@/components/features/home/StatisticsSection',
  'CTA': '@/components/features/home/CTA',
  'CompetitionDetailView': '@/components/features/competitions/CompetitionDetailView',
  'TournamentHexCard': '@/components/features/competitions/TournamentHexCard',
  'GamesView': '@/components/features/games/GamesView',
  'GameCard': '@/components/features/games/GameCard',
  'TournamentCard': '@/components/features/tournaments/TournamentCard',
  'TournamentSection': '@/components/features/tournaments/TournamentSection',
  'TeamCard': '@/components/features/teams/TeamCard',
  'UserAccountPopup': '@/components/features/auth/UserAccountPopup',
  'RegistrationView': '@/components/features/auth/RegistrationView',
  'AboutView': '@/components/features/about/AboutView',
  'ContactView': '@/components/features/contact/ContactView',
  'HeroSection': '@/components/features/home/HeroSection',
  'WinnersList': '@/components/features/home/WinnersList'
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts')) {
      callback(path.join(dirPath));
    }
  });
}

walkDir('src', (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  
  for (const [componentName, newPath] of Object.entries(replacements)) {
    // Matches relative imports like "./Header", "../Header", "../../Header", etc.
    const regex1 = new RegExp(`from\\s+['"](\\.\\/|\\.\\.\\/)+${componentName}['"]`, 'g');
    const regex2 = new RegExp(`import\\s+${componentName}\\s+from\\s+['"](\\.\\/|\\.\\.\\/)+${componentName}['"]`, 'g');
    
    // Replace them with the absolute alias path
    newContent = newContent.replace(regex1, `from "${newPath}"`);
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
});
