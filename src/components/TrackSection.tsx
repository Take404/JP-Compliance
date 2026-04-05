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
    <section ref={ref} className="py-[160px]">
      <div className="max-w-container mx-auto px-12">
        <div className="text-center mb-24">
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
            className="text-[40px] font-extralight text-dark-text leading-[1.4] mt-5 tracking-tight"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            数字が証明する品質
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.desc}
              className={`text-center py-16 px-8 relative ${i > 0 ? "before:absolute before:left-0 before:top-[20%] before:h-[60%] before:w-px before:bg-light-gray" : ""}`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.2}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.2}s`,
              }}
            >
              <div className="font-en text-[72px] font-extralight text-dark-text tracking-tight leading-none">
                <CountUp target={stat.target} decimals={stat.decimals} suffix={stat.suffix} duration={1200} />
              </div>
              <div
                className="h-[2px] bg-teal mx-auto mt-5"
                style={{
                  width: isInView ? 36 : 0,
                  transition: `width 0.6s cubic-bezier(0.16,1,0.3,1) ${0.8 + i * 0.2}s`,
                }}
              />
              <p className="text-[16px] text-body-text leading-[1.7] mt-5 whitespace-pre-line">{stat.desc}</p>
              <p className="font-en text-[13px] text-teal tracking-[1px] mt-3 opacity-70">{stat.year}</p>
            </div>
          ))}
        </div>

        <p
          className="text-center mt-16 text-[14px] text-body-text opacity-50"
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
