"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blogPosts, businessInfo, navItems, services } from "@/data/site";

const desktopNavItems = navItems.filter((item) => item.href !== "/");
const leftItems = desktopNavItems.slice(0, 2);
const rightItems = desktopNavItems.slice(2);
const blogMenuItems = [
  {
    label: "Öne çıkan yazı",
    post: blogPosts.find((post) => post.slug === "agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri"),
  },
  {
    label: "Ağda öncesi",
    post: blogPosts.find((post) => post.slug === "agda-oncesi-nelere-dikkat-edilmeli"),
  },
  {
    label: "Ağda sonrası",
    post: blogPosts.find((post) => post.slug === "agda-sonrasi-sivilce-ve-tahris-nasil-onlenir"),
  },
  {
    label: "İlk kez ağda",
    post: blogPosts.find((post) => post.slug === "ilk-kez-agda-yaptiracaklar-icin-bilinmesi-gerekenler"),
  },
].filter((item): item is { label: string; post: (typeof blogPosts)[number] } => Boolean(item.post));

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative px-1 py-2 text-[15px] font-semibold tracking-wide text-[#3A2A24] drop-shadow-[0_2px_10px_rgba(247,239,230,0.65)] transition hover:text-[#7A3429]"
    >
      <span>{label}</span>
      <span className="absolute inset-x-1 -bottom-0.5 h-px origin-center scale-x-0 bg-[#8F4B38] transition group-hover:scale-x-100" />
    </Link>
  );
}

function ServicesMenu() {
  return (
    <div className="group relative px-1 py-2">
      <Link
        href="/hizmetler"
        aria-haspopup="menu"
        className="relative text-[15px] font-semibold tracking-wide text-[#3A2A24] drop-shadow-[0_2px_10px_rgba(247,239,230,0.65)] transition group-hover:text-[#7A3429]"
      >
        Hizmetler
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-[#8F4B38] transition group-hover:scale-x-100" />
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-[640px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-4" />
        <div
          role="menu"
          aria-label="Hizmetler Menüsü"
          className="grid overflow-hidden rounded-[18px] border border-white/50 bg-[#F7EFE6]/96 p-3 shadow-[0_34px_90px_rgba(58,42,36,0.22)] ring-1 ring-[#E8C9B2]/55 backdrop-blur-md md:grid-cols-[240px_1fr]"
        >
          <div className="relative min-h-[380px] overflow-hidden rounded-[14px] bg-[#E8C9B2]">
            <Image
              src={services[0].image}
              alt="Özlem Ağda Salonu hizmetleri"
              fill
              sizes="400px"
              className="object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2A24]/58 via-[#3A2A24]/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="font-serif text-2xl font-medium leading-tight">Özlem Ağda Salonu</p>
              <a
                href={`tel:${businessInfo.phone.replace(/\s/g, "")}`}
                className="mt-4 inline-flex border border-white/75 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition hover:bg-white hover:text-[#3A2A24]"
              >
                {businessInfo.phone}
              </a>
            </div>
          </div>

          <div className="px-9 py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#3A2A24]">
              Tüm Hizmetler
            </p>
            <div className="mt-7 grid gap-4">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/hizmetler/${service.slug}`}
                  role="menuitem"
                  className="group/item flex items-center justify-between border-b border-[#E8C9B2]/55 pb-3 text-base font-medium text-[#6C5A52] transition hover:translate-x-1 hover:border-[#8F4B38]/40 hover:text-[#7A3429]"
                >
                  <span>{service.title}</span>
                  <span className="text-sm opacity-0 transition group-hover/item:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogMenu() {
  return (
    <div className="group relative px-1 py-2">
      <Link
        href="/blog"
        aria-haspopup="menu"
        className="relative text-[15px] font-semibold tracking-wide text-[#3A2A24] drop-shadow-[0_2px_10px_rgba(247,239,230,0.65)] transition group-hover:text-[#7A3429]"
      >
        Blog
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-center scale-x-0 bg-[#8F4B38] transition group-hover:scale-x-100" />
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 translate-y-3 pt-4 opacity-0 transition duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-4" />
        <div
          role="menu"
          aria-label="Blog Menüsü"
          className="overflow-hidden rounded-[16px] border border-white/55 bg-[#F7EFE6]/96 p-2.5 shadow-[0_24px_58px_rgba(58,42,36,0.16)] ring-1 ring-[#E8C9B2]/55 backdrop-blur-md"
        >
          <div className="px-3 pb-2 pt-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7A3429]">
              Blog Rehberleri
            </p>
          </div>

          <div className="grid gap-1">
            {blogMenuItems.map((item) => (
              <Link
                key={item.post.id}
                href={`/blog/${item.post.slug}`}
                role="menuitem"
                className="group/item rounded-[10px] px-3 py-2.5 transition hover:bg-white/75"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7A3429]">
                  {item.label}
                </span>
                <span className="mt-1 block text-[13px] font-semibold leading-5 text-[#3A2A24] transition group-hover/item:text-[#7A3429]">
                  {item.post.title}
                </span>
              </Link>
            ))}

            <Link
              href="/blog"
              role="menuitem"
              className="mt-1 flex items-center justify-between rounded-[10px] bg-[#3A2A24] px-3 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#8F4B38]"
            >
              <span>Tüm blog yazıları</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 24);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        isScrolled
          ? "fixed left-0 right-0 top-0 z-50 px-4 py-3 transition-colors duration-200 sm:px-6 lg:px-8"
          : "absolute left-0 right-0 top-0 z-50 px-4 py-7 transition-colors duration-200 sm:px-6 lg:px-8"
      }
    >
      <nav
        aria-label="Ana menü"
        className={
          isScrolled
            ? "mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-5 rounded-[26px] border border-[#E8C9B2]/55 bg-white/45 px-5 py-2.5 shadow-[0_14px_40px_rgba(198,107,78,0.10)] ring-1 ring-white/55 backdrop-blur-xl transition-colors duration-200 md:grid-cols-[1fr_auto_1fr]"
            : "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-7 transition-colors duration-200 md:grid-cols-[1fr_auto_1fr]"
        }
      >
        <div className="hidden items-center justify-end gap-12 md:col-start-1 md:row-start-1 md:flex">
          {leftItems.map((item) =>
            item.href === "/hizmetler" ? (
              <ServicesMenu key={item.href} />
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ),
          )}
        </div>

        <Link
          href="/"
          className="col-start-1 row-start-1 flex justify-self-start drop-shadow-[0_2px_12px_rgba(247,239,230,0.75)] md:col-start-2 md:justify-self-center"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Özlem Ağda Salonu ana sayfa"
        >
          <Image
            src="/assets/brand/ozlem-logo.png"
            alt="Özlem Ağda Salonu"
            width={1155}
            height={544}
            priority
            sizes={isScrolled ? "(max-width: 639px) 70px, (max-width: 1023px) 92px, 105px" : "(max-width: 639px) 100px, (max-width: 1023px) 130px, 145px"}
            className={
              isScrolled
                ? "h-auto w-[70px] object-contain transition-all duration-300 sm:w-[92px] lg:w-[105px]"
                : "h-auto w-[100px] object-contain transition-all duration-300 sm:w-[130px] lg:w-[145px]"
            }
          />
        </Link>

        <button
          type="button"
          className="col-start-3 row-start-1 inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-[#E8C9B2]/70 bg-white/55 shadow-[0_10px_24px_rgba(58,42,36,0.10)] ring-1 ring-white/55 backdrop-blur-md transition hover:border-[#8F4B38]/45 md:hidden"
          aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={
                isMenuOpen
                  ? "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rotate-45 rounded-full bg-[#3A2A24] transition"
                  : "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[#3A2A24] transition"
              }
            />
            <span
              className={
                isMenuOpen
                  ? "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 opacity-0 transition"
                  : "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-[#3A2A24] transition"
              }
            />
            <span
              className={
                isMenuOpen
                  ? "absolute bottom-1/2 left-0 h-0.5 w-5 translate-y-1/2 -rotate-45 rounded-full bg-[#3A2A24] transition"
                  : "absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-[#3A2A24] transition"
              }
            />
          </span>
        </button>

        <div className="hidden items-center justify-start gap-12 md:col-start-3 md:row-start-1 md:flex">
          {rightItems.map((item) =>
            item.href === "/hizmetler" ? (
              <ServicesMenu key={item.href} />
            ) : item.href === "/blog" ? (
              <BlogMenu key={item.href} />
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ),
          )}
        </div>

        {isMenuOpen ? (
          <div className="col-span-3 row-start-2 grid gap-2 rounded-[22px] border border-[#E8C9B2]/60 bg-[#F7EFE6]/96 p-3 shadow-[0_20px_48px_rgba(58,42,36,0.16)] ring-1 ring-white/55 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[14px] px-4 py-3 text-sm font-semibold text-[#3A2A24] transition hover:bg-white/70 hover:text-[#7A3429]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
