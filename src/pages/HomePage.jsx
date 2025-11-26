import React from "react";
import { Button } from "../components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

/* WORKFLOW STEPS */
const steps = [
  {
    id: "01",
    title: "Our Mission",
    text: "Anand Seva Trust is dedicated to supporting families and individuals facing difficult or vulnerable circumstances.",
  },
  {
    id: "02",
    title: "Who We Support",
    text: "We extend care to families without stability, children from troubled backgrounds, and individuals drifting toward unsafe environments.",
  },
  {
    id: "03",
    title: "Education & Learning",
    text: "We provide quality education, academic guidance, skill development, and value-based learning to build a strong foundation.",
  },
  {
    id: "04",
    title: "Care & Protection",
    text: "We ensure emotional healing, counselling, moral guidance, and a safe environment for growth and rebuilding confidence.",
  },
  {
    id: "05",
    title: "Path to Better Future",
    text: "Through structured programs and compassionate care, we help restore dignity and offer new opportunities for stability and hope.",
  },
];

const events = [
  {
    day: "29",
    month: "July",
    title: "Manager Disapproved of the Most Recent Work.",
    text: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut",
    venue: "350 5th Ave New York, NY 118 United States",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
  },
  {
    day: "15",
    month: "August",
    title: "Annual Charity Gala Dinner 2024",
    text: "Join us for an evening of fine dining and fundraising to support children's education",
    venue: "Grand Ballroom, Manhattan, NY 10001",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=250&fit=crop",
  },
  {
    day: "22",
    month: "September",
    title: "Volunteer Training Workshop",
    text: "Learn essential skills and techniques to become an effective volunteer in our community",
    venue: "Community Center, Brooklyn, NY 11201",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
  },
  {
    day: "05",
    month: "October",
    title: "Winter Clothing Drive Launch",
    text: "Help us collect warm clothing for families in need during the upcoming winter season",
    venue: "Central Park, New York, NY 10022",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&fit=crop",
  },
];

const counters = [
  { count: "260+", label: "Total Happy Children" },
  { count: "110+", label: "Total Our Volunteer" },
  { count: "190+", label: "Our Products & Gifts" },
  { count: "560+", label: "Worldwide Donor" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of supported child",
      content:
        "Anand Seva Trust gave my daughter the education and support she needed when we had nowhere else to turn.",
      avatar: "PS",
    },
    {
      name: "Rahul Mehta",
      role: "Volunteer",
      content:
        "Working with the trust has been life-changing. Seeing the transformation is the most rewarding experience.",
      avatar: "RM",
    },
    {
      name: "Dr. Anjali Patel",
      role: "Education Partner",
      content:
        "The systematic approach and genuine care shown by Anand Seva Trust sets them apart.",
      avatar: "AP",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative py-24 flex items-center justify-center bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-blue-800/90 text-white overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-blue-800/80"></div>
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 rounded-full text-sm border border-white/30">
                <Heart className="h-4 w-4" />
                Transforming Lives Since 2010
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Anand Seva Trust</h1>

              <p className="text-xl sm:text-2xl font-light mb-8 text-blue-100">
                Extending Care. Restoring Lives. Empowering Futures.
              </p>

              <p className="text-base sm:text-lg text-blue-100 mb-8">
                A compassionate initiative dedicated to supporting individuals and families facing difficulties.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-lg flex items-center justify-center"
                >
                  Get Help Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HEART IMAGE SECTION ================= */}
      <section className="w-full flex items-center justify-center bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* IMAGE */}
          <div className="relative flex items-center justify-center">
            <div
              className="absolute -top-16 -left-10 w-60 sm:w-72 h-60 sm:h-72 rounded-full blur-3xl opacity-40"
              style={{ background: "linear-gradient(135deg, #ff784f, #ffb16d)" }}
            ></div>

            <div
              className="w-80 sm:w-[500px] h-80 sm:h-[500px] overflow-hidden"
              style={{
                clipPath:
                  "path('M 250 450 C 60 320 0 210 0 140 C 0 60 70 0 150 0 C 210 0 250 30 250 70 C 250 30 290 0 350 0 C 430 0 500 60 500 140 C 500 210 440 320 250 450 Z')",
              }}
            >
              <img
                src="https://themeshub.net/themes/freeweb/free/charitics/assets/img/about-img.png"
                alt="heart"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h4 className="text-orange-600 font-semibold mb-3 text-sm sm:text-base">About Us</h4>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-snug sm:leading-tight">
              Helping Each Other Can Make <br /> World Better
            </h1>

            <p className="text-gray-600 text-base sm:text-lg mb-8">
              We help families and children facing difficulties with care, education and support.
            </p>

            <button className="bg-orange-600 text-white px-5 sm:px-7 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-700 transition flex items-center gap-2">
              Explore More →
            </button>
          </div>
        </div>
      </section>

      {/* ================= DONATION SECTION ================= */}
      <section className="flex justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-20">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row gap-6 lg:gap-12 bg-red-600 rounded-2xl p-6 sm:p-10 text-white">

          {/* LEFT DONATE BOX */}
          <div className="w-full lg:w-1/2 bg-[url('https://themeshub.net/demo-charitics/assets/images/hero/hero-dark.jpg')] bg-cover bg-center rounded-2xl p-6 sm:p-8 min-h-[280px]">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Custome Donate Now</h2>

            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
              {["10", "20", "30", "40", "50"].map((amt, i) => (
                <button
                  key={i}
                  className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold border-none cursor-pointer ${
                    i === 0 ? "bg-orange-500 text-white" : "bg-white text-black"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>

            <div className="flex gap-2 sm:gap-3">
              <input
                type="number"
                placeholder="10"
                className="flex-1 p-2 sm:p-3 rounded-full border-none"
              />
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-orange-500 text-white font-bold rounded-full">
                Donate Now
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
              Support Kids by Raising <br /> Valuable Donations
            </h1>

            <p className="text-base sm:text-lg mb-2">Raised: $25,000</p>

            <input
              type="range"
              min="0"
              max="100"
              value="64"
              readOnly
              className="w-full mb-2 sm:mb-4"
            />

            <p className="text-right text-sm sm:text-base">Goal: $30,000</p>
          </div>
        </div>
      </section>

      {/* ================= COUNTERS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-blue-50 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {counters.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center mb-4 sm:mb-6 hover:border-blue-600 hover:bg-blue-50 transition-all duration-300">
                  {/* Icons dynamically */}
                  {/* Count */}
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors">
                    {item.count}
                  </h2>
                </div>
                <p className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EVENTS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-blue-50 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">

          <div className="text-center mb-8 sm:mb-12">
            <h5 className="text-red-500 font-semibold">Upcoming Events</h5>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-gray-800">
              Charitics Information Of Event Schedule
            </h2>
            <button className="mt-3 sm:mt-4 px-4 sm:px-6 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2 mx-auto hover:bg-red-600 transition-colors">
              Explore More <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {events.map((item, index) => (
              <div
                key={index}
                className="border border-blue-200 rounded-xl overflow-hidden bg-white hover:bg-blue-100 transition-all hover:scale-105 duration-300 shadow-md hover:shadow-lg"
              >
                <img
                  src={item.img}
                  alt="Event"
                  className="w-full h-40 sm:h-44 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="text-center bg-red-500 text-white w-10 sm:w-12 py-1 rounded-md flex-shrink-0">
                      <h3 className="text-sm sm:text-lg font-bold">{item.day}</h3>
                      <p className="text-[9px] sm:text-xs">{item.month}</p>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-800 leading-tight">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-[10px] sm:text-xs mb-2 sm:mb-3 leading-relaxed">{item.text}</p>
                  <div className="mb-2 sm:mb-3">
                    <h5 className="font-semibold text-gray-700 text-xs sm:text-sm">Venue</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">{item.venue}</p>
                  </div>
                  <button className="text-red-500 font-semibold flex items-center gap-1 hover:text-red-600 transition-colors text-xs sm:text-sm">
                    Event Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">

          <p className="text-orange-500 font-medium mb-2 text-sm sm:text-base">❤️ Start donating poor people</p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            What People Say About <span className="text-orange-500">Anand Seva Trust</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">

            {/* Left rating card */}
            <div className="bg-orange-50 rounded-2xl shadow p-6 sm:p-10 w-full md:w-[380px] mb-8 md:mb-0">
              <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center">4.9</h3>
              <div className="flex justify-center mt-2 sm:mt-3">
                {[1,2,3,4,5].map((i) => (
                  <FaStar key={i} className="text-orange-500 text-lg sm:text-xl" />
                ))}
              </div>
              <p className="text-center text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">5 Star Rating</p>
              <p className="text-gray-600 text-sm sm:text-base mt-4 sm:mt-6 text-center">
                Join thousands of satisfied donors and volunteers who have experienced 
                the transformative work of Anand Seva Trust.
              </p>
              <div className="flex justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                <img src="https://i.pravatar.cc/40?img=1" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 1" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 2" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 3" />
                <img src="https://i.pravatar.cc/40?img=4" className="w-8 sm:w-10 h-8 sm:h-10 rounded-full" alt="User 4" />
              </div>
            </div>

            {/* Right side - Testimonials Carousel */}
            <div className="flex-1 relative w-full">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                      <p className="text-orange-500 text-3xl sm:text-5xl mb-2 sm:mb-4">❝</p>
                      <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                        "{testimonials[index % testimonials.length].content}"
                      </p>
                      <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-8">
                        <img
                          src={`https://i.pravatar.cc/60?img=${index+12}`}
                          className="w-10 sm:w-14 h-10 sm:h-14 rounded-full"
                          alt={testimonials[index % testimonials.length].name}
                        />
                        <div>
                          <h4 className="text-sm sm:text-xl font-bold text-gray-900">
                            {testimonials[index % testimonials.length].name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-500">{testimonials[index % testimonials.length].role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2 sm:gap-4 mt-2 sm:mt-8">
                <button 
                  onClick={() => setCurrentTestimonial((prev) => prev === 0 ? 3 : prev - 1)}
                  className="w-8 sm:w-10 h-8 sm:h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button 
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 4)}
                  className="w-8 sm:w-10 h-8 sm:h-10 border rounded-full flex items-center justify-center hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>

              {/* Testimonial Indicators */}
              <div className="flex justify-center gap-1 sm:gap-2 mt-2 sm:mt-6">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-orange-500 w-6 h-3 sm:w-8 sm:h-3' : 'bg-orange-300 w-3 h-3 sm:w-3 sm:h-3'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          <div className="mt-6 sm:mt-10 flex justify-end">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow transition flex items-center gap-2 text-sm sm:text-base">
              ➤ All Testimonials
            </button>
          </div>

        </div>
      </section>

      {/* ============ WORKFLOW SECTION ============ */}
      <section className="bg-[green] py-16 sm:py-20 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl text-white font-semibold mb-2 sm:mb-4">
            Anand Seva Trust
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-10 sm:mb-16 text-sm sm:text-lg">
            Extending Care. Restoring Lives. Empowering Futures.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-6 sm:gap-8 relative">
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={index} className="flex flex-col items-center text-center relative mb-6 md:mb-0">

                  <div
                    onClick={() => setActiveIndex(index)}
                    className={`w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center rounded-full border-2 cursor-pointer transition-all duration-300
                      ${isActive
                        ? "bg-gradient-to-r from-teal-400 to-cyan-300 text-white border-transparent shadow-xl transform -translate-y-1 sm:-translate-y-2 scale-105"
                        : "border-white text-white hover:shadow-md"
                      }`}
                  >
                    <span className="text-xl sm:text-2xl font-semibold">{step.id}</span>
                  </div>

                  {index !== steps.length - 1 && (
                    <div
                      className={`hidden md:block absolute top-8 sm:top-10 left-[100%] w-16 sm:w-24 border-t
                        ${index < activeIndex ? "border-white opacity-90" : "border-white/30 opacity-40"}
                      `}
                    ></div>
                  )}

                  <h3 className="text-sm sm:text-lg text-white font-semibold mt-2 sm:mt-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-200 text-xs sm:text-sm mt-1 sm:mt-2 max-w-[200px] sm:max-w-[220px]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
