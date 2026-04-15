"use client";

import { useState } from "react";
import Image from "next/image";

interface NavProps {
  visible: boolean;
}

export default function Nav({ visible }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Why Us", href: "#whyus" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About Us", href: "#aboutus" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] px-[5%] h-[72px] flex items-center justify-between border-b border-black/[0.04]"
      style={{
        background: "rgba(250, 250, 248, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-300">
        <Image src="/images/logo-company.jpg" alt="JP Compliance Partners" width={36} height={36} className="w-[36px] h-[36px] object-contain rounded-sm" />
        <span className="font-en text-[13px] font-medium tracking-[1.5px] text-dark-text uppercase">
          JP <span className="text-teal">Compliance</span> Partners
        </span>
      </a>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-9">
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

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden md:inline-block font-jp text-[13px] text-off-white bg-teal px-6 py-2.5 hover:bg-teal-dark transition-colors duration-300"
      >
        お問い合わせ
      </a>

      {/* Mobile: CTA (smaller) + Hamburger */}
      <div className="flex md:hidden items-center gap-3">
        <a
          href="#contact"
          className="font-jp text-[12px] text-off-white bg-teal px-4 py-2 hover:bg-teal-dark transition-colors duration-300"
        >
          お問い合わせ
        </a>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-dark-text transition-all duration-300"
            style={{
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px bg-dark-text transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px bg-dark-text transition-all duration-300"
            style={{
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className="absolute top-[72px] left-0 right-0 md:hidden border-b border-black/[0.06] overflow-hidden transition-all duration-300"
        style={{
          background: "rgba(250, 250, 248, 0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          maxHeight: menuOpen ? "240px" : "0",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="px-[5%] py-4 flex flex-col gap-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-en text-[14px] text-body-text hover:text-dark-text hover:text-teal transition-colors duration-300 py-3.5 border-b border-light-gray/60 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
