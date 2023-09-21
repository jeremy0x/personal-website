import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy — Frontend Developer",
  description:
    "V1 of Jeremy's personal website, a seasoned frontend developer. Built with Next.js, TailwindCSS, and Framer Motion.",
  publisher: "Jeremiah Aworetan",
  authors: [{ name: "Jeremy", url: "https://github.com/jeremy0x" }],
  metadataBase: new URL("https://jeremy0x.tech"),
  openGraph: {
    title: "Jeremy — Frontend Developer",
    description:
      "V1 of Jeremy's personal website, a seasoned frontend developer. Built with Next.js, TailwindCSS, and Framer Motion.",
    url: "https://jeremy0x.tech",
    siteName: "Jeremy",
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
    title: "Jeremy — Frontend Developer",
    description:
      "V1 of Jeremy's personal website, a seasoned frontend developer. Built with Next.js, TailwindCSS, and Framer Motion.",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
