import {
  COUNTRY_FLAG_MAP,
  FALLBACK_FAQS,
  FALLBACK_GALLERY_IMAGES,
  FALLBACK_TESTIMONIALS,
  NAVIGATION_ROUTES,
} from "@/lib/marketing/constants";
import {
  buildFallbackLanguage,
  getLanguageFallbackBundle,
  getLanguageResolutionCandidates,
  getSupportedFallbackLanguages,
  mapPublicLanguage,
} from "@/lib/marketing/i18n";
import type {
  GalleryImageModel,
  LandingContentModel,
  LandingFaqModel,
  NavigationItemModel,
  PlaceholderPageModel,
  PublicLandingContentDto,
  PublicLandingFaqDto,
  PublicLandingSettingDto,
  PublicTestimonialDto,
  PublicTestimonialsResponseDto,
  ReviewMetricModel,
  SiteLanguageModel,
  TestimonialModel,
  TestimonialsModel,
} from "@/lib/marketing/dto";

function parseJsonValue<T>(value?: string | null): T | null {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function toSettingsMap(settings: PublicLandingSettingDto[] = []) {
  return new Map(
    settings.map((setting) => [setting.key.trim().toLowerCase(), setting.value]),
  );
}

function getSettingValue(
  settings: Map<string, string>,
  baseKey: string,
  candidates: string[],
) {
  const normalizedBaseKey = baseKey.trim().toLowerCase();

  for (const candidate of candidates) {
    const localizedValue = settings.get(`${normalizedBaseKey}.${candidate.toLowerCase()}`);
    if (localizedValue && localizedValue.trim()) {
      return localizedValue;
    }
  }

  const directValue = settings.get(normalizedBaseKey);
  return directValue && directValue.trim() ? directValue : undefined;
}

function getStringSetting(
  settings: Map<string, string>,
  baseKey: string,
  candidates: string[],
  fallbackValue: string,
) {
  return getSettingValue(settings, baseKey, candidates) || fallbackValue;
}

function parseNumericRating(value: string | undefined, fallback: number) {
  if (!value) {
    return fallback;
  }

  const direct = Number.parseFloat(value);
  if (Number.isFinite(direct)) {
    return Math.max(0, Math.min(5, direct));
  }

  const parsed = parseJsonValue<{ rating?: number }>(value);
  if (parsed && typeof parsed.rating === "number") {
    return Math.max(0, Math.min(5, parsed.rating));
  }

  return fallback;
}

function toGalleryImages(value: string | undefined): GalleryImageModel[] {
  const parsed = parseJsonValue<Array<string | GalleryImageModel>>(value);

  if (!parsed || parsed.length === 0) {
    return FALLBACK_GALLERY_IMAGES;
  }

  const items = parsed
    .map((entry, index) => {
      if (typeof entry === "string") {
        return {
          src: entry,
          alt: `FIVIVA showcase ${index + 1}`,
        };
      }

      if (entry && typeof entry.src === "string" && entry.src.trim()) {
        return {
          src: entry.src,
          alt: entry.alt?.trim() || `FIVIVA showcase ${index + 1}`,
        };
      }

      return null;
    })
    .filter((entry): entry is GalleryImageModel => Boolean(entry));

  return items.length > 0 ? items : FALLBACK_GALLERY_IMAGES;
}

function normalizeFaq(faq: PublicLandingFaqDto): LandingFaqModel {
  return {
    id: faq.id,
    question: faq.question,
    answer: faq.answer,
    keyword: faq.keyword || undefined,
    order: faq.order,
    category: faq.category || undefined,
  };
}

function dedupeLanguages(languages: SiteLanguageModel[]) {
  const seen = new Set<string>();
  const uniqueLanguages: SiteLanguageModel[] = [];

  for (const language of languages) {
    const key = language.languageCode.toLowerCase();
    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    uniqueLanguages.push(language);
  }

  return uniqueLanguages;
}

function createFallbackLandingContent(
  selectedLanguageCode?: string,
  defaultLanguageCode?: string,
  availableLanguages?: SiteLanguageModel[],
): LandingContentModel {
  const defaultLanguage = buildFallbackLanguage(defaultLanguageCode);
  const selectedLanguage = buildFallbackLanguage(
    selectedLanguageCode || defaultLanguage.languageCode,
  );
  const languages = dedupeLanguages(
    availableLanguages && availableLanguages.length > 0
      ? availableLanguages
      : [selectedLanguage, defaultLanguage, ...getSupportedFallbackLanguages()],
  );
  const fallbackBundle = getLanguageFallbackBundle(
    selectedLanguage.languageCode,
    defaultLanguage.languageCode,
  );

  return {
    language: {
      available: languages,
      selected: selectedLanguage,
      default: defaultLanguage,
    },
    navigation: NAVIGATION_ROUTES.map((route) => ({
      ...route,
      label: fallbackBundle.navigation[route.key],
    })),
    hero: {
      title: fallbackBundle.hero.title,
      subtitle: fallbackBundle.hero.subtitle,
      appStoreUrl: "#",
      playStoreUrl: "#",
      galleryImages: FALLBACK_GALLERY_IMAGES,
    },
    reviews: {
      title: fallbackBundle.reviews.title,
      totalLabel: fallbackBundle.reviews.totalLabel,
      countLabelTemplate: fallbackBundle.reviews.countLabelTemplate,
      pageTitle: fallbackBundle.reviews.pageTitle,
      metrics: [
        {
          label: fallbackBundle.reviews.metrics.accuracy,
          rating: 5,
        },
        {
          label: fallbackBundle.reviews.metrics.communication,
          rating: 4.8,
        },
        {
          label: fallbackBundle.reviews.metrics.cleanliness,
          rating: 4.2,
        },
      ],
    },
    help: {
      title: fallbackBundle.help.title,
      searchPlaceholder: fallbackBundle.help.searchPlaceholder,
      searchSrLabel: fallbackBundle.help.searchSrLabel,
      emptyStateLabel: fallbackBundle.help.emptyStateLabel,
    },
    footer: {
      leftText: fallbackBundle.footer.leftText,
      rightText: fallbackBundle.footer.rightText,
    },
    placeholders: {
      about: fallbackBundle.placeholders.about,
      contest: fallbackBundle.placeholders.contest,
      jobs: fallbackBundle.placeholders.jobs,
    },
    ui: {
      homeAriaLabel: fallbackBundle.ui.homeAriaLabel,
      openMenuLabel: fallbackBundle.ui.openMenuLabel,
      closeMenuLabel: fallbackBundle.ui.closeMenuLabel,
      languageSelectorLabel: fallbackBundle.ui.languageSelectorLabel,
      paginationAriaLabel: fallbackBundle.ui.paginationAriaLabel,
      paginationPreviousLabel: fallbackBundle.ui.paginationPreviousLabel,
      paginationNextLabel: fallbackBundle.ui.paginationNextLabel,
    },
    faqs: FALLBACK_FAQS,
  };
}

function mapMetrics(
  settings: Map<string, string>,
  candidates: string[],
  fallbackContent: LandingContentModel,
) {
  const fallbackMetrics = fallbackContent.reviews.metrics;

  const metrics: ReviewMetricModel[] = [
    {
      label: getStringSetting(
        settings,
        "landing.reviews.metriclabel.accuracy",
        candidates,
        fallbackMetrics[0].label,
      ),
      rating: parseNumericRating(
        getSettingValue(settings, "landing.reviews.metric.accuracy", candidates),
        fallbackMetrics[0].rating,
      ),
    },
    {
      label: getStringSetting(
        settings,
        "landing.reviews.metriclabel.communication",
        candidates,
        fallbackMetrics[1].label,
      ),
      rating: parseNumericRating(
        getSettingValue(settings, "landing.reviews.metric.communication", candidates),
        fallbackMetrics[1].rating,
      ),
    },
    {
      label: getStringSetting(
        settings,
        "landing.reviews.metriclabel.cleanliness",
        candidates,
        fallbackMetrics[2].label,
      ),
      rating: parseNumericRating(
        getSettingValue(settings, "landing.reviews.metric.cleanliness", candidates),
        fallbackMetrics[2].rating,
      ),
    },
  ];

  return metrics;
}

function mapNavigation(
  settings: Map<string, string>,
  candidates: string[],
  fallbackContent: LandingContentModel,
) {
  return NAVIGATION_ROUTES.map((route) => ({
    ...route,
    label: getStringSetting(
      settings,
      `landing.nav.${route.key}`,
      candidates,
      fallbackContent.navigation.find((item) => item.key === route.key)?.label || route.key,
    ),
  })) satisfies NavigationItemModel[];
}

function mapPlaceholder(
  settings: Map<string, string>,
  candidates: string[],
  key: "about" | "contest" | "jobs",
  fallback: PlaceholderPageModel,
) {
  return {
    eyebrow: getStringSetting(
      settings,
      `landing.page.${key}.eyebrow`,
      candidates,
      fallback.eyebrow,
    ),
    title: getStringSetting(
      settings,
      `landing.page.${key}.title`,
      candidates,
      fallback.title,
    ),
    body: getStringSetting(
      settings,
      `landing.page.${key}.body`,
      candidates,
      fallback.body,
    ),
  };
}

export function mapLandingContent(
  payload?: PublicLandingContentDto | null,
  options?: {
    requestedLanguageCode?: string;
  },
): LandingContentModel {
  const availableLanguages = payload?.languages
    ?.map(mapPublicLanguage)
    .filter((language): language is SiteLanguageModel => Boolean(language)) || [];
  const defaultLanguage = mapPublicLanguage(payload?.defaultLanguage) || buildFallbackLanguage();
  const selectedLanguage = mapPublicLanguage(payload?.selectedLanguage)
    || buildFallbackLanguage(options?.requestedLanguageCode || defaultLanguage.languageCode);

  const fallbackContent = createFallbackLandingContent(
    selectedLanguage.languageCode,
    defaultLanguage.languageCode,
    availableLanguages.length > 0 ? availableLanguages : undefined,
  );

  if (!payload) {
    return fallbackContent;
  }

  const settings = toSettingsMap(payload.settings);
  const candidates = getLanguageResolutionCandidates(
    selectedLanguage.languageCode,
    defaultLanguage.languageCode,
  );

  return {
    language: {
      available:
        availableLanguages.length > 0
          ? dedupeLanguages(availableLanguages)
          : fallbackContent.language.available,
      selected: selectedLanguage,
      default: defaultLanguage,
    },
    navigation: mapNavigation(settings, candidates, fallbackContent),
    hero: {
      title: getStringSetting(
        settings,
        "landing.hero.title",
        candidates,
        fallbackContent.hero.title,
      ),
      subtitle: getStringSetting(
        settings,
        "landing.hero.subtitle",
        candidates,
        fallbackContent.hero.subtitle,
      ),
      appStoreUrl: getStringSetting(
        settings,
        "landing.hero.appstoreurl",
        candidates,
        fallbackContent.hero.appStoreUrl,
      ),
      playStoreUrl: getStringSetting(
        settings,
        "landing.hero.playstoreurl",
        candidates,
        fallbackContent.hero.playStoreUrl,
      ),
      videoUrl: getSettingValue(settings, "landing.hero.videourl", candidates) || undefined,
      galleryImages: toGalleryImages(
        getSettingValue(settings, "landing.hero.galleryimages", candidates),
      ),
    },
    reviews: {
      title: getStringSetting(
        settings,
        "landing.reviews.title",
        candidates,
        fallbackContent.reviews.title,
      ),
      totalLabel: getStringSetting(
        settings,
        "landing.reviews.totallabel",
        candidates,
        fallbackContent.reviews.totalLabel,
      ),
      countLabelTemplate: getStringSetting(
        settings,
        "landing.reviews.countlabeltemplate",
        candidates,
        fallbackContent.reviews.countLabelTemplate,
      ),
      pageTitle: getStringSetting(
        settings,
        "landing.reviews.pagetitle",
        candidates,
        fallbackContent.reviews.pageTitle,
      ),
      metrics: mapMetrics(settings, candidates, fallbackContent),
    },
    help: {
      title: getStringSetting(
        settings,
        "landing.help.title",
        candidates,
        fallbackContent.help.title,
      ),
      searchPlaceholder: getStringSetting(
        settings,
        "landing.help.searchplaceholder",
        candidates,
        fallbackContent.help.searchPlaceholder,
      ),
      searchSrLabel: getStringSetting(
        settings,
        "landing.help.searchsrlabel",
        candidates,
        fallbackContent.help.searchSrLabel,
      ),
      emptyStateLabel: getStringSetting(
        settings,
        "landing.help.emptystatelabel",
        candidates,
        fallbackContent.help.emptyStateLabel,
      ),
    },
    footer: {
      leftText: getStringSetting(
        settings,
        "landing.footer.lefttext",
        candidates,
        fallbackContent.footer.leftText,
      ),
      rightText: getStringSetting(
        settings,
        "landing.footer.righttext",
        candidates,
        fallbackContent.footer.rightText,
      ),
    },
    placeholders: {
      about: mapPlaceholder(
        settings,
        candidates,
        "about",
        fallbackContent.placeholders.about,
      ),
      contest: mapPlaceholder(
        settings,
        candidates,
        "contest",
        fallbackContent.placeholders.contest,
      ),
      jobs: mapPlaceholder(
        settings,
        candidates,
        "jobs",
        fallbackContent.placeholders.jobs,
      ),
    },
    ui: {
      homeAriaLabel: getStringSetting(
        settings,
        "landing.ui.homearialabel",
        candidates,
        fallbackContent.ui.homeAriaLabel,
      ),
      openMenuLabel: getStringSetting(
        settings,
        "landing.ui.openmenulabel",
        candidates,
        fallbackContent.ui.openMenuLabel,
      ),
      closeMenuLabel: getStringSetting(
        settings,
        "landing.ui.closemenulabel",
        candidates,
        fallbackContent.ui.closeMenuLabel,
      ),
      languageSelectorLabel: getStringSetting(
        settings,
        "landing.ui.languageselectorlabel",
        candidates,
        fallbackContent.ui.languageSelectorLabel,
      ),
      paginationAriaLabel: getStringSetting(
        settings,
        "landing.ui.paginationarialabel",
        candidates,
        fallbackContent.ui.paginationAriaLabel,
      ),
      paginationPreviousLabel: getStringSetting(
        settings,
        "landing.ui.paginationpreviouslabel",
        candidates,
        fallbackContent.ui.paginationPreviousLabel,
      ),
      paginationNextLabel: getStringSetting(
        settings,
        "landing.ui.paginationnextlabel",
        candidates,
        fallbackContent.ui.paginationNextLabel,
      ),
    },
    faqs:
      payload.faqs.length > 0
        ? [...payload.faqs]
            .sort((left, right) => left.order - right.order)
            .map(normalizeFaq)
        : fallbackContent.faqs,
  };
}

function normalizeLocationLabel(address?: string | null) {
  if (!address || !address.trim()) {
    return "Worldwide";
  }

  const segments = address
    .split(",")
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (segments.length === 0) {
    return "Worldwide";
  }

  return segments[segments.length - 1];
}

function toFlagAsset(locationLabel: string) {
  const normalized = locationLabel.trim().toLowerCase();

  for (const [country, asset] of Object.entries(COUNTRY_FLAG_MAP)) {
    if (normalized.includes(country)) {
      return asset;
    }
  }

  return {
    src: "/landing/flags/world.svg",
    alt: "World location",
  };
}

function formatDateLabel(value: string, languageCode?: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  try {
    return new Intl.DateTimeFormat(languageCode || "en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }
}

function mapSingleTestimonial(
  testimonial: PublicTestimonialDto,
  index: number,
  languageCode?: string,
): TestimonialModel {
  const fallback = FALLBACK_TESTIMONIALS[index % FALLBACK_TESTIMONIALS.length];
  const locationLabel = normalizeLocationLabel(testimonial.reviewer.address);
  const resolvedLocation = locationLabel === "Worldwide"
    ? fallback.reviewer.locationLabel
    : locationLabel;
  const resolvedFlag = toFlagAsset(resolvedLocation);

  return {
    id: testimonial.id,
    propertyId: testimonial.propertyId,
    rating: Math.max(1, Math.min(5, testimonial.rating || fallback.rating)),
    review: testimonial.review?.trim() || fallback.review,
    createdAt: testimonial.createdAt,
    createdLabel:
      formatDateLabel(testimonial.createdAt, languageCode)
      || formatDateLabel(fallback.createdAt, languageCode),
    reviewer: {
      userId: testimonial.reviewer.userId || undefined,
      displayName:
        testimonial.reviewer.displayName?.trim()
        || testimonial.reviewer.userName?.trim()
        || fallback.reviewer.displayName,
      userName: testimonial.reviewer.userName || undefined,
      avatarUrl: testimonial.reviewer.avatarUrl?.trim() || fallback.reviewer.avatarUrl,
      locationLabel: resolvedLocation,
      flagSrc: resolvedFlag.src,
      flagAlt: resolvedFlag.alt,
      profileType: testimonial.reviewer.profileType || undefined,
    },
  };
}

function localizeFallbackTestimonial(
  testimonial: TestimonialModel,
  languageCode?: string,
): TestimonialModel {
  return {
    ...testimonial,
    createdLabel: formatDateLabel(testimonial.createdAt, languageCode),
  };
}

function sliceFallbackTestimonials(
  page: number,
  pageSize: number,
  languageCode?: string,
): TestimonialsModel {
  const safePageSize = Math.max(1, pageSize);
  const safePage = Math.max(1, page);
  const total = FALLBACK_TESTIMONIALS.length;
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const normalizedPage = Math.min(safePage, totalPages);
  const startIndex = (normalizedPage - 1) * safePageSize;

  return {
    page: normalizedPage,
    pageSize: safePageSize,
    total,
    totalPages,
    averageRating: 4.8,
    data: FALLBACK_TESTIMONIALS
      .slice(startIndex, startIndex + safePageSize)
      .map((testimonial) => localizeFallbackTestimonial(testimonial, languageCode)),
    isFallback: true,
  };
}

export function mapTestimonials(
  payload: PublicTestimonialsResponseDto | null | undefined,
  options: { page: number; pageSize: number; languageCode?: string },
): TestimonialsModel {
  if (!payload || payload.data.length === 0) {
    return sliceFallbackTestimonials(options.page, options.pageSize, options.languageCode);
  }

  const pageSize = Math.max(1, payload.pageSize || options.pageSize);
  const totalPages = Math.max(1, Math.ceil((payload.total || payload.data.length) / pageSize));
  const mappedData = payload.data.map((testimonial, index) =>
    mapSingleTestimonial(testimonial, index, options.languageCode));

  if (mappedData.length === 0) {
    return sliceFallbackTestimonials(options.page, options.pageSize, options.languageCode);
  }

  return {
    page: Math.min(Math.max(1, payload.page || options.page), totalPages),
    pageSize,
    total: Math.max(payload.total || mappedData.length, mappedData.length),
    totalPages,
    averageRating:
      payload.averageRating && payload.averageRating > 0 ? payload.averageRating : 4.8,
    data: mappedData,
    isFallback: false,
  };
}

export function formatReviewCountLabel(
  total: number,
  configuredLabel: string,
  template?: string,
) {
  if (total <= 0) {
    return configuredLabel;
  }

  const resolvedTemplate = template?.trim();
  if (!resolvedTemplate) {
    return `${total} Reviews`;
  }

  return resolvedTemplate.includes("{count}")
    ? resolvedTemplate.replaceAll("{count}", String(total))
    : `${total} ${resolvedTemplate}`;
}
