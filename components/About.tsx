import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 gap-20 px-12 py-[120px] bg-white max-md:px-6 max-md:py-20 max-md:gap-12"
    >
      <ScrollReveal>
        <p className="text-[10px] font-normal tracking-[0.4em] uppercase text-violet mb-5">
          About Favour
        </p>
        <h2 className="font-display font-light text-[48px] leading-[1.1] text-plum">
          Where <em className="italic">craft</em><br />meets crown.
        </h2>
        <div
          className="grid grid-cols-2 gap-8 mt-12 pt-12"
          style={{ borderTop: '0.5px solid #e8e0f5' }}
        >
          <div>
            <div className="font-display font-light text-[52px] leading-none text-plum">5+</div>
            <div className="text-[11px] font-light tracking-[0.2em] uppercase text-muted mt-1.5">
              Years of mastery
            </div>
          </div>
          <div>
            <div className="font-display font-light text-[52px] leading-none text-plum">∞</div>
            <div className="text-[11px] font-light tracking-[0.2em] uppercase text-muted mt-1.5">
              Satisfied clients
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80} className="flex flex-col justify-center">
        <div className="text-[16px] font-light leading-[1.85] text-muted space-y-5">
          <p>
            Favour is Nashville&apos;s go-to luxury braiding specialist — a stylist who treats every
            appointment as an act of care, not just a service. With roots in West African braiding
            tradition and an eye for contemporary style, every look is built for the woman who knows
            her hair is her crown.
          </p>
          <p>
            Based in Nashville, Tennessee, Styled by Favour brings a level of precision and
            intentionality that is rare in the market. Whether you&apos;re sitting down for knotless
            braids, Fulani braids, or an intricate crochet set, you leave looking and feeling elevated.
          </p>
          <p>
            Details matter. Clients come first. Always striving for perfection.
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
