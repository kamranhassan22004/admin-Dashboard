'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/shared/PageHeader'
import Badge from '@/components/ui/Badge'
import { usersData } from '@/data/dashboardData'

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <PageHeader title="Users" description="Manage and monitor all registered users." />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 dark:border-white/10">
                <th className="text-left px-6 py-4 font-medium text-slate-500 dark:text-slate-400">Name</th>
                <th className="text-left px-6 py-4 font-medium text-slate-500 dark:text-slate-400">Email</th>
                <th className="text-left px-6 py-4 font-medium text-slate-500 dark:text-slate-400">Role</th>
                <th className="text-left px-6 py-4 font-medium text-slate-500 dark:text-slate-400">Status</th>
                <th className="text-left px-6 py-4 font-medium text-slate-500 dark:text-slate-400">Joined</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, i) => (
                <tr key={i} className="border-b border-slate-50 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-semibold text-xs">
                        {user.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-900 dark:text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.email}</td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{user.role}</td>
                  <td className="px-6 py-4"><Badge variant={user.status === 'Active' ? 'success' : 'warning'}>{user.status}</Badge></td>
                  <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}