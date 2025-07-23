'use client'
import { useState } from 'react'
import { supabase } from '../../../../lib/supabaseClient'
import { useRouter } from 'next/navigation'
import BackButton from '@/components/BackButton' // ✅ import added

export default function AddTenantPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('tenants').insert([formData])
    if (error) {
      alert('Error adding tenant: ' + error.message)
    } else {
      router.push('/tenants')
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <h1>Add New Tenant</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:<br />
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>
          Phone:<br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <button type="submit">Submit Tenant</button>
      </form>

      {/* ✅ Back button added */}
      <BackButton />
    </div>
  )
}
