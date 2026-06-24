'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/shared/PageHeader'
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from 'lucide-react'
import { useState } from 'react'

const eventsData = [
  {
    id: 1,
    title: 'Team Standup',
    date: '2025-06-24',
    time: '10:00 AM',
    duration: '30 min',
    location: 'Conference Room A',
    attendees: 8,
    color: 'indigo'
  },
  {
    id: 2,
    title: 'Client Presentation',
    date: '2025-06-24',
    time: '2:00 PM',
    duration: '1 hour',
    location: 'Virtual - Zoom',
    attendees: 12,
    color: 'violet'
  },
  {
    id: 3,
    title: 'Design Review',
    date: '2025-06-25',
    time: '3:30 PM',
    duration: '45 min',
    location: 'Design Studio',
    attendees: 5,
    color: 'emerald'
  },
  {
    id: 4,
    title: 'Board Meeting',
    date: '2025-06-26',
    time: '11:00 AM',
    duration: '2 hours',
    location: 'Executive Room',
    attendees: 6,
    color: 'amber'
  },
  {
    id: 5,
    title: 'All Hands Meeting',
    date: '2025-06-27',
    time: '4:00 PM',
    duration: '1 hour',
    location: 'Main Hall',
    attendees: 45,
    color: 'rose'
  },
]

const colorMap = {
  indigo: 'bg-indigo-100 dark:bg-indigo-500/20 border-indigo-300 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300',
  violet: 'bg-violet-100 dark:bg-violet-500/20 border-violet-300 dark:border-violet-400/30 text-violet-700 dark:text-violet-300',
  emerald: 'bg-emerald-100 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-400/30 text-emerald-700 dark:text-emerald-300',
  amber: 'bg-amber-100 dark:bg-amber-500/20 border-amber-300 dark:border-amber-400/30 text-amber-700 dark:text-amber-300',
  rose: 'bg-rose-100 dark:bg-rose-500/20 border-rose-300 dark:border-rose-400/30 text-rose-700 dark:text-rose-300',
}

const colorDot = {
  indigo: 'bg-indigo-600 dark:bg-indigo-400',
  violet: 'bg-violet-600 dark:bg-violet-400',
  emerald: 'bg-emerald-600 dark:bg-emerald-400',
  amber: 'bg-amber-600 dark:bg-amber-400',
  rose: 'bg-rose-600 dark:bg-rose-400',
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date('2025-06-24'))
  const [selectedDate, setSelectedDate] = useState(new Date('2025-06-24'))

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const eventsForDate = (date) => {
    const dateStr = date.toISOString().split('T')[0]
    return eventsData.filter(e => e.date === dateStr)
  }

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <PageHeader
          title="Calendar"
          description="Schedule and manage your events."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Event
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* Calendar */}
        <div className="lg:col-span-2 card p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                {monthName}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                </button>
              </div>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-xs font-semibold text-slate-500 dark:text-slate-400 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, i) => {
                if (day === null) {
                  return <div key={`empty-${i}`} className="aspect-square" />
                }

                const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
                const dateStr = date.toISOString().split('T')[0]
                const isToday = dateStr === new Date().toISOString().split('T')[0]
                const isSelected = dateStr === selectedDate.toISOString().split('T')[0]
                const events = eventsForDate(date)

                return (
                  <motion.button
                    key={day}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedDate(date)}
                    className={`aspect-square p-2 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-500/20'
                        : isToday
                        ? 'border-indigo-300 dark:border-indigo-400/50 bg-indigo-50/50 dark:bg-indigo-500/10'
                        : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20'
                    }`}
                  >
                    <div className={`text-sm font-medium ${isSelected ? 'text-indigo-600 dark:text-indigo-300' : 'text-slate-900 dark:text-white'}`}>
                      {day}
                    </div>
                    {events.length > 0 && (
                      <div className="flex gap-1 flex-wrap mt-1">
                        {events.slice(0, 2).map(event => (
                          <div key={event.id} className={`w-1 h-1 rounded-full ${colorDot[event.color]}`} />
                        ))}
                      </div>
                    )}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Events for selected date */}
        <div className="space-y-4">
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
              {selectedDate.toLocaleDateString('default', { weekday: 'long', month: 'short', day: 'numeric' })}
            </h3>
            <div className="space-y-3">
              {eventsForDate(selectedDate).length > 0 ? (
                eventsForDate(selectedDate).map((event, i) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className={`p-3 rounded-lg border ${colorMap[event.color]}`}
                  >
                    <p className="font-medium mb-2">{event.title}</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{event.time} ({event.duration})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3 h-3" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center py-4">
                  No events scheduled
                </p>
              )}
            </div>
          </div>

          {/* Upcoming events */}
          <div className="card p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Upcoming</h3>
            <div className="space-y-2">
              {eventsData.slice(0, 3).map(event => (
                <div key={event.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${colorDot[event.color]} mt-2 flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 dark:text-white truncate">
                      {event.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {event.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
