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
          className='absolute top-1/2 left-1/4 w-96'
        />
    </section>
  )
}

export default Experience
