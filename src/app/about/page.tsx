
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Feather, Camera } from 'lucide-react'; // Changed icons

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Global Wanderer</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover the passion behind the blog and the journey that fuels our explorations.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
           <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
           <p className="text-muted-foreground mb-4">
            Global Wanderer was born from a deep love for travel and a desire to share the beauty and diversity of our world. Our mission is to inspire others to explore, connect with different cultures, and create unforgettable memories.
          </p>
          <p className="text-muted-foreground">
            We aim to provide practical travel tips, detailed destination guides, and captivating stories that ignite your wanderlust and help you plan your own adventures.
           </p>
         </div>
         <div className="relative h-64 md:h-80 w-full">
           <Image
             src="https://picsum.photos/seed/travel-map/600/400" // Updated image seed
             alt="World map with travel pins"
             layout="fill"
             objectFit="cover"
             className="rounded-lg shadow-md"
             data-ai-hint="world map travel pins adventure" // Updated hint
           />
         </div>
      </section>

      <section className="py-16 bg-secondary rounded-lg shadow-sm">
         <h2 className="text-3xl font-semibold text-center mb-12">Meet the Wanderer</h2>
         {/* Simple placeholder for author bio */}
         <div className="container mx-auto px-4 max-w-3xl text-center">
            <Image
             src="https://picsum.photos/seed/traveler/200/200"
             alt="Blog Author"
             width={150}
             height={150}
             className="rounded-full mx-auto mb-6 shadow-md"
             data-ai-hint="traveler portrait happy person"
            />
            <h3 className="text-2xl font-semibold mb-2">Alex Wanderlust</h3>
            <p className="text-muted-foreground mb-4">Founder & Lead Explorer</p>
            <p className="text-lg">
                Hi, I'm Alex! Ever since my first backpacking trip through Southeast Asia, I've been hooked on exploring new places and experiencing different ways of life. This blog is my way of documenting my journeys and sharing the lessons learned along the way. Join me as we discover the wonders of our planet together!
            </p>
         </div>
       </section>

        <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">What We Share</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <Globe className="mx-auto text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Destination Guides</h3>
                <p className="text-muted-foreground">In-depth guides to cities and countries around the world.</p>
            </div>
             <div>
                <Feather className="mx-auto text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Stories</h3>
                <p className="text-muted-foreground">Personal narratives and inspiring tales from the road.</p>
            </div>
            <div>
                <Camera className="mx-auto text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Photography</h3>
                <p className="text-muted-foreground">Capturing the moments and landscapes that make travel special.</p>
            </div>
        </div>
        </section>

    </div>
  );
}
