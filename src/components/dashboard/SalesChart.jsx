'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { salesData } from '@/data/chartData'
import { useEffect, useState } from 'react'

const COLORS = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b']

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 dark:bg-slate-800 border border-white/10 rounded-xl px-4 py-3 shadow-xl">
        <p className="text-xs text-slate-400 mb-1">{payload[0].name}</p>
        <p className="text-sm font-bold text-white">{payload[0].value}%</p>
      </div>
    )
  }
  return null
}

export default function SalesChart() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="card p-6 h-full">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Sales by Category</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Distribution by product type</p>
      </div>

      <div className="h-48">
        {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
              >
                {salesData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="space-y-2 mt-2">
        {salesData.map((entry, i) => (
          <div key={i} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: COLORS[i % COLORS.length] }} />
              <span className="text-slate-600 dark:text-slate-400">{entry.name}</span>
            </div>
            <span className="font-semibold text-slate-900 dark:text-white">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}