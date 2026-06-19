export default function Footer() {
  return (
    <footer className="bg-plum px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4 max-md:text-center max-md:px-6 max-md:py-8">
      <div className="font-display font-normal text-xl text-white tracking-[0.04em]">
        Styled by <em className="italic text-violet-light">Favour</em>
      </div>
      <div className="text-[11px] font-extralight tracking-[0.35em] uppercase text-violet-light opacity-60">
        Precision · Passion · Perfection
      </div>
      <div className="text-[11px] font-extralight tracking-[0.12em] text-violet-light opacity-40">
        © 2026 Styled by Favour · Nashville, TN
      </div>
    </footer>
  )
}
