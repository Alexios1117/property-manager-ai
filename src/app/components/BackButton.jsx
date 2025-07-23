'use client'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} style={{ marginTop: '2rem' }}>
      ← Go Back
    </button>
  )
}
