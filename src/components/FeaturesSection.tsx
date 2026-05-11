import { CheckCircle2 } from 'lucide-react';
import { features } from '../data/features';

export function FeaturesSection() {
  return (
    <section id="funkcje">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Funkcje</p>
            <h2 className="section-title">Wszystko, czego potrzebujesz do znalezienia dobrej wymiany.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Od kart samochodów po weryfikację profili i edukacyjne checklisty przed spotkaniem.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article key={feature} className="soft-card flex min-h-28 items-start gap-3 p-5 transition hover:-translate-y-1 hover:border-cyan/35">
              <CheckCircle2 className="mt-0.5 shrink-0 text-lime" size={20} aria-hidden="true" />
              <h3 className="text-base font-black leading-6 text-white">{feature}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
