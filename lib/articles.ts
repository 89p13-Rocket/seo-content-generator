export interface Article {
  slug: string;
  title: string;
  date: string;
  dateISO: string;
  venue: string;
  description: string;
  content: string;
  keywords: string[];
}

export const SITE_URL = "https://news.lique-miami.com";
export const SITE_NAME = "LIQUE Miami — News & Stories";

export const articles: Article[] = [
  {
    slug: "valentines-night-sets-new-records",
    title: "Valentine's Night Sets New Records at the Waterfront",
    date: "February 14, 2026",
    dateISO: "2026-02-14",
    venue: "LIQUE Miami",
    description:
      "An unforgettable evening of love and luxury as LIQUE Miami hosted its most extravagant Valentine's celebration yet, featuring world-class DJs, rose-petal terraces, and a sold-out crowd dancing until dawn.",
    content: `<p>An unforgettable evening of love and luxury as LIQUE Miami hosted its most extravagant Valentine's celebration yet, featuring world-class DJs, rose-petal terraces, and a sold-out crowd dancing until dawn.</p>
<p>The waterfront venue was transformed into a romantic paradise with thousands of roses adorning every surface, candlelit pathways along the bay, and a special menu crafted by our executive chef featuring aphrodisiac-inspired dishes from around the world.</p>
<p>The night reached its peak when internationally acclaimed DJ set the dance floor ablaze with a curated mix of deep house and romantic beats, while couples enjoyed champagne under the stars on the newly redesigned terrace.</p>
<p>With over 800 guests in attendance, the event set a new attendance record for LIQUE Miami and solidified the venue's reputation as Miami's premier destination for unforgettable celebrations.</p>`,
    keywords: [
      "valentines day miami",
      "lique miami valentines",
      "miami nightlife valentines",
      "waterfront restaurant valentines",
      "miami club valentine party",
    ],
  },
  {
    slug: "super-bowl-weekend-afterparty-celebrities",
    title: "Super Bowl Weekend Afterparty Draws A-List Celebrities",
    date: "February 10, 2026",
    dateISO: "2026-02-10",
    venue: "LIQUE Miami",
    description:
      "The biggest names in sports and entertainment converged on LIQUE Miami for an epic Super Bowl weekend celebration that turned the waterfront lounge into the city's most exclusive after-party destination.",
    content: `<p>The biggest names in sports and entertainment converged on LIQUE Miami for an epic Super Bowl weekend celebration that turned the waterfront lounge into the city's most exclusive after-party destination.</p>
<p>From NFL legends to chart-topping musicians, the three-night Super Bowl extravaganza brought an unprecedented level of star power to North Miami Beach. VIP tables were booked months in advance, with guests enjoying premium bottle service and panoramic views of the bay.</p>
<p>The Saturday night headliner performance surprised the crowd with a two-hour DJ set that had the entire venue on their feet, while the rooftop terrace hosted intimate acoustic sessions for exclusive VIP guests.</p>
<p>LIQUE Miami's Super Bowl weekend proved that the venue has firmly established itself among Miami's elite nightlife destinations, competing with the biggest names in South Beach.</p>`,
    keywords: [
      "super bowl miami afterparty",
      "super bowl miami nightlife",
      "celebrity afterparty miami",
      "lique miami super bowl",
      "miami vip nightlife",
    ],
  },
  {
    slug: "mediterranean-tasting-menu-spring-season",
    title: "New Mediterranean Tasting Menu Launches for Spring Season",
    date: "February 6, 2026",
    dateISO: "2026-02-06",
    venue: "LIQUE Miami",
    description:
      "Executive Chef unveils an innovative 7-course tasting experience blending Mediterranean flavors with Miami flair, paired with handcrafted cocktails inspired by the ocean breeze.",
    content: `<p>Executive Chef unveils an innovative 7-course tasting experience blending Mediterranean flavors with Miami flair, paired with handcrafted cocktails inspired by the ocean breeze.</p>
<p>Each course tells a story of coastal living, from the opening amuse-bouche of seared scallops with saffron foam to the show-stopping main course of wagyu beef with truffle-infused Mediterranean herbs. The menu celebrates seasonal ingredients sourced from local farms and global purveyors.</p>
<p>The cocktail pairing program, developed by our award-winning bar team, features seven original creations that mirror each course's flavor profile, using house-made syrups, fresh-pressed juices, and rare spirits.</p>
<p>Available Thursday through Sunday evenings, the tasting experience is limited to 30 guests per evening, ensuring an intimate and personalized dining journey at LIQUE Miami's waterfront setting.</p>`,
    keywords: [
      "mediterranean restaurant miami",
      "tasting menu miami",
      "fine dining miami",
      "lique miami restaurant",
      "waterfront dining miami",
      "miami spring dining",
    ],
  },
  {
    slug: "resident-dj-lineup-miami-music-week",
    title: "Resident DJ Lineup Announced for Miami Music Week",
    date: "February 1, 2026",
    dateISO: "2026-02-01",
    venue: "LIQUE Miami",
    description:
      "LIQUE Miami reveals an electrifying roster of resident and guest DJs set to take over during Miami Music Week, promising non-stop beats from sunset to sunrise across all venues.",
    content: `<p>LIQUE Miami reveals an electrifying roster of resident and guest DJs set to take over during Miami Music Week, promising non-stop beats from sunset to sunrise across all venues.</p>
<p>The lineup features a diverse mix of electronic music talent, from deep house maestros to high-energy tech house producers. Each night of Miami Music Week will showcase a different genre, ensuring there's something for every music lover.</p>
<p>Special stage setups will transform the waterfront into an immersive audio-visual experience, with state-of-the-art sound systems and LED installations creating an atmosphere unlike anything Miami has seen before.</p>
<p>Early bird tickets and VIP packages are now available, with exclusive perks including backstage access, artist meet-and-greets, and premium bottle service with dedicated hosts.</p>`,
    keywords: [
      "miami music week",
      "miami music week 2026",
      "lique miami dj",
      "miami nightclub music week",
      "electronic music miami",
      "miami music week events",
    ],
  },
  {
    slug: "vip-terrace-reopens-new-design",
    title: "Exclusive VIP Terrace Reopens with Stunning New Design",
    date: "January 25, 2026",
    dateISO: "2026-01-25",
    venue: "LIQUE Miami",
    description:
      "After a complete redesign, the VIP waterfront terrace debuts a breathtaking new look with panoramic bay views, plush seating, and an intimate ambiance for the most discerning guests.",
    content: `<p>After a complete redesign, the VIP waterfront terrace debuts a breathtaking new look with panoramic bay views, plush seating, and an intimate ambiance for the most discerning guests.</p>
<p>The renovation, led by a world-renowned interior design firm, introduces a seamless blend of Mediterranean elegance and modern luxury. Natural stone, warm wood accents, and soft ambient lighting create a sanctuary above the bay.</p>
<p>New features include private cabanas with personal butler service, a dedicated cocktail bar with exclusive menu items, and a retractable glass roof that allows for open-air enjoyment year-round regardless of weather.</p>
<p>The VIP terrace accommodates up to 60 guests and is available for private events, corporate functions, and nightly VIP reservations. Advanced booking is recommended.</p>`,
    keywords: [
      "miami vip lounge",
      "waterfront terrace miami",
      "lique miami vip",
      "luxury nightlife miami",
      "private event space miami",
      "north miami beach vip",
    ],
  },
  {
    slug: "sunday-brunch-most-sought-after-reservation",
    title: "Sunday Brunch Becomes Miami's Most Sought-After Reservation",
    date: "January 18, 2026",
    dateISO: "2026-01-18",
    venue: "LIQUE Miami",
    description:
      "With live saxophone performances, bottomless champagne, and waterfront views, LIQUE's signature Sunday brunch has become the hottest weekend ticket in all of North Miami Beach.",
    content: `<p>With live saxophone performances, bottomless champagne, and waterfront views, LIQUE's signature Sunday brunch has become the hottest weekend ticket in all of North Miami Beach.</p>
<p>Every Sunday from 12 PM to 5 PM, the venue transforms into a daytime paradise where guests enjoy a curated brunch menu featuring international dishes, fresh seafood platters, and decadent dessert stations.</p>
<p>The atmosphere builds throughout the afternoon, with live musicians setting the mood from smooth jazz to upbeat house music, creating a seamless transition from brunch to an afternoon party.</p>
<p>Reservations typically sell out a week in advance, and the brunch has earned a devoted following among Miami's social scene. Group packages and birthday celebrations with VIP treatment are available upon request.</p>`,
    keywords: [
      "miami brunch",
      "sunday brunch miami",
      "waterfront brunch miami",
      "lique miami brunch",
      "bottomless brunch miami",
      "north miami beach brunch",
      "best brunch miami",
    ],
  },
  {
    slug: "art-basel-afterglow-art-crowd-favorite",
    title: "Art Basel Afterglow: How LIQUE Became the Art Crowd's Favorite",
    date: "January 12, 2026",
    dateISO: "2026-01-12",
    venue: "LIQUE Miami",
    description:
      "Long after Art Basel wrapped, the creative energy lingers at LIQUE Miami where galleries, collectors, and artists continue to gather for late-night conversations and cocktail culture.",
    content: `<p>Long after Art Basel wrapped, the creative energy lingers at LIQUE Miami where galleries, collectors, and artists continue to gather for late-night conversations and cocktail culture.</p>
<p>During Art Basel week, LIQUE hosted a series of exclusive pop-up exhibitions featuring emerging local artists, with pieces displayed throughout the venue's interior and terrace spaces.</p>
<p>The collaboration between nightlife and art has proven so successful that LIQUE Miami has committed to a year-round rotating gallery program, with new installations every quarter curated by prominent Miami art consultants.</p>
<p>Monthly "Art After Dark" events now bring together collectors, gallery owners, and emerging artists for networking evenings with curated cocktails and live painting demonstrations.</p>`,
    keywords: [
      "art basel miami",
      "art basel afterparty",
      "miami art nightlife",
      "lique miami art",
      "miami art events",
      "art basel 2025 miami",
    ],
  },
  {
    slug: "new-years-eve-celebration-miamis-best",
    title: "New Year's Eve Celebration Ranked Among Miami's Best",
    date: "January 5, 2026",
    dateISO: "2026-01-05",
    venue: "LIQUE Miami",
    description:
      "A spectacular midnight fireworks display over the water, live entertainment, and a sold-out crowd made LIQUE Miami's NYE gala one of the most talked-about events of the season.",
    content: `<p>A spectacular midnight fireworks display over the water, live entertainment, and a sold-out crowd made LIQUE Miami's NYE gala one of the most talked-about events of the season.</p>
<p>The celebration began with a champagne reception at sunset, followed by a gourmet five-course dinner, and culminated in a dramatic countdown with fireworks choreographed to music over Biscayne Bay.</p>
<p>Guest DJs kept the energy high well into the early hours of 2026, with multiple stages offering different musical experiences throughout the venue.</p>
<p>Major media outlets and lifestyle publications recognized LIQUE Miami's New Year's Eve as one of the top five celebrations in the city, a testament to the venue's growing status in Miami's nightlife landscape.</p>`,
    keywords: [
      "new years eve miami",
      "nye miami party",
      "miami new years 2026",
      "lique miami nye",
      "miami waterfront nye",
      "best new years party miami",
    ],
  },
  {
    slug: "craft-cocktail-program-nightlife-award",
    title: "Craft Cocktail Program Wins Prestigious Nightlife Award",
    date: "December 28, 2025",
    dateISO: "2025-12-28",
    venue: "LIQUE Miami",
    description:
      "LIQUE Miami's innovative cocktail program, featuring locally sourced ingredients and theatrical presentation, earns top honors at the annual Miami Nightlife Excellence Awards.",
    content: `<p>LIQUE Miami's innovative cocktail program, featuring locally sourced ingredients and theatrical presentation, earns top honors at the annual Miami Nightlife Excellence Awards.</p>
<p>The award recognizes the bar team's commitment to pushing the boundaries of mixology, with signature drinks that incorporate smoke infusions, edible flowers, and custom-carved ice sculptures.</p>
<p>Head mixologist developed each cocktail to complement the venue's Mediterranean-inspired menu, creating flavor pairings that surprise and delight guests throughout the evening.</p>
<p>The cocktail menu changes seasonally, with the upcoming spring collection featuring tropical ingredients and lighter profiles perfect for waterfront sipping. Cocktail-making masterclasses are now available for groups of 8 or more.</p>`,
    keywords: [
      "miami craft cocktails",
      "best cocktail bar miami",
      "lique miami cocktails",
      "miami nightlife awards",
      "mixology miami",
      "waterfront bar miami",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
