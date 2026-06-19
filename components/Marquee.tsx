const items = [
  'Knotless Braids',
  'Cornrows',
  'Fulani Braids',
  'Mini Twists',
  'Crochet Styles',
  'Nashville, TN',
  'Precision. Passion. Perfection.',
]

export default function Marquee() {
  return (
    <div className="bg-plum py-[14px] overflow-hidden whitespace-nowrap" aria-hidden="true">
      <div className="inline-flex animate-marquee">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-[11px] font-light tracking-[0.35em] uppercase text-violet-light px-12">
              {item}
            </span>
            <span className="text-violet text-[8px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
