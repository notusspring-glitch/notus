'use client'
import { useCart } from '../lib/cart'
import { products } from '../lib/products'
import Link from 'next/link'

export default function Products() {
  const { addItem } = useCart()

  return (
    <section id="products" className="py-24 bg-uc-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-uc-lavender text-uc-purple text-sm font-bold px-4 py-1 rounded-full mb-4 font-body">
            👾 The Monster Collection
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-uc-purple mb-4">ADOPT YOUR MONSTER</h2>
          <p className="text-uc-purple/70 text-lg font-body max-w-xl mx-auto">
            Each one is uniquely hideous. Each one is uniquely lovable. Which one is calling your name?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden border-2 border-uc-lavender card-hover group">
              {/* Image */}
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

        <div className="text-center mt-16 bg-uc-dark rounded-3xl p-10">
          <h3 className="font-display text-4xl text-white mb-3">CAN'T DECIDE?</h3>
          <p className="text-white/70 font-body mb-6">Get all three. They travel in packs.</p>
          <Link href="/shop" className="inline-block bg-uc-green text-uc-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform font-body">
            Shop All Monsters →
          </Link>
          <p className="text-uc-green/60 text-sm font-body mt-4">
            Use code <strong className="text-uc-green">WELCOME15</strong> for 15% off · Free shipping over $35
          </p>
        </div>
      </div>
    </section>
  )
}
