export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #2d0a4e 50%, #1a0a2e 100%)',
      }}
    >
      {/* Floating emoji decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {['🦷', '🪳', '👾', '🦷', '🎃', '👽', '🪲', '🦷'].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              top: `${10 + i * 11}%`,
              left: `${5 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {/* Banner image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.shopify.com/s/files/1/0818/7455/1028/files/A446f43033244407db8ef13bd641ad1a9b.webp"
          alt="UglyCute Studio Banner"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-uc-dark/60 via-transparent to-uc-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block bg-uc-green text-uc-dark text-sm font-bold px-4 py-1 rounded-full mb-6 font-body">
          🎉 Grand Opening — Now Live!
        </div>

        <h1 className="font-display text-7xl md:text-9xl text-white mb-4 leading-none">
          SO UGLY.
          <br />
          <span className="text-uc-green neon-text">SO LOVABLE.</span>
        </h1>

        <p className="text-white/80 text-xl md:text-2xl font-body mb-10 max-w-2xl mx-auto">
          Meet your new weirdly adorable best friends.
          Monster plushies so wrong, they're absolutely right.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://h5gcuy-us.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-uc-green text-uc-dark font-bold text-lg px-8 py-4 rounded-full hover:scale-105 transition-transform pulse-green font-body"
          >
            Adopt a Monster →
          </a>
          <a
            href="#products"
            className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-body"
          >
            Meet the Monsters ↓
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/60 text-sm font-body">
          <span>✅ Free shipping over $35</span>
          <span>✅ 30-day returns</span>
          <span>✅ Weirdness guaranteed</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 float">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
