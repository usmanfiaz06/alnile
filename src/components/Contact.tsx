"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: "",
    subscribe: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const inquiryTypes = [
    t("inquiry.general"),
    t("inquiry.product"),
    t("inquiry.partnership"),
    t("inquiry.custom"),
    t("inquiry.export"),
    t("inquiry.other"),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Inquiry: ${formData.inquiryType} — ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          inquiry_type: formData.inquiryType,
          message: formData.message,
          subscribe: formData.subscribe ? "Yes" : "No",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(t("contact.error"));
      }
    } catch {
      setError(t("contact.error"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-pearl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <ScrollReveal className="text-center mb-16">
          <span className="text-xs font-body font-semibold tracking-[0.3em] uppercase text-gold-600 mb-4 block">
            {t("contact.tag")}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-navy-900 mb-6">
            {t("contact.title")}<span className="text-gold-600 italic">{t("contact.title2")}</span>
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="text-lg text-navy-600 max-w-3xl mx-auto font-body leading-relaxed">
            {t("contact.desc")}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          <ScrollReveal variant="left" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-lg border border-gold-100/50">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-50 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#1B6B93" strokeWidth="2">
                    <circle cx="20" cy="20" r="16" />
                    <path d="M13 20L18 25L27 16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-navy-900 mb-3">
                  {t("contact.success")}
                </h3>
                <p className="text-navy-500 font-body mb-6">
                  {t("contact.successDesc")}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", company: "", inquiryType: "", message: "", subscribe: false });
                  }}
                  className="text-gold-600 font-body font-medium hover:text-gold-500 transition-colors"
                >
                  {t("contact.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gold-100/50">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-navy-700 mb-2">{t("contact.name")} *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Smith" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-navy-700 mb-2">{t("contact.email")} *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="form-input" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-body font-medium text-navy-700 mb-2">{t("contact.phone")}</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+971 XX XXX XXXX" className="form-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-navy-700 mb-2">{t("contact.company")}</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" className="form-input" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-sm font-body font-medium text-navy-700 mb-2">{t("contact.inquiryType")} *</label>
                  <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} required className="form-input appearance-none cursor-pointer">
                    <option value="">{t("contact.selectType")}</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-body font-medium text-navy-700 mb-2">{t("contact.message")} *</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} required rows={5}
                    placeholder={t("contact.messagePlaceholder")}
                    className="form-input resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 mb-8 cursor-pointer group">
                  <div className="relative mt-0.5">
                    <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} className="sr-only peer" />
                    <div className="w-5 h-5 rounded border-2 border-gold-300 peer-checked:bg-gold-500 peer-checked:border-gold-500 transition-all flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2" className="opacity-0 peer-checked:opacity-100">
                        <path d="M2 6L5 9L10 3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm text-navy-500 font-body group-hover:text-navy-700 transition-colors">
                    {t("contact.subscribe")}
                  </span>
                </label>

                {error && (
                  <p className="text-red-500 text-sm font-body mb-4">{error}</p>
                )}

                <button type="submit" disabled={sending} className="btn-gold w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
                  {sending ? t("contact.sending") : t("contact.send")}
                </button>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal variant="right" className="lg:col-span-2">
            <div className="space-y-6">
              {[
                {
                  title: t("contact.headOffice"),
                  details: ["Al Nile Import & Export", "of Fish & Foodstuff", "Ittahad Road, Umm Al Quwain", "United Arab Emirates"],
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: t("contact.emailUs"),
                  details: ["nfc@alnilefish.com", "info@alnilefish.com"],
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: t("contact.callUs"),
                  details: ["+971 6 766 6283"],
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: t("contact.hours"),
                  details: [t("contact.sunThu"), t("contact.friSat")],
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 flex gap-4 shadow-sm border border-gold-100/50">
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center flex-shrink-0 text-gold-600 border border-gold-200/50">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-900 mb-1">{item.title}</h4>
                    {item.details.map((detail) => (
                      <p key={detail} className="text-sm text-navy-500 font-body">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <h4 className="font-display font-bold text-navy-900 mb-4">{t("contact.followUs")}</h4>
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                    { name: "Instagram", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
                    { name: "WhatsApp", icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg> },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="w-11 h-11 rounded-full bg-gold-50 border border-gold-200/50 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
