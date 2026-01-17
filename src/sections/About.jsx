import React from 'react'
import { Code2, Rocket, Users, Lightbulb } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing maintainable, scalable code using best practices and design patterns."
    },
    {
      icon: Rocket,
      title: "Performance",
      desc: "Optimizing for speed and efficiency to deliver fast-loading applications."
    },
    {
      icon: Users,
      title: "Collaboration",
      desc: "Working closely with teams to bring ideas to life."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Staying ahead with the latest technologies and best practices."
    },
  ]
  return (
    <section id="about" className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-[#20b2a6] text-sm font-medium tracking-wider uppercase'>About Me</span>
            </div>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[#20b2a6]'>
              Building the future,
              <span className='font-serif italic font-normal text-white'>
                {" "}one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-[#7a8491] animate-fade-in animation-delay-200">
              <p>
                I am a Computer Science candidate with a strong academic and practical interest in deep learning, machine learning, and intelligent system development. My passion lies in understanding data-driven models and applying them to solve real-world problems through research and experimentation.
              </p>
              <p>
                I have hands-on experience with Python, deep learning frameworks, and the full lifecycle of designing, training, evaluating, and optimizing deep learning models. I am also familiar with research methodologies, including dataset preparation, experimental analysis, and research paper writing.
              </p>
              <p>
                In addition to my focus on AI and research, I possess solid knowledge of frontend development, enabling me to design and integrate intuitive user interfaces with intelligent systems. This allows me to bridge the gap between advanced AI models and practical applications.
              </p>
              <p>
                As a motivated and growth-oriented candidate, I continuously explore emerging technologies, strengthen my technical expertise, and engage in academic and personal projects that combine computer science, artificial intelligence, and software engineering.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/*Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center mb-4 hover:bg-[#20b2a6]/20">
                  <item.icon className="w-6 h-6 text-[#20b2a6]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#7a8491]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
