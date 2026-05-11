import { BadgeCheck, MessageSquareText, Send } from 'lucide-react';

const statuses = ['Rozmowa', 'Propozycja wysłana', 'Oględziny umówione', 'Wymiana zakończona'];

export function MatchChatSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025]">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="section-kicker">Match i czat</p>
          <h2 className="section-title">Match oznacza, że obie strony chcą rozmawiać.</h2>
          <p className="section-copy">
            Dopiero gdy obie osoby są zainteresowane wymianą, otwiera się możliwość rozmowy. Dzięki temu czat nie jest
            pełen przypadkowych wiadomości — rozmawiasz tylko z osobami, które realnie rozważają wymianę.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Match po wzajemnym polubieniu',
              'Ekran matcha z dwoma samochodami',
              'Czat po matchu',
              'Propozycja dopłaty',
              'Możliwość zgłoszenia użytkownika'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <BadgeCheck className="shrink-0 text-lime" size={20} aria-hidden="true" />
                <span className="text-sm font-semibold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="rounded-lg border border-lime/25 bg-lime/10 p-4 text-center">
            <p className="text-sm font-black text-lime">Match! Obie strony są zainteresowane wymianą.</p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <div className="h-20 w-28 rounded-lg bg-[linear-gradient(135deg,rgba(33,212,253,0.35),rgba(255,255,255,0.12))]" />
              <div className="grid h-12 w-12 place-items-center rounded-full bg-lime text-ink">
                <MessageSquareText size={22} aria-hidden="true" />
              </div>
              <div className="h-20 w-28 rounded-lg bg-[linear-gradient(135deg,rgba(255,122,26,0.4),rgba(163,255,18,0.14))]" />
            </div>
          </div>

          <div className="mt-5 space-y-4 rounded-lg bg-black/24 p-4">
            <div className="max-w-[82%] rounded-lg bg-white/[0.07] px-4 py-3 text-sm text-slate-200">
              Porozmawiaj o szczegółach. Kiedy możesz obejrzeć auto?
            </div>
            <div className="ml-auto max-w-[82%] rounded-lg bg-cyan/15 px-4 py-3 text-sm text-cyan">
              W weekend. Mogę też zaproponować dopłatę.
            </div>
            <div className="max-w-[82%] rounded-lg bg-white/[0.07] px-4 py-3 text-sm text-slate-200">
              Super. Zaproponuj dopłatę i umówimy oględziny.
            </div>
          </div>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {['Zaproponuj dopłatę', 'Umów oględziny', 'Porozmawiaj o szczegółach'].map((action) => (
              <button
                key={action}
                type="button"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white transition hover:border-lime/40 hover:bg-lime/10"
              >
                <Send size={16} aria-hidden="true" />
                {action}
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {statuses.map((status, index) => (
              <span
                key={status}
                className={`rounded-full px-3 py-2 text-xs font-black ${
                  index === 1 ? 'bg-ember text-white' : 'border border-white/10 bg-white/[0.04] text-slate-300'
                }`}
              >
                {status}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
