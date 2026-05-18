
import { useDocuments } from '@/hooks/useDocuments'
import DocumentCard from '@/components/DocumentCard'
import UploadButton from '@/components/UploadButton'

export default function Documents() {
  const {
    documents, loading, error, uploading, upload, remove
  } = useDocuments()

  if (loading) return (
    <div className="p-8 text-gray-500">Loading...</div>
  )
  if (error) return (
    <div className="p-8 text-red-500">{error}</div>
  )

    return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Documents</h1>
        <UploadButton onUpload={upload} uploading={uploading} />
      </div>

      {documents.length === 0 ? (
        <p className="text-center py-16 text-gray-400">
          No documents yet. Upload your first one.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {documents.map(doc => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onDelete={remove}
            />
          ))}
        </div>
      )}
    </div>
  )
}