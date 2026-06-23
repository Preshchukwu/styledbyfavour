import Image from 'next/image'
import ScrollReveal from './ScrollReveal'

const IMAGES = [
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232573/Gemini_Generated_Image_cqdshzcqdshzcqds_hn4x20.png',
    alt: 'Luxury braided hairstyle by Styled by Favour',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232571/Gemini_Generated_Image_5lyd935lyd935lyd_uv57wv.png',
    alt: 'Protective braided style — Nashville TN',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232568/portrait-young-woman-smiling-isolated_mgeq0q.jpg',
    alt: 'Client with knotless braids by Favour',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232543/Gemini_Generated_Image_efgsqvefgsqvefgs_hm8ubs.png',
    alt: 'Beautiful braided style by Styled by Favour',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232565/Black_woman_with_intricate_geometric_202606231722_f6rafj.jpg',
    alt: 'Intricate geometric cornrow pattern by Favour',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232559/portrait-young-woman-smiling-isolated_1_vqth6c.jpg',
    alt: 'Client portrait with braided protective style',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232551/African_American_woman_updo_earr__202606231726_azp0bk.jpg',
    alt: 'Elegant updo braided hairstyle — Nashville',
  },
  {
    src: 'https://res.cloudinary.com/dty8p5leo/image/upload/v1782232529/Black_woman_with_Fulani_braids_202606231724_czrndy.jpg',
    alt: 'Fulani braids specialist — Nashville Tennessee',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-offwhite py-24 md:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        <ScrollReveal>
          <div className="mb-10 md:mb-14">
            <p className="text-[11px] font-light tracking-[0.5em] uppercase text-violet mb-4">
              The Work
            </p>
            <h2
              className="font-display font-light text-plum"
              style={{ fontSize: 'clamp(36px, 4vw, 64px)', lineHeight: 1.05 }}
            >
              Styles that speak<br />
              <em className="italic">for themselves.</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            <div key={i} className="gallery-tile">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={`object-cover object-top gallery-kb-${(i % 5) + 1}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
