"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#whyus" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 12 } as const,
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  });

  return (
    <section id="contact" ref={ref} className="bg-teal-deep relative overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none animate-[gradientDrift_12s_ease-in-out_infinite_alternate]"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(63,180,170,0.06) 0%, transparent 50%)" }} />

      <div className="pt-[160px] pb-[140px] relative z-[1]">
        <div className="max-w-container mx-auto px-12 text-center">
          <motion.div className="w-[100px] mx-auto mb-12"
            initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <Image src="/images/logo.png" alt="JP Compliance" width={100} height={100} className="w-full brightness-200" />
          </motion.div>

          <motion.p className="font-en text-[13px] tracking-[4px] text-teal uppercase font-medium" {...fadeUp(0.3)}>Contact</motion.p>
          <motion.h2 className="text-[48px] font-extralight text-white leading-[1.35] mt-6 tracking-tight" {...fadeUp(0.5)}>
            まずはご相談ください。
          </motion.h2>
          <motion.p className="text-[18px] text-white/60 leading-[1.8] mt-5" {...fadeUp(0.7)}>
            貴社の課題に合わせた最適な支援プランをご提案いたします。
          </motion.p>
          <motion.a href="mailto:contact@jp-compliance.co.jp"
            className="inline-block mt-11 px-14 py-5 text-[16px] font-medium text-teal-deep bg-teal hover:bg-[#4DC4BA] hover:shadow-[0_8px_32px_rgba(63,180,170,0.25)] transition-all duration-400 relative overflow-hidden group"
            {...fadeUp(1.0)}>
            <span className="relative z-[1]">お問い合わせ →</span>
            <span className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:left-[120%] transition-[left] duration-600" />
          </motion.a>

          <motion.div className="h-px bg-teal/20 mx-auto mt-20"
            initial={{ width: 0 }} animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.4 }} style={{ maxWidth: 800 }} />
        </div>
      </div>

      <motion.footer className="pb-11 pt-14 relative z-[1]"
        initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 1.8 }}>
        <div className="max-w-container mx-auto px-12">
          <div className="flex justify-between items-start mb-10">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="" width={44} height={44} className="brightness-200 opacity-70" />
              <span className="font-en text-[16px] font-medium text-white/70 tracking-[2px] uppercase">
                JP <span className="text-teal">Compliance</span>
              </span>
            </div>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-en text-[14px] text-white/40 hover:text-teal transition-colors duration-300">{link.label}</a>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-white/[0.06]">
            <p className="font-en text-[13px] text-white/25">&copy; 2026 JP Compliance. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="font-en text-[13px] text-white/25 hover:text-white/50 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="font-en text-[13px] text-white/25 hover:text-white/50 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}
