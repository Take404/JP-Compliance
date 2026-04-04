"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { num: "01", title: "コンプライアンス研修", desc: "薬機法や景品表示法などを網羅し、最新トピック反映の実務研修を演習付きで提供します。内容はカスタマイズ可能です。" },
  { num: "02", title: "資材審査 相談", desc: "企業ポリシーとJPMAコードの整合性確保や例外運用、判定基準の明文化を支援します。" },
  { num: "03", title: "資材審査 受託", desc: "科学的妥当性と法規適合性を両立しながら審査を行い、リスク表現に対する代替案を提示します。" },
  { num: "04", title: "スライドレビュー受託", desc: "講演会スライドの事前審査を迅速かつ正確に実施します。" },
  { num: "05", title: "審査体制 開発支援", desc: "SOPやワークフロー、権限設計、システム化、KPI設計を包括的に支援します。" },
  { num: "06", title: "モニタリング", desc: "販売情報提供活動の適正性を定期的にモニタリングし改善を提案します。" },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setOpenIndex(0), 1800);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="services" ref={ref} className="py-[140px]">
      <div className="max-w-container mx-auto px-12 flex gap-20 items-start">
        <div className="flex-shrink-0 w-[35%] sticky top-[100px]">
          <motion.p className="font-en text-[12px] tracking-[4px] text-teal uppercase font-medium"
            initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            Services
          </motion.p>
          <motion.h2 className="text-[32px] font-extralight text-dark-text leading-[1.4] mt-4 tracking-tight"
            initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            支援内容
          </motion.h2>
          <motion.p className="text-[15px] text-body-text leading-[1.8] mt-5"
            initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 }}>
            コンプライアンス研修から審査体制の構築まで、貴社の課題とフェーズに合わせた最適な支援を提供します。
          </motion.p>
        </div>

        <div className="flex-1">
          {services.map((svc, i) => (
            <motion.div key={svc.num}
              className={`border-t border-light-gray ${i === services.length - 1 ? "border-b" : ""}`}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.15 }}>
              <button className="w-full flex justify-between items-center py-6 cursor-pointer group" onClick={() => toggle(i)}>
                <div className="flex items-baseline gap-4">
                  <span className="font-en text-[13px] text-teal tracking-[2px] font-medium">{svc.num}</span>
                  <h3 className={`text-[19px] font-normal transition-colors duration-300 ${openIndex === i ? "text-teal" : "text-dark-text group-hover:text-teal"}`}>{svc.title}</h3>
                </div>
                <div className="w-7 h-7 relative flex-shrink-0">
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-px transition-colors duration-300 ${openIndex === i ? "bg-teal" : "bg-body-text group-hover:bg-teal"}`} />
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4 transition-all duration-400 ${openIndex === i ? "opacity-0 rotate-90 bg-teal" : "bg-body-text group-hover:bg-teal"}`} />
                </div>
              </button>
              <div className="overflow-hidden transition-all duration-500"
                style={{ maxHeight: openIndex === i ? "200px" : "0px", opacity: openIndex === i ? 1 : 0, transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                <p className="text-[15px] text-body-text leading-[1.8] pb-7 pl-11">{svc.desc}</p>
              </div>
              {openIndex === i && (
                <motion.div className="h-[2px] bg-teal" initial={{ width: 0 }} animate={{ width: 32 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
