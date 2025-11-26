import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and news.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-10 bg-gradient-to-r from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-80 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-2">
            <Mail className="h-6 w-6 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">
            Stay Updated with Our Latest News
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for industry insights, trade updates, and exclusive offers
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-base bg-white/95 border-2 border-white/30 focus:border-white rounded-xl px-6 flex-grow"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="h-14 bg-white text-primary hover:bg-white/90 rounded-xl px-8 font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Subscribe
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <p className="text-white/70 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

