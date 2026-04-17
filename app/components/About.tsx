"use client";
import { motion } from "framer-motion";
import { Brain, Building2, Code2 } from "lucide-react";

const highlights = [
  {
    icon: <Brain size={20} style={{ color: "var(--accent-blue)" }} />,
    title: "Hybrid AI Architect",
    desc: "สร้างระบบที่สลับสมองได้ระหว่าง Local LLM และ Cloud AI ตามความเหมาะสม",
  },
  {
    icon: <Building2 size={20} style={{ color: "var(--accent-purple)" }} />,
    title: "Senior Developer @ พมจ.",
    desc: "พัฒนาระบบสารสนเทศด้านสังคมที่ต้องรักษาความปลอดภัยข้อมูลสูง",
  },
  {
    icon: <Code2 size={20} style={{ color: "var(--accent-cyan)" }} />,
    title: "Full-stack + AI",
    desc: "ครอบคลุมตั้งแต่ UI/UX, Backend API, ไปจนถึงการออกแบบ AI System",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium mb-2" style={{ color: "var(--accent-blue)" }}>
              ABOUT ME
            </p>
            <h2 className="text-4xl font-black mb-6" style={{ fontFamily: "Syne, sans-serif" }}>
              สวัสดี ผม <span className="gradient-text">Pawin</span>
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Senior Developer ที่สนใจการนำ AI มาใช้ในงานจริง โดยเฉพาะ Hybrid LLM Architecture
              ที่ผสมระหว่างความเร็วของ Cloud AI กับความปลอดภัยของ Local LLM
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              ปัจจุบันพัฒนา Hybrid AI Workspace สำหรับใช้งานส่วนตัวและองค์กร
              พร้อม RAG System ที่ทำให้ AI รู้จักบริบทงานจริงก่อนตอบ
            </p>
          </motion.div>

          {/* Cards side */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass p-5 flex items-start gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <div className="p-2 rounded-xl flex-shrink-0" style={{ background: "rgba(255,255,255,0.06)" }}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
