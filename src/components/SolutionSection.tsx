import { ArrowLeftRight, CircleDollarSign, HandCoins } from 'lucide-react';

const models = [
  {
    icon: ArrowLeftRight,
    title: 'Wymiana 1:1',
    text: 'Auto za auto bez dopłaty.'
  },
  {
    icon: CircleDollarSign,
    title: 'Z Twoją dopłatą',
    text: 'Gdy chcesz wymienić auto na droższe.'
  },
  {
    icon: HandCoins,
    title: 'Z dopłatą dla Ciebie',
    text: 'Gdy oddajesz droższe auto za tańsze.'
  }
];

export function SolutionSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="section-kicker">Rozwiązanie</p>
            <h2 className="section-title">CarSwap to społecznościowa aplikacja do wymiany samochodów.</h2>
            <p className="section-copy">
              Dodajesz swoje auto, ustawiasz, czego szukasz, a aplikacja pokazuje Ci dopasowane propozycje.
              Jeśli Ty polubisz czyjeś auto, a druga osoba polubi Twoje — powstaje match. Od tego momentu możecie
              porozmawiać na czacie i ustalić szczegóły wymiany.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {models.map(({ icon: Icon, title, text }) => (
              <article key={title} className="glass-card p-5 transition hover:-translate-y-1 hover:border-lime/35">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-lime/12 text-lime">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
