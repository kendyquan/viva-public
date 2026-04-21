interface RatingStarsProps {
  rating: number;
  size?: "md" | "lg";
}

export function RatingStars({
  rating,
  size = "md",
}: RatingStarsProps) {
  const filledCount = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      className="marketing-rating-stars"
      aria-label={`${rating.toFixed(1)} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={`${size}-${index}`}
          className="marketing-rating-stars__star"
          aria-hidden="true"
        >
          {index < filledCount ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}
