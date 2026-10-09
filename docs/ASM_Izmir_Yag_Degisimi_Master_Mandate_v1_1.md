# ASM İZMİR YAĞ DEĞİŞİMİ — WEB SİTESİ MASTER MANDATE v1.1 | HİBRİT REFERANS KARARI

**Belge tarihi:** 09.10.2026  
**Revizyon:** v1.1 — Clegg + Amcam kıyas kararı ve 9 ana bölümlü dönüşüm odaklı ana sayfa  
**Referans bilgi mimarisi:** Clegg Auto (`https://cleggauto.com/`) müşteri kazanım/randevu omurgası + Amcam Otomotiv (`https://www.amcamotomotiv.com.tr/`) yalın hizmet kartları ve İzmir yerel servis sunumu.  
**Kurumsal sosyal profil:** https://www.instagram.com/asm_auto_service/  
**İlişkili kişisel profil:** https://www.instagram.com/asm_murat_/  
**Hedef işletme markası:** ASM Auto / Garage  
**Önerilen dijital hizmet markası:** İzmir Yağ Değişimi | ASM Auto  
**Aday alan adı:** `izmiryagdegisimi.com.tr` — alan adı tahsisi doğrulanmadan aktif alan adı kabul edilmez.  
**İşletme uzmanlığı:** 35 yıllık mesleki tecrübe [müşteri beyanı; uzman kişi ve başlangıç yılı belgelenecek].  
**Kapsam:** Tasarım, frontend, backend, servis talebi/randevu, yerel SEO, teknik SEO, AI Search/GEO, analitik, Google Ads hazırlığı, güvenlik, KVKK, erişilebilirlik, çevre uyumluluğu, test ve canlıya alma.  
**Nihai karar (09.10.2026):** ASM için Clegg Auto dönüşüm omurgası ana referans; Amcam Otomotiv yerel sadelik ve hizmet kartları ikincil referans. Tek şubeli yağ değişimi işletmesine uygun 9 bölümlü özgün ana sayfa. İki referansın da kodu, görselleri, özgün metni veya marka kimliği kopyalanmaz.

---

## 0. İCRA KONTRATI

Bu projede amaç 'otomotiv firması için prestij sitesi' yapmak değildir. Amaç, İzmir'de motor yağı ve filtre değişimi arayan sürücüleri **telefon görüşmesi, WhatsApp görüşmesi veya ölçülebilir servis talebine**, ardından **gerçek servis kabulüne** dönüştürmektir. Başarı ölçütü ziyaretçi veya gösterim değil; servis kabulüne dönüşen **nitelikli müşteri talebi**, kazanılan müşteri ve **iş başına katkı kârıdır**.

**Tek teklif:** İzmir'de doğru motor yağı ve filtreyle, otomobilin bakım ihtiyacına göre hizmet sunan deneyimli servis. Yan hizmetler destekleyicidir; ana sayfanın teklifini gölgeleyemez.

**Kullanıcıya gösterilecek üç ana aksiyon:** `Hemen Ara`, `WhatsApp'tan Sor`, `Servis Talebi Oluştur`. Mobilde ilk iki aksiyon sabit, üçüncüsü başlık ve formlarda görünür. `Yol Tarifi` ayrıca konum bloğunda bulunur.

**Uygulama izin seviyesi:** Önce salt-okunur keşif yap; yetkili çalışma dizininde tersine çevrilebilir geliştirme yap. Müşteri verisini, DNS'i, ödeme sistemini veya canlı barındırmayı kullanıcıdan ayrı yetki almadan değiştirme. `build successful` sonucunu `live deployed` olarak bildirme. Her yapılmış iddiayı log, HTTP cevap, test ve gerçek arayüz okuması ile doğrula.

**Temel kısıt:** Boş/doğrulanmamış bilgi otomatik doldurulamaz. Adres, gerçek telefon, çalışma saatleri, servis kapsamı, fiyat, garanti, sertifika, logo kullanım hakkı ve tecrübe yılı işletme tarafından teyit edilene dek yer tutucu veya yayın engeli olarak kalır.

---

## 1. KAYNAK KANITI VE KİMLİK AYRIMI

### 1.1 Doğrulanabilen kaynak özellikleri

- Clegg Auto ana sayfasında üst navigasyon, lokasyon/telefon/saat/randevu yönlendirmeleri, güçlü hero, müşteri değerlendirmeleri, 'neden biz' güven öğeleri, ayrıntılı servis anlatımı, randevu çağrısı, ödüller ve kapsamlı footer bulunur.
- Clegg Auto servis sayfası bakım, motor, fren, elektrik ve filo servislerini ayrıştırır; 'About', ekip ve lokasyon sayfalarıyla desteklenir.
- Amcam Otomotiv ana sayfası İzmir/Gaziemir servis kimliğini, boya/elektrik/kaporta/mekanik gibi hizmetleri basit kartlarla, ayrı hizmet bağlantıları üzerinden gösterir. Bu kart düzeni tek şubeli ASM için çoklu Clegg lokasyon kartlarından daha uygundur.
- Amcam Otomotiv'in ana sayfasında hizmet açıklamaları tekrar ettiği ve servis ağı / kurumsal değerler gibi bloklar öne çıktığı için özgün içerik ve yağ değişimi merkezli teklif konusunda referans alınmaz.
- Amcam'ın Karsan/Hyundai yetkili servis, ticari araç ve marka sayfaları ASM'nin yetkileri veya hizmet kapsamına taşınmaz. Marka, adres, uzmanlık ve kanıtlar birbirinden ayrıdır.
- ASM sosyal hesabının görünen adı `ASM AUTO / GARAGE`; açıklama ve öne çıkanlarda garaj ve klasik otomobil kimliği bulunur.
- `@asm_murat_` İzmir bağlantılı bir kişisel profildir ve ASM ilişkili hesaplara bağlantılar içerir.

### 1.2 Beyan niteliğindeki bilgiler

- '35 yıllık tecrübe' kullanıcı beyanıdır; isim, ilk çalışma yılı, uzmanlık alanı ve mesleki geçmiş görüşmeyle doğrulanır.
- ASM'nin yağ bakım hizmeti kapasitesi, markalara göre uzmanlığı, binek/ticari kapsamı ve servis hızı henüz doğrulanmadı.
- İşletmenin **tam adresi**, harita koordinatı, GSM/sabit telefonu, vergi unvanı, çalışma saatleri, Google Business Profile bağlantısı, MoYDeN izin durumu henüz doğrulanmadı.

### 1.3 Yayın yasağı

Aşağıdaki iddialar doğrulama olmadan yazılamaz: `1991'den beri faaliyet`, `tüm markalar`, `15 dakikada yağ değişimi`, `en uygun fiyat`, `Google'da 5 yıldız`, `yetkili servis`, `garantili`, `orijinal yağ`, `ücretsiz kontrol`, `her araç uyumlu`, `filo indirimi`, `sıfır bekleme`, `sertifikalı servis`, `MoYDeN belgeli`. Ölçüm veya kaynak yoksa '35 yıllık deneyim' bir müşteri beyanı olarak iç çalışma notunda kalır ve canlı başlıkta kullanılmaz.

---

## 2. NİHAİ REFERANS SEÇİMİ — CLEGG + AMCAM HİBRİT KARARI

### 2.1 Kaynak karşılaştırması ve tek karar

| Boyut | Clegg Auto (ABD) | Amcam Otomotiv (İzmir) | ASM için kabul |
|---|---|---|---|
| Ziyaretçiyi eyleme götürme | Tekrarlanan `Schedule` aksiyonları, ayrı çevrimiçi talep sayfası, kolay telefon/konum erişimi | Hizmet ve iletişim odaklı kurumsal yapı | **Clegg davranışı**: sürekli iletişim ve gerçek servis talebi |
| Hizmet kartları | Geniş yelpaze, çoklu lokasyon ve servis ayrımı | Az sayıda anlaşılır hizmet kartı | **Amcam davranışı**: 3 öncelikli yağ/bakım kartı |
| Yerel işletme kimliği | Birden fazla şubeye göre ölçekli | İzmir merkezli tek servis anlatımı | **Amcam davranışı**: tek gerçek konum ve yerel NAP |
| Sosyal kanıt | Görünür müşteri yorumları/ödüller/ekip | Marka ve servis kimliği | **Clegg davranışı**: yalnız kanıtlı ASM yorum/foto/tecrübe |
| İçerik/SEO | Lokasyon ve hizmet niyetine göre sayfalar | Model/hizmet sayfaları, fakat tekrar eden açıklamalar | **Yeni özgün yapı**: yağ değişimi niyetine göre teknik hizmet sayfaları |
| Hedef müşteri | Genel otomotiv servisi | Ağırlıkla ticari araç ve yetkili servis | **İkisini de kopyalama**: İzmir'de yağ+filtre+bakım |

**Nihai mimari:** Clegg'in işletmeyi müşteriye götüren karar akışı + Amcam'ın anlaşılır servis kartları ve yerel sadeliği + ASM'nin gerçek uzman/atölye kanıtı. Tasarım bileşenleri ve içerikler sıfırdan, özgün üretilir.

**Yasak:** Clegg'in dört şubesini taklit eden lokasyon kartları, Amcam'ın Karsan/Hyundai yetkili servis iddialarını ASM'ye taşıma, servisleri anlamsız biçimde çoğaltma, gerçekte sunulmayan hızlı/ücretsiz hizmet vaatleri. Tek alanda **yağ değişimi** ana satış niyetidir.

### 2.2 Bileşen aktarım matrisi

| Referans mekanizma | ASM karşılığı | Kaynak / karar |
|---|---|---|
| Clegg utility bar, telefon, çalışma saatleri | Gerçek ASM telefon, saat ve adresi | Clegg'den işlevsel referans |
| Clegg güçlü hero ve randevu çağrısı | İzmir yağ değişimi H1 + telefon/WhatsApp/servis talebi | Clegg'den dönüşüm mantığı |
| Amcam'ın yalın hizmet kartları | Motor yağı, yağ filtresi, periyodik bakım | Amcam'dan yoğunluk ve taranabilirlik |
| Clegg lokasyon ve değerlendirme | Tek doğrulanmış ASM konumu ve gerçek kullanıcı görüşleri | Sadece kanıt varsa |
| Clegg's Why Choose Us, ekip, ödüller | Usta Murat'ın doğrulanmış deneyimi, gerçek bakım süreci ve atölye fotoğrafları | Ödül/garanti uydurma |
| Amcam iletişim kolaylığı | Harita/telefon/çalışma saatleri açık ve erişilebilir | Yerel servis uyarlaması |
| Clegg Schedule Appointment | En fazla gerekli bilgiyle servis talebi; CRM kaydı | Gerçek randevu onayı ayrı durum |
| Clegg FAQ/content modules | Teknik doğru yağ, filtre, bakım sıklığı soruları | ASM'ye özgü özgün veri |

**Kabul ölçütü:** Mobilde ilk ekranın gösterdiği teklif yağ değişimi olmalı; ziyaretçi tek dokunuşla telefon veya WhatsApp'a ulaşabilmeli; hizmetten servis talebine yönlendirme doğrudan yapılmalı; test talebi Firestore/CRM'de gözlenmeli.

---

## 3. HEDEF KİTLE VE TEKLİF TASARIMI

**P1: Acil karar veren sürücü.** Arama: `izmir yağ değişimi`, `yakınımda yağ değişimi`, `yağ filtresi değişimi`, `[mahalle] motor yağı değişimi`. İhtiyaç: açık mı, nerede, ne kadar sürer, nasıl ulaşırım? Çözüm: anında telefon/konum, hızlı işlem talebi.

**P2: Periyodik bakım zamanı gelen sürücü.** Arama: `periyodik bakım izmir`, `motor yağı bakım servisi`, `[araç modeli] yağ bakımı izmir`. İhtiyaç: hangi işlemler yapılır, hangi yağ uygundur, fiyat nasıl belirlenir? Çözüm: araç/model bilgisiyle ön değerlendirme ve net kapsam.

**P3: Küçük ticari filo/kurye/taksi işletmecisi.** İhtiyaç: araç yatışını azaltma, düzenli bakım kaydı, faturalama, seri planlama. Çözüm: filo başvuru sayfası, ancak operasyonel kapasite doğrulanırsa.

**P4: ASM markasını sosyal medyadan tanıyan kişi.** İhtiyaç: tecrübeye güven ve atölyeye erişim. Çözüm: doğrulanmış sosyal profil bağlantısı, Murat'ın uzmanlığı, gerçek servis süreci.

**Değer vaadi:** `Aracınızın motoruna uygun yağı belirleyip bakım kapsamını açıkça anlatan, İzmir'de ulaşılabilir uzman servis.`  
**Sınır:** Bakım periyodu ve ürün seçimi araç üreticisinin yağ standardı, motor tipi, model yılı, kullanım koşulları ve teknik verilerle belirlenir; sadece `5W-30`, `0W-20` gibi viskozite adıyla uyumluluk kararı verilmez.

---

## 4. SAYFA / URL BİLGİ MİMARİSİ (IA)

**Önerilen origin:** `https://izmiryagdegisimi.com.tr` yalnız alan adı sahibi/onayı ve DNS kayıtları doğrulandıktan sonra. Canonical tek host seçilir (`www` veya apex); diğeri kalıcı yönlendirilir.

### 4.1 Başlangıçta yayına alınacak URL'ler

| Önem | URL | Birincil arama niyeti | Dönüşüm |
|---|---|---|---|
| P0 | `/` | İzmir yağ değişimi / ASM | Telefon + WhatsApp |
| P0 | `/motor-yagi-degisimi/` | Motor yağı değişimi İzmir | Servis talebi |
| P0 | `/yag-filtresi-degisimi/` | Yağ filtresi değişimi İzmir | Servis talebi |
| P0 | `/periyodik-bakim/` | Periyodik bakım İzmir | Bakım talebi |
| P0 | `/randevu/` | Servis randevusu | Form |
| P0 | `/iletisim/` | ASM iletişim / yol tarifi | Yol tarifi + arama |
| P1 | `/hakkimizda/` | ASM usta, tecrübe | Güven + arama |
| P1 | `/filtre-degisimi/` | Hava/polen/yakıt filtresi | Talep |
| P1 | `/fren-hidroligi-kontrolu/` | Kontrol/bakım kapsamı (sunuluyorsa) | Talep |
| P1 | `/arac-bakim-rehberi/` | Bakım rehberi | İlgili servise geçiş |
| P1 | `/sikca-sorulan-sorular/` | Yağ bakım soruları | Arama |
| P1 | `/filo-bakimi/` | Ticari araç filo bakımı (hizmet teyitli) | Kurumsal form |
| P0 | `/kvkk-aydinlatma/` | Veri işleme bildirimi | Yasal uyum |
| P0 | `/gizlilik-ve-cerezler/` | Gizlilik/çerez | Yasal uyum |
| P0 | `/ticari-iletisim-tercihleri/` | Pazarlama izinleri (uygulama varsa) | İzin yönetimi |

---

## 5. GÖRSEL TASARIM SİSTEMİ

**Kimlik:** `ASM | OIL & AUTO CARE — İZMİR`.  
**Karakter:** mekanik uzmanlık, disiplin, temiz ve yüksek güven veren modern servis; aşırı parlak neon, sahte 3D otomobil ve jenerik stok usta görselleri yok.  
**Tema:** Öncelik açık tema; derin grafit başlık, sıcak beyaz yüzey, yanık turuncu kontrollü vurgu.

### 5.1 Design tokens

```css
:root {
  --ink: #16212C;
  --surface: #FFFFFF;
  --surface-soft: #F5F7F8;
  --surface-dark: #17232D;
  --accent: #D85C20;
  --accent-text: #7D300D;
  --muted: #5B6672;
  --line: #DCE2E7;
  --success: #21734C;
  --error: #B42318;
  --radius-card: 16px;
  --radius-button: 10px;
  --container: 1240px;
  --section-space-desktop: 80px;
  --section-space-mobile: 44px;
}
```

---

## 6. ANA SAYFA — 9 BÖLÜMLÜ HİBRİT KOMPOZİSYON (NİHAİ)

**S01. Üst bar + sticky navigasyon:** Doğrulanmış telefon, tek şube adresi, çalışma saatleri ve `Yol Tarifi`. Logo ve menü: `Yağ Değişimi`, `Periyodik Bakım`, `Usta Murat`, `Bakım Rehberi`, `İletişim`; üstte güçlü `Servis Talebi`. Mobil sabit iki aksiyon: `Ara` ve `WhatsApp`.
**S02. Hero / birincil satış teklifi:** Kısa H1 `İzmir'de Motor Yağı Değişimi ve Periyodik Bakım`. Gerçek atölye fotoğrafı. İlk ekranda hizmet + şehir + tecrübe + telefon veya WhatsApp + servis talebi görünür.
**S03. Üç büyük hizmet kartı (Amcam benzeri sadelik):** `Motor Yağı Değişimi`, `Yağ Filtresi Değişimi`, `Periyodik Bakım`.
**S04. Neden ASM + bakım nasıl yapılır:** `Araca uygun yağ`, `Doğru filtre`, `İşlem öncesi bilgilendirme`, `Bakım kaydı`. 4 adımlı işlem: `Araç bilgisi → Teknik spesifikasyon kontrolü → Servis uygulaması → İşlem kaydı`.
**S05. Usta Murat + 35 yıllık mesleki tecrübe:** Gerçek portre ve kanıtlanabilir hikâye.
**S06. Güven kanıtı + gerçek atölye/Instagram galerisi:** Doğrulanmış değerlendirmeler veya izinli müşteri görüşleri; gerçek bakım görselleri.
**S07. Mini bakım rehberi + SSS:** `Hangi yağ uygun?`, `Yağ filtresi değişmeli mi?`, `Ne zaman değişmeli?`, `Fiyatı ne belirler?`.
**S08. Tek gerçek konum + servis talebi:** Açık adres, çalışma saatleri, harita/yol tarifi ve telefon. Aynı ekranda kısa talep formu: `Ad`, `Telefon`, `Hizmet`.
**S09. Footer:** Doğru ticari unvan/marka, iletişim bilgileri, yerel adres, temel hizmet bağlantıları, gerçek sosyal profiller, KVKK ve çerezler.

---

## 10. TEKNİK STACK, REPO VE UYGULAMA YAPISI

**Seçilen mimari:** `Astro + TypeScript + statik/SSR hibrit sayfalar + Firebase Hosting + Cloud Functions (2nd gen) + Firestore + Firebase App Check/Turnstile + GA4/GTM + Search Console`.

---

## 18. TEST KABUL KAPILARI — G0–G15

| Gate | Test | Kabul şartı |
|---|---|---|
| G0 | Kanıt envanteri | İşletme adı, telefon, adres, sosyal hesap ve deneyim iddiaları kaynaklı |
| G1 | Derleme | `npm run build` exit=0; TypeScript kontrolü geçer |
| G2 | URL | Her yayın URL'si HTTP 200, doğrulanmış canonical |
| G3 | SEO | Tek H1, özgün title/description, indeks politikası doğru |
| G4 | Sitemap/robots | Sitemap'te yalnız geçerli URL; bots unintentionally blocked değil |
| G5 | Schema | JSON parse + Schema.org ve Google test, gerçek verilerle örtüşme |
| G6 | Render | İlk HTML'de hizmet metni, H1 ve CTA mevcut |
| G7 | Responsive | 360/390/768/1024/1440 yatay taşma yok |
| G8 | Accessibility | Klavye, focus, form label, hata mesajları, kontrast, reduce-motion |
| G9 | Performance | Lab LCP/CLS ve TBT ölçümü |
| G10 | Lead E2E | Form → HTTP 201 → DB kayıt → bildirim |
| G11 | Failure injection | Duplicate, 429, 500, timeout, tekrar deneme |
| G12 | Security | Anonim lead okuma engelli; rol bypass ve secret leak yok |
| G13 | Analytics | GA4 debug events doğru, PII sızmıyor |
| G14 | Compliance | KVKK/çerez, MoYDeN ve kampanya beyanları onaylı |
| G15 | Live readback | Nihai domain, HTTPS, HTTP response, screenshot, test lead |
