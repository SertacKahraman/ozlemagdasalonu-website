import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQItem from "@/components/FAQItem";
import JsonLd from "@/components/JsonLd";
import { blogPosts, businessInfo, services } from "@/data/site";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generatePageMetadata,
  generateServiceSchema,
} from "@/lib/seo";
import type { FAQ, SEOFields } from "@/types";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServiceDetailSection = {
  title: string;
  paragraphs: string[];
};

type ServiceDetailContent = {
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  highlights: string[];
  process: string[];
  sections: ServiceDetailSection[];
  beforeCare: string[];
  afterCare: string[];
  faqs: FAQ[];
  relatedBlogSlugs: string[];
};

export const dynamic = "force-dynamic";

const serviceDetails: Record<string, ServiceDetailContent> = {
  agda: {
    eyebrow: "Ordu Ağda Hizmeti",
    metaTitle: "Ordu Ağda Hizmeti | Özlem Ağda Salonu Altınordu",
    metaDescription:
      "Ordu Altınordu'da hijyenik ve özenli ağda hizmeti. Cilt hassasiyeti, bölge seçimi, randevu süreci ve ağda sonrası bakım önerileri.",
    keywords: ["Ordu ağda", "Ordu ağda salonu", "Altınordu ağda", "profesyonel ağda"],
    intro:
      "Özlem Ağda Salonu'nda ağda hizmeti, işlem yapılacak bölgeye ve cilt hassasiyetine göre planlanır. Amaç hızlı bir işlemden çok, temiz, kontrollü ve işlem sonrası bakım bilgisiyle desteklenen bir salon deneyimi sunmaktır.",
    highlights: [
      "Cilt hassasiyetine göre ön değerlendirme",
      "Hijyenik uygulama düzeni",
      "Bölgeye göre randevu planı",
      "Ağda sonrası bakım yönlendirmesi",
    ],
    process: [
      "Randevu öncesinde işlem bölgesi ve uygun saat netleştirilir.",
      "Uygulama öncesinde cilt durumu ve hassasiyet bilgisi alınır.",
      "Bölgeye uygun teknikle ağda işlemi uygulanır.",
      "İşlem sonrasında kızarıklık, tahriş ve bakım konusunda kısa bilgilendirme yapılır.",
    ],
    sections: [
      {
        title: "Ağda hangi bölgeler için planlanabilir?",
        paragraphs: [
          "Ağda hizmeti; kişinin ihtiyacına göre kol, bacak, koltuk altı, yüz ve diğer bölgeler için ayrı ayrı planlanabilir. Kapsam randevu öncesinde netleştirildiğinde süre ve fiyat bilgisi daha doğru paylaşılır.",
          "İlk kez ağda yaptıracak kişilerde tüy uzunluğu, cilt hassasiyeti ve daha önce yaşanan tahrişler mutlaka konuşulmalıdır.",
        ],
      },
      {
        title: "Ordu'da ağda salonu seçerken nelere bakılmalı?",
        paragraphs: [
          "Ağda cildi geçici olarak hassaslaştırabileceği için salon seçiminde hijyen, doğru bilgilendirme ve işlem sonrası bakım önerileri önemlidir.",
          "Özlem Ağda Salonu, Altınordu'da randevu odaklı ilerleyerek işlemin aceleye gelmemesine ve kişinin beklentisinin baştan anlaşılmasına dikkat eder.",
        ],
      },
    ],
    beforeCare: [
      "İşlem bölgesinin temiz ve kuru olmasına dikkat edin.",
      "Yoğun peeling, güçlü aktif ürünler veya cildi hassaslaştıran uygulamalardan hemen önce kaçının.",
      "Güneş yanığı, aktif tahriş veya yara varsa randevu öncesinde bilgi verin.",
    ],
    afterCare: [
      "İlk 24 saat sıcak duş, sauna ve yoğun egzersizden kaçınmanız önerilir.",
      "Bölgeyi kaşımamak ve sürtünmeyi azaltmak cildin daha sakin kalmasına yardımcı olur.",
      "Parfümlü ürünler yerine hafif ve cildi yormayan bakım tercih edilmelidir.",
    ],
    faqs: [
      {
        id: "agda-randevu-gerekli-mi",
        question: "Ağda için randevu almak gerekir mi?",
        answer:
          "Evet. Randevu almak işlem bölgesinin, sürenin ve cilt hassasiyetinin önceden konuşulmasını sağlar.",
      },
      {
        id: "agda-ne-kadar-surer",
        question: "Ağda işlemi ne kadar sürer?",
        answer:
          "Süre işlem yapılacak bölgeye göre değişir. Tek bölge işlemler genellikle daha kısa, kapsamlı işlemler daha uzun sürer.",
      },
      {
        id: "agda-sonrasi-kizariklik-normal-mi",
        question: "Ağda sonrası kızarıklık normal mi?",
        answer:
          "Geçici kızarıklık görülebilir. Yoğun yanma, kabarma veya beklenmeyen reaksiyon olursa salonla iletişime geçmeniz önerilir.",
      },
      {
        id: "ilk-kez-agda-yaptiracaklar",
        question: "İlk kez ağda yaptıracaklar ne söylemeli?",
        answer:
          "Daha önce yaşanan tahriş, batık eğilimi, hassasiyet ve işlem yapılacak bölge randevu başında paylaşılmalıdır.",
      },
    ],
    relatedBlogSlugs: [
      "agda-oncesi-nelere-dikkat-edilmeli",
      "agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
      "ordu-agda-salonu-secerken-nelere-dikkat-edilmeli",
    ],
  },
  "lazer-epilasyon": {
    eyebrow: "Ordu Lazer Epilasyon",
    metaTitle: "Ordu Lazer Epilasyon | Özlem Ağda Salonu Altınordu",
    metaDescription:
      "Ordu Altınordu'da lazer epilasyon hizmeti. Cilt ve kıl yapısına göre ön değerlendirme, seans planı ve randevu bilgisi alın.",
    keywords: ["Ordu lazer epilasyon", "Altınordu lazer epilasyon", "lazer epilasyon"],
    intro:
      "Lazer epilasyon süreci, kişinin cilt hassasiyeti, kıl yapısı ve uygulama bölgesi dikkate alınarak planlanır. Özlem Ağda Salonu'nda hedef, işlem öncesi doğru bilgilendirme ve düzenli randevu akışıyla kontrollü bir süreç oluşturmaktır.",
    highlights: [
      "Cilt ve kıl yapısına göre değerlendirme",
      "Bölgeye göre seans planı",
      "Randevu öncesi net bilgilendirme",
      "İşlem sonrası dikkat edileceklerin paylaşılması",
    ],
    process: [
      "Uygulama bölgesi ve beklenti randevu öncesinde konuşulur.",
      "Cilt hassasiyeti, yakın dönem güneş maruziyeti ve kullanılan ürünler değerlendirilir.",
      "Bölgeye uygun şekilde işlem planlanır.",
      "Sonraki seans aralığı ve bakım önerileri paylaşılır.",
    ],
    sections: [
      {
        title: "Lazer epilasyon süreci nasıl planlanır?",
        paragraphs: [
          "Lazer epilasyonda tek seans üzerinden kesin sonuç vaadi vermek doğru değildir. Süreç; kıl yapısı, bölge, cilt tonu, hormonal durum ve düzenli seans takibine göre değişebilir.",
          "Bu nedenle ilk görüşmede beklenti, uygulama bölgesi ve seans takvimi açıkça konuşulmalıdır.",
        ],
      },
      {
        title: "Kimler işlem öncesi bilgi vermeli?",
        paragraphs: [
          "Cilt hassasiyeti, aktif tahriş, güneş yanığı, yakın zamanda kullanılan güçlü bakım ürünleri veya farklı bir cilt işlemi varsa randevu öncesinde mutlaka bilgi verilmelidir.",
          "Bu bilgiler işlem zamanlamasının ve bakım önerilerinin daha doğru planlanmasını sağlar.",
        ],
      },
    ],
    beforeCare: [
      "Yakın zamanda yoğun güneşlenme veya solaryum olduysa bilgi verin.",
      "İşlem bölgesinde tahriş, yara veya yoğun hassasiyet varsa randevu öncesinde paylaşın.",
      "Kullandığınız aktif bakım ürünleri veya yakın dönem cilt işlemlerini belirtin.",
    ],
    afterCare: [
      "İlk gün cildi ısı, sürtünme ve yoğun terlemeden korumaya çalışın.",
      "Güneş koruması ve nazik bakım önerilerine dikkat edin.",
      "Beklenmeyen hassasiyet durumunda uygulama yapılan salonla iletişime geçin.",
    ],
    faqs: [
      {
        id: "lazer-epilasyon-kac-seans",
        question: "Lazer epilasyon kaç seans sürer?",
        answer:
          "Seans sayısı kişiye, bölgeye ve kıl yapısına göre değişir. En doğru planlama ön görüşmede yapılır.",
      },
      {
        id: "lazer-epilasyon-oncesi-ne-yapilmali",
        question: "Lazer epilasyon öncesi nelere dikkat edilmeli?",
        answer:
          "Güneş maruziyeti, tahriş, kullanılan bakım ürünleri ve cilt hassasiyeti randevu öncesinde paylaşılmalıdır.",
      },
      {
        id: "lazer-epilasyon-her-bolgeye-uygulanir-mi",
        question: "Her bölgeye lazer epilasyon yapılır mı?",
        answer:
          "Uygunluk bölgeye ve kişinin cilt-kıl yapısına göre değerlendirilir. Randevu öncesinde detaylı bilgi almak gerekir.",
      },
      {
        id: "lazer-sonrasi-gunes",
        question: "Lazer epilasyon sonrası güneşe çıkılır mı?",
        answer:
          "İşlem sonrası dönemde güneş hassasiyeti artabileceği için korunma ve bakım önerilerine dikkat edilmelidir.",
      },
    ],
    relatedBlogSlugs: [
      "ordu-guzellik-salonu-rehberi-agda-ve-bakim-hizmetleri",
      "agda-mi-jilet-mi-hangisi-daha-uzun-sure-puruzsuzluk-saglar",
    ],
  },
  "cilt-bakimi": {
    eyebrow: "Ordu Cilt Bakımı",
    metaTitle: "Ordu Cilt Bakımı | Özlem Ağda Salonu Altınordu",
    metaDescription:
      "Ordu Altınordu'da cilt bakımı hizmeti. Cilt ihtiyacına göre temizlik, nem, arınma ve canlılık odaklı bakım süreci.",
    keywords: ["Ordu cilt bakımı", "Altınordu cilt bakımı", "profesyonel cilt bakımı"],
    intro:
      "Cilt bakımı, cildin o günkü ihtiyacına göre değerlendirilmesi gereken kişisel bir süreçtir. Özlem Ağda Salonu'nda bakım planı; temizlik, nem dengesi, arınma ve daha canlı bir görünüm hedefiyle oluşturulur.",
    highlights: [
      "Cilt ihtiyacına göre değerlendirme",
      "Nem ve arınma odaklı bakım",
      "Sakin salon deneyimi",
      "Bakım sonrası öneriler",
    ],
    process: [
      "Cilt ihtiyacı ve hassasiyet bilgisi alınır.",
      "Bakım adımları kişinin beklentisine göre planlanır.",
      "Temizlik, arınma ve nem desteği odaklı uygulama yapılır.",
      "Bakım sonrası günlük rutinde dikkat edilecekler paylaşılır.",
    ],
    sections: [
      {
        title: "Cilt bakımı neden kişiye göre planlanmalı?",
        paragraphs: [
          "Her cildin nem, hassasiyet, gözenek görünümü ve arınma ihtiyacı farklıdır. Bu nedenle cilt bakımı tek bir standart işlem gibi düşünülmemelidir.",
          "Randevu başında cilt yapısı, kullanılan ürünler ve beklenti konuşulduğunda bakım daha doğru bir çerçeveye oturur.",
        ],
      },
      {
        title: "Cilt bakımından sonra nelere dikkat edilir?",
        paragraphs: [
          "Bakım sonrasında cilt geçici olarak daha hassas olabilir. Bu dönemde yoğun aktif ürünleri, sert peelingleri ve güneş maruziyetini dikkatli yönetmek gerekir.",
          "Nazik temizlik, nemlendirme ve güneşten korunma daha dengeli bir bakım sürecini destekler.",
        ],
      },
    ],
    beforeCare: [
      "Kullandığınız aktif ürünleri ve hassasiyet geçmişinizi paylaşın.",
      "Randevudan hemen önce cildi zorlayacak sert peelinglerden kaçının.",
      "Aktif tahriş veya beklenmeyen reaksiyon varsa bilgi verin.",
    ],
    afterCare: [
      "İlk gün cildi yormayan nazik ürünler tercih edin.",
      "Yoğun peeling veya güçlü aktif ürünleri hemen kullanmayın.",
      "Güneş korumasına dikkat edin.",
    ],
    faqs: [
      {
        id: "cilt-bakimi-ne-kadar-surer",
        question: "Cilt bakımı ne kadar sürer?",
        answer:
          "Cilt bakımı hizmeti genellikle yaklaşık 1 saat sürer. Süre cilt ihtiyacına göre değişebilir.",
      },
      {
        id: "cilt-bakimi-kime-uygun",
        question: "Cilt bakımı kimler için uygundur?",
        answer:
          "Cildinde temizlik, nem, arınma veya canlılık ihtiyacı hisseden kişiler için planlanabilir. Hassasiyet varsa önceden paylaşılmalıdır.",
      },
      {
        id: "cilt-bakimi-sonrasi-makyaj",
        question: "Cilt bakımı sonrası makyaj yapılır mı?",
        answer:
          "Cildin sakin kalması için bakım sonrası ilk dönemde cildi yormayan bir rutin tercih edilmesi önerilir.",
      },
      {
        id: "cilt-bakimi-duzenli-mi",
        question: "Cilt bakımı düzenli yapılmalı mı?",
        answer:
          "İhtiyaç kişiye göre değişir. Randevu sırasında cilt durumu değerlendirilerek bakım aralığı hakkında bilgi verilebilir.",
      },
    ],
    relatedBlogSlugs: [
      "ordu-guzellik-salonu-rehberi-agda-ve-bakim-hizmetleri",
      "agda-sonrasi-ne-surulur-cildi-rahatlatma-onerileri",
    ],
  },
  "g5-bolgesel-incelme-sikilasma": {
    eyebrow: "Ordu G5 Uygulaması",
    metaTitle: "Ordu G5 Bölgesel İncelme ve Sıkılaşma | Özlem Ağda Salonu",
    metaDescription:
      "Ordu Altınordu'da G5 bölgesel incelme ve sıkılaşma uygulaması. Bölge, hedef ve randevu planı hakkında bilgi alın.",
    keywords: ["Ordu G5", "G5 bölgesel incelme", "Ordu sıkılaşma", "Altınordu G5"],
    intro:
      "G5 bölgesel incelme ve sıkılaşma uygulaması, kişinin hedeflediği bölgeye ve beklentisine göre planlanan bir salon hizmetidir. Süreçte en önemli adım, uygulama bölgesini ve randevu aralığını baştan netleştirmektir.",
    highlights: [
      "Bölgeye göre uygulama planı",
      "Hedef ve beklenti değerlendirmesi",
      "30 dakikalık randevu akışı",
      "Süreç hakkında net bilgilendirme",
    ],
    process: [
      "Uygulama yapılacak bölge ve beklenti konuşulur.",
      "Randevu süresi ve seans planı netleştirilir.",
      "G5 uygulaması hedef bölgeye göre gerçekleştirilir.",
      "Sonraki randevu ve dikkat edilecekler paylaşılır.",
    ],
    sections: [
      {
        title: "G5 uygulamasında süreç nasıl ilerler?",
        paragraphs: [
          "G5 uygulaması genellikle bölgesel hedeflerle planlanır. Kişinin beklentisi, uygulama yapılacak alan ve seans düzeni baştan konuşulduğunda süreç daha anlaşılır ilerler.",
          "Tek işlem üzerinden kesin sonuç vaadi vermek doğru değildir; düzenli takip ve kişinin yaşam alışkanlıkları süreci etkileyebilir.",
        ],
      },
      {
        title: "Kimler randevu öncesinde bilgi vermeli?",
        paragraphs: [
          "Hassasiyet, rahatsızlık, yakın dönem işlem geçmişi veya uygulama yapılacak bölgede aktif bir sorun varsa randevu öncesinde paylaşılmalıdır.",
          "Bu bilgiler uygulama planının daha dikkatli oluşturulmasına yardımcı olur.",
        ],
      },
    ],
    beforeCare: [
      "Uygulama hedefinizi ve bölge tercihinizi randevu öncesinde belirtin.",
      "Uygulama yapılacak bölgede hassasiyet veya rahatsızlık varsa paylaşın.",
      "Randevu süresi ve seans planı hakkında ön bilgi alın.",
    ],
    afterCare: [
      "Uygulama sonrası verilen önerileri takip edin.",
      "Beklenmeyen hassasiyet olursa salonla iletişime geçin.",
      "Seans aralıklarını düzenli planlamak sürecin takibini kolaylaştırır.",
    ],
    faqs: [
      {
        id: "g5-ne-kadar-surer",
        question: "G5 uygulaması ne kadar sürer?",
        answer:
          "G5 bölgesel incelme ve sıkılaşma randevusu genellikle yaklaşık 30 dakika olarak planlanır.",
      },
      {
        id: "g5-hangi-bolgelere-yapilir",
        question: "G5 hangi bölgelere uygulanır?",
        answer:
          "Uygulama bölgesi kişinin hedefi ve uygunluk durumuna göre randevu öncesinde değerlendirilir.",
      },
      {
        id: "g5-tek-seans-yeterli-mi",
        question: "G5 için tek seans yeterli olur mu?",
        answer:
          "Tek seansla kesin sonuç vaadi doğru değildir. Süreç kişiye, hedefe ve düzenli takibe göre değişebilir.",
      },
      {
        id: "g5-randevu-oncesi",
        question: "G5 randevusu öncesi ne söylemeliyim?",
        answer:
          "Uygulama bölgesi, beklenti, hassasiyet ve varsa yakın dönem işlem geçmişi paylaşılmalıdır.",
      },
    ],
    relatedBlogSlugs: ["ordu-guzellik-salonu-rehberi-agda-ve-bakim-hizmetleri"],
  },
  "ems-slim": {
    eyebrow: "Ordu EMS Slim",
    metaTitle: "Ordu EMS Slim Uygulaması | Özlem Ağda Salonu Altınordu",
    metaDescription:
      "Ordu Altınordu'da EMS Slim uygulaması. Vücut şekillendirme hedefi, randevu süreci ve seans planı hakkında bilgi alın.",
    keywords: ["Ordu EMS Slim", "EMS Slim", "vücut şekillendirme Ordu", "Altınordu EMS Slim"],
    intro:
      "EMS Slim uygulaması, kişinin vücut şekillendirme hedefi ve randevu planı dikkate alınarak değerlendirilen bir salon hizmetidir. Özlem Ağda Salonu'nda süreç, beklentinin netleşmesi ve seans düzeninin doğru anlatılmasıyla başlar.",
    highlights: [
      "Hedefe göre ön görüşme",
      "30 dakikalık uygulama süresi",
      "Seans planı bilgilendirmesi",
      "Randevu odaklı takip",
    ],
    process: [
      "Beklenti ve uygulama hedefi konuşulur.",
      "Uygun randevu zamanı ve seans düzeni planlanır.",
      "EMS Slim uygulaması belirlenen hedef doğrultusunda gerçekleştirilir.",
      "Süreç takibi için sonraki adımlar paylaşılır.",
    ],
    sections: [
      {
        title: "EMS Slim hizmetinde beklenti nasıl belirlenir?",
        paragraphs: [
          "EMS Slim uygulamasında hedefin baştan konuşulması önemlidir. Kişinin beklentisi ve uygulama planı netleştikçe randevu süreci daha anlaşılır hale gelir.",
          "Uygulama tıbbi tedavi diliyle değil, salon hizmeti ve bakım süreci olarak değerlendirilmelidir.",
        ],
      },
      {
        title: "Seans planı neden önemlidir?",
        paragraphs: [
          "Vücut şekillendirme odaklı uygulamalarda düzenli takip ve gerçekçi beklenti önemlidir. Bu nedenle randevu aralıkları ve süreç baştan konuşulmalıdır.",
          "Kişisel farklılıklar nedeniyle aynı hizmet herkes için aynı şekilde ilerlemeyebilir.",
        ],
      },
    ],
    beforeCare: [
      "Beklentinizi ve uygulama hedefinizi açıkça paylaşın.",
      "Herhangi bir hassasiyet veya özel durum varsa randevu öncesinde belirtin.",
      "Seans planı ve süre hakkında bilgi alın.",
    ],
    afterCare: [
      "Uygulama sonrası verilen yönlendirmeleri takip edin.",
      "Süreçle ilgili sorularınızı sonraki randevu öncesinde paylaşın.",
      "Randevu düzenini korumak takip açısından faydalı olur.",
    ],
    faqs: [
      {
        id: "ems-slim-ne-kadar-surer",
        question: "EMS Slim uygulaması ne kadar sürer?",
        answer:
          "EMS Slim randevusu genellikle yaklaşık 30 dakika olarak planlanır.",
      },
      {
        id: "ems-slim-kimlere-uygun",
        question: "EMS Slim kimler için uygundur?",
        answer:
          "Uygunluk kişinin hedefi ve özel durumlarına göre değerlendirilir. Randevu öncesinde bilgi almak en doğru adımdır.",
      },
      {
        id: "ems-slim-kac-seans",
        question: "EMS Slim kaç seans yapılır?",
        answer:
          "Seans planı kişinin beklentisine ve sürecin değerlendirilmesine göre değişebilir.",
      },
      {
        id: "ems-slim-randevu",
        question: "EMS Slim için randevu gerekli mi?",
        answer:
          "Evet. Randevu ile ilerlemek uygulama süresinin ve seans planının daha düzenli yönetilmesini sağlar.",
      },
    ],
    relatedBlogSlugs: ["ordu-guzellik-salonu-rehberi-agda-ve-bakim-hizmetleri"],
  },
  manikur: {
    eyebrow: "Ordu Manikür",
    metaTitle: "Ordu Manikür Hizmeti | Özlem Ağda Salonu Altınordu",
    metaDescription:
      "Ordu Altınordu'da manikür hizmeti. El ve tırnak bakımına yönelik temiz, düzenli ve özenli salon deneyimi için randevu alın.",
    keywords: ["Ordu manikür", "Altınordu manikür", "tırnak bakımı", "manikür hizmeti"],
    intro:
      "Manikür hizmeti, el ve tırnak görünümünü temiz, düzenli ve bakımlı hale getirmeye odaklanan bir bakım uygulamasıdır. Özlem Ağda Salonu'nda manikür süreci hijyen, özen ve randevu düzeniyle planlanır.",
    highlights: [
      "El ve tırnak bakımına odaklı uygulama",
      "Temiz ve düzenli görünüm",
      "Yaklaşık 30 dakikalık randevu",
      "Bakım sonrası öneriler",
    ],
    process: [
      "Randevu zamanı ve beklenti netleştirilir.",
      "El ve tırnak bakım ihtiyacı değerlendirilir.",
      "Manikür uygulaması özenli şekilde yapılır.",
      "Bakımın korunması için kısa öneriler paylaşılır.",
    ],
    sections: [
      {
        title: "Manikür neden düzenli bakımın parçasıdır?",
        paragraphs: [
          "Eller günlük hayatta en çok görünen ve en sık kullanılan bölgelerden biridir. Manikür, el ve tırnak görünümünün daha temiz ve düzenli görünmesini destekler.",
          "Düzenli bakım alışkanlığı, tırnak çevresinin daha bakımlı görünmesine ve kişinin kendini daha özenli hissetmesine yardımcı olur.",
        ],
      },
      {
        title: "Manikür randevusunda nelere dikkat edilir?",
        paragraphs: [
          "Randevu sırasında beklenti, tırnak durumu ve bakım ihtiyacı konuşulur. Hijyenik ve sakin bir uygulama ortamı, manikür deneyiminin önemli parçasıdır.",
          "İşlem sonrası el ve tırnak bakımını korumak için nemlendirme ve günlük kullanım alışkanlıkları hakkında bilgi alınabilir.",
        ],
      },
    ],
    beforeCare: [
      "Varsa tırnak çevresindeki hassasiyet veya tahrişi randevu başında paylaşın.",
      "Beklediğiniz görünümü ve bakım ihtiyacınızı açıkça belirtin.",
      "Randevu süresi için yaklaşık 30 dakikalık plan yapın.",
    ],
    afterCare: [
      "Ellerinizi düzenli nemlendirmek bakım görünümünü destekler.",
      "Tırnak çevresini zorlayacak sert temaslardan kaçınmaya çalışın.",
      "Bir sonraki bakım zamanını ihtiyaca göre planlayabilirsiniz.",
    ],
    faqs: [
      {
        id: "manikur-ne-kadar-surer",
        question: "Manikür ne kadar sürer?",
        answer:
          "Manikür randevusu genellikle yaklaşık 30 dakika olarak planlanır.",
      },
      {
        id: "manikur-randevu-gerekli-mi",
        question: "Manikür için randevu almak gerekir mi?",
        answer:
          "Randevu almak beklememek ve işlemin sakin şekilde planlanması için daha uygundur.",
      },
      {
        id: "manikur-kimler-icin-uygun",
        question: "Manikür kimler için uygundur?",
        answer:
          "El ve tırnak görünümünü daha temiz, düzenli ve bakımlı hale getirmek isteyen kişiler için uygundur.",
      },
      {
        id: "manikur-sonrasi-bakim",
        question: "Manikür sonrası nelere dikkat edilmeli?",
        answer:
          "Ellerin nemli tutulması ve tırnak çevresini zorlayacak sert temaslardan kaçınılması önerilir.",
      },
    ],
    relatedBlogSlugs: ["ordu-guzellik-salonu-rehberi-agda-ve-bakim-hizmetleri"],
  },
};

function buildServiceSeo(service: (typeof services)[number], detail: ServiceDetailContent): SEOFields {
  return {
    ...service.seo,
    metaTitle: detail.metaTitle,
    metaDescription: detail.metaDescription,
    ogTitle: detail.metaTitle,
    ogDescription: detail.metaDescription,
    keywords: detail.keywords,
  };
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

type ServiceDetailLayoutProps = {
  service: (typeof services)[number];
  detail: ServiceDetailContent;
  breadcrumbs: { label: string; href: string }[];
  relatedServices: typeof services;
  relatedBlogs: typeof blogPosts;
  whatsappHref: string;
  serviceSchema: Record<string, unknown>;
};

function ServiceDetailLayout({
  service,
  detail,
  breadcrumbs,
  relatedServices,
  relatedBlogs,
  whatsappHref,
  serviceSchema,
}: ServiceDetailLayoutProps) {
  return (
    <article className="bg-[#F7EFE6] text-[#3A2A24]">
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateFAQSchema(detail.faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <section className="scroll-reveal service-scroll px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] lg:items-end">
            <div className="pb-2 lg:pb-10">
              <p className="page-intro__label text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                {detail.eyebrow}
              </p>
              <h1 className="page-intro__title mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.96] text-[#3A2A24] sm:text-7xl">
                {service.title}
              </h1>
              <p className="page-intro__description mt-7 max-w-3xl text-lg leading-9 text-[#3A2A24]/76">
                {detail.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
                >
                  WhatsApp Randevu
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#4C362E] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
                >
                  İletişim Bilgileri
                </Link>
              </div>
            </div>

            <div className="relative min-h-[360px] overflow-hidden rounded-lg bg-[#E8C9B2] sm:min-h-[500px] lg:min-h-[610px]">
              <Image
                src={service.image}
                alt={`${service.title} - ${businessInfo.name}`}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 pb-14 pt-6 sm:px-6 sm:pb-18 lg:px-8">
        <div className="mx-auto max-w-7xl border-y border-[#DDB89F]/70">
          <dl className="grid divide-y divide-[#DDB89F]/70 text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex items-center justify-between gap-4 py-5 md:px-6">
              <dt className="text-[#5F4E46]">Süre</dt>
              <dd className="font-semibold text-[#2F211C]">{service.duration}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-5 md:px-6">
              <dt className="text-[#5F4E46]">Fiyat</dt>
              <dd className="text-right font-semibold text-[#2F211C]">{service.priceText}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-5 md:px-6">
              <dt className="text-[#5F4E46]">Konum</dt>
              <dd className="font-semibold text-[#2F211C]">
                {businessInfo.district} / {businessInfo.city}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Öne Çıkanlar
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Hizmet özeti
            </h2>
          </div>

          <div className="grid border-t border-[#DDB89F]/70 md:grid-cols-2">
            {detail.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex gap-4 border-b border-[#DDB89F]/70 py-5 md:odd:border-r md:odd:pr-6 md:even:pl-6"
              >
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#8F4B38] text-white">
                  <CheckIcon />
                </span>
                <p className="text-sm font-semibold leading-7 text-[#3A2A24]">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-reveal service-scroll bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Süreç
              </p>
              <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
                Randevu süreci nasıl ilerler?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-[#3A2A24]/78">
                Her hizmette amaç, işlem öncesinde beklentiyi anlamak ve uygulama sonrası dikkat
                edilecekleri açık şekilde paylaşmaktır.
              </p>
            </div>

            <ol className="grid border-t border-[#B98266]/45">
              {detail.process.map((step, index) => (
                <li
                  key={step}
                  className="grid gap-4 border-b border-[#B98266]/45 py-6 sm:grid-cols-[72px_1fr]"
                >
                  <span className="font-serif text-4xl leading-none text-[#8F4B38]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="self-center text-base leading-8 text-[#3A2A24]/82">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
          <div className="grid gap-12">
            {detail.sections.map((section) => (
              <section
                key={section.title}
                className="border-b border-[#DDB89F]/65 pb-12 last:border-b-0 last:pb-0"
              >
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2F211C]">
                  {section.title}
                </h2>
                <div className="mt-5 grid max-w-3xl gap-5 text-base leading-8 text-[#3A2A24]/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="border-t border-[#8F4B38]/45 pt-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7A3429]">
              Randevu
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              {service.title} için bilgi alın
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
              Uygun saat, fiyat ve işlem kapsamı için WhatsApp üzerinden hızlıca bilgi alabilirsiniz.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full justify-center rounded-full bg-[#8F4B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A2A24]"
            >
              WhatsApp ile Sor
            </a>
          </aside>
        </div>
      </section>

      <section className="scroll-reveal service-scroll bg-[#F2DED1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Randevu öncesi
            </h2>
            <ul className="mt-6 grid gap-4 border-t border-[#DDB89F]/70">
              {detail.beforeCare.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[#DDB89F]/70 py-4 text-sm leading-7 text-[#3A2A24]/82">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8F4B38]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Randevu sonrası
            </h2>
            <ul className="mt-6 grid gap-4 border-t border-[#DDB89F]/70">
              {detail.afterCare.map((item) => (
                <li key={item} className="flex gap-4 border-b border-[#DDB89F]/70 py-4 text-sm leading-7 text-[#3A2A24]/82">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8F4B38]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className="scroll-reveal service-scroll px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Merak Edilenler
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              {service.title} hakkında sık sorulan sorular
            </h2>
          </div>

          <div className="grid gap-4">
            {detail.faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {relatedBlogs.length > 0 ? (
        <section className="scroll-reveal service-scroll bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 border-b border-[#B98266]/45 pb-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                  Rehberler
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                  Bu hizmetle ilgili yazılar
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
                Tüm Blog Yazıları
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group grid gap-4 border-b border-[#B98266]/45 pb-6 transition hover:border-[#8F4B38]"
                >
                  <span className="relative block min-h-52 overflow-hidden rounded-lg bg-[#DDB89F]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                      {post.category}
                    </span>
                    <span className="mt-3 block text-lg font-semibold leading-7 text-[#2F211C]">
                      {post.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="scroll-reveal service-scroll px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-b border-[#DDB89F]/70 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Diğer Hizmetler
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                Özlem Ağda Salonu hizmetleri
              </h2>
            </div>
            <Link href="/hizmetler" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
              Tüm Hizmetler
            </Link>
          </div>

          <div className="mt-2 divide-y divide-[#DDB89F]/70">
            {relatedServices.map((item) => (
              <Link
                key={item.id}
                href={`/hizmetler/${item.slug}`}
                className="group grid gap-2 py-6 transition hover:px-3 sm:grid-cols-[260px_1fr] sm:items-center"
              >
                <span className="text-lg font-semibold text-[#2F211C] transition group-hover:text-[#7A3429]">
                  {item.title}
                </span>
                <span className="text-sm leading-7 text-[#5F4E46]">
                  {item.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  const detail = serviceDetails[service.slug];

  if (!detail) {
    return generatePageMetadata(service.seo);
  }

  return generatePageMetadata(buildServiceSeo(service, detail));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const detail = serviceDetails[service.slug];

  if (!detail) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: service.title, href: `/hizmetler/${service.slug}` },
  ];
  const serviceSchema = {
    ...generateServiceSchema(service),
    description: detail.metaDescription,
    keywords: detail.keywords,
  };
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const relatedBlogs = detail.relatedBlogSlugs
    .map((blogSlug) => blogPosts.find((post) => post.slug === blogSlug))
    .filter((post): post is (typeof blogPosts)[number] => Boolean(post));
  const whatsappHref = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, "")}`;

  if (service.slug) {
    return (
      <ServiceDetailLayout
        service={service}
        detail={detail}
        breadcrumbs={breadcrumbs}
        relatedServices={relatedServices}
        relatedBlogs={relatedBlogs}
        whatsappHref={whatsappHref}
        serviceSchema={serviceSchema}
      />
    );
  }

  return (
    <article className="bg-[#F7EFE6] text-[#3A2A24]">
      <JsonLd data={serviceSchema} />
      <JsonLd data={generateFAQSchema(detail.faqs)} />
      <JsonLd data={generateBreadcrumbSchema(breadcrumbs)} />

      <section className="px-4 pb-14 pt-28 sm:px-6 sm:pb-18 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={breadcrumbs} />

          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
            <div>
              <p className="page-intro__label text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                {detail.eyebrow}
              </p>
              <h1 className="page-intro__title mt-5 max-w-4xl font-serif text-5xl font-medium leading-[0.98] text-[#3A2A24] sm:text-7xl">
                {service.title}
              </h1>
              <p className="page-intro__description mt-7 max-w-3xl text-lg leading-9 text-[#3A2A24]/76">
                {detail.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-[#8F4B38] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3A2A24]"
                >
                  WhatsApp Randevu
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex justify-center rounded-full border border-[#8F4B38]/45 px-7 py-3.5 text-sm font-semibold text-[#4C362E] transition hover:-translate-y-0.5 hover:border-[#8F4B38] hover:text-[#7A3429]"
                >
                  İletişim Bilgileri
                </Link>
              </div>
            </div>

            <aside className="overflow-hidden rounded-[28px] border border-[#DDB89F]/50 bg-[#FFF8F3] shadow-[0_24px_80px_rgba(58,42,36,0.08)]">
              <div className="relative min-h-[300px] bg-[#E8C9B2] sm:min-h-[380px]">
                <Image
                  src={service.image}
                  alt={`${service.title} - ${businessInfo.name}`}
                  fill
                  sizes="(min-width: 1024px) 430px, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="grid gap-4 p-6 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-[#E8C9B2]/70 pb-4">
                  <span className="text-[#5F4E46]">Süre</span>
                  <strong className="text-right font-semibold text-[#2F211C]">{service.duration}</strong>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-[#E8C9B2]/70 pb-4">
                  <span className="text-[#5F4E46]">Fiyat</span>
                  <strong className="text-right font-semibold text-[#2F211C]">{service.priceText}</strong>
                </div>
                <div>
                  <span className="text-[#5F4E46]">Konum</span>
                  <p className="mt-1 font-semibold text-[#2F211C]">
                    {businessInfo.district} / {businessInfo.city}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {detail.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-[#DDB89F]/55 bg-[#FFF8F3] p-5 shadow-[0_16px_45px_rgba(58,42,36,0.05)]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#F2DED1] text-[#7A3429]">
                <CheckIcon />
              </span>
              <p className="mt-4 text-sm font-semibold leading-6 text-[#3A2A24]">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Süreç
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              Randevu süreci nasıl ilerler?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#3A2A24]/78">
              Her hizmette amaç, işlem öncesinde beklentiyi anlamak ve uygulama sonrası dikkat
              edilecekleri açık şekilde paylaşmaktır.
            </p>
          </div>

          <div className="grid gap-4">
            {detail.process.map((step, index) => (
              <div
                key={step}
                className="grid gap-4 rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] p-5 shadow-[0_16px_45px_rgba(58,42,36,0.05)] sm:grid-cols-[56px_1fr]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#8F4B38] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="self-center text-sm leading-7 text-[#3A2A24]/82">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="grid gap-10">
            {detail.sections.map((section) => (
              <section key={section.title} className="border-b border-[#DDB89F]/55 pb-10 last:border-b-0 last:pb-0">
                <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#2F211C]">
                  {section.title}
                </h2>
                <div className="mt-5 grid max-w-3xl gap-5 text-base leading-8 text-[#3A2A24]/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[24px] border border-[#DDB89F]/55 bg-[#FFF8F3] p-6 shadow-[0_18px_55px_rgba(58,42,36,0.06)]">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7A3429]">
                Randevu Bilgisi
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                {service.title} için bilgi alın
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5F4E46]">
                Uygun saat, fiyat ve işlem kapsamı için WhatsApp üzerinden hızlıca bilgi alabilirsiniz.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full justify-center rounded-full bg-[#8F4B38] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3A2A24]"
              >
                WhatsApp ile Sor
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F2DED1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Randevu öncesi
            </h2>
            <div className="mt-5 grid gap-3">
              {detail.beforeCare.map((item) => (
                <p key={item} className="rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] p-5 text-sm leading-7 text-[#3A2A24]/82">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
              Randevu sonrası
            </h2>
            <div className="mt-5 grid gap-3">
              {detail.afterCare.map((item) => (
                <p key={item} className="rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] p-5 text-sm leading-7 text-[#3A2A24]/82">
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
              Merak Edilenler
            </p>
            <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-[#3A2A24] sm:text-5xl">
              {service.title} hakkında sık sorulan sorular
            </h2>
          </div>

          <div className="grid gap-4">
            {detail.faqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {relatedBlogs.length > 0 ? (
        <section className="bg-[#E8C9B2] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 border-b border-[#DDB89F]/60 pb-6 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                  Rehberler
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                  Bu hizmetle ilgili yazılar
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
                Tüm Blog Yazıları
              </Link>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-[#DDB89F]/60 bg-[#F7EFE6] shadow-[0_16px_45px_rgba(58,42,36,0.05)] transition hover:-translate-y-1"
                >
                  <span className="relative block min-h-48 bg-[#DDB89F]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </span>
                  <span className="block p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#7A3429]">
                      {post.category}
                    </span>
                    <span className="mt-3 block text-lg font-semibold leading-7 text-[#2F211C]">
                      {post.title}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-b border-[#DDB89F]/60 pb-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7A3429]">
                Diğer Hizmetler
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#2F211C]">
                Özlem Ağda Salonu hizmetleri
              </h2>
            </div>
            <Link href="/hizmetler" className="text-sm font-semibold text-[#7A3429] transition hover:text-[#2F211C]">
              Tüm Hizmetler
            </Link>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.id}
                href={`/hizmetler/${item.slug}`}
                className="group rounded-2xl border border-[#DDB89F]/55 bg-[#FFF8F3] p-5 shadow-[0_16px_45px_rgba(58,42,36,0.05)] transition hover:-translate-y-1 hover:border-[#8F4B38]/55"
              >
                <span className="text-lg font-semibold text-[#2F211C] transition group-hover:text-[#7A3429]">
                  {item.title}
                </span>
                <span className="mt-3 block text-sm leading-7 text-[#5F4E46]">
                  {item.shortDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
