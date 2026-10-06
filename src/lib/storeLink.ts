import type React from 'react';

// QA #98/#99: with no store URL configured the buttons used href="#", so
// pressing "Download" just jumped back to the top of the page. A store button
// with nowhere to go is shown dimmed and does nothing instead.
export const isLiveUrl = (url?: string) => !!url && /^https?:\/\//i.test(url.trim());

export function storeLink(url?: string) {
  return isLiveUrl(url)
    ? { href: url!.trim() }
    : { "aria-disabled": true as const, onClick: (e: React.MouseEvent) => e.preventDefault() };
}

export const storeState = (url?: string) => (isLiveUrl(url) ? "" : " opacity-50 cursor-not-allowed");
