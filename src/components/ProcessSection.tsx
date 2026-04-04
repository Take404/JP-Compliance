"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "./SplitText";

const steps = [
  { num: "01", title: "環境整備", desc: "NDA締結後に体制やIT環境を確認し、導入の基盤を整備します。" },
  { num: "02", title: "課題明確化", desc: "優先度マトリクスを用いて90日プランを作成し、課題を明確化します。" },
  { num: "03", title: "業務準備", desc: "研修を実施し、テンプレートや判定基準を提供して業務準備を進めます。" },
  { num: "04", title: "本格稼働", desc: "試行審査を通じて運用をシミュレーションし、本稼働へ円滑に移行します。" },
];

// Timing: heading → sub → badge → steps sequential
const HEADING_END = 0.4 + 7 * 0.04 + 0.5; // ~1.18s
const SUB_DELAY = HEADING_END + 0.2;        // ~1.38s
const BADGE_DELAY = SUB_DELAY + 0.5;        // ~1.88s
const STEPS_START = BADGE_DELAY + 0.5;      // ~2.38s
const STEP_INTERVAL = 0.7;                  // time between each step

export default function ProcessSection() {
  const ref = useRef(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(-1);
  const [phase, setPhase] = useState(0);

  // Phase control for strict sequential display
  useEffect(() => {
    if (!isInView) return;
    const timers = [
      setTimeout(() => setPhase(1), SUB_DELAY * 1000),        // sub text
      setTimeout(() => setPhase(2), BADGE_DELAY * 1000),       // badge
      setTimeout(() => setPhase(3), STEPS_START * 1000),       // step 01
      setTimeout(() => setPhase(4), (STEPS_START + STEP_INTERVAL) * 1000),     // step 02
      setTimeout(() => setPhase(5), (STEPS_START + STEP_INTERVAL * 2) * 1000), // step 03
      setTimeout(() => setPhase(6), (STEPS_START + STEP_INTERVAL * 3) * 1000), // step 04
    ];
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  // Dot activation follows step appearance
  useEffect(() => {
    if (!isInView) return;
    const timers = steps.map((_, i) =>
      setTimeout(() => setActiveStep(i), (STEPS_START + STEP_INTERVAL * i + 0.3) * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imgRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;

      if (rect.top < wh && rect.bottom > 0) {
        // Progress: 0 when section top hits viewport bottom, 1 when section bottom hits viewport top
        const progress = Math.max(0, Math.min(1, (wh - rect.top) / (wh + rect.height)));

        // Y-axis parallax: image moves up within its container
        // Image is 120% height of container, so we can move it ~20% of container height
        const yOffset = progress * -16; // moves up as user scrolls down

        // X-axis: subtle right-to-left drift
        const xOffset = (1 - progress) * 2;

        imgRef.current.style.transform = `translate(${xOffset}%, ${yOffset}%) scale(1.02)`;

        // Grayscale: mono when section enters (~progress 0.1), full color when fully visible (~progress 0.5)
        // Map progress 0.1-0.5 → grayscale 100%-0%
        const grayProgress = Math.max(0, Math.min(1, (progress - 0.1) / 0.4));
        const grayscale = 100 - grayProgress * 100;
        imgRef.current.style.filter = `grayscale(${grayscale}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" ref={sectionRef} className="relative">
      <div ref={ref} className="max-w-container mx-auto px-12 flex gap-16 items-start relative">

        {/* Left: Full-section-height image */}
        <motion.div
          className="w-[40%] flex-shrink-0 relative overflow-hidden"
          style={{ minHeight: "100%" }}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Sticky wrapper: image stays in view while content scrolls */}
          <div className="sticky top-0 h-screen overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src="/images/process.png"
              alt="Consulting meeting"
              className="absolute top-0 left-0 w-full object-cover object-[center_30%]"
              style={{
                height: "120%",
                filter: "grayscale(100%)",
                willChange: "transform, filter",
              }}
            />

            {/* Top/bottom fade to page background */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background: "linear-gradient(to bottom, #FAFAF8 0%, transparent 4%, transparent 96%, #FAFAF8 100%)",
              }}
            />

            {/* Logo badge */}
            <motion.div
              className="absolute bottom-12 right-8 z-[2] w-[64px] h-[64px]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 0.8, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="" className="w-full h-full object-contain brightness-200 drop-shadow-lg" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Header + Timeline */}
        <div className="flex-1 relative pl-10 py-[140px]">
          <div className="mb-12">
            <motion.p className="font-en text-[12px] tracking-[4px] text-teal uppercase font-medium"
              initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
              Process
            </motion.p>
            <SplitText
              text="90日で本格稼働"
              className="text-[32px] font-extralight text-dark-text leading-[1.4] mt-4 tracking-tight"
              as="h2"
              charDelay={0.04}
              startDelay={0.4}
              yOffset={25}
            />
            <motion.p className="text-[15px] text-body-text leading-[1.8] mt-4"
              initial={{ opacity: 0, y: 12 }} animate={phase >= 1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
              審査体制開発支援の場合、NDA締結から90日で本格稼働を実現します。
            </motion.p>
            <motion.div className="inline-block mt-5 px-[18px] py-2 bg-teal/10 border border-teal/20 font-en text-[12px] text-teal font-medium tracking-[1.5px]"
              initial={{ opacity: 0, y: 12 }} animate={phase >= 2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
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
                initial={{ opacity: 0, y: 30 }} animate={phase >= 3 + i ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                <div className={`absolute -left-10 top-[5px] w-[11px] h-[11px] rounded-full border-2 z-[2] transition-all duration-500 ${
                  activeStep >= i ? "border-teal bg-teal shadow-[0_0_0_4px_rgba(63,180,170,0.15)]" : "border-light-gray bg-off-white"}`} />
                <motion.p className="font-en text-[12px] text-teal tracking-[2px] font-medium uppercase"
                  initial={{ opacity: 0, x: -10 }} animate={phase >= 3 + i ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 }}>
                  Step {step.num}
                </motion.p>
                {phase >= 3 + i ? (
                  <SplitText
                    text={step.title}
                    className="text-[20px] font-normal text-dark-text mt-2"
                    as="h3"
                    charDelay={0.03}
                    startDelay={0.05}
                    duration={0.4}
                    yOffset={20}
                  />
                ) : (
                  <h3 className="text-[20px] font-normal text-dark-text mt-2 opacity-0">{step.title}</h3>
                )}
                <motion.p className="text-[15px] text-body-text leading-[1.8] mt-2.5"
                  initial={{ opacity: 0, y: 10 }} animate={phase >= 3 + i ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" as const, delay: 0.2 }}>
                  {step.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
