export interface SeoRoute {
  path: string;
  title: string;
  description: string;
  heading: string;
  breadcrumbName: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

export const seoRegistry: Record<string, SeoRoute> = {
  "/": {
    path: "/",
    title: "İzmir Yağ Değişimi & Periyodik Bakım Servisi | ASM Auto",
    description: "İzmir'de motor yağı ve yağ filtresi değişimi, üretici onaylı yağlar ve 35 yıllık tecrübe ile profesyonel periyodik araç bakım servisi. Hemen randevu alın.",
    heading: "İzmir'de Motor Yağı Değişimi ve Profesyonel Periyodik Bakım",
    breadcrumbName: "Anasayfa",
    changefreq: "weekly",
    priority: 1.0
  },
  "/motor-yagi-degisimi/": {
    path: "/motor-yagi-degisimi/",
    title: "İzmir Motor Yağı Değişimi Servisi | ASM Auto İzmir",
    description: "Aracınızın motoruna uygun üretici spesifikasyonlu tam sentetik motor yağı değişimi. İzmir'de uzman işçilik, karter kontrolü ve şeffaf hizmet.",
    heading: "İzmir Motor Yağı Değişimi",
    breadcrumbName: "Motor Yağı Değişimi",
    changefreq: "weekly",
    priority: 0.9
  },
  "/yag-filtresi-degisimi/": {
    path: "/yag-filtresi-degisimi/",
    title: "İzmir Yağ Filtresi Değişimi | ASM Auto İzmir",
    description: "Orijinal ve OEM onaylı yağ filtreleriyle motor koruması. İzmir Gaziemir / Karabağlar bölgesinde garantili filtre montajı ve sızdırmazlık testi.",
    heading: "İzmir Yağ Filtresi Değişimi",
    breadcrumbName: "Yağ Filtresi Değişimi",
    changefreq: "weekly",
    priority: 0.9
  },
  "/periyodik-bakim/": {
    path: "/periyodik-bakim/",
    title: "İzmir Periyodik Araç Bakımı ve Filtre Değişimi | ASM Auto",
    description: "10.000 / 15.000 km periyodik araç bakımı, motor yağı, 4 filtre değişimi ve 15 nokta mekanik güvenlik kontrolü İzmir'de güvenilir serviste.",
    heading: "İzmir Periyodik Bakım Servisi",
    breadcrumbName: "Periyodik Bakım",
    changefreq: "weekly",
    priority: 0.9
  },
  "/randevu/": {
    path: "/randevu/",
    title: "Servis Randevusu Al | ASM İzmir Yağ Değişimi",
    description: "Aracınız için motor yağı ve periyodik bakım randevusu oluşturun. Hızlı servis kabulü ve uzman bilgilendirmesi ile zaman kaybetmeyin.",
    heading: "Online Servis Talebi & Randevu",
    breadcrumbName: "Randevu",
    changefreq: "monthly",
    priority: 0.8
  },
  "/hakkimizda/": {
    path: "/hakkimizda/",
    title: "Hakkımızda & 35 Yıllık Ustalık | ASM Auto İzmir",
    description: "Usta Murat ve 35 yıllık mesleki tecrübe hikayesi. İzmir'de otomotiv bakımında dürüstlük, teknik doğruluk ve müşteri memnuniyeti anlayışımız.",
    heading: "35 Yıllık Deneyimle ASM Auto",
    breadcrumbName: "Hakkımızda",
    changefreq: "monthly",
    priority: 0.7
  },
  "/sikca-sorulan-sorular/": {
    path: "/sikca-sorulan-sorular/",
    title: "Sıkça Sorulan Sorular | Motor Yağı & Bakım Rehberi",
    description: "Motor yağı ne zaman değişir? Hangi yağ viskozitesi seçilmeli? Yağ filtresi her bakımda yenilenmeli mi? Uzmanından net yanıtlar.",
    heading: "Motor Yağı & Bakım SSS",
    breadcrumbName: "Sıkça Sorulan Sorular",
    changefreq: "monthly",
    priority: 0.7
  },
  "/iletisim/": {
    path: "/iletisim/",
    title: "İletişim & Yol Tarifi | ASM Auto İzmir Yağ Servisi",
    description: "ASM Auto İzmir adres, telefon, WhatsApp ve Google Haritalar konumu. 6. Sanayi Sitesi Gaziemir / Karabağlar bölgesinde bize kolayca ulaşın.",
    heading: "İletişim & Konum Bilgileri",
    breadcrumbName: "İletişim",
    changefreq: "monthly",
    priority: 0.7
  },
  "/kvkk-aydinlatma/": {
    path: "/kvkk-aydinlatma/",
    title: "KVKK Aydınlatma Metni | ASM Auto İzmir",
    description: "Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca servis talepleri ve iletişim süreçlerindeki kişisel veri işleme politikamız.",
    heading: "KVKK Aydınlatma Metni",
    breadcrumbName: "KVKK",
    changefreq: "yearly",
    priority: 0.3
  },
  "/gizlilik-ve-cerezler/": {
    path: "/gizlilik-ve-cerezler/",
    title: "Gizlilik ve Çerez Politikası | ASM Auto İzmir",
    description: "Gizlilik ilkelerimiz, internet sitesi çerez kullanım prensipleri ve veri güvenliği standartlarımız hakkında bilgilendirme.",
    heading: "Gizlilik ve Çerez Politikası",
    breadcrumbName: "Gizlilik ve Çerezler",
    changefreq: "yearly",
    priority: 0.3
  },
  "/ticari-iletisim-tercihleri/": {
    path: "/ticari-iletisim-tercihleri/",
    title: "Ticari İletişim Tercihleri | ASM Auto İzmir",
    description: "Servis randevu bilgilendirmeleri ve bakım hatırlatma tercihlerinizi yönetme ilkelerimiz.",
    heading: "Ticari İletişim Tercihleri",
    breadcrumbName: "İletişim Tercihleri",
    changefreq: "yearly",
    priority: 0.3
  }
};
