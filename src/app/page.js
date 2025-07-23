'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Property Manager AI</h1>
      <Link href="/tenants">
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Go to Tenant Dashboard
        </button>
      </Link>
    </main>
  )
}
