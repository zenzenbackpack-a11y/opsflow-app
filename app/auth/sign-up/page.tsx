"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  const supabase = createClient()

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    setError("")
    
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setError(error.message)
      setPending(false)
    } else {
      setMessage("Check your email for the magic link!")
      setPending(false)
    }
  }

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <h1 className="brand">OpsFlow</h1>
        <form onSubmit={handleMagicLink} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          {message && <div className="success-message">{message}</div>}
          
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="primary-btn" disabled={pending}>
            {pending ? "Sending..." : "Send Magic Link"}
          </button>
        </form>
      </section>
    </div>
  )
}
