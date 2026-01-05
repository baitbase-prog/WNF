import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import offer from '@/content/offer';

export function FinalCTASection() {
  const callToAction = offer.agency.callToAction || '#contact';
  const section = offer.sections.finalCta;
  return (
    <section id={section.id} className="section pb-16">
      <div className="mx-auto max-w-5xl">
        <Card className="glow-border relative overflow-hidden bg-gradient-to-r from-blue-800/40 via-slate-900/60 to-cyan-700/40 p-10 text-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_40%)]" />
          <p className="text-sm uppercase tracking-wide text-cyan-100">{section.eyebrow}</p>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">{section.headline}</h3>
          <p className="mt-2 text-lg text-slate-200">{section.subhead}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a href={callToAction} target="_blank" rel="noreferrer">
              <Button className="px-6">{offer.hero.primaryCta}</Button>
            </a>
            <a
              href={`mailto:${offer.agency.email}`}
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-400/70 decoration-2 underline-offset-4"
            >
              {offer.copy.emailLabel} {offer.agency.email}
            </a>
            <a
              href={`https://t.me/${offer.agency.telegram?.replace('@', '')}`}
              className="text-sm font-semibold text-cyan-100 underline decoration-cyan-400/70 decoration-2 underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              {offer.copy.telegramLabel} {offer.agency.telegram}
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            {section.pdfNote}: <a className="underline" href={offer.agency.pdf}>PDF</a>
          </p>
        </Card>
      </div>
    </section>
  );
}
