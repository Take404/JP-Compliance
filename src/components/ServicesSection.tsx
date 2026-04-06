"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const services = [
  {
    num: ".01",
    title: "コンプライアンス研修",
    desc: "薬機法や景品表示法などを網羅し、最新トピック反映の実務研修を演習付きで提供します。",
    image: "/images/svc-01.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M4 14h32" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="20" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M18 24l1.5 1.5L23 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: ".02",
    title: "資材審査 相談",
    desc: "企業ポリシーとJPMAコードの整合性確保や判定基準の明文化を支援します。",
    image: "/images/svc-02.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6h24v28H8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M13 14h14M13 19h14M13 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M28 30l1.5 1.5L33 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: ".03",
    title: "資材審査 受託",
    desc: "科学的妥当性と法規適合性を両立した審査を行い、代替案を提示します。",
    image: "/images/svc-03.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L36 12v16L20 36 4 28V12z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: ".04",
    title: "スライドレビュー受託",
    desc: "講演会スライドの事前審査を迅速かつ正確に実施します。",
    image: "/images/svc-04.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M20 26v8M14 34h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 14l4 3 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: ".05",
    title: "審査体制 開発支援",
    desc: "SOPやワークフロー、権限設計、KPI設計を包括的に支援します。",
    image: "/images/svc-05.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="10" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M20 16v4l-8 4M20 20l8 4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: ".06",
    title: "モニタリング",
    desc: "販売情報提供活動の適正性を定期的にモニタリングし改善を提案します。",
    image: "/images/svc-06.png",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 22c2-4 4-6 8-6s6 4 8 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" ref={ref} className="py-[100px] md:py-[120px] lg:py-[140px] bg-off-white">
      <div className="max-w-container mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="font-en text-[14px] tracking-[5px] text-teal uppercase font-medium"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            Services
          </p>
          <h2
            className="text-[32px] md:text-[36px] lg:text-[40px] font-extralight text-dark-text leading-[1.4] mt-5 tracking-tight"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
            }}
          >
            支援内容
          </h2>
        </div>

        {/* Cards grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.num}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.25}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${0.5 + i * 0.25}s`,
              }}
            >
              {/* Image - grayscale by default, color on hover */}
              <div className="aspect-[3/4] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark overlay - left half */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-deep/90 via-teal-deep/70 to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  {/* Icon - rotates and slides up on hover */}
                  <div className="text-white/80 group-hover:text-teal transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[360deg]">
                    {svc.icon}
                  </div>

                  {/* Bottom content */}
                  <div>
                    {/* Number + Title - always visible */}
                    <p className="font-en text-[14px] text-teal font-medium tracking-wide">
                      {svc.num}
                    </p>
                    <h3 className="text-[20px] text-white font-normal mt-2 leading-[1.4]">
                      {svc.title}
                    </h3>

                    {/* Description - slides up on hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-[120px] group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <p className="text-[14px] text-white/70 leading-[1.7] mt-3">
                        {svc.desc}
                      </p>
                      {/* TODO: 詳しく見るリンクを復活させる（詳細ページ作成後）
                      <div className="mt-4 inline-flex items-center gap-2 text-teal text-[13px] font-en">
                        <span>詳しく見る</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
