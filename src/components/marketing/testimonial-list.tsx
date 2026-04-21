import type { TestimonialModel } from "@/lib/marketing/dto";
import { TestimonialCard } from "@/components/marketing/testimonial-card";

interface TestimonialListProps {
  testimonials: TestimonialModel[];
}

export function TestimonialList({
  testimonials,
}: TestimonialListProps) {
  if (testimonials.length === 0) {
    return (
      <section className="marketing-testimonials">
        <div className="marketing-empty">
          No public testimonials are available yet.
        </div>
      </section>
    );
  }

  return (
    <section className="marketing-testimonials" aria-label="Guest testimonials">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />
      ))}
    </section>
  );
}
