import { Plane, MapPin, Building2, Compass, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Plane,
    title: "Airport Pickup & Drop",
    description: "Seamless transfers to and from Lal Bahadur Shastri International Airport (VNS). Comfortable rides with flight tracking.",
    keywords: "Varanasi airport taxi, VNS airport cab",
  },
  {
    icon: MapPin,
    title: "Kashi Vishwanath Darshan",
    description: "Visit the sacred Kashi Vishwanath Temple with our experienced local drivers who know the best routes and timings.",
    keywords: "Kashi darshan cab, Vishwanath temple taxi",
  },
  {
    icon: Building2,
    title: "Prayagraj Sangam Tour",
    description: "Travel to the holy Triveni Sangam in Prayagraj. Complete round-trip service with waiting time included.",
    keywords: "Varanasi to Prayagraj cab, Sangam tour taxi",
  },
  {
    icon: Compass,
    title: "Sarnath Buddhist Tour",
    description: "Explore the birthplace of Buddhism at Sarnath. Visit the Dhamek Stupa, museum, and ancient ruins.",
    keywords: "Sarnath tour from Varanasi, Buddhist pilgrimage cab",
  },
  {
    icon: Car,
    title: "Outstation Taxi Services",
    description: "Travel across Uttar Pradesh and beyond. Ayodhya, Lucknow, Bodh Gaya, and more destinations available.",
    keywords: "Outstation cab Varanasi, long distance taxi",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Cab & Tour Services in Varanasi
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            From airport transfers to spiritual pilgrimages, we offer comprehensive 
            travel solutions for devotees and tourists visiting the holy city of Kashi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              variant="service"
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-start space-y-4">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
