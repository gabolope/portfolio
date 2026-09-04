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
      lang="en"
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
    "Frontend Developer specializing in React, Next.js and TypeScript. Explore my portfolio featuring web applications, freelance projects and modern frontend development.",
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
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Gabriel Alejandro López | Frontend Developer",
    description:
      "Portfolio showcasing React, Next.js and TypeScript projects, freelance work and modern web development.",
    url: "https://your-domain.com",
    siteName: "Gabriel Alejandro López Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Alejandro López Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Alejandro López | Frontend Developer",
    description: "Portfolio showcasing React, Next.js and TypeScript projects.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
