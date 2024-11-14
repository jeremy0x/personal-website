import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremiah Aworetan | Skilled Frontend Developer in Nigeria",
  description:
    "Jeremiah Aworetan, a skilled frontend web developer in Nigeria. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
  publisher: "Jeremiah Aworetan",
  authors: [{ name: "Jeremiah Aworetan", url: "https://github.com/jeremy0x" }],
  metadataBase: new URL("https://jeremy0x.codes"),
  openGraph: {
    title: "Jeremiah Aworetan | Skilled Frontend Developer in Nigeria",
    description:
      "Jeremiah Aworetan, a skilled frontend web developer in Nigeria. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
    url: "https://jeremy0x.codes",
    siteName: "Jeremy Aworetan",
    images: [
      {
        url: "https://jeremy0x.vercel.app/thumbnail.jpg",
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
    title: "Jeremiah Aworetan | Skilled Frontend Developer in Nigeria",
    description:
      "Jeremiah Aworetan, a skilled frontend web developer in Nigeria. Experience expertly crafted, responsive websites using cutting-edge technology for a stunning online presence.",
    creator: "@jeremy0x_",
    images: ["https://jeremy0x.vercel.app/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
