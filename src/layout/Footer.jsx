import React from "react"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#20b2a6]/20">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#20b2a6]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid gap-10 md:grid-cols-3 items-center">

          {/* Left: Branding */}
          <div>
            <h3 className="text-xl font-semibold text-[#20b2a6]">
              Mohammed Elnazer Abazar
            </h3>
            <p className="text-sm text-[#7a8491] mt-2 max-w-xs">
              Building thoughtful software and exploring research-driven
              solutions at the intersection of code and curiosity.
            </p>
          </div>

          {/* Center: Navigation */}
          <div className="flex md:justify-center gap-6 text-sm">
            <a href="#experience" className="text-[#7a8491] hover:text-[#20b2a6] transition">
              Experience
            </a>
            <a href="#education" className="text-[#7a8491] hover:text-[#20b2a6] transition">
              Education
            </a>
            <a href="#publications" className="text-[#7a8491] hover:text-[#20b2a6] transition">
              Publications
            </a>
          </div>

          {/* Right: Socials */}
          <div className="flex md:justify-end gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              className="w-10 h-10 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center hover:bg-[#20b2a6]/20 transition"
            >
              <Github className="w-5 h-5 text-[#20b2a6]" />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-elnazer-abazar-elmamoon-ball-elsheep-0a4397194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="w-10 h-10 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center hover:bg-[#20b2a6]/20 transition"
            >
              <Linkedin className="w-5 h-5 text-[#20b2a6]" />
            </a>

            <a
              href="mailto: malnazeer177@gmail.com"
              className="w-10 h-10 rounded-xl bg-[#20b2a6]/10 flex items-center justify-center hover:bg-[#20b2a6]/20 transition"
            >
              <Mail className="w-5 h-5 text-[#20b2a6]" />
            </a>
          </div>
        </div>

       {/* Bottom Line */}
<div className="mt-12 pt-6 border-t border-[#20b2a6]/10 text-center text-xs text-[#7a8491]">
  © {new Date().getFullYear()} Elmamoon. Powered by{" "}
  <span className="font-semibold text-[#20b2a6]">
   <a href='https://mukeshpandey.com.np'>DeepQNova Pvt. Ltd.</a>
  </span>
</div>

      </div>
    </footer>
  )
}

export default Footer
