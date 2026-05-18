// src/pages/Dashboard.tsx
function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome to IntelliHub
        </h1>
        <p className="text-gray-500 mt-2">
          Your AI-powered document workspace
        </p>
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <p className="text-sm text-gray-500">Documents</p>
            <p className="text-2xl font-semibold mt-1">0</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard