import ScrollReveal from './ScrollReveal'

const tags = ['Nashville TN', 'East Nashville', 'Brentwood', 'Antioch', 'Murfreesboro', 'Middle Tennessee']

export default function Location() {
  return (
    <section
      id="location"
      className="grid grid-cols-1 md:grid-cols-2 gap-20 px-12 py-[100px] bg-offwhite max-md:px-6 max-md:py-20 max-md:gap-12"
    >
      <ScrollReveal>
        <p className="text-[10px] font-normal tracking-[0.4em] uppercase text-violet mb-3.5">
          Nashville, Tennessee
        </p>
        <h2 className="font-display font-light text-[44px] leading-[1.1] text-plum mb-6">
          The <em className="italic">best braider</em><br />in Nashville,<br />is closer than you think.
        </h2>
        <div className="text-[15px] font-light leading-[1.85] text-muted space-y-4">
          <p>
            Styled by Favour serves clients across Nashville and the greater Tennessee area — from
            East Nashville to Antioch, Brentwood to Murfreesboro. If you&apos;re searching for a
            luxury braider in Nashville TN, a Fulani braid specialist, or simply the most premium
            protective styles in the city, you&apos;ve found her.
          </p>
          <p>
            Appointments are available by booking only. Reach out via email or call to reserve your slot.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-light tracking-[0.18em] uppercase text-plum bg-white px-4 py-2"
              style={{ border: '0.5px solid #d8b4fe' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={80} className="flex items-center justify-center">
        <div
          className="w-full bg-lavender flex flex-col items-center justify-center gap-3"
          style={{ aspectRatio: '4/3', border: '0.5px solid #e8e0f5' }}
        >
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" aria-hidden="true">
            <path
              d="M16 2C9.373 2 4 7.373 4 14c0 9.333 12 24 12 24s12-14.667 12-24C28 7.373 22.627 2 16 2z"
              fill="#a855f7"
              fillOpacity="0.2"
              stroke="#3b0764"
              strokeWidth="1.5"
            />
            <circle cx="16" cy="14" r="5" fill="#3b0764" />
          </svg>
          <p className="font-display italic text-[18px] text-plum">Nashville, Tennessee</p>
          <p className="text-[11px] font-light tracking-[0.25em] uppercase text-violet">
            Serving Greater Nashville &amp; TN
          </p>
        </div>
      </ScrollReveal>
    </section>
  )
}
