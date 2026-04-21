import { HeroBanner } from "@/components/marketing/hero-banner";
import { MarketingPagination } from "@/components/marketing/marketing-pagination";
import { MediaGallery } from "@/components/marketing/media-gallery";
import { ReviewSummary } from "@/components/marketing/review-summary";
import { TestimonialList } from "@/components/marketing/testimonial-list";
import {
  HOME_TESTIMONIALS_PAGE_SIZE,
} from "@/lib/marketing/constants";
import { getLandingContent } from "@/lib/marketing/content";
import { formatReviewCountLabel } from "@/lib/marketing/mapper";
import { getTestimonials } from "@/lib/marketing/testimonials";

type HomeSearchParams = Promise<{
  page?: string | string[];
}>;

function getSingleValue(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

function toPageNumber(value?: string) {
  const parsed = Number.parseInt(value || "", 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

export const metadata = {
  title: "Home",
  description: "Download the FIVIVA apps, browse public guest reviews, and explore support content.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: HomeSearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const page = toPageNumber(getSingleValue(resolvedSearchParams.page));

  const [content, testimonials] = await Promise.all([
    getLandingContent(),
    getTestimonials({
      page,
      pageSize: HOME_TESTIMONIALS_PAGE_SIZE,
    }),
  ]);

  return (
    <>
      <HeroBanner
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        appStoreUrl={content.hero.appStoreUrl}
        playStoreUrl={content.hero.playStoreUrl}
      />

      <div className="marketing-stack">
        <MediaGallery
          images={content.hero.galleryImages}
          videoUrl={content.hero.videoUrl}
        />

        <ReviewSummary
          title={content.reviews.title}
          totalLabel={
            testimonials.isFallback
              ? content.reviews.totalLabel
              : formatReviewCountLabel(
                  testimonials.total,
                  content.reviews.totalLabel,
                  content.reviews.countLabelTemplate,
                )
          }
          averageRating={testimonials.averageRating}
          metrics={content.reviews.metrics}
          metricColumns={2}
        />

        <TestimonialList testimonials={testimonials.data} />

        <MarketingPagination
          currentPage={testimonials.page}
          totalPages={testimonials.totalPages}
          ariaLabel={content.ui.paginationAriaLabel}
          previousLabel={content.ui.paginationPreviousLabel}
          nextLabel={content.ui.paginationNextLabel}
        />
      </div>
    </>
  );
}
