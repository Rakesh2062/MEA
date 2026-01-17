import React from "react";
import {
  FaCode,
  FaGlobe,
  FaDatabase,
  FaTools,
  FaBook,
  FaBrain
} from "react-icons/fa";

const skills = [
  {
    name: "Programming Languages",
    items: ["C", "Python"],
    icon: FaCode
  },
  {
    name: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript"],
    icon: FaGlobe
  },
  {
    name: "Database Management",
    items: ["SQL", "Database Design", "Maintenance"],
    icon: FaDatabase
  },
  {
    name: "Productivity Tools",
    items: ["Microsoft Word", "PowerPoint", "Excel"],
    icon: FaTools
  },
  {
    name: "Research & Documentation",
    items: ["Research Writing", "Academic Reports"],
    icon: FaBook
  },
  {
    name: "Data Science & AI",
    items: [
      "Machine Learning",
      "Model Building",
      "Feature Engineering",
      "Evaluation"
    ],
    icon: FaBrain
  }
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-16 text-white overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] bg-teal-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-[#20b2a6] text-4xl md:text-5xl font-bold tracking-wide">
          Core skills <span className="font-serif italic font-normal text-white">powering my work </span>
        </h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          Tools and knowledge I use to learn, build, and analyze effectively.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-teal-400/40 hover:shadow-[0_25px_50px_rgba(0,255,200,0.12)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-teal-400/10 flex items-center justify-center mb-6">
                <Icon className="text-2xl text-teal-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {skill.name}
              </h3>

              {/* Items */}
              <ul className="space-y-2 text-sm text-gray-400">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-linear-to-br from-teal-400/10 to-transparent" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
