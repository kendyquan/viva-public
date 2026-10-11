'use client';

const SECTIONS = [
  {
    id: 'placeholder',
    heading: 'Content being updated',
    body: 'The full Terms of Use are being prepared. Please check back soon.\n\nFor questions in the meantime, contact support@fiviva.com.',
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-16 sm:py-20 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #007AA8 0%, #006C94 100%)' }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-base sm:text-lg font-medium">
            Last updated: 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          {SECTIONS.map((section) => (
            <div key={section.id}>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                {section.heading}
              </h2>
              {section.body.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-3">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
