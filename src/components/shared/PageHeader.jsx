'use client'

import { motion } from 'framer-motion'

export default function PageHeader({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{title}</h1>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{description}</p>
      )}
    </motion.div>
  )
}