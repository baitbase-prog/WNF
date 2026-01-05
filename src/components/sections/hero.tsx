import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import offer from '@/content/offer';

export function HeroSection() {
  const callToAction = offer.agency.callToAction || '#contact';
  return (
    <section id="top" className="section pb-10 md:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:gap-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 space-y-6">
          <Badge>{offer.hero.eyebrow}</Badge>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-glow">
            {offer.hero.headline}
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 md:text-xl">{offer.hero.subhead}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={callToAction} target="_blank" rel="noreferrer">
              <Button>{offer.hero.primaryCta}</Button>
            </a>
            <a
              href={offer.agency.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/80 hover:text-cyan-100"
            >
              {offer.hero.secondaryCta}
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:max-w-3xl">
            {offer.hero.stats.map((stat) => (
              <Stat key={stat.label} label={stat.label} value={stat.value} />
            ))}
          </div>
        </div>
        <div className="relative flex w-full justify-center lg:max-w-xl">
          <div className="glow-border w-full rounded-3xl bg-white/5 p-2">
            <Image
              src="/brand/hero.svg"
              alt={offer.media.heroAlt}
              width={900}
              height={700}
              className="h-full w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-surface rounded-2xl p-4">
      <p className="text-sm text-slate-300">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
