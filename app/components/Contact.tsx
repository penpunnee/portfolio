"use client";
import { motion } from "framer-motion";
import { Mail, GitBranch, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24" style={{ zIndex: 1 }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent-cyan)" }}>
            CONTACT
          </p>
          <h2 className="text-4xl font-black mb-4" style={{ fontFamily: "Syne, sans-serif" }}>
            ติดต่อฉัน
          </h2>
          <p className="mb-10" style={{ color: "var(--text-secondary)" }}>
            สนใจร่วมงาน พูดคุยเรื่อง AI หรือขอคำปรึกษา ติดต่อมาได้เลย
          </p>
        </motion.div>

        <motion.div
          className="glass p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex flex-col gap-4">
            <a
              href="mailto:pawin@example.com"
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
            >
              <Mail size={18} style={{ color: "var(--accent-blue)" }} />
              <span className="text-sm">pawin@example.com</span>
              <ExternalLink size={14} className="ml-auto" style={{ color: "var(--text-muted)" }} />
            </a>
            <a
              href="https://github.com/pawin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
            >
              <GitBranch size={18} style={{ color: "var(--accent-purple)" }} />
              <span className="text-sm">github.com/pawin</span>
              <ExternalLink size={14} className="ml-auto" style={{ color: "var(--text-muted)" }} />
            </a>
          </div>
        </motion.div>

        <motion.p
          className="mt-12 text-xs"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Built with Next.js · Tailwind CSS · Framer Motion — Part of Hybrid AI Workspace
        </motion.p>
      </div>
    </section>
  );
}
