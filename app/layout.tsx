import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

import { AppShell } from "@/components";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremiah Aworetan | Frontend Engineer",
  description:
    "Frontend engineer building scalable web solutions for seamless user experiences.",
  publisher: "Jeremiah Aworetan",
  authors: [{ name: "Jeremiah Aworetan", url: "https://github.com/jeremy0x" }],
  metadataBase: new URL("https://www.jeremy0x.dev"),
  alternates: {
    canonical: "https://www.jeremy0x.dev",
  },
  openGraph: {
    title: "Jeremiah Aworetan | Frontend Engineer",
    description:
      "Frontend engineer building scalable web solutions for seamless user experiences.",
    url: "https://www.jeremy0x.dev",
    siteName: "Jeremy",
    images: [
      {
        url: "https://www.jeremy0x.dev/thumbnail.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremiah Aworetan | Frontend Engineer",
    description:
      "Frontend engineer building scalable web solutions for seamless user experiences.",
    creator: "@thejeremy0x",
    images: ["https://www.jeremy0x.dev/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hankenGrotesk.className} transition-colors overflow-y-scroll`}
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
