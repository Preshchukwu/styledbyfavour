import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const HERO_IMG =
  'https://res.cloudinary.com/dty8p5leo/image/upload/v1781909339/Frame_1984081023_uslcew.png'

export default function Hero() {
  return (
    <section id="home" className="relative bg-white overflow-hidden">

      {/* ── Desktop image: absolute, right half, full section height ── */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
        <Image
          src={HERO_IMG}
          alt="Favour — Nashville's luxury braiding specialist"
          fill
          priority
          sizes="50vw"
          className="object-cover object-top"
        />
        {/* Soft left-edge fade into white */}
        <div
          className="absolute inset-y-0 left-0 w-28 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }}
          aria-hidden="true"
        />
      </div>

      {/* ── Mobile image strip (above text) ── */}
      <div className="relative md:hidden" style={{ height: '80vw' }}>
        <Image
          src={HERO_IMG}
          alt="Favour — Nashville's luxury braiding specialist"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>

      {/* ── Text content: left half on desktop, full width on mobile ── */}
      <div className="relative z-10 flex flex-col justify-end md:min-h-screen md:w-1/2 px-12 pb-20 pt-8 md:pt-28 max-md:px-6 max-md:pb-14">

        {/* Decorative "F" watermark — desktop only */}
        <div
          className="absolute top-1/2 left-8 -translate-y-[60%] font-display italic font-light select-none pointer-events-none hidden md:block"
          style={{ fontSize: 'clamp(140px, 14vw, 240px)', lineHeight: 1, color: '#f5f0ff' }}
          aria-hidden="true"
        >
          F
        </div>

        <div className="relative z-10">
          <ScrollReveal>
            <p className="text-[11px] font-light tracking-[0.5em] uppercase text-violet mb-5">
              Nashville&apos;s Premier Luxury Braiding Specialist
            </p>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1
              className="font-display font-light text-plum"
              style={{ fontSize: 'clamp(52px, 6.5vw, 105px)', lineHeight: 0.92 }}
            >
              Your hair.<br />
              Your crown.<br />
              <em className="italic text-violet block">Styled by Favour.</em>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="font-display italic font-light text-xl text-muted mt-8 max-w-sm leading-relaxed">
              Premium protective styles crafted with precision, passion, and unmatched attention
              to detail — right here in Nashville, Tennessee.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="#book"
              className="inline-block text-[11px] font-medium tracking-[0.22em] uppercase text-white bg-plum px-10 py-4 no-underline hover:bg-plum-mid transition-colors duration-200"
            >
              Book Your Appointment
            </a>
            <a
              href="#services"
              className="inline-block text-[11px] font-normal tracking-[0.22em] uppercase text-plum px-10 py-4 no-underline hover:bg-lavender transition-colors duration-200"
              style={{ border: '0.5px solid #3b0764' }}
            >
              View Services
            </a>
          </ScrollReveal>
        </div>
      </div>

    </section>
  )
}
