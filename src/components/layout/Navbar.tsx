"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Navbar is transparent only on Home page when not scrolled
  const isTransparent = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        !isTransparent
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group relative z-10">
            <div className={cn(
              "text-3xl font-black tracking-tighter transition-colors duration-500",
              !isTransparent ? "text-slate-950" : "text-white"
            )}>
              RAAHI<span className="text-primary group-hover:text-emerald-400 transition-colors">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/link",
                  isActive(link.href)
                    ? !isTransparent
                      ? "text-primary bg-primary/5"
                      : "text-white bg-white/10"
                    : !isTransparent
                      ? "text-slate-500 hover:text-slate-900"
                      : "text-white/60 hover:text-white"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section: Mobile Menu + CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button
                asChild
                className={cn(
                  "rounded-full h-11 px-8 font-black uppercase tracking-widest text-[10px] transition-all duration-500 shadow-xl hover:-translate-y-1",
                  !isTransparent
                    ? "bg-slate-900 text-white hover:bg-primary"
                    : "bg-white text-slate-950 hover:bg-primary hover:text-white"
                )}
              >
                <Link href="/contact">Start Journey</Link>
              </Button>
            </div>

            {/* Mobile Sidebar (Sheet) */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "lg:hidden w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border",
                    !isTransparent
                      ? "bg-white border-slate-100 text-slate-950 shadow-sm"
                      : "bg-white/10 border-white/20 text-white backdrop-blur-md"
                  )}
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0 bg-slate-950 p-0 text-white">
                <div className="h-full flex flex-col p-8 pt-20">
                  <div className="flex flex-col space-y-4">
                    {navLinks.map((link, idx) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "text-4xl font-bold tracking-tighter transition-all duration-300 py-2",
                          isActive(link.href) ? "text-primary" : "text-white/40 hover:text-white"
                        )}
                      >
                        <div className="flex items-center justify-between group">
                          <span>{link.label}</span>
                          <ArrowRight className={cn(
                            "w-6 h-6 transition-all duration-500 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                            isActive(link.href) && "translate-x-0 opacity-100"
                          )} />
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-10 border-t border-white/5">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">HQ Location</p>
                        <p className="text-sm font-bold">Miami, Florida</p>
                      </div>
                    </div>

                    <Button asChild className="w-full h-16 rounded-[2rem] bg-primary hover:bg-white hover:text-primary transition-all duration-500 font-black uppercase tracking-widest text-[10px]">
                      <Link href="/contact">Book Expedition</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
