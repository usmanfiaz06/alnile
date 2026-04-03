"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "en" | "ar";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  isArabic: boolean;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.products": { en: "Products", ar: "المنتجات" },
  "nav.quality": { en: "Quality", ar: "الجودة" },
  "nav.markets": { en: "Markets", ar: "الأسواق" },
  "nav.gallery": { en: "Gallery", ar: "المعرض" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  "nav.getInTouch": { en: "Get in Touch", ar: "تواصل معنا" },

  // Hero
  "hero.badge": { en: "Est. 1981 \u00B7 Umm Al Quwain, UAE", ar: "تأسست 1981 · أم القيوين، الإمارات" },
  "hero.title1": { en: "Premium Fresh", ar: "أجود المأكولات" },
  "hero.title2": { en: "Seafood", ar: "البحرية الطازجة" },
  "hero.subtitle": {
    en: "Fresh from the waters of the Gulf to tables across the world. Importing from Russia, Pakistan & Sri Lanka. Trusted across the UAE, Qatar, Oman, Kuwait & KSA.",
    ar: "طازجة من مياه الخليج إلى موائد العالم. نستورد من روسيا وباكستان وسريلانكا. موثوقون في الإمارات وقطر وعمان والكويت والسعودية.",
  },
  "hero.explore": { en: "Explore Our Products", ar: "استكشف منتجاتنا" },
  "hero.touch": { en: "Get in Touch", ar: "تواصل معنا" },
  "hero.discover": { en: "Discover More", ar: "اكتشف المزيد" },

  // About
  "about.tag": { en: "Our Story", ar: "قصتنا" },
  "about.title1": { en: "A Heritage of ", ar: "إرث من " },
  "about.title2": { en: "Excellence", ar: "التميز" },
  "about.desc": {
    en: "Since 1981, Al Nile Fish has been a cornerstone of the premium fresh seafood import & export industry — connecting the finest catch with discerning markets across the Gulf and beyond.",
    ar: "منذ عام 1981، كانت شركة النيل للأسماك ركيزة أساسية في صناعة استيراد وتصدير المأكولات البحرية الطازجة الفاخرة — حيث نربط أجود الأسماك بالأسواق المتميزة في الخليج وخارجه.",
  },
  "about.fromHeart1": { en: "From the Heart of the UAE", ar: "من قلب الإمارات" },
  "about.fromHeart2": { en: "to the World", ar: "إلى العالم" },
  "about.p1": {
    en: "Headquartered in Umm Al Quwain, United Arab Emirates, Al Nile Fish has spent over four decades perfecting the art of sourcing, processing, and delivering the finest fresh seafood. We combine deep industry expertise with cutting-edge technology to ensure every product meets the highest international standards.",
    ar: "يقع مقرنا الرئيسي في أم القيوين، الإمارات العربية المتحدة، وقد أمضت شركة النيل للأسماك أكثر من أربعة عقود في إتقان فن التوريد والمعالجة وتوصيل أجود المأكولات البحرية الطازجة. نجمع بين الخبرة العميقة في الصناعة والتكنولوجيا المتطورة لضمان أن كل منتج يلبي أعلى المعايير الدولية.",
  },
  "about.p2": {
    en: "Today, Al Nile Fish proudly serves partners across the Gulf region — including Qatar, Oman, Kuwait, and Saudi Arabia — while continuing to expand our global footprint. Our commitment to freshness, sustainability, and excellence has made us a trusted name in the seafood industry.",
    ar: "اليوم، تفخر شركة النيل للأسماك بخدمة شركائها في منطقة الخليج — بما في ذلك قطر وعمان والكويت والمملكة العربية السعودية — مع الاستمرار في توسيع بصمتنا العالمية. إن التزامنا بالنضارة والاستدامة والتميز جعلنا اسمًا موثوقًا في صناعة المأكولات البحرية.",
  },
  "about.sustainability": { en: "Sustainability", ar: "الاستدامة" },
  "about.qualityFirst": { en: "Quality First", ar: "الجودة أولاً" },
  "about.gulfLeaders": { en: "Gulf Leaders", ar: "رواد الخليج" },
  "about.innovation": { en: "Innovation", ar: "الابتكار" },
  "about.years": { en: "Years of Excellence", ar: "سنوات من التميز" },
  "about.countries": { en: "Countries Served", ar: "دولة نخدمها" },
  "about.tons": { en: "Tons Exported Annually", ar: "طن تصدير سنوياً" },
  "about.certified": { en: "Quality Certified", ar: "جودة معتمدة" },

  // Products
  "products.tag": { en: "What We Offer", ar: "ما نقدمه" },
  "products.title1": { en: "Our Premium ", ar: "مجموعتنا " },
  "products.title2": { en: "Collection", ar: "المميزة" },
  "products.desc": {
    en: "A curated selection of the world's finest fresh seafood, sourced responsibly and delivered to the highest international standards.",
    ar: "مجموعة منتقاة من أجود المأكولات البحرية الطازجة في العالم، يتم توريدها بمسؤولية وتسليمها وفقًا لأعلى المعايير الدولية.",
  },
  "products.explore": { en: "Explore Range", ar: "استكشف المزيد" },
  "products.custom": { en: "Looking for something specific? We source custom orders worldwide.", ar: "تبحث عن شيء محدد؟ نوفر طلبات مخصصة من جميع أنحاء العالم." },
  "products.requestCustom": { en: "Request Custom Order", ar: "اطلب طلبًا مخصصًا" },

  // Quality
  "quality.tag": { en: "Why Choose Us", ar: "لماذا تختارنا" },
  "quality.title1": { en: "Uncompromising ", ar: "جودة " },
  "quality.title2": { en: "Quality", ar: "لا تتنازل" },
  "quality.desc": {
    en: "Every product that bears the Al Nile Fish name has been sourced, processed, and delivered according to the highest international standards.",
    ar: "كل منتج يحمل اسم النيل للأسماك تم توريده ومعالجته وتسليمه وفقًا لأعلى المعايير الدولية.",
  },
  "quality.process": { en: "Our Process", ar: "عمليتنا" },
  "quality.processDesc": { en: "From ocean to plate, every step is carefully monitored.", ar: "من المحيط إلى الطبق، كل خطوة تتم مراقبتها بعناية." },
  "quality.certTitle": { en: "Certifications & Standards", ar: "الشهادات والمعايير" },

  // Global Reach
  "global.tag": { en: "Worldwide Presence", ar: "تواجد عالمي" },
  "global.title1": { en: "Our Global ", ar: "انتشارنا " },
  "global.title2": { en: "Reach", ar: "العالمي" },
  "global.desc": {
    en: "Based in the UAE, Al Nile Fish connects the world's finest seafood with discerning buyers across the Gulf region and beyond.",
    ar: "من مقرنا في الإمارات، تربط شركة النيل للأسماك أجود المأكولات البحرية في العالم بالمشترين المتميزين في منطقة الخليج وخارجها.",
  },
  "global.importTag": { en: "Import Operations", ar: "عمليات الاستيراد" },
  "global.importTitle1": { en: "Importing from", ar: "نستورد من" },
  "global.importTitle2": { en: "Russia & Beyond", ar: "روسيا وأبعد" },
  "global.importDesc": {
    en: "Al Nile Fish has established strong import partnerships with Russia's premier fisheries, bringing the finest cold-water catch to the Gulf market. Our sourcing network also extends to Pakistan and Sri Lanka, ensuring a diverse and premium selection of fresh seafood year-round.",
    ar: "أقامت شركة النيل للأسماك شراكات استيراد قوية مع أفضل مصائد الأسماك الروسية، لجلب أجود أسماك المياه الباردة إلى سوق الخليج. كما تمتد شبكة التوريد لدينا إلى باكستان وسريلانكا، مما يضمن تشكيلة متنوعة وفاخرة من المأكولات البحرية الطازجة على مدار العام.",
  },
  "global.globalSourcing": { en: "Global Sourcing", ar: "التوريد العالمي" },
  "global.importNetwork": { en: "Premium Import Network", ar: "شبكة استيراد فاخرة" },
  "global.gulfTag": { en: "Gulf Region Leaders", ar: "رواد منطقة الخليج" },
  "global.gulfTitle1": { en: "Serving the", ar: "نخدم" },
  "global.gulfTitle2": { en: "Gulf & Beyond", ar: "الخليج وأبعد" },
  "global.gulfDesc": {
    en: "With our headquarters in Umm Al Quwain, UAE, we've built a robust distribution network spanning the entire GCC region and beyond. Our logistics infrastructure ensures premium fresh quality from our facility to markets across Qatar, Oman, Kuwait, Saudi Arabia, Pakistan, and Sri Lanka.",
    ar: "من مقرنا الرئيسي في أم القيوين، الإمارات، بنينا شبكة توزيع قوية تمتد عبر منطقة مجلس التعاون الخليجي بأكملها وخارجها. تضمن بنيتنا اللوجستية جودة طازجة فائقة من منشأتنا إلى الأسواق في قطر وعمان والكويت والسعودية وباكستان وسريلانكا.",
  },

  // Gallery
  "gallery.tag": { en: "Visual Journey", ar: "رحلة بصرية" },
  "gallery.title1": { en: "Our ", ar: "" },
  "gallery.title2": { en: "Gallery", ar: "معرضنا" },
  "gallery.desc": {
    en: "A glimpse into our world — from pristine waters to world-class processing facilities.",
    ar: "لمحة عن عالمنا — من المياه النقية إلى مرافق المعالجة ذات المستوى العالمي.",
  },
  "gallery.viewAll": { en: "View Full Gallery", ar: "عرض المعرض الكامل" },

  // Partnership
  "partnership.tag": { en: "Business Opportunities", ar: "فرص الأعمال" },
  "partnership.title1": { en: "Partner With", ar: "كن شريكًا مع" },
  "partnership.title2": { en: "Al Nile Fish", ar: "النيل للأسماك" },
  "partnership.desc": {
    en: "We are actively seeking distributors, importers, and strategic partners across the GCC, Europe, and emerging markets. Join a legacy of excellence that spans over four decades.",
    ar: "نبحث بنشاط عن موزعين ومستوردين وشركاء استراتيجيين في منطقة الخليج وأوروبا والأسواق الناشئة. انضم إلى إرث من التميز يمتد لأكثر من أربعة عقود.",
  },
  "partnership.become": { en: "Become a Partner", ar: "كن شريكًا" },
  "partnership.brochure": { en: "Download Brochure", ar: "تحميل الكتيب" },
  "partnership.dist": { en: "Distribution Partners", ar: "شركاء التوزيع" },
  "partnership.distDesc": {
    en: "Exclusive distribution rights in select territories with full marketing and logistics support.",
    ar: "حقوق توزيع حصرية في مناطق مختارة مع دعم تسويقي ولوجستي كامل.",
  },
  "partnership.white": { en: "White Label", ar: "العلامة البيضاء" },
  "partnership.whiteDesc": {
    en: "Custom branding and packaging solutions for your market, backed by our certified production.",
    ar: "حلول العلامات التجارية والتغليف المخصصة لسوقك، مدعومة بإنتاجنا المعتمد.",
  },
  "partnership.joint": { en: "Joint Ventures", ar: "المشاريع المشتركة" },
  "partnership.jointDesc": {
    en: "Strategic partnerships for market development, cold chain infrastructure, and co-investment opportunities.",
    ar: "شراكات استراتيجية لتطوير الأسواق والبنية التحتية لسلسلة التبريد وفرص الاستثمار المشترك.",
  },

  // Subscribe
  "subscribe.title1": { en: "Stay in the ", ar: "ابق على " },
  "subscribe.title2": { en: "Loop", ar: "اطلاع" },
  "subscribe.desc": {
    en: "Subscribe for updates on new products, seasonal offerings, market expansion news, and partnership opportunities.",
    ar: "اشترك للحصول على تحديثات حول المنتجات الجديدة والعروض الموسمية وأخبار التوسع في الأسواق وفرص الشراكة.",
  },
  "subscribe.placeholder": { en: "Enter your email address", ar: "أدخل بريدك الإلكتروني" },
  "subscribe.btn": { en: "Subscribe", ar: "اشترك" },
  "subscribe.thanks": { en: "Thank you for subscribing! We'll be in touch.", ar: "شكرًا لاشتراكك! سنتواصل معك قريبًا." },
  "subscribe.nospam": { en: "No spam, ever. Unsubscribe anytime.", ar: "بدون بريد مزعج. إلغاء الاشتراك في أي وقت." },

  // Contact
  "contact.tag": { en: "Get in Touch", ar: "تواصل معنا" },
  "contact.title": { en: "Contact ", ar: "اتصل " },
  "contact.title2": { en: "Us", ar: "بنا" },
  "contact.desc": {
    en: "Whether you're looking for premium seafood products, exploring partnership opportunities, or have a specific inquiry — we'd love to hear from you.",
    ar: "سواء كنت تبحث عن منتجات بحرية فاخرة، أو تستكشف فرص الشراكة، أو لديك استفسار محدد — يسعدنا أن نسمع منك.",
  },
  "contact.success": { en: "Message Sent Successfully", ar: "تم إرسال الرسالة بنجاح" },
  "contact.successDesc": { en: "Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.", ar: "شكرًا لتواصلك معنا. سيراجع فريقنا استفسارك ويرد عليك خلال 24 ساعة." },
  "contact.sendAnother": { en: "Send another message", ar: "إرسال رسالة أخرى" },
  "contact.name": { en: "Full Name", ar: "الاسم الكامل" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.company": { en: "Company Name", ar: "اسم الشركة" },
  "contact.inquiryType": { en: "Inquiry Type", ar: "نوع الاستفسار" },
  "contact.selectType": { en: "Select inquiry type...", ar: "اختر نوع الاستفسار..." },
  "contact.message": { en: "Your Message", ar: "رسالتك" },
  "contact.messagePlaceholder": { en: "Tell us about your requirements...", ar: "أخبرنا عن متطلباتك..." },
  "contact.subscribe": { en: "Subscribe to Al Nile Fish updates — new products, expansion news, and partnership opportunities.", ar: "اشترك في تحديثات النيل للأسماك — منتجات جديدة وأخبار التوسع وفرص الشراكة." },
  "contact.send": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.headOffice": { en: "Head Office", ar: "المقر الرئيسي" },
  "contact.emailUs": { en: "Email Us", ar: "راسلنا" },
  "contact.callUs": { en: "Call Us", ar: "اتصل بنا" },
  "contact.hours": { en: "Business Hours", ar: "ساعات العمل" },
  "contact.sunThu": { en: "Sunday - Thursday: 8AM - 6PM", ar: "الأحد - الخميس: 8 صباحًا - 6 مساءً" },
  "contact.friSat": { en: "Friday - Saturday: Closed", ar: "الجمعة - السبت: مغلق" },
  "contact.followUs": { en: "Follow Us", ar: "تابعنا" },

  // Footer
  "footer.desc": {
    en: "Premium fresh seafood import & export from Umm Al Quwain, UAE to the world. Over four decades of excellence in sourcing, processing, and delivering the finest seafood products across the Gulf and beyond.",
    ar: "استيراد وتصدير المأكولات البحرية الطازجة الفاخرة من أم القيوين، الإمارات إلى العالم. أكثر من أربعة عقود من التميز في التوريد والمعالجة وتوصيل أجود منتجات المأكولات البحرية في الخليج وخارجه.",
  },
  "footer.company": { en: "Company", ar: "الشركة" },
  "footer.products": { en: "Products", ar: "المنتجات" },
  "footer.support": { en: "Support", ar: "الدعم" },
  "footer.rights": { en: "Al Nile Fish Import & Export. All rights reserved.", ar: "النيل للأسماك للاستيراد والتصدير. جميع الحقوق محفوظة." },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },

  // Preloader
  "preloader.tagline": { en: "Premium Fresh Seafood", ar: "مأكولات بحرية طازجة فاخرة" },

  // Popup
  "popup.title": { en: "Interested in Our Products?", ar: "مهتم بمنتجاتنا؟" },
  "popup.desc": { en: "Get in touch with our team for inquiries, partnerships, or custom orders. We'd love to hear from you.", ar: "تواصل مع فريقنا للاستفسارات أو الشراكات أو الطلبات المخصصة. يسعدنا أن نسمع منك." },
  "popup.contact": { en: "Contact Us", ar: "اتصل بنا" },
  "popup.later": { en: "Later", ar: "لاحقًا" },

  // Inquiry types
  "inquiry.general": { en: "General Inquiry", ar: "استفسار عام" },
  "inquiry.product": { en: "Product Information", ar: "معلومات المنتج" },
  "inquiry.partnership": { en: "Partnership / Distribution", ar: "شراكة / توزيع" },
  "inquiry.custom": { en: "Custom Order", ar: "طلب مخصص" },
  "inquiry.export": { en: "Export / Import Query", ar: "استفسار تصدير / استيراد" },
  "inquiry.other": { en: "Other", ar: "أخرى" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = useCallback(
    (key: string): string => {
      return translations[key]?.[lang] || key;
    },
    [lang]
  );

  const isArabic = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isArabic }}>
      <div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
