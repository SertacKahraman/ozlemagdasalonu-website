"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/types";

type ServiceExperienceProps = {
  services: Service[];
};

export default function ServiceExperience({ services }: ServiceExperienceProps) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "");
  const activeService =
    services.find((service) => service.slug === activeSlug) ?? services[0];

  if (!activeService) {
    return null;
  }

  return (
    <section className="scroll-reveal bg-gradient-to-b from-[#F7EFE6] from-0% via-[#F7EFE6] via-88% to-[#E8C9B2] to-100% pb-16 pt-12 sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 border-b border-[#DDB89F]/70 pb-6 sm:mb-12 sm:pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7A3429] sm:text-xs sm:tracking-[0.34em]">
              Hizmet Seçimi
            </p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl font-medium leading-tight text-[#3A2A24] sm:mt-4 sm:text-5xl">
              Bakım deneyiminizi seçin
            </h2>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[270px_1fr_390px] lg:items-center">
          <div
            role="tablist"
            aria-label="Hizmet Seçimi"
            className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:grid lg:gap-0 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, index) => {
              const isActive = service.slug === activeService.slug;

              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="service-panel"
                  onClick={() => setActiveSlug(service.slug)}
                  className={
                    isActive
                      ? "flex min-w-[136px] items-center justify-between gap-5 rounded-[16px] border border-[#8F4B38]/45 bg-white/75 px-4 py-3 text-left text-[#7A3429] lg:min-w-0 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-4"
                      : "flex min-w-[136px] items-center justify-between gap-5 rounded-[16px] border border-[#DDB89F]/55 px-4 py-3 text-left text-[#3A2A24]/78 transition hover:border-[#8F4B38]/60 hover:text-[#3A2A24] lg:min-w-0 lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-0 lg:py-4"
                  }
                >
                  <span className="text-sm font-semibold">{service.title}</span>
                  <span className="font-serif text-2xl font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="service-panel"
            role="tabpanel"
            tabIndex={0}
            className="lg:px-4 focus:outline-none"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7A3429] sm:text-xs sm:tracking-[0.32em]">
              Seçili Hizmet
            </p>
            <h3 className="mt-3 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:mt-4 sm:text-5xl">
              {activeService.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#3A2A24]/84 sm:mt-5 sm:text-base sm:leading-8">
              {activeService.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-[#DDB89F]/65 py-5 sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                  Süre
                </p>
                <p className="mt-2 text-sm font-semibold text-[#3A2A24]">
                  {activeService.duration}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                  Fiyat
                </p>
                <p className="mt-2 text-sm font-semibold text-[#3A2A24]">
                  {activeService.priceText}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Link
                href={`/hizmetler/${activeService.slug}`}
                className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#8F4B38]/18 transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
              >
                Hizmeti İncele
              </Link>
              <Link
                href="/iletisim"
                className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#4C362E] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
              >
                Randevu Al
              </Link>
            </div>
          </div>

          <div className="relative min-h-[310px] overflow-hidden rounded-t-[150px] rounded-b-[24px] bg-[#E8C9B2] shadow-[0_28px_80px_rgba(58,42,36,0.10)] sm:min-h-[420px] sm:rounded-t-[190px] sm:rounded-b-[28px]">
            <Image
              key={activeService.image}
              src={activeService.image}
              alt={`${activeService.title} - Özlem Ağda Salonu`}
              fill
              sizes="(min-width: 1024px) 390px, 100vw"
              className="animate-[serviceImage_520ms_ease-out] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
