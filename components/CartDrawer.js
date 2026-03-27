'use client'
import { useCart } from '../lib/cart'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, removeItem, updateQty, total, count, isOpen, setIsOpen } = useCart()

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-uc-cream z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b-2 border-uc-lavender bg-white">
          <h2 className="font-display text-2xl text-uc-purple">
            Your Cart 👾 {count > 0 && <span className="text-uc-green">({count})</span>}
          </h2>
          <button onClick={() => setIsOpen(false)} className="text-uc-purple hover:text-uc-purple-light text-2xl font-bold">✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">👾</div>
              <p className="font-display text-2xl text-uc-purple mb-2">No monsters yet!</p>
              <p className="text-uc-purple/60 font-body text-sm">Your cart is looking lonely.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 bg-uc-purple text-white px-6 py-3 rounded-full font-bold font-body hover:bg-uc-purple-light transition-colors"
              >
                Adopt a Monster →
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(item => (
                <li key={item.id} className="flex gap-4 bg-white rounded-2xl p-4 border border-uc-lavender">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                  <div className="flex-1">
                    <p className="font-display text-lg text-uc-purple leading-tight">{item.name}</p>
                    <p className="text-uc-purple/50 text-xs font-body mb-2">{item.subtitle}</p>
                    <div className="flex items-center justify-between">
                      {/* Qty control */}
                      <div className="flex items-center gap-2 bg-uc-lavender rounded-full px-3 py-1">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} className="text-uc-purple font-bold w-5 text-center">−</button>
                        <span className="font-bold text-uc-purple font-body text-sm w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} className="text-uc-purple font-bold w-5 text-center">+</button>
                      </div>
                      <span className="font-display text-xl text-uc-purple">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-uc-purple/30 hover:text-red-400 transition-colors self-start text-lg">✕</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-4 border-t-2 border-uc-lavender bg-white">
            {/* Discount note */}
            <div className="bg-uc-green/10 border border-uc-green rounded-xl p-3 mb-4 text-center">
              <p className="text-uc-purple text-xs font-body">
                {total >= 35
                  ? '✅ You qualify for FREE shipping!'
                  : `Add $${(35 - total).toFixed(2)} more for FREE shipping`}
              </p>
            </div>
            {/* Total */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-body font-bold text-uc-purple">Subtotal</span>
              <span className="font-display text-3xl text-uc-purple">${total.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-uc-purple text-white text-center font-bold py-4 rounded-2xl hover:bg-uc-purple-light transition-colors font-body text-lg"
            >
              Checkout →
            </Link>
            <p className="text-center text-uc-purple/40 text-xs font-body mt-3">
              PayPal · USDC · USDT · Secure checkout
            </p>
          </div>
        )}
      </div>
    </>
  )
}
