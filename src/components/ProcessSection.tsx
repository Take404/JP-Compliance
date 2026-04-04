"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "環境整備", desc: "NDA締結後に体制やIT環境を確認し、導入の基盤を整備します。" },
  { num: "02", title: "課題明確化", desc: "優先度マトリクスを用いて90日プランを作成し、課題を明確化します。" },
  { num: "03", title: "業務準備", desc: "研修を実施し、テンプレートや判定基準を提供して業務準備を進めます。" },
  { num: "04", title: "本格稼働", desc: "試行審査を通じて運用をシミュレーションし、本稼働へ円滑に移行します。" },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    if (!isInView) return;
    const timers = steps.map((_, i) => setTimeout(() => setActiveStep(i), 1700 + i * 500));
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  // GSAP-style parallax: image translates on both X and Y axes as user scrolls
  // Plus grayscale → color transition
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imgRef.current || !imgWrapperRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;

      if (rect.top < wh && rect.bottom > 0) {
        // 0 at bottom of viewport → 1 at top
        const progress = Math.max(0, Math.min(1, (wh - rect.top) / (wh + rect.height * 0.5)));

        // Y-axis parallax: image moves up as user scrolls down (like reference translate 0%, 4%)
        const yOffset = (progress - 0.5) * -12;
        // X-axis: subtle drift from right to left as scroll progresses
        const xOffset = (1 - progress) * 3;

        imgRef.current.style.transform = `translate(${xOffset}%, ${yOffset}%) scale(1.05)`;

        // Grayscale to color
        const grayscale = Math.max(0, 100 - progress * 250);
        imgRef.current.style.filter = `grayscale(${grayscale}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-[140px]">
      <div ref={ref} className="max-w-container mx-auto px-12 flex gap-16 items-start">

        {/* Left: Image with GSAP-style parallax */}
        <motion.div
          ref={imgWrapperRef}
          className="flex-shrink-0 w-[40%] sticky top-[100px] overflow-hidden h-[560px] relative"
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src="/images/process.png"
            alt="Consulting meeting"
            className="absolute -top-[10%] -left-[3%] w-[106%] h-[120%] object-cover object-[center_40%]"
            style={{
              filter: "grayscale(100%)",
              transition: "filter 0.4s ease-out",
              willChange: "transform, filter",
            }}
          />

          {/* Top/bottom fade */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background: "linear-gradient(to bottom, #FAFAF8 0%, transparent 6%, transparent 94%, #FAFAF8 100%)",
            }}
          />

          {/* Floating icon badge (like reference faq-icon) */}
          <motion.div
            className="absolute bottom-8 right-8 z-[2] w-[72px] h-[72px] bg-teal rounded-full flex items-center justify-center shadow-lg"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 4v20M4 14h20" stroke="#1B4A4A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </motion.div>

        {/* Right: Header + Timeline */}
        <div className="flex-1 relative pl-10">
          <div className="mb-12">
            <motion.p className="font-en text-[12px] tracking-[4px] text-teal uppercase font-medium"
              initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              Process
            </motion.p>
            <motion.h2 className="text-[32px] font-extralight text-dark-text leading-[1.4] mt-4 tracking-tight"
              initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
              90日で本格稼働
            </motion.h2>
            <motion.p className="text-[15px] text-body-text leading-[1.8] mt-4"
              initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.6 }}>
              審査体制開発支援の場合、NDA締結から90日で本格稼働を実現します。
            </motion.p>
            <motion.div className="inline-block mt-5 px-[18px] py-2 bg-teal/10 border border-teal/20 font-en text-[12px] text-teal font-medium tracking-[1.5px]"
              initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.8 }}>
              90-DAY LAUNCH
            </motion.div>
          </div>

          <div className="relative">
            <motion.div className="absolute -left-[35px] top-2 w-px bg-light-gray"
              initial={{ height: 0 }} animate={isInView ? { height: "calc(100% - 16px)" } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }} />
            <motion.div className="absolute -left-[35px] top-2 w-px bg-teal"
              initial={{ height: 0 }} animate={isInView ? { height: "calc(100% - 16px)" } : {}}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 1.0 }} />

            {steps.map((step, i) => (
              <motion.div key={step.num} className="relative pb-11 last:pb-0"
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.0 + i * 0.3 }}>
                <div className={`absolute -left-10 top-[5px] w-[11px] h-[11px] rounded-full border-2 z-[2] transition-all duration-500 ${
                  activeStep >= i ? "border-teal bg-teal shadow-[0_0_0_4px_rgba(63,180,170,0.15)]" : "border-light-gray bg-off-white"}`} />
                <p className="font-en text-[12px] text-teal tracking-[2px] font-medium uppercase">Step {step.num}</p>
                <h3 className="text-[20px] font-normal text-dark-text mt-2">{step.title}</h3>
                <p className="text-[15px] text-body-text leading-[1.8] mt-2.5">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
