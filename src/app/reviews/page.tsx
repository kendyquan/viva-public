"use client";

import { useState, useEffect } from "react";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { reviews as fallbackReviews, ratingBreakdown } from "@/lib/reviewsData";
import { useLang } from "@/contexts/LanguageContext";
import { publicApi } from "@/lib/api";

function RatingBar({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 text-sm text-gray-600 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${(score / 5) * 100}%`, background: "#FFB800" }}
        />
      </div>
      <span className="text-sm font-medium text-gray-700 w-6">{score}</span>
    </div>
  );
}

export default function ReviewsPage() {
  const { t } = useLang();
  const [reviews, setReviews] = useState(fallbackReviews as any[]);

  useEffect(() => {
    publicApi.getReviews(20)
      .then((data) => {
        if (data?.length) {
          setReviews(data.map((r) => ({
            id: r.id,
            name: r.author,
            country: '',
            flag: '',
            date: r.date ? new Date(r.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '',
            score: r.rating,
            text: r.text,
          })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* Page header */}
      <div
        className="py-6 text-white text-center"
        style={{ background: "linear-gradient(135deg, #00AEEF 0%, #0090C5 100%)" }}
      >
        <h1 className="text-2xl font-bold tracking-wide">{t.reviews.page_title}</h1>
      </div>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Overview */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {t.reviews.section_title}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xl font-semibold text-gray-700">{t.reviews.count}</span>
            <StarRating score={5} size="lg" />
          </div>

          {/* Rating breakdown – 3 columns responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-2">
            {[...ratingBreakdown, ...ratingBreakdown].map((r, i) => {
              const labels = [t.rating.accuracy, t.rating.communication, t.rating.cleanliness];
              return <RatingBar key={i} label={labels[i % 3]} score={r.score} />;
            })}
          </div>
        </div>

        {/* All review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <ReviewCard key={r.id} {...r} truncate={false} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
            ‹
          </button>
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              className={`w-9 h-9 rounded-full text-sm font-medium transition-colors ${
                p === 1
                  ? "text-white"
                  : "border border-gray-200 text-gray-600 hover:border-[#00AEEF] hover:text-[#00AEEF]"
              }`}
              style={p === 1 ? { background: "#00AEEF" } : {}}
            >
              {p}
            </button>
          ))}
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors">
            ›
          </button>
        </div>
      </section>
    </>
  );
}
