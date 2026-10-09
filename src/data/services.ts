export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  lead: string;
  description: string;
  icon: string;
  highlights: string[];
  processSteps: { title: string; desc: string }[];
  technicalSpecs: string[];
  faq: { q: string; a: string }[];
  isPrimary: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "motor-yagi",
    slug: "motor-yagi-degisimi",
    title: "Motor Yağı Değişimi",
    shortTitle: "Motor Yağı",
    badge: "Üretici Standartlarında",
    lead: "Aracınızın motor koduna ve üretici teknik onayına (RN0720, VW 504/507, BMW LL-04 vb.) birebir uyumlu sentetik motor yağı değişimi.",
    description: "Rastgele viskozite seçimi motor ömrünü tüketir. ASM İzmir Yağ Servisi'nde sadece viskoziteye değil (0W-20, 5W-30, 5W-40), motorun fabrika teknik onay standartlarına göre dolum yapılır.",
    icon: "oil-can",
    highlights: [
      "Motor koduna özel üretici onaylı yağ tespiti",
      "Eski yağın sıcak motor üzerinden karterden tam tahliyesi",
      "Karter tapa pulunun her bakımda yenilenmesi",
      "Üretici kılavuzundaki hassas litre dolumu ve seviye kontrolü"
    ],
    processSteps: [
      { title: "Araç & Motor Tespiti", desc: "Ruhsat ve motor kodundan fabrikanın zorunlu kıldığı yağ normu belirlenir." },
      { title: "Karterden Sıcak Boşaltma", desc: "Motor çalışma sıcaklığındayken eski yağ tüm tortusuyla birlikte süzülür." },
      { title: "Hassas Dolum & Kalibrasyon", desc: "Gramaj ve litre hassasiyetiyle üretici miktarı kadar taze yağ doldurulur." },
      { title: "Sızdırmazlık & Seviye Testi", desc: "Motor çalıştırılarak yağ basıncı ve karter tapası sızdırmazlık kontrolü yapılır." }
    ],
    technicalSpecs: [
      "ACEA A3/B4, C2, C3, C4, C5 emisyon uyumlu tam sentetik ürünler",
      "DPF (Dizel Partikül Filtresi) ve GPF uyumlu düşük kül (Low-SAPS) içerik",
      "Turboşarj ve yüksek basınçlı direkt enjeksiyon (GDI/TSI/TDI) koruma katsayısı"
    ],
    faq: [
      {
        q: "Aracıma sadece 5W-30 demek neden yeterli değildir?",
        a: "5W-30 yalnızca viskozitedir (akışkanlık derecesi). Ancak aynı 5W-30 viskozitesinde VW 507, Ford WSS-M2C913 veya Renault RN0720 gibi tamamen farklı kimyasal katkı paketlerine sahip motor yağları bulunur. Yanlış norm partikül filtresini tıkayabilir ve turbo hasarına yol açar."
      },
      {
        q: "Motor yağı ne sıklıkla değiştirilmelidir?",
        a: "Üretici kılavuzları genellikle 10.000 - 15.000 km veya yılda 1 defa öngörür. Ancak İzmir'in yoğun dur-kalk trafiği ve yaz sıcakları 'ağır çalışma koşulu' sınıfındadır; yağın kimyasal koruyuculuğu 10.000 km civarında hızla düşer."
      }
    ],
    isPrimary: true
  },
  {
    id: "yag-filtresi",
    slug: "yag-filtresi-degisimi",
    title: "Yağ Filtresi Değişimi",
    shortTitle: "Yağ Filtresi",
    badge: "Orijinal Filtre Elemanı",
    lead: "Mikron düzeyinde partikül tutma kapasitesine sahip yüksek kaliteli filtre elemanı montajı ve kovan o-ring contalarının yenilenmesi.",
    description: "Taze motor yağı koyup eski filtreyi bırakmak, temiz suya çamur karıştırmak gibidir. Her yağ değişiminde filtre gövdesi temizlenir, kovan contaları değiştirilir ve tork anahtarıyla sıkılır.",
    icon: "filter",
    highlights: [
      "OEM eşdeğerinde kağıt mikron ve by-pass valf kalitesi",
      "Filtre kapağı O-Ring contasının sıfırlanması",
      "Doğru tork değeriyle sıkma (kovan çatlamalarını engeller)",
      "İlk çalıştırmada yağ basıncı gecikmesini önleyen montaj"
    ],
    processSteps: [
      { title: "Filtre Kovanı Açılışı", desc: "Özel lokma anahtarıyla filtre kapağı plastik tırnaklara zarar vermeden sökülür." },
      { title: "Gövde Temizliği", desc: "Kovan içinde kalan kirli yağ ve tortular özel vakum/sprey ile arındırılır." },
      { title: "Conta & O-Ring Değişimi", desc: "Yeni filtreyle gelen kauçuk contalar taze yağ ile yağlanarak yerine oturtulur." },
      { title: "Tork Kontrollü Montaj", desc: "Üretici tork değeriyle (genelde 25 Nm) sıkılarak sızdırmazlık garantilenir." }
    ],
    technicalSpecs: [
      "Yüksek basınç geri dönüş valfi (Check-valve) mekanizması",
      "Sentetik mikro-elyaf filtreleme medyası (15-20 mikron partikül tutuşu)",
      "Yüksek sıcaklık dayanımlı kauçuk conta alaşımı"
    ],
    faq: [
      {
        q: "Yağ filtresi değiştirilmeden sadece yağ yenilenebilir mi?",
        a: "Kesinlikle önerilmez. Eski filtre gözenekleri tıkandığında by-pass valfi açılır ve filtrelenmemiş kirli yağ doğrudan motor yataklarına gider. Ayrıca eski filtre gövdesinde yaklaşık 200-400 ml kirli yağ hapsolur."
      },
      {
        q: "Yan sanayi kalitesiz filtre ne tür zararlar verebilir?",
        a: "Filtre kağıdı yırtılabilir, basınç valfi kilitlenebilir veya conta sızdırarak motorun aniden yağsız kalmasına (yatak sarmasına) yol açabilir."
      }
    ],
    isPrimary: true
  },
  {
    id: "periyodik-bakim",
    slug: "periyodik-bakim",
    title: "Periyodik Bakım",
    shortTitle: "Periyodik Bakım",
    badge: "Kapsamlı Servis Paketi",
    lead: "Motor yağı, tüm filtreler (yağ, hava, polen, yakıt) ve 24 nokta mekanik & güvenlik kontrolünü içeren eksiksiz periyodik bakım.",
    description: "Aracınızın yolda kalmasını ve beklenmedik ağır masraflar çıkarmasını engelleyen koruyucu bakım. Fren hidroliği, soğutma sıvısı, alt takım, kayışlar ve akü sağlığı tek ziyarette kontrol edilir.",
    icon: "wrench",
    highlights: [
      "Motor yağı + yağ filtresi + hava filtresi + polen filtresi değişimi",
      "Fren balataları, diskler ve hidrolik nem seviyesi testi",
      "Antifriz donma derecesi ve soğutma sistemi sızdırmazlığı",
      "Alt takım, rotil, körükler ve süspansiyon elemanları kontrolü"
    ],
    processSteps: [
      { title: "Kabul & Ön İnceleme", desc: "Müşteri şikayetleri dinlenir, kilometre ve bakım geçmişi teyit edilir." },
      { title: "Dörtlü Filtre ve Yağ Değişimi", desc: "Motorun nefes almasını ve yağlanmasını sağlayan tüm filtreler yenilenir." },
      { title: "Sıvı ve Mekanik Testler", desc: "Fren sıvısı kaynama noktası, antifriz bome ölçümü ve akü testi yapılır." },
      { title: "Bakım Sıfırlama & Rapor", desc: "Gösterge servis periyodu sıfırlanır, yapılan işlemler bakım kartına işlenir." }
    ],
    technicalSpecs: [
      "Optik refraktometre ile antifriz derece ölçümü",
      "Elektronik nem test cihazı ile fren hidroliği boiling point testi",
      "OBD servis sıfırlama ve arıza hafızası taraması"
    ],
    faq: [
      {
        q: "Periyodik bakım süresi ne kadardır?",
        a: "Standart yağ ve filtre periyodik bakımı ortalama 45 - 60 dakika içinde özenle tamamlanır. Ekstra mekanik onarım veya fren müdahalesi gerekirse öncesinde bilgilendirme yapılır."
      },
      {
        q: "Bakım sonrası garanti ve servis kaydı veriliyor mu?",
        a: "Tüm kullanılan filtre ve yağ ürünlerinin markası, viskozitesi ve işlem kilometresi fiziki bakım kartına ve dijital servis kayıtlarımıza işlenerek size teslim edilir."
      }
    ],
    isPrimary: true
  }
];

export const secondaryServices = [
  {
    title: "Hava Filtresi Değişimi",
    desc: "Motorun oksijen geçirgenliğini artırarak yakıt tasarrufu ve tam yanma sağlar.",
    badge: "Performans & Tasarruf"
  },
  {
    title: "Polen (Kabin) Filtresi",
    desc: "Klima ve havalandırma kanallarından içeri giren toz, polen ve zararlı egzoz partiküllerini süzer.",
    badge: "Kabin Sağlığı"
  },
  {
    title: "Fren Hidroliği Nem Ölçümü",
    desc: "Zamanla nem çeken hidrolik sıvısının kaynama noktasını elektronik cihazla test ederiz.",
    badge: "Sürüş Güvenliği"
  },
  {
    title: "Antifriz & Sıvı Kontrolleri",
    desc: "Soğutma suyu donma derecesi, direksiyon hidroliği ve cam suyu seviyeleri tamamlanır.",
    badge: "Mevsimsel Koruma"
  }
];
