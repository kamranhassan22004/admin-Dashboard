'use client'

import { motion } from 'framer-motion'
import RevenueChart from '@/components/dashboard/RevenueChart'
import UserGrowthChart from '@/components/dashboard/UserGrowthChart'
import SalesChart from '@/components/dashboard/SalesChart'
import PageHeader from '@/components/shared/PageHeader'

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Analytics"
        description="Deep dive into your platform metrics and growth data."
      />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <div className="lg:col-span-2"><RevenueChart /></div>
        <div><SalesChart /></div>
      </motion.div>
      <UserGrowthChart />
    </div>
  )
}