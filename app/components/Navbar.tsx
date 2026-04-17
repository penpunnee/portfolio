"use client";
import { useState, useEffect } from "react";
import { Brain } from "lucide-react";

const links = [
  { label: "เกี่ยวกับ", href: "#about" },
  { label: "โปรเจกต์", href: "#projects" },
  { label: "ทักษะ", href: "#skills" },
  { label: "ติดต่อ", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(9,11,16,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain size={22} style={{ color: "var(--accent-blue)" }} />
          <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
            Pawin
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "var(--text-secondary)", fontSize: "0.9rem", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          style={{
            background: "rgba(99,179,237,0.12)",
            border: "1px solid rgba(99,179,237,0.3)",
            color: "var(--accent-blue)",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(99,179,237,0.22)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(99,179,237,0.12)"; }}
        >
          ติดต่อฉัน
        </a>
      </div>
    </nav>
  );
}
