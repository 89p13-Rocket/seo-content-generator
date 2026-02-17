import type { Metadata } from "next";
import Link from "next/link";
import { getArticleBySlug, getAllSlugs, SITE_URL } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
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
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <section className="article-section">
        <div className="article-container">
          <h1 className="article-title">Article not found</h1>
          <Link href="/" className="article-back">
            Back to News
          </Link>
        </div>
      </section>
    );
  }

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
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </section>
    </>
  );
}
