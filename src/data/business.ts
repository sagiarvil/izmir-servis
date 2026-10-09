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
  description: "İzmir'de motor yağı ve filtre değişimine odaklanan, araç üretici spesifikasyonlarına uygun profesyonel periyodik bakım servisi.",
  serviceBrand: "İzmir Yağ Değişimi | ASM Auto",
  phoneDisplay: "0232 253 00 35",
  phoneE164: "+902322530035",
  whatsappE164: "+905322530035",
  whatsappUrl: "https://wa.me/905322530035?text=Merhaba,%20ara%C3%A7%20motor%20ya%C4%9F%C4%B1%20bak%C4%B1m%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum.",
  email: "servis@izmiryagdegisimi.com.tr",
  address: {
    street: "6. Sanayi Sitesi, 677/19 Sokak No:12",
    district: "Gaziemir - Karabağlar",
    city: "İzmir",
    country: "TR",
    fullAddress: "6. Sanayi Sitesi, Gaziemir - Karabağlar / İzmir",
    geo: {
      latitude: 38.3340,
      longitude: 27.1350
    },
    googleMapsUrl: "https://maps.google.com/?q=38.3340,27.1350"
  },
  workingHours: {
    weekdays: "08:30 - 18:30",
    saturday: "08:30 - 17:00",
    sunday: "Kapalı",
    schemaOpeningHours: ["Mo-Fr 08:30-18:30", "Sa 08:30-17:00"]
  },
  experienceYears: 35,
  experienceMaster: "Usta Murat",
  social: {
    instagramShop: "https://www.instagram.com/asm_auto_service/",
    instagramMaster: "https://www.instagram.com/asm_murat_/"
  },
  siteUrl: "https://izmiryagdegisimi.web.app",
  canonicalDomain: "izmiryagdegisimi.com.tr"
};
