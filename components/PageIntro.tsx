import type { ReactNode } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { BreadcrumbItem } from "@/types";

type PageIntroProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: string;
  label?: string;
  showTopBar?: boolean;
  children?: ReactNode;
};

export default function PageIntro({
  breadcrumbs,
  eyebrow,
  title,
  description,
  label,
  showTopBar = true,
  children,
}: PageIntroProps) {
  return (
    <section className="page-intro bg-[#F7EFE6] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {showTopBar ? (
          <div className="page-intro__top flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Breadcrumbs items={breadcrumbs} />

            {children ? (
              <div className="min-w-0 sm:flex sm:justify-end">{children}</div>
            ) : null}
          </div>
        ) : null}

        <header className="page-intro__header max-w-5xl pb-6 pt-4 sm:pb-10 sm:pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
            {eyebrow}
          </p>
          {label ? (
            <p className="page-intro__label mt-6 font-serif text-5xl font-medium leading-none text-[#3A2A24] sm:text-7xl">
              {label}
            </p>
          ) : null}
          <h1 className={label ? "page-intro__title mt-5 max-w-3xl text-2xl font-semibold leading-tight text-[#3A2A24] sm:text-3xl" : "page-intro__title mt-6 max-w-4xl font-serif text-5xl font-medium leading-[0.98] text-[#3A2A24] sm:text-7xl"}>
            {title}
          </h1>
          <p className="page-intro__description mt-7 max-w-2xl text-lg leading-9 text-[#3A2A24]/72">
            {description}
          </p>
        </header>
      </div>
    </section>
  );
}
