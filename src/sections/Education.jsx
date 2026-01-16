import React from 'react'

const Education = () => {
  const education = [
    {
      period: "Aug 2023 - May 2025",
      degree: "M. Tech. Computer Science & Engineering",
      institute: "Vignan University, Guntur, Andhra Pradesh, India",
    },
    {
      period: "Nov 2021 - Jul 2023",
      degree: "Master of Computer Applications",
      institute: "Vignan University, Guntur, Andhra Pradesh, India",
    },
    {
      period: "June 2018 - May 2021",
      degree: "Bachelor of Computer Applications",
      institute: "Vignan University, Guntur, Andhra Pradesh, India",
    }
  ]

  return (
    <section id="education" className='py-32 relative overflow-hidden'>
      <div
        className='absolute top-1/2 left-1/4 w-96 h-96 bg-[#20b2a6]/5 rounded-full blur-3xl -translate-y-0.5'
      />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='max-w-3xl mb-16'>
          <span
            className='text-[#20b2a6] text-sm font-medium tracking-wider uppercase animate-fade-in'
          >
            Academic Journey
          </span>

          <h2
            className='text-4xl md:text-5xl font-bold mt-4 animate-fade-in animation-delay-100 text-[#20b2a6]'
          >
            Foundations that <span className='font-serif italic font-normal text-white'> shaped me.</span>
          </h2>

          <p
            className="text-muted-foreground animate-fade-in animation-delay-200"
          >
            A timeline of my academic growth, where curiosity turned into strong technical fundamentals.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#20b2a6]/70 via-[#20b2a6]/30 to-transparent md:-translate-x-0.5 shadow-[0_0_25px_rgba(32, 178, 166, 0.8)]' />

          {/* Education Items */}
          <div className='space-y-12'>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[#20b2a6] rounded-full -translate-x-1/2 ring-4 ring-[#0f1418] z-10">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-[#20b2a6] animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div className='glass p-6 rounded-2xl border border-[#20b2a6]/30 hover:border-[#20b2a6]/50 transition-all duration-500'>
                    <span className='text-sm font-medium text-[#7a8491]'>{edu.period}</span>
                    <h3 className='text-xl font-semibold mt-2'>{edu.degree}</h3>
                    <p className='text-[#7a8491]'>{edu.institute}</p>
                    <p className='text-sm text-[#7a8491] mt-4'>{edu.desc}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
