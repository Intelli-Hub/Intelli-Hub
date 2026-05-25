import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
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
      await new Promise(r => setTimeout(r, 800))
      setDocuments([
        {
          id: '1',
          name: 'Project Brief.pdf',
          size: 204800,
          uploadedAt: new Date().toISOString(),
          status: 'ready',
          fileUrl: 'https://www.w3.org/WAI/WCAG21/Techniques/pdf/pdf-sample.pdf'
        },
        {
          id: '2',
          name: 'Research Notes.docx',
          size: 51200,
          uploadedAt: new Date().toISOString(),
          status: 'processing'
        },
        {
          id: '3',
          name: 'Meeting Summary.txt',
          size: 10240,
          uploadedAt: new Date().toISOString(),
          status: 'error'
        },
      ])
    } catch {
      setError('Failed to load documents')
      toast.error('Failed to load documents')
    } finally {
      setLoading(false)
    }
  }

  async function upload(file: File) {
    try {
      setUploading(true)
      // TODO: replace with real call when backend is ready
      // const { document } = await uploadDocument(file)
      await new Promise(r => setTimeout(r, 1000))
      const newDoc: Document = {
        id: String(Date.now()),
        name: file.name,
        size: file.size,
        uploadedAt: new Date().toISOString(),
        status: 'processing'
      }
      setDocuments(prev => [newDoc, ...prev])
      toast.success(`${file.name} uploaded successfully`)
    } catch {
      setError('Upload failed')
      toast.error('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  async function remove(id: string) {
    const confirmed = window.confirm('Delete this document?')
    if (!confirmed) return
    // TODO: replace with real call when backend is ready
    // await deleteDocument(id)
    setDocuments(prev => prev.filter(doc => doc.id !== id))
    toast.success('Document deleted')
  }

  return { documents, loading, error, uploading, upload, remove }
}