import { MessageCircleOff, Repeat2, SearchX, TimerReset } from 'lucide-react';

const problems = [
  { icon: MessageCircleOff, title: 'Za dużo przypadkowych wiadomości' },
  { icon: TimerReset, title: 'Długie negocjacje' },
  { icon: Repeat2, title: 'Najpierw sprzedaż, potem kolejne szukanie' },
  { icon: SearchX, title: 'Brak prostego sposobu na wymianę 1:1 lub z dopłatą' }
];

export function ProblemSection() {
  return (
    <section className="border-y border-white/10 bg-black/18">
      <div className="section-shell">
        <div className="max-w-4xl">
          <p className="section-kicker">Problem</p>
          <h2 className="section-title">Sprzedaż auta bywa męcząca. Szukanie kolejnego też.</h2>
          <p className="section-copy">
            Wystawianie ogłoszeń, telefony od przypadkowych osób, negocjacje bez końca, oględziny, sprzedaż,
            a potem kolejne szukanie auta — cały proces potrafi być długi i frustrujący. CarSwap upraszcza ten
            proces, łącząc osoby, które chcą po prostu zamienić się samochodami.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title }) => (
            <article key={title} className="soft-card p-6 transition hover:-translate-y-1 hover:border-rose/30">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-rose/12 text-rose">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-black text-white">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
