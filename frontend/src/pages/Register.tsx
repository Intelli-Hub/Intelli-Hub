import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function validate() {
    if (!form.name) return 'Name is required'
    if (!form.email.includes('@')) return 'Valid email required'
    if (form.password.length < 6) return 'Password min 6 characters'
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }
    setLoading(true)
    try {
      // TODO: await register(form) when backend ready
      console.log('Register:', form)
      navigate('/dashboard')
    } catch {
      setError('Registration failed. Try again.')
    } finally {
      setLoading(false)
    }
  }
//   async function handleSubmit(e: React.FormEvent) {
//   e.preventDefault()
//   const err = validate()
//   if (err) { setError(err); return }
//   setLoading(true)
//   // TODO: replace with real API call when backend is ready
//   await new Promise(r => setTimeout(r, 1000))
//   login(
//     { id: '1', name: form.name, email: form.email, createdAt: new Date().toISOString() },
//     'mock-token'
//   )
//   navigate('/dashboard')
//   setLoading(false)
// }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center
                    justify-center px-4">
      <div className="bg-white rounded-xl border border-gray-200
                      p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create your account
        </h1>
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3
                          rounded-lg mb-4">{error}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full name"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full border border-gray-300 rounded-lg
                       px-4 py-2.5 text-sm focus:outline-none
                       focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            className="w-full border border-gray-300 rounded-lg
                       px-4 py-2.5 text-sm focus:outline-none
                       focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Password"
            value={form.email}
            onChange={e => setForm({...form, password: e.target.value})}
            className="w-full border border-gray-300 rounded-lg
                       px-4 py-2.5 text-sm focus:outline-none
                       focus:ring-2 focus:ring-blue-500" />
          <button type="submit" disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5
                       rounded-lg font-medium hover:bg-blue-700
                       disabled:opacity-50">
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600">Sign in</Link>
        </p>
      </div>
    </div>
  )
}