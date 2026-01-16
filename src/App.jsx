import { useState } from 'react'
import NavBar from '@/layout/NavBar'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import Education from '@/sections/Education' 
import Publications from '@/sections/Publications'  
import Footer from '@/layout/Footer'

function App() {

  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <NavBar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Education />
          <Experience />
          <Publications />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
