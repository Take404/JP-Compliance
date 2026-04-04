"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const items = [
  { num: "01", title: "専門性の高さ", desc: "大手製薬企業で資材審査の管理職・専門職を経験した社員が直接審査・助言。外注委託機関とは専門レベルが圧倒的に違います。" },
  { num: "02", title: "包括的なソリューション", desc: "資材審査だけでなく、プロセス設計・システム構築・組織開発まで一貫して提案可能。審査から体制構築までワンストップで支援します。" },
  { num: "03", title: "実績に裏付けられた信頼性", desc: "大手製薬企業でスライドレビュー・資材審査プロセス・システム・組織開発をリードし、品質強化・コンプライアンス強化を成功に導いた実績があります。" },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 15 } as const,
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  });

  return (
    <section id="whyus" ref={ref} className="py-[140px] px-[5%]">
      <div className="max-w-container mx-auto flex gap-14 items-start">
        <motion.div
          className="flex-shrink-0 w-[48%] sticky top-[100px] overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
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
          <p className="font-en text-[11px] tracking-[1px] text-body-text mt-4 opacity-50">
            Organization development &amp; compliance infrastructure
          </p>
        </motion.div>

        <div className="flex-1 pt-2">
          <motion.p className="font-en text-[11px] tracking-[4px] text-teal uppercase font-medium" {...fadeUp(0.2)}>Why Us</motion.p>
          <motion.h2 className="text-[32px] font-extralight text-dark-text leading-[1.4] mt-4 tracking-tight" {...fadeUp(0.4)}>
            クライアントの課題解決に<br />伴走する、唯一のパートナー
          </motion.h2>
          <motion.p className="text-[15px] text-body-text leading-[1.8] mt-5" {...fadeUp(0.6)}>
            医薬品広告規制に関する包括的助言を提供できるのは当社のみ。<br />資材審査の受託にとどまらず、仕組みとして構築し、定着させます。
          </motion.p>

          <div className="mt-12">
            {items.map((item, i) => (
              <motion.div key={item.num} className="py-7 border-t border-light-gray last:border-b" {...fadeUp(0.8 + i * 0.2)}>
                <div className="flex items-baseline gap-4">
                  <span className="font-en text-[12px] text-teal tracking-[2px] font-medium">{item.num}</span>
                  <h3 className="text-[20px] font-normal text-dark-text">{item.title}</h3>
                </div>
                <p className="text-[14px] text-body-text leading-[1.8] mt-2.5 pl-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12" {...fadeUp(1.6)}>
            <div className="flex gap-0.5 mt-3">
              <div className="w-[140px] p-3.5 text-[13px] font-medium text-body-text" />
              <div className="flex-1 bg-[#F0EFEB] p-3.5 text-center font-en text-[11px] tracking-[1px] uppercase text-body-text">外部委託機関</div>
              <div className="flex-1 bg-teal p-3.5 text-center font-en text-[11px] tracking-[1px] uppercase text-white font-medium">JP Compliance</div>
            </div>
            <div className="flex gap-0.5">
              <div className="w-[140px] p-3.5 text-[13px] font-medium text-body-text">対応範囲</div>
              <div className="flex-1 bg-[#F0EFEB] p-3.5 text-[13px] text-body-text leading-[1.5]">資材審査受託のみ</div>
              <div className="flex-1 bg-teal p-3.5 text-[13px] text-white font-medium leading-[1.5]">資材審査 + プロセス設計 + システム構築 + 組織開発 + 包括的助言</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
