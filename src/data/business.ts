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
    postalCode: string;
    country: string;
    fullAddress: string;
    geo: {
      latitude: number;
      longitude: number;
    };
    googleMapsUrl: string;
    googleMapsShareUrl: string;
    googleReviewsUrl: string;
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
  name: "ASM Professional Maintenance & Auto Diagnostic Service",
  legalName: "ASM Professional Maintenance & Auto Diagnostic Service",
  tagline: "İzmir Gaziemir 6. Sanayi Sitesi Motor Yağı Değişimi ve Periyodik Bakım",
  description: "İzmir Gaziemir 6. Sanayi Sitesi'nde 35 yıllık mesleki tecrübeyle motor yağı değişimi, orijinal filtre montajı ve profesyonel oto diyagnostik periyodik bakım.",
  serviceBrand: "İzmir Yağ Değişim Servisi | ASM Auto",
  phoneDisplay: "0532 555 00 99",
  phoneE164: "+905325550099",
  whatsappE164: "+905325550099",
  whatsappUrl: "https://wa.me/905325550099?text=Merhaba,%20ASM%20Auto%20motor%20ya%C4%9F%C4%B1%20ve%20periyodik%20bak%C4%B1m%20i%C3%A7in%20bilgi%20ve%20randevu%20almak%20istiyorum.",
  email: "servis@izmiryagdegisimi.com.tr",
  address: {
    street: "574 Sokak. No:17 6. Sanayi Sitesi",
    district: "Gaziemir",
    city: "İzmir",
    postalCode: "35410",
    country: "TR",
    fullAddress: "574 Sokak. No:17 6. Sanayi Sitesi, 35410 Gaziemir/İzmir",
    geo: {
      latitude: 38.3242,
      longitude: 27.1428
    },
    googleMapsUrl: "https://share.google/fbW2epAtk6EcVrlxe",
    googleMapsShareUrl: "https://share.google/fbW2epAtk6EcVrlxe",
    googleReviewsUrl: "https://www.google.com/search?q=ASM+Professional+Maintenance+%26+Auto+Diagnostic+Service+Yorumlar&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_344PV78uYYqUMWJRoClo0adi4iqjPdQ6n4aWBxj5RbF62RS99dDwb-8_Lc_ub9ZyMU5ypKH20dHVqwyDNuIsn-nODT7q5HXUny3Ma1ZtjhHum0G5oKXVXyRLWKl941ViJkcCZAvz1FdY3MMNQ0Puay2tajp"
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
