'use client'

import { motion } from 'framer-motion'
import { LogOut, AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LogoutPage() {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    // Simulate logout process
    setTimeout(() => {
      // In a real app, you would call your logout API here
      window.location.href = '/'
    }, 1500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <div className="card p-8 text-center space-y-6">
          {/* Icon */}
          <motion.div
            animate={{ rotate: isLoggingOut ? 360 : 0 }}
            transition={{
              duration: isLoggingOut ? 1 : 0,
              repeat: isLoggingOut ? Infinity : 0,
              ease: 'linear',
            }}
            className="w-16 h-16 rounded-full bg-red-50 dark:bg-red-500/10 flex items-center justify-center mx-auto"
          >
            <LogOut className="w-8 h-8 text-red-600 dark:text-red-400" />
          </motion.div>

          {/* Content */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Sign Out
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Are you sure you want to sign out? You'll need to log in again to access your dashboard.
            </p>
          </div>

          {/* Warning */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-400/30">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Make sure you've saved all your work before signing out.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Link href="/dashboard" className="flex-1">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Cancel
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium transition-colors"
            >
              {isLoggingOut ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Signing out...
                </>
              ) : (
                <>
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </>
              )}
            </motion.button>
          </div>

          {/* Additional info */}
          <div className="pt-4 border-t border-slate-200 dark:border-white/10">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Need help?{' '}
              <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                Contact support
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
