'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import offer from '@/content/offer';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);
  const callToAction = offer.agency.callToAction || '#contact';

  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-[#05060f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Image src="/brand/logo.svg" alt={offer.media.logoAlt} width={36} height={36} className="h-9 w-9" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">{offer.agency.name}</span>
        </div>
        <button className="text-slate-200 lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          ☰
        </button>
        <nav
          className={cn(
            'absolute left-0 top-full w-full flex-col gap-4 bg-[#05060f]/95 px-4 py-4 lg:static lg:w-auto lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:px-0 lg:py-0',
            open ? 'flex' : 'hidden',
            'lg:flex',
          )}
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
            {offer.navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-200 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <a href={callToAction} target="_blank" rel="noreferrer" className="lg:ml-4">
            <Button className="w-full lg:w-auto">{offer.hero.primaryCta}</Button>
          </a>
        </nav>
      </div>
    </header>
  );
}
