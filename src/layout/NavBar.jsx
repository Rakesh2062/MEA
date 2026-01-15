import React from 'react'
import Button from '@/components/Button'
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react'

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },

]

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <header className={`fixed top-0 left-0 transition-all duration-500 right-0 ${isScrolled ? "glass-strong" : "bg-transparent py-5 "} z-50`}>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                <a href="#" className='text-xl font-bold tracking-tight hover:text-[#20b2a6]'>
                    MEA<span>.</span>
                </a>

                {/* Desktop Nav*/}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                        {navLinks.map((link, index) => {
                            return <a key={index} href={link.href} className='px-4 py-2 text-sm text-[#7a8491] hover:text-[#f0f2f5] rounded-full hover:bg-[#1a2329]'>
                                {link.label}
                            </a>
                        })}
                    </div>
                </div>

                {/* CTA Button*/}
                <div className='hidden md:block'>
                    <Button size="sm">Contact Me</Button>
                </div>

                {/*Mobile Menu Button */}
                <button className='md:hidden p-2 text-[#f0f2f5] cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}

            {isMobileMenuOpen && (
                <div className='md:hidden glass-strong animate-fade-in'>
                    <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                        {navLinks.map((link, index) => {
                            return <a
                                key={index}
                                href={link.href}
                                className='text-lg text-[#7a8941] hover:text-[#f0f2f5] py-2'
                                onClick={()=> setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        })}
                        <Button onClick={()=> setIsMobileMenuOpen(false)}>Contact Me</Button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default NavBar
