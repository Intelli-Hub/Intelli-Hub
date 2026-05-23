import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'

const navItems = [
  { path: '/dashboard',  label: 'Dashboard' },
  { path: '/documents',  label: 'Documents'  },
  { path: '/chat',       label: 'Chat'       },
  { path: '/analytics',  label: 'Analytics'  },
  { path: '/tasks',      label: 'Tasks'      },
]

export default function DashboardLayout({
  children
}: { children: React.ReactNode }) {
  const { user, logout } = useAuth()
  const location = useLocation()

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-56 bg-white border-r border-gray-200
                        flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <span className="font-bold text-gray-900">IntelliHub</span>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button onClick={logout}
            className="text-sm text-gray-500 hover:text-gray-700">
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200
                           px-6 py-4 flex items-center justify-end">
          <span className="text-sm text-gray-600">
            {user?.name ?? 'User'}
          </span>
        </header>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}