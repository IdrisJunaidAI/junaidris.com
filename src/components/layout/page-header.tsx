type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-4xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-4 text-4xl font-semibold tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
        {description}
      </p>
    </header>
  );
}
