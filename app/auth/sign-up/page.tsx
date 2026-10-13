"use client"

import { FormEvent, useState } from "react"
import { createClient } from "@/lib/supabase/client"

export default function SignUpPage() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [message, setMessage] = useState(""); const [error, setError] = useState(""); const [pending, setPending] = useState(false)
  async function submit(event: FormEvent) { event.preventDefault(); setPending(true); setError(""); setMessage(""); const { error } = await createClient().auth.signUp({ email, password, options: { emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ?? `${window.location.origin}/auth/callback` } }); if (error) setError(error.message.toLowerCase().includes("password") ? "Choose a stronger password." : "We could not create that account. Please try again."); else setMessage("Check your inbox to confirm your email, then sign in."); setPending(false) }
  return <main className="auth-shell"><section className="auth-card"><div className="brand"><span className="brand-mark">O</span><span>opsflow</span></div><div><p className="eyebrow">Get started</p><h1>Create your workspace account</h1><p className="muted">Start managing clients and projects in one place.</p></div><form onSubmit={submit} className="auth-form"><label>Email<input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label><label>Password<input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} /></label>{error && <p className="auth-error" role="alert">{error}</p>}{message && <p className="auth-success" role="status">{message}</p>}<button className="primary-button" disabled={pending}>{pending ? "Creating account..." : "Create account"}</button></form><p className="auth-switch">Already have an account? <a href="/auth/login">Sign in</a></p></section></main>
}
