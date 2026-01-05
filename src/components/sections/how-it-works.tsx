import offer from '@/content/offer';
import { SectionShell } from './section-shell';
import { Card } from '@/components/ui/card';

export function HowItWorksSection() {
  const section = offer.sections.how;
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {offer.howTimeline.map((item) => (
          <Card key={item.day} className="flex items-start justify-between gap-4 border border-white/10 bg-white/5">
            <div>
              <p className="text-xs uppercase tracking-wide text-cyan-200">{item.day}</p>
              <p className="text-lg font-semibold text-white">{item.detail}</p>
            </div>
            <span className="text-sm text-slate-400">↗</span>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
