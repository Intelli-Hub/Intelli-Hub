import { useState, useEffect } from 'react'
import { getDocuments, uploadDocument, deleteDocument } from '@/api/documents'
import type { Document } from '@/types'

export function useDocuments() {
  const [documents, setDocuments] = useState<Document[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchDocuments()
  }, [])

  async function fetchDocuments() {
    try {
      setLoading(true)
      const data = await getDocuments()
      setDocuments(data)
    } catch (err) {
      setError('Failed to load documents')
    } finally {
      setLoading(false)
    }
  }

  //
//   async function fetchDocuments() {
//   setLoading(true)
//   await new Promise(r => setTimeout(r, 800)) // fake delay
//   setDocuments([
//     {
//       id: '1',
//       name: 'Project Brief.pdf',
//       size: 204800,
//       uploadedAt: new Date().toISOString(),
//       status: 'ready'
//     },
//     {
//       id: '2',
//       name: 'Research Notes.docx',
//       size: 51200,
//       uploadedAt: new Date().toISOString(),
//       status: 'processing'
//     },
//   ])
//   setLoading(false)
// }
  //

  async function upload(file: File) {
    try {
      setUploading(true)
      const { document } = await uploadDocument(file)
      // Add the new doc to the list without re-fetching everything
      setDocuments(prev => [document, ...prev])
    } catch (err) {
      setError('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  async function remove(id: string) {
    await deleteDocument(id)
    setDocuments(prev => prev.filter(doc => doc.id !== id))
  }

  return { documents, loading, error, uploading, upload, remove }
}