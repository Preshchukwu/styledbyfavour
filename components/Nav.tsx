'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    ['Services', '#services'],
    ['About', '#about'],
    ['Location', '#location'],
  ] as const

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rule'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a
        href="/"
        className="font-display font-normal text-[18px] tracking-[0.04em] text-plum no-underline"
      >
        Styled by <em className="italic text-violet not-italic">Favour</em>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-[11px] font-normal tracking-[0.22em] uppercase text-muted no-underline hover:text-plum transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#book"
        className="hidden md:inline-block text-[11px] font-medium tracking-[0.18em] uppercase text-white bg-plum px-6 py-[10px] no-underline hover:bg-plum-mid transition-colors duration-200"
      >
        Book Now
      </a>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[6px] p-2 bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span
          className={`block w-6 h-px bg-plum transition-all duration-200 origin-center ${
            menuOpen ? 'rotate-45 translate-y-[7px]' : ''
          }`}
        />
        <span
          className={`block w-6 h-px bg-plum transition-all duration-200 ${
            menuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-px bg-plum transition-all duration-200 origin-center ${
            menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
          }`}
        />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-rule py-6 px-6 flex flex-col gap-4 md:hidden shadow-sm">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-normal tracking-[0.22em] uppercase text-muted no-underline hover:text-plum transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase text-white bg-plum px-6 py-3 text-center no-underline hover:bg-plum-mid transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
