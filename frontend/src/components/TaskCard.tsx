import type { Task } from '@/types'

interface Props {
  task: Task
  onDelete: (id: string) => void
}

const priorityStyles = {
  high:   'bg-red-50 text-red-700',
  medium: 'bg-yellow-50 text-yellow-700',
  low:    'bg-gray-100 text-gray-500',
}

export default function TaskCard({ task, onDelete }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg
                    p-3 mb-2 group">
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-medium text-gray-800 leading-snug">
          {task.title}
        </p>
        <button
          onClick={() => onDelete(task.id)}
          className="opacity-0 group-hover:opacity-100 text-gray-400
                     hover:text-red-500 text-xs transition-opacity">
          ✕
        </button>
      </div>
      {task.description && (
        <p className="text-xs text-gray-400 mt-1">{task.description}</p>
      )}
      <span className={`inline-block text-xs px-2 py-0.5 rounded-full
                        font-medium mt-2 ${priorityStyles[task.priority]}`}>
        {task.priority}
      </span>
    </div>
  )
}