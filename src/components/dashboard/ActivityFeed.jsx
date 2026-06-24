'use client'

import { activityData } from '@/data/dashboardData'

export default function ActivityFeed() {
  return (
    <div className="card p-6">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Live updates from your platform</p>
      </div>

      <div className="space-y-0">
        {activityData.map((item, i) => (
          <div key={i} className="relative flex gap-4 pb-5 last:pb-0 group">
            {/* Timeline line */}
            {i < activityData.length - 1 && (
              <div className="absolute left-4 top-8 w-px h-full bg-slate-100 dark:bg-white/5" />
            )}

            {/* Icon */}
            <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${item.color}`}>
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pt-1">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-medium text-slate-900 dark:text-white">{item.user}</span>{' '}
                {item.action}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}