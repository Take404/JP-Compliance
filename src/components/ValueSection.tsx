"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import CountUp from "./CountUp";

const stats = [
  { target: 100, suffix: "名", label: "全国の該当経験者", desc: "推定人数" },
  { target: 69, suffix: "社", label: "製薬協加盟企業", desc: "各社1〜2名の希少人材" },
  { target: 7, suffix: "年間", label: "実務責任者経験", desc: "代表社員の大手製薬企業在籍" },
];

const quoteLines = [
  { text: "資材審査の「組織開発」と", emphasis: false },
  { text: "「審査プロセス導入」を", emphasis: false },
  { text: "包括的に支援できる企業は、", emphasis: false },
  { text: "ほぼ存在しません。", emphasis: true },
];

export default function ValueSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpStyle = (delay: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(12px)",
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-[80px] md:py-[100px] relative overflow-hidden bg-teal-deep">
      <div
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] pointer-events-none animate-[gradientDrift_12s_ease-in-out_infinite_alternate]"
        style={{
          background: "radial-gradient(ellipse at 25% 50%, rgba(63,180,170,0.07) 0%, transparent 50%), radial-gradient(ellipse at 75% 40%, rgba(63,180,170,0.04) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[380px] h-[420px] pointer-events-none"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 2s ease-out 1.5s",
        }}
      >
        <Image src="/images/logo.png" alt="" fill className="object-contain opacity-[0.08] brightness-150" />
      </div>

      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-12 w-full relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-20 items-start">
          <div className="pt-3">
            <p className="font-en text-[12px] tracking-[4px] text-teal uppercase font-medium" style={fadeUpStyle(0)}>Our Position</p>
            <div className="text-[64px] leading-none text-teal mt-8 opacity-40" style={fadeUpStyle(0.3)}>&ldquo;</div>
            <div className="mt-4">
              {quoteLines.map((line, i) => (
                <p
                  key={i}
                  className={`text-[24px] md:text-[28px] lg:text-[34px] font-extralight leading-[1.6] ${line.emphasis ? "text-teal font-light" : "text-white"}`}
                  style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.2}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.2}s`,
                  }}
                >
                  {line.text}
                </p>
              ))}
            </div>
            <div
              className="h-px bg-teal my-8 md:my-11"
              style={{
                width: isInView ? 48 : 0,
                transition: "width 0.8s cubic-bezier(0.16,1,0.3,1) 1.3s",
              }}
            />
            <p className="text-[15px] md:text-[17px] text-white/75 leading-[1.9]" style={fadeUpStyle(1.5)}>
              実務レベルの資材審査代行は外部委託が可能である一方、経営・組織・ガバナンスの観点から資材審査を&ldquo;仕組みとして構築し、定着させる&rdquo;支援は市場にほぼ存在しない構造的な空白があります。
            </p>
            <div className="mt-8" style={fadeUpStyle(1.8)}>
              <p className="text-[16px] md:text-[18px] text-white/90 leading-[1.85]">
                法令遵守と表現の戦略性を両立させ、資材を<br />
                <span className="text-teal font-normal">「制約の産物」ではなく「価値創出の手段」</span>として機能させる。
              </p>
            </div>
          </div>

          {/* Stat cards — stacked full width on mobile, column on desktop */}
          <div className="flex flex-col gap-5 md:gap-7 lg:pt-[60px]">
            {stats.map((stat, i) => (
              <div
                key={stat.suffix}
                className="bg-white/[0.04] border border-teal/10 p-7 md:p-9 relative overflow-hidden cursor-default group hover:bg-teal/[0.08] hover:border-teal/25 transition-all duration-400"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0)" : "translateX(20px)",
                  transition: `opacity 0.7s ease-out ${1.0 + i * 0.3}s, transform 0.7s ease-out ${1.0 + i * 0.3}s`,
                }}
              >
                <div className="absolute left-0 top-0 w-[3px] h-full bg-teal scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-400" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-baseline gap-4 md:gap-5 relative z-[1]">
                  <div className="font-en text-[52px] md:text-[64px] font-extralight text-white leading-none tracking-tight group-hover:text-teal transition-colors duration-300">
                    <CountUp target={stat.target} suffix={stat.suffix} duration={1200 + i * 300} />
                  </div>
                  <div>
                    <p className="text-[15px] md:text-[16px] text-white/80 font-normal">{stat.label}</p>
                    <p className="text-[13px] md:text-[14px] text-white/40 mt-1">{stat.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
