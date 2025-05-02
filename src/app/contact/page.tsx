
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
import { Mail, Phone, MapPin } from "lucide-react"

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
      description: "Thank you for contacting us. We'll get back to you shortly.",
    })
    form.reset(); // Reset form fields after successful submission
  }

  return (
    <div className="space-y-16">
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to collaborate? Send us a message!
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
                                <Textarea placeholder="Your message..." rows={5} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-start space-x-3">
                             <Mail className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                             <div>
                                <h3 className="font-semibold">Email</h3>
                                <a href="mailto:info@webfolio.example" className="text-muted-foreground hover:text-primary transition-colors">info@webfolio.example</a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-3">
                            <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                             <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-muted-foreground">(123) 456-7890</p>
                            </div>
                        </div>
                         <div className="flex items-start space-x-3">
                             <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0"/>
                            <div>
                                <h3 className="font-semibold">Address</h3>
                                <p className="text-muted-foreground">123 WebFolio St, Suite 100<br/>Internet City, IC 54321</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Placeholder Map */}
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                        src="https://picsum.photos/800/400?blur=2" // Blurred map-like image
                        alt="Placeholder Map"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="map location city"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <p className="text-white text-lg font-semibold">[Map Placeholder]</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
