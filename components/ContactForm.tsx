export default function ContactForm() {
  const fieldClass =
    "mt-2 w-full rounded-2xl border border-[#DDB89F]/55 bg-[#FFF8F3] px-5 py-4 text-sm text-[#3A2A24] outline-none transition placeholder:text-[#3A2A24]/35 hover:border-[#D9AD91] focus:border-[#8F4B38] focus:bg-white focus:ring-4 focus:ring-[#8F4B38]/10";
  const labelClass = "text-xs font-semibold uppercase tracking-[0.2em] text-[#7A3429]";

  return (
    <form className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Ad Soyad
          </label>
          <input id="name" name="name" type="text" placeholder="Adınız Soyadınız" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" placeholder="+90 (___) ___ __ __" className={fieldClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            E-posta
          </label>
          <input id="email" name="email" type="email" placeholder="ornek@email.com" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="subject" className={labelClass}>
            Konu
          </label>
          <select id="subject" name="subject" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Konu Seçiniz
            </option>
            <option>Randevu Talebi</option>
            <option>Hizmet Bilgisi</option>
            <option>Çalışma Saatleri</option>
            <option>Diğer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Randevu veya hizmet hakkında kısa bilgi verin..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex w-fit items-center gap-3 rounded-full bg-[#3A2A24] px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(58,42,36,0.16)] transition hover:-translate-y-0.5 hover:bg-[#8F4B38]"
        >
          <span aria-hidden="true">↗</span>
          Form Yakında Aktif
        </button>
        <p className="max-w-sm text-xs leading-6 text-[#5F4E46]">
          Form aktif edilene kadar WhatsApp veya telefon üzerinden hızlıca ulaşabilirsiniz.
        </p>
      </div>
    </form>
  );
}
