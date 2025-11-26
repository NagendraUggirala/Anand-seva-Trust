import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Quote, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const [api, setApi] = useState(null);
  const autoplayIntervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Imports Ltd.",
      role: "CEO",
      content: "Anand Global Connect has been our trusted partner for over 5 years. Their reliability and attention to detail in international trade is unmatched. They've helped us expand to 15 new markets seamlessly.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sarah Johnson",
      company: "Global Distribution Corp",
      role: "Operations Director",
      content: "Working with Anand Global Connect transformed our import operations. Their team is professional, responsive, and always delivers on time. Highly recommended for anyone looking for quality trade solutions.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      company: "Pacific Trading Group",
      role: "Founder",
      content: "The transparency and efficiency of Anand Global Connect is exceptional. They handle all documentation, customs clearance, and logistics with expertise. Our partnership has grown significantly thanks to their services.",
      rating: 5,
      image: "👨‍💻",
    },
    {
      name: "Priya Sharma",
      company: "Eastern Exports Co.",
      role: "Export Manager",
      content: "Anand Global Connect understands the complexities of international trade. Their network spans continents, and they've consistently helped us reach new customers worldwide. Outstanding service quality.",
      rating: 5,
      image: "👩‍💻",
    },
    {
      name: "David Williams",
      company: "International Ventures",
      role: "CEO",
      content: "We've worked with many trading partners, but Anand Global Connect stands out. Their commitment to quality, transparent pricing, and excellent customer service makes them our preferred choice.",
      rating: 5,
      image: "👨‍🎓",
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const startAutoplay = () => {
      if (isHovered) {
        return; // Don't autoplay when hovered
      }

      autoplayIntervalRef.current = setInterval(() => {
        if (api && !isHovered) {
          api.scrollNext();
        }
      }, 2000); // 2 seconds
    };

    const stopAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };

    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [api, isHovered]);

  return (
    <section 
      className="py-8 mt-5 pb-10 md:pb-10 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-5 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-gold">Testimonials</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-3"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Trusted by businesses worldwide for reliable trading solutions and exceptional service
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-8">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className="border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-white/90 backdrop-blur-sm"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="h-10 w-10 text-primary/30" />
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <div className="text-4xl">{testimonial.image}</div>
                        <div>
                          <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
