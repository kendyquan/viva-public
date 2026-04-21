"use client";

import { startTransition, useDeferredValue, useState } from "react";
import { HELP_FAQS_PAGE_SIZE } from "@/lib/marketing/constants";
import type { LandingFaqModel } from "@/lib/marketing/dto";
import { FaqSearch } from "@/components/marketing/faq-search";
import { MarketingPagination } from "@/components/marketing/marketing-pagination";

interface FaqAccordionProps {
  faqs: LandingFaqModel[];
  searchPlaceholder: string;
  searchSrLabel: string;
  emptyStateLabel: string;
  paginationAriaLabel: string;
  paginationPreviousLabel: string;
  paginationNextLabel: string;
}

function matchesQuery(faq: LandingFaqModel, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [faq.question, faq.answer, faq.keyword || "", faq.category || ""]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

export function FaqAccordion({
  faqs,
  searchPlaceholder,
  searchSrLabel,
  emptyStateLabel,
  paginationAriaLabel,
  paginationPreviousLabel,
  paginationNextLabel,
}: FaqAccordionProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const filteredFaqs = faqs.filter((faq) => matchesQuery(faq, normalizedQuery));
  const totalPages = Math.max(1, Math.ceil(filteredFaqs.length / HELP_FAQS_PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const startIndex = (safePage - 1) * HELP_FAQS_PAGE_SIZE;
  const paginatedFaqs = filteredFaqs.slice(
    startIndex,
    startIndex + HELP_FAQS_PAGE_SIZE,
  );
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const effectiveOpenId = paginatedFaqs.some((faq) => faq.id === openId)
    ? openId
    : (paginatedFaqs[0]?.id || null);

  return (
    <section className="marketing-faq">
      <FaqSearch
        value={query}
        placeholder={searchPlaceholder}
        srLabel={searchSrLabel}
        onChange={(nextValue) => {
          startTransition(() => {
            setQuery(nextValue);
            setPage(1);
          });
        }}
      />

      {paginatedFaqs.length === 0 ? (
        <div className="marketing-empty">
          {emptyStateLabel}
        </div>
      ) : (
        <div className="marketing-faq__items">
          {paginatedFaqs.map((faq) => {
            const isOpen = faq.id === effectiveOpenId;

            return (
              <article
                key={faq.id}
                className="marketing-faq__item"
              >
                <button
                  type="button"
                  className="marketing-faq__trigger"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="marketing-faq__icon" aria-hidden="true">
                    {isOpen ? "x" : "+"}
                  </span>
                  <span className="marketing-faq__question">{faq.question}</span>
                </button>

                {isOpen ? (
                  <div className="marketing-faq__answer">
                    {faq.answer}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}

      {filteredFaqs.length > 0 ? (
        <MarketingPagination
          currentPage={safePage}
          totalPages={totalPages}
          ariaLabel={paginationAriaLabel}
          previousLabel={paginationPreviousLabel}
          nextLabel={paginationNextLabel}
          onChange={setPage}
        />
      ) : null}
    </section>
  );
}
