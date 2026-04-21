import type {
  GalleryImageModel,
  LandingFaqModel,
  NavigationItemModel,
  TestimonialModel,
} from "@/lib/marketing/dto";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.API_BASE_URL ||
  "https://api.dev.fiviva.ru";

export const LANDING_CONTENT_ENDPOINT = "/admin/v1/public/landing/content";
export const TESTIMONIALS_ENDPOINT = "/property/v1/public/testimonials";

export const LANDING_CONTENT_REVALIDATE_SECONDS = 60 * 60;
export const TESTIMONIALS_REVALIDATE_SECONDS = 60 * 20;

export const HOME_TESTIMONIALS_PAGE_SIZE = 3;
export const REVIEWS_TESTIMONIALS_PAGE_SIZE = 6;
export const HELP_FAQS_PAGE_SIZE = 6;

export const NAVIGATION_ROUTES: Array<Pick<NavigationItemModel, "key" | "href">> = [
  { key: "about", href: "/about" },
  { key: "contest", href: "/contest" },
  { key: "jobs", href: "/jobs" },
  { key: "reviews", href: "/reviews" },
  { key: "help", href: "/help" },
];

export const FALLBACK_GALLERY_IMAGES: GalleryImageModel[] = [
  {
    src: "/landing/gallery-kitchen.png",
    alt: "Bright kitchen interior with a central island",
  },
  {
    src: "/landing/gallery-living.png",
    alt: "Warm living room with sunlit seating",
  },
  {
    src: "/landing/gallery-bedroom.png",
    alt: "Calm bedroom corner with simple decor",
  },
];

export const FALLBACK_TESTIMONIALS: TestimonialModel[] = [
  {
    id: "fallback-1",
    propertyId: "fallback-property-1",
    rating: 5,
    review:
      "Close to the metro and easy to move around the city. The apartment felt spotless, the check-in was smooth, and the host made the whole stay feel effortless from start to finish.",
    createdAt: "2018-02-20T00:00:00.000Z",
    createdLabel: "February 20, 2018",
    reviewer: {
      userId: "fallback-user-1",
      displayName: "Micah Ryan",
      avatarUrl: "/landing/avatar-micah.png",
      locationLabel: "United Kingdom",
      flagSrc: "/landing/flags/gb.svg",
      flagAlt: "United Kingdom flag",
    },
  },
  {
    id: "fallback-2",
    propertyId: "fallback-property-2",
    rating: 4,
    review:
      "Our family had a comfortable stay and loved the bright open kitchen. It was easy to settle in, and the neighborhood was quiet enough that we could properly relax after long days out.",
    createdAt: "2018-03-10T00:00:00.000Z",
    createdLabel: "March 10, 2018",
    reviewer: {
      userId: "fallback-user-2",
      displayName: "Alyssa",
      avatarUrl: "/landing/avatar-alyssa.png",
      locationLabel: "Belgium",
      flagSrc: "/landing/flags/be.svg",
      flagAlt: "Belgium flag",
    },
  },
  {
    id: "fallback-3",
    propertyId: "fallback-property-3",
    rating: 5,
    review:
      "Beautiful cabin, beautiful location, and a host who replied quickly whenever we had a question. The area was peaceful, scenic, and exactly what we wanted for a slower weekend away.",
    createdAt: "2018-04-16T00:00:00.000Z",
    createdLabel: "April 16, 2018",
    reviewer: {
      userId: "fallback-user-3",
      displayName: "Jasper Cole",
      avatarUrl: "/landing/avatar-jasper.png",
      locationLabel: "United States",
      flagSrc: "/landing/flags/us.svg",
      flagAlt: "United States flag",
    },
  },
  {
    id: "fallback-4",
    propertyId: "fallback-property-4",
    rating: 5,
    review:
      "The home felt even calmer in person than it looked in the photos. Great communication, smooth arrival instructions, and a layout that worked well for both work and rest.",
    createdAt: "2018-05-03T00:00:00.000Z",
    createdLabel: "May 3, 2018",
    reviewer: {
      userId: "fallback-user-4",
      displayName: "Mia Laurent",
      avatarUrl: "/landing/avatar-alyssa.png",
      locationLabel: "France",
      flagSrc: "/landing/flags/fr.svg",
      flagAlt: "France flag",
    },
  },
  {
    id: "fallback-5",
    propertyId: "fallback-property-5",
    rating: 4,
    review:
      "Everything was tidy, exactly where we expected it to be, and easy to understand. The app made the whole reservation feel simple instead of stressful.",
    createdAt: "2018-06-09T00:00:00.000Z",
    createdLabel: "June 9, 2018",
    reviewer: {
      userId: "fallback-user-5",
      displayName: "Noah Fischer",
      avatarUrl: "/landing/avatar-micah.png",
      locationLabel: "Germany",
      flagSrc: "/landing/flags/de.svg",
      flagAlt: "Germany flag",
    },
  },
  {
    id: "fallback-6",
    propertyId: "fallback-property-6",
    rating: 5,
    review:
      "The overall experience felt polished from booking to checkout. We would absolutely return, especially for how easy the support and communication felt throughout the trip.",
    createdAt: "2018-07-14T00:00:00.000Z",
    createdLabel: "July 14, 2018",
    reviewer: {
      userId: "fallback-user-6",
      displayName: "Lina Park",
      avatarUrl: "/landing/avatar-jasper.png",
      locationLabel: "Canada",
      flagSrc: "/landing/flags/ca.svg",
      flagAlt: "Canada flag",
    },
  },
];

export const FALLBACK_FAQS: LandingFaqModel[] = [
  {
    id: "faq-credit-card",
    question: "Why is my credit card getting declined?",
    answer:
      "Credit cards can be declined for many reasons, including incorrect billing details, insufficient funds, or bank-side security checks. Double-check the card number, billing address, and expiry date, then contact your bank if the issue continues.",
    order: 1,
    category: "payments",
  },
  {
    id: "faq-edit-payment",
    question: "How do I edit or remove my payment method?",
    answer:
      "Open your account settings, review the saved payment methods, and remove or update the card you no longer want to use before making a new reservation.",
    order: 2,
    category: "payments",
  },
  {
    id: "faq-host-reply",
    question: "Should I book if I have not heard back from the host?",
    answer:
      "You can wait for a reply if you need specific answers first, but if the listing details already meet your needs, booking helps reserve the stay before availability changes.",
    order: 3,
    category: "booking",
  },
  {
    id: "faq-price",
    question: "How is the price determined for my reservation?",
    answer:
      "Reservation totals can include nightly price, cleaning or service fees, taxes, and any seasonal adjustments configured on the property.",
    order: 4,
    category: "booking",
  },
  {
    id: "faq-pre-approval",
    question: "What does it mean if a host pre-approves me?",
    answer:
      "Pre-approval means the host is open to your stay and has invited you to complete the booking during the approval window.",
    order: 5,
    category: "booking",
  },
  {
    id: "faq-multiple-payments",
    question: "Can I use more than one payment method to pay for a reservation?",
    answer:
      "In most cases a reservation is paid with one saved method, although split-payment rules can vary by market or promotion.",
    order: 6,
    category: "payments",
  },
  {
    id: "faq-verification",
    question: "How do I submit my credit or debit card billing statement for payment verification?",
    answer:
      "When verification is required, follow the secure upload flow in your payment prompt and make sure the statement clearly shows your name and billing address.",
    order: 7,
    category: "payments",
  },
  {
    id: "faq-account-security",
    question: "What should I do if I think someone has logged into my account?",
    answer:
      "Change your password immediately, review recent account activity, and contact support if you notice unfamiliar bookings, messages, or profile changes.",
    order: 8,
    category: "security",
  },
  {
    id: "faq-password",
    question: "How can I make my password strong?",
    answer:
      "Use a long phrase with mixed letter cases, numbers, and symbols, and avoid reusing passwords from other apps or websites.",
    order: 9,
    category: "security",
  },
];

export const COUNTRY_FLAG_MAP: Record<string, { src: string; alt: string }> = {
  australia: { src: "/landing/flags/world.svg", alt: "Australia flag" },
  belgium: { src: "/landing/flags/be.svg", alt: "Belgium flag" },
  canada: { src: "/landing/flags/ca.svg", alt: "Canada flag" },
  china: { src: "/landing/flags/cn.svg", alt: "China flag" },
  france: { src: "/landing/flags/fr.svg", alt: "France flag" },
  germany: { src: "/landing/flags/de.svg", alt: "Germany flag" },
  italy: { src: "/landing/flags/world.svg", alt: "Italy flag" },
  japan: { src: "/landing/flags/jp.svg", alt: "Japan flag" },
  korea: { src: "/landing/flags/kr.svg", alt: "Korea flag" },
  russia: { src: "/landing/flags/ru.svg", alt: "Russia flag" },
  thailand: { src: "/landing/flags/world.svg", alt: "Thailand flag" },
  "united kingdom": { src: "/landing/flags/gb.svg", alt: "United Kingdom flag" },
  uk: { src: "/landing/flags/gb.svg", alt: "United Kingdom flag" },
  "united states": { src: "/landing/flags/us.svg", alt: "United States flag" },
  usa: { src: "/landing/flags/us.svg", alt: "United States flag" },
  vietnam: { src: "/landing/flags/vn.svg", alt: "Vietnam flag" },
};
