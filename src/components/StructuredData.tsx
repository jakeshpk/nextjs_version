import React from 'react';

const SITE_URL = 'https://www.v4bs.in';

// ----------------------------------------------------------------------------
// 1. ORGANIZATION + LOCAL BUSINESS  (the big one — appears in Google Knowledge Panel)
// ----------------------------------------------------------------------------
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ElectricalContractor', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: 'V4 Building Solutions',
  alternateName: 'V4BS',
  description:
    'KSEB Class B Licensed Electrical Contractors and Chartered Engineers providing Electrical, Plumbing, BIM Training, MEP Design and 3D Visualization services across Kerala and the Middle East.',
  url: SITE_URL,
  logo: `${SITE_URL}/V4_Logo.jpg`,
  image: `${SITE_URL}/V4_Logo.jpg`,
  telephone: ['+91-4885-298455', '+91-9746-011-785'],
  email: 'v4buildingsolutions@gmail.com',
  priceRange: '₹₹',
  foundingDate: '2020',

  address: {
    '@type': 'PostalAddress',
    streetAddress: '1st Floor, Vibins Complex, Calicut Road, Parempadam',
    addressLocality: 'Kunnamkulam',
    addressRegion: 'Kerala',
    postalCode: '680503',
    addressCountry: 'IN',
  },

  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.667136104471176,
    longitude: 76.07593621007899,
  },

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '17:30',
    },
  ],

  areaServed: [
    { '@type': 'State', name: 'Kerala' },
    { '@type': 'City', name: 'Thrissur' },
    { '@type': 'City', name: 'Kunnamkulam' },
    { '@type': 'City', name: 'Kochi' },
    { '@type': 'Place', name: 'Middle East' },
  ],

  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional Certification',
      name: 'Chartered Engineer (Electrical) — Institution of Engineers (India)',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'License',
      name: 'KSEB Class B Electrical Contractor License (150kW)',
    },
  ],

  sameAs: [
    'https://www.facebook.com/profile.php?id=61566564854807',
    'https://www.instagram.com/v4_building_solutions/',
    'https://www.instagram.com/v4bimtraining/',
  ],

  // Service catalog — each becomes a discoverable service
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'V4 Building Solutions Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chartered Engineer Certification',
          description:
            'Authorized technical certification, load auditing, and safety sign-offs recognized by government bodies and banks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical Contracting',
          description:
            'Licensed KSEB Class B (150kW) contractors. Complete electrical system design, load calculation, and installation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plumbing Solutions',
          description:
            'Advanced plumbing design and execution. Sustainable water management systems and piping layouts.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'BIM Training',
          description:
            'Professional training in AutoCAD, Revit, and Navisworks for the construction industry.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CAD to BIM Conversion',
          description:
            'Transforming legacy 2D CAD drawings into intelligent 3D Revit models (LOD 100-500).',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Solutions',
          description:
            'Custom AppSheet development, websites, and Python applications for construction firms.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Architectural Visualization',
          description:
            'High-fidelity 3D modeling using 3ds Max, Lumion, V-Ray, and Corona.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electrical Testing',
          description:
            'Megger testing, Earth pit audits, and load identification for safety and code compliance.',
        },
      },
    ],
  },

  // Real testimonials from the site, structured as Review objects.
  // NOTE: aggregateRating intentionally omitted — Google requires verifiable
  // ratings. Add it once you have Google Business Profile reviews.
  review: [
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Mohammed Hashim' },
      reviewBody:
        'V4 delivered the 150KW electrical contract ahead of schedule and with zero issues. Their attention to KSEB compliance was excellent — a true professional firm.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Ar. Jack C' },
      reviewBody:
        'The BIM training was top-notch. Our team is now fully proficient in Revit and Navisworks, significantly improving our project efficiency.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Nithin P.D' },
      reviewBody:
        'V4 Building Solutions is synonymous with trust. Their execution in both electrical and plumbing domains has always been flawless.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Dincy Anoop' },
      reviewBody:
        'The 3D architectural visualizations for our new residence were breathtaking and instrumental in helping us complete construction quickly.',
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Lentin Varghese' },
      reviewBody:
        "V4 Building Solutions provided the 3D design for our home's roof. We had some confusion initially during the execution phase, but Jakesh was fantastic at stepping in, clearing everything up, and guiding us through. Great customer service and solid design work. Highly recommend!",
    },
    {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: 'Er. Jerin Johnkutty' },
      reviewBody:
        "V4 Building Solutions did an amazing job on our landscaping and interior tiling. Their communication was excellent, especially the Er. Jakesh who led the project amazing and the final output was top-notch. Our family is thrilled with the results and would definitely recommend them to others... Highly recommend. Thank you V4.",
    },
  ],
};

// ----------------------------------------------------------------------------
// 2. WEBSITE schema — enables sitelinks search box in Google
// ----------------------------------------------------------------------------
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'V4 Building Solutions',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
};

// ----------------------------------------------------------------------------
// 3. BREADCRUMB schema — improves SERP appearance
// ----------------------------------------------------------------------------
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
};

// ----------------------------------------------------------------------------
// 4. FAQ schema — eligible for FAQ rich snippets in Google
// ----------------------------------------------------------------------------
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is V4 Building Solutions a licensed electrical contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. V4 Building Solutions holds a KSEB Class B Electrical Contractor License authorising work up to 150kW, and the firm is led by a Chartered Engineer (Electrical) recognised by the Institution of Engineers (India).',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does V4 Building Solutions serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve projects across Kerala (Thrissur, Kunnamkulam, Kochi and surrounding districts) and undertake consulting and BIM work in the Middle East.',
      },
    },
    {
      '@type': 'Question',
      name: 'What BIM software training do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide professional training in Autodesk Revit, Navisworks, and AutoCAD with field-application focus suited for architects, engineers, and construction professionals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle MEP design and execution?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We deliver end-to-end MEP (Mechanical, Electrical, Plumbing) services including design, load calculation, installation, plumbing layouts, and electrical testing such as Megger and Earth pit audits.',
      },
    },
  ],
};

// ----------------------------------------------------------------------------
// EXPORT: Single component injecting all schemas
// ----------------------------------------------------------------------------
export default function StructuredData() {
  const allSchemas = [
    localBusinessSchema,
    websiteSchema,
    breadcrumbSchema,
    faqSchema,
  ];

  return (
    <>
      {allSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
