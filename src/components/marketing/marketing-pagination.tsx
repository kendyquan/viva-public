"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface BasePaginationProps {
  currentPage: number;
  totalPages: number;
  pageParamName?: string;
  ariaLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
}

interface LinkPaginationProps extends BasePaginationProps {
  onChange?: never;
}

interface ControlledPaginationProps extends BasePaginationProps {
  onChange: (page: number) => void;
}

type MarketingPaginationProps = LinkPaginationProps | ControlledPaginationProps;

function getVisiblePages(currentPage: number, totalPages: number) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, 5];
  }

  if (currentPage >= totalPages - 2) {
    return [
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
  ];
}

interface PaginationLayoutProps {
  currentPage: number;
  totalPages: number;
  ariaLabel?: string;
  renderControl: (page: number, type: "number" | "arrow") => React.ReactNode;
}

function PaginationLayout({
  currentPage,
  totalPages,
  ariaLabel = "Pagination",
  renderControl,
}: PaginationLayoutProps) {
  if (totalPages <= 1) {
    return null;
  }

  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));
  const pages = getVisiblePages(safeCurrentPage, totalPages);

  return (
    <nav
      className="marketing-pagination"
      aria-label={ariaLabel}
    >
      {renderControl(safeCurrentPage - 1, "arrow")}

      {pages.map((page, index) => (
        <div key={page} style={{ display: "contents" }}>
          {index > 0 ? (
            <span
              className="marketing-pagination__divider"
              aria-hidden="true"
            >
              |
            </span>
          ) : null}
          {renderControl(page, "number")}
        </div>
      ))}

      {renderControl(safeCurrentPage + 1, "arrow")}
    </nav>
  );
}

function resolveArrowLabel(
  page: number,
  currentPage: number,
  previousLabel: string,
  nextLabel: string,
) {
  return page < currentPage ? previousLabel : nextLabel;
}

function ControlledMarketingPagination({
  currentPage,
  totalPages,
  onChange,
  ariaLabel,
  previousLabel = "Previous page",
  nextLabel = "Next page",
}: ControlledPaginationProps) {
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  return (
    <PaginationLayout
      currentPage={safeCurrentPage}
      totalPages={totalPages}
      ariaLabel={ariaLabel}
      renderControl={(page, type) => {
        const isCurrent = page === safeCurrentPage;
        const isDisabled = page < 1 || page > totalPages;
        const className = type === "arrow"
          ? "marketing-pagination__arrow"
          : [
              "marketing-pagination__number",
              isCurrent ? "marketing-pagination__number--current" : "",
            ]
              .filter(Boolean)
              .join(" ");

        return (
          <button
            key={`${type}-${page}`}
            type="button"
            className={className}
            onClick={() => onChange(page)}
            aria-current={isCurrent ? "page" : undefined}
            aria-disabled={isDisabled}
            aria-label={
              type === "arrow"
                ? resolveArrowLabel(page, safeCurrentPage, previousLabel, nextLabel)
                : undefined
            }
            disabled={isDisabled}
          >
            {type === "arrow" ? (page < safeCurrentPage ? "<" : ">") : page}
          </button>
        );
      }}
    />
  );
}

function LinkMarketingPagination({
  currentPage,
  totalPages,
  pageParamName = "page",
  ariaLabel,
  previousLabel = "Previous page",
  nextLabel = "Next page",
}: LinkPaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const safeCurrentPage = Math.max(1, Math.min(currentPage, totalPages));

  const buildHref = (page: number) => {
    const nextSearch = new URLSearchParams(searchParams.toString());

    if (page === 1) {
      nextSearch.delete(pageParamName);
    } else {
      nextSearch.set(pageParamName, String(page));
    }

    const queryString = nextSearch.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  return (
    <PaginationLayout
      currentPage={safeCurrentPage}
      totalPages={totalPages}
      ariaLabel={ariaLabel}
      renderControl={(page, type) => {
        const isCurrent = page === safeCurrentPage;
        const isDisabled = page < 1 || page > totalPages;
        const className = type === "arrow"
          ? "marketing-pagination__arrow"
          : [
              "marketing-pagination__number",
              isCurrent ? "marketing-pagination__number--current" : "",
            ]
              .filter(Boolean)
              .join(" ");
        const content = type === "arrow"
          ? page < safeCurrentPage ? "<" : ">"
          : page;
        const ariaLabelForControl = type === "arrow"
          ? resolveArrowLabel(page, safeCurrentPage, previousLabel, nextLabel)
          : undefined;

        if (isDisabled) {
          return (
            <span
              key={`${type}-${page}`}
              className={className}
              aria-disabled="true"
              aria-label={ariaLabelForControl}
            >
              {content}
            </span>
          );
        }

        return (
          <Link
            key={`${type}-${page}`}
            href={buildHref(page)}
            className={className}
            aria-current={isCurrent ? "page" : undefined}
            aria-label={ariaLabelForControl}
          >
            {content}
          </Link>
        );
      }}
    />
  );
}

export function MarketingPagination(props: MarketingPaginationProps) {
  if ("onChange" in props && props.onChange) {
    return <ControlledMarketingPagination {...props} />;
  }

  return <LinkMarketingPagination {...props} />;
}
