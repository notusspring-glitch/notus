'use client'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Suspense } from 'react'

function OrderContent() {
  const params = useSearchParams()
  const orderId = params.get('orderId')
  const method = params.get('method')

  return (
    <div className="min-h-screen bg-uc-dark flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Animated emoji */}
        <div className="text-8xl mb-6 float">🎉</div>

        <h1 className="font-display text-6xl text-uc-green mb-4 neon-text">
          ORDER CONFIRMED!
        </h1>
        <p className="text-white/70 font-body text-lg mb-2">
          Your monsters are on their way to find you. 🦷🪳🎃
        </p>
        {orderId && (
          <p className="text-white/40 font-body text-sm mb-2">
            Order ID: <span className="text-white/60 font-bold">{orderId}</span>
          </p>
        )}
        {method && (
          <p className="text-white/40 font-body text-sm mb-8">
            Paid via: <span className="text-uc-green font-bold capitalize">{method === 'paypal' ? 'PayPal' : 'Crypto (Coinbase Commerce)'}</span>
          </p>
        )}

        <div className="bg-white/5 rounded-2xl p-6 mb-8 text-left border border-white/10">
          <h3 className="font-display text-xl text-white mb-3">What happens next?</h3>
          <ul className="space-y-2 font-body text-sm text-white/60">
            <li>📧 Confirmation email sent to your inbox</li>
            <li>📦 Order processed within 1–2 business days</li>
            <li>🚚 Ships within 2–3 business days</li>
            <li>📬 Tracking info sent once shipped</li>
            <li>🦷 Monster arrives ready to be adopted</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-uc-green text-uc-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform font-body"
          >
            Shop More Monsters →
          </Link>
          <Link
            href="/"
            className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-body"
          >
            Back to Home
          </Link>
        </div>

        <p className="text-white/30 text-xs font-body mt-8">
          Questions? Email us at hello@uglycutestudio.com
        </p>
      </div>
    </div>
  )
}

export default function OrderConfirmedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-uc-dark flex items-center justify-center text-white font-display text-4xl">Loading...</div>}>
      <OrderContent />
    </Suspense>
  )
}
