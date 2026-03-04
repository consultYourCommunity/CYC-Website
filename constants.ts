
export const ASSETS = {
  HOME_ICON: "https://static.wixstatic.com/media/67f154_72ee133b90dd436ba11e297df4a716fc~mv2.png/v1/fill/w_106,h_110,al_c,lg_1,q_85,enc_avif,quality_auto/67f154_72ee133b90dd436ba11e297df4a716fc~mv2.png",
  HERO_BG: "https://static.wixstatic.com/media/67f154_87fd3fcccbf34a4b98c0a15aa2342d4e~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/67f154_87fd3fcccbf34a4b98c0a15aa2342d4e~mv2.jpg",
  ABOUT_BG: "https://static.wixstatic.com/media/67f154_0ba71a0ffdd74a61a43346aa185d1f16~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_90,enc_avif,quality_auto/67f154_0ba71a0ffdd74a61a43346aa185d1f16~mv2.jpg",
  ABOUT_HERO_IMG: "https://static.wixstatic.com/media/67f154_d0ccc8faa5b14350834c0a3191707fa0~mv2.jpg/v1/fill/w_960,h_1080,al_c,q_85,enc_avif,quality_auto/67f154_d0ccc8faa5b14350834c0a3191707fa0~mv2.jpg",
  LINKEDIN_ICON: "https://static.wixstatic.com/media/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_7dcffe5daf2944b7be0a46ac6d472634~mv2.png",
  INSTAGRAM_ICON: "https://static.wixstatic.com/media/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png/v1/fill/w_48,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_603340b7bcb14e7785c7b65b233cd9f9~mv2.png",
  EMAIL_ICON: "https://static.wixstatic.com/media/67f154_362b24a1d4e4486f84b0fe86e11457b1~mv2.png/v1/fill/w_25,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/67f154_362b24a1d4e4486f84b0fe86e11457b1~mv2.png",
  TEAM_PHOTO_KALIN: "https://static.wixstatic.com/media/67f154_648e6d1c55d74455868f4b743a768f55~mv2.jpg/v1/crop/x_518,y_1395,w_2550,h_2550/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5152_JPG.jpg",
  TEAM_PHOTO_FAITH: "https://static.wixstatic.com/media/67f154_f748a8d9f5fb4dfb8574b91dad6b2fb8~mv2.jpg/v1/crop/x_306,y_1177,w_2845,h_2845/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5164_JPG.jpg",
  TEAM_PHOTO_JESSIE: "https://static.wixstatic.com/media/67f154_92762ea7dfea40048b570701e0a7c1d8~mv2.jpg/v1/crop/x_234,y_980,w_2935,h_2938/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5149_JPG.jpg",
  TEAM_PHOTO_KRYSTAL: "https://static.wixstatic.com/media/67f154_5c5861ca64054028a4b01ead5c3487a8~mv2.jpg/v1/crop/x_496,y_1196,w_2845,h_2845/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5201_JPG.jpg",
  TEAM_PHOTO_ELENA: "https://static.wixstatic.com/media/67f154_fc9144ce4698456999aba69d92e1c827~mv2.jpg/v1/crop/x_73,y_1048,w_3293,h_3293/fill/w_242,h_242,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5168_JPG.jpg",
};

export const TEAM_MEMBERS = [
  {
    name: "Kalin Chen",
    title: "President",
    photo: ASSETS.TEAM_PHOTO_KALIN,
    email: "mailto:kalin.chen@consultyourcommunity.org",
    linkedin: "https://www.linkedin.com/in/kalin-chen/",
  },
  {
    name: "Faith Kim",
    title: "VP of Engagement",
    photo: ASSETS.TEAM_PHOTO_FAITH,
    email: "mailto:faith.kim@consultyourcommunity.org",
    linkedin: "https://www.linkedin.com/in/gahng-kim-a12397242/",
  },
  {
    name: "Jessie Chen",
    title: "VP of External",
    photo: ASSETS.TEAM_PHOTO_JESSIE,
    email: "mailto:jessie.chen1@consultyourcommunity.org",
    linkedin: "https://www.linkedin.com/in/jessie-chen12/",
  },
  {
    name: "Krystal Nguyen",
    title: "VP of Internal",
    photo: ASSETS.TEAM_PHOTO_KRYSTAL,
    email: "mailto:krystal.nguyen@consultyourcommunity.org",
    linkedin: "https://www.linkedin.com/in/krystal-nguyen2006/",
  },
  {
    name: "Elena George",
    title: "VP of Finance",
    photo: ASSETS.TEAM_PHOTO_ELENA,
    email: "mailto:elena.george@consultyourcommunity.org",
    linkedin: "https://www.linkedin.com/in/elena-george-b66b2828b/",
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Our Team", href: "team" },
  { label: "Clients", href: "clients" },
  { label: "Apply", href: "apply" },
];

export const STATS_DATA = [
  {
    value: "20+",
    description: "Chapters Nationwide"
  },
  {
    value: "100+",
    description: "Small Businesses in an Academic Year"
  },
  {
    value: "1,000,000+",
    description: "Hours of pro bono consulting dedicated to directly helping small businesses"
  }
];

export const WHAT_WE_DO_DATA = [
  {
    title: "Semester-Long Projects",
    subtitle: "Skills-Based Consulting",
    description: "Through semester-long, skills-based projects, we mobilize Penn State students to leverage their academic knowledge, skills, and professional networks to drive meaningful change. By combining education with community engagement, we help local businesses grow while developing the next generation of socially conscious leaders. Whether you're a student looking to make an impact, or a business looking for support, CYC Penn State is here to build lasting partnerships that drive real change.",
    color: "terracotta"
  },
  {
    title: "Community Engagement",
    subtitle: "Impact-Driven Consulting",
    description: "We engage with the community to drive impactful consulting projects that benefit small businesses and empower student consultants. Our focus is on creating lasting partnerships and driving real change through education and community engagement.",
    color: "blue"
  },
  {
    title: "Professional Development",
    subtitle: "Empowering Future Leaders",
    description: "We focus on developing the next generation of socially conscious leaders by providing opportunities for professional growth and real-world consulting experience. Our aim is to develop future leaders who are committed to driving community impact and making a difference in the business world.",
    color: "terracotta"
  },
  {
    title: "Sustainable Growth",
    subtitle: "Building Lasting Partnerships",
    description: "We are committed to building lasting partnerships that drive sustainable growth for small businesses and student consultants. Our mission is to create a movement that empowers both small business owners and student consultants, leading to a sustainable and impactful consulting experience.",
    color: "blue"
  }
];

export const VALUES_DATA = [
  {
    title: "INTEGRITY",
    description: "We lead with integrity. That means being honest, transparent, and accountable in everything we do, whether that's delivering client recommendations or working together as a team. Trust is the foundation of strong relationships, and we strive to earn it every day.",
    icon: "integrity"
  },
  {
    title: "EXCELLENCE",
    description: "We hold ourselves to the highest standards. We're students, but we approach our projects with the same professionalism as top consulting firms. Every recommendation we give should be thoughtful, practical, and impactful.",
    icon: "excellence"
  },
  {
    title: "TEAMWORK",
    description: "We bring together students from different backgrounds and perspectives, and that diversity makes our solutions stronger. Collaboration is how we grow, learn, and succeed together.",
    icon: "teamwork"
  },
  {
    title: "EMPOWERMENT",
    description: "We give people the tools and confidence they need to succeed, not just our clients, but also our members. We want small businesses to feel equipped to grow, and we want our members to leave this organization feeling more capable, confident, and ready to lead.",
    icon: "empowerment"
  }
];

// Clients page data
export const SERVICE_CATEGORIES = [
  {
    title: "STRATEGIC &\nMARKET\nANALYSIS",
    icon: "strategy",
    items: [
      "Industry Trends & Competitive Landscape",
      "Business Model Evaluation",
      "Growth & Expansion Planning",
      "Product Diversification",
    ],
  },
  {
    title: "FINANCIAL\nSTRATEGY",
    icon: "financial",
    items: [
      "Financial Analysis",
      "Pricing & Revenue Optimization",
      "Cost Reduction Strategies",
    ],
  },
  {
    title: "DATA &\nANALYTICS",
    icon: "data",
    items: [
      "Data Collection & Visualization",
      "Customer Insights & Statistical Analysis",
      "Performance Metrics & Reporting",
    ],
  },
  {
    title: "MARKETING,\nBRANDING &\nPARTNERSHIPS",
    icon: "marketing",
    items: [
      "Value Proposition & Brand Identity",
      "Social Media & Advertising Strategy",
      "Strategic Partnerships & Outreach",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "The research your team conducted for my business was incredibly informative and provided valuable insights. I truly appreciated the effort and professionalism throughout the process.",
    author: "Andy Lee",
    company: "TastyK",
    image:
      "https://static.wixstatic.com/media/67f154_cd23250f527e48b4a6541e17a1f8557a~mv2.png/v1/fill/w_449,h_338,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/67f154_cd23250f527e48b4a6541e17a1f8557a~mv2.png",
  },
];

export const CONTACT_INFO = {
  campusPhoto:
    "https://static.wixstatic.com/media/67f154_e8cdda4507b24fea8c1d47b67851588d~mv2.jpg/v1/fill/w_795,h_482,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/67f154_e8cdda4507b24fea8c1d47b67851588d~mv2.jpg",
  formLink: "https://forms.gle/upAzttJCjmNFr1kk6",
  email: "pennstate@consultyourcommunity.org",
};

// Apply page data
export const APPLY_PAGE_DATA = {
  interestFormLink: "https://forms.gle/rgvAVphHon9Ec2rt7",
  coffeeChatFormLink: "https://forms.gle/8wupnp7LseZku9P69",
};

