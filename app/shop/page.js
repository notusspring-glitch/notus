'use client'
import { useCart } from '../../lib/cart'
import { products } from '../../lib/products'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import AnnouncementBar from '../../components/AnnouncementBar'
import Footer from '../../components/Footer'

export default function ShopPage() {
  const { addItem } = useCart()

  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-7xl text-uc-purple mb-4">THE MONSTER SHOP</h1>
          <p className="text-uc-purple/70 font-body text-lg">All creatures. All ugly. All lovable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map(product => (
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
