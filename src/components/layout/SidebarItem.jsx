'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function SidebarItem({ link, active, onClick }) {
  const Icon = link.icon

  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={cn(
        'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150',
        active
          ? 'bg-indigo-500/15 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300'
          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
      )}
    >
      {active && (
        <motion.div
          layoutId="sidebar-active"
          className="absolute inset-0 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/10 border border-indigo-500/20 dark:border-indigo-500/20"
          transition={{ type: 'spring', duration: 0.4 }}
        />
      )}
      <Icon className={cn(
        'w-4 h-4 flex-shrink-0 relative z-10 transition-colors',
        active ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'
      )} />
      <span className="relative z-10">{link.label}</span>
      {link.badge && (
        <span className="relative z-10 ml-auto text-[10px] bg-indigo-500/20 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded-full font-semibold">
          {link.badge}
        </span>
      )}
    </Link>
  )
}