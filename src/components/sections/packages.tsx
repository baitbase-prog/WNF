import offer from '@/content/offer';
import { SectionShell } from './section-shell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function PackagesSection() {
  const section = offer.sections.packages;
  const callToAction = offer.agency.callToAction || '#contact';
  return (
    <SectionShell
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      description={section.description}
    >
      <Tabs defaultValue={offer.packages[1]?.name || offer.packages[0]?.name} className="w-full">
        <TabsList>
          {offer.packages.map((pkg) => (
            <TabsTrigger key={pkg.name} value={pkg.name}>
              {pkg.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {offer.packages.map((pkg) => (
          <TabsContent key={pkg.name} value={pkg.name}>
            <Card className="grid gap-6 border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr_1fr]">
              <div className="space-y-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base text-slate-200">
                    {pkg.duration} · {pkg.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 p-0">
                  <p className="text-sm uppercase tracking-wide text-cyan-200">{offer.copy.highlightsLabel}</p>
                  <ul className="space-y-2 text-slate-200">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-cyan-300">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 text-sm text-slate-300">
                    <p className="font-semibold text-white">{offer.copy.idealForLabel}</p>
                    <p>{pkg.idealFor}</p>
                  </div>
                </CardContent>
              </div>
              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-black/30 p-4">
                <div>
                  <p className="text-sm uppercase tracking-wide text-cyan-200">{offer.copy.investmentLabel}</p>
                  <p className="text-3xl font-bold text-white">{pkg.price}</p>
                  <p className="text-sm text-slate-400">{pkg.duration}</p>
                </div>
                <div className="space-y-3">
                  <a href={callToAction} target="_blank" rel="noreferrer">
                    <Button className="w-full">{pkg.cta}</Button>
                  </a>
                  <p className="text-xs text-slate-400">{offer.terms}</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </SectionShell>
  );
}
