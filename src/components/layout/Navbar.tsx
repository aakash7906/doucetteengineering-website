import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { 
  Phone, 
  Menu, 
  X, 
  Compass, 
  FileText,
} from 'lucide-react'
interface NavbarProps {
  onOpenConsultation?: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const location = useLocation()

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PERMIT TRACKER', path: '/tracker' },
    { name: 'COST CALCULATOR', path: '/calculator' },
    { name: 'CONTRACTORS', path: '/contractors' },
    { name: 'TITLE 5 GUIDES', path: '/guides' },
    { name: 'ABOUT P.E.', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  // Smart pull-off / pull-on on scroll with responsive delta accumulation (Pacific Crest Reference)
  useEffect(() => {
    let prevScrollY = window.scrollY
    let accumulatedDelta = 0

    const handleScroll = () => {
      const currentScrollY = Math.max(0, window.scrollY)

      // Keep navbar visible if mobile menu is open
      if (isMobileMenuOpen) {
        setIsVisible(true)
        prevScrollY = currentScrollY
        accumulatedDelta = 0
        return
      }

      // Always visible when near top of the page
      if (currentScrollY <= 30) {
        setIsVisible(true)
        prevScrollY = currentScrollY
        accumulatedDelta = 0
        return
      }

      const delta = currentScrollY - prevScrollY

      // Reset accumulated delta when reversing direction
      if ((delta > 0 && accumulatedDelta < 0) || (delta < 0 && accumulatedDelta > 0)) {
        accumulatedDelta = 0
      }

      accumulatedDelta += delta

      // Scroll Down -> pull off (hide)
      if (accumulatedDelta > 10 && currentScrollY > 40) {
        setIsVisible(false)
        accumulatedDelta = 0
      }
      // Scroll Up -> pull on (show)
      else if (accumulatedDelta < -10) {
        setIsVisible(true)
        accumulatedDelta = 0
      }

      prevScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Smart Pull-off / Pull-on Glassmorphic Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] supports-[backdrop-filter]:bg-white/80`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          
          {/* Brand Logo & Professional Engineer Credentials */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-2.5 group focus-visible:outline-none rounded-md py-0.5 shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary flex items-center justify-center text-white shadow-xs transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-foreground leading-none flex items-center gap-1">
                DOUCETTE
                <span className="text-primary font-black">ENGINEERING</span>
              </span>
              
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path)
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase transition-all rounded-sm ${
                    isActive
                      ? 'text-primary font-bold after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </NavLink>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-sm border border-slate-200 bg-white/90 hover:bg-slate-50 hover:border-primary/50 text-slate-800 text-xs font-semibold tracking-[0.1em] uppercase transition-all shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Request Estimate</span>
            </button>

            <a
              href="tel:9783694200"
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-sm bg-primary text-white hover:bg-primary-hover text-xs font-semibold tracking-[0.1em] uppercase transition-all shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call (978) 369-4200</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <button
              onClick={onOpenConsultation}
              className="p-2 text-primary hover:bg-slate-100 rounded-md"
              aria-label="Request Quote"
            >
              <FileText className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:bg-slate-100 rounded-md focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-b border-slate-200/70 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = link.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.path)
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 rounded-md text-xs font-bold tracking-[0.16em] uppercase transition-colors ${
                      isActive
                        ? 'bg-primary-light text-primary font-extrabold'
                        : 'text-foreground hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                )
              })}
            </nav>

            <div className="pt-3 border-t border-slate-200/70 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu()
                  if (onOpenConsultation) onOpenConsultation()
                }}
                className="btn-primary w-full py-3 justify-center text-xs tracking-wider uppercase font-semibold"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Free Estimate</span>
              </button>

              <a href="tel:9783694200" className="w-full">
                <button
                  type="button"
                  className="btn-outline w-full py-3 justify-center text-xs tracking-wider uppercase font-semibold"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Call (978) 369-4200</span>
                </button>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
