"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { publicApi } from "@/lib/api";

const PAGE_SIZE = 5;

const FALLBACK_FAQS = [
  {
    id: 'f1', question: "Why is my credit card getting declined?", category: 'landing',
    answer: "Credit cards can be declined for a number of reasons. FIVIVA generally isn't notified of the specific reason.\n\nCheck that you're entering your credit card number and billing address correctly, that your card has available funds, and that your card hasn't expired.\n\nIf you're getting an error when you try to pay, we recommend reaching out to your bank or credit card company for more information.",
  },
  { id: 'f2', question: "How do I edit or remove my payment method?", category: 'landing', answer: "Go to Account → Payment Methods. Tap Edit next to the card you want to change, or tap Remove to delete it. You need at least one payment method on file to make bookings." },
  { id: 'f3', question: "Should I book if I have not heard back from the host?", category: 'landing', answer: "If a listing is set to Instant Book, you can book without waiting for the host to respond. For other listings, we recommend waiting for a response before booking. Most hosts reply within 24 hours." },
  { id: 'f4', question: "How is the price determined for my reservation?", category: 'landing', answer: "The total price includes the nightly rate set by the host, a FIVIVA service fee, and any applicable taxes. Some hosts also charge cleaning fees or extra guest fees. All charges are shown before you confirm the booking." },
  { id: 'f5', question: "What does it mean if a host pre-approves me?", category: 'landing', answer: "A pre-approval means the host has reviewed your request and is willing to accept your booking. You still need to confirm and pay within 24 hours, otherwise the pre-approval expires." },
  { id: 'f6', question: "Can I use more than one payment method to pay for a reservation?", category: 'landing', answer: "Currently FIVIVA supports one payment method per reservation. You can use travel credits or coupons alongside a payment method, but you cannot split payment across two cards." },
  { id: 'f7', question: "What should I do if I think someone has logged into my account?", category: 'landing', answer: "Change your password immediately from Account → Security. Enable two-factor authentication if you haven't already. Review your recent bookings and payment activity, and contact FIVIVA support if you see anything suspicious." },
  { id: 'f8', question: "How can I make my password strong?", category: 'landing', answer: "Use at least 12 characters combining uppercase, lowercase, numbers, and symbols. Avoid using personal info like your name or birthday. Use a unique password for FIVIVA — don't reuse passwords from other sites." },
];

function FaqItem({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  useEffect(() => { setOpen(defaultOpen); }, [defaultOpen]);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden mb-3 shadow-sm">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm font-medium text-gray-800">{question}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-lg"
          style={{
            background: "#00AEEF",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <div className="border-t border-gray-100 pt-4 text-sm text-gray-600 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (page <= 4) return [1, 2, 3, 4, 5, '…', totalPages];
    if (page >= totalPages - 3) return [1, '…', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    return [1, '…', page - 1, page, page + 1, '…', totalPages];
  };

  const btnBase = "w-9 h-9 rounded-full text-sm font-medium transition-colors flex items-center justify-center";

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${btnBase} border border-gray-200 text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        ‹
      </button>

      {getPages().map((p, i) =>
        p === '…' ? (
          <span key={`ellipsis-${i}`} className="w-9 text-center text-gray-400 text-sm">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`${btnBase} ${p === page ? "text-white" : "border border-gray-200 text-gray-600 hover:border-[#00AEEF] hover:text-[#00AEEF]"}`}
            style={p === page ? { background: "#00AEEF" } : {}}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={`${btnBase} border border-gray-200 text-gray-500 hover:border-[#00AEEF] hover:text-[#00AEEF] disabled:opacity-30 disabled:cursor-not-allowed`}
      >
        ›
      </button>
    </div>
  );
}

export default function HelpPage() {
  const { t, lang } = useLang();
  const [search, setSearch] = useState("");
  const [faqs, setFaqs] = useState(FALLBACK_FAQS);
  const [page, setPage] = useState(1);

  useEffect(() => {
    publicApi.getFaqs(lang)
      .then((data) => { if (data?.length) setFaqs(data); })
      .catch(() => {});
  }, [lang]);

  // Reset to page 1 when search or language changes
  useEffect(() => { setPage(1); }, [search, lang]);

  const filtered = faqs.filter((f) =>
    f.question.toLowerCase().includes(search.toLowerCase()) ||
    f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      {/* Blue hero */}
      <section
        className="py-12 sm:py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #00AEEF 0%, #0090C5 100%)" }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 px-4">{t.help.hero_title}</h1>

        {/* Search box — clean white on blue */}
        <div className="max-w-lg mx-auto px-4">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex items-center">
            <svg
              className="absolute left-4 w-5 h-5 flex-shrink-0 pointer-events-none"
              style={{ color: "#00AEEF" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              placeholder={t.help.search_placeholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-800 placeholder-gray-400 text-sm bg-transparent focus:outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors text-gray-500 text-xs font-bold flex-shrink-0"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-sm">{t.help.no_results} &ldquo;{search}&rdquo;</p>
          </div>
        ) : (
          <>
            {paginated.map((faq, i) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={i === 0 && page === 1 && !search}
              />
            ))}

            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </>
        )}
      </section>

      {/* Still need help */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t.help.still_need}</h2>
          <p className="text-gray-500 mb-6 text-sm">{t.help.still_sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@fiviva.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: "#00AEEF" }}
            >
              📧 {t.help.email_btn}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2"
              style={{ borderColor: "#00AEEF", color: "#00AEEF" }}
            >
              💬 {t.help.chat_btn}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
