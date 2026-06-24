import { DollarSign, Users, Activity, TrendingUp } from 'lucide-react'

export const statsData = [
  {
    title: 'Total Revenue',
    value: '$128,450',
    change: '+12.5%',
    trend: 'up',
    description: 'vs. last month',
    icon: DollarSign,
    color: 'indigo',
  },
  {
    title: 'Total Users',
    value: '24,892',
    change: '+8.2%',
    trend: 'up',
    description: 'vs. last month',
    icon: Users,
    color: 'violet',
  },
  {
    title: 'Active Sessions',
    value: '1,284',
    change: '-3.1%',
    trend: 'down',
    description: 'vs. yesterday',
    icon: Activity,
    color: 'amber',
  },
  {
    title: 'Conversion Rate',
    value: '8.42%',
    change: '+1.8%',
    trend: 'up',
    description: 'vs. last week',
    icon: TrendingUp,
    color: 'emerald',
  },
]

export const activityData = [
  {
    user: 'Sarah Khan',
    action: 'upgraded to Pro Plan',
    time: '2 minutes ago',
    icon: '🚀',
    color: 'bg-indigo-50 dark:bg-indigo-500/10',
  },
  {
    user: 'Ahmed Ali',
    action: 'submitted a new support ticket',
    time: '14 minutes ago',
    icon: '🎫',
    color: 'bg-amber-50 dark:bg-amber-500/10',
  },
  {
    user: 'John Carter',
    action: 'purchased Enterprise Plan — $999',
    time: '1 hour ago',
    icon: '💳',
    color: 'bg-emerald-50 dark:bg-emerald-500/10',
  },
  {
    user: 'Maryam Amir',
    action: 'exported monthly analytics report',
    time: '3 hours ago',
    icon: '📊',
    color: 'bg-violet-50 dark:bg-violet-500/10',
  },
  {
    user: 'Kamran Hassan',
    action: 'updated system configuration',
    time: '5 hours ago',
    icon: '⚙️',
    color: 'bg-sky-50 dark:bg-sky-500/10',
  },
]

export const usersData = [
  { name: 'Sarah Khan', email: 'sarah@example.com', role: 'Admin', status: 'Active', joined: 'Jan 12, 2025' },
  { name: 'Ahmed Ali', email: 'ahmed@example.com', role: 'Editor', status: 'Active', joined: 'Feb 3, 2025' },
  { name: 'John Carter', email: 'john@example.com', role: 'Viewer', status: 'Inactive', joined: 'Mar 18, 2025' },
  { name: 'Maryam Amir', email: 'maryam@example.com', role: 'Editor', status: 'Active', joined: 'Apr 7, 2025' },
  { name: 'Kamran Hassan', email: 'kamran@example.com', role: 'Admin', status: 'Active', joined: 'Apr 20, 2025' },
  { name: 'Naba Siddiqui', email: 'naba@example.com', role: 'Viewer', status: 'Active', joined: 'May 1, 2025' },
  { name: 'Ali Raza', email: 'ali@example.com', role: 'Editor', status: 'Inactive', joined: 'May 15, 2025' },
]