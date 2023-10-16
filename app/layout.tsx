import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy | Frontend Developer",
  description:
    "I'm Jeremiah Aworetan, a frontend web developer based in Nigeria. I specialize in building beautiful, responsive and performant websites using modern web technologies.",
  publisher: "Jeremiah Aworetan",
  authors: [{ name: "Jeremiah Aworetan", url: "https://github.com/jeremy0x" }],
  metadataBase: new URL("https://jeremy0x.tech"),
  openGraph: {
    title: "Jeremiah Aworetan | Frontend Developer",
    description:
      "I'm Jeremiah Aworetan, a frontend web developer based in Nigeria. I specialize in building beautiful, responsive and performant websites using modern web technologies.",
    url: "https://jeremy0x.tech",
    siteName: "Jeremy Aworetan",
    images: [
      {
        url: "/thumbnail.jpg",
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
    title: "Jeremiah Aworetan | Frontend Developer",
    description:
      "I'm Jeremiah Aworetan, a frontend web developer based in Nigeria. I specialize in building beautiful, responsive and performant websites using modern web technologies.",
    creator: "@jeremy0x_",
    images: ["/thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
