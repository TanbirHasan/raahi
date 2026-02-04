"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
          {/* Brand & Mission */}
          <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="group">
              <h3 className="text-3xl font-black tracking-tighter">
                RAAHI<span className="text-primary group-hover:text-emerald-400 transition-colors">.</span>
              </h3>
            </Link>
            <p className="text-slate-400 font-light leading-relaxed text-lg max-w-xs">
              Crafting legacies of exploration for the modern vanguard. Experience the untamed world through our lens.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all hover:-translate-y-1 shadow-xl"
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Expedition Routes */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Expeditions</h4>
            <ul className="space-y-6">
              {[
                { label: "Our Tours", href: "/events" },
                { label: "The Journal", href: "/blog" },
                { label: "Our Legacy", href: "/about" },
                { label: "Protocol", href: "/contact" }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-primary transition-all text-sm font-bold uppercase tracking-widest flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-3 transition-all opacity-0 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connection Hub */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Connection Hub</h4>
            <ul className="space-y-8">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-slate-400 text-sm font-light leading-loose">
                  1080 Brickell Ave, Miami<br />
                  Florida 33130, U.S.A
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-slate-400 text-sm font-bold tracking-widest">+1 (483) 593-2840</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-slate-400 text-sm font-light">hello@raahi.com</span>
              </li>
            </ul>
          </div>

          {/* Intelligence Dept */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">Intelligence Dept</h4>
            <p className="text-slate-400 text-sm font-light mb-8 text-center md:text-left">
              Join our covert list for exclusive expedition updates and vanguard offers.
            </p>
            <div className="w-full space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full h-14 pr-12 pl-6 rounded-2xl bg-white/5 border border-white/5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-white/20 text-xs font-bold uppercase tracking-widest transition-all"
                />
                <button className="absolute right-2 top-2 w-10 h-10 bg-primary hover:bg-white hover:text-primary rounded-xl flex items-center justify-center transition-all group-hover:shadow-lg">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6 text-white/20 group cursor-default">
              <Globe className="w-4 h-4 group-hover:text-primary transition-colors" />
              <span className="text-[9px] font-black uppercase tracking-widest">Global Operations Active</span>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Section */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">&copy; {currentYear} RAAHI EXPLORATIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <Link href="#" className="text-white/20 hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/20 hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">Vanguard Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
