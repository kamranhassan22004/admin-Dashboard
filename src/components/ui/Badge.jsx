import { cn } from '@/lib/utils'

const variants = {
  default: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
  success: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  warning: 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400',
  danger: 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400',
  info: 'bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400',
  primary: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
}

export default function Badge({ children, variant = 'default', className }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      <span className={cn('w-1.5 h-1.5 rounded-full', {
        'bg-slate-400': variant === 'default',
        'bg-emerald-500': variant === 'success',
        'bg-amber-500': variant === 'warning',
        'bg-red-500': variant === 'danger',
        'bg-sky-500': variant === 'info',
        'bg-indigo-500': variant === 'primary',
      })} />
      {children}
    </span>
  )
}