import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { AppShell } from "@/components/app-shell";
import { PRELOADER_SESSION_KEY } from "@/components/preloader";

const preloaderHeadScript = `try{var k=${JSON.stringify(PRELOADER_SESSION_KEY)};if(sessionStorage.getItem(k)){document.documentElement.setAttribute("data-hide-site-preloader","");}}catch(e){}`;

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremiah Aworetan | Frontend Engineer",
  description:
    "Frontend engineer building scalable web applications and seamless user experiences with React, Next.js, and TypeScript across fintech, e-commerce, and Web3.",
  keywords: [
    "frontend engineer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "JavaScript",
    "fintech",
    "e-commerce",
    "Web3",
    "UI/UX",
  ],
  publisher: "Jeremiah Aworetan",
  authors: [{ name: "Jeremiah Aworetan", url: "https://github.com/jeremy0x" }],
  metadataBase: new URL("https://www.jeremy0x.dev"),
  alternates: {
    canonical: "https://www.jeremy0x.dev",
  },
  openGraph: {
    title: "Jeremiah Aworetan | Frontend Engineer",
    description:
      "Frontend engineer building scalable web applications and seamless user experiences with React, Next.js, and TypeScript across fintech, e-commerce, and Web3.",
    url: "https://www.jeremy0x.dev",
    siteName: "Jeremy",
    images: [
      {
        url: "https://www.jeremy0x.dev/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Jeremiah Aworetan — Frontend Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@thejeremy0x",
    title: "Jeremiah Aworetan | Frontend Engineer",
    description:
      "Frontend engineer building scalable web applications and seamless user experiences with React, Next.js, and TypeScript across fintech, e-commerce, and Web3.",
    creator: "@thejeremy0x",
    images: [
      {
        url: "https://www.jeremy0x.dev/thumbnail.jpg",
        alt: "Jeremiah Aworetan — Frontend Engineer",
      },
    ],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.jeremy0x.dev/#website",
      url: "https://www.jeremy0x.dev",
      name: "Jeremiah Aworetan",
      alternateName: ["jeremy0x", "Jeremy"],
      description:
        "Frontend engineer building scalable web solutions for seamless user experiences.",
      publisher: { "@id": "https://www.jeremy0x.dev/#person" },
    },
    {
      "@type": "Person",
      "@id": "https://www.jeremy0x.dev/#person",
      name: "Jeremiah Aworetan",
      alternateName: "jeremy0x",
      url: "https://www.jeremy0x.dev",
      jobTitle: "Frontend Engineer",
      description:
        "Frontend engineer building scalable web solutions for seamless user experiences.",
      image: "https://www.jeremy0x.dev/thumbnail.jpg",
      sameAs: [
        "https://github.com/jeremy0x",
        "https://twitter.com/thejeremy0x",
        "https://www.linkedin.com/in/jeremy0x",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloaderHeadScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${hankenGrotesk.className} overflow-y-scroll transition-colors`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
