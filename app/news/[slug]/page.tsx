import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import sanitizeHtml from "sanitize-html";
import { getArticleBySlug, getAllSlugs, SITE_URL } from "@/lib/articles";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/news/${article.slug}`,
      publishedTime: article.dateISO,
      siteName: "LIQUE Miami",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
    alternates: {
      canonical: `${SITE_URL}/news/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    url: `${SITE_URL}/news/${article.slug}`,
    publisher: {
      "@type": "Organization",
      name: "LIQUE Miami",
      url: SITE_URL,
    },
    author: {
      "@type": "Organization",
      name: "LIQUE Miami",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="article-section">
        <div className="article-container">
          <Link href="/" className="article-back">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All News
          </Link>

          <time className="article-meta-date" dateTime={article.dateISO}>
            {article.date}
          </time>
          <div className="article-meta-venue">{article.venue}</div>

          <h1 className="article-title">{article.title}</h1>

          <div
            className="article-body"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(article.content, {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                  "h1", "h2", "h3", "h4", "h5", "h6", "img",
                ]),
                allowedAttributes: {
                  ...sanitizeHtml.defaults.allowedAttributes,
                  img: ["src", "alt", "width", "height"],
                  a: ["href", "title", "target", "rel"],
                },
                allowedSchemes: ["https", "http", "mailto"],
              }),
            }}
          />

          <div className="lique-cta-block">
            <div className="lique-cta-header">
              <span className="lique-cta-label">Experience It Live</span>
              <h3 className="lique-cta-title">LIQUE Miami</h3>
              <p className="lique-cta-sub">Waterfront restaurant &amp; nightclub · North Miami Beach</p>
            </div>
            <div className="lique-cta-links">
              <a
                href="https://lique-miami-present-production.up.railway.app/#contact"
                target="_blank"
                rel="noopener noreferrer"
                className="lique-cta-btn lique-cta-btn--primary"
              >
                Reserve a Table
              </a>
              <a
                href="https://lique.tripleseat.com/party_request/42471"
                target="_blank"
                rel="noopener noreferrer"
                className="lique-cta-btn lique-cta-btn--secondary"
              >
                Book Private Event
              </a>
              <a
                href="https://lique-miami-present-production.up.railway.app/#menu"
                target="_blank"
                rel="noopener noreferrer"
                className="lique-cta-btn lique-cta-btn--outline"
              >
                View Menu
              </a>
            </div>
            <div className="lique-cta-info">
              <a
                href="https://maps.google.com/?q=3957+NE+163rd+St,+North+Miami+Beach,+FL+33160"
                target="_blank"
                rel="noopener noreferrer"
                className="lique-cta-address"
              >
                3957 NE 163rd St, North Miami Beach
              </a>
              <span>+1 (305) 705-2425</span>
              <span>Fri–Sat open until 2 AM</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
