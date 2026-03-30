export interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string[];
  excerpt: string;
  image: string;
  slug: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    title: "Bagaimana Teknologi Mengubah Masa Depan Dunia Kerja di 2024",
    author: "Taufik Hidayat",
    date: "16 Oktober 2024",
    category: ["TEKNOLOGI", "BISNIS"],
    excerpt: "Di dunia yang terus berkembang saat ini, mendongeng telah menjadi alat yang ampuh untuk koneksi. Platform unik untuk individu...",
    image: "/assets/img/blog/blog1.png",
    slug: "teknologi-masa-depan-kerja"
  },
  {
    id: 2,
    title: "Masa Depan Pembelajaran: Tren Smart Learning dan AI",
    author: "Siti Aminah",
    date: "29 September 2024",
    category: ["EDUKASI", "TREN"],
    excerpt: "Cari tahu mengapa tahun 2024 diprediksi menjadi tahun penting bagi teknologi pembelajaran dan dampaknya terhadap industri edukasi.",
    image: "/assets/img/blog/blog2.png",
    slug: "tren-smart-learning-ai"
  },
  {
    id: 3,
    title: "Strategi Menang di Arena Esports Nasional",
    author: "Budi Santoso",
    date: "12 September 2024",
    category: ["ESPORTS", "GAME"],
    excerpt: "Kuasai panggung kompetisi dengan strategi pro. Pelajari bagaimana atlet esports papan atas mempersiapkan diri menghadapi turnamen besar.",
    image: "/assets/img/blog/blog3.png",
    slug: "strategi-menang-esports"
  },
  {
    id: 4,
    title: "Meningkatkan Fokus Anak Melalui Game Edukasi",
    author: "Dr. Laila",
    date: "05 September 2024",
    category: ["EDUKASI", "PARENTING"],
    excerpt: "Game tidak selalu buruk. Temukan bagaimana game yang dirancang khusus dapat membantu meningkatkan kognitif dan fokus anak secara menyenangkan.",
    image: "/assets/img/blog/blog2.png",
    slug: "fokus-anak-game-edukasi"
  },
  {
    id: 5,
    title: "Review: Axiom - Game Puzzle Paling Menantang Tahun Ini",
    author: "Admin Game",
    date: "01 September 2024",
    category: ["GAME", "REVIEW"],
    excerpt: "Kami mengupas tuntas mekanisme gameplay Axiom, game yang sedang viral karena tingkat kesulitannya yang membuat ketagihan.",
    image: "/assets/img/blog/blog1.png",
    slug: "review-axiom-puzzle"
  },
  {
    id: 6,
    title: "Membangun Karier di Industri Game Development",
    author: "Kevin Flynn",
    date: "25 Agustus 2024",
    category: ["KARIER", "TEKNOLOGI"],
    excerpt: "Ingin bekerja di industri game? Berikut adalah langkah-langkah konkret yang harus Anda ambil untuk mulai membangun portfolio yang menarik.",
    image: "/assets/img/blog/blog3.png",
    slug: "karier-game-development"
  }
];
