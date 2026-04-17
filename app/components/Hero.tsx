"use client";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, Globe, Shield } from "lucide-react";

const badges = [
  { icon: <Cpu size={14} />, label: "Hybrid AI" },
  { icon: <Shield size={14} />, label: "Local LLM" },
  { icon: <Globe size={14} />, label: "Full-stack" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20" style={{ zIndex: 1 }}>
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge row */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-8 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badges.map((b) => (
            <span
              key={b.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--text-secondary)",
              }}
            >
              {b.icon} {b.label}
            </span>
          ))}
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-black leading-tight mb-6"
          style={{ fontFamily: "Syne, sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Personal{" "}
          <span className="gradient-text">AI Developer</span>
          <br />
          Portal
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          สร้างระบบ AI ผสมระหว่าง Local LLM (Llama) และ Cloud AI (Gemini)
          พร้อม RAG System และ Decoupled Architecture
        </motion.p>

        <motion.p
          className="text-sm mb-10"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Senior Developer · สำนักงานพัฒนาสังคมและความมั่นคงของมนุษย์ (พมจ.)
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-2xl font-semibold text-sm transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
              color: "#090b10",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            ดูผลงาน
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-2xl font-medium text-sm transition-all duration-200"
            style={{
              background: "var(--bg-glass)",
              border: "1px solid var(--border-glass)",
              color: "var(--text-primary)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-glass-hover)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-glass)"; }}
          >
            รู้จักฉัน
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
