import { Check, Shield, Clock, MapPin, Car, Star } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Varanasi Drivers",
    description: "Our drivers are born and raised in Varanasi, knowing every ghat, temple lane, and shortcut in the holy city.",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden charges or surge pricing. What we quote is what you pay. All tolls and parking included in packages.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Whether it's a midnight airport pickup or an early morning Ganga Aarti, we're available round the clock.",
  },
  {
    icon: Car,
    title: "Clean & Verified Vehicles",
    description: "All our cabs are regularly sanitized, serviced, and inspected for your comfort and safety.",
  },
  {
    icon: Star,
    title: "Years of Experience",
    description: "Trusted by thousands of pilgrims and tourists visiting Varanasi for spiritual and leisure travel.",
  },
  {
    icon: Check,
    title: "Flexible Booking",
    description: "Easy booking via call or WhatsApp. Modify or cancel bookings with hassle-free policies.",
  },
];

const TrustSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
                Twarit Tour and Travel – Your Trusted Partner in Varanasi
              </h2>
              <p className="text-muted-foreground text-lg font-sans leading-relaxed">
                With deep roots in the spiritual city of Kashi, we understand the unique needs 
                of pilgrims and tourists. Our commitment to reliability, comfort, and devotion 
                makes us the preferred cab service in Varanasi.
              </p>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="flex gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground font-sans">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
