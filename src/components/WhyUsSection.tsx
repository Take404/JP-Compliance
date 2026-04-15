"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import SplitText from "./SplitText";

const items = [
  { num: "01", title: "専門性の高さ", desc: "大手製薬企業で資材審査の管理職・専門職を経験した社員が直接審査・助言。外注委託機関とは専門レベルが圧倒的に違います。" },
  { num: "02", title: "包括的なソリューション", desc: "資材審査だけでなく、プロセス設計・システム構築・組織開発まで一貫して提案可能。審査から体制構築までワンストップで支援します。" },
  { num: "03", title: "実績に裏付けられた信頼性", desc: "大手製薬企業でスライドレビュー・資材審査プロセス・システム・組織開発をリードし、品質強化・コンプライアンス強化を成功に導いた実績があります。" },
];

// Calculate animation durations to chain properly
// Heading: "クライアントの課題解決に伴走する、唯一のパートナー" = ~16 chars visible + delay
const HEADING_START = 0.4;
const HEADING_CHARS = 16; // approximate chars in longest line
const HEADING_CHAR_DELAY = 0.03;
const HEADING_DURATION = 0.5;
const HEADING_END = HEADING_START + HEADING_CHARS * HEADING_CHAR_DELAY + HEADING_DURATION; // ~1.38s

// Sub text starts after heading
const SUB_START = HEADING_END + 0.2; // ~1.58s
const SUB_TEXT = "医薬品広告規制に関する包括的助言を提供できるのは当社のみ。資材審査の受託にとどまらず、仕組みとして構築し、定着させます。";
const SUB_CHARS = SUB_TEXT.length; // ~38 chars
const SUB_CHAR_DELAY = 0.015;
const SUB_DURATION = 0.4;
const SUB_END = SUB_START + SUB_CHARS * SUB_CHAR_DELAY + SUB_DURATION; // ~2.55s

// Items start after sub text finishes — match the rhythm of heading→sub transition
const ITEMS_START = SUB_END + 0.4; // ~2.95s — same breathing room as heading→sub
const ITEM_STAGGER = 0.8; // time between each item — enough for title chars to finish before next starts

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timers = [
      setTimeout(() => setPhase(1), HEADING_START * 1000),     // heading
      setTimeout(() => setPhase(2), SUB_START * 1000),         // sub text
      setTimeout(() => setPhase(3), ITEMS_START * 1000),       // item 01
      setTimeout(() => setPhase(4), (ITEMS_START + ITEM_STAGGER) * 1000),     // item 02
      setTimeout(() => setPhase(5), (ITEMS_START + ITEM_STAGGER * 2) * 1000), // item 03
      setTimeout(() => setPhase(6), (ITEMS_START + ITEM_STAGGER * 3) * 1000), // comparison
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <section id="whyus" ref={ref} className="py-[80px] md:py-[110px] lg:py-[140px] px-[5%]">
      <div className="max-w-container mx-auto flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
        {/* Left: Image — full width on mobile/tablet, fixed width on desktop */}
        <div
          className="w-full lg:w-[48%] lg:flex-shrink-0 lg:sticky lg:top-[100px] overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <Image
            src="/images/whyus.png"
            alt="Meeting room"
            width={800}
            height={533}
            className="w-full h-auto hover:scale-[1.02] transition-transform duration-600"
            style={{
              maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.4) 80%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.4) 80%, transparent 100%)",
            }}
          />
        </div>

        {/* Right: Content — strict top-to-bottom sequential animation */}
        <div className="flex-1 pt-2">
          {/* Label */}
          <p
            className="font-en text-[11px] tracking-[4px] text-teal uppercase font-medium"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s",
            }}
          >
            Why Us
          </p>

          {/* Heading: char-by-char */}
          <SplitText
            text={"クライアントの課題解決に\n伴走する、唯一のパートナー"}
            className="text-[32px] font-extralight text-dark-text leading-[1.4] mt-4 tracking-tight"
            as="h2"
            charDelay={HEADING_CHAR_DELAY}
            startDelay={HEADING_START}
            duration={HEADING_DURATION}
            yOffset={25}
          />

          {/* Sub text: char-by-char — waits for heading to finish */}
          {phase >= 2 ? (
            <SplitText
              text={"医薬品広告規制に関する包括的助言を提供できるのは当社のみ。\n資材審査の受託にとどまらず、仕組みとして構築し、定着させます。"}
              className="text-[15px] text-body-text leading-[1.8] mt-5"
              as="p"
              charDelay={SUB_CHAR_DELAY}
              startDelay={0}
              duration={SUB_DURATION}
              yOffset={15}
            />
          ) : (
            <p className="text-[15px] text-body-text leading-[1.8] mt-5 opacity-0">
              医薬品広告規制に関する包括的助言を提供できるのは当社のみ。
              資材審査の受託にとどまらず、仕組みとして構築し、定着させます。
            </p>
          )}

          {/* Items: each waits for the previous to appear */}
          <div className="mt-12">
            {items.map((item, i) => (
              <div
                key={item.num}
                className="py-7 border-t border-light-gray last:border-b"
                style={{
                  opacity: phase >= 3 + i ? 1 : 0,
                  transform: phase >= 3 + i ? "translateY(0)" : "translateY(30px)",
                  transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-en text-[12px] text-teal tracking-[2px] font-medium"
                    style={{
                      opacity: phase >= 3 + i ? 1 : 0,
                      transform: phase >= 3 + i ? "translateX(0)" : "translateX(-10px)",
                      transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
                    }}
                  >
                    {item.num}
                  </span>
                  {phase >= 3 + i ? (
                    <SplitText
                      text={item.title}
                      className="text-[20px] font-normal text-dark-text"
                      as="h3"
                      charDelay={0.025}
                      startDelay={0.05}
                      duration={0.4}
                      yOffset={20}
                    />
                  ) : (
                    <h3 className="text-[20px] font-normal text-dark-text opacity-0">{item.title}</h3>
                  )}
                </div>
                <p
                  className="text-[14px] text-body-text leading-[1.8] mt-2.5 pl-10"
                  style={{
                    opacity: phase >= 3 + i ? 1 : 0,
                    transform: phase >= 3 + i ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison table: appears after all items */}
          <div
            className="mt-12"
            style={{
              opacity: phase >= 6 ? 1 : 0,
              transform: phase >= 6 ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <p className="text-[13px] font-medium text-body-text mb-3 tracking-[0.5px]">対応範囲の違い</p>
            <div
              className="flex gap-0.5"
              style={{
                opacity: phase >= 6 ? 1 : 0,
                transition: "opacity 0.6s ease-out 0.15s",
              }}
            >
              <div className="w-[100px] md:w-[140px] p-3 md:p-3.5 text-[13px] font-medium text-body-text" />
              <div className="flex-1 bg-[#F0EFEB] p-3 md:p-3.5 text-center text-[10px] md:text-[11px] tracking-[0.5px] text-body-text leading-[1.5]">
                他社<br />（一般的な外部委託機関）
              </div>
              <div className="flex-1 bg-teal p-3 md:p-3.5 text-center text-[10px] md:text-[11px] tracking-[0.5px] text-white font-medium leading-[1.5]">
                当社<br />（JP Compliance Partners）
              </div>
            </div>
            <div
              className="flex gap-0.5"
              style={{
                opacity: phase >= 6 ? 1 : 0,
                transform: phase >= 6 ? "translateY(0)" : "translateY(15px)",
                transition: "opacity 0.7s ease-out 0.3s, transform 0.7s ease-out 0.3s",
              }}
            >
              <div className="w-[100px] md:w-[140px] p-3 md:p-3.5 text-[12px] md:text-[13px] font-medium text-body-text">対応範囲</div>
              <div className="flex-1 bg-[#F0EFEB] p-3 md:p-3.5 text-[12px] md:text-[13px] text-body-text leading-[1.5]">
                資材審査受託のみ
              </div>
              <div className="flex-1 bg-teal p-3 md:p-3.5 text-[12px] md:text-[13px] text-white font-medium leading-[1.5]">
                資材審査 + プロセス設計 + システム構築 + 組織開発 + 包括的助言
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
