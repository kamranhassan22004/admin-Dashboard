export default function SectionTitle({ title, description }) {
  return (
    <div className="mb-6">
      <h2 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h2>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{description}</p>
      )}
    </div>
  )
}