export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  badge: string;
  features: string[];
  specs: string[];
  estimatedDuration: string;
}

export const services: ServiceItem[] = [
  {
    id: "motor-yagi",
    slug: "motor-yagi-degisimi",
    title: "Motor Yağı Değişimi",
    shortDesc: "Aracınızın motor tipine ve üretici onayına (ACEA, API, VW 504/507, MB 229.5 vb.) uygun tam sentetik motor yağı değişimi.",
    fullDesc: "Motor yağı, motor parçaları arasındaki sürtünmeyi en aza indirerek aşınmayı, aşırı ısınmayı ve tortu oluşumunu engeller. ASM'de yalnızca viskoziteye (5W-30, 0W-20 vb.) göre değil, üretici teknik spesifikasyonuna göre yağ seçilir.",
    icon: "oil-drop",
    badge: "Temel Hizmet",
    features: [
      "Üretici onaylı tam sentetik motor yağı",
      "Karter tapası ve pulu kontrolü",
      "Eski yağın tamamen vakum veya tahliye ile boşaltılması",
      "Yağ seviyesi ve kaçak kontrolü"
    ],
    specs: ["0W-20", "0W-30", "5W-30", "5W-40", "10W-40"],
    estimatedDuration: "25 - 40 Dakika"
  },
  {
    id: "yag-filtresi",
    slug: "yag-filtresi-degisimi",
    title: "Yağ Filtresi Değişimi",
    shortDesc: "Motor içindeki metal çapakları ve karbon partiküllerini süzen yüksek filtrasyon kapasiteli orijinal ve eşdeğer filtre montajı.",
    fullDesc: "Yeni konulan motor yağının temiz kalabilmesi ve yağ pompasının doğru basınç üretmesi için her yağ değişiminde yağ filtresinin de mutlaka yenilenmesi gerekir. Tork kontrollü doğru montaj ile sızdırmazlık garanti altına alınır.",
    icon: "filter",
    badge: "Önemli Güvenlik",
    features: [
      "OEM kalite ve onaylı filtre markaları",
      "Filtre contası ve oring yenileme",
      "Fabrika tork değerinde sıkım",
      "İlk çalıştırma basınç testi"
    ],
    specs: ["Kağıt Kartuş Filtreler", "Metal Vidalı Filtreler", "Eco-Filtreler"],
    estimatedDuration: "15 - 20 Dakika"
  },
  {
    id: "periyodik-bakim",
    slug: "periyodik-bakim",
    title: "Periyodik Araç Bakımı",
    shortDesc: "Motor yağı, yağ filtresi, hava ve polen filtreleri değişimi ile 15 nokta genel mekanik güvenlik kontrolü.",
    fullDesc: "Periyodik bakım, aracınızın güvenli çalışması, yakıt verimliliğinin korunması ve yüksek onarım masraflarının önlenmesi için her 10.000 - 15.000 km veya yılda bir yapılması gereken kapsamlı servis işlemidir.",
    icon: "wrench",
    badge: "Kapsamlı Paket",
    features: [
      "Motor yağı + Yağ filtresi değişimi",
      "Hava filtresi ve kabin (polen) filtresi değişimi",
      "Fren balatası ve hidrolik sıvı seviyesi kontrolü",
      "Akü gerilimi, antifriz ve silecek sıvısı tamamlaması"
    ],
    specs: ["Binek Araçlar", "Hafif Ticari Araçlar", "SUV ve Crossover"],
    estimatedDuration: "45 - 60 Dakika"
  },
  {
    id: "sivi-filtre-kontrol",
    slug: "filtre-degisimi",
    title: "Filtre ve Sıvı Kontrolleri",
    shortDesc: "Hava filtresi, polen filtresi, fren hidroliği, soğutma sıvısı (antifriz) ve direksiyon sıvısı ölçüm ve takviyesi.",
    fullDesc: "Motorun rahat hava alması, kabin içi havanın temizlenmesi ve fren sisteminin güvenliği için ek filtre ve sıvı kontrol süreçlerimiz eksiksiz tamamlanır.",
    icon: "check-circle",
    badge: "Destekleyici",
    features: [
      "Hava ve polen filtresi kontrolü",
      "Fren hidroliği nem ölçümü",
      "Antifriz donma derecesi tespiti",
      "Cam suyu ve aydınlatma kontrolü"
    ],
    specs: ["Tüm Marka ve Modeller"],
    estimatedDuration: "20 - 30 Dakika"
  }
];
