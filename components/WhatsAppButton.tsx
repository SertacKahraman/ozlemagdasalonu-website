import { businessInfo } from "@/data/site";

export default function WhatsAppButton() {
  const phone = businessInfo.whatsapp.replace(/\D/g, "");

  return (
    <a
      href={`https://wa.me/${phone}`}
      aria-label="WhatsApp'tan randevu al"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_42px_rgba(37,211,102,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1DB954] sm:bottom-5 sm:right-5 sm:h-13 sm:w-13"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6 sm:h-7 sm:w-7"
        fill="currentColor"
      >
        <path d="M16.03 4C9.4 4 4.01 9.36 4.01 15.94c0 2.25.64 4.44 1.84 6.33L4 29l6.94-1.81a12.1 12.1 0 0 0 5.09 1.12h.01c6.63 0 12.02-5.36 12.02-11.94C28.06 9.36 22.66 4 16.03 4Zm0 22.28h-.01a10.04 10.04 0 0 1-5.1-1.39l-.37-.22-4.12 1.07 1.1-4-.24-.39a9.85 9.85 0 0 1-1.52-5.41c0-5.45 4.47-9.88 9.96-9.88 2.66 0 5.16 1.03 7.04 2.89a9.82 9.82 0 0 1 2.92 7c0 5.45-4.47 9.88-9.96 9.88Zm5.46-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.19-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.48-.89-.79-1.5-1.77-1.67-2.06-.17-.29-.02-.45.13-.6.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.19.05-.37-.03-.51-.07-.15-.67-1.6-.92-2.19-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.46 0 1.45 1.07 2.85 1.22 3.05.15.19 2.1 3.19 5.09 4.47.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
