'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-white shadow p-4 flex gap-4 justify-center">
      <Link href="/tenants">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Tenants</button>
      </Link>
      <Link href="/tenants/add">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Tenant</button>
      </Link>
    </div>
  )
}