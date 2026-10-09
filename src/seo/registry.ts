import { business } from '../data/business';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  h1: string;
  keywords: string[];
  canonical: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  schemaType: 'AutoRepair' | 'Service' | 'AboutPage' | 'ContactPage' | 'WebPage';
}

const baseUrl = business.siteUrl;

export const routesRegistry: Record<string, RouteMeta> = {
  "/": {
    path: "/",
    title: "İzmir Yağ Değişimi ve Periyodik Bakım | ASM Auto Gaziemir",
    description: "İzmir Gaziemir 6. Sanayi Sitesi'nde motor yağı değişimi, yağ filtresi ve oto periyodik bakım. 35 yıllık tecrübe, üretici onaylı yağlar ve hızlı servis randevusu.",
    h1: "İzmir'de Motor Yağı Değişimi ve Periyodik Bakım",
    keywords: ["izmir yağ değişimi", "gaziemir motor yağı değişimi", "6. sanayi sitesi oto bakım", "yağ filtresi değişimi izmir", "asm auto servis", "amcam otomotiv gaziemir"],
    canonical: `${baseUrl}/`,
    changefreq: "weekly",
    priority: 1.0,
    schemaType: "AutoRepair"
  },
  "/motor-yagi-degisimi/": {
    path: "/motor-yagi-degisimi/",
    title: "İzmir Gaziemir Motor Yağı Değişimi | Üretici Onaylı Sentetik Yağlar",
    description: "Aracınızın motor koduna tam uyumlu motor yağı değişimi. Gaziemir 6. Sanayi Sitesi ASM Auto'da sıcak karter tahliyesi, tork sıkımı ve servis kaydı.",
    h1: "İzmir'de Motor Yağı Değişimi",
    keywords: ["motor yağı değişimi izmir", "gaziemir yağ değişimi", "tam sentetik yağ değişimi", "dizel partikül filtreli yağ", "0w20 5w30 motor yağı"],
    canonical: `${baseUrl}/motor-yagi-degisimi/`,
    changefreq: "weekly",
    priority: 0.9,
    schemaType: "Service"
  },
  "/yag-filtresi-degisimi/": {
    path: "/yag-filtresi-degisimi/",
    title: "İzmir Yağ Filtresi Değişimi | Orijinal Filtre & Sızdırmazlık",
    description: "Motor ömrünün kalbi olan yağ filtresi değişimi. Kovan temizliği, yeni O-Ring contalar ve tork kontrollü montajla sıfır sızıntı garantisi.",
    h1: "İzmir Yağ Filtresi Değişimi Servisi",
    keywords: ["yağ filtresi değişimi izmir", "gaziemir filtre değişimi", "karter tapa pulu", "orijinal yağ filtresi"],
    canonical: `${baseUrl}/yag-filtresi-degisimi/`,
    changefreq: "weekly",
    priority: 0.9,
    schemaType: "Service"
  },
  "/periyodik-bakim/": {
    path: "/periyodik-bakim/",
    title: "İzmir Gaziemir Periyodik Araç Bakımı | Yağ, Filtre ve 24 Nokta Kontrol",
    description: "Motor yağı, 4 filtre değişimi, fren hidroliği nem testi ve 24 nokta mekanik muayene. İzmir Gaziemir'de güvenilir, belgeli ve şeffaf araç periyodik bakımı.",
    h1: "İzmir Periyodik Bakım Servisi",
    keywords: ["periyodik bakım izmir", "gaziemir oto periyodik bakım", "10 bin bakımı izmir", "fren balata kontrolü gaziemir"],
    canonical: `${baseUrl}/periyodik-bakim/`,
    changefreq: "weekly",
    priority: 0.9,
    schemaType: "Service"
  },
  "/randevu/": {
    path: "/randevu/",
    title: "Servis Talebi & Randevu | İzmir Yağ Değişimi - ASM Auto",
    description: "İzmir Gaziemir 6. Sanayi Sitesi'nde motor yağı ve periyodik bakım için hızlı online servis talebi oluşturun. Aracınıza özel bakım saatini netleştirelim.",
    h1: "Servis Talebi ve Randevu",
    keywords: ["yağ değişimi randevu", "oto servis randevusu izmir", "gaziemir servis randevusu"],
    canonical: `${baseUrl}/randevu/`,
    changefreq: "monthly",
    priority: 0.8,
    schemaType: "WebPage"
  },
  "/iletisim/": {
    path: "/iletisim/",
    title: "İletişim & Konum | ASM Auto Gaziemir 6. Sanayi Sitesi İzmir",
    description: "ASM Auto Servis adres: 574 Sokak. No:17 6. Sanayi Sitesi Gaziemir İzmir. Telefon: 0532 555 00 99. Google Haritalar yol tarifi ve çalışma saatleri.",
    h1: "İletişim ve Yol Tarifi",
    keywords: ["asm auto iletişim", "gaziemir 6 sanayi sitesi yol tarifi", "asm oto telefon 05325550099"],
    canonical: `${baseUrl}/iletisim/`,
    changefreq: "monthly",
    priority: 0.8,
    schemaType: "ContactPage"
  },
  "/hakkimizda/": {
    path: "/hakkimizda/",
    title: "Hakkımızda | Usta Murat ve 35 Yıllık Mekanik Deneyim",
    description: "ASM Auto'nun kuruluş hikayesi, Usta Murat'ın 35 yıllık mesleki tecrübesi ve doğru motor yağı standartlarına olan sarsılmaz bağlılığımız.",
    h1: "Hakkımızda: Usta Murat & 35 Yıllık Ustalık",
    keywords: ["asm auto hakkında", "usta murat izmir", "35 yıllık oto mekanik tecrübe gaziemir"],
    canonical: `${baseUrl}/hakkimizda/`,
    changefreq: "monthly",
    priority: 0.7,
    schemaType: "AboutPage"
  },
  "/sikca-sorulan-sorular/": {
    path: "/sikca-sorulan-sorular/",
    title: "Sıkça Sorulan Sorular | Motor Yağı & Araç Bakım Rehberi",
    description: "Hangi motor yağı uygundur? Kaç km'de yağ değişir? 5W30 ile 0W20 farkı nedir? Uzman usta cevaplarıyla motor bakım rehberi.",
    h1: "Motor Yağı ve Bakım Hakkında Sıkça Sorulan Sorular",
    keywords: ["motor yağı ne zaman değişir", "5w30 0w20 farkı", "yağ filtresi neden değişir"],
    canonical: `${baseUrl}/sikca-sorulan-sorular/`,
    changefreq: "monthly",
    priority: 0.7,
    schemaType: "WebPage"
  },
  "/kvkk-aydinlatma/": {
    path: "/kvkk-aydinlatma/",
    title: "KVKK Aydınlatma Metni | ASM Auto Servis",
    description: "6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca kişisel verilerin işlenmesi ve korunması aydınlatma bildirimi.",
    h1: "Kişisel Verilerin Korunması ve Aydınlatma Metni",
    keywords: ["kvkk aydınlatma", "veri koruma politikası"],
    canonical: `${baseUrl}/kvkk-aydinlatma/`,
    changefreq: "yearly",
    priority: 0.3,
    schemaType: "WebPage"
  },
  "/gizlilik-ve-cerezler/": {
    path: "/gizlilik-ve-cerezler/",
    title: "Gizlilik ve Çerez Politikası | ASM Auto Servis",
    description: "Gizlilik ilkelerimiz, çerez kullanım şartlarımız ve kullanıcı hakları hakkında yasal bilgilendirme.",
    h1: "Gizlilik ve Çerez Politikası",
    keywords: ["gizlilik politikası", "çerez politikası"],
    canonical: `${baseUrl}/gizlilik-ve-cerezler/`,
    changefreq: "yearly",
    priority: 0.3,
    schemaType: "WebPage"
  },
  "/ticari-iletisim-tercihleri/": {
    path: "/ticari-iletisim-tercihleri/",
    title: "Ticari İletişim Tercihleri | ASM Auto Servis",
    description: "Müşteri iletişim izinleri ve ticari elektronik ileti tercih yönetimi bilgilendirmesi.",
    h1: "Ticari Elektronik İleti ve İletişim Tercihleri",
    keywords: ["iletişim izinleri", "ticari elektronik ileti"],
    canonical: `${baseUrl}/ticari-iletisim-tercihleri/`,
    changefreq: "yearly",
    priority: 0.3,
    schemaType: "WebPage"
  }
};
