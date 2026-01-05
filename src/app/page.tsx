import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero';
import { OfferSentenceSection } from '@/components/sections/offer';
import { WhoSection } from '@/components/sections/who';
import { DeliverablesSection } from '@/components/sections/deliverables';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { PeakDaySection } from '@/components/sections/peak-day';
import { QuestsSection } from '@/components/sections/quests';
import { MeasurementSection } from '@/components/sections/measurement';
import { PackagesSection } from '@/components/sections/packages';
import { CaseStudiesSection } from '@/components/sections/case-studies';
import { FaqSection } from '@/components/sections/faq';
import { FinalCTASection } from '@/components/sections/final-cta';

export default function HomePage() {
  return (
    <div className="grid-bg min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <OfferSentenceSection />
        <WhoSection />
        <DeliverablesSection />
        <HowItWorksSection />
        <PeakDaySection />
        <QuestsSection />
        <MeasurementSection />
        <PackagesSection />
        <CaseStudiesSection />
        <FaqSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
