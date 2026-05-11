import { UsersRound } from 'lucide-react';

const groups = [
  'Osoby, które chcą zmienić auto bez klasycznej sprzedaży',
  'Osoby, które mają auto i chcą czegoś większego',
  'Osoby, które chcą zejść na tańsze auto i odzyskać gotówkę',
  'Fani motoryzacji',
  'Właściciele ciekawych aut',
  'Osoby szukające rodzinnego auta',
  'Osoby szukające SUV-a',
  'Osoby szukające klasyka',
  'Osoby szukające auta miejskiego',
  'Osoby szukające auta sportowego'
];

export function AudienceSection() {
  return (
    <section>
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Dla kogo</p>
          <h2 className="section-title mx-auto">Masz auto, ale chodzi Ci po głowie coś innego?</h2>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((group) => (
            <article key={group} className="glass-card min-h-32 p-5 text-center transition hover:-translate-y-1 hover:border-lime/35">
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-lg bg-cyan/12 text-cyan">
                <UsersRound size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-sm font-black leading-6 text-white">{group}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
