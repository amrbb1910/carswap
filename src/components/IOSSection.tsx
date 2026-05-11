import { Apple, BellRing, Filter, MapPin, MessageCircle, PlusCircle, Sparkles } from 'lucide-react';

const appScreens = [
  { icon: PlusCircle, label: 'Dodawanie auta', tone: 'bg-lime/12 text-lime' },
  { icon: Sparkles, label: 'Swipe', tone: 'bg-cyan/12 text-cyan' },
  { icon: BellRing, label: 'Match', tone: 'bg-ember/12 text-ember' },
  { icon: MessageCircle, label: 'Czat', tone: 'bg-rose/12 text-rose' },
  { icon: Filter, label: 'Filtry', tone: 'bg-white/10 text-white' },
  { icon: MapPin, label: 'Lokalizacja', tone: 'bg-lime/12 text-lime' }
];

export function IOSSection() {
  return (
    <section>
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="section-kicker">
            <Apple size={16} aria-hidden="true" />
            iOS app
          </p>
          <h2 className="section-title">Najpierw iOS. Potem kolejne platformy.</h2>
          <p className="section-copy">
            CarSwap powstaje jako szybka, intuicyjna aplikacja mobilna. Zapisz się, aby dostać wcześniejszy dostęp do
            pierwszej wersji.
          </p>
          <a href="#waitlist" className="primary-button mt-8">
            Zapisz się przed premierą
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {appScreens.map(({ icon: Icon, label, tone }) => (
            <article key={label} className="glass-card p-5">
              <div className={`grid h-12 w-12 place-items-center rounded-lg ${tone}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{label}</h3>
              <div className="mt-5 h-28 rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] p-3">
                <div className="h-3 w-16 rounded-full bg-white/20" />
                <div className="mt-4 h-4 w-full rounded-full bg-white/10" />
                <div className="mt-2 h-4 w-2/3 rounded-full bg-white/10" />
                <div className="mt-5 h-8 rounded-lg bg-lime/20" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
