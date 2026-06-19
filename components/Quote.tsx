import ScrollReveal from './ScrollReveal'

export default function Quote() {
  return (
    <section className="px-12 py-[120px] bg-white text-center relative max-md:px-6 max-md:py-20">
      <ScrollReveal>
        <span
          className="font-display font-light text-lavender block mb-6 leading-none select-none"
          style={{ fontSize: '120px', lineHeight: 0.5 }}
          aria-hidden="true"
        >
          &ldquo;
        </span>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <blockquote
          className="font-display italic font-light text-plum max-w-[780px] mx-auto mb-8 leading-[1.4]"
          style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}
        >
          Her hair is her crown — and every crown deserves a stylist who treats it like royalty.
        </blockquote>
      </ScrollReveal>

      <ScrollReveal delay={160}>
        <div
          className="w-10 mx-auto mb-4"
          style={{ height: '0.5px', background: '#a855f7' }}
          aria-hidden="true"
        />
        <p className="text-[11px] font-light tracking-[0.35em] uppercase text-violet">
          Styled by Favour · Nashville, TN
        </p>
      </ScrollReveal>
    </section>
  )
}
