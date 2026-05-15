import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Al Nile Fish | Premium Fresh Seafood Import & Export — UAE Since 1981",
    template: "%s | Al Nile Fish",
  },
  description:
    "Al Nile Fish — premium fresh seafood import & export company in Umm Al Quwain, UAE since 1981. We source fresh fish, frozen fish, live seafood, shellfish & crustaceans from Pakistan, India, Sri Lanka & Oman. HACCP, ISO 22000, EU Approved & GMP certified. Exporting to Russia, Europe, Qatar, Kuwait, Bahrain, Saudi Arabia & all GCC countries.",
  keywords: [
    "fresh seafood UAE",
    "seafood supplier UAE",
    "fish export company UAE",
    "seafood import export",
    "fresh fish supplier Dubai",
    "fresh fish Umm Al Quwain",
    "seafood wholesaler UAE",
    "bulk seafood supplier GCC",
    "fish export Qatar",
    "fish export Kuwait",
    "fish export Saudi Arabia",
    "fish export Bahrain",
    "seafood export Russia",
    "seafood export Europe",
    "Pakistan seafood import",
    "India seafood import",
    "Sri Lanka seafood import",
    "Oman seafood import",
    "fresh fish wholesale",
    "frozen fish supplier",
    "live seafood supplier",
    "shellfish supplier UAE",
    "tiger prawns supplier",
    "shrimp export UAE",
    "lobster supplier Gulf",
    "Nile Perch supplier",
    "Tilapia supplier",
    "HACCP certified seafood",
    "ISO 22000 fish company",
    "EU approved seafood exporter",
    "GMP certified fish",
    "Al Nile Fish",
    "Al Nile Import Export",
    "premium seafood Gulf",
    "GCC seafood supplier",
    "seafood company Umm Al Quwain",
    "fish trading company UAE",
    "مأكولات بحرية الإمارات",
    "أسماك طازجة",
    "تصدير أسماك",
    "النيل للأسماك",
  ],
  metadataBase: new URL("https://alnilefish.com"),
  alternates: {
    canonical: "https://alnilefish.com",
    languages: {
      "en": "https://alnilefish.com",
      "ar": "https://alnilefish.com",
    },
  },
  openGraph: {
    title: "Al Nile Fish | Premium Fresh Seafood Import & Export — UAE",
    description:
      "UAE's finest fresh seafood since 1981. Sourcing from Pakistan, India, Sri Lanka & Oman. Exporting to Russia, Europe, Qatar, Kuwait, Bahrain, KSA & all GCC countries. HACCP & ISO certified.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_AE",
    siteName: "Al Nile Fish",
    url: "https://alnilefish.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Nile Fish | Premium Fresh Seafood Import & Export — UAE",
    description:
      "UAE's finest fresh seafood since 1981. Sourcing from Pakistan, India, Sri Lanka & Oman. Exporting to Russia, Europe & all GCC countries.",
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
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_CODE",
  },
  category: "food & drink",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://alnilefish.com/#organization",
      name: "Al Nile Import & Export of Fish & Foodstuff",
      alternateName: ["Al Nile Fish", "النيل للأسماك", "Al Nile Import Export"],
      url: "https://alnilefish.com",
      logo: "https://alnilefish.com/opengraph-image",
      description: "Premium fresh seafood import & export company based in Umm Al Quwain, UAE since 1981. HACCP, ISO 22000, EU Approved & GMP certified.",
      foundingDate: "1981",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ittahad Road",
        addressLocality: "Umm Al Quwain",
        addressRegion: "Umm Al Quwain",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.5647,
        longitude: 55.5553,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+971-50-921-3535",
          contactType: "sales",
          email: "nfc@alnilefish.com",
          areaServed: ["AE", "QA", "KW", "BH", "SA", "OM", "RU", "EU"],
          availableLanguage: ["English", "Arabic"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+971-50-921-3535",
          contactType: "customer service",
          email: "info@alnilefish.com",
          availableLanguage: ["English", "Arabic"],
        },
      ],
      sameAs: [],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "HACCP Certification" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "ISO 22000 Certification" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "EU Approved Exporter" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "GMP Certification" },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alnilefish.com/#localbusiness",
      name: "Al Nile Fish",
      image: "https://alnilefish.com/opengraph-image",
      url: "https://alnilefish.com",
      telephone: "+971-50-921-3535",
      email: "nfc@alnilefish.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ittahad Road",
        addressLocality: "Umm Al Quwain",
        addressRegion: "Umm Al Quwain",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 25.5647,
        longitude: 55.5553,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Kuwait" },
        { "@type": "Country", name: "Bahrain" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Oman" },
        { "@type": "Country", name: "Russia" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://alnilefish.com/#website",
      url: "https://alnilefish.com",
      name: "Al Nile Fish",
      publisher: { "@id": "https://alnilefish.com/#organization" },
      inLanguage: ["en", "ar"],
    },
    {
      "@type": "WebPage",
      "@id": "https://alnilefish.com/#webpage",
      url: "https://alnilefish.com",
      name: "Al Nile Fish | Premium Fresh Seafood Import & Export — UAE Since 1981",
      isPartOf: { "@id": "https://alnilefish.com/#website" },
      about: { "@id": "https://alnilefish.com/#organization" },
      description: "Premium fresh seafood import & export from Umm Al Quwain, UAE. Fresh fish, frozen fish, live seafood, shellfish & crustaceans. Serving GCC, Russia & Europe.",
      inLanguage: ["en", "ar"],
    },
    {
      "@type": "ItemList",
      name: "Seafood Products",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Fresh Fish", description: "Premium fresh fish sourced daily from the finest waters" },
        { "@type": "ListItem", position: 2, name: "Frozen Fish", description: "Flash-frozen seafood preserving peak freshness and nutrition" },
        { "@type": "ListItem", position: 3, name: "Live Seafood", description: "Live seafood delivered with care for ultimate freshness" },
        { "@type": "ListItem", position: 4, name: "Shellfish & Crustaceans", description: "Premium shellfish including tiger prawns, lobster and crab" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&family=Noto+Sans+Arabic:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
