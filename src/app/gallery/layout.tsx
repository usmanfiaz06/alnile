import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — Fresh Seafood Products & Facilities",
  description:
    "Browse Al Nile Fish's gallery of premium fresh seafood products, processing facilities, and sourcing operations. Fresh fish, tiger prawns, lobster, shellfish and more from Umm Al Quwain, UAE.",
  openGraph: {
    title: "Gallery | Al Nile Fish — Premium Seafood Products",
    description:
      "Browse our collection of premium fresh seafood products, processing facilities, and sourcing operations.",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
