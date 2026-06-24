'use client'

import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import SidebarItem from './SidebarItem'
import { sidebarLinks } from '@/data/sidebarLinks'
import { Zap, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const auth = localStorage.getItem('nexadash_auth')
    if (auth) setUser(JSON.parse(auth))
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem('nexadash_auth')
    router.push('/login')
  }

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-white/10 bg-slate-950 text-white z-30">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0">
          <Zap className="w-4 h-4 text-white fill-white" />
        </div>
        <div>
          <span className="font-bold text-white tracking-tight">NexaDash</span>
          <span className="block text-[10px] text-slate-500 tracking-widest uppercase font-medium">Pro Workspace</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
        <p className="px-3 mb-3 text-[10px] uppercase tracking-widest text-slate-600 font-semibold">Main</p>
        {sidebarLinks.main.map((link) => (
          <SidebarItem key={link.href} link={link} active={pathname === link.href} />
        ))}

        <p className="px-3 mt-6 mb-3 text-[10px] uppercase tracking-widest text-slate-600 font-semibold">Manage</p>
        {sidebarLinks.manage.map((link) => (
          <SidebarItem key={link.href} link={link} active={pathname === link.href} />
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 space-y-1">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          Sign Out
        </button>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
            {user?.name?.charAt(0) || 'K'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user?.name || 'Kami Hassan'}</p>
            <p className="text-xs text-slate-500 truncate">{user?.email || 'admin@nexadash.io'}</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
        </div>
      </div>
    </aside>
  )
}