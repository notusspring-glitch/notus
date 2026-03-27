'use client'
import { useState } from 'react'
import { useCart } from '../../lib/cart'
import { products, collections } from '../../lib/products'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import AnnouncementBar from '../../components/AnnouncementBar'
import Footer from '../../components/Footer'

export default function ShopPage() {
  const { addItem } = useCart()
  const [activeCollection, setActiveCollection] = useState('all')

  const filtered = activeCollection === 'all'
    ? products
    : products.filter(p => p.collection === activeCollection)

  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-display text-7xl text-uc-purple mb-4">THE PLUSH SHOP</h1>
          <p className="text-uc-purple/70 font-body text-lg">Monsters. Kawaii. All lovable. Pick your side.</p>
        </div>

        {/* Filter tabs */}
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

        {/* Collection banner */}
        {activeCollection !== 'all' && (
          <div className={`rounded-2xl p-6 mb-8 text-center ${collections[activeCollection].color}`}>
            <h2 className={`font-display text-3xl mb-1 ${collections[activeCollection].textColor}`}>
              {collections[activeCollection].emoji} {collections[activeCollection].name}
            </h2>
            <p className={`font-body text-sm ${collections[activeCollection].textColor} opacity-70`}>
              {collections[activeCollection].description}
            </p>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map(product => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border-2 border-uc-lavender card-hover group">
              <Link href={`/products/${product.slug}`}>
                <div className="relative overflow-hidden bg-uc-lavender aspect-square">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full font-body ${product.tagColor}`}>{product.tag}</span>
                  <span className="absolute top-3 right-3 text-2xl">{product.emoji}</span>
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="font-display text-2xl text-uc-purple mb-1 hover:text-uc-purple-light cursor-pointer">{product.name}</h3>
                </Link>
                <p className="text-uc-purple/50 text-sm font-body mb-4">{product.description}</p>
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-3xl text-uc-purple">${product.price}</span>
                  <span className="text-uc-purple/40 line-through font-body text-sm">${product.originalPrice}</span>
                  <span className="text-xs bg-red-100 text-red-500 font-bold px-2 py-0.5 rounded-full font-body">
                    Save ${(product.originalPrice - product.price).toFixed(0)}
                  </span>
                </div>
                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-uc-purple text-white font-bold py-3 rounded-2xl hover:bg-uc-purple-light transition-colors font-body"
                >
                  Add to Cart {product.emoji}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
