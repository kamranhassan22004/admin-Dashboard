import { cn } from '@/lib/utils'

export default function Card({ children, className, hover = true }) {
  return (
    <div className={cn(
      'card p-6',
      hover && 'hover:shadow-lg transition-all duration-300',
      className
    )}>
      {children}
    </div>
  )
}