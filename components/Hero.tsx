import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/data/site";

type HeroProps = {
  title: string;
  description: string;
};

export default function Hero({ title, description }: HeroProps) {
  const phone = businessInfo.whatsapp.replace(/\D/g, "");

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#E8C9B2]">
      <Image
        src="/assets/images/hero/ozlem-agda-salonu-hero-background.png"
        alt="Özlem Ağda Salonu için güzellik ve bakım konsepti"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center] sm:object-[72%_center] lg:object-[78%_center]"
      />

      <div className="absolute inset-0 bg-[#F7EFE6]/18 sm:bg-[#F7EFE6]/8" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#F7EFE6]/90 via-[#F7EFE6]/68 to-[#F7EFE6]/18 sm:inset-y-0 sm:left-0 sm:w-[62%] sm:from-[#F7EFE6]/82 sm:via-[#F7EFE6]/38 sm:to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-10 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="grid max-w-[760px] gap-5 sm:gap-7">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7A3429] sm:gap-3 sm:text-xs sm:tracking-[0.3em]">
            <span>{businessInfo.name}</span>
            <span className="h-px w-7 bg-[#8F4B38]/65 sm:w-10" />
            <span>Ağda ve güzellik hizmetleri</span>
          </div>

          <h1 className="max-w-[720px] font-serif text-4xl font-medium leading-[1.02] text-[#3A2A24] sm:text-6xl sm:leading-[0.94] lg:text-[82px]">
            {title}
          </h1>

          <div className="grid gap-5 lg:grid-cols-[1fr_220px] lg:items-end">
            <p className="max-w-xl text-sm font-medium leading-7 text-[#4C362E] sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="border-t border-[#8F4B38]/45 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
              <p className="font-serif text-3xl leading-none text-[#7A3429] sm:text-4xl">6</p>
              <p className="mt-2 max-w-[220px] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#7A4A3C] sm:text-xs sm:tracking-[0.22em]">
                Profesyonel bakım hizmeti
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${phone}`}
              className="inline-flex justify-center rounded-full bg-[#8F4B38] px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-[#8F4B38]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3A2A24] sm:px-7 sm:py-3.5"
            >
              WhatsApp'tan Randevu Al
            </a>
            <Link
              href="/hizmetler"
              className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 bg-[#F7EFE6]/70 px-6 py-3 text-sm font-semibold text-[#4C362E] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#F7EFE6] hover:text-[#7A3429] sm:px-7 sm:py-3.5"
            >
              Hizmetleri İncele
            </Link>
          </div>

          <div className="flex w-fit max-w-full flex-wrap gap-2 rounded-[18px] border border-[#DDB89F]/60 bg-[#F7EFE6]/52 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#7A4A3C] backdrop-blur-sm sm:rounded-full sm:px-4 sm:text-xs sm:tracking-[0.2em]">
            <span>Cilt Bakımı</span>
            <span className="text-[#7A3429]/60">·</span>
            <span>Ağda</span>
            <span className="text-[#7A3429]/60">·</span>
            <span>Lazer Epilasyon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
