"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p" | "span";
  charDelay?: number;
  startDelay?: number;
  duration?: number;
  yOffset?: number;
}

/**
 * GSAP SplitText-style character-by-character reveal animation.
 * Each character is wrapped in an inline-block span and animates
 * from below with staggered timing for a wave-like effect.
 */
export default function SplitText({
  text,
  className = "",
  as: Tag = "h2",
  charDelay = 0.03,
  startDelay = 0,
  duration = 0.5,
  yOffset = 30,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Split text into lines by <br> or \n, then each line into characters
  const lines = text.split(/\n|<br\s*\/?>/);

  let charIndex = 0;

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIdx) => (
        <span
          key={lineIdx}
          className="block overflow-hidden"
          aria-hidden="true"
        >
          <span className="inline-block">
            {line.split("").map((char) => {
              const currentIndex = charIndex++;
              if (char === " ") {
                return (
                  <span key={currentIndex} className="inline-block">
                    &nbsp;
                  </span>
                );
              }
              return (
                <motion.span
                  key={currentIndex}
                  className="inline-block"
                  initial={{ y: yOffset, opacity: 0 }}
                  animate={
                    isInView
                      ? { y: 0, opacity: 1 }
                      : { y: yOffset, opacity: 0 }
                  }
                  transition={{
                    duration,
                    ease: [0.16, 1, 0.3, 1],
                    delay: startDelay + currentIndex * charDelay,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        </span>
      ))}
    </Tag>
  );
}
