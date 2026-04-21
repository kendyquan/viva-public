import type { ReviewMetricModel } from "@/lib/marketing/dto";
import { RatingStars } from "@/components/marketing/rating-stars";

interface ReviewSummaryProps {
  title: string;
  totalLabel: string;
  averageRating: number;
  metrics: ReviewMetricModel[];
  metricColumns?: number;
}

export function ReviewSummary({
  title,
  totalLabel,
  averageRating,
  metrics,
  metricColumns = 2,
}: ReviewSummaryProps) {
  const columns = Math.max(1, metricColumns);

  return (
    <section className="marketing-summary" aria-labelledby="review-summary-title">
      <h2
        id="review-summary-title"
        className="marketing-summary__title"
      >
        {title}
      </h2>

      <div className="marketing-summary__headline">
        <span className="marketing-summary__total">{totalLabel}</span>
        <RatingStars rating={averageRating} size="lg" />
      </div>

      <div
        className="marketing-summary__metrics"
        data-columns={columns}
      >
        {Array.from({ length: columns }, (_, columnIndex) => (
          <div
            key={`metric-column-${columnIndex}`}
            className="marketing-summary__metric-list"
          >
            {metrics.map((metric) => (
              <div
                key={`${columnIndex}-${metric.label}`}
                className="marketing-summary__metric-row"
              >
                <span className="marketing-summary__metric-label">
                  {metric.label}
                </span>
                <RatingStars rating={metric.rating} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
