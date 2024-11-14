import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremiah Aworetan | Frontend Engineer",
  description:
    "Frontend engineer building scalable web solutions for seamless user experiences.",
  publisher: "Jeremiah Aworetan",
  authors: [{ name: "Jeremiah Aworetan", url: "https://github.com/jeremy0x" }],
  metadataBase: new URL("https://jeremy0x.vercel.app"),
  openGraph: {
    title: "Jeremiah Aworetan | Frontend Engineer",
    description:
      "Frontend engineer building scalable web solutions for seamless user experiences.",
    url: "https://jeremy0x.codes",
    siteName: "Jeremy",
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
    title: "Jeremiah Aworetan | Frontend Engineer",
    description:
      "Frontend engineer building scalable web solutions for seamless user experiences.",
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
