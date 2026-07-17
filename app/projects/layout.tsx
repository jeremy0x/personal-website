import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Projects by Jeremiah Aworetan | Product Engineering Portfolio",
  description:
    "Explore Jeremiah Aworetan’s end-to-end product builds spanning crypto, fintech, and consumer web experiences.",
  openGraph: {
    title: "Featured Projects | Jeremiah Aworetan",
    description:
      "Dive into a curated selection of shipping-grade projects built with Next.js, TypeScript, and modern tooling.",
    url: "https://www.jeremy0x.dev/projects",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jeremy0x.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Featured Projects | Jeremiah Aworetan",
    description:
      "Browse real-world fintech, commerce, and productivity products crafted by Jeremiah Aworetan.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.jeremy0x.dev/projects/#webpage",
      url: "https://www.jeremy0x.dev/projects",
      name: "Projects by Jeremiah Aworetan | Product Engineering Portfolio",
      description:
        "Explore Jeremiah Aworetan's end-to-end product builds spanning crypto, fintech, and consumer web experiences.",
      isPartOf: { "@id": "https://www.jeremy0x.dev/#website" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.jeremy0x.dev/projects/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.jeremy0x.dev",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: "https://www.jeremy0x.dev/projects",
        },
      ],
    },
  ],
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", item: "/" },
          { name: "Projects", item: "/projects" },
        ]}
      />
      <main className="mx-auto flex min-h-dvh items-center justify-center overflow-x-hidden pt-20 text-neutral-900 dark:text-white">
        <div className="page-content">{children}</div>
      </main>
    </>
  );
}
