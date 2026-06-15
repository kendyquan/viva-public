import StarRating from "./StarRating";

interface ReviewCardProps {
  name: string;
  country: string;
  flag: string;
  date: string;
  text: string;
  score: number;
  truncate?: boolean;
}

export default function ReviewCard({
  name,
  country,
  flag,
  date,
  text,
  score,
  truncate = true,
}: ReviewCardProps) {
  return (
    <div className="review-card bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #00AEEF 0%, #00A3C4 100%)" }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <span>{flag}</span>
            <span>{country}</span>
          </div>
        </div>
        <div className="ml-auto">
          <StarRating score={score} size="sm" />
        </div>
      </div>
      <p className={`text-sm text-gray-600 leading-relaxed ${truncate ? "line-clamp-3" : ""}`}>
        {text}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-400">{date}</span>
        {truncate && (
          <button className="text-xs font-medium" style={{ color: "#00AEEF" }}>
            View more
          </button>
        )}
      </div>
    </div>
  );
}
