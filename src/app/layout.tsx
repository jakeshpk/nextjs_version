import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import StructuredData from '@/components/StructuredData';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const SITE_TITLE =
  'V4 Building Solutions | Chartered Engineers & Electrical Contractors Thrissur';

const SITE_DESCRIPTION =
  'KSEB Class B Licensed Electrical Contractors & Chartered Engineers in Thrissur, Kerala. Premium Electrical, Plumbing, BIM Training, MEP Design & 3D Visualization with a 98.7% success rate across 50+ certified projects.';

const SITE_URL = 'https://www.v4bs.in';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
    apple: '/V4_Logo.jpg',
  },
  keywords: [
    'electrical contractor Thrissur',
    'plumbing solutions Kunnamkulam',
    'BIM training Kerala',
    'chartered engineer Kerala',
    'KSEB Class B contractor',
    'MEP design Thrissur',
    'Revit training Kerala',
    'AutoCAD services',
    '3D visualization Kerala',
    'electrical testing Kerala',
  ],

  authors: [{ name: 'V4 Building Solutions' }],
  creator: 'V4 Building Solutions',
  publisher: 'V4 Building Solutions',

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'V4 Building Solutions',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'V4 Building Solutions - Chartered Engineers & Electrical Contractors Thrissur Kerala',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-banner.png'],
  },

  verification: {
    google: 'google49aa6c3a85a2b57a',
  },

  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Thrissur',
    'geo.position': '10.667136;76.075936',
    ICBM: '10.667136, 76.075936',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <StructuredData />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B6TP0GFC17"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
