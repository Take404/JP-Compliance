"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId: number;
    let x = 0;
    let y = 0;

    const handler = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const animate = () => {
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handler, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
      style={{
        willChange: "transform",
        background: "radial-gradient(circle, rgba(63,180,170,0.05) 0%, transparent 70%)",
      }}
    />
  );
}
