"use client";
import { motion } from "framer-motion";
import { Brain, Shield, Layers, FileCode2, Database, Zap } from "lucide-react";

const cards = [
  {
    id: 1,
    size: "col-span-2 row-span-2",
    icon: <Brain size={28} style={{ color: "var(--accent-blue)" }} />,
    tag: "Flagship Project",
    title: "Hybrid AI Workspace",
    desc: "Personal AI Developer Portal ที่ผสาน Local LLM (Llama 3 via Ollama) กับ Cloud AI (Gemini 1.5) พร้อม RAG System และ Multi-assistant chat",
    stack: ["Python", "Streamlit", "Ollama", "Gemini API"],
    accent: "var(--accent-blue)",
  },
  {
    id: 2,
    size: "col-span-1 row-span-1",
    icon: <Shield size={22} style={{ color: "var(--accent-purple)" }} />,
    tag: "Architecture",
    title: "Local-first Privacy",
    desc: "ข้อมูลองค์กรที่ sensitive รันบน LLM ในเครื่อง ไม่ออก Internet",
    stack: ["Llama 3", "Ollama"],
    accent: "var(--accent-purple)",
  },
  {
    id: 3,
    size: "col-span-1 row-span-1",
    icon: <Layers size={22} style={{ color: "var(--accent-cyan)" }} />,
    tag: "System Design",
    title: "Decoupled Architecture",
    desc: "Frontend (Next.js) แยกจาก Backend Dashboard (Streamlit) deploy อิสระ",
    stack: ["Next.js", "TypeScript"],
    accent: "var(--accent-cyan)",
  },
  {
    id: 4,
    size: "col-span-1 row-span-1",
    icon: <Database size={22} style={{ color: "var(--accent-blue)" }} />,
    tag: "RAG System",
    title: "Context-aware AI",
    desc: "AI อ่านไฟล์และ identity.json ก่อนตอบ ทำให้รู้จักงานและตอบตรงกว่า ChatGPT",
    stack: ["SQLite", "Python"],
    accent: "var(--accent-blue)",
  },
  {
    id: 5,
    size: "col-span-1 row-span-1",
    icon: <FileCode2 size={22} style={{ color: "var(--accent-purple)" }} />,
    tag: "Multi-agent",
    title: "AI Team: ฟ้า หมี ขิม",
    desc: "3 assistant แยก persona — Frontend, Backend, Planning มี memory แยกกัน",
    stack: ["Streamlit", "Tabs"],
    accent: "var(--accent-purple)",
  },
  {
    id: 6,
    size: "col-span-1 row-span-1",
    icon: <Zap size={22} style={{ color: "var(--accent-cyan)" }} />,
    tag: "DX Feature",
    title: "Prompt Templates",
    desc: "Shortcut buttons สำหรับคำสั่งที่ใช้บ่อย + Token counter realtime",
    stack: ["Python", "UX"],
    accent: "var(--accent-cyan)",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BentoGrid() {
  return (
    <section id="projects" className="relative px-6 py-24" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent-cyan)" }}>
            PORTFOLIO
          </p>
          <h2 className="text-4xl font-black" style={{ fontFamily: "Syne, sans-serif" }}>
            โปรเจกต์ & สถาปัตยกรรม
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 grid-rows-3 gap-4 auto-rows-fr"
          style={{ gridAutoRows: "200px" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={`glass p-6 flex flex-col justify-between cursor-default ${card.size}`}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="p-2 rounded-xl"
                    style={{ background: `color-mix(in srgb, ${card.accent} 12%, transparent)` }}
                  >
                    {card.icon}
                  </div>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${card.accent} 12%, transparent)`,
                      color: card.accent,
                      border: `1px solid color-mix(in srgb, ${card.accent} 25%, transparent)`,
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {card.desc}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap mt-4">
                {card.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
