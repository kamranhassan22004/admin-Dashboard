'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
    >
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Track your business performance, monitor analytics, and manage activity.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
          Last updated: just now
        </span>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow-lg shadow-indigo-600/20">
          <ArrowUpRight className="w-4 h-4" />
          Export Report
        </button>
      </div>
    </motion.div>
  )
}