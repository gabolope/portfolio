"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import styles from "./ContactForm.module.css";

const translations = {
  en: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    needLabel: "What do you need?",
    needPlaceholder: "Tell me a bit about your project or idea...",
    budgetLabel: "Approximate budget",
    budgetOptions: [
      "Not sure yet",
      "Under USD 300",
      "USD 300 – 800",
      "USD 800 – 2,000",
      "Over USD 2,000",
    ],
    contactLabel: "How can I reach you?",
    contactPlaceholder: "Email or phone number",
    submit: "Send message",
    submitting: "Sending...",
    success: "Thanks! Your message is on its way, I'll reply shortly.",
    error:
      "Something went wrong sending your message. Try again, or reach me directly on WhatsApp below.",
    whatsappLead: "Prefer a quicker reply?",
    whatsappCta: "Message me on WhatsApp",
  },
  es: {
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    needLabel: "¿Qué necesitás?",
    needPlaceholder: "Contame un poco sobre tu proyecto o idea...",
    budgetLabel: "Presupuesto aproximado",
    budgetOptions: [
      "Todavía no sé",
      "Menos de ARS 300.000",
      "ARS 300.000 – 600.000",
      "ARS 600.000 – 1.200.000",
      "Más de ARS 1.200.000",
    ],
    contactLabel: "¿Cómo te contacto?",
    contactPlaceholder: "Email o teléfono",
    submit: "Enviar mensaje",
    submitting: "Enviando...",
    success: "¡Gracias! Tu mensaje ya está en camino, en breve te responderé.",
    error:
      "Hubo un problema al enviar tu mensaje. Probá de nuevo, o escribime directo por WhatsApp abajo.",
    whatsappLead: "¿Preferís una respuesta más rápida?",
    whatsappCta: "Escribime por WhatsApp",
  },
};

type Status = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [status, setStatus] = useState<Status>("idle");
  const [budgetIndex, setBudgetIndex] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          contact: formData.get("contact"),
          budget: t.budgetOptions[budgetIndex],
          need: formData.get("need"),
          website: formData.get("website"),
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return <div className={styles.statusOk}>{t.success}</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-5">
          <div className={styles.field}>
            <label className={styles.label} htmlFor="name">
              {t.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={200}
              placeholder={t.namePlaceholder}
              className={styles.input}
              disabled={status === "submitting"}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="need">
              {t.needLabel}
            </label>
            <textarea
              id="need"
              name="need"
              required
              maxLength={5000}
              placeholder={t.needPlaceholder}
              className={styles.textarea}
              disabled={status === "submitting"}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="budget">
              {t.budgetLabel}
            </label>
            <select
              id="budget"
              className={styles.select}
              disabled={status === "submitting"}
              value={budgetIndex}
              onChange={(event) => setBudgetIndex(Number(event.target.value))}
            >
              {t.budgetOptions.map((option, index) => (
                <option key={index} value={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact">
              {t.contactLabel}
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              required
              maxLength={200}
              placeholder={t.contactPlaceholder}
              className={styles.input}
              disabled={status === "submitting"}
            />
          </div>

          <div className={styles.honeypot} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className={styles.statusError}>{t.error}</div>
          )}

          <div>
            <button
              type="submit"
              className={styles.submit}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? t.submitting : t.submit}
            </button>
          </div>
        </div>
      </form>

      <div className="flex items-center gap-3 mt-8 pt-6 border-t border-(--line)">
        <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
          {t.whatsappLead}
        </span>
        <a
          href="https://wa.me/542235597430"
          target="_blank"
          rel="noopener noreferrer"
          className="glow inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--signal)" }}
        >
          <FaWhatsapp />
          {t.whatsappCta}
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
