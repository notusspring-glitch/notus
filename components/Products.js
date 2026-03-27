'use client'
import { useState } from 'react'
import { useCart } from '../lib/cart'
import { products, collections } from '../lib/products'
import Link from 'next/link'

export default function Products() {
  const { addItem } = useCart()
  const [activeCollection, setActiveCollection] = useState('all')

  const filtered = activeCollection === 'all'
    ? products
    : products.filter(p => p.collection === activeCollection)

  return (
    <section id="products" className="py-24 bg-uc-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-uc-lavender text-uc-purple text-sm font-bold px-4 py-1 rounded-full mb-4 font-body">
            🛍️ The Full Collection
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-uc-purple mb-4">FIND YOUR PLUSH</h2>
          <p className="text-uc-purple/70 text-lg font-body max-w-xl mx-auto">
            From ugly-cute monsters to kawaii companions — there's a plushie for every personality.
          </p>
        </div>

        {/* Collection filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCollection('all')}
            className={`px-6 py-2 rounded-full font-bold font-body border-2 transition-all ${activeCollection === 'all' ? 'bg-uc-purple text-white border-uc-purple' : 'border-uc-lavender text-uc-purple hover:border-uc-purple'}`}
          >
            All ({products.length})
          </button>
          {Object.values(collections).map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCollection(c.id)}
              className={`px-6 py-2 rounded-full font-bold font-body border-2 transition-all ${activeCollection === c.id ? 'bg-uc-purple text-white border-uc-purple' : 'border-uc-lavender text-uc-purple hover:border-uc-purple'}`}
            >
              {c.emoji} {c.name} ({products.filter(p => p.collection === c.id).length})
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border-2 border-uc-lavender card-hover group">
              <Link href={`/products/${product.slug}`}>
                <div className="relative overflow-hidden bg-uc-lavender aspect-square cursor-pointer">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full font-body ${product.tagColor}`}>{product.tag}</span>
                  <span className="absolute top-3 right-3 text-2xl">{product.emoji}</span>
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-display text-2xl text-uc-purple mb-1 hover:text-uc-purple-light transition-colors cursor-pointer">{product.name}</h3>
                </Link>
                <p className="text-uc-purple/50 text-sm font-body mb-3">{product.subtitle}</p>
                <p className="text-uc-purple/80 font-body text-sm mb-4">{product.description}</p>
                <ul className="space-y-1 mb-5">
                  {product.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="text-xs text-uc-purple/60 font-body flex items-center gap-2">
                      <span className="text-uc-green font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-3xl text-uc-purple">${product.price}</span>
                  <span className="text-uc-purple/40 line-through font-body text-sm">${product.originalPrice}</span>
                  <span className="text-xs bg-red-100 text-red-500 font-bold px-2 py-0.5 rounded-full font-body">
                    Save ${(product.originalPrice - product.price).toFixed(0)}
                  </span>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-uc-purple text-white text-center font-bold py-3 rounded-2xl hover:bg-uc-purple-light transition-colors font-body"
                >
                  Add to Cart {product.emoji}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-uc-dark rounded-3xl p-8 text-center">
            <div className="text-4xl mb-3">👾</div>
            <h3 className="font-display text-3xl text-white mb-2">UGLY CUTE MONSTERS</h3>
            <p className="text-white/60 font-body text-sm mb-5">Weirdly lovable. Aggressively hideous. Completely irresistible.</p>
            <button onClick={() => { setActiveCollection('monsters'); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-block bg-uc-green text-uc-dark font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform font-body">
              Shop Monsters →
            </button>
          </div>
          <div className="bg-pink-50 border-2 border-pink-200 rounded-3xl p-8 text-center">
            <div className="text-4xl mb-3">🌸</div>
            <h3 className="font-display text-3xl text-pink-800 mb-2">KAWAII GIRL COLLECTION</h3>
            <p className="text-pink-600/70 font-body text-sm mb-5">Soft, aesthetic, and impossibly cute. Your emotional support squad.</p>
            <button onClick={() => { setActiveCollection('kawaii'); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-block bg-pink-400 text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform font-body">
              Shop Kawaii →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
