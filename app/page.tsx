"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { WaitlistForm } from "@/components/waitlist-form"
import { Logo } from "@/components/logo"
import { Camera, Calendar, Shield, Film, Grid3x3, ImageIcon } from "lucide-react"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <header className="fixed top-0 left-0 right-0 p-6 z-50 flex justify-between items-center">
        <Logo width={160} height={32} style={{ color: "var(--ink)" }} />
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 lg:py-40 max-w-5xl mx-auto">
        <div className="text-center space-y-8">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance"
            style={{ color: "var(--ink)" }}
          >
            One pic a day. Forever.
          </h1>
          <p
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed text-balance"
            style={{ color: "var(--ash)" }}
          >
            A daily reminder to take one photo and turn it into lasting memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("waitlist")}
              className="text-lg px-8 py-6 transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--moss)",
                color: "white",
                border: "none",
              }}
            >
              Start today
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="text-lg px-8 py-6 transition-all bg-transparent hover:opacity-80"
              style={{
                backgroundColor: "transparent",
                borderColor: "var(--mist)",
                color: "var(--ink)",
              }}
            >
              See how it works
            </Button>
          </div>
          <div className="pt-8">
            <WaitlistForm variant="light" />
            <div className="mt-6">
              <a
                href="https://forms.gle/QAYyanTDfNLaP6QQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline transition-all"
                style={{ color: "var(--ash)" }}
              >
                Want to help more? Answer the 2-minute survey →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-24" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-light text-center mb-16 text-balance"
            style={{ color: "var(--ink)" }}
          >
            How it works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--moss)" }}
              >
                <Calendar className="w-6 h-6" style={{ color: "var(--paper)" }} />
              </div>
              <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                We remind you every day
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                A gentle daily nudge to capture your moment.
              </p>
            </div>
            <div className="space-y-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--moss)" }}
              >
                <Camera className="w-6 h-6" style={{ color: "var(--paper)" }} />
              </div>
              <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                You take one photo
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                Just one. No pressure, no perfection needed.
              </p>
            </div>
            <div className="space-y-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--moss)" }}
              >
                <Shield className="w-6 h-6" style={{ color: "var(--paper)" }} />
              </div>
              <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                We store it safely
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                Your photos are secure and private, forever.
              </p>
            </div>
            <div className="space-y-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--moss)" }}
              >
                <Film className="w-6 h-6" style={{ color: "var(--paper)" }} />
              </div>
              <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                We turn time into stories
              </h3>
              <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                Reels, collages, and yearly videos of your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-balance" style={{ color: "var(--ink)" }}>
          Why it works
        </h2>
        <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--ash)" }}>
          <p>Consistency over perfection. Taking one photo every day creates a habit that lasts.</p>
          <p>One photo is enough. No need to curate, filter, or overthink. Just capture the moment.</p>
          <p>
            Value grows with time. Every day you continue adds weight to your collection. A week becomes a month. A
            month becomes a year. Years become a life remembered.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 py-24" style={{ backgroundColor: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-light text-center mb-16 text-balance"
            style={{ color: "var(--ink)" }}
          >
            What you get
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: "var(--paper)", border: `1px solid var(--mist)` }}
            >
              <div
                className="aspect-[4/3] flex items-center justify-center"
                style={{ backgroundColor: "var(--paper)" }}
              >
                <ImageIcon className="w-16 h-16" style={{ color: "var(--stone)" }} />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                  Daily photo timeline
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                  See your photos flow chronologically, day by day.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: "var(--paper)", border: `1px solid var(--mist)` }}
            >
              <div
                className="aspect-[4/3] flex items-center justify-center"
                style={{ backgroundColor: "var(--paper)" }}
              >
                <Film className="w-16 h-16" style={{ color: "var(--stone)" }} />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                  Automatic reels & year recap
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                  We create video recaps of your year automatically.
                </p>
              </div>
            </div>
            <div
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: "var(--paper)", border: `1px solid var(--mist)` }}
            >
              <div
                className="aspect-[4/3] flex items-center justify-center"
                style={{ backgroundColor: "var(--paper)" }}
              >
                <Grid3x3 className="w-16 h-16" style={{ color: "var(--stone)" }} />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-medium" style={{ color: "var(--ink)" }}>
                  Collages & prints
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
                  Turn your memories into physical keepsakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Trust */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12 text-balance" style={{ color: "var(--ink)" }}>
          Privacy & trust
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-center">
          <div className="space-y-3">
            <div className="text-2xl font-light" style={{ color: "var(--ink)" }}>
              Private by default
            </div>
            <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
              Your photos are never public unless you choose to share them.
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-light" style={{ color: "var(--ink)" }}>
              Your photos belong to you
            </div>
            <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
              You own your memories. Export or delete them anytime.
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-light" style={{ color: "var(--ink)" }}>
              No public sharing
            </div>
            <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
              This is not a social network. No likes, no followers, no feeds.
            </p>
          </div>
          <div className="space-y-3">
            <div className="text-2xl font-light" style={{ color: "var(--ink)" }}>
              Built for long-term memory
            </div>
            <p className="leading-relaxed" style={{ color: "var(--ash)" }}>
              Not for attention. For reflection and remembrance.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="px-6 py-32" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-light text-balance">One pic a day. Forever.</h2>
          <Button
            size="lg"
            className="text-lg px-8 py-6 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--paper)",
              color: "var(--ink)",
              border: "none",
            }}
          >
            Start today
          </Button>
          <div className="pt-4">
            <WaitlistForm variant="dark" />
            <div className="mt-6">
              <a
                href="https://forms.gle/QAYyanTDfNLaP6QQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline transition-all"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
              >
                Want to help more? Answer the 2-minute survey →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12" style={{ backgroundColor: "var(--paper)", borderTop: `1px solid var(--mist)` }}>
        <div className="max-w-6xl mx-auto text-center text-sm" style={{ color: "var(--stone)" }}>
          <p>1picday.xyz</p>
        </div>
      </footer>
    </main>
  )
}
