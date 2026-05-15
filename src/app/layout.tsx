import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Nile Fish | Premium Fresh Seafood Import & Export — UAE's Finest Since 1981",
  description:
    "Al Nile Fish — premium fresh seafood import & export from Umm Al Quwain, UAE since 1981. Importing from Russia, Pakistan, Sri Lanka. Serving Qatar, Oman, Kuwait, KSA & beyond. HACCP & ISO certified.",
  keywords: [
    "fresh seafood UAE",
    "premium fish",
    "seafood export",
    "seafood import",
    "Russia seafood import",
    "Pakistan seafood",
    "Sri Lanka seafood",
    "Nile Perch",
    "Tilapia",
    "Gulf seafood",
    "HACCP certified",
    "ISO certified",
    "Al Nile Fish",
    "Umm Al Quwain",
    "GCC seafood supplier",
  ],
  metadataBase: new URL("https://alnilefish.com"),
  openGraph: {
    title: "Al Nile Fish | Premium Fresh Seafood Import & Export",
    description:
      "UAE's finest fresh seafood since 1981. Sourcing from Pakistan, India, Sri Lanka & Oman. Exporting to Russia, Europe & all GCC countries.",
    type: "website",
    locale: "en_US",
    siteName: "Al Nile Fish",
    url: "https://alnilefish.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Nile Fish | Premium Fresh Seafood Import & Export",
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
