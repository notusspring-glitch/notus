'use client'
import { useState } from 'react'
import { useCart } from '../../../lib/cart'
import { products, getProductBySlug } from '../../../lib/products'
import { useParams } from 'next/navigation'
import Navbar from '../../../components/Navbar'
import AnnouncementBar from '../../../components/AnnouncementBar'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) return (
    <main>
      <Navbar />
      <div className="text-center py-32 font-display text-4xl text-uc-purple">Monster not found 👾</div>
      <Footer />
    </main>
  )

  const handleAdd = () => {
    addItem(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-body text-uc-purple/50 mb-8">
          <Link href="/" className="hover:text-uc-purple">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-uc-purple">Shop</Link>
          <span>/</span>
          <span className="text-uc-purple">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-uc-lavender rounded-3xl overflow-hidden aspect-square mb-4">
              <img src={product.images[activeImg]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImg === i ? 'border-uc-purple' : 'border-uc-lavender hover:border-uc-purple/50'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full font-body mb-4 ${product.tagColor}`}>{product.tag}</span>
            <h1 className="font-display text-5xl text-uc-purple mb-2">{product.name}</h1>
            <p className="text-uc-purple/50 font-body mb-4">{product.subtitle}</p>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-5xl text-uc-purple">${product.price}</span>
              <span className="text-uc-purple/40 line-through font-body text-xl">${product.originalPrice}</span>
              <span className="bg-red-100 text-red-500 font-bold px-3 py-1 rounded-full font-body text-sm">
                Save ${(product.originalPrice - product.price).toFixed(0)}
              </span>
            </div>

            <p className="text-uc-purple/80 font-body leading-relaxed mb-6">{product.longDescription}</p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 font-body text-sm text-uc-purple">
                  <span className="text-uc-green font-bold text-base">✓</span> {f}
                </li>
              ))}
            </ul>

            {/* Qty + Add to cart */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-3 bg-uc-lavender rounded-full px-4 py-2">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="text-uc-purple font-bold text-xl w-6 text-center">−</button>
                <span className="font-bold text-uc-purple font-body w-6 text-center">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="text-uc-purple font-bold text-xl w-6 text-center">+</button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 font-bold py-4 rounded-2xl transition-all font-body text-lg ${added ? 'bg-uc-green text-uc-dark' : 'bg-uc-purple text-white hover:bg-uc-purple-light'}`}
              >
                {added ? '✓ Added to Cart!' : `Add to Cart ${product.emoji}`}
              </button>
            </div>

            <Link
              href="/checkout"
              className="block w-full text-center border-2 border-uc-purple text-uc-purple font-bold py-4 rounded-2xl hover:bg-uc-lavender transition-colors font-body"
            >
              Buy Now →
            </Link>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: '🚚', text: 'Free shipping over $35' },
                { icon: '↩️', text: '30-day returns' },
                { icon: '🔒', text: 'Secure checkout' },
              ].map((b, i) => (
                <div key={i} className="bg-uc-lavender rounded-xl p-3">
                  <div className="text-2xl mb-1">{b.icon}</div>
                  <p className="text-xs font-body text-uc-purple/70">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-8 border-t-2 border-uc-lavender pt-6">
              <h3 className="font-display text-2xl text-uc-purple mb-4">Specifications</h3>
              <table className="w-full text-sm font-body">
                <tbody>
                  {Object.entries(product.specs).map(([k, v]) => (
                    <tr key={k} className="border-b border-uc-lavender">
                      <td className="py-2 text-uc-purple/60 w-1/3">{k}</td>
                      <td className="py-2 text-uc-purple font-semibold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20">
          <h2 className="font-display text-4xl text-uc-purple mb-8 text-center">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.filter(p => p.id !== product.id).map(p => (
              <Link key={p.id} href={`/products/${p.slug}`} className="bg-white rounded-2xl overflow-hidden border-2 border-uc-lavender card-hover group flex gap-4 p-4">
                <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-xl" />
                <div>
                  <h4 className="font-display text-xl text-uc-purple">{p.name}</h4>
                  <p className="text-uc-purple/50 text-xs font-body mb-1">{p.subtitle}</p>
                  <span className="font-display text-2xl text-uc-purple">${p.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
