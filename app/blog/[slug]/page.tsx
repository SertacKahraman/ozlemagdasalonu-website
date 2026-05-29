import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { blogPosts, businessInfo, services } from "@/data/site";
import { generateBlogMetadata, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/seo";
import type { BlogSection } from "@/types";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const fallbackSections: BlogSection[] = [
  {
    id: "kisa-cevap",
    title: "Kısa cevap",
    paragraphs: [],
  },
  {
    id: "dikkat-edilecekler",
    title: "Dikkat edilecekler",
    paragraphs: [
      "Cilt yapısı, hassasiyet durumu, daha önce yapılan işlemler ve işlem sonrası bakım alışkanlıkları birlikte değerlendirilmelidir.",
      "Profesyonel bir bakım sürecinde amaç yalnızca işlemi tamamlamak değil, kişinin ihtiyacına uygun ve sürdürülebilir bir bakım planı oluşturmaktır.",
    ],
  },
  {
    id: "ordu-rehberi",
    title: "Ordu'da profesyonel bakım",
    paragraphs: [
      "Ordu ve Altınordu çevresinde ağda veya güzellik salonu ararken hijyen, randevu düzeni, işlem öncesi bilgilendirme ve cilde uygun ürün seçimi gibi konulara bakmak karar vermeyi kolaylaştırır.",
    ],
  },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.4l-5-6.5L4.9 21H1.8l7.3-8.4L1.4 3h6.6l4.5 5.9L17.7 3Zm-1.1 16.2h1.7L7.1 4.7H5.3l11.3 14.5Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.2 8.1V6.7c0-.7.5-.9.9-.9h2.3V2h-3.2c-3.6 0-4.4 2.7-4.4 4.4v1.7H7v3.9h2.8v9.9h4.4V12h3l.5-3.9h-3.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.5 8.9H2.8V21h3.7V8.9ZM4.6 3A2.1 2.1 0 1 0 4.6 7.2 2.1 2.1 0 0 0 4.6 3Zm16.6 11.2c0-3.6-1.9-5.6-4.8-5.6-2.2 0-3.2 1.2-3.7 2.1V8.9H9.1V21h3.7v-6c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2V21h3.7v-6.8Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2a9.6 9.6 0 0 0-8.3 14.4L2.5 21.8l5.3-1.4A9.6 9.6 0 1 0 12 2.2Zm0 17.4c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3.1.8.8-3-.2-.3A7.8 7.8 0 1 1 12 19.6Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function formatTagLabel(tag: string) {
  return tag
    .split(" ")
    .map((word) => {
      const normalizedWord = word.toLocaleLowerCase("tr-TR");
      return normalizedWord.charAt(0).toLocaleUpperCase("tr-TR") + normalizedWord.slice(1);
    })
    .join(" ");
}

function calculateReadingTime(post: (typeof blogPosts)[number], sections: BlogSection[]) {
  const textParts = [
    post.title,
    post.excerpt,
    post.content,
  ];

  sections.forEach((section) => {
    textParts.push(section.title, ...section.paragraphs);
    section.subsections?.forEach((subsection) => {
      textParts.push(subsection.title, ...subsection.paragraphs);
    });
  });

  post.faqs?.forEach((faq) => {
    textParts.push(faq.question, faq.answer);
  });

  const wordCount = textParts.join(" ").trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 200));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return generateBlogMetadata(post);
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4);
  const allTags = Array.from(new Set(blogPosts.reduce<string[]>((tags, item) => tags.concat(item.tags), []))).slice(0, 10);
  const getInternalLinkImage = (href: string) => {
    const pathSegments = href.split("/").filter(Boolean);
    const slug = pathSegments[pathSegments.length - 1];
    const linkedBlog = blogPosts.find((item) => item.slug === slug);
    const linkedService = services.find((item) => item.slug === slug);

    return linkedBlog?.image ?? linkedService?.image ?? post.image;
  };
  const sections =
    post.sections && post.sections.length > 0
      ? post.sections
      : fallbackSections.map((section) =>
          section.id === "kisa-cevap" ? { ...section, paragraphs: [post.content] } : section,
        );
  const readingTime = calculateReadingTime(post, sections);
  const hasInternalLinks = Boolean(post.internalLinks?.length);
  const hasFaqs = Boolean(post.faqs?.length);
  const encodedUrl = encodeURIComponent(post.seo.canonicalUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const shareLinks = [

    {
      label: "X'te paylaş",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <XIcon />,
    },
    {
      label: "Facebook'ta paylaş",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FacebookIcon />,
    },
    {
      label: "LinkedIn'de paylaş",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <LinkedInIcon />,
    },
    {
      label: "WhatsApp'ta paylaş",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <WhatsAppIcon />,
    },
  ];
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    keywords: post.tags,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: businessInfo.logoUrl,
      },
    },
    mainEntityOfPage: post.seo.canonicalUrl,
  };

  return (
    <>
      <article className="scroll-reveal bg-[#F8F1EA] px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
        <JsonLd data={articleSchema} />
        <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
        {post.faqs && post.faqs.length > 0 ? <JsonLd data={generateFAQSchema(post.faqs)} /> : null}

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <main>
            <div className="reveal-item max-w-5xl">
              <Breadcrumbs items={breadcrumbs} />

              <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#17110F] sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#5F4E46]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DDB89F]/80 bg-[#F1DED1] px-4 py-2 shadow-[0_10px_30px_rgba(58,42,36,0.05)]">
                  <span className="h-2 w-2 rounded-full bg-[#8F4B38]" />
                  {post.author}
                </span>
                <span className="rounded-full border border-[#DDB89F]/80 bg-[#F1DED1] px-4 py-2 shadow-[0_10px_30px_rgba(58,42,36,0.05)]">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#DDB89F]/80 bg-[#F1DED1] px-4 py-2 shadow-[0_10px_30px_rgba(58,42,36,0.05)]">
                  <ClockIcon />
                  {readingTime} dk okuma
                </span>
                <time
                  className="inline-flex items-center gap-2 rounded-full border border-[#DDB89F]/80 bg-[#F1DED1] px-4 py-2 shadow-[0_10px_30px_rgba(58,42,36,0.05)]"
                  dateTime={post.publishedAt}
                >
                  <CalendarIcon />
                  {formatDate(post.publishedAt)}
                </time>
              </div>

              <div className="relative mt-8 min-h-[320px] overflow-hidden rounded-[22px] bg-[#E8C9B2] sm:min-h-[430px] lg:min-h-[470px]">
                <Image
                  src={post.image}
                  alt={`${post.title} - Özlem Ağda Salonu`}
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="reveal-item mx-auto mt-9 w-full max-w-5xl">
              <p className="max-w-3xl text-xl leading-9 text-[#3A2A24]/80">{post.excerpt}</p>

              <div className="mt-10 grid max-w-3xl gap-9">
                {sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-32 border-b border-[#E8C9B2]/70 pb-9 last:border-b-0 last:pb-0"
                  >
                    <h2 className="text-2xl font-semibold leading-tight tracking-[-0.025em] text-[#17110F] sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 grid gap-5 text-[17px] leading-9 text-[#3A2A24]/80">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p key={paragraph} className={paragraphIndex === 0 ? "text-[#3A2A24]/88" : ""}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.subsections && section.subsections.length > 0 ? (
                      <div className="mt-7 grid gap-6">
                        {section.subsections.map((subsection) => (
                          <div key={subsection.title}>
                            <h3 className="text-lg font-semibold leading-snug text-[#17110F]">
                              {subsection.title}
                            </h3>
                            <div className="mt-3 grid gap-3 text-base leading-8 text-[#3A2A24]/78">
                              {subsection.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>


            </div>
          </main>

          <aside className="reveal-item lg:sticky lg:top-24">
            <div className="rounded-[24px] bg-[#F2DED1] p-6 shadow-[0_22px_80px_rgba(58,42,36,0.08)] ring-1 ring-[#D9AD91]/75">
              <section>
                <p className="text-xs font-semibold text-[#5F4E46]">Sosyal Medyada Paylaş</p>
                <div className="mt-4 flex gap-3">
                  {shareLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F1EA] text-xs font-semibold text-[#2F241F] ring-1 ring-[#D9AD91]/75 transition hover:bg-[#8F4B38] hover:text-white"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </section>

              <section className="mt-8 border-t border-[#D9AD91]/60 pt-7">
                <p className="text-xs font-semibold text-[#5F4E46]">Bu Yazının Etiketleri</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F8F1EA] px-4 py-2 text-xs font-medium text-[#3A2A24] ring-1 ring-[#D9AD91]/75">
                      {formatTagLabel(tag)}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-8 border-t border-[#D9AD91]/60 pt-7">
                <p className="text-xs font-semibold text-[#5F4E46]">İlgili Bloglar</p>
                <div className="mt-4 grid gap-4">
                  {relatedPosts.slice(0, 3).map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group grid grid-cols-[64px_1fr] gap-3">
                      <div className="relative h-16 overflow-hidden rounded-[12px] bg-[#E8C9B2]">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <time className="text-[11px] text-[#5F4E46]" dateTime={relatedPost.publishedAt}>
                          {formatDate(relatedPost.publishedAt)}
                        </time>
                        <p className="mt-1 text-xs font-semibold leading-5 text-[#17110F] transition group-hover:text-[#8F4B38]">
                          {relatedPost.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section className="mt-8 border-t border-[#D9AD91]/60 pt-7">
                <p className="text-xs font-semibold text-[#5F4E46]">Tüm Etiketler</p>
                <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
                  {allTags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-[#3A2A24]/72">
                      {formatTagLabel(tag)}
                    </span>
                  ))}
                </div>
              </section>

              <section className="mt-9">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#17110F]">
                  Randevu Bilgisi Al
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5F4E46]">
                  Ağda ve bakım hizmetleri hakkında kısa bilgi almak için WhatsApp üzerinden bize ulaşın.
                </p>
                <Link
                  href="/iletisim"
                  className="mt-5 inline-flex w-full justify-center rounded-full bg-[#F8F1EA] px-5 py-3 text-sm font-semibold text-[#17110F] ring-1 ring-[#D9AD91]/75 transition hover:bg-[#8F4B38] hover:text-white"
                >
                  İletişime Geç
                </Link>
              </section>
            </div>
          </aside>
        </div>

        {hasInternalLinks || hasFaqs ? (
          <div className="reveal-item mx-auto mt-14 grid w-full max-w-5xl gap-8 border-t border-[#E8C9B2]/80 pt-8 lg:grid-cols-2">
            {hasInternalLinks ? (
              <section>
                <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#17110F]">
                  İlgili hizmet ve rehberler
                </h2>
                <div className="mt-5 grid gap-3">
                  {post.internalLinks?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group grid grid-cols-[92px_1fr] gap-4 rounded-[18px] border border-[#E8C9B2] bg-[#F8F1EA] p-3 transition hover:-translate-y-0.5 hover:border-[#8F4B38]/50 hover:bg-white"
                    >
                      <span className="relative min-h-24 overflow-hidden rounded-[14px] bg-[#E8C9B2]">
                        <Image
                          src={getInternalLinkImage(item.href)}
                          alt={item.label}
                          fill
                          sizes="92px"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </span>
                      <span className="py-1 pr-2">
                        <span className="text-sm font-semibold text-[#8F4B38]">
                          {item.label}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-[#5F4E46]">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {hasFaqs ? (
              <section id="sik-sorulan-sorular">
                <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[#17110F]">
                  Sık sorulan sorular
                </h2>
                <div className="mt-5 grid gap-3">
                  {post.faqs?.map((faq) => (
                    <details
                      key={faq.id}
                      className="group rounded-[18px] border border-[#E8C9B2] bg-[#F8F1EA] p-5"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#17110F]">
                        <span>{faq.question}</span>
                        <span className="text-xl leading-none text-[#8F4B38] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-sm leading-7 text-[#3A2A24]/72">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        ) : null}
      </article>
    </>
  );
}
