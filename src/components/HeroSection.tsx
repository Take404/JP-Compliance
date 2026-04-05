"use client";

import { useState, useEffect } from "react";
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

      <section className="min-h-screen flex items-center relative overflow-hidden px-[5%] py-[72px] md:py-0">
        {/* Background image — full width on mobile, right-side on desktop */}
        <div
          className="absolute top-0 right-0 w-full lg:w-[70%] h-full"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "scale(1)" : "scale(1.03)",
            transition: "opacity 1.6s ease-out, transform 1.6s ease-out",
          }}
        >
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover"
            style={{
              maskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.15) 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.15) 100%)",
            }}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-[2] w-full max-w-[520px] pt-[72px] md:pt-[72px] lg:pt-[72px]">
          <p
            className="font-en text-[11px] tracking-[4px] text-teal uppercase font-medium"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            Pharmaceutical Compliance Partner
          </p>

          <h1 className="text-[36px] md:text-[44px] lg:text-[52px] font-extralight text-dark-text leading-[1.2] tracking-tight mt-5 overflow-hidden">
            <span
              className="block"
              style={{
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              規制を、
            </span>
            <span
              className="block"
              style={{
                opacity: phase >= 1 ? 1 : 0,
                transform: phase >= 1 ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s",
              }}
            >
              戦略に変える。
            </span>
          </h1>

          <div
            className="h-[2px] bg-teal mt-7"
            style={{
              width: phase >= 2 ? 48 : 0,
              transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          />

          <p
            className="text-[15px] md:text-[16px] font-light text-body-text leading-[1.85] mt-6 w-full"
            style={{
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            製薬企業のコンプライアンス体制を、資材審査から
            <br className="hidden md:block" />
            組織設計まで包括的に支援します。
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 mt-8 md:mt-10 text-[14px] text-dark-text hover:text-teal transition-colors duration-300 cursor-pointer group"
            style={{
              opacity: phase >= 4 ? 1 : 0,
              transform: phase >= 4 ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            ご相談はこちら
            <span className="inline-block w-8 h-px bg-teal relative group-hover:w-12 transition-all duration-300">
              <span className="absolute right-0 -top-[3px] w-2 h-2 border-r border-t border-teal rotate-45" />
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: phase >= 5 ? 1 : 0,
            transition: "opacity 0.8s ease-out",
          }}
        >
          <span className="font-en text-[10px] tracking-[2px] text-body-text uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-teal to-transparent animate-pulse" />
        </div>
      </section>
    </>
  );
}
