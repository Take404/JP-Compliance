"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "./CountUp";

const stats = [
  { target: 99.9, decimals: 1, suffix: "%", desc: "スライドレビュー\n事前提出率", year: "2025" },
  { target: 99.5, decimals: 1, suffix: "%", desc: "スライドレビュー\n期限前提出率", year: "2025" },
  { target: 4.1, decimals: 1, suffix: "/5", desc: "資材審査\n満足度", year: "2024" },
  { target: 0, decimals: 0, suffix: "件", desc: "厚労省広告監視事業\n指摘件数", year: "2019–2025" },
];

export default function TrackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-[100px] md:py-[130px] lg:py-[160px]">
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <p
            className="font-en text-[14px] tracking-[5px] text-teal uppercase font-medium"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            Track Record
          </p>
          <h2
            className="text-[32px] md:text-[36px] lg:text-[40px] font-extralight text-dark-text leading-[1.4] mt-5 tracking-tight"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            数字が証明する品質
          </h2>
        </div>

        {/* 2x2 grid on mobile, 4 columns on tablet and up */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.desc}
              className={`text-center py-10 md:py-16 px-4 md:px-8 relative
                ${i % 2 !== 0 ? "before:absolute before:left-0 before:top-[20%] before:h-[60%] before:w-px before:bg-light-gray" : ""}
                ${i >= 2 ? "border-t border-light-gray md:border-t-0" : ""}
                ${i > 0 && i % 2 === 0 ? "md:before:absolute md:before:left-0 md:before:top-[20%] md:before:h-[60%] md:before:w-px md:before:bg-light-gray" : ""}
              `}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.2}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.2}s`,
              }}
            >
              <div className="font-en text-[48px] md:text-[60px] lg:text-[72px] font-extralight text-dark-text tracking-tight leading-none">
                <CountUp target={stat.target} decimals={stat.decimals} suffix={stat.suffix} duration={1200} />
              </div>
              <div
                className="h-[2px] bg-teal mx-auto mt-4 md:mt-5"
                style={{
                  width: isInView ? 36 : 0,
                  transition: `width 0.6s cubic-bezier(0.16,1,0.3,1) ${0.8 + i * 0.2}s`,
                }}
              />
              <p className="text-[13px] md:text-[15px] lg:text-[16px] text-body-text leading-[1.7] mt-4 md:mt-5 whitespace-pre-line">{stat.desc}</p>
              <p className="font-en text-[12px] md:text-[13px] text-teal tracking-[1px] mt-2 md:mt-3 opacity-70">{stat.year}</p>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-10 md:mt-16 text-[13px] md:text-[14px] text-body-text opacity-50"
          style={{
            opacity: isInView ? 0.5 : 0,
            transform: isInView ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.7s ease-out 1.5s, transform 0.7s ease-out 1.5s",
          }}
        >
          ※ 代表社員の在職中の大手製薬企業における実績
        </p>
      </div>
    </section>
  );
}
