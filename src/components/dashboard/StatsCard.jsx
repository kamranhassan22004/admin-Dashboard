'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const iconColors = {
  indigo: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  violet: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400',
  amber: 'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400',
}

export default function StatsCard({ title, value, change, trend, description, icon: Icon, color = 'indigo' }) {
  const isUp = trend === 'up'

  return (
    <div className="card p-5 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0', iconColors[color])}>
          <Icon className="w-5 h-5" />
        </div>topNavbar        <span className={cn(
          'flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full',
          isUp
            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
            : 'bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400'
        )}>
          {isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {change}
        </span>
      </div>

      <div>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{title}</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {value}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{description}</p>
      </div>
    </div>
  )
}