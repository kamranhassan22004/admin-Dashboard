'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/shared/PageHeader'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()

  const themes = [
    { id: 'light', label: 'Light', icon: Sun },
    { id: 'dark', label: 'Dark', icon: Moon },
    { id: 'system', label: 'System', icon: Monitor },
  ]

  return (
    <div className="space-y-8">
      <PageHeader title="Settings" description="Manage your dashboard preferences." />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="card p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Appearance</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Choose your preferred color theme.</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {themes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTheme(id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-sm font-medium ${
                  theme === id
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400'
                    : 'border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="card p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Profile</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Update your personal information.</p>
          </div>
          <div className="space-y-4">
            {['Full Name', 'Email Address', 'Company'].map((label) => (
              <div key={label}>
                <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">{label}</label>
                <input
                  type="text"
                  placeholder={label}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all"
                />
              </div>
            ))}
            <button className="w-full px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}