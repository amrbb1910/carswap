import { AudienceSection } from './components/AudienceSection';
import { CarProfileSection } from './components/CarProfileSection';
import { FAQSection } from './components/FAQSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { IOSSection } from './components/IOSSection';
import { LocationSection } from './components/LocationSection';
import { MatchChatSection } from './components/MatchChatSection';
import { PreferencesSection } from './components/PreferencesSection';
import { ProblemSection } from './components/ProblemSection';
import { SafetySection } from './components/SafetySection';
import { SolutionSection } from './components/SolutionSection';
import { UseCasesSection } from './components/UseCasesSection';
import { WaitlistForm } from './components/WaitlistForm';

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <CarProfileSection />
        <PreferencesSection />
        <LocationSection />
        <MatchChatSection />
        <FeaturesSection />
        <SafetySection />
        <AudienceSection />
        <UseCasesSection />
        <IOSSection />
        <WaitlistForm />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
