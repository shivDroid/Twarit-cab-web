import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tours = [
  {
    title: "Kashi Vishwanath & Ganga Aarti Tour",
    duration: "6-8 Hours",
    highlights: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Evening Ganga Aarti", "Manikarnika Ghat"],
    description: "Experience the divine essence of Varanasi with our comprehensive Kashi Vishwanath darshan tour. Begin with the sacred Jyotirlinga temple, explore ancient ghats, and witness the mesmerizing Ganga Aarti ceremony that has been performed for centuries. Our local drivers ensure you navigate the narrow lanes efficiently and reach all spiritual destinations on time.",
    price: "Starting ₹1,500",
  },
  {
    title: "Varanasi to Prayagraj Sangam",
    duration: "Full Day",
    highlights: ["Triveni Sangam", "Hanuman Mandir", "Anand Bhawan", "Sangam Boat Ride"],
    description: "Take a spiritual journey to Prayagraj, where the holy rivers Ganga, Yamuna, and the mythical Saraswati meet. Our comfortable cab service includes round-trip travel, waiting time for darshan, and a traditional boat ride to the sacred confluence. Perfect for those seeking spiritual purification through the holy waters.",
    price: "Starting ₹3,500",
  },
  {
    title: "Sarnath Buddhist Pilgrimage",
    duration: "4-5 Hours",
    highlights: ["Dhamek Stupa", "Sarnath Museum", "Chaukhandi Stupa", "Deer Park"],
    description: "Visit Sarnath, where Lord Buddha delivered his first sermon after attaining enlightenment. Explore the ancient Dhamek Stupa, marvel at the Ashoka Pillar remains, and immerse yourself in 2,500 years of Buddhist history. Our knowledgeable drivers can share insights about this UNESCO World Heritage site.",
    price: "Starting ₹1,200",
  },
  {
    title: "Varanasi Full-Day Temple Tour",
    duration: "10-12 Hours",
    highlights: ["Kashi Vishwanath", "Sankat Mochan", "Tulsi Manas Temple", "Durga Temple", "BHU Campus"],
    description: "A comprehensive spiritual tour covering the most revered temples of Varanasi. From the ancient Kashi Vishwanath to the Hanuman temple of Sankat Mochan, experience the diverse religious heritage of Kashi. Includes the beautiful BHU campus and the new Kashi Vishwanath Corridor for a complete devotional experience.",
    price: "Starting ₹2,500",
  },
];

const ToursSection = () => {
  const phoneNumber = "+91 8756303701";
  const whatsappNumber = "918756303701";

  return (
    <section id="tours" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Spiritual Journeys</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-3 mb-6">
            Popular Varanasi Tour Packages
          </h2>
          <p className="text-muted-foreground text-lg font-sans">
            Embark on a soulful journey through the ancient lanes and sacred temples 
            of Kashi with our carefully curated devotional tour packages.
          </p>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <Card key={tour.title} variant="tour" className="group">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {/* Tour Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                      {tour.title}
                    </h3>
                    <span className="text-primary font-bold text-lg whitespace-nowrap">
                      {tour.price}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                      >
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground font-sans leading-relaxed">
                    {tour.description}
                  </p>
                </div>
              </CardContent>

              <CardFooter className="px-8 pb-8 pt-0 flex flex-wrap gap-3">
                <Button variant="saffron" size="default" asChild>
                  <a href={`tel:${phoneNumber.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call to Book
                  </a>
                </Button>
                <Button variant="outline" size="default" className="border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50" asChild>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=Hi, I want to book ${tour.title}`}
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
      </div>
    </section>
  );
};

export default ToursSection;
