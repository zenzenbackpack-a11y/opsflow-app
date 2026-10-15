"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)

  const supabase = createClient()

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    setError("")

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    if (error) {
      setError(error.message)
      setPending(false)
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <h1 className="brand">OpsFlow</h1>
        <form onSubmit={handleSignUp} className="auth-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="primary-btn" disabled={pending}>
            {pending ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </section>
    </div>
  )
}
