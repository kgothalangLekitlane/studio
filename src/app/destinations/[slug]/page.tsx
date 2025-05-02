
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { destinations, Destination } from '@/data/destinations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, Landmark, History, BookOpen } from 'lucide-react'; // Added relevant icons

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

// Pre-render pages for known destinations at build time
export async function generateStaticParams() {
  return destinations.map((dest) => ({
    slug: dest.slug,
  }));
}

// Find the destination data based on the slug
function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((dest) => dest.slug === slug);
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const destination = getDestinationBySlug(params.slug);

  // If destination not found, return 404
  if (!destination) {
    notFound();
  }

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full -mx-4 md:mx-0 md:rounded-lg overflow-hidden shadow-lg">
        <Image
          src={destination.image}
          alt={`View of ${destination.name}`}
          layout="fill"
          objectFit="cover"
          priority // Load main image faster
          data-ai-hint={destination.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {destination.name}
          </h1>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column / Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* History Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <History className="mr-2 h-6 w-6 text-primary" />
                A Glimpse into History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-line">
                {destination.historyDetails}
              </p>
            </CardContent>
          </Card>

          {/* Scenic Places Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Landmark className="mr-2 h-6 w-6 text-primary" />
                Must-See Scenic Spots
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {destination.scenicSpots.map((spot, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg">{spot.name}</h3>
                  <p className="text-muted-foreground">{spot.description}</p>
                  {index < destination.scenicSpots.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

           {/* Articles Section (Placeholder) */}
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <BookOpen className="mr-2 h-6 w-6 text-primary" />
                Featured Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
               <p className="text-muted-foreground mb-4">
                Dive deeper into {destination.name} with our travel stories and guides:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {destination.articleIdeas.map((idea, index) => (
                   <li key={index}>{idea} (Coming Soon!)</li>
                ))}
                 {/* Add links here when articles exist */}
              </ul>
            </CardContent>
          </Card>

        </div>

        {/* Right Column / Sidebar Info */}
        <div className="space-y-6 lg:sticky lg:top-20 self-start">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Quick Facts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
               <div className="flex items-center">
                 <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{destination.continent}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.33 10a5.67 5.67 0 0111.34 0 .67.67 0 01-1.34 0 4.33 4.33 0 00-8.66 0 .67.67 0 01-1.34 0z" clipRule="evenodd" />
                </svg>
                <span className="text-muted-foreground">Coordinates: {destination.coordinates}</span>
              </div>
              {/* Add more quick facts like language, currency etc. if needed */}
               <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <span className="text-muted-foreground">Population: {destination.population}</span>
              </div>
            </CardContent>
          </Card>
          {/* Optional: Add related posts or links */}
        </div>
      </section>
    </div>
  );
}
