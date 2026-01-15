import { Github, ArrowUpRight } from 'lucide-react'
import React from 'react'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'

const projects = [
  {
    title: "School Management System",
    desc: "Developed a web-based system to manage student records, staff data, attendance, exams, and academic reposrts. Implemented secure login, role-based access, and real-time updates to streamline school administration. The system improved operational efficiency and provided a scalable solution for educational institutions.",
    image: "/projects/project-1.png",
    tags: ["PHP", "MySQL", "HTML", "CSS"],
    link: "#",
    github: "#"
  },
  {
    title: "Facial Emotion Recognition using concolutional Neural Network",
    desc: "Developed a CNN-based system to detect and classify human emotions from facial expressions in images. Trained on labeled emotion datasets to recognize expressions such as happy, sa, angry, surprised, and neutral. Utilized OpenCV for real-time face detection and image capture, and implemented the model using TensorFlow and Keras. Achieved reliable emotion classification performance, with applications in human-computer interaction, mental health assessment, and smart surveillance systems.",
    image: "/projects/project-2.jpg",
    tags: ["Python", "OpenCV", "TensorFlow", "Keras", "Convolutional Neural Networks (CNN)"],
    link: "#",
    github: "#"
  },
  {
    title: "Speech Emotion Recognition Using Hybrid Deep Learning Models",
    desc: "Designed and implemented a hybrid deep learning model combining CNN and LSTM to classify emotions from speech signals. Extracted MFCCs and time-domaiin features using LibROSA, and trained the model on the RAVDESS dataset to detect emotions such as happy, sad, angry, and neutral. Achieved high classification accuracy, demonstrating strong applicability in voice-based intelligent systems, virtual assistants, and emotion-aware technologies",
    image: "/projects/project-3.png",
    tags: ["Python", "LibROSA", "TensorFlow", "Keras", "CNN", "LSTM", "MFCC", "Matplotlib", "Scikit-learn"],
    link: "#",
    github: "#"
  },
]

const Projects = () => {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#20b2a6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#f5a623]/5 rounded-full blur-3xl" />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-[#20b2a6] text-sm font-medium tracking-wider uppercase animate-fade-in'>Feature Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-[#20b2a6]'>
            Projects that
            <span className='font-serif italic font-normal text-white'>
              {" "}make an impact.
            </span>
          </h2>
          <p className='text-[#7a8491] animate-fade-in animation-delay-200'>
            A selection of my recent work, from complex-web application to innovative machine learning modals that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{
                animationDelay: `${(idx + 1) * 100}ms`
              }}
            >
              {/* Image*/}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-900 group-hover:scale-110'
                />
                <div
                  className='absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60'
                />

                {/* Overlay Links */}
                <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href='{project.link' className=' p-3 rounded-full glass hover:bg-[#20b2a6] hover:text-[#ffffff] transition-all'>
                    <ArrowUpRight className='w-5 h-5' />
                  </a>
                  <a href='{project.github' className=' p-3 rounded-full glass hover:bg-[#20b2a6] hover:text-[#ffffff] transition-all'>
                    <Github className='w-5 h-5' />
                  </a>
                </div>
              </div>

              {/*Content*/}
              <div className='p-6 space-y-4'>
                <div className='flex items-start justify-between'>
                  <h3 className='text-xl font-semibold group-hover:text-[#20b2a6] transition-colors'>
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className='w-5 h-5 text-[#7a8491] group-hover:text-[#20b2a6] group-hover:translate-x-1 group-hover:translate-y-1 transition-all'
                  />
                </div>

                <p className='text-[#7a8491] text-sm'>
                  {project.desc}
                </p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='inline-block px-4 py-1.5 rounded-full bg-[#1a2329] text-xs font-medium border border-border/50 text-[#7a8491] hover:border-[#20b2a6]/50 hover:text-[#20b2a6] transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Buttons */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className='w-5 h-5' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Projects
