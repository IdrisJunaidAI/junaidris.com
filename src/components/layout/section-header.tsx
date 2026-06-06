type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`.trim()}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.16em] ${isDark ? "text-teal-200" : "text-teal-700"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-2xl font-semibold tracking-normal sm:text-3xl ${isDark ? "text-white" : "text-zinc-950"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
