import * as React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp: any = asChild ? 'span' : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full border border-transparent bg-gradient-to-r from-blue-600 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:scale-[1.01] hover:shadow-cyan-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300',
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';
