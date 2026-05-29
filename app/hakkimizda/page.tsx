import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageIntro from "@/components/PageIntro";
import { businessInfo } from "@/data/site";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Özlem Ağda Salonu Hakkında | Ordu Altınordu",
  description:
    "Özlem Ağda Salonu'nun Ordu Altınordu'da ağda, cilt bakımı ve güzellik uygulamalarındaki salon yaklaşımını inceleyin.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/hakkimizda`,
  },
};

const principles = [
  {
    title: "Hijyen",
    description:
      "Uygulama alanı, kullanılan malzemeler ve işlem akışı her randevuda temiz ve düzenli tutulur.",
  },
  {
    title: "Konfor",
    description:
      "Ağda ve bakım süreçlerinde cilt hassasiyeti dikkate alınır, işlem öncesi beklenti netleştirilir.",
  },
  {
    title: "Doğal Bakım",
    description:
      "Kaş, cilt ve güzellik uygulamalarında abartısız, kişiye yakışan ve temiz bir görünüm hedeflenir.",
  },
];

const processSteps = [
  "İhtiyaç ve cilt hassasiyeti dinlenir.",
  "Uygulama bölgesi ve işlem akışı netleştirilir.",
  "Randevu sonrası bakım önerileri paylaşılır.",
];

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
  ];

  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <PageIntro
        breadcrumbs={breadcrumbs}
        eyebrow="Özlem Ağda Salonu"
        title="Hakkımızda"
        description="Ordu'da ağda, cilt bakımı ve güzellik uygulamalarını sakin, hijyenik ve randevu odaklı bir salon deneyimiyle sunuyoruz."
        showTopBar={false}
      />

      <section className="scroll-reveal bg-[#F7EFE6] px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="reveal-item relative">
            <div className="absolute -left-5 top-10 h-24 w-16 rounded-full bg-[#8F4B38]/18" />
            <div className="relative bg-transparent">
              <Image
                src="/assets/images/pages/about/ozlem-cabuk-ozlem-agda-salonu.webp"
                alt="Özlem Ağda Salonu Ordu Altınordu güzellik salonu"
                width={900}
                height={1100}
                className="h-auto w-full object-contain drop-shadow-[0_24px_38px_rgba(58,42,36,0.16)]"
                priority
              />
            </div>
          </div>

          <div className="reveal-item">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A3429]">
              Salon Yaklaşımı
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              Bakımı aceleye getirmeyen, cildi ve konforu önemseyen bir deneyim.
            </h2>
            <div className="mt-6 grid gap-5 text-sm leading-8 text-[#5F4E46]">
              <p>
                Özlem Ağda Salonu; ağda, lazer epilasyon, cilt bakımı ve güzellik
                uygulamalarında temiz, sakin ve güven veren bir süreç sunmak için çalışır.
                Her randevuda kişinin beklentisi, cilt hassasiyeti ve işlem sonrası ihtiyaçları
                birlikte değerlendirilir.
              </p>
              <p>
                Amacımız yalnızca uygulamayı tamamlamak değil; randevu öncesinden işlem
                sonrasına kadar anlaşılır bilgi veren, konforlu ve düzenli bir bakım rutini
                oluşturmaktır.
              </p>
            </div>

            <div className="mt-8 grid gap-4 border-y border-[#DDB89F]/50 py-6 sm:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="reveal-item">
                  <h3 className="font-serif text-2xl font-medium text-[#3A2A24]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="reveal-item">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7A3429]">
              Randevu Akışı
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-medium leading-tight text-[#3A2A24]">
              İlk mesajdan işlem sonrasına kadar net bir süreç.
            </h2>
          </div>

          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="reveal-item grid gap-4 border-t border-[#8F4B38]/24 py-5 sm:grid-cols-[72px_1fr]"
              >
                <span className="font-serif text-3xl font-medium text-[#7A3429]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-8 text-[#3A2A24]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}

