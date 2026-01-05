import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn('section', className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="space-y-3">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">{title}</h2>
            {description ? <p className="text-lg text-slate-300">{description}</p> : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
