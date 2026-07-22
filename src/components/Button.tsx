import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: 'bg-emerald-600 hover:bg-emerald-500 text-white',
  secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100',
  ghost: 'bg-transparent hover:bg-slate-800 text-slate-100 border border-slate-700',
};

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <button
      type="button"
      {...rest}
      className={`rounded px-4 py-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
