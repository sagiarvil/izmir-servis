export interface BusinessData {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  serviceBrand: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsappE164: string;
  whatsappUrl: string;
  email: string;
  address: {
    street: string;
    district: string;
    city: string;
    country: string;
    fullAddress: string;
    geo: {
      latitude: number;
      longitude: number;
    };
    googleMapsUrl: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    schemaOpeningHours: string[];
  };
  experienceYears: number;
  experienceMaster: string;
  founder: string;
  addressStability: string;
  social: {
    instagramShop: string;
    instagramMaster: string;
  };
  siteUrl: string;
  canonicalDomain: string;
}

export const business: BusinessData = {
  name: "ASM Auto / Garage",
  legalName: "ASM Otomotiv Servis Hizmetleri",
  tagline: "İzmir'de Motor Yağı Değişimi ve Periyodik Bakım",
  description: "İzmir'de 25 yıldır aynı adreste motor yağı, filtre değişimi ve periyodik bakıma odaklanan, Murat Asım ustalığıyla araç üretici spesifikasyonlarına tam uyumlu profesyonel servis.",
  serviceBrand: "İzmir Yağ Değişimi | ASM Auto",
  phoneDisplay: "0532 555 00 99",
  phoneE164: "+905325550099",
  whatsappE164: "+905325550099",
  whatsappUrl: "https://wa.me/905325550099?text=Merhaba,%20ara%C3%A7%20motor%20ya%C4%9F%C4%B1%20bak%C4%B1m%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum.",
  email: "servis@izmiryagdegisimi.com.tr",
  address: {
    street: "574 Sokak. No:17 6. Sanayi Sitesi",
    district: "Gaziemir - Karabağlar",
    city: "İzmir",
    country: "TR",
    fullAddress: "574 Sokak. No:17 6. Sanayi Sitesi, 35410 Gaziemir/İzmir",
    geo: {
      latitude: 38.3340,
      longitude: 27.1350
    },
    googleMapsUrl: "https://share.google/fbW2epAtk6EcVrlxe"
  },
  workingHours: {
    weekdays: "08:30 - 18:30",
    saturday: "08:30 - 17:00",
    sunday: "Kapalı",
    schemaOpeningHours: ["Mo-Fr 08:30-18:30", "Sa 08:30-17:00"]
  },
  experienceYears: 25,
  experienceMaster: "Murat Asım",
  founder: "Murat Asım",
  addressStability: "25 yıldır İzmir 6. Sanayi Sitesi'nde aynı adreste kesintisiz hizmet",
  social: {
    instagramShop: "https://www.instagram.com/asm_auto_service/",
    instagramMaster: "https://www.instagram.com/asm_murat_/"
  },
  siteUrl: "https://izmiryagdegisimi.web.app",
  canonicalDomain: "izmiryagdegisimi.com.tr"
};
