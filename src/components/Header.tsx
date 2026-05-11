import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Jak to działa', href: '#jak-to-dziala' },
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Bezpieczeństwo', href: '#bezpieczenstwo' },
  { label: 'FAQ', href: '#faq' }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="CarSwap — strona główna">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-lime text-lg font-black text-ink shadow-glow">
            CS
          </span>
          <span className="text-xl font-black text-white">CarSwap</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Główna nawigacja">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#waitlist" className="primary-button">
            Dołącz do listy
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Nawigacja mobilna">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-200 hover:bg-white/[0.06]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#waitlist" className="primary-button mt-2" onClick={() => setIsOpen(false)}>
              Dołącz do listy
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
