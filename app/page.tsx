import Image from "next/image";
import Link from "next/link";
import BeautyStoriesCarousel from "@/components/BeautyStoriesCarousel";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import SectionHeader from "@/components/SectionHeader";
import ServiceExperience from "@/components/ServiceExperience";
import WhatsAppButton from "@/components/WhatsAppButton";
import { businessInfo, faqs, services } from "@/data/site";
import { generateFAQSchema, generateLocalBusinessSchema } from "@/lib/seo";

const trustItems = [
  "Ağda",
  "Lazer Epilasyon",
  "Cilt Bakımı",
  "G5 Bölgesel İncelme",
  "EMS Slim",
  "Manikür",
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <Hero
        title="Ordu Özlem Ağda Salonu"
        description="Ordu'da ağda, lazer epilasyon, cilt bakımı, G5 bölgesel incelme, EMS Slim ve manikür hizmetlerinde hijyenik, sakin ve randevu odaklı bir salon deneyimi sunuyoruz."
      />

      <section className="scroll-reveal overflow-hidden border-y border-[#DDB89F]/30 bg-[#8F4B38] py-4 text-white sm:py-5">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] gap-7 whitespace-nowrap sm:gap-10">
          {[...trustItems, ...trustItems, ...trustItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white sm:gap-4 sm:text-xs sm:tracking-[0.24em]"
            >
              <span className="h-px w-5 bg-white/70 sm:w-7" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <ServiceExperience services={services} />

      <section className="scroll-reveal bg-[#E8C9B2] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8">
          <div className="reveal-item">
            <SectionHeader
              align="left"
              eyebrow="Hakkımızda"
              title="Özlem Ağda Salonu - Hakkımızda"
              description="Özlem Ağda Salonu, Ordu Altınordu'da ağda, lazer epilasyon, cilt bakımı, G5 bölgesel incelme, EMS Slim ve manikür hizmetleri için hijyenik, sakin ve randevu odaklı bir güzellik salonu deneyimi sunar."
            />

            <div className="mt-6 grid gap-4 text-sm leading-7 text-[#3A2A24]/86 sm:text-base sm:leading-8">
              <p>
                Ordu ağda salonu arayanlar için uygulama öncesinde cilt hassasiyeti, işlem bölgesi
                ve bakım beklentisi birlikte değerlendirilir. Ağda ve güzellik uygulamalarında
                temiz ortam, doğru bilgilendirme ve konforlu işlem süreci önceliklidir.
              </p>
              <p>
                Cilt bakımı, lazer epilasyon, G5, EMS Slim ve bakım hizmetlerinde amaç; kişinin ihtiyacına
                uygun, doğal ve düzenli bir salon deneyimi oluşturmaktır. Randevu ve hizmet bilgisi
                için Özlem Ağda Salonu ile WhatsApp üzerinden iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/hakkimizda"
                className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
              >
                Hakkımızda
              </Link>
              <a
                href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
                className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#4C362E] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
              >
                WhatsApp Randevu
              </a>
            </div>
          </div>

          <div className="reveal-item relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[430px] lg:max-w-[520px]">
              <Image
                src="/assets/images/pages/about/ozlem-cabuk-ozlem-agda-salonu.webp"
                alt="Özlem Ağda Salonu Ordu Altınordu güzellik salonu"
                width={820}
                height={980}
                className="h-auto w-full object-contain drop-shadow-[0_24px_38px_rgba(58,42,36,0.16)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal bg-gradient-to-b from-[#E8C9B2] from-0% via-[#F7EFE6] via-24% to-[#F7EFE6] to-100% px-4 pb-18 pt-20 sm:px-6 sm:pb-28 sm:pt-44 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-editorial-sans mx-auto max-w-5xl text-4xl font-light leading-tight text-[#8D6B47] sm:text-7xl sm:leading-none">
            Cildinizde zarif bir ışıltı.
            <span className="mt-2 block font-serif text-3xl italic text-[#6F4D34] sm:text-6xl">
              Size özel bir bakım deneyimi.
            </span>
          </h2>
          <a
            href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
            className="mt-8 inline-flex rounded-full bg-[#8D6B47] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8D6B47]/18 transition hover:-translate-y-0.5 hover:bg-[#6F4D34] sm:mt-10 sm:px-8"
          >
            WhatsApp ile Bilgi Al
          </a>
        </div>
      </section>

      <BeautyStoriesCarousel />

      <section className="scroll-reveal bg-[#F7EFE6] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col justify-between gap-4 border-b border-[#DDB89F]/45 pb-6 sm:mb-9 sm:gap-5 sm:pb-7 lg:flex-row lg:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A3429] sm:text-xs sm:tracking-[0.28em]">
                Konum
              </p>
              <h3 className="mt-3 max-w-3xl font-serif text-3xl font-medium leading-tight text-[#3A2A24] sm:mt-4 sm:text-5xl">
                Yol tarifini aç, randevunu WhatsApp'tan netleştir.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#3A2A24]/82 lg:text-right">
              Altınordu / Ordu çevresinde ağda ve bakım randevusu için gelmeden önce uygun saat bilgisini alabilirsiniz.
            </p>
          </div>

          <div className="relative overflow-hidden border-y border-[#DDB89F]/45 bg-[#E8C9B2] shadow-[0_24px_70px_rgba(58,42,36,0.10)]">
            <div className="relative min-h-[300px] sm:min-h-[480px] lg:min-h-[560px]">
            <iframe
              title="Özlem Ağda Salonu Google Harita"
              src={businessInfo.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
            </div>

            <div className="bg-[#FFF8F2] px-4 py-5 backdrop-blur-md sm:px-5 lg:absolute lg:inset-x-8 lg:bottom-8">
              <div className="grid gap-5 lg:grid-cols-[0.8fr_1.45fr_auto] lg:items-center">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                    Bölge
                  </p>
                  <p className="mt-1 text-base font-semibold text-[#2F211C]">Yeni Mahalle / Altınordu</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                    Güncel Çalışma
                  </p>
                  <div className="mt-2 grid gap-x-5 gap-y-2 text-[13px] sm:grid-cols-2">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#3A2A24]/76">Pazartesi</span>
                      <strong className="font-semibold text-[#2F211C]">09:30 - 18:00</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#3A2A24]/76">Salı</span>
                      <strong className="font-semibold text-[#2F211C]">09:30 - 18:00</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#3A2A24]/76">Çarşamba</span>
                      <strong className="font-semibold text-[#2F211C]">09:30 - 18:00</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#3A2A24]/76">Perşembe</span>
                      <strong className="font-semibold text-[#2F211C]">09:30 - 18:00</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#3A2A24]/76">Cuma</span>
                      <strong className="font-semibold text-[#2F211C]">09:30 - 18:00</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#3A2A24]/76">Cumartesi</span>
                      <strong className="font-semibold text-[#2F211C]">10:30 - 17:00</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:col-span-2">
                      <span className="text-[#3A2A24]/76">Pazar</span>
                      <strong className="font-semibold text-[#2F211C]">Kapalı</strong>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`}
                    className="inline-flex justify-center rounded-full bg-[#8F4B38] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
                  >
                    WhatsApp Randevu
                  </a>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=%C3%96zlem%20A%C4%9Fda%20ve%20Bak%C4%B1m%20Salonu%2C%20Alt%C4%B1nordu%2C%20Ordu"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-6 py-3 text-sm font-semibold text-[#2F211C] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
                  >
                    Haritada Aç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
