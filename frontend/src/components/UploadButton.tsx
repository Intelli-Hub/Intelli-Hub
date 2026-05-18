interface Props {
  onUpload: (file: File) => void
  uploading: boolean
}

export default function UploadButton({ onUpload, uploading }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) onUpload(file)
  }

  return (
    <label className="cursor-pointer inline-flex items-center gap-2
                       bg-blue-600 text-white px-4 py-2 rounded-lg
                       hover:bg-blue-700 transition-colors">
      {uploading ? 'Uploading...' : 'Upload Document'}
      <input
        type="file"
        className="hidden"
        onChange={handleChange}
        accept=".pdf,.doc,.docx,.txt"
        disabled={uploading}
      />
    </label>
  )
}