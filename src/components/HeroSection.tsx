"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "./Nav";

export default function HeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 4000),
      setTimeout(() => setPhase(5), 4800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <Nav visible={phase >= 4} />

      <section className="min-h-screen flex items-center relative overflow-hidden px-[5%]">
        {/* Background image */}
        <motion.div
          className="absolute top-0 right-0 w-[70%] h-full"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
            }}
            priority
          />
        </motion.div>

        {/* Content */}
        <div className="relative z-[2] max-w-[520px] pt-[72px]">
          <motion.p
            className="font-en text-[11px] tracking-[4px] text-teal uppercase font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Pharmaceutical Compliance Partner
          </motion.p>

          <h1 className="text-[52px] font-extralight text-dark-text leading-[1.2] tracking-tight mt-5 overflow-hidden">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              規制を、
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={phase >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              戦略に変える。
            </motion.span>
          </h1>

          <motion.div
            className="h-[2px] bg-teal mt-7"
            initial={{ width: 0 }}
            animate={phase >= 2 ? { width: 48 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.p
            className="text-[16px] font-light text-body-text leading-[1.85] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            製薬企業のコンプライアンス体制を、資材審査から
            <br />
            組織設計まで包括的に支援します。
          </motion.p>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 mt-10 text-[14px] text-dark-text hover:text-teal transition-colors duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={phase >= 4 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            ご相談はこちら
            <span className="inline-block w-8 h-px bg-teal relative group-hover:w-12 transition-all duration-300">
              <span className="absolute right-0 -top-[3px] w-2 h-2 border-r border-t border-teal rotate-45" />
            </span>
          </motion.a>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={phase >= 5 ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="font-en text-[10px] tracking-[2px] text-body-text uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-teal to-transparent animate-pulse" />
        </motion.div>
      </section>
    </>
  );
}
