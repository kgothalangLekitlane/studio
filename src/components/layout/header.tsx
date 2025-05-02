
"use client";

import type React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Info, Mail, Globe, Map } from 'lucide-react'; // Added Globe, Map
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/destinations', label: 'Destinations', icon: Map }, // Changed Portfolio to Destinations
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
  }, [pathname]);


  if (!isMounted) {
    // Avoid rendering Sheet/SheetTrigger on server to prevent hydration mismatch
    return (
       <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
             <Globe className="h-6 w-6 text-primary" /> {/* Added Globe icon */}
            <span className="font-bold text-lg text-primary">Global Wanderer</span> {/* Changed Name */}
          </Link>
          {/* Placeholder for desktop nav */}
          <nav className="hidden md:flex items-center space-x-1">
             {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className={cn(
                    "transition-colors hover:text-primary",
                    pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/60'
                  )}
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
             ))}
           </nav>
           {/* Placeholder for mobile trigger */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" passHref>
          <Globe className="h-6 w-6 text-primary" /> {/* Added Globe icon */}
          <span className="font-bold text-lg text-primary cursor-pointer">Global Wanderer</span> {/* Changed Name */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? 'text-primary font-semibold' : 'text-foreground/60'
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link
                href="/"
                className="flex items-center space-x-2 mb-6 pl-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                 <Globe className="h-6 w-6 text-primary" /> {/* Added Globe icon */}
                 <span className="font-bold text-lg text-primary">Global Wanderer</span> {/* Changed Name */}
              </Link>
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start transition-colors hover:text-primary pl-6 rounded-r-none",
                       pathname === item.href ? 'bg-muted text-primary font-semibold' : 'text-foreground'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <Link href={item.href}>
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
