
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Send, MapPin } from "lucide-react" // Changed Phone to Send

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters."
  }),
})

export default function ContactPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate form submission
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! We'll get back to you as soon as we can.", // Updated toast message
    })
    form.reset(); // Reset form fields after successful submission
  }

  return (
    <div className="space-y-16">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have travel questions, collaboration ideas, or just want to say hello? Drop us a line!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                <Textarea placeholder="Your travel questions or comments..." rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full md:w-auto">
                             Send Message <Send className="ml-2 h-4 w-4"/> {/* Added Send icon */}
                         </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Connect with Us</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-start space-x-3">
                             <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                             <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:hello@globalwanderer.example" className="text-muted-foreground hover:text-primary transition-colors">hello@globalwanderer.example</a> {/* Updated Email */}
                            </div>
                        </div>
                         {/* Removed Phone Section */}
                         <div className="flex items-start space-x-3">
                             <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold">Based In</h3>
                                <p className="text-muted-foreground">Somewhere exploring the world!<br/>(Primarily online)</p> {/* Updated Address */}
                            </div>
                        </div>
                        {/* You can add social media links here if desired */}
                         {/* <div className="flex items-start space-x-3">
                             <svg>...</svg> {/* Placeholder for Instagram/etc. Icon */}
                           {/* <div>
                                <h3 className="font-semibold">Social Media</h3>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">@globalwanderer</a>
                            </div>
                        </div> */}
                    </CardContent>
                </Card>

                {/* Placeholder Map - Changed image */}
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="https://picsum.photos/seed/world-map/800/400" // Updated image seed
                        alt="Stylized World Map"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="world map travel adventure" // Updated hint
                    />
                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">[Exploring the Globe]</p> {/* Updated text */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
