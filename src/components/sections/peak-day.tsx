import offer from '@/content/offer';
import { SectionShell } from './section-shell';
import { Card } from '@/components/ui/card';

export function PeakDaySection() {
  const section = offer.sections.peak;
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {offer.peakDay.map((item) => (
          <Card key={item} className="text-slate-200">
            <p>{item}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
