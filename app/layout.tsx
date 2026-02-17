import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/articles";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | LIQUE Miami",
  },
  description:
    "Latest news, events, and stories from LIQUE Miami — Miami's premier waterfront restaurant and nightlife lounge in North Miami Beach.",
  keywords: [
    "LIQUE Miami",
    "Miami nightlife",
    "North Miami Beach restaurant",
    "waterfront lounge Miami",
    "Miami events",
    "Miami nightclub",
    "Miami fine dining",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Latest news, events, and stories from LIQUE Miami — Miami's premier waterfront restaurant and nightlife lounge.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Latest news, events, and stories from LIQUE Miami — Miami's premier waterfront restaurant and nightlife lounge.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <a href="/" className="nav-logo">
                Lique
              </a>
              <span className="nav-subtitle">News &amp; Stories</span>
            </div>
          </div>
        </nav>

        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-logo">Lique</div>
            <p className="footer-text">
              Miami&apos;s Premier Waterfront Restaurant &amp; Nightlife Lounge
            </p>
            <span className="footer-ai">Powered by AI</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
