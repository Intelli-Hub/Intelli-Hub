import client from './client'
import type { Document, UploadResponse } from '@/types'

// Fetch all documents for the current user
export async function getDocuments(): Promise<Document[]> {
  const response = await client.get('/documents')
  return response.data
}

// Upload a new document
export async function uploadDocument(file: File): Promise<UploadResponse> {
  const formData = new FormData()
  formData.append('file', file)

  const response = await client.post('/documents/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return response.data
}

// Delete a document
export async function deleteDocument(id: string): Promise<void> {
  await client.delete(`/documents/${id}`)
}