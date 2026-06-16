const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://af9mjwtqy9.execute-api.ap-southeast-1.amazonaws.com';

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

export type AboutContent = {
  heroTitle: string;
  heroSubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  valuesSectionTitle: string;
  teamSectionTitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
};

export type AboutValue = {
  id: string;
  valueKey: string;
  emoji: string;
  sortOrder: number;
  title: string;
  description: string;
};

export type AboutTeamMember = {
  id: string;
  name: string;
  role: string;
  emoji: string;
  order: number;
};

export type PublicAbout = {
  content: AboutContent;
  values: AboutValue[];
  team: AboutTeamMember[];
};

export const publicApi = {
  getGallery: () => apiFetch<{ id: string; url: string; order: number }[]>('/admin/v1/public/landing/gallery'),
  getConfig: () => apiFetch<{ appStoreUrl: string; playStoreUrl: string; heroTitle: string; heroSubtitle: string }>('/admin/v1/public/landing/config'),
  getTeam: () => apiFetch<{ id: string; name: string; role: string; emoji: string; order: number }[]>('/admin/v1/public/landing/team-members'),
  getStats: () => apiFetch<{ activeListings: string; registeredUsers: string; countries: string; appRating: string }>('/admin/v1/public/landing/stats'),
  getContest: (lang = 'en') => apiFetch<{ settings: { title: string; description: string; deadline: string; isActive: boolean }; prizes: { id: string; rank: number; label: string; value: string }[]; leaderboard: { id: string; rank: number; name: string; city: string; listings: number; score: number }[] }>(`/admin/v1/public/landing/contest?languageCode=${lang}`),
  registerContest: (email: string, name?: string) => apiFetch<void>('/admin/v1/public/landing/contest/register', { method: 'POST', body: JSON.stringify({ email, name }) }),
  getReviews: (lang = 'en', limit?: number) =>
    apiFetch<{ reviews: { id: string; name: string; country: string; flag: string; date: string; score: number; text: string }[]; ratingCategories: { id: string; label: string; score: number; sortOrder: number }[] }>(`/admin/v1/public/landing/reviews?languageCode=${lang}`)
      .then((res) => ({
        reviews: limit !== undefined ? (res.reviews ?? []).slice(0, limit) : (res.reviews ?? []),
        ratingCategories: res.ratingCategories ?? [],
      })),
  getFaqs: (lang = 'en') =>
    apiFetch<{ faqs: { id: string; question: string; answer: string; keyword?: string; order: number; category: string }[] }>(
      `/admin/v1/public/landing/content?faqCategory=landing&languageCode=${lang}`
    ).then((res) => res.faqs ?? []),
  getAbout: (lang = 'en') => apiFetch<PublicAbout>(`/admin/v1/public/about?lang=${lang}`),
};
