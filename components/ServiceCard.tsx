import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-[#DDB89F]/35 bg-white shadow-[0_24px_80px_rgba(58,42,36,0.08)] transition duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.title} hizmeti - Özlem Ağda Salonu`}
          width={760}
          height={560}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7A3429]">
          Özlem Hizmeti
        </p>
        <h3 className="mt-3 font-serif text-2xl font-medium text-[#3A2A24]">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
          {service.shortDescription}
        </p>
        <div className="mt-5 grid gap-3 border-y border-[#E8C9B2]/70 py-4 text-sm text-[#5F4E46]">
          <div className="flex items-center justify-between gap-4">
            <span>Süre</span>
            <strong className="font-semibold text-[#3A2A24]">{service.duration}</strong>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span>Fiyat</span>
            <strong className="text-right font-semibold text-[#3A2A24]">
              {service.priceText}
            </strong>
          </div>
        </div>
        <Link
          href={`/hizmetler/${service.slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-[#7A3429] transition hover:text-[#3A2A24]"
        >
          Detayları İncele
        </Link>
      </div>
    </article>
  );
}
