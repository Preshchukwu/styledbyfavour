import ScrollReveal from './ScrollReveal'

export default function Booking() {
  return (
    <section
      id="book"
      className="bg-white px-12 py-[140px] text-center relative overflow-hidden max-md:px-6 max-md:py-20"
    >
      {/* Decorative background character */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display italic font-light text-lavender pointer-events-none select-none leading-none whitespace-nowrap"
        style={{ fontSize: '320px' }}
        aria-hidden="true"
      >
        ✦
      </div>

      <div className="relative z-10">
        <ScrollReveal>
          <p className="text-[11px] font-light tracking-[0.45em] uppercase text-violet mb-5">
            Ready for your crown moment?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2
            className="font-display font-light text-plum mb-4 leading-none"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
          >
            Book with<br />
            <em className="italic text-violet">Favour.</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <p className="font-display italic font-light text-xl text-muted mb-12">
            Nashville&apos;s luxury braiding experience — by appointment only.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:favournwachukwub490@gmail.com"
            className="inline-block text-[11px] font-medium tracking-[0.22em] uppercase text-white bg-plum px-10 py-4 no-underline hover:bg-plum-mid transition-colors duration-200"
          >
            Email to Book
          </a>
          <a
            href="tel:6294684836"
            className="inline-block text-[11px] font-normal tracking-[0.22em] uppercase text-plum px-10 py-4 no-underline hover:bg-lavender transition-colors duration-200"
            style={{ border: '0.5px solid #3b0764' }}
          >
            Call (629) 468-4836
          </a>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center">
            <a
              href="mailto:favournwachukwub490@gmail.com"
              className="text-[13px] font-light tracking-[0.12em] text-muted no-underline hover:text-plum transition-colors duration-200"
            >
              favournwachukwub490@gmail.com
            </a>
            <div className="hidden sm:block w-px h-5 bg-rule" aria-hidden="true" />
            <a
              href="tel:6294684836"
              className="text-[13px] font-light tracking-[0.12em] text-muted no-underline hover:text-plum transition-colors duration-200"
            >
              (629) 468-4836
            </a>
            <div className="hidden sm:block w-px h-5 bg-rule" aria-hidden="true" />
            <span className="text-[13px] font-light tracking-[0.12em] text-muted">
              Nashville, Tennessee
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
