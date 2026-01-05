// app/page.tsx
// AI Pet – Ethical Micro-SaaS Landing Page (Pre-MVP) with Mux Video
// Stack: Next.js App Router + Tailwind CSS

import PitchVideo from './PitchVideo';


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header / Hero */}
      <header className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
          A calm AI pet that helps you stay balanced
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          AI Pet is a lightweight, privacy-first AI companion designed to support daily focus and reflection—without addiction, noise, or manipulation.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#waitlist"
            className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            Join the early access waitlist
          </a>
          <span className="text-sm text-gray-500 self-center">
            No spam • Concept-stage • Privacy-first
          </span>
        </div>
      </header>

      {/* Mux Pitch Video Section */}
      <PitchVideo />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Why AI Pet is different</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <Feature
            title="Gentle daily check-ins"
            description="Short, intentional interactions that help you pause and reflect—no endless chat loops."
          />
          <Feature
            title="Designed for calm, not engagement"
            description="AI Pet avoids dopamine-driven mechanics and respects your attention by design."
          />
          <Feature
            title="Privacy-first by default"
            description="No training on your data. No dark patterns. No hidden analytics."
          />
        </div>
      </section>

      {/* Fake Demo Preview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold">Preview a planned interaction</h2>
          <p className="mt-4 text-gray-600 max-w-2xl">
            This is a scripted preview of a possible experience. It is not a live AI response.
          </p>

          <div className="mt-10 max-w-xl rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-2">AI Pet</p>
            <p className="text-gray-900">
              How did today feel overall—calm, busy, or overwhelming?
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-10 space-y-6 max-w-3xl">
          <FAQ
            question="Is AI Pet a real product?"
            answer="AI Pet is an early-stage concept. This page exists to validate interest before building the full product."
          />
          <FAQ
            question="Will my data be stored?"
            answer="No. This preview does not collect or store personal data. Future designs prioritize privacy-first architecture."
          />
          <FAQ
            question="When will it launch?"
            answer="A launch timeline will be shared with early-access subscribers once validation is complete."
          />
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">Be part of the first 100 users</h2>
          <p className="mt-4 text-gray-300">
            Join the waitlist to shape a calmer kind of AI.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full sm:w-72 rounded-xl px-4 py-3 text-gray-900"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 font-medium text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Join waitlist
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            This form is for interest validation only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-500">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <span>© {new Date().getFullYear()} AI Pet (Concept Project)</span>
          <span>Privacy-first • No tracking</span>
        </div>
      </footer>
    </main>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="font-medium">{question}</h3>
      <p className="mt-2 text-gray-600">{answer}</p>
    </div>
  );
}
