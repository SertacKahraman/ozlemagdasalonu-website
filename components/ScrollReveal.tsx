"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const blogCards = document.querySelectorAll<HTMLElement>(".blog-card-reveal");
    const initiallyVisibleSections = new Set<HTMLElement>();

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88 && rect.bottom > 0) {
        initiallyVisibleSections.add(section);
      }
    });

    sections.forEach((section) => {
      const children = Array.from(section.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement,
      );

      children.forEach((child, index) => {
        child.classList.add("reveal-item");
        child.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
      });

      if (initiallyVisibleSections.has(section)) {
        section.classList.add("is-visible");
      }

      section.classList.add("reveal-ready");
    });

    function revealIfInRange(element: HTMLElement) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
        element.classList.add("is-visible");
        return true;
      }

      return false;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.requestAnimationFrame(() => {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => {
      if (!section.classList.contains("is-visible") && !revealIfInRange(section)) {
        observer.observe(section);
      }
    });

    blogCards.forEach((card) => {
      if (!card.classList.contains("is-visible") && !revealIfInRange(card)) {
        observer.observe(card);
      }
    });

    function handleScrollFallback() {
      sections.forEach((section) => revealIfInRange(section));
      blogCards.forEach((card) => revealIfInRange(card));
    }

    window.addEventListener("scroll", handleScrollFallback, { passive: true });
    window.addEventListener("resize", handleScrollFallback);
    handleScrollFallback();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollFallback);
      window.removeEventListener("resize", handleScrollFallback);
    };
  }, [pathname]);

  return null;
}
