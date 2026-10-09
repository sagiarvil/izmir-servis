const fs = require('fs');

const faqs = [
  // Bölüm 1: Viskozite, Standartlar ve Üretici Onayları (1-10)
  {
    q: "0W-20, 5W-30 ve 10W-40 kodlarındaki sayılar ve W harfi tam olarak ne anlama gelir?",
    a: "W harfi Winter (Kış) kelimesini temsil eder. W harfinden önceki rakam (0W, 5W, 10W) yağın soğuk marş anındaki akışkanlığını ve pompalanabilirlik sıcaklık sınırını (-35°C ile -20°C arası) belirtir. W harfinden sonraki sayı (20, 30, 40) ise motor çalışma sıcaklığı olan 100°C ve 150°C HTHS (yüksek sıcaklık yüksek kesme) koşullarındaki viskozite direncini temsil eder."
  },
  {
    q: "Aracıma kılavuzunda yazan viskoziteden daha kalın yağ koyarsam motor daha iyi korunur mu?",
    a: "Hayır, bu sanayideki en yaygın ve tehlikeli yanılgılardan biridir. Modern motorlarda yatak boşlukları mikron mertebesindedir ve değişken supap zamanlama mekanizmaları (VVT, VANOS, VTEC) yağ basıncı ile hidrolik olarak kumanda edilir. Kalın yağ, ilk marş anında dar yağ kanallarından yataklara ve üst eksantrik millerine geç ulaşarak aşınmayı artırır."
  },
  {
    q: "ACEA C2, C3, C4 ve C5 onayları arasındaki temel fark nedir?",
    a: "Bu sınıflar Düşük/Orta SAPS (Sülfatlanmış Kül, Fosfor ve Kükürt) oranlarını ve HTHS viskozitesini belirler. C3 orta SAPS olup yüksek HTHS (3.5 mPa.s üzeri) ile ağır yüke dayanıklıdır. C2 ve C5 ise yakıt ekonomisi odaklı düşük HTHS (2.9 mPa.s altı) yağlardır. DPF donanımlı araçta yanlış sınıf seçilirse DPF gözenekleri külden tıkanır veya yatak aşınması yaşanır."
  },
  {
    q: "API SP ve ILSAC GF-6 standartları neden çıktı, LSPI nedir?",
    a: "LSPI (Low Speed Pre-Ignition), direkt enjeksiyonlu küçük hacimli turbo benzinli (TGDI) motorlarda düşük devir yüksek yük altında meydana gelen erken tutuşma ve piston kırma felaketidir. API SP ve ILSAC GF-6 standartları, kalsiyum bazlı deterjanları magnezyum ile dengeleyerek LSPI oluşumunu önleyen özel katık paketine sahiptir."
  },
  {
    q: "Volkswagen grubu için VW 504.00 / 507.00 onayı neden bu kadar kritiktir?",
    a: "VW 504.00 (benzin) ve 507.00 (dizel), VAG grubunun DPF ve katalitik konvertörlü uzun ömürlü motorları için geliştirdiği en zorlu yağ spesifikasyonudur. Kurum bağlama kapasitesi yüksek, buharlaşma kaybı (Noack) %10'un altındadır. Bu onaya sahip olmayan yağlar kam milleri ve DPF üzerinde kısa sürede geri dönüşsüz hasar bırakır."
  },
  {
    q: "BMW Longlife-01 (LL-01) ile Longlife-04 (LL-04) arasındaki fark nedir?",
    a: "LL-01 tam SAPS (Full SAPS) yapılıdır ve sadece DPF veya GPF bulunmayan benzinli motorlar içindir. LL-04 ise partikül filtreli dizel ve modern benzinli BMW motorları için geliştirilmiş düşük küllü (Mid-SAPS) yağdır. DPF'li bir dizel BMW'ye LL-01 konulursa DPF kısa sürede dolup rejenerasyon yapamaz hale gelir."
  },
  {
    q: "Grup III, Grup IV (PAO) ve Grup V (Ester) sentetik yağ farkı nedir?",
    a: "Grup III yağlar hidrokraking işleminden geçmiş ileri mineral bazlıdır ve pazarlama dilinde tam sentetik olarak geçer. Grup IV (PoliAlfaOlefin - PAO), saf laboratuvar sentezidir; oksidasyon direnci ve soğuk akışkanlığı çok üstündür. Grup V ise Ester bazlı olup manyetik polarite ile metal yüzeylere yapışır, yarış ve ekstrem sıcaklık koşullarında kullanılır."
  },
  {
    q: "Markanın onay kodu (OEM Approval) ile üretici önerisi (Meets Requirements) aynı şey midir?",
    a: "Kesinlikle aynı değildir. OEM Approval, yağ üreticisinin otomobil fabrikasına (örneğin Mercedes MB 229.52 veya Porsche C30) resmi test numunesi gönderip resmi sertifika aldığı anlamına gelir. Meets Requirements ise yağ üreticisinin laboratuvar düzeyindeki kendi iddiasıdır. Garanti kapsamındaki araçlarda mutlaka resmi onay aranmalıdır."
  },
  {
    q: "0W-16 ve 0W-8 yağlar Türkiye sıcaklarında kullanılabilir mi?",
    a: "Evet, eğer araç üreticisi (özellikle yeni nesil Toyota, Honda, Suzuki hibritleri) motoru bu viskoziteye göre tasarladıysa kullanılmalıdır. Bu motorların yağ pompası, yağlama galerileri ve termal yönetim sistemleri ultra ince yağın akış hızına göre kalibre edilmiştir. İzmir sıcağı gerekçe gösterilerek 5W-30'a dönülmesi yakıt tüketimini artırır ve motor kontrol ünitesini yanıltır."
  },
  {
    q: "Yağ viskozitesinin HTHS değeri neyi gösterir?",
    a: "HTHS (High Temperature High Shear), 150°C sıcaklıkta ve dakikada milyonlarca devir kayma gerilimi altında yağ filminin yataklar ve segmanlar arasında kopup kopmadığını ölçer. HTHS değeri yetersiz kalırsa yağ filmi yırtılır ve metal metale sürterek yatak sarma meydana gelir."
  },

  // Bölüm 2: Filtreler, Conta ve Montaj Mekaniği (11-20)
  {
    q: "Yağ filtresi plastik kapağı neden mutlaka tork anahtarı ile sıkılmalıdır?",
    a: "Plastik yağ filtre gövdeleri genellikle 25 Nm (±5 Nm) tork ile sıkılmak üzere tasarlanmıştır. Havalı tabanca veya kontrolsüz lokma ile aşırı sıkıldığında gövde mikro çatlaklar alır, ısı döngüsüyle genişler ve yüksek otoyol devrinde patlayarak motorun saniyeler içinde susuz kalması gibi yağsız kalıp yatak sarmasına yol açar."
  },
  {
    q: "Filtre kapağındaki kauçuk O-ring contayı değiştirmezsek ne olur?",
    a: "O-ring conta motor sıcaklığı ve motor yağının kimyasalları nedeniyle sertleşir, elastikiyetini kaybeder ve yassılaşır. Her filtre kutusundan yeni conta çıkar. Değiştirilmezse yağ basıncı altındayken sızıntı yapar, alternatör veya kayışların üzerine yağ sıçratarak yangın ve kopma riski oluşturur."
  },
  {
    q: "Yeni filtre takılırken O-ring conta neden taze motor yağı ile yağlanır?",
    a: "Conta kuru takılırsa filtre kapağı sıkılırken yuvasında burkulur, kıvrılır veya yırtılır. Taze yağ filmi contanın yuvasına pürüzsüz oturmasını ve sıkma torkunun dengeli dağılmasını sağlar."
  },
  {
    q: "Sac vidalı (spin-on) yağ filtresinin içine montajdan önce yağ doldurulmalı mıdır?",
    a: "Dikey monte edilen sac filtrelerde filtrenin içine taze yağ doldurulması şiddetle önerilir. Aksi halde ilk marşta yağ pompası önce boş filtre gövdesini (300-500 ml) doldurmak zorunda kalır; bu 3 ila 6 saniyelik sürede motor kuru sürtünmeyle çalışır."
  },
  {
    q: "Karter tapası pulu (rondelası) her yağ değişiminde neden yenilenmelidir?",
    a: "Karter tapası pulları ezilerek sızdırmazlık sağlayan yumuşak bakır veya alüminyum alaşımlardır. Bir kez sıkıldığında deforme olarak karter dişi ile vida arasındaki mikronik boşlukları kapatır. İkinci kez kullanılırsa sızdırır veya contayı sıkıştırmak için tapanın aşırı sıkılması sonucu karter yalama olur."
  },
  {
    q: "Alüminyum karterlerde tapa yalama olursa nasıl onarılır?",
    a: "Alüminyum karterlerde tork kontrolsüz sıkılırsa dişler sıyrılır. Doğru mühendislik çözümü Time-Sert veya profesyonel Helicoil çelik yay dişi çekilerek orijinal tork direncine kavuşturulması veya karterin komple yenilenmesidir. Sıvı conta veya teflon bantla geçici tıkamak felaketle sonuçlanır."
  },
  {
    q: "Yağ filtresi baypas valfi (Bypass Valve) ne zaman devreye girer?",
    a: "Filtre kağıdı kurumla tamamen tıkandığında veya aşırı soğukta yağ akamayacak kadar kalınlaştığında, motorun yağsız kalıp hemen kilitlenmesini önlemek için baypas valfi açılır. Bu durumda süzülmemiş kirli yağ yataklara gider. Kalitesiz yan sanayi filtrelerde bu valf yanlış basınçta açılır veya hiç açılmaz."
  },
  {
    q: "Geri akış önleme valfi (Anti-Drainback Valve) arızalanırsa ne olur?",
    a: "Bu valf motor durduğunda filtrenin içindeki yağın kartere geri süzülmesini engeller. Valf kaçırırsa her sabah ilk çalıştırmada motor üst kapağı 4-5 saniye boyunca şıkırtılı ve yağsız çalışır, fincanlar (lifterlar) ve eksantrik yatakları erkenden aşınır."
  },
  {
    q: "Hava filtresi kirliyse motor yağı daha hızlı bozulur mu?",
    a: "Evet. Tıkanmış veya kalitesiz hava filtresi mikron mertebesindeki silika (kum/toz) parçacıklarını yanma odasına geçirir. Bu silika parçaları silindir cidarlarını çizer, segman aralarından kartere inerek motor yağı içinde zımpara etkisi yapar ve yağın kurum yükünü katlar."
  },
  {
    q: "Polen filtresinin motor yağı veya mekanik sistemlerle ilgisi var mıdır?",
    a: "Doğrudan motor mekaniğiyle değil, araç iç kabin hava kalitesi ve klima evaporatör sağlığı ile ilgilidir. Ancak periyodik bakım paketinin ayrılmaz bir parçasıdır; tıkanırsa klima fan motorunu zorlar ve küf kokusu yayar."
  },

  // Bölüm 3: Aşınma, Sıcaklık, İzmir Şartları ve Yağ Ömrü (21-30)
  {
    q: "İzmir'in yaz sıcağı ve dur-kalk trafiği motor yağını nasıl etkiler?",
    a: "İzmir'de yaz aylarında asfalt sıcaklığı 55-60°C'yi bulur. Dur-kalk trafikte radyatör ve yağ soğutucuya doğal rüzgar gelmediği için karterdeki yağ sıcaklığı 125-130°C'lere tırmanır. Bu sıcaklık yağın baz yağ oksidasyonunu ve polimerik viskozite geliştirici katıkların parçalanmasını hızlandırır; 15.000 km'lik yağ 8.000-10.000 km'de ömrünü tamamlar."
  },
  {
    q: "Yılda sadece 3.000 km yapan bir aracın yağı yine de yılda bir değişmeli mi?",
    a: "Kesinlikle değişmelidir. Kısa mesafe kullanımında motor ideal çalışma sıcaklığına ulaşamaz. Yanma odasından kartere sızan çiğ yakıt buharı ve nem buharlaşamaz, yağın içine karışır. Bu nem sülfürik ve nitrik asit oluşturarak yağın TBN (Toplam Baz Numarası) değerini sıfırlar ve motor iç yüzeylerini korozyona uğratır."
  },
  {
    q: "TBN (Total Base Number) nedir ve motor yağı için neden hayati önem taşır?",
    a: "TBN, yağın asit nötralize etme kapasitesidir. Yakıtın yanmasıyla ortaya çıkan asidik gazları nötralize eden bazik katıklardır. TBN değeri kullanım süresince düşer; TBN değeri TAN (Toplam Asit Numarası) ile eşitlendiğinde yağ koruma özelliğini kaybeder ve motor iç yüzeylerinde asidik aşınma başlar."
  },
  {
    q: "Dizel araçta yağ değiştikten 50 km sonra yağ neden hemen simsiyah olur?",
    a: "Bu tamamen normal ve yağın deterjan/dispersan katıklarının görevini yaptığının göstergesidir. Dizel motorlarda yanma sonucu mikronik kurum (soot) partikülleri oluşur. Kaliteli yağ bu kurumu bünyesinde asılı tutarak topaklanmasını ve motora yapışmasını engeller."
  },
  {
    q: "Benzinli araçta yağın rengi siyahlaşmıyorsa bu yağın çok iyi olduğu anlamına mı gelir?",
    a: "Aksine, şüphelenilmelidir. Eğer yağ 10.000 km sonra bile ilk günkü gibi şeffaf sarı kalıyorsa, deterjan katıkları yanma artıklarını ve verniği çözmüyor, kir motorun içinde birikiyor demektir."
  },
  {
    q: "Motor içi yıkama (Engine Flush) sıvıları ne zaman kullanılmalı, ne zaman kaçınılmalıdır?",
    a: "Düzenli bakımı yapılmış araçlarda hafif çamuru atmak için güvenlidir. Ancak 150.000 km'yi aşmış, uzun süre bakımsız kalmış ve kalınlaşmış yağ tortusu birikmiş motorlarda flush kullanılmamalıdır; kopan büyük tortu plakaları yağ süzgecini (karter süzgeci) tıkayarak motoru yağsız bırakabilir."
  },
  {
    q: "Karterden vakumla yağ çekmek mi yoksa alttan tapayı açıp akıtmak mı daha doğrudur?",
    a: "En sağlıklı yöntem alttan tapayı açarak yerçekimiyle süzdürmektir. Ağır metal talaşları ve tortular karter tabanına çöker ve tapa deliğinden tahliye olur. Bazı modern araçlarda (Mercedes, Audi) karter tasarımı vakum borusunun en dip noktaya inmesine olanak tanır, ancak tapasız boşaltmada tortu tahliyesi her zaman daha zayıftır."
  },
  {
    q: "Sıcak motorda mı yoksa soğuk motorda mı yağ değişimi yapılmalıdır?",
    a: "Motor çalışma sıcaklığına yakın ılık/sıcak seviyedeyken yapılmalıdır (motor stop edildikten 5-10 dakika sonra). Sıcak yağın viskozitesi düşüktür, akışkandır ve askıda tuttuğu kirleri karter tabanına bırakmadan hızla dışarı taşır."
  },
  {
    q: "Noack Uçuculuk Testi (Buharlaşma Kaybı) nedir?",
    a: "Noack testi, 250°C sıcaklıkta 1 saat boyunca yağın yüzde kaçının buharlaştığını ölçer. Kaliteli tam sentetik yağlarda Noack kaybı %7-10 arasındadır. Kalitesiz yağlarda bu oran %15'leri geçer; bu da yağ eksilmesine ve emme supaplarında karbon birikmesine neden olur."
  },
  {
    q: "Motor yağı katkıları (Bor, Seramik, PTFE vb.) eklemek gerekli midir?",
    a: "Modern tam sentetik yağlar, baz yağ ve dengeli katık paketinin (aşınma önleyici ZDDP, deterjan, dispersan, sürtünme azaltıcı molibden) kimyasal dengesiyle üretilir. Dışarıdan rastgele eklenen katkılar bu hassas kimyasal dengeyi bozar ve katıkların çökmesine yol açabilir. Üreticiler harici katkı kullanımını kesinlikle önermez."
  },

  // Bölüm 4: Turbo, DPF, GPF ve Özel Sistemler (31-40)
  {
    q: "Turbo beslemeli araçlarda yağ seçiminin ve değişiminin önemi nedir?",
    a: "Turbo milleri dakikada 150.000 ile 250.000 devir arasında döner ve egzoz gazı nedeniyle 900°C'ye varan sıcaklıklara maruz kalır. Turbo milini koruyan tek şey mikron kalınlığındaki motor yağı filmidir. Kalitesiz veya eski yağ bu sıcaklıkta koklaşır (kömürleşir), turbo yağ besleme borusunu tıkar ve turbo milini keser."
  },
  {
    q: "Turboyu korumak için aracı stop etmeden önce rölantide beklemek gerçekten gerekli midir?",
    a: "Evet, özellikle otoban sürüşü veya dik yokuş tırmanışı sonrasında motoru hemen stop ederseniz, yağ pompası durur ancak 200.000 devirle dönen turbo mili dönmeye devam eder. Dolaşmayan hareketsiz yağ aşırı sıcak turbo gövdesinde pişer ve mil yataklarını çizer. 30-60 saniye rölanti turbonun soğuması için hayatidir."
  },
  {
    q: "DPF (Dizel Partikül Filtresi) donanımlı araçta Full SAPS yağ kullanılırsa ne olur?",
    a: "Full SAPS yağların yanması sonucu ortaya çıkan metalik sülfat külü DPF peteklerinin içine yerleşir. Kurum yüksek ısıyla yakılıp temizlenebilir (rejenerasyon), ancak metalik kül yanmaz ve DPF içinde kalıcı tıkanma oluşturur. Bu durum 40.000-60.000 km içinde pahalı bir DPF değişimine yol açar."
  },
  {
    q: "DPF rejenerasyonu sırasında motor yağı seviyesi neden yükselir?",
    a: "DPF rejenerasyonu için silindir içine geç fazda fazladan dizel yakıt püskürtülür. Eğer sürücü rejenerasyon bitmeden aracı sık sık stop ederse, yanmayan mazot silindir duvarından kartere süzülür. Yağ seviyesinin yükselmesi yağın içine mazot karıştığı anlamına gelir; yağ incelir, viskozitesini kaybeder ve acil değişim gerektirir."
  },
  {
    q: "GPF (Benzinli Partikül Filtresi) nedir ve hangi yağı gerektirir?",
    a: "Euro 6d emisyon standardıyla birlikte direkt enjeksiyonlu turbo benzinli araçlara da partikül filtresi (GPF/OPF) takılmıştır. Bu araçlar düşük küllü API SP / ACEA C5 / C6 veya özel üretici onaylı (VW 508.00, BMW LL-17FE+) yağları gerektirir."
  },
  {
    q: "Triger kayışı motor yağının içinde çalışan (Wet Belt / Islak Kayış) araçlarda hangi yağ kullanılır?",
    a: "Ford 1.0 EcoBoost ve Stellantis 1.2 PureTech gibi motorlarda triger kayışı karterdeki motor yağı içinde döner. Bu motorlarda kesinlikle üreticinin özel onayına sahip yağ (örneğin Ford WSS-M2C948-B) kullanılmalıdır. Yanlış yağ kayışın kauçuk yapısını eritip parçalar; kopan kauçuk parçacıkları yağ pompasının süzgecini tıkayarak motoru kilitler."
  },
  {
    q: "Start-Stop sistemi olan araçlarda motor yağı neden daha çabuk yıpranır?",
    a: "Şehir içi trafikte bir araç günde 50-80 kez marş yapabilir. Her duruşta yağ kartere süzülmeye meyleder ve her kalkış sınır yağlama (boundary lubrication) rejiminde gerçekleşir. Start-Stop uyumlu yağlar, motor durduğunda bile metal yüzeylere yapışan özel polar moleküller ve molibden bileşikleri içerir."
  },
  {
    q: "Hibrit (HEV / PHEV) araçlarda motor yağı seçimi neden farklıdır?",
    a: "Hibrit araçlarda içten yanmalı motor aniden devreye girip birkaç saniye sonra tekrar stop eder. Motor nadiren ideal 90°C çalışma sıcaklığına ulaşır. Bu yüzden 0W-16 veya 0W-20 gibi ultra düşük viskoziteli, anında pompalanabilen ve soğukta emülsiyon yapmayan yağlar şarttır."
  },
  {
    q: "AdBlue arızası motor yağı kalitesini etkiler mi?",
    a: "Doğrudan etkilemez ancak AdBlue SCR sistemi arızalandığında motor kontrol ünitesi motoru koruma moduna alır, DPF rejenerasyon döngüleri sıklaşır ve kartere yakıt sızması riski katlanarak artar."
  },
  {
    q: "LPG'li araçlarda motor yağı seçimi ve değişim periyodu farklı mıdır?",
    a: "LPG benzin ve dizele göre yanma odasında 50-100°C daha yüksek kuru sıcaklık oluşturur ve kükürt içermez. Yüksek sıcaklık yağın buharlaşmasını ve oksidasyonunu hızlandırır. LPG'li araçlarda buharlaşma direnci yüksek (düşük Noack) sentetik yağlar tercih edilmeli ve periyot 10.000 km'yi aşmamalıdır."
  },

  // Bölüm 5: Kontrol, Seviye, Sorun Giderme ve Doğru Bakım Adımları (41-50)
  {
    q: "Motor yağı seviyesi soğukken mi sıcakken mi kontrol edilmelidir?",
    a: "Üreticilerin çoğu motor çalışma sıcaklığına ulaştıktan sonra düz bir zeminde durdurulup, yağın kartere süzülmesi için 5 ila 10 dakika beklenerek kontrol edilmesini önerir. Çubuktaki Min ve Max işaretleri arasındaki fark genelde 1 litredir."
  },
  {
    q: "Motor yağı seviyesinin MAX çizgisinin üzerinde olması motora ne zarar verir?",
    a: "Yağın fazla olması eksik olması kadar tehlikelidir. Krank mili dönüş sırasında karterdeki fazla yağa çarparak yağı köpürtür. Köpüren hava kabarcıklı yağ pompalandığında yağ basıncı düşer, yataklar yağsız kalır. Ayrıca fazla yağ karter havalandırmasından emme manifolduna kaçarak katalizörü bozar ve keçeleri patlatır."
  },
  {
    q: "1.000 km'de 0.5 litre yağ eksiltmek normal midir?",
    a: "Birçok otomobil üreticisi kullanım kılavuzunda 1.000 km'de 0.5 ila 0.8 litreye kadar yağ tüketimini yasal tolerans olarak belirtir. Özellikle yüksek sıkıştırmalı turbo benzinli motorlarda bir miktar yağ eksilmesi normaldir. Ancak atmosferik veya sakin kullanılan bir araçta bu seviyede kayıp varsa segman, supap lastikleri veya turbo kontrol edilmelidir."
  },
  {
    q: "Yağ kapağının altında mayonez/tahin benzeri sarı-beyaz köpük neden oluşur?",
    a: "Kısa mesafe kullanımlarında karterdeki nem buharlaşamaz ve yağ buharıyla birleşerek üst kapakta emülsiyon oluşturur; bu zararsızdır, uzun yolda kaybolur. Ancak bu durum soğutma suyu genleşme kabında da varsa ve su eksiliyorsa silindir kapak contası yanmış ve yağa antifriz karışmış demektir; motor çalıştırılmamalıdır."
  },
  {
    q: "Farklı marka veya viskozitedeki iki motor yağı birbirine karıştırılabilir mi?",
    a: "Acil durumlarda (yağ lambası yandığında yolda kalmamak için) aynı onay standardına sahip yağlar eklenebilir. Ancak katık paketleri farklı kimyasal formüller içerdiğinden uzun vadede homojen karışım bozulabilir. Mümkün olan ilk fırsatta yağ ve filtre komple yenilenmelidir."
  },
  {
    q: "Motor yağı değişiminden sonra yağ lambası kaç saniye içinde sönmelidir?",
    a: "Sağlıklı bir değişim ve filtre montajından sonra ilk marşta yağ lambası en geç 2 ila 3 saniye içinde sönmelidir. 5 saniyeyi geçiyorsa motor derhal durdurulmalı; filtre montajı, baypas valfi ve yağ seviyesi incelenmelidir."
  },
  {
    q: "Rölantide kırmızı yağ lambasının göz kırpması ne anlama gelir?",
    a: "Bu durum yağ basıncının kritik seviyenin (genellikle 0.5 bar altı) altına düştüğünü gösterir. Sebepleri: yanlış çok ince yağ kullanımı, aşırı yakıt karışmasıyla yağın incelmesi, yağ pompası aşınması, karter süzgecinin tıkanması veya yatak boşluklarının açılmasıdır. Araç kesinlikle yürütülmemelidir."
  },
  {
    q: "Motor alt muhafaza kapağının sökülüp takılması neden titizlik gerektirir?",
    a: "Alt muhafaza plastik veya saç koruma klipsleri ve vidaları gevşek bırakılırsa yüksek hızda rüzgar basıncıyla sarkar, tekerleğe dolanabilir veya düşebilir. ASM'de tüm alt muhafaza cıvataları eksiksiz vidalanır ve şasiye emniyetle sabitlenir."
  },
  {
    q: "Motor yağı değişiminde aracın şasi numarası (VIN) neden önemlidir?",
    a: "Aynı model ve yıldaki araçta farklı motor kodları (örneğin Renault 1.5 dCi Euro 5 ve Euro 6 motorlarda farklı yağ ve filtre yapıları) bulunabilir. ASM'de her araç şasi numarasıyla OEM parça kataloğundan sorgulanarak tam doğru filtre ve fabrika onaylı yağ ile buluşturulur."
  },
  {
    q: "Atık motor yağı nasıl imha edilmeli, çevreye etkisi nedir?",
    a: "1 litre atık motor yağı 1 milyon litre temiz içme suyunu kirletebilir. ASM Servis olarak karterden çıkan tüm atık yağlar kapalı devre tanklarda toplanır ve Çevre, Şehircilik ve İklim Değişikliği Bakanlığı lisanslı geri kazanım tesislerine resmi tutanakla teslim edilir."
  }
];

const faqHtml = faqs.map((item, index) => {
  const num = index + 1;
  let categoryTag = '';
  if (num === 1) categoryTag = '<div style="margin-top: 25px; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid var(--asm-red);"><h2 style="font-size: 22px; color: var(--asm-dark);">1. Viskozite, Standartlar ve Üretici Onayları (Soru 1 - 10)</h2></div>';
  else if (num === 11) categoryTag = '<div style="margin-top: 40px; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid var(--asm-red);"><h2 style="font-size: 22px; color: var(--asm-dark);">2. Filtreler, Conta ve Montaj Mekaniği (Soru 11 - 20)</h2></div>';
  else if (num === 21) categoryTag = '<div style="margin-top: 40px; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid var(--asm-red);"><h2 style="font-size: 22px; color: var(--asm-dark);">3. Aşınma, Sıcaklık, İzmir Şartları ve Yağ Ömrü (Soru 21 - 30)</h2></div>';
  else if (num === 31) categoryTag = '<div style="margin-top: 40px; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid var(--asm-red);"><h2 style="font-size: 22px; color: var(--asm-dark);">4. Turbo, DPF, GPF ve Özel Sistemler (Soru 31 - 40)</h2></div>';
  else if (num === 41) categoryTag = '<div style="margin-top: 40px; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid var(--asm-red);"><h2 style="font-size: 22px; color: var(--asm-dark);">5. Kontrol, Seviye, Sorun Giderme ve Doğru Bakım (Soru 41 - 50)</h2></div>';

  return categoryTag + `
      <div style="background: #fff; padding: 22px 25px; margin-bottom: 16px; border: 1px solid #e2e8f0; border-left: 4px solid var(--asm-red); border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.03);">
        <h3 style="font-size: 16px; font-weight: 700; color: var(--asm-dark); margin-bottom: 10px; line-height: 1.4;">
          <span style="color: var(--asm-red); margin-right: 6px;">S${num}.</span> ${item.q}
        </h3>
        <p style="color: #334155; font-size: 14px; line-height: 1.65; margin: 0;">
          ${item.a}
        </p>
      </div>`;
}).join('\n');

const astroContent = `---
import Layout from '../layouts/Layout.astro';
---

<Layout
  title="Motor Yağı Değişimi & Bakım Rehberi: 50 Teknik Soru & Cevap | ASM İzmir"
  description="0W-20 vs 5W-30 viskozite, DPF uyumu, torklu filtre montajı, LSPI koruması ve İzmir iklimine özel motor yağı değişimi hakkında 50 kapsamlı teknik soru ve uzman cevabı."
>
  <!-- Hero / Başlık Alanı -->
  <div style="background-color: var(--asm-dark); color: #fff; padding: 50px 0 55px; border-bottom: 3px solid var(--asm-red);">
    <div class="container">
      <span class="section-tag" style="color: #ff4d4f;">UZMAN ATÖLYE REHBERİ</span>
      <h1 style="font-size: 34px; line-height: 1.25; color: #fff; text-transform: uppercase; margin-top: 6px;">
        Motor Yağı & Filtre Bakımı: 50 Teknik Soru & Yanıt
      </h1>
      <p style="color: #cbd5e1; font-size: 16px; margin-top: 10px; max-width: 820px; line-height: 1.6;">
        İnternette ve kulaktan dolma sanayi sohbetlerinde bulunmayan; yağ kimyası, viskozite standartları, OEM onayları, DPF/GPF mekaniği ve doğru atölye uygulamalarına dair 50 teknik sorunun mühendislik temelli yanıtları.
      </p>
      <div style="margin-top: 20px; display: flex; flex-wrap: wrap; gap: 15px; font-size: 13px; color: #94a3b8;">
        <span>✓ 50 Teknik Madde</span>
        <span>✓ Üretici Standartları (OEM)</span>
        <span>✓ Tork Kontrollü Montaj</span>
        <span>✓ İzmir İklim Şartları</span>
      </div>
    </div>
  </div>

  <!-- Görsel & Hızlı Bilgi Şeridi -->
  <section style="background: #fff; padding: 35px 0; border-bottom: 1px solid #e2e8f0;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; align-items: center;">
        <div>
          <img 
            src="/images/service-oil-filter.webp" 
            alt="Tork Anahtarı ve Orijinal Yağ Filtresi Montajı" 
            style="width: 100%; height: 220px; object-fit: cover; border-radius: 4px; border: 1px solid #e2e8f0;" 
            loading="lazy"
          />
          <p style="font-size: 12px; color: #64748b; margin-top: 6px; text-align: center;">Filtre kapağı 25 Nm tork anahtarı ile sıkılır, O-ring taze yağ ile yağlanır.</p>
        </div>
        <div>
          <img 
            src="/images/service-engine-bay.webp" 
            alt="Motor Bölmesi Sıvı ve Kaçak Kontrolü" 
            style="width: 100%; height: 220px; object-fit: cover; border-radius: 4px; border: 1px solid #e2e8f0;" 
            loading="lazy"
          />
          <p style="font-size: 12px; color: #64748b; margin-top: 6px; text-align: center;">Her yağ değişiminde karter, hortumlar ve üst kapak kaçak kontrolünden geçer.</p>
        </div>
        <div style="background: #f8fafc; padding: 22px; border-left: 4px solid var(--asm-red); border-radius: 4px;">
          <h4 style="font-size: 16px; color: var(--asm-dark); margin-bottom: 8px;">Randevu & Hızlı Danışma</h4>
          <p style="font-size: 13px; color: #475569; line-height: 1.5; margin-bottom: 12px;">
            Aracınızın motor koduna ve kilometresine en uygun yağ onayını öğrenmek için doğrudan atölyemizle iletişime geçebilirsiniz.
          </p>
          <a href="tel:+905325550099" class="btn btn-primary" style="display: inline-block; padding: 10px 18px; font-size: 14px;">
            Hemen Ara: +90 532 555 00 99
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- 50 SSS Listesi -->
  <section style="padding: 50px 0 70px; background-color: var(--asm-gray-bg);">
    <div class="container" style="max-width: 900px;">
      
      <div style="background: #fff; padding: 20px 25px; margin-bottom: 30px; border: 1px solid #cbd5e1; border-radius: 4px;">
        <h3 style="font-size: 16px; color: var(--asm-dark); margin-bottom: 10px;">İçindekiler ve Konu Başlıkları</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; font-size: 13px; color: #475569;">
          <div><strong>1-10:</strong> Viskozite & OEM Onayları</div>
          <div><strong>11-20:</strong> Filtre, O-Ring & Montaj</div>
          <div><strong>21-30:</strong> Sıcaklık, İzmir Şartları & Ömür</div>
          <div><strong>31-40:</strong> Turbo, DPF & Islak Kayış</div>
          <div><strong>41-50:</strong> Seviye, Arıza & Güvenli Bakım</div>
        </div>
      </div>

${faqHtml}

      <!-- Alt Danışma Kutusu -->
      <div style="margin-top: 40px; background: var(--asm-dark); color: #fff; padding: 30px; border-radius: 4px; text-align: center;">
        <h3 style="color: #fff; font-size: 22px; margin-bottom: 10px;">Aracınızın Doğru Yağ Spesifikasyonunu Birlikte Belirleyelim</h3>
        <p style="color: #cbd5e1; font-size: 14px; max-width: 650px; margin: 0 auto 20px; line-height: 1.6;">
          İzmir 2. Sanayi Sitesi'ndeki atölyemizde aracınızın şasi numarasına ve fabrika teknik bültenlerine göre en uygun motor yağı ve orijinal filtre değişimini gerçekleştiriyoruz.
        </p>
        <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
          <a href="tel:+905325550099" class="btn btn-primary" style="padding: 12px 24px;">
            Telefon: +90 532 555 00 99
          </a>
          <a href="/randevu/" class="btn btn-outline-white" style="padding: 12px 24px;">
            Online Randevu Al
          </a>
        </div>
      </div>

    </div>
  </section>
</Layout>
`;

fs.writeFileSync('src/pages/sikca-sorulan-sorular.astro', astroContent, 'utf8');
console.log('50 FAQ successfully written to src/pages/sikca-sorulan-sorular.astro');
