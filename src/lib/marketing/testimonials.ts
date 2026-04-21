import { cookies } from "next/headers";
import {
  API_BASE_URL,
  TESTIMONIALS_ENDPOINT,
  TESTIMONIALS_REVALIDATE_SECONDS,
} from "@/lib/marketing/constants";
import type { PublicTestimonialsResponseDto } from "@/lib/marketing/dto";
import { MARKETING_LANGUAGE_COOKIE } from "@/lib/marketing/i18n";
import { mapTestimonials } from "@/lib/marketing/mapper";

export async function getTestimonials(options?: {
  page?: number;
  pageSize?: number;
  minRating?: number;
  languageCode?: string;
}) {
  const cookieStore = await cookies();
  const requestedLanguageCode =
    options?.languageCode || cookieStore.get(MARKETING_LANGUAGE_COOKIE)?.value;
  const page = Math.max(1, options?.page || 1);
  const pageSize = Math.max(1, options?.pageSize || 6);
  const minRating = Math.max(1, Math.min(5, options?.minRating || 1));

  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    minRating: String(minRating),
  });

  try {
    const response = await fetch(
      `${API_BASE_URL}${TESTIMONIALS_ENDPOINT}?${query.toString()}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: {
          revalidate: TESTIMONIALS_REVALIDATE_SECONDS,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Testimonials request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as PublicTestimonialsResponseDto;
    return mapTestimonials(payload, { page, pageSize, languageCode: requestedLanguageCode });
  } catch {
    return mapTestimonials(null, { page, pageSize, languageCode: requestedLanguageCode });
  }
}
