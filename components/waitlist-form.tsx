"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface WaitlistFormProps {
  variant?: "light" | "dark"
}

export function WaitlistForm({ variant = "light" }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [useCase, setUseCase] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !isValidEmail(email)) {
      setError("Please enter a valid email address.")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, useCase: useCase || undefined }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setIsSuccess(true)
      setEmail("")
      setUseCase("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto text-center space-y-4">
        <p className="text-lg font-medium" style={{ color: variant === "dark" ? "var(--paper)" : "var(--ink)" }}>
          You're on the list. We'll email you when it's ready.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="space-y-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg transition-all outline-none focus:ring-2"
          style={{
            backgroundColor: variant === "dark" ? "rgba(255, 255, 255, 0.1)" : "var(--paper)",
            border: `1px solid ${variant === "dark" ? "rgba(255, 255, 255, 0.2)" : "var(--mist)"}`,
            color: variant === "dark" ? "var(--paper)" : "var(--ink)",
            opacity: isLoading ? 0.6 : 1,
          }}
        />
        <select
          value={useCase}
          onChange={(e) => setUseCase(e.target.value)}
          disabled={isLoading}
          className="w-full px-4 py-3 rounded-lg transition-all outline-none focus:ring-2"
          style={{
            backgroundColor: variant === "dark" ? "rgba(255, 255, 255, 0.1)" : "var(--paper)",
            border: `1px solid ${variant === "dark" ? "rgba(255, 255, 255, 0.2)" : "var(--mist)"}`,
            color: variant === "dark" ? "var(--paper)" : "var(--ash)",
            opacity: isLoading ? 0.6 : 1,
          }}
        >
          <option value="">What would you use 1picday for? (optional)</option>
          <option value="Memories">Memories</option>
          <option value="Fitness">Fitness</option>
          <option value="Family">Family</option>
          <option value="Personal growth">Personal growth</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full text-lg px-6 py-6 transition-opacity hover:opacity-90 disabled:opacity-60"
        style={{
          backgroundColor: variant === "dark" ? "var(--paper)" : "var(--moss)",
          color: variant === "dark" ? "var(--ink)" : "white",
          border: "none",
        }}
      >
        {isLoading ? "Joining..." : "Join the waitlist"}
      </Button>

      {error && (
        <p className="text-sm text-center" style={{ color: "#ef4444" }}>
          {error}
        </p>
      )}

      <p
        className="text-sm text-center leading-relaxed"
        style={{ color: variant === "dark" ? "rgba(255, 255, 255, 0.6)" : "var(--stone)" }}
      >
        By joining, you agree to receive early access emails. No spam.
      </p>
    </form>
  )
}
