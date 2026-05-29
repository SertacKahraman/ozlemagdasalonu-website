import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { blogPosts, businessInfo } from "@/data/site";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Ordu Ağda ve Güzellik Rehberi",
  description:
    "Ordu'da ağda, cilt bakımı, lazer epilasyon ve profesyonel bakım hakkında pratik rehberler ve Özlem Ağda Salonu blog yazıları.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/blog`,
  },
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPage() {
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Blog", href: "/blog" },
  ];
  const featuredPost =
    blogPosts.find((post) => post.slug === "agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri") ??
    blogPosts[0];
  const remainingPosts = blogPosts.filter((post) => post.id !== featuredPost?.id);
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Özlem Ağda Salonu Blog",
    description: metadata.description,
    url: `${businessInfo.baseUrl}/blog`,
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `${businessInfo.baseUrl}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={blogSchema} />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Ordu Ağda ve Güzellik Rehberi"
        label="Blog & Haberler"
        title="Bakım kararını kolaylaştıran net rehberler"
        description="Ağda öncesi hazırlık, işlem sonrası bakım, cilt bakımı ve güzellik salonu seçimi hakkında en çok merak edilen konuları sade bir yapıda topladık."
        showTopBar={false}
      />

      {featuredPost ? (
        <section className="scroll-reveal bg-[#F7EFE6] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="featured-post-intro mx-auto grid max-w-7xl overflow-hidden border border-[#DDB89F]/45 bg-white shadow-[0_24px_80px_rgba(58,42,36,0.1)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <Link href={`/blog/${featuredPost.slug}`} className="relative min-h-[320px] overflow-hidden bg-[#E8C9B2] sm:min-h-[420px]">
              <Image
                src={featuredPost.image}
                alt={`${featuredPost.title} - Özlem Ağda Salonu blog`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </Link>

            <article className="p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7A3429]">
                <span>Öne Çıkan Yazı</span>
                <span className="h-1 w-1 rounded-full bg-[#DDB89F]" aria-hidden="true" />
                <time dateTime={featuredPost.publishedAt}>
                  {formatDate(featuredPost.publishedAt)}
                </time>
              </div>

              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
                <Link href={`/blog/${featuredPost.slug}`} className="transition hover:text-[#7A3429]">
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="mt-5 text-base leading-8 text-[#3A2A24]/72">
                {featuredPost.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[#E8C9B2] px-3 py-2 text-xs font-semibold text-[#6C5A52]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${featuredPost.slug}`}
                className="mt-9 inline-flex bg-[#3A2A24] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8F4B38]"
              >
                Rehberi Oku
              </Link>
            </article>
          </div>
        </section>
      ) : null}

      <section className="scroll-reveal bg-[#F7EFE6] px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 border-b border-[#DDB89F]/45 pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Tüm Yazılar
              </p>
              <h2 className="mt-3 font-serif text-4xl font-medium text-[#3A2A24]">
                Arama niyetine göre bakım içerikleri
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {remainingPosts.map((post, index) => (
              <article
                key={post.id}
                className="blog-card-reveal group border border-[#DDB89F]/35 bg-white shadow-[0_18px_60px_rgba(58,42,36,0.07)] transition duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${60 + Math.min(index * 70, 420)}ms` }}
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-[#E8C9B2]">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Özlem Ağda Salonu blog`}
                    width={760}
                    height={520}
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                    style={{ animationDelay: `${90 + Math.min(index * 70, 420)}ms` }}
                  />
                </Link>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A3429]">
                    <span>{post.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[#DDB89F]" aria-hidden="true" />
                    <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-7 text-[#3A2A24]">
                    <Link href={`/blog/${post.slug}`} className="transition hover:text-[#7A3429]">
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#5F4E46]">{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-[#7A3429] transition hover:text-[#3A2A24]"
                  >
                    Yazıyı Oku
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#F7EFE6] pb-20 sm:pb-28" />
    </>
  );
}

