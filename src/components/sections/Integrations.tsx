"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const integrationsRow1 = [
  { name: "Facebook Leads", color: "from-blue-600 to-blue-400" },
  { name: "IndiaMART", color: "from-orange-600 to-amber-500" },
  { name: "99acres", color: "from-red-600 to-rose-400" },
  { name: "Housing.com", color: "from-emerald-600 to-green-400" },
  { name: "Google Ads", color: "from-yellow-500 to-amber-400" },
  { name: "WhatsApp", color: "from-green-600 to-emerald-400" },
  { name: "TradeIndia", color: "from-amber-600 to-orange-400" },
];

const integrationsRow2 = [
  { name: "Justdial", color: "from-orange-600 to-orange-400" },
  { name: "LinkedIn", color: "from-blue-700 to-blue-500" },
  { name: "Zapier", color: "from-orange-500 to-red-400" },
  { name: "Salesforce", color: "from-sky-600 to-blue-400" },
  { name: "HubSpot", color: "from-orange-500 to-orange-400" },
  { name: "Shopify", color: "from-green-500 to-emerald-400" },
  { name: "Make (Integromat)", color: "from-purple-600 to-indigo-400" },
];

export function Integrations() {
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = marqueeRef1.current;
    const row2 = marqueeRef2.current;

    if (row1 && row1.firstElementChild) {
      gsap.to(row1.firstElementChild, {
        xPercent: -50,
        ease: "none",
        duration: 40,
        repeat: -1,
      });
    }

    if (row2 && row2.firstElementChild) {
      // Reverse direction: start at -50 and go to 0
      gsap.set(row2.firstElementChild, { xPercent: -50 });
      gsap.to(row2.firstElementChild, {
        xPercent: 0,
        ease: "none",
        duration: 45,
        repeat: -1,
      });
    }

    return () => {
      if (row1?.firstElementChild) gsap.killTweensOf(row1.firstElementChild);
      if (row2?.firstElementChild) gsap.killTweensOf(row2.firstElementChild);
    };
  }, []);

  const IntegrationCard = ({ integration }: { integration: any }) => (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex items-center justify-center min-w-[240px] h-20 bg-white/70 backdrop-blur-lg border border-slate-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.12)] px-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-white font-bold text-lg shadow-inner group-hover:scale-110 transition-transform duration-300`}>
          {integration.name.charAt(0)}
        </div>
        <span className="font-semibold text-slate-800 text-[1.05rem] group-hover:text-primary transition-colors">{integration.name}</span>
      </div>
    </motion.div>
  );

  return (
    <section id="integrations" className="py-32 overflow-hidden relative bg-slate-50 border-t border-slate-200/60">
      {/* Background styling */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center max-w-3xl relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm mb-6 shadow-sm">
          <Zap className="h-4 w-4 text-accent" />
          Seamless Integrations
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
          Leads flow in automatically from <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">everywhere.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600">
          Connect your favorite platforms in 1-click and watch your pipeline fill up on autopilot. No coding required.
        </p>
      </div>

      {/* Marquee Wrappers */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 pt-4 pb-8 z-10">
        {/* Left/Right Fades for Marquee */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Content - Row 1 */}
        <div className="flex w-max" ref={marqueeRef1}>
          {/* Group 1 */}
          <div className="flex gap-6 px-3">
            {integrationsRow1.map((integration, idx) => (
              <IntegrationCard key={`r1-g1-${idx}`} integration={integration} />
            ))}
          </div>
          {/* Group 2 (Clone for infinite loop) */}
          <div className="flex gap-6 px-3" aria-hidden="true">
            {integrationsRow1.map((integration, idx) => (
              <IntegrationCard key={`r1-g2-${idx}`} integration={integration} />
            ))}
          </div>
        </div>

        {/* Scrolling Content - Row 2 (Reverse) */}
        <div className="flex w-max" ref={marqueeRef2}>
          {/* Group 1 */}
          <div className="flex gap-6 px-3">
            {integrationsRow2.map((integration, idx) => (
              <IntegrationCard key={`r2-g1-${idx}`} integration={integration} />
            ))}
          </div>
          {/* Group 2 (Clone for infinite loop) */}
          <div className="flex gap-6 px-3" aria-hidden="true">
            {integrationsRow2.map((integration, idx) => (
              <IntegrationCard key={`r2-g2-${idx}`} integration={integration} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
