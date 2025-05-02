
export interface ScenicSpot {
  name: string;
  description: string;
}

export interface Destination {
  slug: string; // Unique identifier for URL
  name: string;
  description: string; // Short description for card view
  historyTeaser: string; // Short history hint for card view
  historyDetails: string; // Longer history for detail page
  image: string;
  imageHint: string;
  continent: string;
  coordinates: string; // Example: "48.8566° N, 2.3522° E"
  population: string; // Example: "2.1 million (city)"
  scenicSpots: ScenicSpot[];
  articleIdeas: string[]; // Placeholder titles/ideas for articles
}

export const destinations: Destination[] = [
  {
    slug: "paris",
    name: "Paris, France",
    description: "The city of lights, love, and iconic landmarks.",
    historyTeaser: "From Roman roots to revolution and romance.",
    historyDetails: `Paris's history stretches back over 2,000 years. Originally a Celtic settlement called Lutetia, it was conquered by the Romans in 52 BC. It grew into a prosperous Gallo-Roman city before becoming the capital of the Frankish kingdom under Clovis I in 508 AD.
Throughout the Middle Ages, Paris flourished as a center of learning, commerce, and royal power. The University of Paris (Sorbonne) was founded in the 12th century. Iconic structures like Notre Dame Cathedral began construction during this period.
The French Revolution (1789-1799) dramatically reshaped Paris and France. The storming of the Bastille marked a pivotal moment. Later, Napoleon Bonaparte left his mark with neoclassical monuments like the Arc de Triomphe.
The 19th century saw massive urban renewal under Baron Haussmann, creating the wide boulevards and distinctive architecture we see today. Paris became a global hub for arts and culture during the Belle Époque. It endured occupation during World War II but emerged as a symbol of liberation. Today, it remains a world capital of fashion, art, gastronomy, and culture.`,
    image: "https://picsum.photos/seed/paris-seine/800/600", // Specific image for detail page
    imageHint: "paris seine river eiffel tower",
    continent: "Europe",
    coordinates: "48.8566° N, 2.3522° E",
    population: "2.1 million (city), 11 million (metro)",
    scenicSpots: [
      { name: "Eiffel Tower", description: "The iconic symbol of Paris, offering breathtaking city views." },
      { name: "Louvre Museum", description: "Home to masterpieces like the Mona Lisa and Venus de Milo." },
      { name: "Notre Dame Cathedral", description: "A masterpiece of French Gothic architecture (currently under restoration)." },
      { name: "Montmartre & Sacré-Cœur", description: "Artistic neighborhood with hilltop basilica offering panoramic views." },
      { name: "Seine River Cruise", description: "A relaxing way to see many landmarks from the water." },
    ],
    articleIdeas: [
      "A Perfect Weekend in Paris: Itinerary & Tips",
      "Decoding the Art of the Louvre: A First-Timer's Guide",
      "Exploring the Charm of Montmartre Beyond the Crowds",
      "Parisian Gastronomy: Must-Try Foods and Where to Find Them",
    ],
  },
  {
    slug: "tokyo",
    name: "Tokyo, Japan",
    description: "A bustling metropolis blending ultramodern skyscrapers with historic temples.",
    historyTeaser: "From fishing village Edo to futuristic global hub.",
    historyDetails: `Tokyo's origins lie in a small fishing village named Edo. In the early 17th century, it became the seat of the powerful Tokugawa shogunate, effectively the capital of Japan, though Kyoto remained the imperial capital. Edo grew rapidly into one of the world's largest cities.
The Meiji Restoration in 1868 saw the Emperor move to Edo, renaming it Tokyo ("Eastern Capital"). This marked the end of feudal rule and the beginning of Japan's modernization. Tokyo became the undisputed political, economic, and cultural center.
The city suffered devastation twice in the 20th century: first in the Great Kanto Earthquake of 1923, and then extensively during World War II bombings. Each time, Tokyo rebuilt, transforming itself.
Post-war reconstruction fueled rapid economic growth, leading to the Tokyo we know today – a vast, technologically advanced megalopolis. It hosted the Summer Olympics in 1964 and again in 2020 (held in 2021), showcasing its modernity while still preserving pockets of its rich history.`,
    image: "https://picsum.photos/seed/tokyo-night/800/600",
    imageHint: "tokyo night shibuya crossing cityscape",
    continent: "Asia",
    coordinates: "35.6895° N, 139.6917° E",
    population: "13.9 million (special wards), 37 million (metro)",
    scenicSpots: [
      { name: "Shibuya Crossing", description: "The world's busiest intersection, an iconic Tokyo experience." },
      { name: "Senso-ji Temple", description: "Tokyo's oldest temple, located in the historic Asakusa district." },
      { name: "Tokyo Skytree", description: "Modern communications tower with observation decks offering stunning views." },
      { name: "Meiji Jingu Shrine", description: "Peaceful oasis dedicated to Emperor Meiji and Empress Shoken." },
      { name: "Harajuku", description: "Center of youth culture, fashion, and unique street style." },
    ],
    articleIdeas: [
      "Navigating Tokyo: A Guide to Public Transport",
      "Tokyo's Culinary Scene: From Ramen to Michelin Stars",
      "Finding Tranquility: Tokyo's Best Parks and Gardens",
      "Day Trips from Tokyo: Hakone, Nikko, and Kamakura",
    ],
  },
  {
    slug: "rome",
    name: "Rome, Italy",
    description: "Ancient history meets vibrant street life in Italy's eternal city.",
    historyTeaser: "The heart of an empire that shaped Western civilization.",
    historyDetails: `Legend traces Rome's founding to 753 BC by Romulus. It grew from a small settlement into a Republic, eventually dominating the Italian peninsula. Through military conquest and political prowess, the Roman Republic expanded across the Mediterranean, North Africa, and parts of Europe.
In 27 BC, Augustus became the first Roman Emperor, ushering in the Pax Romana, a period of relative peace and prosperity. Rome became the magnificent capital of a vast empire, building iconic structures like the Colosseum, Pantheon, and numerous forums and aqueducts.
The Roman Empire eventually split and the Western Roman Empire fell in 476 AD. Rome's influence declined but it remained a significant center, particularly as the seat of the Papacy.
During the Renaissance, Rome experienced a cultural and artistic rebirth under the patronage of Popes like Julius II and Leo X, commissioning works from artists like Michelangelo and Raphael (St. Peter's Basilica, Sistine Chapel).
Rome became the capital of a unified Italy in 1871. Today, it's a vibrant modern city layered with millennia of history, attracting millions with its ancient ruins, Renaissance art, and Baroque fountains.`,
    image: "https://picsum.photos/seed/rome-colosseum/800/600",
    imageHint: "rome colosseum italy ancient ruins",
    continent: "Europe",
    coordinates: "41.9028° N, 12.4964° E",
    population: "2.8 million (city), 4.3 million (metro)",
    scenicSpots: [
      { name: "Colosseum", description: "The iconic ancient amphitheater, symbol of Roman engineering." },
      { name: "Roman Forum & Palatine Hill", description: "The heart of ancient Roman public life and imperial residences." },
      { name: "Pantheon", description: "Remarkably preserved ancient temple, now a church, with a stunning dome." },
      { name: "Vatican City (St. Peter's Basilica & Museums)", description: "The independent city-state, center of the Catholic Church." },
      { name: "Trevi Fountain", description: "Magnificent Baroque fountain; toss a coin to ensure your return!" },
    ],
    articleIdeas: [
      "Rome in 3 Days: Seeing the Highlights",
      "Ancient Rome for Beginners: Understanding the Forum and Colosseum",
      "Beyond the Vatican: Exploring Rome's Lesser-Known Churches",
      "The Best Gelato in Rome: A Sweet Exploration",
    ],
  },
   {
    slug: "machu-picchu",
    name: "Machu Picchu, Peru",
    description: "Explore the breathtaking Inca citadel set high in the Andes Mountains.",
    historyTeaser: "A mysterious Inca sanctuary lost for centuries.",
    historyDetails: `Machu Picchu is believed to have been built in the mid-15th century during the height of the Inca Empire, likely as an estate for the Inca emperor Pachacuti. Its precise purpose remains debated among historians – theories range from a royal retreat to a religious sanctuary or administrative center.
Nestled high in the Andes, its construction is a marvel of engineering, with precisely cut stones fitted together without mortar. The site includes temples, palaces, agricultural terraces, and residential areas, demonstrating sophisticated Inca planning and stonemasonry.
The citadel was abandoned roughly a century after its construction, likely around the time of the Spanish conquest of the Inca Empire in the 16th century. Why it was abandoned is unclear; perhaps disease or the fall of the empire led to its desertion.
Crucially, the Spanish conquistadors never found Machu Picchu. It remained hidden from the outside world, overgrown by jungle, known only to local communities. It was brought to international attention in 1911 by American historian Hiram Bingham, although local farmers had known of its existence. Since then, it has become a UNESCO World Heritage site and one of the most iconic archaeological sites globally.`,
    image: "https://picsum.photos/seed/machu-picchu-view/800/600",
    imageHint: "machu picchu peru andes mountains inca ruins",
    continent: "South America",
    coordinates: "13.1631° S, 72.5450° W",
    population: "N/A (Archaeological site)",
    scenicSpots: [
      { name: "Main Plaza & Temples", description: "The central area featuring key structures like the Temple of the Sun and Temple of the Three Windows." },
      { name: "Intihuatana Stone", description: "A ritual stone associated with astronomical observation." },
      { name: "Huayna Picchu Mountain", description: "The iconic peak behind the citadel (requires separate ticket and climb)." },
      { name: "Inca Bridge", description: "A precarious trail bridge built into the cliffside." },
      { name: "Sun Gate (Inti Punku)", description: "The original entrance for those arriving via the Inca Trail, offering panoramic views." },
    ],
    articleIdeas: [
      "Planning Your Trip to Machu Picchu: Tickets, Trains, and Tips",
      "Hiking the Inca Trail vs. Taking the Train",
      "Understanding Inca Architecture at Machu Picchu",
      "Aguas Calientes: The Gateway Town to Machu Picchu",
    ],
  },
  {
    slug: "kyoto",
    name: "Kyoto, Japan",
    description: "Experience traditional Japan with beautiful temples, shrines, and gardens.",
    historyTeaser: "The imperial capital for over a thousand years.",
    historyDetails: `Kyoto, originally named Heian-kyō ("capital of peace and tranquility"), became the imperial capital of Japan in 794 AD and remained so for over a millennium until 1868. This long period shaped its character as the cultural and spiritual heart of the nation.
During the Heian period (794-1185), Japanese court culture flourished, producing masterpieces like "The Tale of Genji." Kyoto saw the rise of the samurai class and endured periods of conflict, including the Ōnin War (1467-1477) which devastated much of the city.
Despite wars and fires, Kyoto was repeatedly rebuilt, preserving its grid layout modeled after the ancient Chinese capital Chang'an. It became a center for various arts and crafts, including Nishijin weaving and Kiyomizu pottery. Many famous temples and shrines, like Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine, were established or rebuilt during its history.
While Tokyo became the political capital during the Edo period and the official capital after the Meiji Restoration, Kyoto retained its importance as a cultural epicenter. Miraculously spared from widespread bombing during World War II, Kyoto preserves an immense wealth of pre-war architecture and historical sites, making it a unique window into Japan's past.`,
    image: "https://picsum.photos/seed/kyoto-temple/800/600",
    imageHint: "kyoto japan golden pavilion kinkakuji temple",
    continent: "Asia",
    coordinates: "35.0116° N, 135.7681° E",
    population: "1.46 million (city)",
    scenicSpots: [
      { name: "Kinkaku-ji (Golden Pavilion)", description: "A stunning Zen Buddhist temple covered in gold leaf." },
      { name: "Fushimi Inari Shrine", description: "Famous for its thousands of vibrant red torii gates winding up a mountainside." },
      { name: "Arashiyama Bamboo Grove", description: "An enchanting walk through towering bamboo stalks." },
      { name: "Gion District", description: "Kyoto's traditional geisha district with preserved wooden machiya houses." },
      { name: "Kiyomizu-dera Temple", description: "Known for its wooden stage offering panoramic views of the city." },
    ],
    articleIdeas: [
      "Kyoto's Temple Trail: Must-Visit Shrines and Temples",
      "Experiencing a Traditional Tea Ceremony in Kyoto",
      "Geishas in Gion: History and Etiquette",
      "Seasonal Beauty: Kyoto in Cherry Blossom Season vs. Autumn",
    ],
  },
  {
    slug: "santorini",
    name: "Santorini, Greece",
    description: "Iconic white-washed villages perched on cliffs overlooking the Aegean Sea.",
    historyTeaser: "Shaped by one of history's largest volcanic eruptions.",
    historyDetails: `Santorini's unique landscape is the result of a cataclysmic volcanic eruption around 1600 BC (the Minoan eruption). This event caused the center of the island to collapse, forming the caldera – the submerged crater we see today. The eruption buried the sophisticated Minoan settlement of Akrotiri under volcanic ash, preserving it remarkably well, similar to Pompeii. Akrotiri offers a fascinating glimpse into a Bronze Age civilization.
After the eruption, the island was gradually resettled. Known as Thera in ancient times, it played a role in Greek history, establishing colonies like Cyrene in North Africa. It was later part of the Roman and Byzantine Empires.
During the Middle Ages, it came under Venetian rule as part of the Duchy of Naxos, which is when it acquired the name Santorini, after Saint Irene. The island endured Ottoman rule before becoming part of modern Greece in the 19th century.
Throughout its history, Santorini's inhabitants adapted to the volcanic landscape, building distinctive cave houses (yposkafa) and cultivating unique products like Assyrtiko grapes. The stunning cliffside villages of Oia and Fira, with their white-washed architecture and blue-domed churches, developed over centuries, becoming the iconic image of the island known worldwide today, especially famous for its dramatic sunsets over the caldera.`,
    image: "https://picsum.photos/seed/santorini-oia/800/600",
    imageHint: "santorini greece oia village caldera sunset",
    continent: "Europe",
    coordinates: "36.3932° N, 25.4615° E",
    population: "Approx. 15,500",
    scenicSpots: [
      { name: "Oia Village", description: "Famous for its stunning sunsets, white architecture, and blue domes." },
      { name: "Fira (Thira) Town", description: "The island's capital, perched on the caldera edge with shops and restaurants." },
      { name: "Akrotiri Archaeological Site", description: "The remarkably preserved Minoan Bronze Age settlement." },
      { name: "Red Beach & Black Beach (Perissa/Kamari)", description: "Unique volcanic sand beaches." },
      { name: "Caldera Boat Tour", description: "Explore the volcanic crater, hot springs, and nearby islands." },
    ],
    articleIdeas: [
      "Santorini Sunsets: Best Viewing Spots in Oia and Beyond",
      "Exploring Ancient Akrotiri: The Pompeii of the Aegean",
      "Island Hopping from Santorini: Nearby Cycladic Gems",
      "Santorini Wine Tasting: Discovering Assyrtiko and Vinsanto",
    ],
  },
   {
    slug: "bali", // Assuming Bali was featured on the homepage
    name: "Bali, Indonesia",
    description: "Discover lush rice terraces, vibrant culture, and stunning beaches in Indonesia.",
    historyTeaser: "Island of Gods, shaped by Hindu traditions and artistry.",
    historyDetails: `Bali has a rich history deeply influenced by Hinduism, which arrived from Java around the 7th century AD. Unlike the rest of Indonesia, which largely converted to Islam, Bali retained its unique Hindu-Buddhist culture, known as Agama Hindu Dharma.
Various kingdoms rose and fell on the island over the centuries. The Gelgel dynasty, particularly under King Waturenggong in the 16th century, marked a golden age for Balinese arts and culture.
The Dutch began exerting influence in the 19th century, eventually colonizing the island after a series of military campaigns, including the tragic puputan (ritual mass suicides) by Balinese royalty facing defeat.
After Indonesian independence in 1945, Bali became part of the new republic. Tourism began to develop significantly in the latter half of the 20th century, transforming parts of the island's economy while also presenting challenges to preserving its culture.
Despite colonization and modernization, Balinese culture remains vibrant, evident in its numerous temples (pura), intricate ceremonies, traditional dance, music (gamelan), and art forms. The concept of Tri Hita Karana (harmony between humans, nature, and the divine) continues to shape daily life.`,
    image: "https://picsum.photos/seed/bali-temple/800/600",
    imageHint: "bali indonesia temple rice paddy",
    continent: "Asia",
    coordinates: "8.3405° S, 115.0917° E",
    population: "Approx. 4.3 million",
    scenicSpots: [
      { name: "Uluwatu Temple", description: "Dramatic cliffside temple famous for Kecak dance performances at sunset." },
      { name: "Tegalalang Rice Terraces", description: "Iconic cascading green rice paddies near Ubud." },
      { name: "Ubud Monkey Forest", description: "Sacred sanctuary inhabited by hundreds of long-tailed macaques amidst ancient temples." },
      { name: "Tanah Lot Temple", description: "Picturesque sea temple perched on a rock formation, best viewed at sunset." },
      { name: "Seminyak & Kuta Beaches", description: "Popular coastal areas known for surfing, sunsets, beach clubs, and nightlife." },
    ],
    articleIdeas: [
      "Finding Your Zen in Ubud: Yoga Retreats and Spiritual Experiences",
      "Bali's Best Beaches: From Surfing Hotspots to Hidden Coves",
      "Understanding Balinese Culture: Temples, Ceremonies, and Offerings",
      "A Culinary Journey Through Bali: Warungs, Babi Guling, and Cooking Classes",
    ],
  },
   {
    slug: "norway", // Assuming Norway was featured on the homepage
    name: "Norway", // Using the country name as the destination focus
    description: "Experience breathtaking landscapes, charming villages, and the magic of the Norwegian fjords.",
    historyTeaser: "Land of Vikings, fjords, and maritime heritage.",
    historyDetails: `Norway's history is famously linked to the Viking Age (approx. 800-1050 AD), when Norse seafarers explored, raided, and traded across Europe and beyond, even reaching North America. Harald Fairhair is traditionally credited with unifying Norway around 872 AD.
Christianity gradually replaced Norse paganism around the 11th century. Norway entered unions with Denmark and later Sweden for long periods, gaining full independence only in 1905.
Throughout its history, Norway's geography – particularly its long coastline and deep fjords – has shaped its culture and economy, fostering strong maritime traditions in fishing, shipping, and exploration (e.g., Roald Amundsen, Fridtjof Nansen).
Neutral during World War I, Norway was occupied by Germany during World War II, with a significant resistance movement. Post-war, the discovery of offshore oil and gas in the late 1960s transformed Norway into one of the world's wealthiest nations, funding a comprehensive welfare state.
Today, Norway is known for its stunning natural beauty, commitment to environmental sustainability, high standard of living, and democratic values. It consistently ranks high in global indexes for happiness and human development.`,
    image: "https://picsum.photos/seed/norway-fjord-view/800/600",
    imageHint: "norway fjord landscape mountains water",
    continent: "Europe",
    coordinates: "60.4720° N, 8.4689° E (approx. central point)",
    population: "Approx. 5.4 million",
    scenicSpots: [
      { name: "Geirangerfjord & Nærøyfjord", description: "UNESCO-listed fjords known for their dramatic cliffs and waterfalls." },
      { name: "Lofoten Islands", description: "Arctic archipelago famed for dramatic peaks, fishing villages, and Northern Lights." },
      { name: "Bergen & Bryggen Wharf", description: "Charming coastal city with historic Hanseatic wooden houses (UNESCO site)." },
      { name: "Pulpit Rock (Preikestolen)", description: "Iconic cliff formation offering stunning views over Lysefjord (challenging hike)." },
      { name: "Tromsø", description: "Major city above the Arctic Circle, ideal for Northern Lights viewing and Arctic activities." },
    ],
    articleIdeas: [
      "Driving Norway's Scenic Routes: Tips for an Epic Road Trip",
      "Chasing the Northern Lights in Arctic Norway",
      "Exploring the Fjords: Cruises vs. Hiking",
      "Norway in a Nutshell: Experiencing Mountains, Fjords, and Trains",
    ],
  },
  // Add more destinations here following the same structure
];

// Ensure all slugs are unique
const slugs = new Set();
destinations.forEach(dest => {
  if (slugs.has(dest.slug)) {
    console.error(`Duplicate slug found: ${dest.slug}. Slugs must be unique.`);
  }
  slugs.add(dest.slug);
});
