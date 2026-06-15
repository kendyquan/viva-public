"use client";

import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { reviews, ratingBreakdown } from "@/lib/reviewsData";
import { useLang } from "@/contexts/LanguageContext";

export default function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative py-16 sm:py-24 text-center text-white"
        style={{ background: "linear-gradient(135deg, #00AEEF 0%, #0090C5 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase mb-3">
            {t.home.hero_title}
          </h1>
          <p className="text-lg sm:text-xl italic font-light mb-10 opacity-90">
            {t.home.hero_sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-900 transition-colors"
            >
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">{t.home.install_on}</div>
                <div className="text-sm font-semibold">{t.home.install_appstore}</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white rounded-xl px-5 py-3 hover:bg-gray-900 transition-colors"
            >
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-75">{t.home.install_on}</div>
                <div className="text-sm font-semibold">{t.home.install_google}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Photo Gallery + Video ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-3 gap-3">
          <div className="relative aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
            <button
              className="relative z-10 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl hover:bg-red-700 transition-colors"
              aria-label="Play video"
            >
              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div className="relative aspect-[4/3] bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
            <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Reviews Preview ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {t.home.reviews_title}
          </h2>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span className="font-medium">{t.home.reviews_count}</span>
            <StarRating score={5} size="md" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
          {ratingBreakdown.map((r) => (
            <div key={r.label} className="flex flex-col items-center gap-1">
              <span className="text-sm text-gray-500">{r.label}</span>
              <StarRating score={r.score} size="sm" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {reviews.slice(0, 3).map((r) => (
            <ReviewCard key={r.id} {...r} truncate />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-block px-8 py-3 rounded-full text-sm font-semibold transition-all border-2"
            style={{ borderColor: "#00AEEF", color: "#00AEEF" }}
          >
            {t.home.see_all}
          </Link>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            {t.home.features_title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["🏠", "🔍", "💬", "📊"] as const).map((icon, i) => {
              const feat = t.home.features[i];
              return { icon, ...feat };
            }).map((feat) => (
              <div key={feat.title} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section
        className="py-14 text-white text-center"
        style={{ background: "linear-gradient(135deg, #00A3C4 0%, #00AEEF 100%)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">{t.home.cta_title}</h2>
          <p className="opacity-90 mb-7 text-sm sm:text-base">{t.home.cta_sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 hover:bg-gray-50 transition-colors" style={{ color: "#1A1A2E" }}>
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">{t.home.download_on}</div>
                <div className="text-sm font-bold">{t.home.download_appstore}</div>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 hover:bg-gray-50 transition-colors" style={{ color: "#1A1A2E" }}>
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-500">{t.home.get_on}</div>
                <div className="text-sm font-bold">{t.home.download_google}</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
