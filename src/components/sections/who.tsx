import offer from '@/content/offer';
import { SectionShell } from './section-shell';
import { Card } from '@/components/ui/card';

export function WhoSection() {
  const section = offer.sections.who;
  return (
    <SectionShell id={section.id} eyebrow={section.eyebrow} title={section.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {offer.who.map((item) => (
          <Card key={item} className="flex items-start gap-3 text-slate-200">
            <span className="mt-1 text-cyan-300">◆</span>
            <p>{item}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
