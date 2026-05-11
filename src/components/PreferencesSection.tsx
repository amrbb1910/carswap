import { SlidersHorizontal } from 'lucide-react';

const technical = [
  'Marki samochodów',
  'Konkretne modele',
  'Rocznik od–do',
  'Przebieg od–do',
  'Typ nadwozia',
  'Paliwo',
  'Skrzynia biegów',
  'Moc silnika',
  'Pojemność',
  'Napęd',
  'Stan techniczny',
  'Wartość auta od–do'
];

const financial = [
  'Interesuje mnie wymiana 1:1',
  'Mogę dopłacić do droższego auta',
  'Oczekuję dopłaty przy tańszym aucie',
  'Pokaż wszystkie opcje',
  'Maksymalna kwota, jaką mogę dopłacić',
  'Minimalna dopłata, jakiej oczekuję',
  'Otwartość na negocjacje'
];

function PreferenceList({ title, items, tone }: { title: string; items: string[]; tone: 'lime' | 'cyan' }) {
  const colorClass = tone === 'lime' ? 'text-lime bg-lime/12' : 'text-cyan bg-cyan/12';

  return (
    <article className="soft-card p-6">
      <div className={`grid h-12 w-12 place-items-center rounded-lg ${colorClass}`}>
        <SlidersHorizontal size={24} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export function PreferencesSection() {
  return (
    <section className="border-y border-white/10 bg-black/18">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Preferencje</p>
            <h2 className="section-title">Nie chcesz oglądać przypadkowych aut? Ustaw, czego szukasz.</h2>
            <p className="section-copy">
              W CarSwap możesz określić, jakie samochody Cię interesują, ile możesz dopłacić, jakiej dopłaty
              oczekujesz oraz z jakiej lokalizacji mają pochodzić propozycje. Tak jak w aplikacji randkowej — tylko
              zamiast ludzi dopasowujesz auta.
            </p>
            <div className="mt-8 rounded-lg border border-lime/25 bg-lime/10 p-5 text-sm leading-7 text-lime">
              Masz auto warte 50 000 zł? Możesz ustawić, że interesują Cię auta od 40 000 do 70 000 zł, wymiana 1:1,
              dopłata maksymalnie 20 000 zł albo tańsze auto tylko wtedy, gdy druga strona dopłaci minimum 10 000 zł.
            </div>
          </div>

          <div className="grid gap-5">
            <PreferenceList title="Preferencje techniczne" items={technical} tone="cyan" />
            <PreferenceList title="Preferencje finansowe" items={financial} tone="lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
