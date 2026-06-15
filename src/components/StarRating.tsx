interface StarRatingProps {
  score: number; // out of 5
  size?: "sm" | "md" | "lg";
}

export default function StarRating({ score, size = "md" }: StarRatingProps) {
  const sizeClass = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-base";

  return (
    <span className={`inline-flex gap-0.5 ${sizeClass}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ color: i <= score ? "#FFB800" : "#d1d5db" }}>
          ★
        </span>
      ))}
    </span>
  );
}
