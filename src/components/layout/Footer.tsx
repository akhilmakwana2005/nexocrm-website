"use client";

import Link from "next/link";
import { Hexagon, ArrowRight, Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-20 relative overflow-hidden border-t border-slate-900">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors">
                <Hexagon className="h-6 w-6 text-primary fill-primary/20" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">NexoCRM</span>
            </Link>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-sm">
              The only platform you need to manage your entire business lifecycle. Built for scale, designed for speed.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm font-semibold text-white">Subscribe to our newsletter</p>
              <div className="flex items-center relative max-w-sm">
                <Mail className="absolute left-4 h-4 w-4 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-32 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-slate-500"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-primary/90 text-white text-xs font-semibold px-5 rounded-full transition-colors flex items-center gap-1 shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1 lg:col-start-4">
            <h4 className="text-white font-semibold mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-sm">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-semibold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} NexoCRM Inc. All rights reserved.</p>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all group">
              <TwitterIcon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all group">
              <GithubIcon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 hover:text-white transition-all group">
              <LinkedinIcon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
