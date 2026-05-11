import { ArrowRightLeft } from 'lucide-react';
import { useCases } from '../data/useCases';

export function UseCasesSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="section-shell">
        <p className="section-kicker">Przykłady</p>
        <h2 className="section-title">Trzy typowe scenariusze wymiany.</h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="soft-card p-6 transition hover:-translate-y-1 hover:border-ember/35">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-ember/12 text-ember">
                <ArrowRightLeft size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">{useCase.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{useCase.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
