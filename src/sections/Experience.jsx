import { Currency } from 'lucide-react'
import React from 'react'

const Experience = () => {
  const experiences = [
    {
      period: "2023-2025",
      role: "Teaching Assistant",
      company: "Vignan University",
      desc: "Assisted faculty members in preparing and delivering undergraduate computer science lectures and lab sessions and also supported students through one-on-one mentoring, lab, supervision, and assignment evaluations.",
      current: false,
    }
  ]

  return (
    <section id="experience" className='py-32 relative overflow-hidden'>
      <div
        className='absolute top-1/2 left-1/4 w-96 h-96 bg-[#20b2a6]/5 rounded-full blur-3xl -translate-y-0.5'
      />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <span
            className='text-[#20b2a6] text-sm font-medium tracking-wider uppercase animate-fade-in'
          >
            Career Journey
          </span>
          <h2
            className='text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-[#20b2a6]'
          >
            Experience that <span className='font-serif italic font-normal text-white'> speaks volumes.</span>
          </h2>
          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
