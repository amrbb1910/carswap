import { MapPin, Navigation, Route } from 'lucide-react';

const radiuses = ['10 km', '25 km', '50 km', '100 km', '250 km', 'Cała Polska'];

export function LocationSection() {
  return (
    <section>
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="section-kicker">Lokalizacja</p>
          <h2 className="section-title">Szukaj aut blisko siebie albo w całej Polsce.</h2>
          <p className="section-copy">
            Ustaw lokalizację i promień wyszukiwania. Możesz szukać samochodów w swojej okolicy albo rozszerzyć
            zasięg, jeśli jesteś gotów pojechać dalej po dobrą wymianę.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Wybór lokalizacji użytkownika',
              'Wybór miasta lub regionu',
              'Pokazanie dystansu do właściciela auta',
              'Mogę dojechać dalej po dobrą wymianę'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <MapPin className="shrink-0 text-ember" size={20} aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card overflow-hidden p-5">
          <div className="relative min-h-[360px] rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(33,212,253,0.14),rgba(255,255,255,0.04)),linear-gradient(45deg,transparent_24%,rgba(255,255,255,0.06)_25%,rgba(255,255,255,0.06)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.06)_75%,rgba(255,255,255,0.06)_76%,transparent_77%)] bg-[length:auto,48px_48px] p-5">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20 bg-cyan/5" />
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime/30 bg-lime/5" />
            <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-lime text-ink shadow-glow">
              <Navigation size={24} aria-hidden="true" />
            </div>
            {[
              ['left-[18%] top-[26%]', '18 km'],
              ['right-[18%] top-[20%]', '44 km'],
              ['left-[20%] bottom-[18%]', '62 km'],
              ['right-[22%] bottom-[24%]', '91 km']
            ].map(([position, distance]) => (
              <div key={distance} className={`absolute ${position} rounded-full border border-white/15 bg-ink/85 px-3 py-2 text-xs font-black text-white shadow-xl`}>
                {distance}
              </div>
            ))}
          </div>

          <div className="mt-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <Route className="text-cyan" size={18} aria-hidden="true" />
              Promień wyszukiwania
            </div>
            <div className="flex flex-wrap gap-2">
              {radiuses.map((radius, index) => (
                <span
                  key={radius}
                  className={`rounded-full px-4 py-2 text-sm font-bold ${
                    index === 3 ? 'bg-lime text-ink' : 'border border-white/10 bg-white/[0.04] text-slate-200'
                  }`}
                >
                  {radius}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
