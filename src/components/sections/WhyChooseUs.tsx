"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { ShieldCheck, Zap, BarChart, Layers, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    title: "All-in-one platform",
    description: "No more juggling 10 different tools. Everything you need is right here.",
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Automation-first",
    description: "Set up rules once and let the system do the heavy lifting 24/7.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Built for scale",
    description: "Whether you have 10 leads or 10 million, our infrastructure handles it seamlessly.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Real-time insights",
    description: "Make data-driven decisions with live dashboards and customizable reports.",
    icon: BarChart,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // ~60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const isFloat = value % 1 !== 0;
  const formatted = isFloat ? displayValue.toFixed(1) : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden text-slate-200">
      {/* Dark Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text & Stats */}
          <div className="flex flex-col gap-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-semibold mb-6 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                The Smart Choice
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white"
              >
                Why thousands of teams choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">NexoCRM</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed"
              >
                We've obsessed over every detail to give you the most intuitive, powerful, and reliable CRM on the market.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="grid grid-cols-2 gap-x-8 gap-y-12 pt-6 border-t border-white/10"
            >
              <div>
                <h4 className="text-5xl font-black text-white mb-3 tracking-tight">
                  <AnimatedNumber value={10} suffix=",000+" />
                </h4>
                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Businesses Trust Us</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-white mb-3 tracking-tight">
                  <AnimatedNumber value={99.9} suffix="%" />
                </h4>
                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Uptime Guarantee</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-white mb-3 tracking-tight">
                  <AnimatedNumber value={25} suffix="M+" />
                </h4>
                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Leads Processed Daily</p>
              </div>
              <div>
                <h4 className="text-5xl font-black text-white mb-3 tracking-tight">
                  <AnimatedNumber value={5} suffix="x" />
                </h4>
                <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Faster Deal Closures</p>
              </div>
            </motion.div>
          </div>

          {/* Right Benefits Cards */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid sm:grid-cols-2 gap-6 relative"
          >
            {/* Decorative element behind cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px] -z-10" />

            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 transition-all duration-300 group"
              >
                <div className={cn("mb-6 w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner transition-transform group-hover:scale-110 group-hover:-rotate-3", benefit.bg)}>
                  <benefit.icon className={cn("h-7 w-7", benefit.color)} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-[1.05rem] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
