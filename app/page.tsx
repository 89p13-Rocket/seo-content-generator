import Link from "next/link";
import { getArticles, SITE_URL } from "@/lib/articles";

export const revalidate = 60;

export default async function HomePage() {
  const articles = await getArticles();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "LIQUE Miami — News & Stories",
    description:
      "Latest news, events, and stories from LIQUE Miami — Miami's premier waterfront restaurant and nightlife lounge.",
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "LIQUE Miami",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((article, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/news/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="news-section">
        <div className="container">
          <div className="news-grid">
            {articles.map((article) => (
              <article key={article.slug} className="news-card">
                <div className="news-card-body">
                  <time className="news-card-date" dateTime={article.dateISO}>
                    {article.date}
                  </time>
                  <span className="news-card-venue">{article.venue}</span>
                  <h2 className="news-card-title">{article.title}</h2>
                  <p className="news-card-desc">{article.description}</p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="news-card-link"
                  >
                    Read More
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
