"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
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

  const fadeUpStyle = (delay: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  return (
    <section id="contact" ref={ref} className="bg-teal-deep relative overflow-hidden">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none animate-[gradientDrift_12s_ease-in-out_infinite_alternate]"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(63,180,170,0.06) 0%, transparent 50%)" }} />

      <div className="pt-[100px] md:pt-[130px] lg:pt-[160px] pb-[90px] md:pb-[120px] lg:pb-[140px] relative z-[1]">
        <div className="max-w-container mx-auto px-5 md:px-8 lg:px-12 text-center">
          <div
            className="w-[80px] md:w-[100px] mx-auto mb-10 md:mb-12"
            style={{
              opacity: isInView ? 0.6 : 0,
              transform: isInView ? "scale(1)" : "scale(0.8)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <Image src="/images/logo.png" alt="JP Compliance" width={100} height={100} className="w-full brightness-200" />
          </div>

          <p className="font-en text-[13px] tracking-[4px] text-teal uppercase font-medium" style={fadeUpStyle(0.3)}>Contact</p>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extralight text-white leading-[1.35] mt-5 md:mt-6 tracking-tight" style={fadeUpStyle(0.5)}>
            まずはご相談ください。
          </h2>
          <p className="text-[15px] md:text-[18px] text-white/60 leading-[1.8] mt-4 md:mt-5" style={fadeUpStyle(0.7)}>
            貴社の課題に合わせた最適な支援プランをご提案いたします。
          </p>
          <a
            href="mailto:contact@jp-compliance.co.jp"
            className="inline-block w-full md:w-auto mt-9 md:mt-11 px-10 md:px-14 py-4 md:py-5 text-[15px] md:text-[16px] font-medium text-teal-deep bg-teal hover:bg-[#4DC4BA] hover:shadow-[0_8px_32px_rgba(63,180,170,0.25)] transition-all duration-400 relative overflow-hidden group"
            style={fadeUpStyle(1.0)}
          >
            <span className="relative z-[1]">お問い合わせ →</span>
            <span className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover:left-[120%] transition-[left] duration-600" />
          </a>

          <div
            className="h-px bg-teal/20 mx-auto mt-16 md:mt-20"
            style={{
              width: isInView ? "100%" : 0,
              maxWidth: 800,
              transition: "width 1s cubic-bezier(0.16,1,0.3,1) 1.4s",
            }}
          />
        </div>
      </div>

      <footer
        className="pb-9 md:pb-11 pt-10 md:pt-14 relative z-[1]"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.8s ease-out 1.8s",
        }}
      >
        <div className="max-w-container mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="" width={44} height={44} className="brightness-200 opacity-70" />
              <span className="font-en text-[16px] font-medium text-white/70 tracking-[2px] uppercase">
                JP <span className="text-teal">Compliance</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-en text-[13px] md:text-[14px] text-white/40 hover:text-teal transition-colors duration-300">{link.label}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 pt-5 md:pt-6 border-t border-white/[0.06]">
            <p className="font-en text-[12px] md:text-[13px] text-white/25">&copy; 2026 JP Compliance. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="font-en text-[12px] md:text-[13px] text-white/25 hover:text-white/50 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="font-en text-[12px] md:text-[13px] text-white/25 hover:text-white/50 transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
