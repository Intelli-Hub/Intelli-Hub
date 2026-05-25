import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import toast from 'react-hot-toast'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError('All fields required')
      return
    }
    setLoading(true)
    // TODO: replace with real API call when backend is ready
    await new Promise(r => setTimeout(r, 800))
    login(
      { id: '1', name: 'Anshi Jain', email: form.email, createdAt: new Date().toISOString() },
      'mock-token'
    )
    toast.success('Welcome back!')
    navigate('/dashboard')
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center
                    justify-center px-4">
      <div className="bg-white rounded-xl border border-gray-200
                      p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Welcome back
        </h1>
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3
                          rounded-lg mb-4">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            className="w-full border border-gray-300 rounded-lg
                       px-4 py-2.5 text-sm" />
          <input type="password" placeholder="Password"
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})}
            className="w-full border border-gray-300 rounded-lg
                       px-4 py-2.5 text-sm" />
          <button type="submit" disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5
                       rounded-lg font-medium hover:bg-blue-700
                       disabled:opacity-50">
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          No account?{' '}
          <Link to="/register" className="text-blue-600">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}