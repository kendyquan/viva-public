"use client";

import Image from "next/image";
import { useState } from "react";
import type { TestimonialModel } from "@/lib/marketing/dto";
import { RatingStars } from "@/components/marketing/rating-stars";

interface TestimonialCardProps {
  testimonial: TestimonialModel;
}

export function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const canExpand = testimonial.review.length > 210;

  return (
    <article className="marketing-testimonial">
      <div className="marketing-testimonial__reviewer">
        <div className="marketing-testimonial__avatar">
          <Image
            src={testimonial.reviewer.avatarUrl}
            alt={testimonial.reviewer.displayName}
            width={116}
            height={116}
            sizes="116px"
          />
        </div>

        <div>
          <div className="marketing-testimonial__name">
            {testimonial.reviewer.displayName}
          </div>
          <div className="marketing-testimonial__location">
            <Image
              src={testimonial.reviewer.flagSrc}
              alt={testimonial.reviewer.flagAlt}
              width={24}
              height={16}
              className="marketing-testimonial__flag"
            />
            <span>{testimonial.reviewer.locationLabel}</span>
          </div>
        </div>
      </div>

      <div className="marketing-testimonial__card">
        <RatingStars rating={testimonial.rating} />

        <div className="marketing-testimonial__review">
          <div
            className={
              canExpand && !isExpanded
                ? "marketing-testimonial__review--clamped"
                : undefined
            }
          >
            {testimonial.review}
          </div>
        </div>

        <div className="marketing-testimonial__meta">
          <span>{testimonial.createdLabel}</span>

          {canExpand ? (
            <button
              type="button"
              className="marketing-testimonial__toggle"
              onClick={() => setIsExpanded((value) => !value)}
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
