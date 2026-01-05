import offer from '@/content/offer';
import { SectionShell } from './section-shell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function CaseStudiesSection() {
  const section = offer.sections.cases;
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {offer.caseStudies.map((item, idx) => (
          <Card key={`${item.client}-${idx}`} className="space-y-3">
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{item.client}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 p-0 text-slate-200">
              <p className="text-sm uppercase tracking-wide text-cyan-200">{offer.copy.whatWeDidLabel}</p>
              <p>{item.work}</p>
              {item.outcome ? (
                <div className="rounded-lg bg-white/5 p-3 text-sm text-cyan-100">
                  <p className="font-semibold text-white">Outcome</p>
                  <p>{item.outcome}</p>
                </div>
              ) : (
                <p className="text-sm text-slate-500">{offer.copy.outcomeHidden}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
