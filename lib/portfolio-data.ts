export const profileStats = {
  totalViews: "1.4M",
  totalViewsNum: 1396930,
  totalVideos: 58,
  totalLikes: "23.17K",
  totalReviews: 7,
  rating: "10/10",
};

export interface Channel {
  id: string;
  name: string;
  avatar: string;
  ytLink: string | null;
  subscribers: string;
  subscribersNum: number;
  views: string;
  viewsNum: number;
  videos: number;
  niche: string;
  verified: boolean;
  services: string[];
  description: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  result?: string;
}

export const channels: Channel[] = [
  {
    id: "415944",
    name: "Pit Lane",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/rZd8h0BRFV19wAPw4rqHvMY2hl7L3deiXwxQzWfl.jpg",
    ytLink: "https://youtube.com/@pitlane598",
    subscribers: "3K",
    subscribersNum: 3000,
    views: "1.18M",
    viewsNum: 1176974,
    videos: 57,
    niche: "Motorsports",
    verified: true,
    services: ["Video Editing", "Script Writing", "Thumbnail Design", "Research"],
    description: "Premium motorsports channel covering iconic NHRA moments, legendary drivers, and the drama behind drag racing history.",
    featured: true,
    challenge: "Build an engaging motorsports channel targeting US & UK audiences from scratch, with no prior brand presence.",
    solution: "Created high-retention documentary-style scripts, cinematic edits with motion graphics, and A/B-tested thumbnails targeting motorsports enthusiasts.",
    result: "Grew to 3K subscribers and 1.18M total views across 57 produced videos — with single videos hitting 170K+ views.",
  },
  {
    id: "415948",
    name: "Assembly Flow",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/wqLgwiOkWhh6TxR0irGLhfMTHNKeeP3SofggL0QE.jpg",
    ytLink: null,
    subscribers: "2.13K",
    subscribersNum: 2130,
    views: "203.72K",
    viewsNum: 203721,
    videos: 112,
    niche: "Manufacturing",
    verified: false,
    services: ["Video Editing", "Research", "Script Writing", "Thumbnail Design"],
    description: "Manufacturing & industrial process channel covering how iconic products are made — from audio equipment to precision machinery.",
  },
  {
    id: "409120",
    name: "Food Facts Canada",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/ieVVhWtVb7vNAOyWez2Jmx1saMXWfikYvj8rAJW7.jpg",
    ytLink: "https://youtube.com/@foodfactscanada",
    subscribers: "1.27K",
    subscribersNum: 1270,
    views: "74.72K",
    viewsNum: 74721,
    videos: 56,
    niche: "Food & Nutrition",
    verified: true,
    services: ["Channel Management", "Video Editing", "Script Writing", "Thumbnail Design", "Upload Scheduling"],
    description: "Canadian food documentary channel covering nutrition facts, food science, and culinary history.",
  },
  {
    id: "438782",
    name: "Silicon Unmasked",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/mSRHLlCrPBSZhYtTB53xzu8woLYA8T1hVs8qrog1.jpg",
    ytLink: "https://youtube.com/@siliconunmasked",
    subscribers: "1.03K",
    subscribersNum: 1030,
    views: "150.47K",
    viewsNum: 150472,
    videos: 31,
    niche: "Technology",
    verified: true,
    services: ["Video Editing", "Thumbnail Design", "Script Writing", "Channel Management"],
    description: "Tech documentary channel uncovering the stories behind Silicon Valley companies, entrepreneurs, and industry disruptions.",
  },
  {
    id: "415959",
    name: "Clint Eastwood: The American Legend",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/nJvbD2KZPDaVQ75QfnBeGMi7D49WUCQct7Mpx4jc.jpg",
    ytLink: null,
    subscribers: "1K",
    subscribersNum: 1000,
    views: "237.63K",
    viewsNum: 237631,
    videos: 70,
    niche: "Entertainment",
    verified: false,
    services: ["Video Editing", "Research", "Script Writing", "Thumbnail Design"],
    description: "Celebrity documentary channel dedicated to the life, career, and legacy of the iconic American actor and filmmaker.",
  },
  {
    id: "440816",
    name: "Modern Mysteries",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/jmzdEeP3n4TkD5SWvAanrHsZ7V5vKgeJG5ibMn1H.jpg",
    ytLink: null,
    subscribers: "1.01K",
    subscribersNum: 1010,
    views: "69.99K",
    viewsNum: 69987,
    videos: 41,
    niche: "Mystery & Documentary",
    verified: false,
    services: ["Video Editing", "Script Writing", "Thumbnail Design", "Research"],
    description: "Mystery and unsolved cases documentary channel covering historical events, unexplained phenomena, and crime stories.",
  },
  {
    id: "415946",
    name: "With Dr. Sarah",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/HlCDYWkC4RVTGadW525ZOsdlfskmKUKeIDjCudzP.jpg",
    ytLink: "https://youtube.com/@withdrsarah",
    subscribers: "989",
    subscribersNum: 989,
    views: "45",
    viewsNum: 45,
    videos: 16,
    niche: "Health & Medicine",
    verified: true,
    services: ["Video Editing", "Thumbnail Design", "Script Writing", "Voiceover Production"],
    description: "Health and wellness channel providing evidence-based medical insights, nutrition advice, and wellness strategies.",
  },
  {
    id: "415942",
    name: "Idiot Sandwich",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/KRN07pcDVFUvIPtWOjesznvhkK083lf6ORYtQp0K.jpg",
    ytLink: null,
    subscribers: "615",
    subscribersNum: 615,
    views: "116.5K",
    viewsNum: 116501,
    videos: 14,
    niche: "Entertainment",
    verified: false,
    services: ["Video Editing", "Script Writing", "Thumbnail Design"],
    description: "Entertainment and comedy channel featuring viral cooking show moments, kitchen drama, and culinary entertainment.",
  },
];

export interface PortfolioVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  url: string;
  niche: string;
}

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: "4l7xD9m1wNk",
    title: "Most Hated Champion: This Car PISSED OFF The Entire NHRA",
    thumbnail: "https://i.ytimg.com/vi/4l7xD9m1wNk/mqdefault.jpg",
    channelName: "Pit Lane",
    channelAvatar: "https://storage.ytjobs.co/channel_thumbnails/rZd8h0BRFV19wAPw4rqHvMY2hl7L3deiXwxQzWfl.jpg",
    views: "171.09K",
    url: "https://youtube.com/watch?v=4l7xD9m1wNk",
    niche: "Motorsports",
  },
  {
    id: "4vaSa1CJKNs",
    title: "How Bose S1 Pro Speakers Are Made — Inside a Portable PA Speaker Factory",
    thumbnail: "https://i.ytimg.com/vi/4vaSa1CJKNs/mqdefault.jpg",
    channelName: "Assembly Flow",
    channelAvatar: "https://storage.ytjobs.co/channel_thumbnails/wqLgwiOkWhh6TxR0irGLhfMTHNKeeP3SofggL0QE.jpg",
    views: "210.96K",
    url: "https://youtube.com/watch?v=4vaSa1CJKNs",
    niche: "Manufacturing",
  },
  {
    id: "11Z3m5WH2ZM",
    title: "Most Hated Champion: This Car PISSED OFF The Entire NHRA",
    thumbnail: "https://i.ytimg.com/vi/11Z3m5WH2ZM/mqdefault.jpg",
    channelName: "Pit Lane",
    channelAvatar: "https://storage.ytjobs.co/channel_thumbnails/rZd8h0BRFV19wAPw4rqHvMY2hl7L3deiXwxQzWfl.jpg",
    views: "106.26K",
    url: "https://youtube.com/watch?v=11Z3m5WH2ZM",
    niche: "Motorsports",
  },
  {
    id: "GOvemrsBv-k",
    title: "The Shocking Truth Behind Don Garlits' Deadly Swamp Rat XIII",
    thumbnail: "https://i.ytimg.com/vi/GOvemrsBv-k/mqdefault.jpg",
    channelName: "Pit Lane",
    channelAvatar: "https://storage.ytjobs.co/channel_thumbnails/rZd8h0BRFV19wAPw4rqHvMY2hl7L3deiXwxQzWfl.jpg",
    views: "107.52K",
    url: "https://youtube.com/watch?v=GOvemrsBv-k",
    niche: "Motorsports",
  },
  {
    id: "MmNvKUPmot8",
    title: "Most Hated Champion: This Car PISSED OFF The Whole NHRA",
    thumbnail: "https://i.ytimg.com/vi/MmNvKUPmot8/mqdefault.jpg",
    channelName: "Pit Lane",
    channelAvatar: "https://storage.ytjobs.co/channel_thumbnails/rZd8h0BRFV19wAPw4rqHvMY2hl7L3deiXwxQzWfl.jpg",
    views: "101.76K",
    url: "https://youtube.com/watch?v=MmNvKUPmot8",
    niche: "Motorsports",
  },
  {
    id: "7h2kiczr368",
    title: "When Chefs Get Served KARMA In Hell's Kitchen",
    thumbnail: "https://i.ytimg.com/vi/7h2kiczr368/mqdefault.jpg",
    channelName: "Idiot Sandwich",
    channelAvatar: "https://storage.ytjobs.co/channel_thumbnails/KRN07pcDVFUvIPtWOjesznvhkK083lf6ORYtQp0K.jpg",
    views: "83.25K",
    url: "https://youtube.com/watch?v=7h2kiczr368",
    niche: "Entertainment",
  },
];

export interface Review {
  reviewer: string;
  avatar: string;
  subscribers: string;
  views: string;
  videos: number;
  rating: number;
  body: string;
  date: string;
  ytLink: string | null;
}

export const reviews: Review[] = [
  {
    reviewer: "Pit Lane",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/rZd8h0BRFV19wAPw4rqHvMY2hl7L3deiXwxQzWfl.jpg",
    subscribers: "3K",
    views: "1.18M",
    videos: 57,
    rating: 10,
    body: "Speedy, Competent and very friendly. The quality of production was exactly what we needed to get our channel off the ground.",
    date: "Feb 2026",
    ytLink: "https://youtube.com/@pitlane598",
  },
  {
    reviewer: "Silicon Unmasked",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/mSRHLlCrPBSZhYtTB53xzu8woLYA8T1hVs8qrog1.jpg",
    subscribers: "1.03K",
    views: "150.47K",
    videos: 31,
    rating: 10,
    body: "He truly understands what high-quality content looks like and doesn't just 'edit videos' — he builds engaging, audience-focused content that performs.",
    date: "Apr 2026",
    ytLink: "https://youtube.com/@siliconunmasked",
  },
  {
    reviewer: "Food Facts Canada",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/ieVVhWtVb7vNAOyWez2Jmx1saMXWfikYvj8rAJW7.jpg",
    subscribers: "1.27K",
    views: "74.72K",
    videos: 56,
    rating: 10,
    body: "Shehroz has been an all-rounder for us. He has managed our channel and everything. 100% Recommended!",
    date: "Feb 2026",
    ytLink: "https://youtube.com/@foodfactscanada",
  },
  {
    reviewer: "With Dr. Sarah",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/HlCDYWkC4RVTGadW525ZOsdlfskmKUKeIDjCudzP.jpg",
    subscribers: "989",
    views: "—",
    videos: 16,
    rating: 10,
    body: "Working with Shehroz has been effortless. He turns briefs into clean, punchy edits and keeps videos, thumbnails, scripts, and voiceovers in sync. Fast, dependable, and cool under deadline pressure.",
    date: "Feb 2026",
    ytLink: "https://youtube.com/@withdrsarah",
  },
  {
    reviewer: "Assembly Archive",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/D1XR8gw6HKWxl1LpCM52MpdCdlvblPStrlo9pBYo.jpg",
    subscribers: "102",
    views: "23.23K",
    videos: 26,
    rating: 10,
    body: "Shehroz is a highly reliable and skilled video editor who understands exactly how to create content that performs on YouTube. Clean edits with strong pacing and great retention focus.",
    date: "Mar 2026",
    ytLink: "https://youtube.com/@assemblyarchive",
  },
  {
    reviewer: "RG Media",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/EFIVUDNQ8RpvGwTX6RBRIobevGAlLkxi9qXUG8ag.jpg",
    subscribers: "89",
    views: "21.57K",
    videos: 76,
    rating: 10,
    body: "What stood out the most was his attention to detail and ability to take a basic idea and turn it into something professional and polished. Delivers on time, every time.",
    date: "Apr 2026",
    ytLink: "https://youtube.com/@rgmedia-og",
  },
  {
    reviewer: "Republic Review",
    avatar: "https://storage.ytjobs.co/channel_thumbnails/qIyzK5eYUfFQhZfziyhjhFrrYtvhyqVoGJe2LAZr.jpg",
    subscribers: "62",
    views: "3.23K",
    videos: 13,
    rating: 10,
    body: "If you're looking for someone reliable who actually cares about results — not just finishing the task — Shehroz is the right choice. Highly recommended.",
    date: "Apr 2026",
    ytLink: "https://youtube.com/@republicreview_og",
  },
];
