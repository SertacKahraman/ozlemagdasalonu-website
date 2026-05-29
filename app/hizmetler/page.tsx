import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { businessInfo, services } from "@/data/site";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ordu Ağda ve Güzellik Hizmetleri | Özlem Ağda Salonu",
  description:
    "Ordu Altınordu'da ağda, lazer epilasyon, cilt bakımı, G5 bölgesel incelme, EMS Slim ve manikür hizmetlerini inceleyin.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/hizmetler`,
  },
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
  ];
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Özlem Ağda Salonu Hizmetleri",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: service.seo.canonicalUrl,
      description: service.shortDescription,
    })),
  };

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={serviceListSchema} />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Bakım ve Güzellik"
        title="Hizmetler"
        description="Ağda, cilt bakımı ve güzellik uygulamalarında sunulan hizmetler."
        showTopBar={false}
      />

      <section className="scroll-reveal service-scroll bg-[#F7EFE6] px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-5 border-y border-[#DDB89F]/65 py-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Ordu Altınordu'da ağda ve güzellik hizmetleri
            </h2>
            <div className="grid gap-4 text-sm leading-7 text-[#5F4E46]">
              <p>
                Özlem Ağda Salonu'nda ağda, lazer epilasyon, cilt bakımı, G5 bölgesel incelme,
                EMS Slim ve manikür hizmetleri randevu odaklı şekilde planlanır.
              </p>
              <p>
                Her hizmet kartından detay sayfasına geçerek işlem süresi, uygulama süreci,
                randevu öncesi dikkat edilecekler ve sık sorulan sorular hakkında bilgi alabilirsiniz.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/hizmetler/${service.slug}`}
                className="group overflow-hidden rounded-lg border border-[#DDB89F]/55 bg-[#FFF8F3] transition hover:-translate-y-1 hover:border-[#8F4B38]/55"
              >
                <span className="relative block h-60 bg-[#E8C9B2]">
                  <Image
                    src={service.image}
                    alt={`${service.title} hizmeti - ${businessInfo.name}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </span>

                <span className="block p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                    Özlem Hizmeti
                  </span>
                  <span className="mt-3 block text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                    {service.title}
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-[#5F4E46]">
                    {service.shortDescription}
                  </span>

                  <span className="mt-5 grid gap-2 border-t border-[#E8C9B2]/80 pt-4 text-sm text-[#5F4E46]">
                    <span className="flex items-center justify-between gap-4">
                      <span>Süre</span>
                      <strong className="font-semibold text-[#2F211C]">{service.duration}</strong>
                    </span>
                    <span className="flex items-center justify-between gap-4">
                      <span>Fiyat</span>
                      <strong className="text-right font-semibold text-[#2F211C]">
                        {service.priceText}
                      </strong>
                    </span>
                  </span>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#7A3429]">
                    Detayları İncele
                    <ArrowIcon />
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-5 border-t border-[#DDB89F]/65 pt-7 text-sm leading-7 text-[#5F4E46] lg:grid-cols-3">
            <p>
              Hizmet seçimi yapılırken cilt hassasiyeti, işlem bölgesi, beklenti ve randevu süresi
              birlikte değerlendirilmelidir.
            </p>
            <p>
              Ağda ve bakım uygulamalarında hijyen, doğru bilgilendirme ve işlem sonrası bakım
              önerileri daha konforlu bir salon deneyimi sağlar.
            </p>
            <p>
              Ordu Altınordu'da randevu almak için WhatsApp üzerinden hizmet adını ve uygun
              olduğunuz saat aralığını paylaşabilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
