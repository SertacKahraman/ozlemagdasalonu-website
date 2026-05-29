type SectionHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  title,
  description,
  eyebrow,
  align = "center",
}: SectionHeaderProps) {
  return (
    <header className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7A3429] sm:mb-4 sm:text-xs sm:tracking-[0.32em]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#5F4E46] sm:mt-5 sm:text-base sm:leading-8">{description}</p>
      ) : null}
    </header>
  );
}
