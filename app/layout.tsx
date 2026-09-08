import { Container, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import NavBar from "./NavBar";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import HoverBar from "./HoverBar";
import { Providers } from "./ThemeProvider";
import Footer from "./Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { Background } from "./components/Background";
import BackToTop from "./components/BackToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <LanguageProvider>
            <Theme accentColor="green">
              <Background />

              <NavBar />
              <HoverBar />
              <main className="p-5 pl-5 pr-5 md:pl-20 md:pr-20">
                <Container>{children}</Container>
              </main>
              <Footer />
              <BackToTop />
            </Theme>
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Gabriel López | Frontend Developer",
  description:
    "Portafolio de Gabriel López: aplicaciones web y proyectos freelance con foco en resultados reales para cada negocio y cliente.",
  keywords: [
    "Gabriel Alejandro López",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Gabriel Alejandro López" }],
  creator: "Gabriel Alejandro López",
  metadataBase: new URL("https://gabriellopez.com.ar"),
  openGraph: {
    title: "Gabriel Alejandro López | Frontend Developer",
    description:
      "Descubrí el portafolio de Gabriel López: aplicaciones web, proyectos freelance y soluciones digitales pensadas para resolver problemas reales.",
    url: "https://gabriellopez.com.ar",
    siteName: "Gabriel Alejandro López Portfolio",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "Gabriel Alejandro López Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Alejandro López | Frontend Developer",
    description:
      "Portafolio de Gabriel López: aplicaciones web y proyectos freelance con foco en resultados reales.",
    images: ["/og.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
