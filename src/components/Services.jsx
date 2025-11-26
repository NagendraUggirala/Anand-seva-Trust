import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookOpen, Heart, ArrowUpRight, Users, Star, Smile, Globe, School, HandHeart } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Education & Learning Support",
      description:
        "Quality education, academic guidance, skill development, and moral learning for children and young adults.",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-200/20 to-blue-100/5",
      borderColor: "border-blue-200/20",
      hoverGradient: "hover:from-blue-300/30 hover:to-blue-200/10",
    },
    {
      icon: Heart,
      title: "Care & Protection",
      description:
        "Providing safe and supportive environments where individuals can heal emotionally and rebuild confidence.",
      color: "text-red-500",
      bgColor: "bg-gradient-to-br from-red-200/20 to-red-100/5",
      borderColor: "border-red-200/20",
      hoverGradient: "hover:from-red-300/30 hover:to-red-200/10",
    },
    {
      icon: Smile,
      title: "Emotional Guidance",
      description:
        "Counselling, moral guidance, and support to help children and families navigate difficult circumstances.",
      color: "text-pink-600",
      bgColor: "bg-gradient-to-br from-pink-200/20 to-pink-100/5",
      borderColor: "border-pink-200/20",
      hoverGradient: "hover:from-pink-300/30 hover:to-pink-200/10",
    },
    {
      icon: ArrowUpRight,
      title: "Pathway Toward a Better Tomorrow",
      description:
        "Structured programs to restore dignity, rebuild lives, and provide new opportunities for growth and stability.",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-200/20 to-green-100/5",
      borderColor: "border-green-200/20",
      hoverGradient: "hover:from-green-300/30 hover:to-green-200/10",
    },
    {
      icon: Users,
      title: "Family Support",
     description:
  "Supporting community initiatives and social programs to empower individuals, raise awareness, and create a positive impact.",

      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-200/20 to-purple-100/5",
      borderColor: "border-purple-200/20",
      hoverGradient: "hover:from-purple-300/30 hover:to-purple-200/10",
    },
    {
  icon: HandHeart,
  title: "Individual Care",
  description:
    "Providing personalized support for individuals at risk, helping them avoid unsafe paths, build resilience, and make positive life choices for a brighter future.",
  color: "text-orange-600",
  bgColor: "bg-gradient-to-br from-orange-200/20 to-orange-100/5",
  borderColor: "border-orange-200/20",
  hoverGradient: "hover:from-orange-300/30 hover:to-orange-200/10",
},

  {
  icon: School,
  title: "Skill Development",
  description:
    "Equipping children and youth with practical skills, hands-on training, and confidence to succeed academically and socially, building a strong foundation for a better future.",
  color: "text-teal-600",
  bgColor: "bg-gradient-to-br from-teal-200/20 to-teal-100/5",
  borderColor: "border-teal-200/20",
  hoverGradient: "hover:from-teal-300/30 hover:to-teal-200/10",
},

    {
      icon: Star,
      title: "Moral & Value-based Learning",
      description:
        "Fostering character development, ethics, and value-based education to guide life choices positively.",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-200/20 to-yellow-100/5",
      borderColor: "border-yellow-200/20",
      hoverGradient: "hover:from-yellow-300/30 hover:to-yellow-200/10",
    },
    {
      icon: Globe,
      title: "Community Outreach",
      description:
        "Extending support and awareness to wider communities to empower more lives with care and guidance.",
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-200/20 to-indigo-100/5",
      borderColor: "border-indigo-200/20",
      hoverGradient: "hover:from-indigo-300/30 hover:to-indigo-200/10",
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto sm:px-6 lg:px-8 relative z-10 bg-gradient-to-br from-yellow-500 via-yellow-400 to-blue-700 overflow-hidden">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">
              Our Programs
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            What We Provide
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-8"></div>
           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
      Extending care, protection, guidance, and skill-building support to families, children, and individuals
      to help them regain confidence, stability, and hope for a brighter future.
    </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 ${service.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 animate-slide-up bg-white/80 backdrop-blur-sm group hover:border-opacity-100 overflow-hidden relative`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div
                className={`absolute inset-0 ${service.bgColor} ${service.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <CardHeader className="relative z-10">
                <div
                  className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                >
                  <service.icon
                    className={`h-10 w-10 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        <br></br><br></br>
      </div>
    </section>
  );
};

export default Services;