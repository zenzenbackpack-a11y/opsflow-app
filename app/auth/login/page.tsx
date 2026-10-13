"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [pending, setPending] = useState(false)
  async function submit(event: FormEvent) { event.preventDefault(); setPending(true); setError(""); const { error } = await createClient().auth.signInWithPassword({ email, password }); if (error) { setError(error.message.toLowerCase().includes("confirm") ? "Please confirm your email before signing in." : "Invalid email or password."); setPending(false); return } router.push("/dashboard"); router.refresh() }
  return <main className="auth-shell"><section className="auth-card"><div className="brand"><span className="brand-mark">O</span><span>opsflow</span></div><div><p className="eyebrow">Welcome back</p><h1>Sign in to your workspace</h1><p className="muted">Use your email and password to continue.</p></div><form onSubmit={submit} className="auth-form"><label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label><label>Password<input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} /></label>{error && <p className="auth-error" role="alert">{error}</p>}<button className="primary-button" disabled={pending}>{pending ? "Signing in..." : "Sign in"}</button></form><p className="auth-switch">New to opsflow? <a href="/auth/sign-up">Create an account</a></p></section></main>
}
