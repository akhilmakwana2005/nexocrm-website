"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Users, Zap, PlayCircle, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-50">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-blob" />
        <div className="absolute top-1/3 right-1/4 translate-x-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[120px] opacity-60 mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col gap-8 text-center xl:text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-semibold w-fit mx-auto xl:mx-0 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Introducing NexoCRM 2.0
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
              One platform to run your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-accent">entire business.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-slate-600 max-w-[600px] mx-auto xl:mx-0 leading-relaxed">
              Transform your sales, marketing, and support with a 360° view of your customers. Built for scale, designed for speed.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-5 pt-2">
              <Link
                href="#contact"
                className="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-slate-900 rounded-2xl hover:bg-primary transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="group w-full sm:w-auto px-8 py-4 text-lg font-semibold text-slate-700 bg-white border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <PlayCircle className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                Watch Demo
              </Link>
            </motion.div>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6 pt-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual/Mockup - Premium Glass Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="relative lg:h-[650px] flex items-center justify-center w-full"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              {/* Decorative Blur behind dashboard */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-[80px] rounded-full z-0 opacity-50" />
              
              {/* Main Dashboard Card */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-x-0 top-10 bottom-10 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-8 flex flex-col gap-6 z-10"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-slate-500 font-medium mb-1">Total Revenue</h3>
                    <p className="text-4xl font-extrabold text-slate-900">$124,500.00</p>
                  </div>
                  <div className="p-3 bg-green-50 text-green-600 rounded-2xl flex items-center gap-2 font-semibold">
                    <TrendingUp className="h-5 w-5" />
                    +14.5%
                  </div>
                </div>
                
                {/* Dummy Chart lines */}
                <div className="flex-1 flex items-end gap-3 pt-4">
                  {[40, 70, 45, 90, 65, 85, 120].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary/10 rounded-t-lg relative group" style={{ height: `${h}%` }}>
                      <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-accent rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity" style={{ height: `${h * 0.6}%` }} />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating Card 1: Leads */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden md:flex absolute -left-16 top-32 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-xl p-5 items-center gap-4 w-56 z-20"
              >
                <div className="p-3 bg-blue-50 rounded-xl">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">New Leads</p>
                  <p className="text-xl font-bold text-slate-900">+342</p>
                </div>
              </motion.div>

              {/* Floating Card 2: Deal Closed */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="hidden md:block absolute -right-12 bottom-32 bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-xl p-5 w-64 z-20"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold shadow-inner">
                    JD
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">John Doe</p>
                    <p className="text-xs text-slate-500 font-medium">Enterprise Plan</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                  <Zap className="h-3 w-3" /> Deal Closed
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
