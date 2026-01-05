'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type AccordionItemProps = {
  value: string;
  trigger: string;
  children: React.ReactNode;
};

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

export function AccordionItem({ value, trigger, children }: AccordionItemProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="card-surface rounded-2xl border border-white/10 p-4">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-white"
        aria-expanded={open}
        aria-controls={`${value}-content`}
      >
        <span>{trigger}</span>
        <span className={cn('transition', open ? 'rotate-45' : 'rotate-0')}>+</span>
      </button>
      <div
        id={`${value}-content`}
        className={cn(
          'grid overflow-hidden text-sm text-slate-300 transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden pt-3 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
