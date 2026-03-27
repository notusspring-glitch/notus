'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../lib/cart'
import CartDrawer from './CartDrawer'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count, setIsOpen } = useCart()

  return (
    <>
      <nav className="bg-uc-cream border-b-2 border-uc-purple sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-3xl text-uc-purple tracking-wide">
            Ugly<span className="text-uc-purple-light">Cute</span>
            <span className="text-uc-green">Studio</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-uc-purple hover:text-uc-purple-light transition-colors font-bold font-body">Shop</Link>
            <Link href="/#about" className="text-uc-purple hover:text-uc-purple-light transition-colors font-bold font-body">About</Link>
            {/* Cart button */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative bg-uc-purple text-white px-5 py-2 rounded-full font-bold hover:bg-uc-purple-light transition-colors font-body"
            >
              🛒 Cart
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-uc-green text-uc-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button onClick={() => setIsOpen(true)} className="relative text-uc-purple">
              <span className="text-2xl">🛒</span>
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-uc-green text-uc-dark text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button onClick={() => setOpen(!open)} className="text-uc-purple">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-uc-lavender border-t border-uc-purple px-4 py-4 flex flex-col gap-4 font-body font-bold">
            <Link href="/shop" onClick={() => setOpen(false)} className="text-uc-purple">Shop</Link>
            <Link href="/#about" onClick={() => setOpen(false)} className="text-uc-purple">About</Link>
          </div>
        )}
      </nav>
      <CartDrawer />
    </>
  )
}
