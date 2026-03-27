'use client'
import { useState } from 'react'
import { useCart } from '../../lib/cart'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import AnnouncementBar from '../../components/AnnouncementBar'
import Link from 'next/link'

const DISCOUNT_CODES = { 'WELCOME15': 0.15 }

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const [{ isPending }] = usePayPalScriptReducer()
  const [payMethod, setPayMethod] = useState('paypal') // 'paypal' | 'crypto'
  const [discountCode, setDiscountCode] = useState('')
  const [appliedDiscount, setAppliedDiscount] = useState(0)
  const [discountMsg, setDiscountMsg] = useState('')
  const [cryptoCharge, setCryptoCharge] = useState(null)
  const [cryptoLoading, setCryptoLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', country: '', zip: '' })

  const shipping = total >= 35 ? 0 : 4.99
  const discountAmt = total * appliedDiscount
  const finalTotal = Math.max(0, total - discountAmt + shipping)

  const applyDiscount = () => {
    const rate = DISCOUNT_CODES[discountCode.toUpperCase()]
    if (rate) {
      setAppliedDiscount(rate)
      setDiscountMsg(`✅ Code applied! ${rate * 100}% off`)
    } else {
      setDiscountMsg('❌ Invalid code')
    }
  }

  const handleCryptoCheckout = async () => {
    if (!form.name || !form.email) {
      alert('Please fill in your name and email first.')
      return
    }
    setCryptoLoading(true)
    try {
      const res = await fetch('/api/create-charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'UglyCute Studio Order',
          description: items.map(i => `${i.qty}x ${i.name}`).join(', '),
          amount: finalTotal.toFixed(2),
          currency: 'USD',
          customerEmail: form.email,
        }),
      })
      const data = await res.json()
      if (data.hosted_url) {
        setCryptoCharge(data)
      }
    } catch (e) {
      alert('Error creating crypto charge. Please try again.')
    }
    setCryptoLoading(false)
  }

  if (items.length === 0) {
    return (
      <main>
        <AnnouncementBar />
        <Navbar />
        <div className="text-center py-32">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="font-display text-4xl text-uc-purple mb-4">Your cart is empty</h2>
          <Link href="/shop" className="inline-block bg-uc-purple text-white px-8 py-4 rounded-full font-bold font-body hover:bg-uc-purple-light transition-colors">
            Shop Monsters →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-uc-cream min-h-screen">
      <AnnouncementBar />
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="font-display text-6xl text-uc-purple mb-10 text-center">CHECKOUT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Form + Payment */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contact & Shipping */}
            <div className="bg-white rounded-3xl p-6 border-2 border-uc-lavender">
              <h2 className="font-display text-2xl text-uc-purple mb-4">Shipping Info</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: 'name', label: 'Full Name', placeholder: 'Your Name', colSpan: 'col-span-2' },
                  { key: 'email', label: 'Email', placeholder: 'you@email.com', colSpan: 'col-span-2' },
                  { key: 'address', label: 'Address', placeholder: '123 Monster Lane', colSpan: 'col-span-2' },
                  { key: 'city', label: 'City', placeholder: 'Bangkok', colSpan: 'col-span-1' },
                  { key: 'zip', label: 'ZIP Code', placeholder: '10110', colSpan: 'col-span-1' },
                  { key: 'country', label: 'Country', placeholder: 'Thailand', colSpan: 'col-span-2' },
                ].map(f => (
                  <div key={f.key} className={f.colSpan}>
                    <label className="block text-xs font-bold text-uc-purple/60 font-body mb-1">{f.label}</label>
                    <input
                      type="text"
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                      className="w-full border-2 border-uc-lavender rounded-xl px-4 py-3 font-body text-uc-purple focus:border-uc-purple outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-3xl p-6 border-2 border-uc-lavender">
              <h2 className="font-display text-2xl text-uc-purple mb-4">Payment Method</h2>

              {/* Tabs */}
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setPayMethod('paypal')}
                  className={`flex-1 py-3 rounded-xl font-bold font-body border-2 transition-all ${payMethod === 'paypal' ? 'border-uc-purple bg-uc-purple text-white' : 'border-uc-lavender text-uc-purple hover:border-uc-purple'}`}
                >
                  💙 PayPal
                </button>
                <button
                  onClick={() => setPayMethod('crypto')}
                  className={`flex-1 py-3 rounded-xl font-bold font-body border-2 transition-all ${payMethod === 'crypto' ? 'border-uc-purple bg-uc-purple text-white' : 'border-uc-lavender text-uc-purple hover:border-uc-purple'}`}
                >
                  🪙 USDC / USDT
                </button>
              </div>

              {/* PayPal */}
              {payMethod === 'paypal' && (
                <div>
                  <p className="text-uc-purple/60 font-body text-sm mb-4">Pay securely with your PayPal account or any credit/debit card.</p>
                  {isPending ? (
                    <div className="text-center py-8 text-uc-purple font-body">Loading PayPal...</div>
                  ) : (
                    <PayPalButtons
                      style={{ layout: 'vertical', color: 'blue', shape: 'pill', label: 'pay' }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          purchase_units: [{
                            description: 'UglyCute Studio Order',
                            amount: {
                              currency_code: 'USD',
                              value: finalTotal.toFixed(2),
                              breakdown: {
                                item_total: { currency_code: 'USD', value: (total - discountAmt).toFixed(2) },
                                shipping: { currency_code: 'USD', value: shipping.toFixed(2) },
                              }
                            },
                            items: items.map(i => ({
                              name: i.name,
                              unit_amount: { currency_code: 'USD', value: i.price.toFixed(2) },
                              quantity: String(i.qty),
                            }))
                          }]
                        })
                      }}
                      onApprove={async (data, actions) => {
                        const order = await actions.order.capture()
                        clearCart()
                        router.push(`/order-confirmed?orderId=${order.id}&method=paypal`)
                      }}
                      onError={(err) => {
                        console.error('PayPal error:', err)
                        alert('Payment failed. Please try again.')
                      }}
                    />
                  )}
                </div>
              )}

              {/* Crypto */}
              {payMethod === 'crypto' && (
                <div>
                  <p className="text-uc-purple/60 font-body text-sm mb-4">Pay with USDC or USDT via Coinbase Commerce. 0% extra fees.</p>
                  {!cryptoCharge ? (
                    <button
                      onClick={handleCryptoCheckout}
                      disabled={cryptoLoading}
                      className="w-full bg-uc-dark text-uc-green font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity font-body text-lg disabled:opacity-50"
                    >
                      {cryptoLoading ? 'Creating charge...' : `🪙 Pay $${finalTotal.toFixed(2)} with Crypto`}
                    </button>
                  ) : (
                    <div className="text-center">
                      <p className="text-uc-purple font-body font-bold mb-3">Complete your payment on Coinbase Commerce:</p>
                      <a
                        href={cryptoCharge.hosted_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-uc-green text-uc-dark font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform font-body text-lg"
                      >
                        Open Payment Page →
                      </a>
                      <p className="text-uc-purple/50 text-xs font-body mt-3">
                        Accepts USDC, USDT, ETH, BTC and more
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 border-2 border-uc-lavender sticky top-24">
              <h2 className="font-display text-2xl text-uc-purple mb-4">Order Summary</h2>

              {/* Items */}
              <ul className="space-y-3 mb-4">
                {items.map(item => (
                  <li key={item.id} className="flex gap-3 items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-body font-bold text-uc-purple text-sm leading-tight">{item.name}</p>
                      <p className="text-uc-purple/50 text-xs font-body">Qty: {item.qty}</p>
                    </div>
                    <span className="font-display text-lg text-uc-purple">${(item.price * item.qty).toFixed(2)}</span>
                  </li>
                ))}
              </ul>

              {/* Discount code */}
              <div className="border-t border-uc-lavender pt-4 mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount code"
                    value={discountCode}
                    onChange={e => setDiscountCode(e.target.value)}
                    className="flex-1 border-2 border-uc-lavender rounded-xl px-3 py-2 font-body text-sm text-uc-purple focus:border-uc-purple outline-none"
                  />
                  <button
                    onClick={applyDiscount}
                    className="bg-uc-purple text-white px-4 py-2 rounded-xl font-bold font-body text-sm hover:bg-uc-purple-light transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {discountMsg && <p className="text-xs font-body mt-2 text-uc-purple/70">{discountMsg}</p>}
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t border-uc-lavender pt-4">
                <div className="flex justify-between font-body text-sm text-uc-purple/70">
                  <span>Subtotal</span><span>${total.toFixed(2)}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between font-body text-sm text-uc-green font-bold">
                    <span>Discount ({appliedDiscount * 100}%)</span><span>-${discountAmt.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-body text-sm text-uc-purple/70">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <span className="text-uc-green font-bold">FREE</span> : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between font-display text-2xl text-uc-purple pt-2 border-t border-uc-lavender">
                  <span>Total</span><span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4 text-center text-uc-purple/40 text-xs font-body">
                🔒 Secure · PayPal Buyer Protection · Crypto escrow via Coinbase
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
