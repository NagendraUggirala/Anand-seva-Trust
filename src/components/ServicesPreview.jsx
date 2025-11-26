import { Button } from "./ui/button";
import { Ship, Truck, Package, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesPreview = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Ship,
      title: "Export Services",
      description: "International export solutions to global markets",
      color: "text-primary",
      bgColor: "bg-gradient-to-br from-primary/20 to-primary/5",
    },
    {
      icon: Package,
      title: "Import Solutions",
      description: "Hassle-free import services from trusted suppliers",
      color: "text-brand-orange",
      bgColor: "bg-gradient-to-br from-brand-orange/20 to-brand-orange/5",
    },
    {
      icon: Truck,
      title: "Distribution",
      description: "Domestic and national distribution networks",
      color: "text-brand-gold",
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-gold/5",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden pb-8 md:pb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-5 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">
            Our Core Services
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-3"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive trading solutions designed for your business success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-primary/30 cursor-pointer"
              onClick={() => navigate("/services")}
            >
              <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-8 w-8 ${service.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() => navigate("/services")}
            className="relative bg-orange-500 hover:bg-orange-500 text-white shadow-lg font-semibold overflow-hidden group hover:scale-105 transition-transform duration-300 px-8 rounded-full"
          >
            <span className="relative z-10 flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;

