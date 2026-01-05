import { SectionShell } from './section-shell';
import offer from '@/content/offer';
import { Card } from '@/components/ui/card';

export function OfferSentenceSection() {
  const section = offer.sections.offerSentence;
  return (
    <SectionShell id={section.id} title={section.title} eyebrow={section.eyebrow}>
      <Card className="text-lg leading-relaxed text-slate-200">{offer.offerSentence}</Card>
    </SectionShell>
  );
}
