const products = [
  {
    id: 1,
    name: 'Toothy Monster Plush',
    subtitle: '9" Funny Stuffed Animal',
    price: 22.99,
    originalPrice: 32.99,
    emoji: '🦷',
    tag: 'Best Seller',
    tagColor: 'bg-uc-green text-uc-dark',
    image: 'https://s.alicdn.com/@sc04/kf/H5ad700445ab54a6f91dba20f1c4ed99cm.jpg',
    description: 'Big googly eyes, floppy ears, and a grin full of teeth. So wrong. So right.',
    features: ['9 inches of ugly cuteness', 'Ultra-soft premium plush', 'Safe for ages 3+'],
    link: 'https://h5gcuy-us.myshopify.com/products/ugly-cute-monster-plush-toy-with-big-teeth-9-funny-stuffed-animal-gift',
  },
  {
    id: 2,
    name: 'Cockroach Bestie Plush',
    subtitle: '9.8" Cartoon Bug Stuffed Animal',
    price: 19.99,
    originalPrice: 28.99,
    emoji: '🪳',
    tag: 'Gag Gift Pick',
    tagColor: 'bg-uc-purple text-white',
    image: 'https://s.alicdn.com/@sc04/kf/Hb3f56d94dc934a048f3e1da74f4a4d79e.jpg',
    description: 'Chubby, lovable, and misunderstood. Roachie just wants to be your best friend.',
    features: ['9.8 inches of roach realness', 'PP cotton fill — super squishy', 'Perfect desk companion'],
    link: 'https://h5gcuy-us.myshopify.com/products/cute-cockroach-plush-toy-9-8-funny-ugly-cute-bug-stuffed-animal-gag-gift',
  },
  {
    id: 3,
    name: 'Monster Keychain',
    subtitle: 'Mini Plush Bag Charm',
    price: 14.99,
    originalPrice: 19.99,
    emoji: '🎃',
    tag: 'Impulse Buy',
    tagColor: 'bg-yellow-400 text-uc-dark',
    image: 'https://s.alicdn.com/@sc04/kf/H0c7c02e09c3b44a9bce602a75c888f6a2.jpg',
    description: 'Clip one on your bag. Let the monster do the talking. Collect them all.',
    features: ['Pocket-sized ugly cuteness', 'Sturdy metal keyring', 'Collectible series'],
    link: 'https://h5gcuy-us.myshopify.com/products/ugly-cute-monster-plush-keychain-funny-mini-stuffed-animal-bag-charm',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-uc-cream">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-uc-lavender text-uc-purple text-sm font-bold px-4 py-1 rounded-full mb-4 font-body">
            👾 The Monster Collection
          </span>
          <h2 className="font-display text-6xl md:text-7xl text-uc-purple mb-4">
            ADOPT YOUR MONSTER
          </h2>
          <p className="text-uc-purple/70 text-lg font-body max-w-xl mx-auto">
            Each one is uniquely hideous. Each one is uniquely lovable. Which one is calling your name?
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-uc-lavender card-hover group"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-uc-lavender aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full font-body ${product.tagColor}`}>
                  {product.tag}
                </span>
                {/* Emoji */}
                <span className="absolute top-3 right-3 text-2xl">{product.emoji}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-uc-purple mb-1">{product.name}</h3>
                <p className="text-uc-purple/50 text-sm font-body mb-3">{product.subtitle}</p>
                <p className="text-uc-purple/80 font-body text-sm mb-4">{product.description}</p>

                {/* Features */}
                <ul className="space-y-1 mb-5">
                  {product.features.map((f, i) => (
                    <li key={i} className="text-xs text-uc-purple/60 font-body flex items-center gap-2">
                      <span className="text-uc-green font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-display text-3xl text-uc-purple">${product.price}</span>
                  <span className="text-uc-purple/40 line-through font-body text-sm">${product.originalPrice}</span>
                  <span className="text-xs bg-red-100 text-red-500 font-bold px-2 py-0.5 rounded-full font-body">
                    Save ${(product.originalPrice - product.price).toFixed(0)}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-uc-purple text-white text-center font-bold py-3 rounded-2xl hover:bg-uc-purple-light transition-colors font-body"
                >
                  Adopt {product.emoji}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-uc-dark rounded-3xl p-10">
          <h3 className="font-display text-4xl text-white mb-3">CAN'T DECIDE?</h3>
          <p className="text-white/70 font-body mb-6">Get all three. They travel in packs.</p>
          <a
            href="https://h5gcuy-us.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-uc-green text-uc-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform font-body"
          >
            Shop All Monsters →
          </a>
          <p className="text-uc-green/60 text-sm font-body mt-4">
            Use code <strong className="text-uc-green">WELCOME15</strong> for 15% off · Free shipping over $35
          </p>
        </div>
      </div>
    </section>
  )
}
