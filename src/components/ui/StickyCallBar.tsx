import { Phone } from "lucide-react";

const StickyCallBar = () => {
  const phoneNumber = "+91 XXXXX XXXXX";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-saffron-light to-primary py-2.5 shadow-md">
      <div className="container mx-auto px-4">
        <a
          href={`tel:${phoneNumber.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-3 text-primary-foreground font-semibold transition-all hover:scale-105"
        >
          <Phone className="h-4 w-4 animate-pulse" />
          <span className="text-sm md:text-base">
            Call Now for Instant Booking: <span className="font-bold">{phoneNumber}</span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
