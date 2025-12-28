import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+91 XXXXX XXXXX";
  const whatsappNumber = "91XXXXXXXXXX";
  const email = "contact@twarittravel.com";

  const serviceAreas = [
    "Varanasi City",
    "Varanasi Airport (VNS)",
    "Sarnath",
    "Prayagraj",
    "Ayodhya",
    "Bodh Gaya",
    "Lucknow",
    "Chitrakoot",
  ];

  const quickLinks = [
    { name: "Airport Taxi Varanasi", href: "#services" },
    { name: "Kashi Darshan Cab", href: "#tours" },
    { name: "Outstation Taxi", href: "#pricing" },
    { name: "Tour Packages", href: "#tours" },
  ];

  return (
    <footer className="bg-temple-brown text-white/90">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">
                Twarit Tour and Travel
              </h3>
              <p className="text-primary text-sm font-medium mt-1">Varanasi</p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Twarit Tour and Travel is a trusted cab service in Varanasi offering 
              airport taxis, devotional tours, Kashi darshan cabs, outstation travel, 
              and pilgrimage packages to Prayagraj Sangam, Sarnath, and beyond.
            </p>
            {/* Contact */}
            <div className="space-y-3">
              <a 
                href={`tel:${phoneNumber.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{phoneNumber}</span>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="h-3 w-3 text-primary" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-white mb-6">Operating Hours</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">24/7 Available</p>
                  <p className="text-white/70 text-sm">Airport pickups & emergencies</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <p className="text-sm text-white/70">
                  <span className="text-primary font-medium">Early Morning Aarti Tours:</span><br />
                  Pickup from 4:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Twarit Tour and Travel – Varanasi. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Best Cab Service for Varanasi Airport Taxi, Kashi Darshan & Outstation Tours
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
