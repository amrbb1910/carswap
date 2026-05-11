import { ArrowDown, ArrowRight, Heart, ShieldCheck, Sparkles, X } from 'lucide-react';

function CarArtwork() {
  return (
    <div
      className="relative h-44 overflow-hidden rounded-lg bg-[linear-gradient(135deg,rgba(33,212,253,0.25),rgba(163,255,18,0.18),rgba(255,122,26,0.18))]"
      role="img"
      aria-label="Stylizowana karta samochodu w aplikacji CarSwap"
    >
      <div className="absolute inset-x-0 bottom-0 h-16 bg-black/30" />
      <div className="absolute left-1/2 top-16 h-16 w-64 -translate-x-1/2 rounded-t-full bg-white/90 shadow-2xl shadow-black/40" />
      <div className="absolute left-1/2 top-24 h-12 w-80 -translate-x-1/2 rounded-lg bg-white" />
      <div className="absolute left-1/2 top-20 h-9 w-36 -translate-x-1/2 rounded-t-lg bg-ink/80" />
      <div className="absolute bottom-9 left-[22%] h-12 w-12 rounded-full border-4 border-ink bg-zinc-900" />
      <div className="absolute bottom-9 right-[22%] h-12 w-12 rounded-full border-4 border-ink bg-zinc-900" />
      <div className="absolute left-6 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-bold text-white backdrop-blur">
        BMW Seria 3
      </div>
      <div className="absolute right-5 top-5 rounded-full bg-lime px-3 py-1 text-xs font-black text-ink">
        72 000 zł
      </div>
    </div>
  );
}

function AppMockup() {
  const specs = ['2018', '145 000 km', 'Diesel', 'Automat'];

  return (
    <div className="relative mx-auto max-w-sm animate-float lg:max-w-md">
      <div className="absolute -left-4 top-20 hidden w-40 -rotate-6 rounded-lg border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl sm:block">
        <p className="text-xs font-semibold text-slate-300">Twoje auto</p>
        <p className="mt-1 font-black text-white">VW Golf VII</p>
        <p className="mt-3 text-sm text-slate-300">+ dopłata do 20 000 zł</p>
      </div>

      <div className="absolute -right-2 top-12 z-20 animate-pulseBadge rounded-full border border-lime/40 bg-lime px-4 py-2 text-sm font-black text-ink shadow-glow">
        Match!
      </div>

      <div className="rounded-[2rem] border border-white/15 bg-zinc-950 p-3 shadow-2xl shadow-black/50">
        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-xs font-semibold text-lime">CarSwap</p>
              <p className="text-sm font-bold text-white">Propozycje dla Ciebie</p>
            </div>
            <ShieldCheck className="text-cyan" size={22} aria-hidden="true" />
          </div>

          <div className="p-4">
            <div className="animate-swipe rounded-lg border border-white/10 bg-white/[0.06] p-3">
              <CarArtwork />
              <div className="px-1 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-black text-white">BMW Seria 3</h2>
                    <p className="mt-1 text-sm text-slate-300">Możliwa wymiana 1:1 lub z dopłatą</p>
                  </div>
                  <span className="rounded-full bg-ember px-3 py-1 text-xs font-black text-white">Hot</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {specs.map((spec) => (
                    <span key={spec} className="rounded-lg bg-white/[0.06] px-3 py-2 text-sm font-semibold text-slate-200">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-lime/20 bg-lime/10 px-4 py-3 text-sm font-bold text-lime">
                  Wartość: 72 000 zł
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-4">
              <button
                type="button"
                className="grid h-14 w-14 place-items-center rounded-full border border-rose/35 bg-rose/12 text-rose transition hover:bg-rose hover:text-white"
                aria-label="Odrzuć propozycję"
              >
                <X size={24} />
              </button>
              <button
                type="button"
                className="grid h-16 w-16 place-items-center rounded-full bg-lime text-ink shadow-glow transition hover:bg-white"
                aria-label="Polub propozycję"
              >
                <Heart size={28} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div>
          <div className="section-kicker">
            <Sparkles size={16} aria-hidden="true" />
            Najpierw iOS. Android później.
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            Zamień auto tak łatwo, jak robisz match.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Dodaj swoje auto, ustaw preferencje i przeglądaj propozycje wymiany. Jeśli obie strony są
            zainteresowane, powstaje match i możecie porozmawiać na czacie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#waitlist" className="primary-button">
              Dołącz do listy oczekujących
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#jak-to-dziala" className="secondary-button">
              Zobacz, jak działa
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 text-sm font-semibold text-slate-400">CarSwap startuje jako aplikacja mobilna na iOS.</p>
        </div>

        <AppMockup />
      </div>
    </section>
  );
}
