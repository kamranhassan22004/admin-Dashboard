'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/shared/PageHeader'
import { Mail, Archive, Trash2, Search, Star } from 'lucide-react'
import { useState } from 'react'

const messagesData = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    subject: 'Q3 Project Update',
    preview: 'I wanted to update you on the progress of the Q3 initiatives...',
    date: 'Today at 2:30 PM',
    starred: true,
    read: true,
    avatar: 'SJ'
  },
  {
    id: 2,
    sender: 'Mike Chen',
    email: 'mike.chen@company.com',
    subject: 'Team Meeting Tomorrow at 3 PM',
    preview: 'Just confirming our scheduled meeting tomorrow. Please bring...',
    date: 'Yesterday at 5:45 PM',
    starred: false,
    read: true,
    avatar: 'MC'
  },
  {
    id: 3,
    sender: 'Emma Wilson',
    email: 'emma.wilson@company.com',
    subject: 'Design Review - New Dashboard Components',
    preview: 'I\'ve completed the design review for the new components...',
    date: '2 days ago',
    starred: true,
    read: false,
    avatar: 'EW'
  },
  {
    id: 4,
    sender: 'Alex Rodriguez',
    email: 'alex.rodriguez@company.com',
    subject: 'Budget Approval Request',
    preview: 'The marketing team has requested budget approval for Q4...',
    date: '3 days ago',
    starred: false,
    read: true,
    avatar: 'AR'
  },
  {
    id: 5,
    sender: 'Lisa Park',
    email: 'lisa.park@company.com',
    subject: 'Customer Feedback Summary',
    preview: 'I\'ve compiled the customer feedback from this month...',
    date: '4 days ago',
    starred: false,
    read: true,
    avatar: 'LP'
  },
]

const getAvatarColor = (char) => {
  const colors = {
    S: 'bg-indigo-500',
    M: 'bg-violet-500',
    E: 'bg-emerald-500',
    A: 'bg-amber-500',
    L: 'bg-rose-500',
  }
  return colors[char] || 'bg-slate-500'
}

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [messages, setMessages] = useState(messagesData)

  const filteredMessages = messages.filter(msg =>
    msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
    msg.subject.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      <PageHeader
        title="Messages"
        description="View and manage your inbox messages."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Sidebar Stats */}
        <div className="space-y-4">
          <div className="card p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Inbox</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">12 unread</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <Star className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Starred</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">3 messages</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                <Archive className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Archived</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">24 messages</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="lg:col-span-2 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>

          {/* Messages */}
          <div className="space-y-2">
            {filteredMessages.map((message, i) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <div
                  onClick={() => setSelectedMessage(message)}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedMessage?.id === message.id
                      ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10'
                      : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  } ${!message.read ? 'bg-slate-50 dark:bg-slate-800/30' : 'bg-white dark:bg-slate-900'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm ${getAvatarColor(message.avatar[0])}`}>
                      {message.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className={`font-medium ${!message.read ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-900 dark:text-white'}`}>
                            {message.sender}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{message.email}</p>
                        </div>
                        {message.starred && (
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className={`text-sm mt-1 ${!message.read ? 'font-medium text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                        {message.subject}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1 line-clamp-1">
                        {message.preview}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex-shrink-0 mt-1">
                      {message.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Message Detail Modal */}
      {selectedMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card p-6"
        >
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-base ${getAvatarColor(selectedMessage.avatar[0])}`}>
                  {selectedMessage.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{selectedMessage.sender}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{selectedMessage.email}</p>
                </div>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{selectedMessage.date}</span>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {selectedMessage.subject}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedMessage.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
              <button className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
                Reply
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
                Forward
              </button>
              <button className="px-4 py-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
