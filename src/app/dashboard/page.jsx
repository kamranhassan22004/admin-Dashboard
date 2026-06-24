'use client'

import { motion } from 'framer-motion'
import DashboardHeader from '@/components/dashBoard/DashboardHeader'
import StatsCard from '@/components/dashboard/StatsCard'
import RevenueChart from '@/components/dashboard/RevenueChart'
import UserGrowthChart from '@/components/dashboard/UserGrowthChart'
import SalesChart from '@/components/dashboard/SalesChart'
import RecentOrdersTable from '@/components/dashboard/RecentOrdersTable'
import ActivityFeed from '@/components/dashboard/ActivityFeed'
import QuickActions from '@/components/dashboard/QuickActions'
import { statsData } from '@/data/dashboardData'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      {/* Stats Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
      >
        {statsData.map((stat, i) => (
          <motion.div key={i} variants={item}>
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      {/* Charts Row */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item} className="lg:col-span-2">
          <RevenueChart />
        </motion.div>
        <motion.div variants={item}>
          <SalesChart />
        </motion.div>
      </motion.div>

      {/* User Growth */}
      <motion.div variants={item} initial="hidden" animate="show">
        <UserGrowthChart />
      </motion.div>

      {/* Orders Table */}
      <motion.div variants={item} initial="hidden" animate="show">
        <RecentOrdersTable />
      </motion.div>

      {/* Activity + Quick Actions */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div variants={item} className="lg:col-span-2">
          <ActivityFeed />
        </motion.div>
        <motion.div variants={item}>
          <QuickActions />
        </motion.div>
      </motion.div>
    </div>
  )
}