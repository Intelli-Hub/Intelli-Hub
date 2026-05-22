// src/pages/Dashboard.tsx

import { useAuth } from '@/context/AuthContext'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome back, {user?.name ?? 'there'}
      </h1>
      <p className="text-gray-500 mt-2">
        Here's what's happening in your workspace.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {['Documents', 'Tasks', 'Chats'].map(label => (
          <div key={label}
            className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">0</p>
          </div>
        ))}
      </div>
    </div>
  )
}