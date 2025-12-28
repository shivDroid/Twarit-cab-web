import { Helmet } from "react-helmet-async";
import StickyCallBar from "@/components/StickyCallBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ToursSection from "@/components/ToursSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "name": "Twarit Tour and Travel – Varanasi",
    "description": "Reliable cab and tour services in Varanasi. Airport transfers, Kashi Vishwanath darshan, Prayagraj Sangam tours, and outstation taxi services.",
    "url": "https://twarittravel.com",
    "telephone": "+91-XXXXX-XXXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.3176",
      "longitude": "82.9739"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "₹₹",
    "areaServed": [
      "Varanasi",
      "Prayagraj",
      "Sarnath",
      "Ayodhya",
      "Lucknow"
    ],
    "serviceType": [
      "Airport Taxi",
      "Kashi Darshan Cab",
      "Outstation Cab",
      "Tour Packages"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Twarit Tour and Travel – Varanasi | Best Cab Service & Tour Packages</title>
        <meta 
          name="description" 
          content="Trusted Varanasi cab service for airport taxi, Kashi Vishwanath darshan, Prayagraj Sangam tours & outstation travel. 24/7 availability. Call now for instant booking!" 
        />
        <meta 
          name="keywords" 
          content="Varanasi cab service, airport taxi Varanasi, Kashi darshan cab, Varanasi tour taxi, outstation cab from Varanasi, Varanasi to Prayagraj cab" 
        />
        <link rel="canonical" href="https://twarittravel.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Twarit Tour and Travel – Varanasi | Best Cab Service" />
        <meta property="og:description" content="Reliable cab and tour services in Varanasi. Airport transfers, Kashi darshan, and outstation tours." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-background">
        <StickyCallBar />
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <ToursSection />
        <TrustSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
