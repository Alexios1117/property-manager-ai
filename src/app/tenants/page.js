// src/app/tenants/page.js


'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '../../../lib/supabaseClient'

export default function TenantsPage() {
  const [tenants, setTenants] = useState([])

  useEffect(() => {
    const fetchTenants = async () => {
      const { data, error } = await supabase.from('tenants').select('*')
      if (error) {
        console.error('Error fetching tenants:', error)
      } else {
        setTenants(data)
      }
    }

    fetchTenants()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Tenant List</h1>
      <Link href="/tenants/add">
        <button style={{ marginBottom: '1rem' }}>➕ Add Another Tenant</button>
      </Link>

      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.id}>
            <strong>{tenant.full_name}</strong><br />
            {tenant.email} — {tenant.phone}
          </li>
        ))}
      </ul>
    </div>
  )
}