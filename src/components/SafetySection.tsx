import { AlertTriangle, FileCheck2, ShieldCheck } from 'lucide-react';

const safety = [
  'Weryfikacja numeru telefonu',
  'Opcjonalna weryfikacja tożsamości',
  'Oznaczenie zweryfikowanych profili',
  'Możliwość zgłaszania podejrzanych użytkowników',
  'System opinii po wymianie',
  'Checklisty przed spotkaniem',
  'Przypomnienie o sprawdzeniu VIN',
  'Sprawdzenie dokumentów',
  'Oględziny auta',
  'Jazda próbna',
  'Umowa zamiany lub sprzedaży',
  'Bezpieczne rozliczenie dopłaty'
];

export function SafetySection() {
  return (
    <section id="bezpieczenstwo" className="border-y border-white/10 bg-black/18">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="section-kicker">Bezpieczeństwo</p>
            <h2 className="section-title">Match to dopiero początek. Decyzja należy do Ciebie.</h2>
            <p className="section-copy">
              CarSwap pomaga znaleźć osobę zainteresowaną wymianą, ale przed finalizacją zawsze warto sprawdzić auto,
              dokumenty, historię pojazdu i warunki transakcji.
            </p>

            <div className="mt-8 rounded-lg border border-ember/30 bg-ember/10 p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-1 shrink-0 text-ember" size={22} aria-hidden="true" />
                <p className="text-sm leading-7 text-amber-100">
                  CarSwap nie pośredniczy formalnie w przeniesieniu własności pojazdu. Aplikacja pomaga użytkownikom
                  znaleźć dopasowanie i rozpocząć rozmowę, ale finalne sprawdzenie auta, dokumentów i warunków transakcji
                  pozostaje po stronie użytkowników.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {safety.map((item, index) => (
              <article key={item} className="soft-card flex items-start gap-3 p-4">
                {index < 5 ? (
                  <ShieldCheck className="mt-0.5 shrink-0 text-lime" size={20} aria-hidden="true" />
                ) : (
                  <FileCheck2 className="mt-0.5 shrink-0 text-cyan" size={20} aria-hidden="true" />
                )}
                <h3 className="text-sm font-bold leading-6 text-slate-100">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
