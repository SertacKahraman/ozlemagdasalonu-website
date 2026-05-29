import type {
  BlogPost,
  BusinessInfo,
  FAQ,
  NavItem,
  Service,
} from "@/types";

const baseUrl = "https://ozlemagdasalonu.com";
const defaultOgImage = `${baseUrl}/assets/images/hero/ozlem-agda-salonu-hero-background.png`;

export const targetKeywords = [
  "Özlem Ağda Salonu",
  "Özlem ağda salonu",
  "Ordu ağda salonu",
  "Ordu ağda",
  "Ordu güzellik merkezi",
  "Ordu cilt bakımı",
  "Ordu lazer epilasyon",
  "Ordu G5 bölgesel incelme",
  "Ordu EMS Slim",
  "Ordu manikür",
  "Altınordu ağda",
  "Altınordu güzellik merkezi",
  "Özlem ağda merkezi",
  "güzellik merkezi",
  "ağda merkezi",
  "profesyonel ağda",
  "cilt bakımı",
  "lazer epilasyon",
  "G5 bölgesel incelme",
  "EMS Slim",
  "manikür",
];

export const businessInfo: BusinessInfo = {
  name: "Özlem Ağda Salonu",
  slogan: "Ağda, cilt bakımı ve güzellik uygulamalarında özenli salon deneyimi",
  description:
    "Ordu'da ağda, lazer epilasyon, cilt bakımı, G5 bölgesel incelme, EMS Slim ve manikür hizmetleri için Özlem Ağda Salonu'ndan WhatsApp ile randevu alın.",
  phone: "+90 506 877 92 28",
  whatsapp: "+90 506 877 92 28",
  email: "cabukozlemmmm@gmail.com",
  address: "Yeni Mah. 302. Sok. No: 13 Kat: 1 Daire: 3 Ada Apt.",
  city: "Ordu",
  district: "Altınordu",
  country: "TR",
  instagram: "https://www.instagram.com/ozlemagdasalonu/",
  workingHours: "Pazartesi - Cuma: 09:30 - 18:00; Cumartesi: 10:30 - 17:00; Pazar: Kapalı",
  mapEmbedUrl: "https://www.google.com/maps?q=%C3%96zlem%20A%C4%9Fda%20ve%20Bak%C4%B1m%20Salonu%2C%20Alt%C4%B1nordu%2C%20Ordu&z=16&output=embed",
  logoUrl: `${baseUrl}/assets/brand/ozlem-logo.png`,
  baseUrl,
  defaultOgImage,
};

export const navItems: NavItem[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

const sharedFaqs: FAQ[] = [
  {
    id: "randevu-gerekli-mi",
    question: "Uygulamalar için randevu gerekli mi?",
    answer: "Evet, sakin ve planlı bir deneyim için randevu almanız önerilir.",
  },
  {
    id: "danisma-yapiliyor-mu",
    question: "İşlem öncesi danışma yapılıyor mu?",
    answer:
      "Evet, işlem öncesinde beklentiniz, cilt hassasiyetiniz ve ihtiyacınız birlikte değerlendirilir.",
  },
  {
    id: "hangi-hizmetler-var",
    question: "Sadece ağda hizmeti mi veriliyor?",
    answer:
      "Hayır. Ağdanın yanında lazer epilasyon, cilt bakımı, G5 bölgesel incelme, EMS Slim ve manikür gibi farklı güzellik uygulamaları da sunulur.",
  },
  {
    id: "agda-oncesi-ne-yapilmali",
    question: "Ağda öncesinde nelere dikkat edilmeli?",
    answer:
      "Uygulama öncesinde cildi tahriş edebilecek yoğun peeling veya güçlü ürünlerden kaçınmanız önerilir. Hassasiyet durumunda işlem öncesi bilgi vermeniz yeterlidir.",
  },
  {
    id: "fiyatlar-nasil-belirleniyor",
    question: "Fiyatlar nasıl belirleniyor?",
    answer:
      "Fiyatlar uygulama türüne, bölgeye ve seans ihtiyacına göre değişebilir. En doğru bilgi randevu veya ön görüşme sırasında paylaşılır.",
  },
];

export const faqs: FAQ[] = sharedFaqs;

export const services: Service[] = [
  {
    id: "service-agda",
    title: "Ağda",
    slug: "agda",
    shortDescription: "Hijyenik ortamda, cilt hassasiyetine dikkat edilerek uygulanan ağda hizmeti.",
    description:
      "Ağda uygulamaları; bölge, cilt hassasiyeti ve konfor ihtiyacı dikkate alınarak planlanır. Amaç, temiz ve özenli bir pürüzsüzlük deneyimi sunmaktır.",
    image: "/assets/images/services/ozlem-agda-salonu-agda-hizmeti.webp",
    priceText: "Bölgeye göre fiyatlandırılır",
    duration: "30 dakika",
    isFeatured: true,
    seo: {
      metaTitle: "Ağda Hizmeti | Özlem Ağda Salonu",
      metaDescription:
        "Hijyenik ortamda profesyonel ağda hizmeti. Özlem Ağda Salonu'nda randevu alarak detaylı bilgi edinin.",
      canonicalUrl: `${baseUrl}/hizmetler/agda`,
      ogTitle: "Ağda Hizmeti | Özlem Ağda Salonu",
      ogDescription: "Cilt hassasiyetine dikkat edilen özenli ağda uygulamaları.",
      ogImage: `${baseUrl}/assets/images/services/ozlem-agda-salonu-agda-hizmeti.webp`,
      keywords: ["ağda", "ağda merkezi", "profesyonel ağda"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-cilt-bakimi",
    title: "Cilt Bakımı",
    slug: "cilt-bakimi",
    shortDescription: "Cilt ihtiyacına göre planlanan nem, arınma ve canlılık odaklı bakım.",
    description:
      "Cilt bakımı uygulamaları; temizlik, nem, canlılık ve denge ihtiyacına göre kişiye özel şekilde değerlendirilir.",
    image: "/assets/images/services/ozlem-agda-salonu-cilt-bakimi.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "1 saat",
    isFeatured: true,
    seo: {
      metaTitle: "Cilt Bakımı | Özlem Ağda Salonu",
      metaDescription:
        "Cildinizin ihtiyacına göre planlanan profesyonel cilt bakımı uygulamaları için Özlem Ağda Salonu'ndan randevu alın.",
      canonicalUrl: `${baseUrl}/hizmetler/cilt-bakimi`,
      ogTitle: "Cilt Bakımı | Özlem Ağda Salonu",
      ogDescription: "Nem, arınma ve canlı görünüm odaklı cilt bakımı deneyimi.",
      ogImage: `${baseUrl}/assets/images/services/ozlem-agda-salonu-cilt-bakimi.webp`,
      keywords: ["cilt bakımı", "profesyonel cilt bakımı", "güzellik merkezi"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-g5-bolgesel-incelme",
    title: "G5 Bölgesel İncelme ve Sıkılaşma",
    slug: "g5-bolgesel-incelme-sikilasma",
    shortDescription: "Bölgesel incelme ve sıkılaşma hedefiyle planlanan G5 uygulaması.",
    description:
      "G5 bölgesel incelme ve sıkılaşma uygulaması; kişinin ihtiyacına ve uygulama bölgesine göre planlanır.",
    image: "/assets/images/services/ozlem-agda-salonu-g5-bolgesel-incelme.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "30 dakika",
    isFeatured: true,
    seo: {
      metaTitle: "G5 Bölgesel İncelme ve Sıkılaşma | Özlem Ağda Salonu",
      metaDescription:
        "G5 bölgesel incelme ve sıkılaşma uygulaması için Özlem Ağda Salonu'ndan randevu ve bilgi alın.",
      canonicalUrl: `${baseUrl}/hizmetler/g5-bolgesel-incelme-sikilasma`,
      ogTitle: "G5 Bölgesel İncelme ve Sıkılaşma | Özlem Ağda Salonu",
      ogDescription: "Bölgesel incelme ve sıkılaşma hedefiyle planlanan G5 uygulaması.",
      ogImage: `${baseUrl}/assets/images/services/ozlem-agda-salonu-g5-bolgesel-incelme.webp`,
      keywords: ["G5 bölgesel incelme", "bölgesel incelme", "sıkılaşma", "güzellik merkezi"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-lazer-epilasyon",
    title: "Lazer Epilasyon",
    slug: "lazer-epilasyon",
    shortDescription: "Kişiye ve bölgeye göre planlanan lazer epilasyon uygulamaları.",
    description:
      "Lazer epilasyon süreci; bölge, kıl yapısı ve cilt hassasiyeti değerlendirilerek düzenli seans planıyla yürütülür.",
    image: "/assets/images/services/ozlem-agda-salonu-lazer-epilasyon.webp",
    priceText: "Bölgeye göre fiyatlandırılır",
    duration: "40 dakika",
    isFeatured: false,
    seo: {
      metaTitle: "Lazer Epilasyon | Özlem Ağda Salonu",
      metaDescription:
        "Kişiye ve bölgeye göre planlanan lazer epilasyon uygulamaları hakkında bilgi almak için Özlem Ağda Salonu ile iletişime geçin.",
      canonicalUrl: `${baseUrl}/hizmetler/lazer-epilasyon`,
      ogTitle: "Lazer Epilasyon | Özlem Ağda Salonu",
      ogDescription: "Hijyenik ortamda planlı lazer epilasyon uygulamaları.",
      ogImage: `${baseUrl}/assets/images/services/ozlem-agda-salonu-lazer-epilasyon.webp`,
      keywords: ["lazer epilasyon", "epilasyon", "güzellik merkezi"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-ems-slim",
    title: "EMS Slim",
    slug: "ems-slim",
    shortDescription: "Kas aktivasyonu ve vücut şekillendirme hedefiyle planlanan EMS Slim uygulaması.",
    description:
      "EMS Slim uygulaması; kişinin ihtiyacına ve uygulama hedeflerine göre randevu planıyla değerlendirilir.",
    image: "/assets/images/services/ozlem-agda-salonu-ems-slim.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "30 dakika",
    isFeatured: false,
    seo: {
      metaTitle: "EMS Slim | Özlem Ağda Salonu",
      metaDescription:
        "EMS Slim uygulaması için Özlem Ağda Salonu'ndan randevu ve hizmet bilgisi alın.",
      canonicalUrl: `${baseUrl}/hizmetler/ems-slim`,
      ogTitle: "EMS Slim | Özlem Ağda Salonu",
      ogDescription: "Vücut şekillendirme hedefiyle planlanan EMS Slim uygulaması.",
      ogImage: `${baseUrl}/assets/images/services/ozlem-agda-salonu-ems-slim.webp`,
      keywords: ["EMS Slim", "ems slim Ordu", "vücut şekillendirme", "güzellik merkezi"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
  {
    id: "service-manikur",
    title: "Manikür",
    slug: "manikur",
    shortDescription: "El ve tırnak bakımına yönelik özenli manikür uygulaması.",
    description:
      "Manikür uygulaması; el ve tırnak bakımını temiz, düzenli ve özenli bir görünüm hedefiyle destekler.",
    image: "/assets/images/services/ozlem-agda-salonu-manikur.webp",
    priceText: "Bilgi için iletişime geçin",
    duration: "30 dakika",
    isFeatured: true,
    seo: {
      metaTitle: "Manikür | Özlem Ağda Salonu",
      metaDescription:
        "El ve tırnak bakımına yönelik manikür uygulaması için Özlem Ağda Salonu'ndan randevu alın.",
      canonicalUrl: `${baseUrl}/hizmetler/manikur`,
      ogTitle: "Manikür | Özlem Ağda Salonu",
      ogDescription: "Temiz ve özenli el-tırnak bakımı için manikür uygulaması.",
      ogImage: `${baseUrl}/assets/images/services/ozlem-agda-salonu-manikur.webp`,
      keywords: ["manikür", "Ordu manikür", "tırnak bakımı", "güzellik merkezi"],
      noIndex: false,
    },
    faqs: sharedFaqs,
  },
];

type BlogPostSeed = Omit<BlogPost, "author" | "updatedAt" | "seo"> & {
  seoTitle?: string;
  metaDescription: string;
  keywords: string[];
};

const blogImages = {
  agdaMiJiletMi: "/assets/images/blog/agda-mi-jilet-mi.jpg.webp",
  agdaNasilYapilir: "/assets/images/blog/agda-nasil-yapilir.jpg.webp",
  agdaOncesi: "/assets/images/blog/agda-oncesi-dikkat-edilmesi-gerekenler.jpg.webp",
  agdaSonrasiKasinti: "/assets/images/blog/agda-sonrasi-kasinti-kabarma.jpg.webp",
  agdaSonrasiNeSurulur: "/assets/images/blog/agda-sonrasi-ne-surulur.jpg.webp",
  agdaSonrasiSivilce: "/assets/images/blog/agda-sonrasi-sivilce-tahris.jpg.webp",
  ilkKezAgda: "/assets/images/blog/ilk-kez-agda-yaptiracaklar.jpg.webp",
  orduAgdaSalonu: "/assets/images/blog/ordu-agda-salonu-secimi.jpg.webp",
  orduGuzellikSalonu: "/assets/images/blog/ordu-guzellik-salonu-rehberi.jpg.webp",
  tumVucutAgda: "/assets/images/blog/tum-vucut-agda.jpg.webp",
  yuzAgdasi: "/assets/images/blog/yuz-agdasi-sonrasi-sivilce.jpg.webp",
};

function createBlogPost({
  seoTitle,
  metaDescription,
  keywords,
  ...post
}: BlogPostSeed): BlogPost {
  return {
    ...post,
    author: businessInfo.name,
    updatedAt: post.publishedAt,
    seo: {
      metaTitle: seoTitle ?? post.title,
      metaDescription,
      canonicalUrl: `${baseUrl}/blog/${post.slug}`,
      ogTitle: post.title,
      ogDescription: post.excerpt,
      ogImage: post.image,
      keywords,
      noIndex: false,
    },
  };
}

export const blogPosts: BlogPost[] = [
  createBlogPost({
    id: "blog-ordu-agda-salonu-secimi",
    title: "Ordu Ağda Salonu Seçerken Nelere Dikkat Edilmeli?",
    slug: "ordu-agda-salonu-secerken-nelere-dikkat-edilmeli",
    excerpt:
      "Ordu'da ağda salonu seçerken hijyen, doğru bilgilendirme, cilt hassasiyetine yaklaşım ve işlem sonrası bakım desteği birlikte değerlendirilmelidir.",
    content:
      "Ordu'da ağda salonu seçerken yalnızca konuma veya fiyata bakmak yeterli değildir. Ağda cildi geçici olarak hassaslaştırabileceği için salonun hijyen yaklaşımı, tek kullanımlık malzeme düzeni, uygulama öncesi cilt değerlendirmesi ve işlem sonrası bakım önerileri önemlidir. İlk randevuda işlem yapılacak bölge, daha önce yaşanan tahrişler, kullanılan cilt bakım ürünleri ve beklentiniz açıkça konuşulmalıdır. Güven veren bir salon; acele karar verdirmek yerine süreci anlatır, cildin durumunu dinler ve randevu sonrasında kızarıklık, batık veya hassasiyet riskini azaltmaya yardımcı olacak net bakım önerileri paylaşır.",
    sections: [
      {
        id: "salon-secimi-neden-onemli",
        title: "Ağda salonu seçimi neden önemlidir?",
        paragraphs: [
          "Ağda, tüyleri kökten alan bir işlem olduğu için uygulama sırasında cilt geçici olarak hassaslaşabilir. Bu nedenle salon seçimi yalnızca yakınlık veya randevu kolaylığıyla değerlendirilmemelidir.",
          "Hijyen, uygulama öncesi bilgilendirme, kullanılan ürünlerin cilde uygunluğu ve işlem sonrası bakım önerileri salonun güven veren tarafını gösterir. Özellikle hassas cilt, batık eğilimi veya daha önce ağda sonrası tahriş yaşayan kişiler için bu detaylar daha da önemlidir.",
        ],
      },
      {
        id: "hijyen-ve-uygulama-duzeni",
        title: "Hijyen ve uygulama düzeninde nelere bakılmalı?",
        paragraphs: [
          "Salonun temiz görünmesi tek başına yeterli değildir; uygulama alanının düzeni, kullanılan malzemelerin temizliği ve her danışan için hijyen kurallarına dikkat edilmesi gerekir.",
          "Ağda işlemi öncesinde bölgenin uygun şekilde hazırlanması, uygulama sırasında cildin gereksiz yere zorlanmaması ve işlem bittikten sonra bölgenin yatıştırılması daha konforlu bir deneyim sağlar.",
        ],
      },
      {
        id: "ilk-gorusmede-sorulacaklar",
        title: "İlk görüşmede hangi sorular sorulmalı?",
        paragraphs: [
          "Randevu almadan önce hangi bölgelerde ağda yapılacağını, işlem süresini, işlem sonrası dikkat edilmesi gerekenleri ve cilt hassasiyeti durumunda nasıl ilerlediklerini sorabilirsiniz.",
          "Daha önce ağda sonrası kızarıklık, sivilce, kabarma veya batık yaşadıysanız bunu baştan paylaşmak doğru uygulama planı için önemlidir. Güven veren salonlar bu bilgileri dinler ve kişiye göre yönlendirme yapar.",
        ],
      },
      {
        id: "ordu-altinordu-yerel-secim",
        title: "Ordu ve Altınordu'da salon seçerken yerel sinyaller",
        paragraphs: [
          "Yerel salon seçerken ulaşım kolaylığı, randevuya sadakat, iletişim hızı ve Google işletme bilgilerinin tutarlı olması karar vermeyi kolaylaştırır.",
          "Google yorumları tek başına karar sebebi olmamalıdır; yorum sayısı, son yorumların tarihi, işletmenin verdiği yanıtlar ve web sitesindeki hizmet bilgileri birlikte değerlendirilmelidir.",
        ],
      },
      {
        id: "kacinin",
        title: "Hangi durumlardan kaçınmak gerekir?",
        paragraphs: [
          "Ciltte aktif yara, yoğun tahriş, güneş yanığı veya beklenmeyen hassasiyet varsa işlem öncesinde mutlaka bilgi verilmelidir. Bazı durumlarda işlemi ertelemek cilt sağlığı açısından daha doğru olabilir.",
          "Acele karar vermeye zorlayan, işlem sonrası bakım hakkında bilgi vermeyen veya cilt hassasiyetini önemsemeyen salonlar yerine daha açıklayıcı ve özenli yaklaşan işletmeler tercih edilmelidir.",
        ],
      },
    ],
    faqs: [
      {
        id: "ordu-agda-randevu-gerekir-mi",
        question: "Ordu'da ağda salonuna gitmeden önce randevu almak gerekir mi?",
        answer: "Randevu almak daha doğru olur. Böylece işlem süresi, bölge seçimi ve cilt hassasiyeti önceden konuşulabilir.",
      },
      {
        id: "agda-salonu-seciminde-en-onemli-kriter",
        question: "Ağda salonu seçiminde en önemli kriter nedir?",
        answer: "Hijyen, uygulama öncesi bilgilendirme ve işlem sonrası bakım önerisi birlikte değerlendirilmelidir.",
      },
      {
        id: "yorum-sayisi-yeterli-mi",
        question: "Google yorum sayısı tek başına yeterli mi?",
        answer: "Hayır. Yorumların güncelliği, içerikleri, işletmenin bilgileri ve hizmet açıklamaları birlikte incelenmelidir.",
      },
      {
        id: "hassas-cilt-agda",
        question: "Hassas ciltler ağda yaptırmadan önce ne yapmalı?",
        answer: "Daha önce yaşanan tahrişler, kullanılan bakım ürünleri ve cilt hassasiyeti randevu öncesinde paylaşılmalıdır.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda hizmeti",
        href: "/hizmetler/agda",
        description: "Özlem Ağda Salonu'nda ağda hizmeti ve randevu süreci hakkında bilgi alın.",
      },
      {
        label: "İletişim",
        href: "/iletisim",
        description: "Ordu'da ağda randevusu için salonla iletişime geçin.",
      },
    ],
    cta: {
      title: "Ordu'da ağda randevusu için bilgi alın",
      description:
        "Cilt hassasiyetiniz, işlem bölgesi ve randevu uygunluğu hakkında bilgi almak için Özlem Ağda Salonu ile iletişime geçebilirsiniz.",
      href: "/iletisim",
      label: "Randevu ve Bilgi Al",
    },
    image: blogImages.orduGuzellikSalonu,
    publishedAt: "2026-02-01",
    category: "Ordu Ağda Rehberi",
    tags: ["Ordu ağda salonu", "Altınordu ağda", "ağda salonu seçimi"],
    seoTitle: "Ordu Ağda Salonu Seçerken Nelere Dikkat Edilmeli?",
    metaDescription:
      "Ordu ağda salonu seçerken hijyen, cilt hassasiyeti, kullanılan ürünler, randevu düzeni ve işlem sonrası bakım açısından nelere bakmanız gerektiğini öğrenin.",
    keywords: ["Ordu ağda salonu", "Altınordu ağda salonu", "Ordu ağda", "ağda salonu seçimi"],
  }),
  createBlogPost({
    id: "blog-agda-nasil-yapilir",
    title: "Ağda Nasıl Yapılır? Evde ve Profesyonel Ağda Arasındaki Farklar",
    slug: "agda-nasil-yapilir-evde-agda-ve-profesyonel-agda-arasindaki-farklar",
    excerpt:
      "Ağda, kılı kökten alan geçici bir epilasyon yöntemidir; doğru hazırlık, uygun ürün ve cilt hassasiyetini gözeten uygulama sonucu belirler.",
    content:
      "Ağda uygulamasında amaç, tüyleri kökten alarak daha uzun süre pürüzsüzlük hissi sağlamaktır. Uygulama öncesinde cilt temiz ve kuru olmalı, bölgeye uygun ağda türü seçilmeli ve kıl çıkış yönü dikkate alınmalıdır. Evde ağdada en sık sorunlar fazla sıcak ürün kullanmak, aynı bölgeden tekrar tekrar geçmek ve işlem sonrası cildi tahriş edecek ürünler sürmektir. Profesyonel ağdada ise hijyen, cildin gergin tutulması, bölgeye uygun teknik ve işlem sonrası bakım önerileri daha kontrollü ilerler. Hassas cilt, batık eğilimi veya daha önce tahriş yaşamış kişiler için profesyonel değerlendirme daha güvenli bir başlangıç olabilir.",
    sections: [
      {
        id: "agda-nedir",
        title: "Ağda nedir ve nasıl çalışır?",
        paragraphs: [
          "Ağda, tüyleri cilt yüzeyinden kesmek yerine kökten alan geçici bir epilasyon yöntemidir. Bu nedenle jilete göre pürüzsüzlük hissi daha uzun sürebilir.",
          "Uygulamada ağda ürünü tüylerin bulunduğu bölgeye sürülür ve uygun teknikle çekilerek tüylerin kökten ayrılması hedeflenir. Bu işlem cildi kısa süreli hassaslaştırabileceği için hazırlık ve sonrası bakım önemlidir.",
        ],
      },
      {
        id: "profesyonel-agda-adimlari",
        title: "Profesyonel ağda uygulaması hangi adımlardan oluşur?",
        paragraphs: [
          "Profesyonel uygulamada önce işlem yapılacak bölge değerlendirilir. Ciltte tahriş, yara, güneş yanığı veya hassasiyet varsa uygulama planı buna göre şekillenir.",
          "Bölge temiz ve kuru hale getirilir, uygun ağda türü seçilir, cilt gereksiz yere zorlanmadan işlem yapılır ve sonrasında yatıştırıcı bakım önerileri paylaşılır.",
        ],
      },
      {
        id: "evde-agda-riskleri",
        title: "Evde ağda yaparken en sık yapılan hatalar",
        paragraphs: [
          "Evde ağdada en sık görülen hatalar ürün sıcaklığını kontrol etmemek, aynı bölgeden tekrar tekrar geçmek, cildi yeterince gergin tutmamak ve işlem sonrası parfümlü ya da aktif içerikli ürünler kullanmaktır.",
          "Bu hatalar kızarıklık, tahriş, kabarma ve batık riskini artırabilir. Özellikle yüz, bikini ve koltuk altı gibi hassas bölgelerde dikkatli olmak gerekir.",
        ],
      },
      {
        id: "evde-ve-profesyonel-fark",
        title: "Evde ağda ile profesyonel ağda arasındaki farklar",
        paragraphs: [
          "Evde ağda daha pratik ve düşük maliyetli görünebilir; ancak cilt hassasiyeti, ürün seçimi ve teknik kontrol daha sınırlıdır.",
          "Profesyonel ağdada bölgeye uygun teknik, hijyen, doğru ürün seçimi ve işlem sonrası yönlendirme daha kontrollü ilerler. İlk kez ağda yaptıracak veya hassas cilde sahip kişiler için bu fark önemlidir.",
        ],
      },
      {
        id: "sonrasi-bakim",
        title: "Ağda sonrası nelere dikkat edilmeli?",
        paragraphs: [
          "İlk 24 saat sıcak duş, sauna, yoğun egzersiz, parfümlü ürünler ve dar kıyafetlerden kaçınmak cildin sakinleşmesine yardımcı olur.",
          "Cildi kaşımamak, bölgeyi temiz tutmak ve parfümsüz hafif nemlendiriciler kullanmak daha konforlu bir iyileşme sağlar.",
        ],
      },
    ],
    faqs: [
      {
        id: "agda-ne-kadar-surer",
        question: "Ağda işlemi ne kadar sürer?",
        answer: "Süre işlem yapılacak bölgeye göre değişir. Tek bölge kısa sürebilirken birden fazla bölge için daha uzun randevu planlanır.",
      },
      {
        id: "evde-agda-guvenli-mi",
        question: "Evde ağda güvenli mi?",
        answer: "Doğru ürün ve teknikle yapılabilir; ancak sıcaklık, hijyen ve hassas bölge uygulamalarında hata riski daha yüksektir.",
      },
      {
        id: "profesyonel-agda-acitir-mi",
        question: "Profesyonel ağda acıtır mı?",
        answer: "Kısa süreli acı hissi normaldir. Cilt hazırlığı, doğru teknik ve düzenli uygulama konforu artırabilir.",
      },
      {
        id: "agda-sonrasi-kizariklik-normal-mi",
        question: "Ağda sonrası kızarıklık normal mi?",
        answer: "Kısa süreli kızarıklık ve hassasiyet normal olabilir. Uzun süren, ağrılı veya iltihaplı görünümde profesyonel destek alınmalıdır.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda hizmeti",
        href: "/hizmetler/agda",
        description: "Profesyonel ağda uygulaması ve randevu süreci hakkında bilgi alın.",
      },
      {
        label: "Ağda sonrası bakım",
        href: "/blog/agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
        description: "İşlem sonrası cildi rahatlatmak için neler yapılabileceğini okuyun.",
      },
    ],
    cta: {
      title: "Profesyonel ağda için randevu planlayın",
      description:
        "Ağda uygulamasını evde denemek yerine cilt hassasiyetinize uygun profesyonel destek almak istiyorsanız randevu için bize ulaşabilirsiniz.",
      href: "/iletisim",
      label: "İletişime Geç",
    },
    image: blogImages.agdaNasilYapilir,
    publishedAt: "2026-02-08",
    category: "Ağda Rehberi",
    tags: ["ağda nasıl yapılır", "evde ağda", "profesyonel ağda"],
    seoTitle: "Ağda Nasıl Yapılır? Evde ve Profesyonel Ağda Farkı",
    metaDescription:
      "Ağda nasıl yapılır? Evde ağda ile profesyonel ağda arasındaki farkları, hazırlık adımlarını ve tahrişi azaltmaya yardımcı ipuçlarını öğrenin.",
    keywords: ["ağda nasıl yapılır", "evde ağda", "profesyonel ağda", "ağda uygulaması"],
  }),
  createBlogPost({
    id: "blog-agda-oncesi-dikkat",
    title: "Ağda Öncesi Nelere Dikkat Edilmeli?",
    slug: "agda-oncesi-nelere-dikkat-edilmeli",
    excerpt:
      "Ağda öncesi doğru hazırlık; tahriş, batık ve hassasiyet riskini azaltmaya yardımcı olur ve uygulamanın daha konforlu geçmesini sağlar.",
    content:
      "Ağda öncesinde cildin sakin, temiz ve kuru olması önemlidir. İşlemden hemen önce yoğun peeling, retinol/asit içerikli bakım ürünleri, güneş yanığı oluşturabilecek maruziyet veya cildi hassaslaştıran uygulamalardan kaçınmak gerekir. Randevuya gelmeden önce işlem bölgesinde kızarıklık, yara, aktif tahriş veya daha önce ağdaya bağlı reaksiyon yaşandıysa bu bilgi paylaşılmalıdır. Çok kısa tüylerde ağda yeterli tutunamayabilir; çok uzun tüylerde ise işlem daha rahatsız hissedilebilir. Bu nedenle ilk randevuda bölge, cilt hassasiyeti ve beklenti birlikte değerlendirilmelidir.",
    sections: [
      {
        id: "cilt-hazirligi",
        title: "Ağda öncesi cilt nasıl hazırlanmalı?",
        paragraphs: [
          "Ağda öncesinde cildin temiz, kuru ve sakin olması gerekir. İşlem bölgesinde krem, yoğun yağ, ter veya makyaj kalıntısı olması ağdanın tutuşunu ve işlem konforunu etkileyebilir.",
          "Randevu öncesinde cildi tahriş edecek sert kese, yoğun peeling veya aktif içerikli bakım ürünlerinden kaçınmak daha güvenli bir hazırlık sağlar.",
        ],
      },
      {
        id: "kacinilacak-urunler",
        title: "Hangi ürünlerden kaçınılmalı?",
        paragraphs: [
          "Retinol, asitli peeling, yoğun C vitamini, alkol bazlı ürünler ve cildi hassaslaştıran bakımlar işlemden hemen önce kullanılmamalıdır.",
          "Özellikle yüz bölgesinde aktif içerik kullanıyorsanız randevu öncesinde bunu paylaşmanız doğru uygulama planı için önemlidir.",
        ],
      },
      {
        id: "tuy-uzunlugu",
        title: "Tüy uzunluğu neden önemlidir?",
        paragraphs: [
          "Çok kısa tüylerde ağda yeterince tutunamayabilir; çok uzun tüylerde ise işlem daha rahatsız hissedilebilir. Bu nedenle ilk randevuda bölge ve tüy durumu birlikte değerlendirilmelidir.",
          "Düzenli ağda yaptıran kişilerde randevu aralığı, tüy çıkış düzenine ve işlem yapılan bölgeye göre planlanabilir.",
        ],
      },
      {
        id: "hassasiyet-bilgisi",
        title: "Hangi durumlar önceden söylenmeli?",
        paragraphs: [
          "Güneş yanığı, yara, aktif tahriş, alerjik reaksiyon, batık eğilimi veya daha önce ağda sonrası yoğun kızarıklık yaşandıysa bu bilgi uygulama öncesinde paylaşılmalıdır.",
          "Cilt hassasiyeti baştan konuşulduğunda işlem bölgesi, ürün seçimi ve işlem sonrası bakım daha doğru yönlendirilebilir.",
        ],
      },
    ],
    faqs: [
      {
        id: "agda-oncesi-peeling-yapilir-mi",
        question: "Ağda öncesi peeling yapılır mı?",
        answer: "İşlemden hemen önce sert peeling önerilmez. Cildi tahriş etmeyen nazik bakım rutini randevudan önceki günlerde planlanabilir.",
      },
      {
        id: "agda-oncesi-krem-surulur-mu",
        question: "Ağda öncesi krem sürülür mü?",
        answer: "İşlem bölgesinin temiz ve kuru olması daha uygundur. Yoğun krem veya yağ ağdanın tutuşunu etkileyebilir.",
      },
      {
        id: "agda-oncesi-tuyler-ne-kadar-olmali",
        question: "Ağda öncesi tüyler ne kadar uzun olmalı?",
        answer: "Tüylerin ağdanın tutunabileceği uzunlukta olması gerekir. Çok kısa veya çok uzun tüylerde işlem planı randevu sırasında değerlendirilir.",
      },
      {
        id: "hassas-ciltler-ne-yapmali",
        question: "Hassas ciltler ağda öncesi ne yapmalı?",
        answer: "Daha önce yaşanan tahriş, kullanılan aktif bakım ürünleri ve cilt hassasiyeti randevu öncesinde paylaşılmalıdır.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda hizmeti",
        href: "/hizmetler/agda",
        description: "Ağda uygulaması ve randevu süreci hakkında hizmet sayfasını inceleyin.",
      },
      {
        label: "İlk kez ağda yaptıracaklar",
        href: "/blog/ilk-kez-agda-yaptiracaklar-icin-bilinmesi-gerekenler",
        description: "İlk randevu öncesinde beklenti, hazırlık ve bakım adımlarını okuyun.",
      },
    ],
    image: blogImages.ilkKezAgda,
    publishedAt: "2026-02-15",
    category: "Ağda Öncesi",
    tags: ["ağda öncesi", "ağda hazırlığı", "ağda öncesi bakım"],
    seoTitle: "Ağda Öncesi Nelere Dikkat Edilmeli?",
    metaDescription:
      "Ağda öncesi nelere dikkat edilmeli? Cildi hazırlama, kaçınılması gereken ürünler, tüy uzunluğu ve hassasiyet hakkında pratik rehber.",
    keywords: ["ağda öncesi", "ağda öncesi dikkat", "ağda hazırlığı", "ağda öncesi bakım"],
  }),
  createBlogPost({
    id: "blog-agda-sonrasi-ne-surulur",
    title: "Ağda Sonrası Ne Sürülür? Cildi Rahatlatma Önerileri",
    slug: "agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
    excerpt:
      "Ağda sonrası cildi rahatlatmak için parfümsüz, hafif ve yatıştırıcı ürünler tercih edilmeli; ilk saatlerde tahrişi artırabilecek uygulamalardan kaçınılmalıdır.",
    content:
      "Ağda sonrası ciltte geçici kızarıklık, sıcaklık hissi veya hassasiyet oluşabilir. Bu dönemde amaç cildi sakin tutmak ve bariyeri yormamaktır. Parfümsüz, hafif yapılı nemlendiriciler, aloe vera içeren yatıştırıcı ürünler veya hassas ciltlere uygun bakım ürünleri tercih edilebilir. İlk 24 saat parfümlü losyon, deodorant, yoğun asit/retinol içerikleri, sıcak duş, sauna, solaryum ve yoğun sürtünmeden kaçınmak daha doğru olur. Cildi kaşımamak, bölgeyi temiz tutmak ve dar kıyafet yerine nefes alan kumaşlar seçmek tahriş ihtimalini azaltmaya yardımcı olur.",
    sections: [
      {
        id: "cilt-neden-hassaslasir",
        title: "Ağda sonrası cilt neden hassaslaşır?",
        paragraphs: [
          "Ağda tüyleri kökten aldığı için işlem bölgesinde kısa süreli kızarıklık, sıcaklık hissi veya hassasiyet oluşabilir. Bu durum özellikle hassas ciltlerde daha belirgin hissedilebilir.",
          "İşlemden hemen sonra cilt bariyerini yormamak ve bölgeyi sakin tutmak önemlidir. İlk saatlerde yapılacak yanlış ürün seçimi tahrişi artırabilir.",
        ],
      },
      {
        id: "ne-surulur",
        title: "Ağda sonrası ne sürülür?",
        paragraphs: [
          "Ağda sonrası parfümsüz, hafif ve hassas ciltlere uygun nemlendiriciler tercih edilebilir. Aloe vera içeren yatıştırıcı ürünler de cildi sakinleştirmeye yardımcı olabilir.",
          "Ürün seçerken ağır yağlı, gözenek tıkayabilecek ve yoğun kokulu ürünlerden uzak durmak daha güvenlidir.",
        ],
        subsections: [
          {
            title: "Parfümsüz nemlendiriciler",
            paragraphs: [
              "Basit içerikli, parfümsüz nemlendiriciler cildi yormadan nem desteği sağlayabilir.",
            ],
          },
          {
            title: "Yatıştırıcı bakım ürünleri",
            paragraphs: [
              "Hassas ciltlere uygun yatıştırıcı bakım ürünleri kızarıklık hissini azaltmaya yardımcı olabilir.",
            ],
          },
        ],
      },
      {
        id: "ne-surulmemeli",
        title: "Ağda sonrası ne sürülmemeli?",
        paragraphs: [
          "İlk 24 saat parfümlü losyonlar, deodorant, alkol bazlı ürünler, retinol, AHA/BHA gibi aktif içerikler ve yoğun peeling ürünleri kullanılmamalıdır.",
          "Bu ürünler cildi daha fazla hassaslaştırabilir ve yanma, kızarıklık veya sivilce benzeri kabarıklık riskini artırabilir.",
        ],
      },
      {
        id: "ilk-24-saat",
        title: "İlk 24 saat nelere dikkat edilmeli?",
        paragraphs: [
          "Sıcak duş, sauna, buhar odası, solaryum, yoğun egzersiz ve dar kıyafetlerden kaçınmak gerekir. Terleme ve sürtünme tahrişi artırabilir.",
          "Bölgeyi temiz tutmak, kaşımamak ve nefes alan kıyafetler tercih etmek cildin daha rahat toparlanmasına yardımcı olur.",
        ],
      },
      {
        id: "ne-zaman-destek",
        title: "Ne zaman profesyonel destek alınmalı?",
        paragraphs: [
          "Kızarıklık veya hassasiyet birkaç gün içinde azalmazsa, ağrı artarsa, iltihaplı görünüm oluşursa veya kabarıklıklar yayılırsa profesyonel destek alınmalıdır.",
          "Daha önce benzer reaksiyonlar yaşadıysanız bir sonraki randevu öncesinde bu bilgiyi salonla paylaşmanız doğru olur.",
        ],
      },
    ],
    faqs: [
      {
        id: "agda-sonrasi-aloe-vera",
        question: "Ağda sonrası aloe vera sürülür mü?",
        answer: "Hassas cilde uygun ve parfümsüz aloe vera içerikli ürünler cildi yatıştırmaya yardımcı olabilir.",
      },
      {
        id: "agda-sonrasi-duş",
        question: "Ağda sonrası duş alınır mı?",
        answer: "İlk saatlerde sıcak duş önerilmez. Ilık ve kısa duş tercih edilebilir; cildi ovalamamak gerekir.",
      },
      {
        id: "agda-sonrasi-deodorant",
        question: "Koltuk altı ağdası sonrası deodorant kullanılır mı?",
        answer: "İlk 24 saat parfümlü veya alkol bazlı deodorantlardan kaçınmak daha doğru olur.",
      },
      {
        id: "agda-sonrasi-kizariklik",
        question: "Ağda sonrası kızarıklık ne zaman geçer?",
        answer: "Kısa süreli kızarıklık normal olabilir. Uzun sürerse veya ağrı eşlik ederse profesyonel destek alınmalıdır.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda sonrası sivilce ve tahriş",
        href: "/blog/agda-sonrasi-sivilce-ve-tahris-nasil-onlenir",
        description: "Sivilce benzeri kabarıklıklar ve tahriş riskini azaltmak için önerileri okuyun.",
      },
      {
        label: "Ağda hizmeti",
        href: "/hizmetler/agda",
        description: "Ağda uygulaması ve randevu süreci hakkında detay alın.",
      },
    ],
    cta: {
      title: "Ağda sonrası bakım konusunda destek alın",
      description:
        "Cildiniz hassassa veya ağda sonrası nasıl bakım yapmanız gerektiğinden emin değilseniz randevu öncesinde bize ulaşabilirsiniz.",
      href: "/iletisim",
      label: "WhatsApp ile Bilgi Al",
    },
    image: blogImages.yuzAgdasi,
    publishedAt: "2026-02-22",
    category: "Ağda Sonrası",
    tags: ["ağda sonrası ne sürülür", "ağda sonrası bakım", "cildi rahatlatma"],
    seoTitle: "Ağda Sonrası Ne Sürülür? Cildi Rahatlatma Rehberi",
    metaDescription:
      "Ağda sonrası ne sürülür? Kızarıklık ve hassasiyeti azaltmaya yardımcı yatıştırıcı bakım önerilerini ve kaçınılması gerekenleri okuyun.",
    keywords: ["ağda sonrası ne sürülür", "ağda sonrası bakım", "ağda sonrası kızarıklık", "cilt rahatlatma"],
  }),
  createBlogPost({
    id: "blog-agda-sonrasi-sivilce-tahris",
    title: "Ağda Sonrası Sivilce ve Tahriş Nasıl Önlenir?",
    slug: "agda-sonrasi-sivilce-ve-tahris-nasil-onlenir",
    excerpt:
      "Ağda sonrası sivilce ve tahriş riskini azaltmak için hijyen, sürtünmeyi azaltma, doğru ürün seçimi ve ilk 24 saatlik bakım belirleyicidir.",
    content:
      "Ağda sonrası sivilce gibi görünen küçük kabarıklıklar bazen tahriş, batık eğilimi veya kıl kökü çevresindeki hassasiyetle ilişkili olabilir. Riski azaltmak için işlem sonrası bölgeyi temiz tutmak, ellerle sık temas etmemek, dar ve sürtünen kıyafetlerden kaçınmak, parfümlü veya ağır yağlı ürünler sürmemek önemlidir. İlk gün yoğun egzersiz, sıcak duş, sauna ve havuz gibi cildi yorabilecek temaslar ertelenebilir. Batık eğilimi olan kişilerde, cilt sakinleştikten sonra nazik peeling rutini planlanabilir; ancak işlemden hemen sonra sert peeling yapmak tahrişi artırabilir. Uzun süren, ağrılı veya iltihaplı görünümde profesyonel değerlendirme alınmalıdır.",
    sections: [
      {
        id: "neden-olur",
        title: "Ağda sonrası sivilce ve tahriş neden olur?",
        paragraphs: [
          "Ağda sonrası sivilce gibi görünen küçük kabarıklıklar her zaman klasik sivilce değildir. Bazen kıl kökü çevresindeki geçici hassasiyet, batık eğilimi veya sürtünmeye bağlı tahriş bu görünüme neden olabilir.",
          "Cilt işlemden hemen sonra daha hassas olduğu için yanlış ürün kullanımı, sıcak temas, terleme ve bölgeyi kaşımak şikayetleri artırabilir.",
        ],
      },
      {
        id: "ilk-gun-onlemleri",
        title: "İlk gün alınabilecek önlemler",
        paragraphs: [
          "İlk 24 saat bölgeyi temiz tutmak, dar kıyafetlerden kaçınmak, yoğun egzersiz yapmamak ve sıcak duş/sauna gibi uygulamaları ertelemek tahrişi azaltmaya yardımcı olur.",
          "Parfümlü ürünler, ağır yağlı losyonlar ve aktif içerikli bakım ürünleri işlemden hemen sonra kullanılmamalıdır.",
        ],
      },
      {
        id: "batik-riski",
        title: "Batık riskini azaltmak için ne yapılmalı?",
        paragraphs: [
          "Batık eğilimi olan ciltlerde cilt sakinleştikten sonra nazik peeling rutini planlanabilir. Ancak işlemden hemen sonra sert peeling yapmak tahrişi artırabilir.",
          "Tüylerin çıkış yönü, kıyafet sürtünmesi ve cildin nem dengesi batık oluşumunda etkili olabilir. Bu nedenle bakım rutini kişiye göre düzenlenmelidir.",
        ],
      },
      {
        id: "ne-yapilmamali",
        title: "Tahrişi artırabilecek hatalar",
        paragraphs: [
          "Bölgeyi sık sık elle kontrol etmek, kaşımak, sıcak suyla yıkamak, peeling yapmak veya alkol bazlı ürün sürmek cildi daha fazla yorabilir.",
          "Ağda sonrası kızarıklık olan alana kapatıcı ürünler veya yoğun kokulu losyonlar sürmek sivilce benzeri kabarıklıkları artırabilir.",
        ],
      },
      {
        id: "uzmana-danisma",
        title: "Ne zaman uzmana danışılmalı?",
        paragraphs: [
          "Kabarıklıklar ağrılı hale gelirse, iltihaplı görünüm oluşursa, bölge yayılıyorsa veya şikayetler birkaç gün içinde azalmıyorsa profesyonel destek alınmalıdır.",
          "Aynı reaksiyon her ağda sonrası tekrar ediyorsa bir sonraki işlem öncesinde salonla cilt hassasiyeti mutlaka konuşulmalıdır.",
        ],
      },
    ],
    faqs: [
      {
        id: "agda-sonrasi-sivilce-normal-mi",
        question: "Ağda sonrası sivilce çıkması normal mi?",
        answer: "Küçük kabarıklıklar geçici hassasiyetten kaynaklanabilir. Ağrılı, iltihaplı veya uzun süren durumlarda profesyonel destek alınmalıdır.",
      },
      {
        id: "agda-sonrasi-peeling",
        question: "Ağda sonrası peeling yapılır mı?",
        answer: "İşlemden hemen sonra yapılmamalıdır. Cilt sakinleştikten sonra nazik peeling rutini planlanabilir.",
      },
      {
        id: "dar-kiyafet-tahris",
        question: "Dar kıyafet ağda sonrası tahrişi artırır mı?",
        answer: "Evet. Sürtünme ve terleme tahrişi artırabileceği için ilk gün daha rahat kıyafetler tercih edilmelidir.",
      },
      {
        id: "batik-nasil-azalir",
        question: "Ağda sonrası batık nasıl azaltılır?",
        answer: "Cilt sakinleştikten sonra nazik peeling, düzenli nemlendirme ve sürtünmeyi azaltma batık riskini azaltmaya yardımcı olabilir.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda sonrası kaşıntı ve kabarma",
        href: "/blog/agda-sonrasi-kasinti-ve-kabarma-neden-olur",
        description: "Kabarma ve kaşıntı şikayetleri için ayrı rehberi okuyun.",
      },
      {
        label: "Ağda sonrası ne sürülür?",
        href: "/blog/agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
        description: "İşlem sonrası cildi yatıştırmak için ürün seçimi önerileri.",
      },
    ],
    cta: {
      title: "Ağda sonrası hassasiyet yaşıyorsanız bize danışın",
      description:
        "Daha önce ağda sonrası sivilce, tahriş veya batık yaşadıysanız randevu öncesinde cilt hassasiyetinizi bizimle paylaşabilirsiniz.",
      href: "/iletisim",
      label: "Bilgi Al",
    },
    image: blogImages.agdaSonrasiKasinti,
    publishedAt: "2026-03-01",
    category: "Ağda Sonrası",
    tags: ["ağda sonrası sivilce", "ağda tahrişi", "batık önleme"],
    seoTitle: "Ağda Sonrası Sivilce ve Tahriş Nasıl Önlenir?",
    metaDescription:
      "Ağda sonrası sivilce ve tahriş nasıl önlenir? Hijyen, kıyafet seçimi, ürün kullanımı ve batık riskini azaltmaya yardımcı öneriler.",
    keywords: ["ağda sonrası sivilce", "ağda sonrası tahriş", "ağda sonrası batık", "ağda bakımı"],
  }),
  createBlogPost({
    id: "blog-agda-sonrasi-kasinti-kabarma",
    title: "Ağda Sonrası Kaşıntı ve Kabarma Neden Olur?",
    slug: "agda-sonrasi-kasinti-ve-kabarma-neden-olur",
    excerpt:
      "Ağda sonrası kaşıntı ve kabarma çoğu zaman geçici cilt hassasiyeti, sürtünme, sıcak temas veya uygun olmayan ürün kullanımından kaynaklanabilir.",
    content:
      "Ağda, kılı kökten aldığı için işlem bölgesinde kısa süreli kızarıklık, kaşıntı veya küçük kabarıklıklar görülebilir. Hassas cilt, sıkı kıyafet, terleme, sıcak duş, kaşıma, parfümlü ürünler veya cildi tıkayan ağır yapılı ürünler bu hissi artırabilir. İlk saatlerde bölgeyi serin ve temiz tutmak, kaşımamak, sürtünmeyi azaltmak ve yatıştırıcı bakım kullanmak genellikle daha konforlu bir iyileşme sağlar. Kabarma yayılıyor, ağrı artıyor, iltihaplı görünüm oluşuyor veya şikayetler birkaç gün içinde gerilemiyorsa bir sağlık profesyoneline danışmak gerekir.",
    sections: [
      {
        id: "neden-kasinti-olur",
        title: "Ağda sonrası kaşıntı neden olur?",
        paragraphs: [
          "Ağda tüyleri kökten aldığı için kıl kökü çevresinde geçici hassasiyet oluşabilir. Bu durum bazı kişilerde kaşıntı, sıcaklık hissi veya küçük kabarıklıklarla kendini gösterebilir.",
          "Hassas cilt yapısı, terleme, sıkı kıyafet ve işlem sonrası yanlış ürün kullanımı bu hissi artırabilir.",
        ],
      },
      {
        id: "kabarma-nedenleri",
        title: "Kabarma hangi durumlarda artar?",
        paragraphs: [
          "İşlem sonrası bölgeyi kaşımak, sıcak duş almak, sauna veya yoğun egzersiz yapmak cildi daha fazla yorabilir.",
          "Parfümlü losyon, alkol bazlı ürün veya ağır yağlı bakım ürünleri de işlem sonrası kabarıklık hissini artırabilir.",
        ],
      },
      {
        id: "ilk-saatler",
        title: "İlk saatlerde ne yapılmalı?",
        paragraphs: [
          "Bölgeyi temiz ve serin tutmak, dar kıyafetlerden kaçınmak ve cildi kaşımamak genellikle daha konforlu bir iyileşme sağlar.",
          "Yatıştırıcı ve parfümsüz bakım ürünleri kullanılacaksa hafif yapılı seçenekler tercih edilmeli, cilt beklenmedik tepki verirse ürün kullanımı bırakılmalıdır.",
        ],
      },
      {
        id: "ne-zaman-destek-alinmali",
        title: "Ne zaman profesyonel destek alınmalı?",
        paragraphs: [
          "Kabarma yayılıyor, ağrı artıyor, iltihaplı görünüm oluşuyor veya şikayetler birkaç gün içinde azalmıyorsa sağlık profesyoneline danışılmalıdır.",
          "Aynı tepki her ağda sonrası tekrarlanıyorsa bir sonraki randevuda cilt hassasiyeti mutlaka konuşulmalıdır.",
        ],
      },
    ],
    faqs: [
      {
        id: "agda-sonrasi-kasinti-normal-mi",
        question: "Ağda sonrası kaşıntı normal mi?",
        answer: "Kısa süreli kaşıntı geçici hassasiyetten kaynaklanabilir. Uzayan, ağrılı veya yayılan durumlarda profesyonel destek alınmalıdır.",
      },
      {
        id: "agda-sonrasi-kabarma-gecer-mi",
        question: "Ağda sonrası kabarma ne zaman geçer?",
        answer: "Küçük kabarıklıklar çoğu zaman kısa sürede sakinleşir. Şikayetler birkaç gün içinde azalmıyorsa değerlendirme alınmalıdır.",
      },
      {
        id: "kasinti-icin-ne-surulur",
        question: "Ağda sonrası kaşıntı için ne sürülür?",
        answer: "Parfümsüz, hafif ve yatıştırıcı ürünler tercih edilebilir. Ağır yağlı veya alkol bazlı ürünlerden kaçınmak daha doğru olur.",
      },
      {
        id: "kasinti-olunca-kasimak-zararli-mi",
        question: "Kaşıntı olunca bölgeyi kaşımak zararlı mı?",
        answer: "Kaşımak tahrişi artırabilir. Bölgeyi temiz tutmak ve sürtünmeyi azaltmak daha sağlıklı bir yaklaşımdır.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda sonrası ne sürülür?",
        href: "/blog/agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
        description: "İşlem sonrası cildi yatıştırmak için ürün seçimi ve bakım önerilerini okuyun.",
      },
      {
        label: "Ağda sonrası sivilce ve tahriş",
        href: "/blog/agda-sonrasi-sivilce-ve-tahris-nasil-onlenir",
        description: "Tahriş, batık ve küçük kabarıklık riskini azaltmaya yardımcı öneriler.",
      },
    ],
    image: blogImages.agdaSonrasiNeSurulur,
    publishedAt: "2026-03-08",
    category: "Ağda Sonrası",
    tags: ["ağda sonrası kaşıntı", "ağda sonrası kabarma", "hassas cilt"],
    seoTitle: "Ağda Sonrası Kaşıntı ve Kabarma Neden Olur?",
    metaDescription:
      "Ağda sonrası kaşıntı ve kabarma neden olur? Hassasiyet, sürtünme, sıcak temas ve yanlış ürün kullanımı hakkında pratik bakım rehberi.",
    keywords: ["ağda sonrası kaşıntı", "ağda sonrası kabarma", "ağda sonrası kızarıklık", "ağda hassasiyet"],
  }),
  createBlogPost({
    id: "blog-yuz-agda-sonrasi-sivilce",
    title: "Yüz Ağdası Sonrası Sivilce Nasıl Önlenir?",
    slug: "yuz-agdasi-sonrasi-sivilce-nasil-onlenir",
    excerpt:
      "Yüz bölgesi ağda sonrası sivilce riskini azaltmak için makyaj, yoğun aktif içerikler, güneş hassasiyeti ve gereksiz temas konusunda dikkatli olunmalıdır.",
    content:
      "Yüz bölgesi vücudun birçok alanına göre daha görünür ve hassas olduğu için ağda sonrası bakım daha dikkatli planlanmalıdır. İşlemden sonra ciltte kısa süreli kızarıklık veya küçük kabarıklıklar oluşabilir. Sivilce riskini azaltmak için ilk 24 saat makyaj yapmamak, yüzü sık sık elle temas ettirmemek, parfümlü veya yoğun aktif içerikli ürünlerden kaçınmak ve cildi nazikçe temizlemek önemlidir. Retinol, asitli peeling, yoğun C vitamini gibi hassasiyet artırabilecek ürünler işlemden hemen sonra kullanılmamalıdır. Güneş hassasiyeti oluşabileceği için dışarı çıkarken cildi korumak ve cilt sakinleşene kadar ağır kapatıcı ürünlerden uzak durmak daha sağlıklı bir yaklaşım olur.",
    sections: [
      {
        id: "yuz-bolgesi-neden-hassas",
        title: "Yüz bölgesi neden daha hassastır?",
        paragraphs: [
          "Yüz bölgesi daha görünür ve bakım ürünleriyle daha sık temas eden bir alan olduğu için ağda sonrası hassasiyet daha dikkatli yönetilmelidir.",
          "İşlemden sonra kısa süreli kızarıklık, sıcaklık hissi veya küçük kabarıklıklar görülebilir; bakım rutini bu hassasiyeti artırmayacak şekilde sade tutulmalıdır.",
        ],
      },
      {
        id: "makyaj-ve-aktif-icerikler",
        title: "Makyaj ve aktif içeriklere dikkat",
        paragraphs: [
          "İlk 24 saat ağır makyaj, kapatıcı ürünler ve cildi tıkayabilecek yoğun formüllerden kaçınmak sivilce benzeri görünüm riskini azaltabilir.",
          "Retinol, asitli peeling, yoğun C vitamini ve alkol bazlı ürünler işlemden hemen sonra kullanılmamalıdır.",
        ],
      },
      {
        id: "temas-ve-hijyen",
        title: "Temas ve hijyen neden önemlidir?",
        paragraphs: [
          "Yüzü sık sık elle kontrol etmek, kaşımak veya bölgeyi ovmak tahrişi artırabilir. İşlem sonrası bölge nazikçe temiz tutulmalıdır.",
          "Cildi yatıştırmak için hafif, parfümsüz ve hassas ciltlere uygun ürünler tercih edilebilir.",
        ],
      },
      {
        id: "gunes-hassasiyeti",
        title: "Güneş hassasiyetine karşı ne yapılmalı?",
        paragraphs: [
          "Ağda sonrası yüz bölgesi güneşe karşı daha hassas hissedebilir. Dışarı çıkarken cildi korumak ve cilt sakinleşene kadar yoğun güneş maruziyetinden kaçınmak gerekir.",
          "Beklenmeyen yanma, yaygın kızarıklık veya uzun süren kabarıklık varsa profesyonel destek alınmalıdır.",
        ],
      },
    ],
    faqs: [
      {
        id: "yuz-agdasi-sonrasi-makyaj",
        question: "Yüz ağdası sonrası makyaj yapılır mı?",
        answer: "İlk 24 saat ağır makyaj ve kapatıcı ürünlerden kaçınmak daha doğru olur. Cilt sakinleştikten sonra nazik ürünler tercih edilebilir.",
      },
      {
        id: "yuz-agdasi-sonrasi-sivilce-normal-mi",
        question: "Yüz ağdası sonrası sivilce normal mi?",
        answer: "Küçük kabarıklıklar geçici hassasiyetten kaynaklanabilir. Ağrılı, iltihaplı veya uzun süren durumlarda destek alınmalıdır.",
      },
      {
        id: "yuz-agdasi-sonrasi-retinol",
        question: "Yüz ağdası sonrası retinol kullanılır mı?",
        answer: "Retinol ve asitli ürünler işlemden hemen sonra kullanılmamalıdır; cilt sakinleşene kadar aktif içeriklerden kaçınmak gerekir.",
      },
      {
        id: "yuz-agdasi-sonrasi-gunes",
        question: "Yüz ağdası sonrası güneşe çıkılır mı?",
        answer: "Cilt daha hassas olabileceği için yoğun güneşten kaçınmak ve dışarı çıkarken cildi korumak önemlidir.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda sonrası sivilce ve tahriş",
        href: "/blog/agda-sonrasi-sivilce-ve-tahris-nasil-onlenir",
        description: "Ağda sonrası sivilce ve tahriş riskini azaltmaya yönelik genel rehberi okuyun.",
      },
      {
        label: "Cilt bakımı",
        href: "/hizmetler/cilt-bakimi",
        description: "Cilt ihtiyacına göre planlanan bakım hizmeti hakkında bilgi alın.",
      },
    ],
    image: blogImages.agdaSonrasiSivilce,
    publishedAt: "2026-03-15",
    category: "Yüz Ağdası",
    tags: ["yüz ağdası", "yüz ağda sonrası sivilce", "yüz bölgesi ağda"],
    seoTitle: "Yüz Ağdası Sonrası Sivilce Nasıl Önlenir?",
    metaDescription:
      "Yüz bölgesi ağda sonrası sivilce nasıl önlenir? Makyaj, aktif içerikler, güneş hassasiyeti ve nazik bakım için dikkat edilecekler.",
    keywords: ["yüz ağda sonrası sivilce", "yüz ağdası", "yüz bölgesi ağda", "yüz ağdası sonrası bakım"],
  }),
  createBlogPost({
    id: "blog-agda-mi-jilet-mi",
    title: "Ağda mı Jilet mi? Hangisi Daha Uzun Süre Pürüzsüzlük Sağlar?",
    slug: "agda-mi-jilet-mi-hangisi-daha-uzun-sure-puruzsuzluk-saglar",
    excerpt:
      "Ağda kılı kökten alırken jilet yüzeyden keser; bu nedenle pürüzsüzlük süresi, tahriş riski ve bakım beklentisi farklıdır.",
    content:
      "Ağda ve jilet aynı amaca hizmet etse de ciltte bıraktıkları etki farklıdır. Jilet kılı cilt yüzeyinden keser; hızlı, pratik ve genellikle ağrısızdır ancak pürüzsüzlük süresi daha kısa olabilir. Ağda ise kılı kökten aldığı için pürüzsüzlük hissi genellikle daha uzun sürer, fakat uygulama sırasında hassasiyet, kızarıklık veya batık riski oluşabilir. Jilette kesik, jilet tahrişi ve batık; ağdada ise geçici kızarıklık, kıl kökü hassasiyeti ve batık görülebilir. Seçim yaparken bölge, cilt hassasiyeti, zaman beklentisi ve daha önce yaşanan reaksiyonlar dikkate alınmalıdır. Hassas veya batığa yatkın ciltlerde yöntem kişiye göre planlanmalıdır.",
    sections: [
      {
        id: "temel-fark",
        title: "Ağda ve jilet arasındaki temel fark nedir?",
        paragraphs: [
          "Jilet tüyleri cilt yüzeyinden keser; bu nedenle uygulaması hızlıdır ancak pürüzsüzlük hissi daha kısa sürebilir.",
          "Ağda tüyleri kökten aldığı için pürüzsüzlük hissi genellikle daha uzun sürer, fakat işlem sırasında geçici hassasiyet oluşabilir.",
        ],
      },
      {
        id: "puruzsuzluk-suresi",
        title: "Hangisi daha uzun süre pürüzsüzlük sağlar?",
        paragraphs: [
          "Ağda kılı kökten aldığı için jilete göre daha uzun süre pürüzsüzlük hissi sağlayabilir. Ancak süre kişinin tüy çıkış hızına ve bölgeye göre değişir.",
          "Jilet daha pratik bir çözüm olsa da tüyler yüzeyden kesildiği için tekrar çıkış daha kısa sürede fark edilebilir.",
        ],
      },
      {
        id: "tahris-ve-batik",
        title: "Tahriş ve batık açısından farklar",
        paragraphs: [
          "Jilette kesik, jilet tahrişi ve batık riski görülebilir. Ağdada ise geçici kızarıklık, kıl kökü hassasiyeti ve batık eğilimi oluşabilir.",
          "Hassas veya batığa yatkın ciltlerde yöntem seçimi kişinin cilt geçmişi ve işlem bölgesine göre değerlendirilmelidir.",
        ],
      },
      {
        id: "hangi-durumda-hangisi",
        title: "Hangi durumda hangisi tercih edilmeli?",
        paragraphs: [
          "Zaman kısıtlıysa jilet pratik olabilir; daha uzun süreli pürüzsüzlük beklentisinde ağda tercih edilebilir.",
          "Daha önce tahriş, batık veya yoğun hassasiyet yaşandıysa karar vermeden önce cilt durumu ve bakım rutini birlikte değerlendirilmelidir.",
        ],
      },
    ],
    faqs: [
      {
        id: "agda-mi-jilet-mi-uzun-surer",
        question: "Ağda mı jilet mi daha uzun sürer?",
        answer: "Ağda kılı kökten aldığı için pürüzsüzlük hissi genellikle jilete göre daha uzun sürebilir.",
      },
      {
        id: "jilet-tahris-yapar-mi",
        question: "Jilet tahriş yapar mı?",
        answer: "Yanlış teknik, kuru uygulama veya hassas ciltlerde jilet tahrişi ve batık görülebilir.",
      },
      {
        id: "agda-batik-yapar-mi",
        question: "Ağda batık yapar mı?",
        answer: "Bazı ciltlerde batık eğilimi görülebilir. İşlem sonrası nazik bakım, sürtünmeyi azaltma ve cilt sakinleştikten sonra planlanan peeling rutini yardımcı olabilir.",
      },
      {
        id: "hassas-ciltte-hangi-yontem",
        question: "Hassas ciltlerde hangi yöntem tercih edilmeli?",
        answer: "Tek bir doğru yöntem yoktur. Cilt hassasiyeti, işlem bölgesi ve daha önce yaşanan reaksiyonlar birlikte değerlendirilmelidir.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda hizmeti",
        href: "/hizmetler/agda",
        description: "Profesyonel ağda hizmeti ve randevu süreci hakkında bilgi alın.",
      },
      {
        label: "Ağda sonrası batık ve tahriş",
        href: "/blog/agda-sonrasi-sivilce-ve-tahris-nasil-onlenir",
        description: "Tahriş ve batık riskini azaltmak için işlem sonrası bakım önerilerini inceleyin.",
      },
    ],
    image: blogImages.agdaMiJiletMi,
    publishedAt: "2026-03-22",
    category: "Karşılaştırma",
    tags: ["ağda mı jilet mi", "ağda", "jilet"],
    seoTitle: "Ağda mı Jilet mi? Pürüzsüzlük Süresi ve Farkları",
    metaDescription:
      "Ağda mı jilet mi daha uzun süre pürüzsüzlük sağlar? Ağda ve jilet farklarını, tahriş riskini ve hangi durumda hangisinin seçileceğini okuyun.",
    keywords: ["ağda mı jilet mi", "ağda jilet farkı", "ağda mı daha iyi jilet mi", "pürüzsüzlük"],
  }),
  createBlogPost({
    id: "blog-tum-vucut-agda",
    title: "Tüm Vücut Ağda Nedir? Hangi Bölgeleri Kapsar?",
    slug: "tum-vucut-agda-nedir-hangi-bolgeleri-kapsar",
    excerpt:
      "Tüm vücut ağda, kişinin ihtiyacına göre birden fazla bölgenin aynı randevuda planlandığı kapsamlı bir ağda hizmetidir.",
    content:
      "Tüm vücut ağda, genellikle bacak, kol, koltuk altı ve kişinin tercihine göre yüz, bikini veya diğer bölgelerin birlikte planlandığı kapsamlı bir uygulamadır. Kapsam her salonda aynı olmayabilir; bu nedenle randevu öncesinde hangi bölgelerin dahil olduğu netleştirilmelidir. Cilt hassasiyeti, batık eğilimi, daha önce yaşanan tahrişler ve işlem sonrası günlük plan da değerlendirilmelidir. Tüm vücut uygulamalarında seans süresi daha uzun olabileceği için cildin işlem öncesi hazırlanması ve işlem sonrası ilk 24 saat bakım önerilerine uyulması daha konforlu bir sonuç sağlar.",
    sections: [
      {
        id: "tum-vucut-agda-nedir",
        title: "Tüm vücut ağda nedir?",
        paragraphs: [
          "Tüm vücut ağda, birden fazla bölgenin aynı randevuda planlandığı kapsamlı bir ağda hizmetidir. Amaç, kişinin ihtiyacına göre daha bütünlüklü ve düzenli bir bakım süreci oluşturmaktır.",
          "Kapsam her salonda aynı olmayabilir. Bu nedenle randevu öncesinde hangi bölgelerin dahil olduğu mutlaka netleştirilmelidir.",
        ],
      },
      {
        id: "hangi-bolgeleri-kapsar",
        title: "Tüm vücut ağda hangi bölgeleri kapsar?",
        paragraphs: [
          "Genellikle bacak, kol ve koltuk altı temel bölgeler arasında yer alır. Kişinin tercihine ve salonun hizmet kapsamına göre yüz, bikini veya farklı bölgeler de planlamaya dahil edilebilir.",
          "Randevu öncesinde bölge listesi netleşirse hem süre hem de işlem sonrası bakım daha doğru planlanır.",
        ],
      },
      {
        id: "randevu-oncesi-hazirlik",
        title: "Randevu öncesi nasıl hazırlanılmalı?",
        paragraphs: [
          "İşlemden önce cilt temiz ve sakin olmalıdır. Güneş yanığı, aktif tahriş, yara veya yoğun hassasiyet varsa bu bilgi paylaşılmalıdır.",
          "Çok kısa tüylerde ağda yeterince tutunamayabilir; çok uzun tüylerde işlem daha rahatsız hissedilebilir. İlk randevuda bölge ve tüy durumu birlikte değerlendirilmelidir.",
        ],
      },
      {
        id: "sonrasi-bakim",
        title: "Tüm vücut ağda sonrası bakım",
        paragraphs: [
          "Tüm vücut uygulamalarında işlem alanı daha geniş olduğu için ilk 24 saat bakım daha önemlidir. Sıcak duş, sauna, yoğun egzersiz ve dar kıyafetlerden kaçınmak gerekir.",
          "Cildi kaşımamak, parfümsüz hafif nemlendirici kullanmak ve sürtünmeyi azaltmak daha konforlu bir iyileşme sağlar.",
        ],
      },
      {
        id: "kimler-dikkat-etmeli",
        title: "Kimler daha dikkatli olmalı?",
        paragraphs: [
          "Hassas cilt, batık eğilimi, daha önce ağda sonrası yoğun kızarıklık veya kabarma yaşayan kişiler uygulama öncesinde bu bilgileri paylaşmalıdır.",
          "Aktif tahriş veya beklenmeyen cilt reaksiyonu varsa işlemi ertelemek daha doğru olabilir.",
        ],
      },
    ],
    faqs: [
      {
        id: "tum-vucut-agda-ne-kadar-surer",
        question: "Tüm vücut ağda ne kadar sürer?",
        answer: "Süre seçilen bölgelere göre değişir. Randevu öncesinde kapsam netleşirse süre daha doğru planlanır.",
      },
      {
        id: "tum-vucut-agda-yuz-dahil-mi",
        question: "Tüm vücut ağdaya yüz bölgesi dahil mi?",
        answer: "Her salonda kapsam aynı değildir. Yüz bölgesinin dahil olup olmadığı randevu öncesinde sorulmalıdır.",
      },
      {
        id: "tum-vucut-agda-oncesi",
        question: "Tüm vücut ağda öncesi ne yapılmalı?",
        answer: "Cilt temiz ve sakin olmalı; tahriş, yara, güneş yanığı veya hassasiyet varsa uygulama öncesinde paylaşılmalıdır.",
      },
      {
        id: "tum-vucut-agda-sonrasi",
        question: "Tüm vücut ağda sonrası nelere dikkat edilmeli?",
        answer: "İlk 24 saat sıcak duş, sauna, yoğun egzersiz, parfümlü ürünler ve dar kıyafetlerden kaçınmak gerekir.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda hizmeti",
        href: "/hizmetler/agda",
        description: "Tüm vücut ağda kapsamını konuşmak için ağda hizmet sayfasını inceleyin.",
      },
      {
        label: "Ağda öncesi dikkat edilmesi gerekenler",
        href: "/blog/agda-oncesi-nelere-dikkat-edilmeli",
        description: "Randevu öncesi hazırlık adımlarını öğrenin.",
      },
    ],
    cta: {
      title: "Tüm vücut ağda kapsamını birlikte planlayalım",
      description:
        "Hangi bölgelerde işlem istediğinizi ve cilt hassasiyetinizi paylaşarak size uygun randevu planı oluşturabilirsiniz.",
      href: "/iletisim",
      label: "Randevu Al",
    },
    image: blogImages.tumVucutAgda,
    publishedAt: "2026-03-29",
    category: "Ağda Rehberi",
    tags: ["tüm vücut ağda", "ağda bölgeleri", "profesyonel ağda"],
    seoTitle: "Tüm Vücut Ağda Nedir? Hangi Bölgeleri Kapsar?",
    metaDescription:
      "Tüm vücut ağda nedir, hangi bölgeleri kapsar? Bacak, kol, koltuk altı, yüz ve bikini bölgesi planlaması hakkında bilmeniz gerekenler.",
    keywords: ["tüm vücut ağda", "tüm vücut ağda bölgeleri", "ağda bölgeleri", "profesyonel ağda"],
  }),
  createBlogPost({
    id: "blog-ilk-kez-agda",
    title: "İlk Kez Ağda Yaptıracaklar İçin Bilinmesi Gerekenler",
    slug: "ilk-kez-agda-yaptiracaklar-icin-bilinmesi-gerekenler",
    excerpt:
      "İlk kez ağda yaptıracaklar için doğru hazırlık, cilt hassasiyetini paylaşmak, beklentiyi netleştirmek ve işlem sonrası bakımı bilmek önemlidir.",
    content:
      "İlk kez ağda yaptıracaksanız en önemli adım, randevu öncesinde beklentinizi ve cilt hassasiyetinizi açıkça paylaşmaktır. Daha önce tahriş, batık, alerjik reaksiyon, güneş yanığı veya aktif cilt hassasiyeti yaşadıysanız bunu uygulama öncesinde söylemelisiniz. İşlem yapılacak bölge, tüy uzunluğu, uygulama süresi ve işlem sonrası bakım randevu başında netleştirildiğinde süreç daha konforlu ilerler. Ağda sırasında kısa süreli acı hissi normaldir; ancak ciltte yanma, yoğun rahatsızlık veya beklenmeyen bir reaksiyon olursa uygulayıcıya hemen bilgi verilmelidir. İşlem sonrası ilk 24 saat sıcak duş, sauna, yoğun egzersiz, parfümlü ürünler ve dar kıyafetlerden kaçınmak cildin sakinleşmesine yardımcı olur.",
    sections: [
      {
        id: "ilk-randevu-oncesi",
        title: "İlk ağda randevusu öncesi ne bilinmeli?",
        paragraphs: [
          "İlk kez ağda yaptıracak kişiler için en önemli adım beklentiyi ve cilt hassasiyetini açıkça paylaşmaktır.",
          "İşlem yapılacak bölge, tüy uzunluğu, daha önce yaşanan tahrişler ve günlük plan randevu başında netleşirse süreç daha rahat ilerler.",
        ],
      },
      {
        id: "aci-hissi",
        title: "Ağda çok acıtır mı?",
        paragraphs: [
          "Ağda sırasında kısa süreli acı hissi normaldir; his bölgeye, tüy yapısına ve kişinin hassasiyetine göre değişebilir.",
          "Ciltte yanma, beklenmeyen yoğun rahatsızlık veya farklı bir tepki olursa uygulayıcıya hemen bilgi verilmelidir.",
        ],
      },
      {
        id: "paylasilacak-bilgiler",
        title: "Randevuda hangi bilgiler paylaşılmalı?",
        paragraphs: [
          "Daha önce yaşanan tahriş, batık, alerjik reaksiyon, güneş yanığı veya aktif cilt hassasiyeti uygulama öncesinde mutlaka söylenmelidir.",
          "Kullanılan aktif bakım ürünleri ve işlem sonrası gün içinde yapılacak aktiviteler de bakım önerilerini etkileyebilir.",
        ],
      },
      {
        id: "sonrasi-ilk-24-saat",
        title: "İlk 24 saat nelere dikkat edilmeli?",
        paragraphs: [
          "Sıcak duş, sauna, yoğun egzersiz, parfümlü ürünler ve dar kıyafetlerden kaçınmak cildin sakinleşmesine yardımcı olur.",
          "Bölgeyi kaşımamak, temiz tutmak ve hafif bakım ürünleri kullanmak daha konforlu bir iyileşme sağlar.",
        ],
      },
    ],
    faqs: [
      {
        id: "ilk-agda-ne-kadar-surer",
        question: "İlk ağda randevusu ne kadar sürer?",
        answer: "Süre işlem yapılacak bölgeye göre değişir. İlk randevuda kapsam ve cilt hassasiyeti konuşulduğunda süre daha doğru planlanır.",
      },
      {
        id: "ilk-agda-acitir-mi",
        question: "İlk kez ağda yaptırmak çok acıtır mı?",
        answer: "Kısa süreli acı hissi normaldir; yoğun rahatsızlık veya beklenmeyen tepki olursa uygulayıcıya hemen bilgi verilmelidir.",
      },
      {
        id: "ilk-agda-oncesi-ne-yapmali",
        question: "İlk ağda öncesi ne yapmalıyım?",
        answer: "Cilt temiz ve kuru olmalı; tahriş, yara, güneş yanığı veya hassasiyet varsa randevu öncesinde paylaşılmalıdır.",
      },
      {
        id: "ilk-agda-sonrasi-spor",
        question: "İlk ağda sonrası spor yapılır mı?",
        answer: "İlk 24 saat yoğun egzersiz ve terlemeyi artıran aktivitelerden kaçınmak tahriş riskini azaltabilir.",
      },
    ],
    internalLinks: [
      {
        label: "Ağda öncesi nelere dikkat edilmeli?",
        href: "/blog/agda-oncesi-nelere-dikkat-edilmeli",
        description: "İlk randevu öncesi hazırlık adımlarını daha detaylı inceleyin.",
      },
      {
        label: "Ağda sonrası ne sürülür?",
        href: "/blog/agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
        description: "İşlem sonrası cildi sakin tutmak için bakım önerilerini okuyun.",
      },
    ],
    image: blogImages.agdaOncesi,
    publishedAt: "2026-04-05",
    category: "İlk Randevu",
    tags: ["ilk kez ağda", "ağda yaptırmak", "ağda randevusu"],
    seoTitle: "İlk Kez Ağda Yaptıracaklar İçin Bilinmesi Gerekenler",
    metaDescription:
      "İlk kez ağda yaptıracaklar için işlem öncesi hazırlık, cilt hassasiyeti, tüy uzunluğu, acı hissi ve işlem sonrası bakım rehberi.",
    keywords: ["ilk kez ağda", "ağda randevusu", "ağda yaptırmak", "ilk ağda deneyimi"],
  }),
  createBlogPost({
    id: "blog-ordu-guzellik-salonu-rehberi",
    title: "Ordu Güzellik Salonu Rehberi: Ağda ve Bakım Hizmetleri",
    slug: "ordu-guzellik-salonu-rehberi-agda-ve-bakim-hizmetleri",
    excerpt:
      "Ordu'da güzellik salonu arayanlar için ağda, lazer epilasyon, cilt bakımı ve randevu sürecinde dikkat edilecek temel noktaları bir araya getirdik.",
    content:
      "Ordu'da güzellik salonu ararken yalnızca hizmet listesine değil, salonun çalışma düzenine ve sizi nasıl bilgilendirdiğine de bakmak gerekir. Ağda, kaş-bıyık bakımı, cilt bakımı ve kişisel bakım hizmetlerinde hijyen, randevu planı, kullanılan ürünlerin cilde uygunluğu ve işlem sonrası bakım önerileri karar sürecini doğrudan etkiler. İyi bir salon, işlem öncesinde ihtiyacı dinler, varsa hassasiyetleri sorar ve her hizmeti aynı standartta uygulamak yerine kişiye göre planlar. Ordu ve Altınordu çevresinde salon seçerken ulaşım kolaylığı, randevuya sadakat, iletişim hızı ve Google işletme bilgilerinin tutarlılığı da güven veren işaretlerdir. İlk görüşmede hizmet kapsamını, seans süresini, işlem sonrası dikkat edilmesi gerekenleri ve varsa fiyat bilgisini netleştirmek daha doğru bir karar vermenizi sağlar.",
    sections: [
      {
        id: "salon-secim-kriterleri",
        title: "Ordu'da güzellik salonu seçerken nelere bakılmalı?",
        paragraphs: [
          "Güzellik salonu seçerken yalnızca hizmet listesine değil, salonun çalışma düzenine, hijyen yaklaşımına ve işlem öncesi bilgilendirmesine bakmak gerekir.",
          "Ağda, lazer epilasyon ve cilt bakımı gibi hizmetlerde cilt hassasiyeti ve beklentinin baştan konuşulması daha güven veren bir süreç oluşturur.",
        ],
      },
      {
        id: "hijyen-ve-randevu",
        title: "Hijyen ve randevu düzeni neden önemli?",
        paragraphs: [
          "Uygulama alanının temizliği, kullanılan malzemelerin düzeni ve her danışan için planlı ilerlenmesi salon kalitesini gösteren temel sinyallerdir.",
          "Randevuya sadakat ve iletişim hızı, özellikle yoğun dönemlerde daha konforlu bir salon deneyimi sağlar.",
        ],
      },
      {
        id: "hizmet-kapsami",
        title: "Hizmet kapsamı nasıl netleştirilmeli?",
        paragraphs: [
          "Randevu almadan önce hangi hizmetin alınacağı, işlem süresi, işlem sonrası dikkat edilecekler ve varsa fiyat bilgisi netleştirilmelidir.",
          "Cilt bakımı, lazer epilasyon veya ağda gibi farklı hizmetlerde kullanılan ürün ve uygulama adımları kişiye göre değişebilir.",
        ],
      },
      {
        id: "yerel-guven-sinyalleri",
        title: "Yerel güven sinyalleri",
        paragraphs: [
          "Ordu ve Altınordu çevresinde salon seçerken ulaşım kolaylığı, Google işletme bilgilerinin tutarlılığı ve web sitesindeki bilgilerin güncel olması karar vermeyi kolaylaştırır.",
          "Yorumlar tek başına yeterli değildir; yorumların güncelliği, işletmenin yanıtları ve sitedeki hizmet açıklamaları birlikte değerlendirilmelidir.",
        ],
      },
    ],
    faqs: [
      {
        id: "ordu-guzellik-salonu-secim",
        question: "Ordu'da güzellik salonu seçerken en önemli kriter nedir?",
        answer: "Hijyen, doğru bilgilendirme, randevu düzeni ve cilt hassasiyetine yaklaşım birlikte değerlendirilmelidir.",
      },
      {
        id: "guzellik-salonu-randevu-gerekir-mi",
        question: "Güzellik salonuna gitmeden önce randevu almak gerekir mi?",
        answer: "Randevu almak beklememek ve işlem süresini doğru planlamak için daha uygundur.",
      },
      {
        id: "hizmet-kapsami-onceden-sorulur-mu",
        question: "Hizmet kapsamı önceden sorulmalı mı?",
        answer: "Evet. İşlem süresi, dahil olan uygulamalar, işlem sonrası bakım ve varsa fiyat bilgisi önceden netleştirilmelidir.",
      },
      {
        id: "google-yorumlari-yeterli-mi",
        question: "Google yorumları tek başına yeterli mi?",
        answer: "Hayır. Yorumlar, işletme bilgilerinin tutarlılığı, hizmet açıklamaları ve iletişim kalitesi birlikte değerlendirilmelidir.",
      },
    ],
    internalLinks: [
      {
        label: "Ordu ağda salonu seçimi",
        href: "/blog/ordu-agda-salonu-secerken-nelere-dikkat-edilmeli",
        description: "Ağda salonu seçerken dikkat edilecek yerel kriterleri daha detaylı okuyun.",
      },
      {
        label: "Hizmetler",
        href: "/hizmetler",
        description: "Özlem Ağda Salonu'nda sunulan ağda ve bakım hizmetlerini inceleyin.",
      },
    ],
    image: blogImages.orduAgdaSalonu,
    publishedAt: "2026-04-12",
    category: "Ordu Güzellik Rehberi",
    tags: ["Ordu güzellik salonu", "Ordu ağda", "Ordu cilt bakımı"],
    seoTitle: "Ordu Güzellik Salonu Rehberi: Ağda ve Bakım Hizmetleri",
    metaDescription:
      "Ordu güzellik salonu arayanlar için ağda, lazer epilasyon, cilt bakımı ve bakım hizmetlerinde hijyen, randevu ve hizmet seçimi rehberi.",
    keywords: [
      "Ordu güzellik salonu",
      "Altınordu güzellik salonu",
      "Ordu ağda",
      "Ordu cilt bakımı",
      "Ordu lazer epilasyon",
    ],
  }),
];
