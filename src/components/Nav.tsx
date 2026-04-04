"use client";

import { motion } from "framer-motion";

interface NavProps {
  visible: boolean;
}

export default function Nav({ visible }: NavProps) {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#whyus" },
    { label: "Process", href: "#process" },
    { label: "Insights", href: "#insights" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] px-[5%] h-[72px] flex items-center justify-between border-b border-black/[0.04]"
      style={{
        background: "rgba(250, 250, 248, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="font-en text-[15px] font-medium tracking-[2px] text-dark-text uppercase">
        JP <span className="text-teal">Compliance</span>
      </div>

      <div className="flex gap-9">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-en text-[13px] text-body-text hover:text-dark-text transition-colors duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="font-jp text-[13px] text-off-white bg-teal px-6 py-2.5 hover:bg-teal-dark transition-colors duration-300"
      >
        お問い合わせ
      </a>
    </motion.nav>
  );
}
