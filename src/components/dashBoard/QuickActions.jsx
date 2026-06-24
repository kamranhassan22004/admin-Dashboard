'use client'

import { Plus, Download, Users, BarChart2, Settings, FileText } from 'lucide-react'
import Link from 'next/link'

const actions = [
  { label: 'New Report', icon: FileText, href: '/dashboard/reports', color: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10' },
  { label: 'Add User', icon: Users, href: '/dashboard/users', color: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10' },
  { label: 'Analytics', icon: BarChart2, href: '/dashboard/analytics', color: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10' },
  { label: 'Export Data', icon: Download, href: '#', color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10' },
  { label: 'Settings', icon: Settings, href: '/dashboard/settings', color: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10' },
  { label: 'Create', icon: Plus, href: '#', color: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10' },
]

export default function QuickActions() {
  return (
    <div className="card p-6">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Quick Actions</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Shortcuts to common tasks</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="flex flex-col items-center gap-2 p-3.5 rounded-xl border border-slate-100 dark:border-white/10 hover:border-slate-200 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all group"
          >
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${action.color} transition-transform group-hover:scale-110`}>
              <action.icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}