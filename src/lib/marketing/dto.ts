export interface PublicLandingSettingDto {
  key: string;
  value: string;
  description?: string | null;
}

export interface PublicLandingLanguageDto {
  id: string;
  name: string;
  languageCode: string;
  isDefault: boolean;
}

export interface PublicLandingFaqDto {
  id: string;
  question: string;
  answer: string;
  keyword?: string | null;
  order: number;
  category?: string | null;
}

export interface PublicLandingContentDto {
  settingsCategory: string;
  selectedLanguage?: PublicLandingLanguageDto | null;
  defaultLanguage?: PublicLandingLanguageDto | null;
  languages: PublicLandingLanguageDto[];
  settings: PublicLandingSettingDto[];
  faqs: PublicLandingFaqDto[];
}

export interface PublicReviewerDto {
  userId?: string | null;
  displayName?: string | null;
  userName?: string | null;
  avatarUrl?: string | null;
  address?: string | null;
  profileType?: string | null;
}

export interface PublicTestimonialDto {
  id: string;
  propertyId: string;
  rating: number;
  review?: string | null;
  createdAt: string;
  reviewer: PublicReviewerDto;
}

export interface PublicTestimonialsResponseDto {
  page: number;
  pageSize: number;
  total: number;
  averageRating: number;
  data: PublicTestimonialDto[];
}

export interface GalleryImageModel {
  src: string;
  alt: string;
}

export interface ReviewMetricModel {
  label: string;
  rating: number;
}

export interface NavigationItemModel {
  key: "about" | "contest" | "jobs" | "reviews" | "help";
  href: string;
  label: string;
}

export interface PlaceholderPageModel {
  eyebrow: string;
  title: string;
  body: string;
}

export interface SiteLanguageModel {
  id?: string;
  name: string;
  label: string;
  languageCode: string;
  isDefault: boolean;
  flagSrc: string;
  flagAlt: string;
}

export interface LandingFaqModel {
  id: string;
  question: string;
  answer: string;
  keyword?: string;
  order: number;
  category?: string;
}

export interface LandingContentModel {
  language: {
    available: SiteLanguageModel[];
    selected: SiteLanguageModel;
    default: SiteLanguageModel;
  };
  navigation: NavigationItemModel[];
  hero: {
    title: string;
    subtitle: string;
    appStoreUrl: string;
    playStoreUrl: string;
    videoUrl?: string;
    galleryImages: GalleryImageModel[];
  };
  reviews: {
    title: string;
    totalLabel: string;
    countLabelTemplate: string;
    pageTitle: string;
    metrics: ReviewMetricModel[];
  };
  help: {
    title: string;
    searchPlaceholder: string;
    searchSrLabel: string;
    emptyStateLabel: string;
  };
  footer: {
    leftText: string;
    rightText: string;
  };
  placeholders: {
    about: PlaceholderPageModel;
    contest: PlaceholderPageModel;
    jobs: PlaceholderPageModel;
  };
  ui: {
    homeAriaLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    languageSelectorLabel: string;
    paginationAriaLabel: string;
    paginationPreviousLabel: string;
    paginationNextLabel: string;
  };
  faqs: LandingFaqModel[];
}

export interface TestimonialModel {
  id: string;
  propertyId: string;
  rating: number;
  review: string;
  createdAt: string;
  createdLabel: string;
  reviewer: {
    userId?: string;
    displayName: string;
    userName?: string;
    avatarUrl: string;
    locationLabel: string;
    flagSrc: string;
    flagAlt: string;
    profileType?: string;
  };
}

export interface TestimonialsModel {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  averageRating: number;
  data: TestimonialModel[];
  isFallback: boolean;
}
