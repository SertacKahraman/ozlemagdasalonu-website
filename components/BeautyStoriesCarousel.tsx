"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    title: "Pürüzsüzlük beklentinizi",
    italic: "özenle karşılayın",
    label: "Ağda",
    icon: "skin",
    description:
      "Ağda uygulamaları cilt hassasiyeti, bölge ihtiyacı ve konfor beklentisi dikkate alınarak hijyenik ortamda planlanır.",
    image: "/assets/images/services/ozlem-agda-salonu-agda-hizmeti.webp",
    noteTitle: "Uygulama Odağı",
    note: "Temiz, özenli ve konforlu süreç",
  },
  {
    title: "Cildinizde daha canlı bir başlangıç",
    italic: "ışıltı",
    label: "Cilt Bakımı",
    icon: "skin",
    description:
      "Cilt analiziyle başlayan profesyonel bakım süreci, nem desteği ve daha dengeli bir görünüm hedefiyle planlanır.",
    image: "/assets/images/services/ozlem-agda-salonu-cilt-bakimi.webp",
    noteTitle: "Bakım Odağı",
    note: "Nem, arınma ve canlı görünüm",
  },
  {
    title: "Pürüzsüzlük hedefinizi",
    italic: "konfora dönüştürün",
    label: "Lazer Epilasyon",
    icon: "laser",
    description:
      "Lazer epilasyon süreci hijyenik ortam, düzenli seans planı ve konfor odaklı yaklaşımla ilerler.",
    image: "/assets/images/services/ozlem-agda-salonu-lazer-epilasyon.webp",
    noteTitle: "Seans Planı",
    note: "Kişiye ve bölgeye göre program",
  },
  {
    title: "Bölgesel bakım hedefinizi",
    italic: "destekleyin",
    label: "G5 Bölgesel İncelme",
    icon: "makeup",
    description:
      "G5 bölgesel incelme ve sıkılaşma uygulaması, kişinin ihtiyacı ve uygulama bölgesi dikkate alınarak planlanır.",
    image: "/assets/images/services/ozlem-agda-salonu-g5-bolgesel-incelme.webp",
    noteTitle: "Bölgesel Bakım",
    note: "İncelme ve sıkılaşma odağı",
  },
  {
    title: "Vücut şekillendirme rutininizi",
    italic: "planlayın",
    label: "EMS Slim",
    icon: "hydra",
    description:
      "EMS Slim uygulaması, vücut şekillendirme hedefi ve randevu planı doğrultusunda değerlendirilir.",
    image: "/assets/images/services/ozlem-agda-salonu-ems-slim.webp",
    noteTitle: "EMS Planı",
    note: "Kişiye göre uygulama süreci",
  },
  {
    title: "El ve tırnak bakımınızı",
    italic: "tamamlayın",
    label: "Manikür",
    icon: "skin",
    description:
      "Manikür uygulaması, el ve tırnak bakımında temiz, düzenli ve özenli bir görünümü destekler.",
    image: "/assets/images/services/ozlem-agda-salonu-manikur.webp",
    noteTitle: "El Bakımı",
    note: "Temiz ve özenli görünüm",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const iconClass = "h-4 w-4";

  if (name === "laser") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path
          d="M4 20 20 4M14 4h6v6M5 11l3 3M10 6l2 2M16 14l2 2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "makeup") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path
          d="m14 4 6 6-9.5 9.5H5v-5.5L14 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m12.5 5.5 6 6M5 19.5l4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "hydra") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={iconClass}>
        <path
          d="M12 3s6 6.3 6 11a6 6 0 0 1-12 0c0-4.7 6-11 6-11Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M9 14.5a3 3 0 0 0 3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={iconClass}>
      <path
        d="M12 21c4.5-2.7 7-6.2 7-10.2A6.8 6.8 0 0 0 12 4a6.8 6.8 0 0 0-7 6.8C5 14.8 7.5 18.3 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5c1.4-1.1 4.6-1.1 6 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BeautyStoriesCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(34);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  function closeActiveCard() {
    setActiveIndex(null);
  }

  function scrollByCard(direction: "prev" | "next") {
    if (
      (direction === "prev" && !canScrollPrev) ||
      (direction === "next" && !canScrollNext)
    ) {
      return;
    }

    closeActiveCard();

    scrollerRef.current?.scrollBy({
      left: direction === "next" ? 300 : -300,
      behavior: "smooth",
    });
  }

  function toggleCard(index: number) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  function updateProgress() {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const maxScroll = scroller.scrollWidth - scroller.clientWidth;
    const scrollRatio =
      maxScroll > 0 ? Math.min(scroller.scrollLeft / maxScroll, 1) : 0;

    setProgress(34 + scrollRatio * 48);
    setCanScrollPrev(scroller.scrollLeft > 8);
    setCanScrollNext(scroller.scrollLeft < maxScroll - 8);
  }

  useEffect(() => {
    updateProgress();

    window.addEventListener("resize", updateProgress);

    return () => window.removeEventListener("resize", updateProgress);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const card = scrollerRef.current?.querySelector<HTMLElement>(
      `[data-carousel-card="${activeIndex}"]`,
    );

    requestAnimationFrame(() => {
      if (!card || !scrollerRef.current) {
        return;
      }

      const scroller = scrollerRef.current;
      const lastCardOffset = activeIndex === items.length - 1 ? 160 : 0;
      const targetLeft = card.offsetLeft - scroller.offsetLeft - lastCardOffset;

      scrollerRef.current.scrollTo({
        left: Math.max(targetLeft, 0),
        behavior: "smooth",
      });
    });
  }, [activeIndex]);

  return (
    <section
      className="scroll-reveal overflow-hidden bg-[#F7EFE6] py-12 sm:py-20"
      aria-roledescription="carousel"
      aria-label="Hizmet detayları galerisi"
    >
      <div className="ml-auto w-full max-w-[calc((100vw+80rem)/2)] pl-4 sm:pl-6 lg:pl-8">
        <div
          ref={scrollerRef}
          onScroll={updateProgress}
          onWheel={closeActiveCard}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-6 pr-4 [scrollbar-width:none] sm:gap-6 sm:pb-8 sm:pr-6 lg:pr-8 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={item.label}
                data-carousel-card={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1}. hikaye`}
                className={
                  isActive
                    ? "group relative h-[420px] w-[88vw] max-w-[1120px] shrink-0 overflow-hidden rounded-[10px] bg-[#E8C9B2] pb-8 shadow-[0_24px_70px_rgba(58,42,36,0.16)] motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-in-out sm:w-[84vw] md:h-[560px]"
                    : "group relative h-[420px] w-[84vw] shrink-0 overflow-hidden rounded-[10px] bg-[#E8C9B2] shadow-[0_20px_58px_rgba(58,42,36,0.11)] motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-in-out sm:w-[390px] md:h-[560px]"
                }
              >
                <Image
                  src={item.image}
                  alt={`${item.label} - Özlem Ağda Salonu`}
                  fill
                  className={
                    isActive
                      ? "object-cover object-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      : "object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  }
                  sizes={isActive ? "92vw" : "(min-width: 640px) 390px, 78vw"}
                />
                <div
                  className={
                    isActive
                      ? "absolute inset-0 bg-gradient-to-r from-[#3A2A24]/62 via-[#3A2A24]/26 to-[#3A2A24]/20 transition duration-500"
                      : "absolute inset-0 bg-gradient-to-t from-[#3A2A24]/72 via-[#3A2A24]/10 to-transparent transition duration-500"
                  }
                />

                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#F7EFE6]/28 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:px-4 sm:py-2.5">
                  <ServiceIcon name={item.icon} />
                  {item.label}
                </div>
                <button
                  type="button"
                  onClick={() => toggleCard(index)}
                  aria-label={
                    isActive
                      ? `${item.label} detaylarını kapat`
                      : `${item.label} detaylarını aç`
                  }
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7EFE6] text-lg leading-none text-[#3A2A24] transition hover:bg-[#8F4B38] hover:text-white sm:right-5 sm:top-5"
                >
                  {isActive ? "×" : "+"}
                </button>

                <div
                  className={
                    isActive
                      ? "absolute inset-x-5 bottom-6 max-w-sm translate-y-0 opacity-100 transition-all delay-100 duration-500 sm:left-8 sm:right-auto sm:bottom-8 lg:left-10"
                      : "absolute inset-x-5 bottom-6 translate-y-0 opacity-100 transition-all duration-500"
                  }
                >
                  <h2
                    className={
                      isActive
                        ? "text-2xl font-extralight leading-tight text-white sm:text-4xl"
                        : "text-2xl font-extralight leading-tight text-white sm:text-[2rem]"
                    }
                  >
                    {item.title}{" "}
                    <span className="font-serif italic">
                      {item.italic}
                    </span>
                  </h2>
                  <p
                    className={
                      isActive
                        ? "mt-4 max-w-[360px] text-sm font-medium leading-6 text-white sm:mt-5"
                        : "hidden"
                    }
                  >
                    {item.description}
                  </p>
                  <button
                    type="button"
                    className={
                      isActive
                        ? "mt-6 rounded-full bg-[#F7EFE6] px-6 py-2.5 text-sm font-semibold text-[#3A2A24] transition hover:bg-[#8F4B38] hover:text-white"
                        : "hidden"
                    }
                  >
                    Detayları Gör
                  </button>
                </div>

                <div
                  className={
                    isActive
                      ? "absolute right-6 top-16 hidden w-[260px] translate-x-0 opacity-100 transition-all delay-150 duration-500 lg:block xl:right-8"
                      : "pointer-events-none absolute right-5 top-[34%] hidden w-[240px] translate-x-8 opacity-0 transition-all duration-300 lg:block"
                  }
                >
                  <div className="rounded-[8px] bg-[#3A2A24]/44 p-4 text-white shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7EFE6]/80 text-[#3A2A24]">
                        <ServiceIcon name={item.icon} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{item.noteTitle}</p>
                        <p className="text-xs font-semibold text-white/75">
                          Özlem Ağda
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 font-serif text-lg italic leading-6">
                      “{item.note}”
                    </p>
                  </div>
                  <div className="mt-4 rounded-[8px] bg-[#3A2A24]/44 p-4 text-white shadow-xl backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                      Özlem Plan
                    </p>
                    <p className="mt-3 text-2xl font-light">Kişiye özel</p>
                    <p className="mt-2 text-xs leading-5 text-white/72">
                      Analiz, uygulama ve takip adımları tek bakım deneyiminde birleşir.
                    </p>
                    <div className="mt-5 flex h-12 items-end gap-1.5">
                      {[24, 36, 28, 44, 18, 32, 48, 26, 40].map((height) => (
                        <span
                          key={height}
                          className="w-1.5 rounded-full bg-[#F7EFE6]/85"
                          style={{ height }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
          <div
            aria-hidden="true"
            className="shrink-0 basis-4 sm:basis-6 lg:basis-8"
            style={
              activeIndex === null
                ? undefined
                : { flexBasis: "calc(min(84vw, 1120px) + 2rem)" }
            }
          />
        </div>

        <div className="mt-1 pr-4 sm:pr-36 lg:pr-56 xl:pr-72">
          <div className="relative h-px bg-[#3A2A24]/18">
            <div
              className="absolute left-0 top-0 h-px bg-[#3A2A24] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2.5">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              aria-label="Önceki görseller"
              disabled={!canScrollPrev}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3A2A24]/88 text-base text-white transition hover:-translate-y-0.5 hover:bg-[#8F4B38] disabled:cursor-not-allowed disabled:bg-white/55 disabled:text-[#3A2A24]/35 disabled:hover:translate-y-0 disabled:hover:bg-white/55"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              aria-label="Sonraki görseller"
              disabled={!canScrollNext}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3A2A24]/88 text-base text-white transition hover:-translate-y-0.5 hover:bg-[#8F4B38] disabled:cursor-not-allowed disabled:bg-white/55 disabled:text-[#3A2A24]/35 disabled:hover:translate-y-0 disabled:hover:bg-white/55"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
