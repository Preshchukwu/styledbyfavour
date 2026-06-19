import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    icon: '✦',
    title: 'Unmatched Precision',
    body: "Every part is clean, every braid is even, every style is intentional. Favour's work is defined by a level of technical care that clients feel from the first touch to the finished look.",
  },
  {
    icon: '◇',
    title: 'Clients Come First',
    body: 'Your comfort, your vision, your time — all treated with respect. From consultation to completion, the experience is designed around you, not the other way around.',
  },
  {
    icon: '★',
    title: 'Premium, Always',
    body: "Nashville deserves luxury braiding that competes with the best in the country. That's the standard Favour holds every single session — no exceptions, no shortcuts.",
  },
]

export default function WhyFavour() {
  return (
    <section className="bg-plum px-12 py-[120px] max-md:px-6 max-md:py-20">
      <ScrollReveal>
        <p className="text-[10px] font-normal tracking-[0.4em] uppercase text-violet-light mb-3.5">
          Why choose Favour
        </p>
        <h2 className="font-display font-light text-[52px] leading-[1.05] text-white">
          The <em className="italic">difference</em><br />is in the detail.
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={80} className="grid grid-cols-1 md:grid-cols-3 mt-16" style={{ gap: '2px', background: 'rgba(255,255,255,0.08)' }}>
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-plum px-9 py-12"
            style={{ border: '0.5px solid rgba(168,85,247,0.2)' }}
          >
            <span className="font-display italic text-[36px] text-violet mb-5 block">
              {p.icon}
            </span>
            <h3 className="font-display font-normal text-[22px] text-white mb-3">
              {p.title}
            </h3>
            <p className="text-[14px] font-light leading-[1.8] text-violet-light opacity-85">
              {p.body}
            </p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  )
}
