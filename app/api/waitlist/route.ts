import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for waitlist entries
const waitlistEntries: Array<{ email: string; useCase?: string; timestamp: string }> = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, useCase } = body

    // Basic validation
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check if email already exists
    const existingEntry = waitlistEntries.find((entry) => entry.email.toLowerCase() === email.toLowerCase())
    if (existingEntry) {
      return NextResponse.json({ error: "This email is already on the waitlist" }, { status: 400 })
    }

    // Store the entry
    const entry = {
      email: email.toLowerCase().trim(),
      useCase: useCase || undefined,
      timestamp: new Date().toISOString(),
    }

    waitlistEntries.push(entry)

    // Log to console
    console.log("[v0] New waitlist entry:", entry)
    console.log("[v0] Total entries:", waitlistEntries.length)

    return NextResponse.json({ ok: true, message: "Successfully joined the waitlist" })
  } catch (error) {
    console.error("[v0] Waitlist API error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
