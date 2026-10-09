const fs = require('fs');

const content = `---
import Layout from '../layouts/Layout.astro';
import { business } from '../data/business';
---

<Layout
  title="İzmir Motor Yağı Değişimi | Üretici Onaylı Sentetik Servis | ASM Auto"
  description="İzmir Gaziemir 6. Sanayi'de 0W-20, 5W-30, 5W-40 tam sentetik motor yağı değişimi. Şasi numarasıyla üretici onayı tespiti, tork anahtarlı filtre montajı ve karterden sıcak tahliye."
>
  <!-- Hero Başlık Şeridi -->
  <div style="background-color: var(--asm-dark); color: #fff; padding: 55px 0 60px; border-bottom: 3px solid var(--asm-red);">
    <div class="container">
      <span class="section-tag" style="color: #ff4d4f;">UZMAN MEKANİK SERVİSİ</span>
      <h1 style="font-size: 34px; line-height: 1.25; color: #fff; text-transform: uppercase; margin-top: 6px;">
        İzmir Profesyonel Motor Yağı Değişimi
      </h1>
      <p style="color: #cbd5e1; font-size: 16px; margin-top: 10px; max-width: 820px; line-height: 1.6;">
        Aracınızın motor koduna tam uyumlu, üretici onaylı (OEM) tam sentetik motor yağları, orijinal filtreler ve 25 yıllık atölye tecrübesiyle karterden sıcak tahliye.
      </p>
      <div style="margin-top: 22px; display: flex; flex-wrap: wrap; gap: 15px; font-size: 13px; color: #94a3b8;">
        <span>✓ 0W-16, 0W-20, 5W-30, 5W-40 Sentetik</span>
        <span>✓ DPF & GPF Uyumlu Low-SAPS Formüller</span>
        <span>✓ 25 Nm Tork Anahtarlı Filtre Montajı</span>
        <span>✓ 25-35 Dakikada Hızlı Servis</span>
      </div>
    </div>
  </div>

  <!-- BÖLÜM 1: GENEL BAKIŞ VE ATÖLYE GÖRSELİ -->
  <section style="padding: 60px 0; background-color: #fff;">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center;">
        <div>
          <span class="section-tag">MOTOR MEKANİĞİ</span>
          <h2 class="section-title">Neden Sıradan Bir Yağ Değişimi Değil?</h2>
          <p class="about-lead" style="font-size: 16px; color: var(--asm-dark); font-weight: 600; line-height: 1.6; margin-bottom: 16px;">
            Modern motorlar mikron toleranslı yatak boşluklarına, değişken supap zamanlamalarına (VVT, VANOS) ve hassas turbo yağlama hatlarına sahiptir.
          </p>
          <p style="color: #475569; font-size: 14.5px; line-height: 1.7; margin-bottom: 16px;">
            Rastgele seçilen tek tip bir yağ veya kalitesiz yan sanayi filtre; ilk çalıştırma aşınmasını artırır, DPF gözeneklerini külden tıkar ve turbo milinin yağsız kalmasına neden olur. ASM Auto'da yağ seçimi aracın markasına değil; şasi numarasındaki tam motor koduna ve üretici onayına göre yapılır.
          </p>
          <div style="background: #f8fafc; border-left: 4px solid var(--asm-red); padding: 14px 18px; margin-bottom: 22px;">
            <p style="margin: 0; font-size: 13.5px; color: #1e293b; font-weight: 600;">
              İzmir İklim Faktörü: Yaz aylarında 50°C'yi aşan asfalt sıcaklığı ve dur-kalk trafiğinde yağ filminin kopmaması için yüksek HTHS direncine sahip sentetik baz yağlar tercih edilir.
            </p>
          </div>
          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="tel:+905325550099" class="btn btn-primary" style="padding: 12px 24px; font-size: 14px;">
              Hemen Fiyat Sor: +90 532 555 00 99
            </a>
            <a href="/randevu/" class="btn btn-outline" style="padding: 12px 24px; font-size: 14px;">
              Online Randevu Al
            </a>
          </div>
        </div>

        <div>
          <div style="border-radius: 6px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.08);">
            <img 
              src="/images/oil-fill-hero.webp" 
              alt="İzmir Motor Yağı Doldurma ve Servis İşlemi" 
              width="700" 
              height="460" 
              style="width: 100%; height: auto; display: block; object-fit: cover;" 
              loading="eager"
            />
            <div style="background: #1e293b; color: #fff; padding: 14px 18px; font-size: 12.5px; display: flex; justify-content: space-between; align-items: center;">
              <span>Murat Asım Atölyesi | Taze Yağ Dolumu</span>
              <span style="color: #ff4d4f; font-weight: 700;">Hassas Dolum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BÖLÜM 2: ADIM ADIM ATÖLYE YAĞ DEĞİŞİMİ PROTOKOLÜ -->
  <section style="padding: 60px 0; background-color: var(--asm-gray-bg); border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0;">
    <div class="container">
      <div style="text-align: center; margin-bottom: 45px;">
        <span class="section-tag">İŞLEM BASAMAKLARI</span>
        <h2 class="section-title">6 Adımda Profesyonel Yağ Değişimi</h2>
        <p style="color: var(--asm-text-muted); font-size: 15px; max-width: 650px; margin: 0 auto;">
          Aracınız atölyeye girdiği andan itibaren uygulanan sistematik mühendislik süreci.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
        
        <div style="background: #fff; padding: 25px; border-radius: 4px; border: 1px solid #e2e8f0; position: relative;">
          <div style="font-size: 28px; font-weight: 900; color: var(--asm-red); margin-bottom: 8px;">01</div>
          <h3 style="font-size: 17px; color: var(--asm-dark); margin-bottom: 8px;">Katalog & Şasi Doğrulaması</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
            Aracın ruhsatı ve motor kodundan üreticinin tam yağ onay kodu (VW 507.00, MB 229.52, RN17 vb.) ve yağ kapasitesi (litre cinsinden) taranır.
          </p>
        </div>

        <div style="background: #fff; padding: 25px; border-radius: 4px; border: 1px solid #e2e8f0; position: relative;">
          <div style="font-size: 28px; font-weight: 900; color: var(--asm-red); margin-bottom: 8px;">02</div>
          <h3 style="font-size: 17px; color: var(--asm-dark); margin-bottom: 8px;">Sıcak Karterden Tam Tahliye</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
            Araç lifte kaldırılır, alt koruma muhafazası sökülür. Motor çalışma sıcaklığındayken tapa açılarak eski yağın ve dip tortusunun tamamen akması beklenir.
          </p>
        </div>

        <div style="background: #fff; padding: 25px; border-radius: 4px; border: 1px solid #e2e8f0; position: relative;">
          <div style="font-size: 28px; font-weight: 900; color: var(--asm-red); margin-bottom: 8px;">03</div>
          <h3 style="font-size: 17px; color: var(--asm-dark); margin-bottom: 8px;">Orijinal Filtre & Yeni O-Ring</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
            Eski filtre sökülür, filtre haznesi temizlenir. Yeni filtre kutusundan çıkan O-ring conta taze motor yağı ile yağlanarak takılır ve torklanır.
          </p>
        </div>

        <div style="background: #fff; padding: 25px; border-radius: 4px; border: 1px solid #e2e8f0; position: relative;">
          <div style="font-size: 28px; font-weight: 900; color: var(--asm-red); margin-bottom: 8px;">04</div>
          <h3 style="font-size: 17px; color: var(--asm-dark); margin-bottom: 8px;">Yeni Karter Rondelası & Tork</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
            Karter tapası pulu (bakır/alüminyum ezilmeli rondela) sıfırlanır. Tapa, karter dişini korumak için el aletiyle fabrika torkunda sıkılır.
          </p>
        </div>

        <div style="background: #fff; padding: 25px; border-radius: 4px; border: 1px solid #e2e8f0; position: relative;">
          <div style="font-size: 28px; font-weight: 900; color: var(--asm-red); margin-bottom: 8px;">05</div>
          <h3 style="font-size: 17px; color: var(--asm-dark); margin-bottom: 8px;">Hassas Seviye Yağ Dolumu</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
            Kapalı ambalajından yeni açılan onaylı sentetik motor yağı, huni yardımıyla üretici litre kılavuzuna göre doldurulur. Fazla veya eksik yağ konulmaz.
          </p>
        </div>

        <div style="background: #fff; padding: 25px; border-radius: 4px; border: 1px solid #e2e8f0; position: relative;">
          <div style="font-size: 28px; font-weight: 900; color: var(--asm-red); margin-bottom: 8px;">06</div>
          <h3 style="font-size: 17px; color: var(--asm-dark); margin-bottom: 8px;">Kaçak Kontrolü & Servis Sıfırlama</h3>
          <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
            Motor marş edilir, yağ basınç lambasının sönme süresi izlenir, karter altından sızıntı kontrolü yapılır ve araç gösterge bakım sayacı sıfırlanır.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- BÖLÜM 3: VİSKOZİTE VE ÜRETİCİ ONAYLARI TABLOSU -->
  <section style="padding: 60px 0; background-color: #fff;">
    <div class="container" style="max-width: 950px;">
      <div style="text-align: center; margin-bottom: 35px;">
        <span class="section-tag">TEKNİK SPESİFİKASYONLAR</span>
        <h2 class="section-title">Hangi Araç Hangi Yağ Onayını Gerektirir?</h2>
        <p style="color: var(--asm-text-muted); font-size: 15px; max-width: 650px; margin: 0 auto;">
          Atölyemizde stoklanan resmi üretici lisanslı motor yağı sınıfları ve araç eşleşmeleri.
        </p>
      </div>

      <div style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 4px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 13.5px; text-align: left;">
          <thead>
            <tr style="background: var(--asm-dark); color: #fff;">
              <th style="padding: 14px 18px;">Viskozite</th>
              <th style="padding: 14px 18px;">Standart / SAPS</th>
              <th style="padding: 14px 18px;">OEM Fabrika Onayları</th>
              <th style="padding: 14px 18px;">Örnek Araç Grubu</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #fff;">
              <td style="padding: 14px 18px; font-weight: 700; color: var(--asm-red);">0W-16 / 0W-20</td>
              <td style="padding: 14px 18px;">API SP / ILSAC GF-6</td>
              <td style="padding: 14px 18px;">VW 508.00 / 509.00, BMW LL-17FE+</td>
              <td style="padding: 14px 18px;">Toyota/Honda Hibrit, Yeni Nesil TSI/TGDI</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
              <td style="padding: 14px 18px; font-weight: 700; color: var(--asm-red);">5W-30 Low-SAPS</td>
              <td style="padding: 14px 18px;">ACEA C3 / C2</td>
              <td style="padding: 14px 18px;">VW 504.00/507.00, BMW LL-04, MB 229.51/52</td>
              <td style="padding: 14px 18px;">VAG Grubu TDI/TSI, BMW Dizel, Mercedes BlueTEC</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #fff;">
              <td style="padding: 14px 18px; font-weight: 700; color: var(--asm-red);">5W-30 RN17</td>
              <td style="padding: 14px 18px;">ACEA C3 Mid-SAPS</td>
              <td style="padding: 14px 18px;">Renault RN17 / RN0720, Dacia DPF</td>
              <td style="padding: 14px 18px;">Renault 1.5 dCi, 1.3 TCe, Duster, Megane 4</td>
            </tr>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
              <td style="padding: 14px 18px; font-weight: 700; color: var(--asm-red);">0W-30 / 5W-30</td>
              <td style="padding: 14px 18px;">ACEA C2 Low-SAPS</td>
              <td style="padding: 14px 18px;">Fiat 9.55535-DS1, Ford WSS-M2C950-A</td>
              <td style="padding: 14px 18px;">Fiat Egea/Doblo MultiJet, Ford Transit EcoBlue</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 14px 18px; font-weight: 700; color: var(--asm-red);">5W-40 Full Sentetik</td>
              <td style="padding: 14px 18px;">ACEA A3/B4 veya C3</td>
              <td style="padding: 14px 18px;">VW 502.00/505.00, MB 229.3/229.5, RN0710</td>
              <td style="padding: 14px 18px;">Yüksek km araçlar, LPG'li motorlar, ağır ticari</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- BÖLÜM 4: GÖRSEL ATÖLYE DETAYLARI -->
  <section style="padding: 50px 0; background-color: var(--asm-gray-bg); border-top: 1px solid #e2e8f0;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
        <div style="background: #fff; border-radius: 4px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img 
            src="/images/oil-fill-close.webp" 
            alt="Taze Sentetik Motor Yağı Dolumu Yakın Çekim" 
            width="600" 
            height="380" 
            style="width: 100%; height: 220px; object-fit: cover;" 
            loading="lazy" 
          />
          <div style="padding: 18px 20px;">
            <h4 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 6px;">Altın Sarısı Taze Sentetik Yağ</h4>
            <p style="font-size: 13px; color: #4a5568; margin: 0; line-height: 1.6;">
              Orijinal ambalajından araç başına özel açılan kaliteli baz yağlar ve sürtünme azaltıcı katkılar.
            </p>
          </div>
        </div>

        <div style="background: #fff; border-radius: 4px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img 
            src="/images/service-oil-filter.webp" 
            alt="Tork Anahtarlı Yağ Filtresi Montajı" 
            width="600" 
            height="380" 
            style="width: 100%; height: 220px; object-fit: cover;" 
            loading="lazy" 
          />
          <div style="padding: 18px 20px;">
            <h4 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 6px;">Tork Anahtarıyla 25 Nm Montaj</h4>
            <p style="font-size: 13px; color: #4a5568; margin: 0; line-height: 1.6;">
              Filtre kapağı çatlamaz, O-ring conta ezilmez, yüksek otoyol devirlerinde patlama riski yaşanmaz.
            </p>
          </div>
        </div>

        <div style="background: #fff; border-radius: 4px; overflow: hidden; border: 1px solid #e2e8f0;">
          <img 
            src="/images/service-commercial-fleet.webp" 
            alt="Ticari Araç ve Filo Motor Yağı Bakımı" 
            width="600" 
            height="380" 
            style="width: 100%; height: 220px; object-fit: cover;" 
            loading="lazy" 
          />
          <div style="padding: 18px 20px;">
            <h4 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 6px;">Hafif Ticari ve Filo Çözümleri</h4>
            <p style="font-size: 13px; color: #4a5568; margin: 0; line-height: 1.6;">
              Ducato, Transit, Master araçlarda ağır çalışma şartlarına dayanıklı uzun ömürlü periyodik bakım.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- BÖLÜM 5: SIKÇA SORULAN KRİTİK SORULAR -->
  <section style="padding: 60px 0; background-color: #fff;">
    <div class="container" style="max-width: 850px;">
      <div style="text-align: center; margin-bottom: 40px;">
        <span class="section-tag">TEKNİK CEVAPLAR</span>
        <h2 class="section-title">Motor Yağı Hakkında Bilinen Yanlışlar</h2>
      </div>

      <div style="background: #f8fafc; border-left: 4px solid var(--asm-red); padding: 22px 25px; margin-bottom: 18px; border-radius: 3px;">
        <h4 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 6px;">1. "Kalın yağ koyarsak motor daha iyi korunur mu?"</h4>
        <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
          Hayır. Modern motorlarda yatak boşlukları ve hidrolik iticiler mikron seviyesindedir. Kalın yağ ilk marşta yataklara geç ulaşır, kuru sürtünmeye ve supap mekanizmasında erken aşınmaya sebep olur. Fabrika kılavuzundaki viskoziteden asla şaşılmamalıdır.
        </p>
      </div>

      <div style="background: #f8fafc; border-left: 4px solid var(--asm-red); padding: 22px 25px; margin-bottom: 18px; border-radius: 3px;">
        <h4 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 6px;">2. "Yağ filtresi her yağ değişiminde mutlaka değişmeli mi?"</h4>
        <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
          Evet. Eski filtrede yaklaşık 300 ml yanmış kirli yağ ve süzülmüş metal talaşları kalır. Filtre değişmezse yeni koyduğunuz taze motor yağı ilk dakikadan kirlenir ve filtre tıkanıp bypass açarsa kirli yağ doğrudan yataklara gider.
        </p>
      </div>

      <div style="background: #f8fafc; border-left: 4px solid var(--asm-red); padding: 22px 25px; margin-bottom: 18px; border-radius: 3px;">
        <h4 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 6px;">3. "Yağ çubuğundaki MAX çizgisinin üstüne çıkılırsa ne olur?"</h4>
        <p style="font-size: 13.5px; color: #475569; line-height: 1.6; margin: 0;">
          Fazla yağ eksik yağ kadar tehlikelidir. Krank mili yağa çarparak köpürtür; hava kabarcıklı yağ pompalandığında yağ basıncı düşer. Ayrıca krank keçelerini patlatabilir ve katalizörü bozabilir. ASM Auto'da yağ miktarı mililitresi mililitresine ölçülerek doldurulur.
        </p>
      </div>

      <div style="text-align: center; margin-top: 25px;">
        <a href="/sikca-sorulan-sorular/" style="color: var(--asm-red); font-weight: 700; font-size: 14px;">
          Tüm 50 Teknik Soruyu ve Yanıtı İnceleyin →
        </a>
      </div>
    </div>
  </section>

  <!-- RANDEVU ÇAĞRISI -->
  <section style="padding: 55px 0 70px; background-color: var(--asm-dark); color: #fff; text-align: center;">
    <div class="container" style="max-width: 750px;">
      <h3 style="font-size: 26px; color: #fff; margin-bottom: 12px;">Motorunuzun Ömrünü ASM Ustalığıyla Koruyun</h3>
      <p style="color: #cbd5e1; font-size: 15px; margin-bottom: 25px; line-height: 1.6;">
        İzmir 6. Sanayi Sitesi'ndeki atölyemize gelin, 25-35 dakikada fabrika onaylı motor yağı ve orijinal filtre değişimini tamamlayalım.
      </p>
      <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
        <a href="tel:+905325550099" class="btn btn-primary" style="padding: 14px 28px; font-size: 15px;">
          Hemen Ara: +90 532 555 00 99
        </a>
        <a href="/randevu/" class="btn btn-outline-white" style="padding: 14px 28px; font-size: 15px;">
          Online Randevu Formu →
        </a>
      </div>
    </div>
  </section>
</Layout>
`;

fs.writeFileSync('src/pages/motor-yagi-degisimi.astro', content, 'utf8');
console.log('Successfully written professional oil service page to src/pages/motor-yagi-degisimi.astro');
