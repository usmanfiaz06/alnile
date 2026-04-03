"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import GlobalReach from "@/components/GlobalReach";
import GalleryPreview from "@/components/GalleryPreview";
import Partnership from "@/components/Partnership";
import Subscribe from "@/components/Subscribe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import ContactPopup from "@/components/ContactPopup";

export default function Home() {
  return (
    <LanguageProvider>
      <Preloader />
      <Navbar />
      <ContactPopup />
      <main>
        <Hero />
        <About />
        <Products />
        <Quality />
        <GlobalReach />
        <GalleryPreview />
        <Partnership />
        <Subscribe />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
