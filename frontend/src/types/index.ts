export type DocumentStatus = 'processing' | 'ready' | 'error'

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface Document {
  id: string
  name: string
  size: number
  uploadedAt: string
  status: DocumentStatus
}

export interface UploadResponse {
  document: Document
  message: string
}