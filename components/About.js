export default function About() {
  const values = [
    { emoji: '🦷', title: 'Ugly By Design', desc: 'We celebrate imperfection. Our monsters are proudly weird — and that\'s exactly why you\'ll love them.' },
    { emoji: '🤗', title: 'Soft On The Inside', desc: 'Premium PP cotton fill. Every monster is made to be hugged, squeezed, and taken everywhere.' },
    { emoji: '🌍', title: 'Ethically Sourced', desc: 'Every plushie is sourced from vetted manufacturers meeting CE and ASTM safety standards.' },
    { emoji: '🎁', title: 'Perfect For Everyone', desc: 'The gift nobody asked for. The gift everyone secretly wanted. Guaranteed double-take.' },
  ]

  return (
    <section id="about" className="py-24 bg-uc-lavender">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-white text-uc-purple text-sm font-bold px-4 py-1 rounded-full mb-6 font-body">
              👽 Our Story
            </span>
            <h2 className="font-display text-6xl text-uc-purple mb-6 leading-tight">
              UGLY IS THE
              <br />
              <span className="text-uc-purple-light">NEW CUTE</span>
            </h2>
            <p className="text-uc-purple/80 font-body text-lg leading-relaxed mb-6">
              We believe the best things in life are a little weird. A little wrong.
              A little ugly. UglyCute Studio was born from a simple idea: what if the
              most lovable toy was also the most hideous?
            </p>
            <p className="text-uc-purple/70 font-body leading-relaxed mb-8">
              From our toothy monsters to our cockroach besties, every creature in our
              collection is designed to make you do a double-take — and then immediately
              want to adopt it. We're not here to make cute toys. We're here to make
              unforgettable ones.
            </p>
            <a
              href="https://h5gcuy-us.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-uc-purple text-white font-bold px-8 py-4 rounded-full hover:bg-uc-purple-light transition-colors font-body"
            >
              Meet the Full Collection →
            </a>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-hover">
                <div className="text-4xl mb-3">{v.emoji}</div>
                <h4 className="font-display text-xl text-uc-purple mb-2">{v.title}</h4>
                <p className="text-uc-purple/60 text-sm font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-3 gap-4 bg-uc-dark rounded-3xl p-8">
          {[
            { number: '3', label: 'Monsters Available', emoji: '👾' },
            { number: '$14.99', label: 'Starting Price', emoji: '💰' },
            { number: '30', label: 'Day Free Returns', emoji: '✅' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="font-display text-4xl text-uc-green">{stat.number}</div>
              <div className="text-white/60 text-sm font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
