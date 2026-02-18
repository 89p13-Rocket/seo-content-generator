import Link from "next/link";

export default function NotFound() {
  return (
    <section className="article-section">
      <div className="article-container">
        <h1 className="article-title">Article Not Found</h1>
        <p className="article-desc">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link href="/" className="article-back">
          Back to News
        </Link>
      </div>
    </section>
  );
}
