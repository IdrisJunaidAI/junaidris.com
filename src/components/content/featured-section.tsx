import type { ReactNode } from "react";
import { SectionHeader } from "@/components/layout";

type FeaturedSectionProps = {
  children: ReactNode;
  description: string;
  title: string;
};

export function FeaturedSection({ children, description, title }: FeaturedSectionProps) {
  return (
    <section>
      <SectionHeader eyebrow="Featured" title={title} description={description} />
      <div className="mt-8 grid gap-5 lg:grid-cols-3">{children}</div>
    </section>
  );
}
