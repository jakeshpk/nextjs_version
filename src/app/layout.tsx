import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "V4 Building Solutions | Electrical Contractors Thrissur",
  description: "Chartered Engineers & KSEB Licensed Electrical Contractors in Thrissur, Kerala. Electrical, Plumbing, BIM Training. 50+ Projects.",
  icons: {
    icon: "/favicon.ico",
    apple: "/V4_Logo.jpg",
  },
  keywords: "electrical contractor Thrissur, plumbing solutions Kunnamkulam, BIM training Kerala, chartered engineer Kerala, KSEB Class B contractor, MEP design Thrissur, Revit training Kerala, AutoCAD services, 3D visualization Kerala, electrical testing Kerala",
  authors: [{ name: "V4 Building Solutions" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.v4bs.in",
  },
  openGraph: {
    title: "V4 Building Solutions | Chartered Engineers & Electrical Contractors Thrissur",
    description: "Premium Electrical, Plumbing, and BIM solutions with 98.7% success rate across 50+ certified projects in Kerala, India.",
    type: "website",
    locale: "en_IN",
    url: "https://www.v4bs.in",
    siteName: "V4 Building Solutions",
    images: [
      {
        url: "https://www.v4bs.in/V4_Logo.jpg",
        width: 1200,
        height: 630,
        alt: "V4 Building Solutions Logo - Chartered Engineers Thrissur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V4 Building Solutions | Engineering Excellence in Kerala",
    description: "Chartered Engineers & Licensed KSEB Class B Contractors. Electrical, Plumbing, BIM Training.",
  },
  verification: {
    google: "google49aa6c3a85a2b57a", // Replace with actual code
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.v4bs.in/#localbusiness",
      name: "V4 Building Solutions",
      description: "Chartered Engineer (Electrical) & Licensed KSEB Class B Contractors delivering premium Electrical, Plumbing, and BIM solutions in Kerala, India.",
      url: "https://www.v4bs.in",
      telephone: "+91-9746011785",
      email: "v4buildingsolutions@gmail.com",
      image: "https://www.v4bs.in/V4_Logo.jpg",
      logo: "https://www.v4bs.in/V4_Logo.jpg",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, Vibins Complex, Calicut Road, Parempadam",
        addressLocality: "Kunnamkulam",
        addressRegion: "Thrissur",
        postalCode: "680503",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "10.6527",
        longitude: "76.0711",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "17:30",
        },
      ],
      sameAs: [
        "https://www.facebook.com/v4buildingsolutions",
        "https://www.instagram.com/v4buildingsolutions",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "50",
        bestRating: "5",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.v4bs.in/#organization",
      name: "V4 Building Solutions",
      url: "https://www.v4bs.in",
      logo: "https://www.v4bs.in/V4_Logo.jpg",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9746011785",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.v4bs.in/#service-electrical",
      name: "Electrical Contracting Services",
      description: "Licensed KSEB Class B (150kW) electrical contractors providing complete electrical system design, load calculation, and installation in Kerala.",
      provider: { "@id": "https://www.v4bs.in/#localbusiness" },
      areaServed: {
        "@type": "State",
        name: "Kerala",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.v4bs.in/#service-bim",
      name: "BIM Training & CAD to BIM Conversion",
      description: "Professional training in AutoCAD, Revit, and Navisworks. CAD to BIM conversion services LOD 100-500.",
      provider: { "@id": "https://www.v4bs.in/#localbusiness" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.v4bs.in/#service-plumbing",
      name: "Plumbing Design & Solutions",
      description: "Advanced plumbing design and execution with sustainable water management systems.",
      provider: { "@id": "https://www.v4bs.in/#localbusiness" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B6TP0GFC17"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
