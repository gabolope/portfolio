"use client";

import { FaWhatsapp } from "react-icons/fa6";
import { TbMessageCircle, TbShoppingCart } from "react-icons/tb";
import { useLanguage } from "../context/LanguageContext";

const translations = {
  en: {
    title: "Your Site",
    line1: "Show your work",
    line2: "the way it deserves.",
  },
  es: {
    title: "Tu Sitio",
    line1: "Mostrá tu trabajo",
    line2: "como se merece.",
  },
};

const PhoneMockup = () => {
  const { language } = useLanguage();
  const { title, line1, line2 } = translations[language];

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-full lg:h-auto lg:aspect-[1/1.05] flex items-center justify-center">
      {/* Phone frame */}
      <div
        className="relative"
        style={
          {
            width: "56%",
            aspectRatio: "9 / 16",
            containerType: "inline-size",
          } as React.CSSProperties
        }
      >
        {/* Screen content, positioned to match the frame's cutout */}
        <div
          className="absolute flex flex-col overflow-hidden"
          style={{
            top: "0%",
            bottom: "1.5%",
            left: "9.7%",
            right: "9.7%",
            borderRadius: "10% / 6%",
            background: "var(--surface)",
          }}
        >
          {/* Browser bar */}
          <div
            className="flex items-center"
            style={{
              gap: "6%",
              padding: "9% 10% 6%",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <span
              style={{
                width: "8%",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                background: "var(--line)",
              }}
            />
          </div>

          {/* Site content */}
          <div
            className="flex-1 flex flex-col"
            style={{ padding: "8% 10%", gap: "6%" }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "10cqw",
                lineHeight: 1.1,
                color: "var(--fg)",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: "6cqw",
                lineHeight: 1.35,
                color: "var(--muted)",
              }}
            >
              {line1}
              <br />
              {line2}
            </div>
            <div
              style={{
                marginTop: "4%",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: "6%" }}
                >
                  <div
                    style={{
                      width: "20%",
                      aspectRatio: "1 / 1",
                      flexShrink: 0,
                      borderRadius: "18%",
                      background:
                        "linear-gradient(135deg, var(--signal-soft), var(--line))",
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "2.2cqw",
                    }}
                  >
                    <div
                      style={{
                        height: "2.6cqw",
                        width: "78%",
                        borderRadius: "999px",
                        background: "var(--line)",
                      }}
                    />
                    <div
                      style={{
                        height: "2.6cqw",
                        width: "52%",
                        borderRadius: "999px",
                        background: "var(--line)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex" style={{ gap: "6%" }}>
              {[TbShoppingCart, TbMessageCircle, FaWhatsapp].map((Icon, i) => (
                <div
                  key={i}
                  style={{
                    width: "16%",
                    aspectRatio: "1 / 1",
                    borderRadius: "50%",
                    background: "var(--signal)",
                    color: "var(--accent-fg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "5cqw",
                  }}
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/services/phone.svg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
