"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const companyInfo = [
  { label: "会社名（商号）", value: "合同会社 Japan Pharma Compliance Partners" },
  { label: "所在地", value: "東京都目黒区柿の木坂1-28-17" },
  { label: "代表者名", value: "代表社員　三鴨 晋也" },
  { label: "設立年月", value: "2026年1月" },
  { label: "法人番号", value: "9011003023417" },
];

const businessItems = [
  "医薬品・医療機器等の広告規制対応および資材審査体制構築に関するコンサルティング業務",
  "医薬品・医療機器等の広告資材の審査、研修、監査および関連する業務",
  "医薬品・医療機器等のプロモーション活動に関する教育・研修の企画および実施",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpStyle = (delay: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  });

  return (
    <section id="aboutus" ref={ref} className="py-[100px] md:py-[130px] lg:py-[160px] px-[5%]">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p
            className="font-en text-[12px] tracking-[4px] text-teal uppercase font-medium"
            style={fadeUpStyle(0)}
          >
            About Us
          </p>
          <h2
            className="text-[32px] md:text-[36px] lg:text-[40px] font-extralight text-dark-text leading-[1.4] mt-4 tracking-tight"
            style={fadeUpStyle(0.2)}
          >
            会社概要
          </h2>
          <div
            className="h-px bg-light-gray mt-8"
            style={{
              width: isInView ? "100%" : 0,
              transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.4s",
            }}
          />
        </div>

        {/* Company info table */}
        <div className="max-w-[800px]">
          {companyInfo.map((item, i) => (
            <div
              key={item.label}
              className="flex flex-col md:flex-row py-5 border-b border-light-gray last:border-b-0 gap-2 md:gap-0"
              style={fadeUpStyle(0.3 + i * 0.1)}
            >
              <dt className="w-full md:w-[220px] flex-shrink-0 text-[13px] text-body-text tracking-[0.5px]">
                {item.label}
              </dt>
              <dd className="text-[15px] md:text-[16px] text-dark-text font-light leading-[1.6]">
                {item.value}
              </dd>
            </div>
          ))}

          {/* Business content — multi-line */}
          <div
            className="flex flex-col md:flex-row py-5 border-b border-light-gray gap-2 md:gap-0"
            style={fadeUpStyle(0.3 + companyInfo.length * 0.1)}
          >
            <dt className="w-full md:w-[220px] flex-shrink-0 text-[13px] text-body-text tracking-[0.5px]">
              事業内容
            </dt>
            <dd className="flex-1">
              <ul className="space-y-3">
                {businessItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[9px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-teal" />
                    <span className="text-[15px] md:text-[16px] text-dark-text font-light leading-[1.7]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </div>
      </div>
    </section>
  );
}
