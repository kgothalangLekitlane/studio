
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WebFolio - Your Professional Portfolio',
  description: 'A modern, responsive portfolio website built with Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Toaster /> {/* Add Toaster component */}
        <footer className="py-4 border-t mt-auto">
          <div className="container text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebFolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
