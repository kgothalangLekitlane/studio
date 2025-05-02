
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About WebFolio</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn more about the mission behind WebFolio and the technologies used to build this template.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div>
           <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
           <p className="text-muted-foreground mb-4">
            WebFolio was created as a demonstration project to showcase skills in modern web development, including HTML5, CSS3, JavaScript, and deployment practices. It serves as a flexible and professional template for individuals to build their own online portfolios.
          </p>
          <p className="text-muted-foreground">
            The goal is to provide a clean, responsive, and easily customizable foundation using industry-standard tools like Next.js and Tailwind CSS, deployed efficiently on platforms like Vercel.
           </p>
         </div>
         <div className="relative h-64 md:h-80 w-full">
           <Image
             src="https://picsum.photos/600/400?grayscale" // Grayscale for monochromatic theme
             alt="Team working on project"
             layout="fill"
             objectFit="cover"
             className="rounded-lg shadow-md"
             data-ai-hint="team collaboration office"
           />
         </div>
      </section>

      <section className="py-16 bg-secondary rounded-lg shadow-sm">
         <h2 className="text-3xl font-semibold text-center mb-12">Technology Stack</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>Next.js</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">React framework for server-side rendering and static site generation.</p>
             </CardContent>
           </Card>
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>React</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">JavaScript library for building user interfaces.</p>
             </CardContent>
           </Card>
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>Tailwind CSS</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">Utility-first CSS framework for rapid UI development.</p>
             </CardContent>
           </Card>
           <Card className="text-center transition-shadow duration-300 hover:shadow-lg">
             <CardHeader>
               <CardTitle>Vercel</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-muted-foreground">Platform for easy deployment and hosting.</p>
             </CardContent>
           </Card>
         </div>
       </section>

        <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">Project Goals</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
                <Award className="mx-auto text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Demonstrate Skills</h3>
                <p className="text-muted-foreground">Showcase proficiency in HTML, CSS, JavaScript, and deployment.</p>
            </div>
             <div>
                <Briefcase className="mx-auto text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Template</h3>
                <p className="text-muted-foreground">Provide a usable base for personal portfolios.</p>
            </div>
            <div>
                <Users className="mx-auto text-primary h-12 w-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Practices</h3>
                <p className="text-muted-foreground">Utilize current web development tools and techniques.</p>
            </div>
        </div>
        </section>

    </div>
  );
}
