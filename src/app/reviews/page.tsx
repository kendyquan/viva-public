"use client";

import { useState, useEffect } from "react";
import ReviewCard from "@/components/ReviewCard";
import StarRating from "@/components/StarRating";
import { reviews as fallbackReviews, ratingBreakdown as fallbackRatingBreakdown } from "@/lib/reviewsData";
import { useLang } from "@/contexts/LanguageContext";
import { publicApi } from "@/lib/api";

const PAGE_SIZE = 6;

interface ReviewItem {
  id: string | number;
  name: string;
  country: string;
  flag: string;
  date: string;
  score: number;
  text: string;
}

interface RatingCategoryItem {
  id: string | number;
  label: string;
  score: number;
  sortOrder: number;
}

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

function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4) return [1, 2, 3, 4, 5, "…", totalPages];
    if (page >= totalPages - 3)
      return [1, "…", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, "…", page - 1, page, page + 1, "…", totalPages];
  };

  const btnBase =
    "w-9 h-9 rounded-full text-sm font-medium transition-colors flex items-center justify-center";

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${btnBase} border border-gray-200 text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        ‹
      </button>

      {getPages().map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="w-9 text-center text-gray-400 text-sm">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`${btnBase} ${
              p === page
                ? "text-white"
                : "border border-gray-200 text-gray-600 hover:border-[#00AEEF] hover:text-[#00AEEF]"
            }`}
            style={p === page ? { background: "#00AEEF" } : {}}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={`${btnBase} border border-gray-200 text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        ›
      </button>
    </div>
  );
}

export default function ReviewsPage() {
  const { t, lang } = useLang();
  const [reviews, setReviews] = useState<ReviewItem[]>(fallbackReviews as ReviewItem[]);
  const [ratingCategories, setRatingCategories] = useState<RatingCategoryItem[]>(
    fallbackRatingBreakdown.map((r, i) => ({ id: i, label: r.label, score: r.score, sortOrder: i }))
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    publicApi
      .getReviews(lang)
      .then((data) => {
        if (data?.reviews?.length) {
          setReviews(
            data.reviews.map((r) => ({
              id: r.id,
              name: r.name,
              country: r.country || "",
              flag: r.flag || "",
              date: r.date
                ? new Date(r.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "",
              score: r.score,
              text: r.text,
            }))
          );
        }
        if (data?.ratingCategories?.length) {
          setRatingCategories(data.ratingCategories);
        }
      })
      .catch(() => {});
  }, [lang]);

  const totalPages = Math.ceil(reviews.length / PAGE_SIZE);
  const paginated = reviews.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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

          {/* Rating breakdown – from DB, with i18n label overrides for the first 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mb-2">
            {ratingCategories.map((r, i) => {
              const i18nLabels = [t.rating.accuracy, t.rating.communication, t.rating.cleanliness];
              const label = i < i18nLabels.length ? i18nLabels[i] : r.label;
              return <RatingBar key={r.id} label={label} score={r.score} />;
            })}
          </div>
        </div>

        {/* Review cards – paginated */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {paginated.map((r) => (
            <ReviewCard key={r.id} {...r} truncate={false} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </>
  );
}
