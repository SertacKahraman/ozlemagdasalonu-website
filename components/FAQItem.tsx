import type { FAQ } from "@/types";

type FAQItemProps = {
  faq: FAQ;
};

export default function FAQItem({ faq }: FAQItemProps) {
  return (
    <details className="group rounded-2xl border border-[#DDB89F]/55 bg-white/45 p-5 shadow-[0_18px_55px_rgba(58,42,36,0.06)] transition open:bg-white/70 sm:p-6">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-left text-base font-semibold text-[#3A2A24] outline-none transition hover:text-[#7A3429] focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-[#8F4B38]/35 [&::-webkit-details-marker]:hidden">
        <span className="leading-7">{faq.question}</span>
        <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-[#F7EFE6] text-lg leading-none text-[#7A3429] transition group-open:rotate-45 group-open:bg-[#8F4B38] group-open:text-white">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-2xl pr-10 text-sm leading-7 text-[#5F4E46]">
        {faq.answer}
      </p>
    </details>
  );
}
