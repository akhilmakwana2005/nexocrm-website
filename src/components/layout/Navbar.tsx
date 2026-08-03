"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Integrations", href: "#integrations" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-[0_4px_30px_rgb(0,0,0,0.03)] py-3"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="p-1.5 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-primary/10 shadow-sm group-hover:border-primary/30 transition-colors"
          >
            <Hexagon className="h-6 w-6 text-primary fill-primary/20" strokeWidth={2} />
          </motion.div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">Nexo<span className="text-primary">CRM</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-md border border-slate-200/50 rounded-full px-2 py-1.5 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-full transition-colors group"
            >
              {link.name}
              <span className="absolute inset-0 bg-slate-100 rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-4 py-2"
          >
            Log in
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-full hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1 group"
          >
            Get a Demo
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-700 py-3 px-4 hover:bg-slate-50 hover:text-primary rounded-xl transition-colors flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-6 mt-2 border-t border-slate-100">
                <Link
                  href="/login"
                  className="w-full py-3 text-center text-base font-semibold text-slate-700 border-2 border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="#contact"
                  className="w-full py-3 text-center text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-primary hover:shadow-lg hover:shadow-primary/20 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
