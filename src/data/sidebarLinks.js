import {
  LayoutDashboard,
  BarChart2,
  Users,
  FileText,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
} from 'lucide-react'

export const sidebarLinks = {
  main: [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/dashboard/users', label: 'Users', icon: Users, badge: '24k' },
    { href: '/dashboard/reports', label: 'Reports', icon: FileText },
  ],
  manage: [
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
    { href: '/dashboard/messages', label: 'Messages', icon: MessageSquare, badge: '3' },
    { href: '/dashboard/calendar', label: 'Calendar', icon: Calendar },
    { href: '/dashboard/logout', label: 'Sign Out', icon: LogOut },
  ],
}