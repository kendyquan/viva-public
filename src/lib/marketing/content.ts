import { cookies } from "next/headers";
import {
  API_BASE_URL,
  LANDING_CONTENT_ENDPOINT,
  LANDING_CONTENT_REVALIDATE_SECONDS,
} from "@/lib/marketing/constants";
import type { PublicLandingContentDto } from "@/lib/marketing/dto";
import { MARKETING_LANGUAGE_COOKIE } from "@/lib/marketing/i18n";
import { mapLandingContent } from "@/lib/marketing/mapper";

export async function getLandingContent(options?: {
  settingsCategory?: string;
  languageId?: string;
  languageCode?: string;
  faqKeyword?: string;
  faqCategory?: string;
}) {
  const cookieStore = await cookies();
  const requestedLanguageCode =
    options?.languageCode || cookieStore.get(MARKETING_LANGUAGE_COOKIE)?.value;
  const query = new URLSearchParams({
    settingsCategory: options?.settingsCategory || "landing-page",
  });

  if (options?.languageId) {
    query.set("languageId", options.languageId);
  }

  if (requestedLanguageCode) {
    query.set("languageCode", requestedLanguageCode);
  }

  if (options?.faqKeyword) {
    query.set("faqKeyword", options.faqKeyword);
  }

  if (options?.faqCategory) {
    query.set("faqCategory", options.faqCategory);
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}${LANDING_CONTENT_ENDPOINT}?${query.toString()}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: {
          revalidate: LANDING_CONTENT_REVALIDATE_SECONDS,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Landing content request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as PublicLandingContentDto;
    return mapLandingContent(payload, { requestedLanguageCode });
  } catch {
    return mapLandingContent(null, { requestedLanguageCode });
  }
}
