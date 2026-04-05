"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h2" | "h3" | "p" | "span";
  charDelay?: number;
  startDelay?: number;
  duration?: number;
  yOffset?: number;
}

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

  const lines = text.split(/\n/);
  let charIndex = 0;

  return (
    <Tag ref={ref} className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden" aria-hidden="true">
          <span className="inline-block">
            {line.split("").map((char) => {
              const currentIndex = charIndex++;
              if (char === " ") {
                return <span key={currentIndex} className="inline-block">&nbsp;</span>;
              }
              return (
                <span
                  key={currentIndex}
                  className="inline-block"
                  style={{
                    transform: isInView ? "translateY(0)" : `translateY(${yOffset}px)`,
                    opacity: isInView ? 1 : 0,
                    transition: `transform ${duration}s cubic-bezier(0.16,1,0.3,1) ${startDelay + currentIndex * charDelay}s, opacity ${duration}s cubic-bezier(0.16,1,0.3,1) ${startDelay + currentIndex * charDelay}s`,
                    willChange: isInView ? "auto" : "transform, opacity",
                  }}
                >
                  {char}
                </span>
              );
            })}
          </span>
        </span>
      ))}
    </Tag>
  );
}
