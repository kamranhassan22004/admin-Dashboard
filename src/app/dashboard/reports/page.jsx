'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/shared/PageHeader'
import { Download, FileText, TrendingUp, Users } from 'lucide-react'

const reports = [
  { title: 'Revenue Report — June 2025', desc: 'Monthly revenue breakdown and trends', icon: TrendingUp, color: 'indigo', size: '2.4 MB', date: 'June 30, 2025' },
  { title: 'User Activity Report', desc: 'Active users, sessions, and engagement metrics', icon: Users, color: 'violet', size: '1.8 MB', date: 'June 28, 2025' },
  { title: 'Conversion Summary Q2', desc: 'Quarterly conversion rates and funnel analysis', icon: FileText, color: 'sky', size: '3.1 MB', date: 'June 25, 2025' },
  { title: 'Orders Export — May 2025', desc: 'Complete order history with status and amounts', icon: FileText, color: 'emerald', size: '1.2 MB', date: 'May 31, 2025' },
]

const colorMap = {
  indigo: 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  violet: 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400',
  sky: 'bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400',
  emerald: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
}

export default function ReportsPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Reports" description="Download and review your business reports." />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {reports.map((report, i) => (
          <div key={i} className="card p-5 flex items-start gap-4 group hover:shadow-lg transition-all duration-300">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colorMap[report.color]}`}>
              <report.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-slate-900 dark:text-white text-sm">{report.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{report.desc}</p>
              <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 dark:text-slate-500">
                <span>{report.date}</span>
                <span>·</span>
                <span>{report.size}</span>
              </div>
            </div>
            <button className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </motion.div>
    </div>
  )
}