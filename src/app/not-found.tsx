import Link from "next/link";

export default function NotFound() {
  return (
    <div className="marketing-shell">
      <main className="marketing-main">
        <section className="marketing-placeholder" style={{ paddingTop: "80px" }}>
          <div className="marketing-placeholder__card">
            <p className="marketing-placeholder__eyebrow">Not Found</p>
            <h1 className="marketing-placeholder__title">
              We could not find that public page.
            </h1>
            <div className="marketing-placeholder__body">
              The route may have moved while this temporary landing site is still
              being polished. Head back to the homepage and continue from there.
            </div>
            <div>
              <Link href="/" className="marketing-store-badge">
                <span className="marketing-store-badge__copy">
                  <span className="marketing-store-badge__eyebrow">Return</span>
                  <span className="marketing-store-badge__label">Back to Home</span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
