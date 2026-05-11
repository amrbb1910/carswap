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
          <div className="relative min-h-[360px] rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(33,212,253,0.14),rg