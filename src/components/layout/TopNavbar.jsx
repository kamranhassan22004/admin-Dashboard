'use client'

import { useState } from 'react'
import { Menu, Search, Bell, ChevronDown } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { usePathname } from 'next/navigation'

const pageTitles = {
  '/dashboard': 'Overview',
  '/dashboard/analytics': 'Analytics',
  '/dashboard/users': 'Users',
  '/dashboard/reports': 'Reports',
  '/dashboard/settings': 'Settings',
  '/dashboard/messages': 'Messages',
  '/dashboard/calendar': 'Calendar',
  '/dashboard/logout': 'Sign Out',
}

export default function TopNavbar({ onMenuClick }) {
  const pathname = usePathname()
  const [notifOpen, setNotifOpen] = useState(false)

  const title = pageTitles[pathname] || 'Dashboard'

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between h-16 px-4 sm:px-6 border-b border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight">{title}</h1>
          <p className="text-xs text-slate-500 dark:text-slate-500 hidden sm:block">Welcome back, Kami 👋</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-slate-400 w-48 lg:w-64 transition-all focus-within:border-indigo-400 dark:focus-within:border-indigo-500 focus-within:bg-white dark:focus-within:bg-white/10">
          <Search className="w-3.5 h-3.5 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-full text-slate-700 dark:text-white placeholder:text-slate-400 text-sm"
          />
          <kbd className="hidden lg:inline text-[10px] text-slate-400 border border-slate-200 dark:border-white/10 rounded px-1 py-0.5">⌘K</kbd>
        </div>

        <ThemeToggle />

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifOpen(!notifOpen)}
            className="relative p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            <Bell className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-indigo-500 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 card shadow-xl overflow-hidden z-50">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-white/10 flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-900 dark:text-white">Notifications</span>
                <span className="text-xs text-indigo-500 cursor-pointer hover:underline">Mark all read</span>
              </div>
              {['New user signed up — Sarah Khan', 'Revenue milestone: $100K reached', 'Server CPU spike detected'].map((n, i) => (
                <div key={i} className="px-4 py-3 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer border-b border-slate-50 dark:border-white/5 last:border-0">
                  <p className="text-sm text-slate-700 dark:text-slate-300">{n}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{i === 0 ? '2 min ago' : i === 1 ? '1 hr ago' : '3 hrs ago'}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Avatar */}
        <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors group">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-xs">
            K
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors hidden sm:block" />
        </button>
      </div>
    </header>
  )
}