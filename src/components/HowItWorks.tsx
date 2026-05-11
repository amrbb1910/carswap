const steps = [
  {
    title: 'Dodaj swoje auto',
    text: 'Użytkownik dodaje dane samochodu, opis, lokalizację, szacowaną wartość oraz maksymalnie 8 zdjęć.'
  },
  {
    title: 'Ustaw, czego szukasz',
    text: 'Użytkownik wybiera marki, modele, rocznik, przebieg, typ nadwozia, paliwo, wartość auta, dopłatę i promień lokalizacji.'
  },
  {
    title: 'Przeglądaj i przesuwaj',
    text: 'Aplikacja pokazuje auta w formie kart. Swipe w prawo oznacza zainteresowanie wymianą, swipe w lewo brak zainteresowania.'
  },
  {
    title: 'Match i rozmowa',
    text: 'Jeśli obie strony są zainteresowane, powstaje match. Użytkownicy mogą przejść do czatu i ustalić warunki wymiany.'
  }
];

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="border-y border-white/10 bg-white/[0.025]">
      <div className="section-shell">
        <p className="section-kicker">Proces</p>
        <h2 className="section-title">Jak działa CarSwap?</h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="relative soft-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan/12 text-xl font-black text-cyan">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
