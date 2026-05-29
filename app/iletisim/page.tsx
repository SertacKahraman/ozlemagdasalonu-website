import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { businessInfo } from "@/data/site";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "İletişim ve Randevu | Özlem Ağda Salonu Ordu",
  description:
    "Özlem Ağda Salonu Ordu iletişim bilgileri, randevu kanalları, çalışma saatleri ve harita konumu.",
  alternates: {
    canonical: `${businessInfo.baseUrl}/iletisim`,
  },
};

const contactCards = [
  {
    title: "Adres",
    value: "Altınordu / Ordu",
    description: businessInfo.address,
    icon: "pin",
    href: "#harita",
  },
  {
    title: "Telefon",
    value: businessInfo.phone,
    description: "Randevu ve hızlı bilgi için arayabilirsiniz.",
    icon: "phone",
    href: `tel:${businessInfo.phone.replace(/\s/g, "")}`,
  },
  {
    title: "WhatsApp",
    value: businessInfo.whatsapp,
    description: "Randevu ve hizmet bilgisi için mesaj yazabilirsiniz.",
    icon: "whatsapp",
    href: `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`,
  },
  {
    title: "E-posta",
    value: businessInfo.email,
    description: "Detaylı bilgi talepleriniz için e-posta gönderebilirsiniz.",
    icon: "mail",
    href: `mailto:${businessInfo.email}`,
  },
  {
    title: "Çalışma Saatleri",
    value: "09:30 - 18:00",
    description: "Cumartesi 10:30 - 17:00, Pazar kapalı.",
    icon: "clock",
    href: "#iletisim-formu",
  },
];

const contactFaqs = [
  {
    question: "Mesajıma ne kadar sürede dönüş yapılır?",
    answer:
      "Çalışma saatleri içinde gelen mesajlara genellikle aynı gün dönüş yapılır. Yoğunluk durumunda yanıt süresi değişebilir.",
  },
  {
    question: "Randevu almadan salona gelebilir miyim?",
    answer:
      "Boşluk durumuna göre yardımcı olunabilir; ancak beklememek için gelmeden önce WhatsApp veya telefonla uygunluk almanız önerilir.",
  },
  {
    question: "Randevu alırken hangi bilgileri paylaşmalıyım?",
    answer:
      "İstediğiniz hizmeti, uygun olduğunuz gün ve saat aralığını, varsa cilt hassasiyeti veya daha önce yaşadığınız tahriş gibi bilgileri paylaşmanız yeterlidir.",
  },
  {
    question: "Ağda randevusundan önce nelere dikkat etmeliyim?",
    answer:
      "İşlem bölgesinin temiz ve kuru olması, işlemden hemen önce yoğun peeling veya cildi hassaslaştıran ürünlerden kaçınmanız önerilir.",
  },
  {
    question: "Konum ve çalışma saatleri güncel mi?",
    answer:
      "Evet, sayfadaki konum ve çalışma saatleri günceldir. Yine de özel günler ve yoğun dönemler için randevu öncesinde WhatsApp üzerinden teyit almanız önerilir.",
  },
];

function ContactIcon({ name }: { name: string }) {
  const commonProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6.4 6.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2a9.6 9.6 0 0 0-8.3 14.4L2.5 21.8l5.3-1.4A9.6 9.6 0 1 0 12 2.2Zm0 17.4c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-3.1.8.8-3-.2-.3A7.8 7.8 0 1 1 12 19.6Zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.4 6.4 0 0 1-3.2-2.8c-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1s1 2.5 1.1 2.6c.1.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.5-.3Z" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export default function ContactPage() {
  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <main className="bg-[#F7EFE6] text-[#3A2A24]">
        <section className="px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p
                className="contact-rise text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]"
                style={{ animationDelay: "80ms" }}
              >
                İletişim
              </p>
              <h1
                className="contact-rise mt-5 font-serif text-6xl font-medium leading-[0.95] text-[#3A2A24] sm:text-7xl lg:text-8xl"
                style={{ animationDelay: "170ms" }}
              >
                Bizimle İletişime
                <span className="block text-[#7A3429]">Geçin</span>
              </h1>
              <p
                className="contact-rise mt-7 max-w-2xl text-base leading-8 text-[#5F4E46]"
                style={{ animationDelay: "290ms" }}
              >
                Randevu oluşturmak, hizmetler hakkında bilgi almak veya uygun saatleri öğrenmek için
                bize ulaşın. En kısa sürede dönüş yapalım.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
              {contactCards.map((item, index) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="contact-card-reveal group rounded-2xl border border-[#DDB89F]/55 bg-[#FFF8F3] p-6 shadow-[0_16px_45px_rgba(58,42,36,0.06)] transition hover:-translate-y-1 hover:border-[#8F4B38]/70 hover:bg-white"
                  style={{ animationDelay: `${390 + index * 90}ms` }}
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#F2DED1] text-[#7A3429] transition group-hover:bg-[#8F4B38] group-hover:text-white">
                    <ContactIcon name={item.icon} />
                  </div>
                  <h2 className="mt-5 text-base font-semibold text-[#3A2A24]">{item.title}</h2>
                  <p className="mt-3 break-words text-sm font-medium text-[#3A2A24]/82">{item.value}</p>
                  <p className="mt-2 text-xs leading-6 text-[#5F4E46]">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="iletisim-formu" className="px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="contact-panel-reveal" style={{ animationDelay: "650ms" }}>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3A2A24]">
                Mesaj Gönderin
              </h2>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>

            <div id="harita" className="contact-panel-reveal" style={{ animationDelay: "760ms" }}>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#3A2A24]">
                Bizi Ziyaret Edin
              </h2>
              <div className="mt-7 overflow-hidden rounded-2xl border border-[#DDB89F]/55 bg-[#E8C9B2] shadow-[0_18px_55px_rgba(58,42,36,0.08)]">
                <iframe
                  src={businessInfo.mapEmbedUrl}
                  title="Özlem Ağda Salonu harita konumu"
                  loading="lazy"
                  className="h-[460px] w-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#F2DED1] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="contact-panel-reveal mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Merak Edilenler
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-[#3A2A24] sm:text-5xl">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4">
            {contactFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="contact-faq-reveal group rounded-2xl border border-[#DDB89F]/55 bg-[#F7EFE6] p-6"
                style={{ animationDelay: `${900 + index * 80}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-[#3A2A24] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="text-xl text-[#7A3429] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F4E46]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
