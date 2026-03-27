'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-uc-cream border-b-2 border-uc-purple sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-3xl text-uc-purple tracking-wide">
          Ugly<span className="text-uc-purple-light">Cute</span>
          <span className="text-uc-green">Studio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-body font-700">
          <Link href="#products" className="text-uc-purple hover:text-uc-purple-light transition-colors font-bold">
            Shop
          </Link>
          <Link href="#about" className="text-uc-purple hover:text-uc-purple-light transition-colors font-bold">
            About
          </Link>
          <a
            href="https://h5gcuy-us.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-uc-purple text-white px-5 py-2 rounded-full font-bold hover:bg-uc-purple-light transition-colors pulse-green"
          >
            Adopt a Monster →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-uc-purple"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-uc-lavender border-t border-uc-purple px-4 py-4 flex flex-col gap-4 font-body font-bold">
          <Link href="#products" onClick={() => setOpen(false)} className="text-uc-purple">Shop</Link>
          <Link href="#about" onClick={() => setOpen(false)} className="text-uc-purple">About</Link>
          <a
            href="https://h5gcuy-us.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-uc-purple text-white px-5 py-2 rounded-full text-center"
          >
            Adopt a Monster →
          </a>
        </div>
      )}
    </nav>
  )
}
