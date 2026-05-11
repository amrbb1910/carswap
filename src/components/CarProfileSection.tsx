import { Camera, GripHorizontal, ImagePlus, RotateCcw, Trash2 } from 'lucide-react';

const carFields = [
  'Marka',
  'Model',
  'Wersja',
  'Rocznik',
  'Przebieg',
  'Typ nadwozia',
  'Paliwo',
  'Moc',
  'Pojemność silnika',
  'Skrzynia biegów',
  'Napęd',
  'Stan techniczny',
  'Historia serwisowa',
  'Lokalizacja',
  'Szacowana wartość auta',
  'Opis pojazdu',
  'Akceptacja dopłaty',
  'Preferencje wymiany'
];

const recommendedPhotos = [
  'Przód auta',
  'Tył auta',
  'Lewy bok',
  'Prawy bok',
  'Wnętrze',
  'Licznik z przebiegiem',
  'Silnik',
  'Uszkodzenia lub detale'
];

export function CarProfileSection() {
  return (
    <section>
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="section-kicker">Profil auta</p>
          <h2 className="section-title">Dodaj auto, które chcesz wymienić.</h2>
          <p className="section-copy">
            Utwórz profil swojego samochodu i pokaż innym użytkownikom, co oferujesz w zamian. Im lepsze dane i
            zdjęcia, tym większa szansa na dobry match.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {carFields.map((field) => (
              <span key={field} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
                {field}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-lime">Zdjęcia auta</p>
              <h3 className="mt-1 text-2xl font-black text-white">Maksymalnie 8 zdjęć</h3>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-lime/12 text-lime">
              <Camera size={24} aria-hidden="true" />
            </div>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Dodaj do 8 zdjęć auta. Pokaż samochód z każdej strony — dobre zdjęcia zwiększają szansę na match.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {recommendedPhotos.map((photo, index) => (
              <div
                key={photo}
                className="relative min-h-28 rounded-lg border border-dashed border-white/18 bg-white/[0.04] p-3"
              >
                {index === 0 && (
                  <span className="absolute left-2 top-2 rounded-full bg-lime px-2 py-1 text-[10px] font-black text-ink">
                    Główne
                  </span>
                )}
                <div className="mt-7 flex h-10 items-center justify-center text-slate-400">
                  <ImagePlus size={22} aria-hidden="true" />
                </div>
                <p className="mt-2 text-center text-xs font-semibold text-slate-300">{photo}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: GripHorizontal, text: 'Zmieniaj kolejność zdjęć' },
              { icon: Trash2, text: 'Usuń lub podmień zdjęcie' },
              { icon: RotateCcw, text: 'Zobacz podgląd przed publikacją' }
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="rounded-lg bg-black/24 p-4">
                <Icon className="text-cyan" size={20} aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-slate-200">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-ember/25 bg-ember/10 px-4 py-3 text-sm leading-6 text-amber-100">
            Brakuje zdjęcia wnętrza, licznika i detali. Uzupełnij je, aby profil wyglądał wiarygodnie.
          </div>
        </div>
      </div>
    </section>
  );
}
