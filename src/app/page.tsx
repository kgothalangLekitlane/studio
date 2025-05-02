
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Feather, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { destinations } from '@/data/destinations'; // Import destinations data

// Select a few destinations to feature
const featuredDestinations = destinations.slice(0, 3); // Example: Feature the first 3 destinations

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-secondary rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
           <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Embark on Your Next Adventure</h1>
           <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover breathtaking destinations, travel tips, and inspiring stories from around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Button size="lg" asChild>
              <Link href="/destinations">
                Explore Destinations <MapPin className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">
                About the Blog
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations/Posts Section */}
       <section className="py-16">
         <h2 className="text-3xl font-semibold text-center mb-12">Featured Destinations</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <Card key={dest.slug} className="flex flex-col transition-shadow duration-300 hover:shadow-lg overflow-hidden">
                <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                         <Image
                           src={dest.image} // Use destination image
                           alt={dest.name}
                           layout="fill"
                           objectFit="cover"
                           data-ai-hint={dest.imageHint}
                         />
                    </div>
                </CardHeader>
                 <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl mb-2">{dest.name}</CardTitle> {/* Use destination name */}
                  <CardDescription>{dest.description}</CardDescription> {/* Use destination description */}
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between items-center text-sm text-muted-foreground">
                   {/* Removed Date - Can add back if featuring specific articles later */}
                   <span className="text-muted-foreground">{dest.continent}</span>
                  <Button variant="link" asChild className="p-0 h-auto">
                     <Link href={`/destinations/${dest.slug}`}> {/* Link to dynamic page */}
                       Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                 </CardFooter>
              </Card>
            ))}
         </div>
          <div className="text-center mt-12">
                <Button asChild>
                    <Link href="/destinations">
                        View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
       </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-muted rounded-lg shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Share Your Story</h2>
             <p className="text-muted-foreground mb-6">
              Have an amazing travel experience you want to share? Get in touch or leave a comment on our posts! We love hearing from fellow wanderers.
            </p>
             <Button asChild>
               <Link href="/contact">
                 Contact Us <Feather className="ml-2 h-5 w-5" />
               </Link>
             </Button>
          </div>
          <div className="md:w-1/2">
             <Image
               src="https://picsum.photos/seed/travel-journal/600/400"
               alt="Travel Journal"
               width={600}
               height={400}
               className="rounded-lg shadow-md w-full h-auto object-cover"
               data-ai-hint="travel journal notebook map"
             />
          </div>
        </div>
      </section>
    </div>
  );
}
