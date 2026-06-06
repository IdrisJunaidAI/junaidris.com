import type { ReactNode } from "react";
import { Container, SectionHeader } from "@/components/layout";

type ConversionSectionProps = {
  children: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
  theme?: "light" | "soft" | "dark";
};

export function ConversionSection({
  children,
  description,
  eyebrow,
  title,
  theme = "light",
}: ConversionSectionProps) {
  const isDark = theme === "dark";
  const background =
    theme === "dark"
      ? "bg-zinc-950 text-white"
      : theme === "soft"
        ? "border-y border-zinc-200 bg-[#f4f8f6]"
        : "bg-white";

  return (
    <section className={`${background} py-16 sm:py-20`}>
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          description={description}
          eyebrow={eyebrow}
          theme={isDark ? "dark" : "light"}
          title={title}
        />
        {children}
      </Container>
    </section>
  );
}
