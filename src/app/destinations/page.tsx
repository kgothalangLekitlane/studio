
"use client"; 

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Import hooks
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Search, History, AlertTriangle } from 'lucide-react'; // Added AlertTriangle
import { Input } from '@/components/ui/input';
import { destinations, Destination } from '@/data/destinations'; // Import destinations data

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);

  // Effect to filter destinations when searchQuery changes
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = destinations.filter(dest =>
      dest.name.toLowerCase().includes(lowerCaseQuery) ||
      dest.continent.toLowerCase().includes(lowerCaseQuery) ||
      dest.description.toLowerCase().includes(lowerCaseQuery) ||
      dest.historyTeaser.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredDestinations(filtered);
  }, [searchQuery]);

  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Explore Destinations</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Find inspiration for your next journey from our curated list of amazing places around the globe.
        </p>
         {/* Functional Search Bar */}
         <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
                <Input
                type="search"
                placeholder="Search destinations (e.g., Paris, Asia, ruins)..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                />
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {/* Add filtering options (continent, tags, etc.) here if needed */}
        </div>
      </section>

      <section>
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <Card key={dest.slug} className="flex flex-col transition-shadow duration-300 hover:shadow-lg overflow-hidden">
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
                   <div className="flex items-start text-sm text-muted-foreground mb-3">
                       <History className="h-4 w-4 mr-1.5 mt-0.5 flex-shrink-0" />
                       <span>{dest.historyTeaser}</span> {/* Display history teaser */}
                   </div>
                  <CardDescription>{dest.description}</CardDescription>
                </CardContent>
                 <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{dest.continent}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/destinations/${dest.slug}`}> {/* Updated link */}
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                 </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
            // No Results Message
            <div className="text-center py-12 text-muted-foreground flex flex-col items-center space-y-4">
              <AlertTriangle className="w-16 h-16 text-destructive" />
              <h2 className="text-2xl font-semibold">No Destinations Found</h2>
              <p className="max-w-md">
                We couldn't find any destinations matching your search "{searchQuery}". Try broadening your search terms.
              </p>
            </div>
        )}
      </section>
    </div>
  );
}
