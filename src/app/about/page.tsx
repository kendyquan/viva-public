export const metadata = {
  title: "About – FIVIVA",
};

const team = [
  { name: "David Nguyen", role: "CEO & Co-founder", emoji: "👨‍💼" },
  { name: "Sara Kim", role: "CTO & Co-founder", emoji: "👩‍💻" },
  { name: "Michael Tran", role: "Head of Design", emoji: "🎨" },
  { name: "Linda Park", role: "Head of Growth", emoji: "📈" },
];

const values = [
  { icon: "🤝", title: "Trust", desc: "Every listing is verified. Every user is real. We build relationships on honesty." },
  { icon: "🌏", title: "Accessibility", desc: "Real estate should be open to everyone — buyers, renters, agents, and investors." },
  { icon: "⚡", title: "Speed", desc: "Find and close deals faster with real-time listings and instant communication." },
  { icon: "🔒", title: "Security", desc: "Your data and transactions are protected end-to-end, always." },
];

const stats = [
  { value: "50K+", label: "Active Listings" },
  { value: "120K+", label: "Registered Users" },
  { value: "15+", label: "Countries" },
  { value: "4.9★", label: "App Rating" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 sm:py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #00AEEF 0%, #0090C5 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About FIVIVA</h1>
          <p className="text-base sm:text-lg opacity-90 leading-relaxed">
            We&apos;re building the smartest real estate platform in Southeast Asia —
            connecting agents, owners, bankers, and buyers in one seamless experience.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold" style={{ color: "#00AEEF" }}>{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
        <div className="prose prose-gray max-w-none text-gray-600 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            FIVIVA was founded in 2018 with a simple belief: finding a home — or selling one — shouldn&apos;t be complicated.
            The real estate market was fragmented, trust was low, and tools were outdated.
          </p>
          <p>
            We set out to change that by building a platform where agents could list properties beautifully,
            buyers could discover them intelligently, and bankers could connect at the right moment in the journey.
          </p>
          <p>
            Today, FIVIVA serves thousands of users across the region, with a mobile-first approach that puts
            real estate in everyone&apos;s pocket. Whether you&apos;re a first-time buyer, a seasoned investor,
            or a professional agent — FIVIVA is built for you.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center text-4xl"
                style={{ background: "linear-gradient(135deg, #E8F7FD 0%, #b3e5f5 100%)" }}
              >
                {member.emoji}
              </div>
              <div className="font-semibold text-gray-900 text-sm">{member.name}</div>
              <div className="text-xs text-gray-500 mt-0.5">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-14 text-white text-center"
        style={{ background: "linear-gradient(135deg, #00A3C4 0%, #00AEEF 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Join the FIVIVA community</h2>
          <p className="opacity-90 mb-7 text-sm sm:text-base">
            Download the app and start your real estate journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 hover:bg-gray-50 transition-colors" style={{ color: "#1A1A2E" }}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 hover:bg-gray-50 transition-colors" style={{ color: "#1A1A2E" }}>
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">Get it on</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
