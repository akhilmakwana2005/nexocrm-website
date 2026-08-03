"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send, ArrowRight, Check } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset after showing success state
      setTimeout(() => {
        setIsSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 4000);
    }, 1500);
  };

  const inputClasses = (id: string) => `
    w-full px-5 py-4 bg-white/70 backdrop-blur-md border-2 rounded-2xl outline-none transition-all duration-300 text-slate-800
    ${focusedInput === id ? 'border-primary shadow-[0_0_20px_rgba(79,70,229,0.15)] bg-white' : 'border-slate-200/80 hover:border-primary/40'}
  `;

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-20%] w-[800px] h-[800px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Get in touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">extraordinary.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600"
          >
            Ready to transform your business? Our team of experts is here to guide you every step of the way.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
            <div className="grid lg:grid-cols-5 min-h-[600px]">
              
              {/* Left: Contact Info (Premium Dark Side) */}
              <div className="lg:col-span-2 relative overflow-hidden bg-slate-950 p-10 lg:p-14 text-white flex flex-col justify-between">
                {/* Decorative gradients inside dark panel */}
                <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/40 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-accent/40 rounded-full blur-[80px]" />
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-semibold mb-3">Contact Information</h3>
                  <p className="text-slate-400 mb-12 text-lg">Fill up the form and our team will get back to you within 24 hours.</p>

                  <div className="space-y-8">
                    {[
                      { icon: Phone, title: "Phone", details: "+1 (555) 123-4567", delay: 0 },
                      { icon: Mail, title: "Email", details: "hello@nexocrm.com", delay: 0.1 },
                      { icon: MapPin, title: "Address", details: "100 Innovation Drive, San Francisco, CA", delay: 0.2 },
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + item.delay }}
                        viewport={{ once: true }}
                        className="flex items-start gap-5 group cursor-pointer"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]">
                          <item.icon className="h-6 w-6 text-slate-300 group-hover:text-white transition-colors" />
                        </div>
                        <div className="pt-1">
                          <p className="text-sm text-slate-400 mb-1 font-medium">{item.title}</p>
                          <p className="font-semibold text-lg text-slate-100 group-hover:text-primary transition-colors">{item.details}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-16 pt-10 border-t border-white/10">
                  <p className="text-sm text-slate-400 mb-4 font-medium">Trusted by innovative teams worldwide</p>
                  <div className="flex gap-4">
                    <div className="flex -space-x-4">
                      {[
                        "https://i.pravatar.cc/100?img=1",
                        "https://i.pravatar.cc/100?img=2",
                        "https://i.pravatar.cc/100?img=3",
                        "https://i.pravatar.cc/100?img=4"
                      ].map((img, i) => (
                        <img key={i} src={img} alt="User" className="w-12 h-12 rounded-full border-2 border-slate-950 object-cover" />
                      ))}
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex gap-1 text-yellow-400 text-sm">
                        {"★".repeat(5)}
                      </div>
                      <span className="text-xs text-slate-300 font-medium">4.9/5 from 2k+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 p-10 lg:p-14 bg-white/20 relative">
                <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10 h-full justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="firstName" className="text-sm font-bold text-slate-700 ml-1 tracking-wide uppercase">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        required
                        onFocus={() => setFocusedInput('firstName')}
                        onBlur={() => setFocusedInput(null)}
                        className={inputClasses('firstName')} 
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="lastName" className="text-sm font-bold text-slate-700 ml-1 tracking-wide uppercase">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        required
                        onFocus={() => setFocusedInput('lastName')}
                        onBlur={() => setFocusedInput(null)}
                        className={inputClasses('lastName')} 
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1 tracking-wide uppercase">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      className={inputClasses('email')} 
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1 tracking-wide uppercase">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      required
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      className={`${inputClasses('message')} resize-none`} 
                      placeholder="Tell us about your project goals and timeline..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="group relative w-full overflow-hidden px-8 py-5 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-primary transition-all duration-300 disabled:opacity-90 disabled:cursor-not-allowed shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.5)] mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="h-6 w-6 animate-spin" />
                            <span className="text-lg">Sending your message...</span>
                          </motion.div>
                        ) : isSubmitted ? (
                          <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 text-green-300"
                          >
                            <Check className="h-6 w-6" />
                            <span className="text-lg text-white">Message successfully sent!</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 text-lg"
                          >
                            Send Message
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
