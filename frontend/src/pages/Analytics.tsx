import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend
} from 'recharts'

import { tasksByStatus, docsOverTime, fileTypes } from '@/api/analytics'
// Replace with and umcomment useEffect:
// import { getTasksByStatus, getDocsOverTime, getFileTypes }
//   from '@/api/analytics'
//   useEffect(() => {
//   getTasksByStatus().then(setTaskData)
//   getDocsOverTime().then(setDocsData)
//   getFileTypes().then(setFileTypeData)
// }, [])
const PIE_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#6366f1']

export default function Analytics() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">Tasks by status</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={tasksByStatus}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="status" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">Docs over time</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={docsOverTime}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="docs" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 md:col-span-2">
          <h2 className="text-sm font-semibold text-gray-500 mb-4">File types breakdown</h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={fileTypes} dataKey="value" nameKey="name"
                cx="50%" cy="50%" outerRadius={100} label>
                {fileTypes.map((_, i) => (
                  <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  )
}