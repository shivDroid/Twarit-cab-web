import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-varanasi.jpg";

const HeroSection = () => {
  const phoneNumber = "+91 8756303701";
  const whatsappLink = "https://wa.me/918756303701";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-temple-brown/60 via-temple-brown/50 to-temple-brown/80" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-gold/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative Om symbol */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-4 animate-glow">
            <span className="text-3xl text-primary-foreground">🕉️</span>
          </div>

          {/* Main Heading - H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight animate-fade-up">
            Reliable Cab & Tour Services in{" "}
            <span className="text-primary">Varanasi</span>
          </h1>

          {/* Subheading - H2 */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-white/90 font-sans font-medium animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Airport Transfers • Kashi Darshan • Outstation Tours
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto font-sans animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Experience the spiritual heart of India with our trusted, comfortable, 
            and affordable cab services. Available 24/7 for all your travel needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a href={`tel:${phoneNumber.replace(/\s/g, "")}`} className="gap-3">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            
            <Button
              variant="whatsapp"
              size="xl"
              asChild
            >
              <a
                href={`${whatsappLink}?text=Hi, I want to book a cab in Varanasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-3"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Booking
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom center of section */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;