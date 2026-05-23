import { useState } from 'react'
import type { TaskPriority, TaskStatus } from '@/types'

interface Props {
  onClose: () => void
  onAdd: (title: string, priority: TaskPriority,
          status: TaskStatus) => void
}

export default function AddTaskModal({ onClose, onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<TaskPriority>('medium')
  const [status, setStatus] = useState<TaskStatus>('todo')
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) { setError('Title is required'); return }
    onAdd(title.trim(), priority, status)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center
                    justify-center z-50 px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            New task
          </h2>
          <button onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-sm mb-3">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            autoFocus
            placeholder="Task title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg
                       px-4 py-2.5 text-sm focus:outline-none
                       focus:ring-2 focus:ring-blue-500"
          />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Priority
              </label>
              <select value={priority}
                onChange={e => setPriority(e.target.value as TaskPriority)}
                className="w-full border border-gray-300 rounded-lg
                           px-3 py-2 text-sm">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Column
              </label>
              <select value={status}
                onChange={e => setStatus(e.target.value as TaskStatus)}
                className="w-full border border-gray-300 rounded-lg
                           px-3 py-2 text-sm">
                <option value="todo">To do</option>
                <option value="in-progress">In progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 justify-end pt-2">
            <button type="button" onClick={onClose}
              className="px-4 py-2 text-sm text-gray-500
                         hover:text-gray-700">
              Cancel
            </button>
            <button type="submit"
              className="px-4 py-2 text-sm bg-blue-600 text-white
                         rounded-lg hover:bg-blue-700">
              Add task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}