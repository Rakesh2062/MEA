import React from 'react'
import Button from '@/components/Button'
import { ArrowRight, Linkedin, Github, Twitter, ChevronDown, Download, Facebook, Youtube } from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const skills = [
  "C",
  "Python",
  "HTML",
  "CSS",
  "Javascript",
  "SQL",
  "Database Design and Maintenance",
  "Machine Learning - Model Building",
  "Feature Engineering",
  "Git"
];

const Hero = () => {
  return (
    <section className='realative min-h-screen flex items-center overflow-hidden '>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img src="/MEA/hero-bg.jpg" alt="Hero Image" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-linear-to-b from-[#0f1418]/20 via-[#0f1418]/80 to-[#0f1418] '></div>
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content*/}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#20b2a6]'>
                <span className='w-2 h-2 bg-[#20b2a6] rounded-full animate-pulse' />
                FullStack Developer •
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
                Crafting <span className='text-[#20b2a6] glow-text '>digital</span>
                <br />
                experiences with
                <br />
                <span className='font-serif italic font-normal text-white'>
                  precision.
                </span>
              </h1>
              <p
                className='text-lg text-[#7a8491] max-w-lg animate-fade-in animation-delay-200'
              >
                Hi, I'm Mohammed Elnazer Abazar - a Deep Learning Researcher and Frontend Developer with proven project experience and strong expertise in Prompt Engineering..
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className='flex flex-wrap gap-4 animate-fade-in animate-delay-300'>
              <Button size="lg">
                <a href="#contact">
                  Contact Me </a><ArrowRight className='w-5 h-5' />
              </Button>
              <AnimatedBorderButton>
                <a
                  href="/MEA/CV.docx"
                  download
                  className='flex items-center gap-2'
                >
                  <Download className='w-5 h-5' />
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
              <span className='text-sm text-[#7a8491]'>Follow Me: </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-elnazer-abazar-elmamoon-ball-elsheep-0a4397194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: Facebook, href: "https://www.facebook.com/share/16f4iS5Hre/" },
                { icon: Youtube, href: "https://www.youtube.com/@mohammedalnazeer3822" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  target='_blank'
                  href={social.href}
                  className='p-2 rounded-full glass hover:bg-[#20b2a6]/10 hover:text-[#20b2a6] transition-all duration-300'
                >{<social.icon className='w-5 h-5' />}</a>
              ))}
            </div>
          </div>

          {/* Right Column - Profile Content*/}

          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-linear-to-br from-[#20b2a6]/30 to-[#20b2a6]/10 blur-2xl animate-pulse' />

              <div className='relative glass rounded-3xl p-2 glow-border'>

                <img src="/MEA/profile-photo.jpeg" alt="Nezo" className='w-full aspect-4/5 object-cover rounded-2xl' />

                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className='text-sm font-medium'>
                      Available For Work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Skills List
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-center text-[#7a8491] mb-6'>
            Skills I know
          </p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className='shrink-0 px-8 py-4'>
                  <span className='text-xl font-semibold text-[#7a8491]/50 hover:text-[#7a8491] transition-colors'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>


    </section>
  )
}

export default Hero
