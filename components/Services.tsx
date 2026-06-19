import ScrollReveal from './ScrollReveal'

const services = [
  {
    num: '01',
    name: 'Knotless Braids',
    desc: 'Lightweight, natural-looking braids with no tension at the root. The gold standard in protective styling — every time.',
  },
  {
    num: '02',
    name: 'Cornrows',
    desc: 'Clean parts, sleek lines, timeless protection. From simple to intricate patterns, executed with precision.',
  },
  {
    num: '03',
    name: 'Fulani Braids',
    desc: 'Culture meets beauty. Rooted in West African tradition, detailed with beads and jewellery that speak volumes.',
  },
  {
    num: '04',
    name: 'Mini Twists',
    desc: 'Versatile, effortlessly chic, and endlessly wearable. Mini twists that move as beautifully as they hold.',
  },
  {
    num: '05',
    name: 'Crochet Styles',
    desc: 'Bold, expressive, and fully protective. Crochet sets that turn heads while keeping your natural hair thriving.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-lavender px-12 py-[120px] max-md:px-6 max-md:py-20"
    >
      <ScrollReveal className="flex items-end justify-between mb-16">
        <div>
          <p className="text-[10px] font-normal tracking-[0.4em] uppercase text-violet mb-3.5">
            What we do
          </p>
          <h2 className="font-display font-light text-[52px] leading-[1.05] text-plum">
            Premium <em className="italic">services</em><br />tailored for you.
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 bg-rule"
          style={{ gap: '1px', border: '0.5px solid #e8e0f5' }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="group bg-white px-7 py-10 transition-colors duration-[250ms] hover:bg-plum cursor-default"
            >
              <p className="text-[11px] font-light tracking-[0.3em] text-violet mb-6 transition-colors duration-[250ms] group-hover:text-violet-light">
                {s.num}
              </p>
              <h3 className="font-display font-normal text-[22px] leading-[1.2] text-plum mb-3 transition-colors duration-[250ms] group-hover:text-violet-light">
                {s.name}
              </h3>
              <p className="text-[13px] font-light leading-[1.7] text-muted transition-colors duration-[250ms] group-hover:text-violet-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
