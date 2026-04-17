"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "AI & LLM",
    color: "var(--accent-blue)",
    skills: ["Ollama", "Llama 3", "Gemini API", "RAG System", "LangChain", "Prompt Engineering"],
  },
  {
    category: "Backend",
    color: "var(--accent-purple)",
    skills: ["Python", "FastAPI", "SQLite", "PostgreSQL", "REST API", "System Design"],
  },
  {
    category: "Frontend",
    color: "var(--accent-cyan)",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streamlit", "Figma"],
  },
  {
    category: "Architecture",
    color: "var(--accent-blue)",
    skills: ["Decoupled Architecture", "Hybrid LLM", "Monorepo", "Docker", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium mb-2" style={{ color: "var(--accent-purple)" }}>
            EXPERTISE
          </p>
          <h2 className="text-4xl font-black" style={{ fontFamily: "Syne, sans-serif" }}>
            ทักษะ & เทคโนโลยี
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3
                className="font-bold text-sm uppercase tracking-widest mb-4"
                style={{ color: group.color }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-sm transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--text-secondary)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = `color-mix(in srgb, ${group.color} 12%, transparent)`;
                      (e.currentTarget as HTMLElement).style.borderColor = `color-mix(in srgb, ${group.color} 30%, transparent)`;
                      (e.currentTarget as HTMLElement).style.color = group.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
