import type { Metadata } from "next";
import { metadataPlan } from "@/content/seo";

export type MetadataPage = keyof typeof metadataPlan;

export function createPageMetadata(page: MetadataPage): Metadata {
  const metadata = metadataPlan[page];

  return {
    title: metadata.pageTitle,
    description: metadata.metaDescription,
    keywords: metadata.targetKeywords,
    openGraph: {
      title: metadata.openGraphTitle,
      description: metadata.openGraphDescription,
      type: "website",
      images: [
        {
          url: "/hero-ai-quality-automation.svg",
          width: 1200,
          height: 600,
          alt: "Efficacy AI Learning Hub abstract AI, laboratory, and automation visual",
        },
      ],
    },
  };
}
