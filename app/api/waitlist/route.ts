import { type NextRequest, NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

// In-memory storage as fallback
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

    const normalizedEmail = email.toLowerCase().trim()

    // Check if Supabase is configured
    const hasSupabase = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (hasSupabase) {
      // Use Supabase
      // Check if email already exists
      const { data: existingEntries, error: checkError } = await supabase
        .from("waitlist")
        .select("email")
        .eq("email", normalizedEmail)
        .limit(1)

      if (checkError) {
        console.error("[Waitlist] Supabase check error:", checkError)
        throw new Error("Database error")
      }

      if (existingEntries && existingEntries.length > 0) {
        return NextResponse.json({ error: "This email is already on the waitlist" }, { status: 400 })
      }

      // Insert new entry
      const { error: insertError } = await supabase.from("waitlist").insert([
        {
          email: normalizedEmail,
          use_case: useCase || null,
        },
      ])

      if (insertError) {
        console.error("[Waitlist] Supabase insert error:", insertError)
        throw new Error("Failed to save to database")
      }

      console.log("[Waitlist] New entry saved to Supabase:", normalizedEmail)
    } else {
      // Fallback to in-memory storage
      const existingEntry = waitlistEntries.find((entry) => entry.email === normalizedEmail)
      if (existingEntry) {
        return NextResponse.json({ error: "This email is already on the waitlist" }, { status: 400 })
      }

      const entry = {
        email: normalizedEmail,
        useCase: useCase || undefined,
        timestamp: new Date().toISOString(),
      }

      waitlistEntries.push(entry)

      console.log("[Waitlist] New entry (in-memory):", entry)
      console.log("[Waitlist] Total entries:", waitlistEntries.length)
    }

    return NextResponse.json({ ok: true, message: "Successfully joined the waitlist" })
  } catch (error) {
    console.error("[Waitlist] API error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
