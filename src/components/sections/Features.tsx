"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, FileText, Target, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: "lead-management",
    title: "Lead Management",
    description: "Capture, track, and convert leads with automated workflows. Never let a potential customer slip through the cracks again.",
    icon: Target,
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50 border-blue-100",
  },
  {
    id: "hrms",
    title: "HRMS Built-in",
    description: "Manage your team's payroll, attendance, and performance seamlessly without switching between multiple apps.",
    icon: Briefcase,
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50 border-indigo-100",
  },
  {
    id: "invoicing",
    title: "Smart Invoicing",
    description: "Create professional invoices in seconds, automate follow-ups, and get paid faster with integrated payment gateways.",
    icon: FileText,
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50 border-violet-100",
  },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    // Staggered reveal for feature cards
    gsap.fromTo(
      cards,
      { 
        y: 80, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-32 relative bg-white overflow-hidden">
      {/* Premium Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-20%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Powerful Features
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">grow faster</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Replace your disjointed stack of tools with a single, highly-optimized platform designed for modern, scaling teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* Hover Gradient Background */}
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0", feature.gradient)} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3", feature.iconBg)}>
                  <feature.icon className={cn("h-8 w-8", feature.iconColor)} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow text-[1.05rem]">
                  {feature.description}
                </p>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-sm font-bold text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore feature <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
