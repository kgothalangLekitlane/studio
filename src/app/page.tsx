
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-secondary rounded-lg shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Welcome to WebFolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Showcase your projects, skills, and experience with a clean, professional, and responsive portfolio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Button size="lg" asChild>
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features/Skills Section */}
       <section className="py-16">
         <h2 className="text-3xl font-semibold text-center mb-12">Key Features</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>Modern Design</CardTitle>
               <CardDescription>Built with the latest web technologies for a sleek look.</CardDescription>
             </CardHeader>
             <CardContent>
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary h-12 w-12 mb-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
               <p>Utilizes modern UI components and a clean layout.</p>
             </CardContent>
           </Card>
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>Fully Responsive</CardTitle>
               <CardDescription>Looks great on desktops, tablets, and mobile devices.</CardDescription>
             </CardHeader>
             <CardContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary h-12 w-12 mb-4"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
               <p>Adapts seamlessly to any screen size for optimal viewing.</p>
             </CardContent>
           </Card>
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>Easy to Customize</CardTitle>
               <CardDescription>Simple structure makes it easy to add your content.</CardDescription>
             </CardHeader>
             <CardContent>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-primary h-12 w-12 mb-4"><path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"/></svg>
               <p>Built with clear code and standard tools for modification.</p>
             </CardContent>
           </Card>
         </div>
       </section>

      {/* Placeholder Section */}
      <section className="py-16 bg-muted rounded-lg shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
             <Image
               src="https://picsum.photos/600/400"
               alt="Placeholder Image"
               width={600}
               height={400}
               className="rounded-lg shadow-md w-full h-auto object-cover"
               data-ai-hint="workspace desk computer"
             />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Showcase Your Work</h2>
            <p className="text-muted-foreground mb-6">
              Add sections for your projects, skills, or experience. Use high-quality images and clear descriptions to make a strong impression.
            </p>
             <Button asChild>
               <Link href="/contact">
                 Contact Me
               </Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
