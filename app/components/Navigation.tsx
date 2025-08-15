'use client'

import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Case Study', href: '#case-study' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-pure-black bg-opacity-90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-bold text-pure-white hover:text-albanian-red transition-colors duration-300"
            >
              Ori<span className="text-albanian-red">Tech</span>AI
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link px-3 py-2 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#booking')}
              className="btn-primary"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pure-white hover:text-albanian-red focus:outline-none focus:text-albanian-red p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-pure-black bg-opacity-95 backdrop-blur-md rounded-lg mt-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#booking')}
                className="btn-primary w-full mt-4"
              >
                Book a Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}