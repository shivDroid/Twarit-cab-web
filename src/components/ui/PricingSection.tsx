import { Phone, MessageCircle } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import carSeltos from "@/assets/car-seltos.avif";
import carGrandVitara from "@/assets/car-grand-vitara.avif";
import carInnova from "@/assets/car-innova.avif";

const vehicles = [
  {
    name: "Kia Seltos",
    type: "SUV • 5 Seater",
    image: carSeltos,
    features: ["AC", "Music System", "Comfortable Seats", "Premium Interior"],
    pricing: {
      insideCity: "₹12/km",
      airport: "₹1,000",
      eightHours: "₹2,200",
      fullDay: "₹3,500",
      outstationPerKm: "₹14/km",
    },
    popular: false,
  },
  {
    name: "Grand Vitara",
    type: "Premium SUV • 5 Seater",
    image: carGrandVitara,
    features: ["AC", "Music System", "Extra Legroom", "Premium Interior"],
    pricing: {
      insideCity: "₹14/km",
      airport: "₹1,200",
      eightHours: "₹2,500",
      fullDay: "₹4,000",
      outstationPerKm: "₹16/km",
    },
    popular: true,
  },
  {
    name: "Innova Crysta",
    type: "MPV • 7 Seater",
    image: carInnova,
    features: ["AC", "Music System", "Spacious", "Family Friendly"],
    pricing: {
      insideCity: "₹16/km",
      airport: "₹1,500",
      eightHours: "₹3,000",
      fullDay: "₹5,000",
      outstationPerKm: "₹18/km",
    },
    popular: false,
  },
];

const PricingSection = () => {
  const phoneNumber = "+91 8756303701";
  const whatsappLink = "https://wa.me/918756303701";

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Varanasi Cab Rates
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Choose from our fleet of well-maintained vehicles. No hidden charges, 
            transparent pricing for airport taxi, Kashi darshan, and outstation trips.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.name} 
              variant="pricing"
              className={`relative ${vehicle.popular ? "border-primary ring-2 ring-primary/20" : ""}`}
            >
              {/* Popular Badge */}
              {vehicle.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                <p className="text-muted-foreground text-sm mt-1">{vehicle.type}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {vehicle.features.map((feature) => (
                    <span 
                      key={feature}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Pricing Table */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Inside City</span>
                    <span className="font-semibold text-foreground">{vehicle.pricing.insideCity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Airport Transfer</span>
                    <span className="font-semibold text-foreground">{vehicle.pricing.airport}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">8 Hr / 80 KM</span>
                    <span className="font-semibold text-foreground">{vehicle.pricing.eightHours}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Full Day / 200 KM</span>
                    <span className="font-semibold text-foreground">{vehicle.pricing.fullDay}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <span className="text-muted-foreground text-sm">Outstation</span>
                    <span className="font-bold text-primary">{vehicle.pricing.outstationPerKm}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-4 flex flex-col gap-2">
                <Button 
                  variant={vehicle.popular ? "saffron" : "outline"} 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  variant="whatsapp" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a 
                    href={`${whatsappLink}?text=Hi, I want to book ${vehicle.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          * Prices are indicative and may vary based on route conditions and fuel prices. 
          Contact us for exact quotes.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;