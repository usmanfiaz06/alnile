"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

const categoriesData = [
  {
    id: "fresh-fish",
    name: { en: "Fresh Fish", ar: "أسماك طازجة" },
    subtitle: { en: "Whole & Dressed", ar: "كاملة ومجهزة" },
    description: {
      en: "Premium whole fresh fish sourced from pristine waters worldwide. Nile Perch, Tilapia, Mackerel, and Sardines — expertly handled and delivered at peak freshness.",
      ar: "أسماك طازجة كاملة فاخرة من مياه نقية حول العالم. سمك النيل، البلطي، الماكريل، والسردين — يتم التعامل معها بخبرة وتوصيلها في قمة نضارتها.",
    },
    products: { en: ["Nile Perch", "Tilapia", "Mackerel", "Sardines", "Red Mullet", "Sea Bass"], ar: ["سمك النيل", "البلطي", "الماكريل", "السردين", "البربون", "القاروص"] },
    image: "https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=600&q=80",
    accent: "teal",
  },
  {
    id: "shellfish",
    name: { en: "Shellfish & Crustaceans", ar: "المحار والقشريات" },
    subtitle: { en: "Ocean Delicacies", ar: "أطايب المحيط" },
    description: {
      en: "The finest shrimp, prawns, crab, and lobster — freshly harvested from pristine waters and handled under strict HACCP standards. Available in multiple grades and pack sizes.",
      ar: "أجود الروبيان والقريدس والسلطعون والكركند — يتم حصادها طازجة من مياه نقية وتتم معالجتها وفق معايير HACCP الصارمة.",
    },
    products: { en: ["Tiger Prawns", "White Shrimp", "Blue Crab", "Lobster Tails", "Crayfish", "Langoustine"], ar: ["قريدس النمر", "روبيان أبيض", "سلطعون أزرق", "ذيل كركند", "جراد البحر", "لانغوستين"] },
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80",
    accent: "gold",
  },
  {
    id: "fillets",
    name: { en: "Premium Fillets", ar: "فيليه فاخر" },
    subtitle: { en: "Ready to Cook", ar: "جاهز للطبخ" },
    description: {
      en: "Boneless, skin-on or skinless fillets prepared from the freshest catch. Each piece retains optimal texture, flavour, and nutritional value — delivered fresh to your market.",
      ar: "فيليه بدون عظم، بالجلد أو بدونه، محضر من أطزج صيد. كل قطعة تحتفظ بالقوام والنكهة والقيمة الغذائية المثلى — تسلم طازجة لسوقك.",
    },
    products: { en: ["Nile Perch Fillets", "Tilapia Fillets", "Cod Fillets", "Hake Fillets", "Pangasius", "Salmon Portions"], ar: ["فيليه سمك النيل", "فيليه بلطي", "فيليه قد", "فيليه هيك", "بانغاسيوس", "قطع سلمون"] },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
    accent: "teal",
  },
  {
    id: "specialty",
    name: { en: "Specialty Products", ar: "منتجات مميزة" },
    subtitle: { en: "Unique Offerings", ar: "عروض فريدة" },
    description: {
      en: "Curated specialty items including calamari, octopus, cuttlefish, and fish roe — freshly sourced from select fisheries across the region and beyond.",
      ar: "منتجات مميزة منتقاة تشمل الكاليماري والأخطبوط والحبار وبيض السمك — يتم توريدها طازجة من مصائد مختارة في المنطقة وخارجها.",
    },
    products: { en: ["Calamari Rings", "Baby Octopus", "Cuttlefish", "Fish Roe", "Surimi", "Seafood Mix"], ar: ["حلقات كاليماري", "أخطبوط صغير", "حبار", "بيض سمك", "سوريمي", "خلطة بحرية"] },
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=600&q=80",
    accent: "gold",
  },
];

export default function Products() {
  const { t, lang } = useLanguage();
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 md:py-32 lg:py-40 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-20">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-400 mb-4 block">
            {t("products.tag")}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            {t("products.title1")}
            <span className="gold-shimmer">{t("products.title2")}</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-white/50 max-w-3xl mx-auto font-body leading-relaxed">
            {t("products.desc")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categoriesData.map((cat, i) => (
            <ScrollReveal key={cat.id} delay={i * 100}>
              <motion.div
                onHoverStart={() => setActiveProduct(cat.id)}
                onHoverEnd={() => setActiveProduct(null)}
                className="rounded-2xl overflow-hidden group cursor-pointer bg-white/[0.03] border border-white/[0.06] hover:border-gold-500/30 hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <p className={`text-xs font-body font-semibold tracking-[0.2em] uppercase ${cat.accent === "gold" ? "text-gold-400" : "text-teal-400"}`}>
                      {cat.subtitle[lang]}
                    </p>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {cat.name[lang]}
                    </h3>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <p className="text-white/50 font-body text-sm leading-relaxed mb-6">
                    {cat.description[lang]}
                  </p>

                  <AnimatePresence>
                    <div className="flex flex-wrap gap-2">
                      {cat.products[lang].map((product, j) => (
                        <motion.span
                          key={product}
                          initial={activeProduct === cat.id ? { opacity: 0, scale: 0.8 } : false}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: j * 0.05 }}
                          className={`px-3 py-1.5 rounded-full text-xs font-body font-medium transition-all duration-300 ${
                            activeProduct === cat.id
                              ? cat.accent === "gold"
                                ? "bg-gold-500/20 text-gold-300 border border-gold-500/30"
                                : "bg-teal-500/20 text-teal-300 border border-teal-500/30"
                              : "bg-white/5 text-white/40 border border-white/5"
                          }`}
                        >
                          {product}
                        </motion.span>
                      ))}
                    </div>
                  </AnimatePresence>

                  <div className="mt-6 flex items-center gap-2 text-gold-400 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-sm font-body font-medium">{t("products.explore")}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-16">
          <p className="text-white/40 font-body mb-6">
            {t("products.custom")}
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline-gold"
          >
            {t("products.requestCustom")}
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
