import { Link } from 'react-router-dom'
const features = [
        {
            icon: '📄',
            title: 'Document chat',
            desc: 'Upload any PDF or doc and ask questions in plain English.'
        },
        {
            icon: '📊',
            title: 'ML analytics',
            desc: 'Get instant insights and summaries powered by machine learning.'
        },
        {
            icon: '✅',
            title: 'Task dashboard',
            desc: 'Manage your work and track progress all in one place.'
        },
        ]
export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          Your documents,<br />
          <span className="text-blue-600">powered by AI</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
          Upload documents, chat with AI that understands
          them, and get ML-powered analytics — all in one place.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Link to="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg
                       font-medium hover:bg-blue-700 transition-colors">
            Get started free
          </Link>
          <Link to="/login"
            className="border border-gray-300 text-gray-700 px-8 py-3
                       rounded-lg font-medium hover:bg-gray-50">
            Sign in
          </Link>
        </div>
      </section>
      
      <section className="bg-gray-50 py-20">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Everything you need
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map(f => (
                    <div key={f.title}
                    className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="text-3xl mb-4">{f.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                ))}
                </div>
            </div>
      </section>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center
                        justify-between text-sm text-gray-400">
            <span>IntelliHub</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}