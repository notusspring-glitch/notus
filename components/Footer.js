export default function Footer() {
  return (
    <footer className="bg-uc-dark text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-4xl mb-4">
              Ugly<span className="text-uc-green">Cute</span>Studio
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              Home of the world's most lovably ugly plush monsters.
              Adopt one today. Regret nothing.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-uc-green transition-colors font-body text-sm"
              >
                Twitter / X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-uc-green transition-colors font-body text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-xl text-uc-green mb-4">Shop</h4>
            <ul className="space-y-2 font-body text-sm text-white/60">
              <li>
                <a href="https://h5gcuy-us.myshopify.com/products/ugly-cute-monster-plush-toy-with-big-teeth-9-funny-stuffed-animal-gift" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  🦷 Toothy Monster Plush
                </a>
              </li>
              <li>
                <a href="https://h5gcuy-us.myshopify.com/products/cute-cockroach-plush-toy-9-8-funny-ugly-cute-bug-stuffed-animal-gag-gift" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  🪳 Cockroach Bestie Plush
                </a>
              </li>
              <li>
                <a href="https://h5gcuy-us.myshopify.com/products/ugly-cute-monster-plush-keychain-funny-mini-stuffed-animal-bag-charm" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  🎃 Monster Keychain
                </a>
              </li>
              <li>
                <a href="https://h5gcuy-us.myshopify.com/collections/ugly-cute-monsters" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  👾 All Monsters
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-xl text-uc-green mb-4">Info</h4>
            <ul className="space-y-2 font-body text-sm text-white/60">
              <li>📦 Free shipping over $35</li>
              <li>↩️ 30-day free returns</li>
              <li>🔒 Secure checkout via Shopify</li>
              <li className="pt-2">
                <span className="bg-uc-green text-uc-dark font-bold px-3 py-1 rounded-full text-xs">
                  WELCOME15
                </span>
                <span className="ml-2">15% off first order</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-body">
            © 2026 UglyCute Studio. All rights reserved. Ugliness guaranteed.
          </p>
          <a
            href="https://h5gcuy-us.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-uc-green text-uc-dark font-bold px-6 py-2 rounded-full text-sm hover:scale-105 transition-transform font-body"
          >
            Shop Now →
          </a>
        </div>
      </div>
    </footer>
  )
}
