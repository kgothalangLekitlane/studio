
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input'; // Import Input for search bar

// Mock data for destinations
const destinations = [
  {
    name: "Paris, France",
    description: "The city of lights, love, and iconic landmarks like the Eiffel Tower and Louvre Museum.",
    image: "https://picsum.photos/seed/paris/600/400",
    imageHint: "paris eiffel tower france",
    link: "/destinations/paris", // Placeholder link
    continent: "Europe"
  },
  {
    name: "Tokyo, Japan",
    description: "A bustling metropolis blending ultramodern skyscrapers with historic temples.",
    image: "https://picsum.photos/seed/tokyo/600/400",
    imageHint: "tokyo japan cityscape night",
    link: "/destinations/tokyo", // Placeholder link
    continent: "Asia"
  },
   {
    name: "Rome, Italy",
    description: "Ancient history meets vibrant street life in Italy's eternal city.",
    image: "https://picsum.photos/seed/rome-city/600/400", // Different seed from homepage
    imageHint: "rome italy cityscape vatican",
    link: "/destinations/rome", // Placeholder link
    continent: "Europe"
  },
  {
    name: "Machu Picchu, Peru",
    description: "Explore the breathtaking Inca citadel set high in the Andes Mountains.",
    image: "https://picsum.photos/seed/machu-picchu/600/400",
    imageHint: "machu picchu peru mountains inca",
    link: "/destinations/machu-picchu", // Placeholder link
    continent: "South America"
  },
   {
    name: "Kyoto, Japan",
    description: "Experience traditional Japan with beautiful temples, shrines, and gardens.",
    image: "https://picsum.photos/seed/kyoto/600/400",
    imageHint: "kyoto japan temple traditional",
    link: "/destinations/kyoto", // Placeholder link
    continent: "Asia"
  },
   {
    name: "Santorini, Greece",
    description: "Iconic white-washed villages perched on cliffs overlooking the Aegean Sea.",
    image: "https://picsum.photos/seed/santorini/600/400",
    imageHint: "santorini greece island sunset",
    link: "/destinations/santorini", // Placeholder link
    continent: "Europe"
  },
];


export default function DestinationsPage() {
  // In a real app, you'd fetch destinations and implement search/filtering logic
  // For now, we'll just display all mock destinations

  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Explore Destinations</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Find inspiration for your next journey from our curated list of amazing places around the globe.
        </p>
         {/* Simple Search Bar Placeholder */}
         <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
                <Input
                type="search"
                placeholder="Search destinations (e.g., Paris, Japan)..."
                className="pl-10"
                />
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {/* Add filtering options (continent, tags, etc.) here if needed */}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <Card key={index} className="flex flex-col transition-shadow duration-300 hover:shadow-lg overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-56 w-full"> {/* Increased height */}
                   <Image
                     src={dest.image}
                     alt={dest.name}
                     layout="fill"
                     objectFit="cover"
                     data-ai-hint={dest.imageHint}
                   />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-xl mb-2 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                    {dest.name}
                 </CardTitle>
                <CardDescription>{dest.description}</CardDescription>
              </CardContent>
               <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{dest.continent}</span>
                <Button variant="outline" size="sm" asChild>
                  <Link href={dest.link}>
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
               </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
