'use client'

import Badge from '@/components/ui/Badge'
import { ordersData } from '@/data/ordersData'
import { ArrowUpRight } from 'lucide-react'

const statusVariant = {
  Completed: 'success',
  Pending: 'warning',
  Processing: 'info',
  Cancelled: 'danger',
}

export default function RecentOrdersTable() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/10">
        <div>
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Orders</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Latest transactions across all plans</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          View all <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 dark:border-white/5">
              {['Order', 'Customer', 'Plan', 'Amount', 'Date', 'Status'].map((h) => (
                <th key={h} className="text-left px-6 py-3 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, i) => (
              <tr
                key={i}
                className="border-b border-slate-50 dark:border-white/5 last:border-0 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 font-medium text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-xs flex-shrink-0">
                      {order.customer.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{order.customer}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 whitespace-nowrap">{order.plan}</td>
                <td className="px-6 py-4 font-semibold text-slate-900 dark:text-white whitespace-nowrap">{order.amount}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={statusVariant[order.status] || 'default'}>{order.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}