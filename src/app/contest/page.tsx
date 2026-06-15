"use client";

import { useState } from "react";

const prizes = [
  { rank: "🥇 1st Place", prize: "$5,000 Cash", extra: "+ Featured Agent Badge for 1 year" },
  { rank: "🥈 2nd Place", prize: "$2,000 Cash", extra: "+ 6 months Premium Membership" },
  { rank: "🥉 3rd Place", prize: "$1,000 Cash", extra: "+ 3 months Premium Membership" },
  { rank: "🎖 Top 10", prize: "$200 Credit", extra: "+ Exclusive FIVIVA Merchandise" },
];

const steps = [
  { step: "01", title: "Download FIVIVA", desc: "Install the app from App Store or Google Play and create your account." },
  { step: "02", title: "List a Property", desc: "Post at least one property listing with high-quality photos and full details." },
  { step: "03", title: "Get Reviews", desc: "Invite clients to leave honest reviews. More 5-star reviews = higher score." },
  { step: "04", title: "Win Prizes", desc: "Top agents by review score and listing quality win amazing cash prizes!" },
];

export default function ContestPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-16 sm:py-24 text-white text-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #00AEEF 0%, #0090C5 60%, #00A3C4 100%)" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ background: "white", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: "white", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-2xl mx-auto px-4">
          <div className="inline-block bg-white bg-opacity-20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            🏆 FIVIVA Agent Contest 2024
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            Compete. Win.<br />Grow Your Business.
          </h1>
          <p className="text-base sm:text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Join the FIVIVA Agent of the Year Contest. Showcase your listings, earn reviews, and compete for over $8,000 in prizes.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-sm font-semibold px-2 py-1.5 rounded-full" style={{ color: "#00AEEF" }}>
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Submissions close December 31, 2024
          </div>
        </div>
      </section>

      {/* Prize pool */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">Prize Pool</h2>
        <p className="text-gray-500 text-center text-sm mb-10">Total value: <strong style={{ color: "#00AEEF" }}>$8,200+</strong></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prizes.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border-2 flex items-start gap-4 ${
                i === 0 ? "border-yellow-400 bg-yellow-50" : "border-gray-100 bg-white shadow-sm"
              }`}
            >
              <div className="text-3xl flex-shrink-0">{p.rank.split(" ")[0]}</div>
              <div>
                <div className="font-bold text-gray-900">{p.rank.split(" ").slice(1).join(" ")}</div>
                <div className="text-xl font-bold mt-0.5" style={{ color: "#00AEEF" }}>{p.prize}</div>
                <div className="text-xs text-gray-500 mt-1">{p.extra}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to enter */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">How to Enter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #00AEEF 0%, #0090C5 100%)" }}
                >
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard teaser */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Current Leaderboard</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-12 bg-gray-50 px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
            <span className="col-span-1">#</span>
            <span className="col-span-5">Agent</span>
            <span className="col-span-3 text-center">Listings</span>
            <span className="col-span-3 text-center">Score</span>
          </div>
          {[
            { rank: 1, name: "Victoria T.", city: "Ho Chi Minh City", listings: 24, score: 98.4 },
            { rank: 2, name: "James W.", city: "Hanoi", listings: 19, score: 96.1 },
            { rank: 3, name: "Linda P.", city: "Da Nang", listings: 16, score: 94.8 },
            { rank: 4, name: "Michael N.", city: "Ho Chi Minh City", listings: 21, score: 93.2 },
            { rank: 5, name: "Sara K.", city: "Hanoi", listings: 13, score: 91.7 },
          ].map((row) => (
            <div key={row.rank} className={`grid grid-cols-12 px-5 py-4 text-sm border-b border-gray-50 last:border-0 ${row.rank <= 3 ? "hover:bg-blue-50" : "hover:bg-gray-50"} transition-colors`}>
              <span className="col-span-1 font-bold" style={{ color: row.rank === 1 ? "#FFB800" : row.rank === 2 ? "#9CA3AF" : row.rank === 3 ? "#CD7F32" : "#374151" }}>
                {row.rank}
              </span>
              <div className="col-span-5">
                <div className="font-medium text-gray-900">{row.name}</div>
                <div className="text-xs text-gray-400">{row.city}</div>
              </div>
              <span className="col-span-3 text-center text-gray-600">{row.listings}</span>
              <span className="col-span-3 text-center font-semibold" style={{ color: "#00AEEF" }}>{row.score}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Register CTA */}
      <section
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #00A3C4 0%, #00AEEF 100%)" }}
      >
        <div className="max-w-lg mx-auto px-4">
          {submitted ? (
            <div>
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-2">You&apos;re registered!</h2>
              <p className="opacity-90 text-sm">We&apos;ll send updates to your email. Good luck!</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Enter the Contest</h2>
              <p className="opacity-90 mb-7 text-sm">
                Register now to be notified when the contest opens and get early-entry tips.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-semibold text-sm transition-colors flex-shrink-0"
                  style={{ background: "#1A1A2E", color: "white" }}
                >
                  Register Now →
                </button>
              </form>
              <p className="mt-3 text-xs opacity-70">No spam. Unsubscribe anytime.</p>
            </>
          )}
        </div>
      </section>
    </>
  );
}
