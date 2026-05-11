import { CheckCircle2, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';

const exchangeTypes = ['1:1', 'Mogę dopłacić', 'Oczekuję dopłaty', 'Wszystkie opcje'];

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section id="waitlist" className="border-y border-white/10 bg-black/24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="section-kicker">Lista oczekujących</p>
            <h2 className="section-title">Dołącz do pierwszych użytkowników CarSwap.</h2>
            <p className="section-copy">
              Zapisz się na listę oczekujących i sprawdź jako jeden z pierwszych, kto może chcieć zamienić się z Tobą
              autem.
            </p>
            <div className="mt-8 grid gap-3">
              {['Wcześniejszy dostęp do testów', 'Informacja o premierze iOS', 'Możliwość wpływu na pierwsze funkcje'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="text-lime" size={20} aria-hidden="true" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="glass-card p-5 sm:p-6">
            {submitted ? (
              <div className="grid min-h-[520px] place-items-center text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-lime text-ink shadow-glow">
                    <CheckCircle2 size={34} aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-3xl font-black text-white">Dzięki! Jesteś na liście.</h3>
                  <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300">
                    Damy znać, gdy CarSwap będzie gotowy do pierwszych testów.
                  </p>
                  <button type="button" className="secondary-button mt-8" onClick={() => setSubmitted(false)}>
                    Dodaj kolejną osobę
                  </button>
                </div>
              </div>
            ) : (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Imię</span>
                    <input className="field" name="name" type="text" placeholder="np. Michał" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-200">E-mail</span>
                    <input className="field" name="email" type="email" placeholder="ty@email.pl" required />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Miasto</span>
                    <input className="field" name="city" type="text" placeholder="np. Warszawa" required />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Marka i model aktualnego auta</span>
                    <input className="field" name="car" type="text" placeholder="np. BMW Seria 3" required />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="block sm:col-span-1">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Wartość auta</span>
                    <input className="field" name="value" type="text" placeholder="np. 72 000 zł" required />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Preferowany typ wymiany</span>
                    <select className="field" name="exchangeType" defaultValue="" required>
                      <option value="" disabled>
                        Wybierz opcję
                      </option>
                      {exchangeTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Maksymalna kwota dopłaty</span>
                    <input className="field" name="maxPayment" type="text" placeholder="np. 20 000 zł" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-bold text-slate-200">Minimalna oczekiwana dopłata</span>
                    <input className="field" name="minPayment" type="text" placeholder="np. 10 000 zł" />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-200">Opcjonalnie numer telefonu</span>
                  <input className="field" name="phone" type="tel" placeholder="+48 600 000 000" />
                </label>

                <label className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300">
                  <input
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-ink text-lime focus:ring-lime"
                    name="marketingConsent"
                    type="checkbox"
                    required
                  />
                  <span>
                    Wyrażam zgodę na kontakt marketingowy dotyczący CarSwap i informacji o starcie aplikacji.
                  </span>
                </label>

                <button type="submit" className="primary-button mt-2 w-full">
                  Zapisz mnie na listę oczekujących
                  <Send size={18} aria-hidden="true" />
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Formularz działa teraz jako frontendowy mockup i jest przygotowany pod późniejsze podłączenie do
                  Supabase, Firebase, Airtable, CRM albo własnego API.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
