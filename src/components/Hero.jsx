import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32"
    >
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(./images/hero-banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
            transition: "background 0.3s ease-out",
          }}
        ></div>
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 blur-xl animate-float"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + i * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white/90 text-sm animate-slide-down">
            <Sparkles className="h-4 w-4 text-brand-gold" />
            <span>Trusted Global Trading Partner</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-8 leading-tight tracking-tight animate-slide-up">
            Connecting Markets. <br />
            <span className="bg-gradient-to-r from-brand-gold via-yellow-300 to-brand-gold bg-clip-text text-transparent animate-gradient">
              Delivering Excellence.
            </span>
          </h1>
          
          <p className="text-2xl sm:text-3xl font-semibold text-white/95 mb-6 leading-relaxed max-w-3xl mx-auto animate-slide-up delay-100">
            Expanding Global Possibilities through Trusted Trade Solutions
          </p>
          
          <p className="text-lg sm:text-xl text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
            Your reliable partner for seamless import, export, and distribution services across international markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up delay-300">
            <Button
              size="lg"
              onClick={() => handleNavigate("/services")}
              className="relative bg-orange-500 hover:bg-orange-500 text-white text-lg px-10 py-7 rounded-full shadow-lg font-semibold overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleNavigate("/contact")}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 text-lg px-10 py-7 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

