import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Nile Fish | Premium Frozen Seafood — UAE's Finest Since 1981",
  description:
    "Al Nile Fish — premium frozen seafood import & export from Umm Al Quwain, UAE since 1981. Serving Qatar, Oman, Kuwait, KSA & beyond. HACCP & ISO certified.",
  keywords: [
    "frozen seafood UAE",
    "premium fish",
    "seafood export",
    "seafood import",
    "Nile Perch",
    "Tilapia",
    "Gulf seafood",
    "HACCP certified",
    "ISO certified",
    "Al Nile Fish",
    "Umm Al Quwain",
    "GCC seafood supplier",
  ],
  openGraph: {
    title: "Al Nile Fish | Premium Frozen Seafood",
    description:
      "UAE's finest frozen seafood since 1981. Serving the Gulf region and beyond. Nile Perch, Tilapia, Shellfish & more.",
    type: "website",
    locale: "en_US",
    siteName: "Al Nile Fish",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
