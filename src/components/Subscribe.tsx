"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Subscribe() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-pearl rounded-3xl p-8 md:p-12 text-center border border-gold-200/30">
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-50 flex items-center justify-center border border-gold-200/50">
                <svg viewBox="0 0 32 32" className="w-8 h-8 text-gold-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="8" width="24" height="18" rx="2" />
                  <path d="M4 10L16 20L28 10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-navy-900 mb-3">
                {t("subscribe.title1")}<span className="text-gold-600 italic">{t("subscribe.title2")}</span>
              </h3>
              <p className="text-navy-500 font-body max-w-lg mx-auto mb-8">
                {t("subscribe.desc")}
              </p>

              {subscribed ? (
                <div className="flex items-center justify-center gap-3 text-teal-600 font-body font-medium py-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                  {t("subscribe.thanks")}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("subscribe.placeholder")}
                    required
                    className="form-input flex-1 !rounded-full text-center sm:text-left"
                  />
                  <button type="submit" className="btn-gold whitespace-nowrap !rounded-full">
                    {t("subscribe.btn")}
                  </button>
                </form>
              )}

              <p className="text-xs text-navy-400 font-body mt-4">
                {t("subscribe.nospam")}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
