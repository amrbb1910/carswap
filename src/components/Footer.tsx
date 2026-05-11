const footerLinks = ['O aplikacji', 'Jak to działa', 'Bezpieczeństwo', 'FAQ', 'Kontakt', 'Polityka prywatności', 'Regulamin'];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/32">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="CarSwap — powrót na górę strony">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-lg font-black text-ink">
                CS
              </span>
              <span className="text-xl font-black text-white">CarSwap</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              CarSwap — społecznościowa aplikacja do wymiany samochodów.
            </p>
            <a href="mailto:hello@carswap.app" className="mt-4 inline-block text-sm font-bold text-lime hover:text-white">
              hello@carswap.app
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <nav className="flex flex-wrap gap-3" aria-label="Linki w stopce">
              {footerLinks.map((link) => (
                <a key={link} href={link === 'FAQ' ? '#faq' : '#top'} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-lime/40 hover:text-white">
                  {link}
                </a>
              ))}
            </nav>
            <div>
              <p className="text-sm font-black text-white">Social media</p>
              <div className="mt-3 flex gap-3">
                {['IG', 'TT', 'IN'].map((social) => (
                  <a
                    key={social}
                    href="#top"
                    aria-label={`Profil CarSwap ${social}`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-black text-slate-200 transition hover:border-cyan/50 hover:text-white"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CarSwap. Wszystkie prawa zastrzeżone.</p>
          <p>Projekt przygotowany pod premierę aplikacji iOS.</p>
        </div>
      </div>
    </footer>
  );
}
