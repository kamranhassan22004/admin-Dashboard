'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { X, Zap } from 'lucide-react'
import SidebarItem from './SidebarItem'
import { sidebarLinks } from '@/data/sidebarLinks'

export default function MobileSidebar({ open, onClose }) {
  const pathname = usePathname()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-white/10 z-50 flex flex-col lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white fill-white" />
                </div>
                <span className="font-bold text-slate-900 dark:text-white">NexaDash</span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
              <p className="px-3 mb-3 text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-500 font-semibold">Main</p>
              {sidebarLinks.main.map((link) => (
                <SidebarItem key={link.href} link={link} active={pathname === link.href} onClick={onClose} />
              ))}
              <p className="px-3 mt-6 mb-3 text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-500 font-semibold">Manage</p>
              {sidebarLinks.manage.map((link) => (
                <SidebarItem key={link.href} link={link} active={pathname === link.href} onClick={onClose} />
              ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-3 px-3 py-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-xs">
                  K
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Kami Hassan</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">admin@nexadash.io</p>
                </div>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}