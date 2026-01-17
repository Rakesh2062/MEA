import React from "react"
import { BookOpen, Smile, Mic, Layers } from "lucide-react"

const Publications = () => {
  const publications = [
    {
      icon: BookOpen,
      title: "Human Activity Recognition",
      desc: "A comparative study of deep learning models for human activity recognition.",
      authors: "M. E. A. Elmamoon, A. A. Mustapha",
      venue: "Cloud Computing and Data Science",
      details: "Vol. 2025, No. 1, pp. 79–93",
      year: "Jan 2025",
      status: "Published",
    },
    {
      icon: Smile,
      title: "Facial Emotion Recognition",
      desc: "Identification of facial emotions using reinforcement learning under deep learning.",
      authors: "H. K. Bhuyan, M. E. A. E. Ball Elsheep",
      venue: "ITM Web of Conferences (EDP Sciences)",
      details: "Vol. 56",
      year: "2023",
      status: "Published",
    },
    {
      icon: Mic,
      title: "Speech Emotion Recognition",
      desc: "Evaluating deep learning models for speech emotion recognition to advance human-computer interaction.",
      authors: "M. E. A. Elmamoon, P. S. Prasad, S. Shareefunnisa",
      venue: "International Research Journal of Multidisciplinary Studies (IRJMS)",
      details: "",
      year: "2025",
      status: "Under Review",
    },
    {
      icon: Layers,
      title: "Hybrid Deep Learning Models",
      desc: "Enhancing speech emotion recognition using hybrid deep learning models and multi-feature fusion.",
      authors: "M. E. A. Elmamoon, P. S. Prasad, S. Shareefunnisa",
      venue: "International Conference on Computing, Informatics & Networking Systems (ICCINS)",
      details: "Springer Proceedings",
      year: "",
      status: "Accepted (In Press)",
    },
  ]

  return (
    <section id="publications" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#20b2a6]/5 rounded-full blur-3xl -translate-y-0.5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[#20b2a6] text-sm font-medium tracking-wider uppercase animate-fade-in">
            Research Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-[#20b2a6]">
            Publications &{" "}
            <span className="font-serif italic font-normal text-white">
              Communication Papers.
            </span>
          </h2>
        </div>

        {/* Publications Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {publications.map((paper, idx) => (
            <div
              key={idx}
              className="group relative glass p-6 rounded-2xl animate-fade-in transition-all duration-300
                         hover:-translate-y-3 hover:border-[#20b2a6]/40
                         hover:shadow-[0_25px_50px_rgba(0,255,200,0.12)]"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center mb-4 transition">
                <paper.icon className="w-6 h-6 text-[#20b2a6]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {paper.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#7a8491] mb-3">
                {paper.desc}
              </p>

              {/* Authors */}
              <p className="text-xs text-[#9aa4af] mb-1">
                <span className="text-[#20b2a6] font-medium">Authors:</span>{" "}
                {paper.authors}
              </p>

              {/* Venue */}
              <p className="text-xs text-[#9aa4af] mb-1">
                <span className="text-[#20b2a6] font-medium">Venue:</span>{" "}
                {paper.venue}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-xs text-[#7a8491]">
                  {paper.year || paper.details}
                </span>

                <span className="text-xs px-3 py-1 rounded-full bg-[#20b2a6]/10 text-[#20b2a6]">
                  {paper.status}
                </span>
              </div>

              {/* Hover glow overlay (same as Skills) */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none
                              bg-linear-to-br from-[#20b2a6]/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
