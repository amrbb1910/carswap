# CarSwap

CarSwap to landing page przyszłej aplikacji iOS do społecznościowej wymiany samochodów. Użytkownik dodaje swoje auto, ustawia preferencje, przegląda propozycje w stylu swipe i robi match tylko wtedy, gdy obie strony są zainteresowane rozmową o wymianie.

## Tech stack

- React
- Vite
- TypeScript
- Tailwind CSS
- lucide-react

## Instalacja

```bash
npm install
```

## Uruchomienie lokalne

```bash
npm run dev
```

Po uruchomieniu projekt będzie dostępny lokalnie pod adresem pokazanym w terminalu, zwykle `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
```

Wynik buildu znajduje się w katalogu `dist`.

## Podgląd buildu

```bash
npm run preview
```

## Sugerowane wdrożenie

Projekt można wdrożyć na:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages
- dowolnym hostingu statycznym obsługującym pliki z katalogu `dist`

## Struktura projektu

```text
src/
  components/
    Header.tsx
    Hero.tsx
    ProblemSection.tsx
    SolutionSection.tsx
    HowItWorks.tsx
    CarProfileSection.tsx
    PreferencesSection.tsx
    LocationSection.tsx
    MatchChatSection.tsx
    FeaturesSection.tsx
    SafetySection.tsx
    AudienceSection.tsx
    UseCasesSection.tsx
    IOSSection.tsx
    WaitlistForm.tsx
    FAQSection.tsx
    Footer.tsx
  data/
    faq.ts
    features.ts
    useCases.ts
  App.tsx
  main.tsx
  index.css
```

## GitHub

Repozytorium docelowe:

```text
https://github.com/amrbb1910/carswap
```

Przykładowe komendy publikacji:

```bash
git init
git add .
git commit -m "Initial CarSwap landing page"
git branch -M main
git remote add origin https://github.com/amrbb1910/carswap.git
git push -u origin main
```
