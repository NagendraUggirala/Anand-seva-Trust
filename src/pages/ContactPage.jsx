// ContactAnandSevaTrust.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  inquiryType: "",
  subject: "",
  message: "",
  website: "" // honeypot
};

const ContactAnandSevaTrust = () => {
  const [formData, setFormData] = useState(() => {
    try {
      const saved = localStorage.getItem("anand_seva_contact_draft");
      return saved ? JSON.parse(saved) : initialForm;
    } catch {
      return initialForm;
    }
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // refs for sections
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, threshold: 0.15 });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem("anand_seva_contact_draft", JSON.stringify(formData));
      } catch (error) {
        console.warn("Could not save to localStorage:", error);
      }
    }, 600);

    return () => clearTimeout(timeoutId);
  }, [formData]);

  useEffect(() => {
    if (submitStatus === "success") {
      const timeoutId = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [submitStatus]);

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Get detailed responses",
      details: ["care@anandsevatrust.org"],
      action: "Send Email",
      link: "mailto:care@anandsevatrust.org",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      title: "Call Us",
      description: "Speak with our counselors",
      details: ["+91 98765 43210", "+91 98765 43211"],
      action: "Call Now",
      link: "tel:+919876543210",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
        </svg>
      ),
      title: "WhatsApp",
      description: "Quick chat assistance",
      details: ["+91 98765 43210"],
      action: "Start Chat",
      link: "https://wa.me/919876543210",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600"
    }
  ];

  const inquiryTypes = [
    "Education Support",
    "Counseling & Guidance",
    "Family Support",
    "Child Protection",
    "Volunteer Opportunity",
    "Donation Inquiry",
    "Partnership",
    "General Inquiry"
  ];

  // Fixed validation function
  const validate = (data) => {
    const e = {};
    if (!data.name?.trim()) e.name = "Name is required";
    if (!data.email?.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email";
    if (!data.phone?.trim()) e.phone = "Phone is required";
    else if (!/^\+?[0-9\s]{7,15}$/.test(data.phone.replace(/\s/g, ''))) e.phone = "Enter a valid phone number";
    if (!data.inquiryType) e.inquiryType = "Please select inquiry type";
    if (!data.subject?.trim()) e.subject = "Subject is required";
    if (!data.message?.trim() || data.message.trim().length < 10) e.message = "Please provide a detailed message (min 10 chars)";
    if (data.website && data.website.trim().length > 0) e.website = "Spam detected";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorKey}"]`);
      if (errorElement) {
        errorElement.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // Clear form and local storage
      setFormData(initialForm);
      try {
        localStorage.removeItem("anand_seva_contact_draft");
      } catch (error) {
        console.warn("Could not clear localStorage:", error);
      }

      setSubmitStatus("success");
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2500);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative py-16 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 overflow-hidden">
        {/* Hero Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/25 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-white/30 rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-white/40 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

          {/* Hope Symbols */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 text-white opacity-60 animate-bounce">
            <span className="text-2xl">✨</span>
          </div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 text-white opacity-70 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <span className="text-xl">🌟</span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-amber-200">Anand Seva Trust</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-white/90">
                Extending Care. Restoring Lives. Empowering Futures.
              </p>
              <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                A compassionate initiative dedicated to supporting individuals and families facing difficult circumstances.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="tel:+919876543210" 
  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-3 border border-orange-400"
>
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
  Call for Help
</motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919876543210"
                className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-3 border border-emerald-400"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.18-1.24-6.169-3.495-8.418" />
                </svg>
                WhatsApp Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Our Mission of Compassion</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-200"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Who We Support</h3>
                <ul className="text-blue-700 text-left space-y-2 text-sm">
                  <li>• Families without care or stability</li>
                  <li>• Children from challenging backgrounds</li>
                  <li>• Individuals at risk of negative influences</li>
                  <li>• Those needing emotional healing</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-200"
              >
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">📚</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Education & Learning</h3>
                <ul className="text-blue-700 text-left space-y-2 text-sm">
                  <li>• Quality education support</li>
                  <li>• Academic guidance</li>
                  <li>• Skill development programs</li>
                  <li>• Value-based learning</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-200"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">Care & Protection</h3>
                <ul className="text-blue-700 text-left space-y-2 text-sm">
                  <li>• Safe supportive environment</li>
                  <li>• Emotional counseling</li>
                  <li>• Moral guidance</li>
                  <li>• Life rebuilding support</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-blue-800 text-white p-8 rounded-2xl shadow-xl"
            >
              <p className="text-lg md:text-xl italic mb-4">
                "No child or family deserves to be left behind. Anand Seva Trust ensures they receive education, guidance, and the right direction to rise with hope and purpose."
              </p>
              <p className="text-blue-200 font-semibold">- Our Promise</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section ref={sectionRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: { staggerChildren: 0.06 }
              }
            }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

              {/* CONTACT INFO CARD */}
              <motion.div variants={fadeUp} className="lg:col-span-1 flex">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200 w-full flex flex-col">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Get Help & Support</h2>
                    <p className="text-blue-700 mb-6 text-sm leading-relaxed">
                      If you or someone you know needs support, guidance, or assistance, we're here to help.
                      Reach out to us confidentially.
                    </p>

                    <div className="space-y-4 mb-6">
                      {contactMethods.map((method, index) => (
                        <div key={index} className={`p-4 rounded-lg border ${method.borderColor} ${method.bgColor} transition-all duration-300 hover:shadow-sm`}>
                          <div className="flex items-start space-x-3">
                            <span className={method.iconColor}>{method.icon}</span>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-800 text-sm">{method.title}</h3>
                              <p className="text-gray-600 text-xs mb-2">{method.description}</p>
                              {method.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-700 font-medium text-sm">{detail}</p>
                              ))}
                            </div>
                          </div>
                          <a
                            href={method.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-3 inline-block w-full text-center py-2 px-4 bg-gradient-to-r ${method.color} text-white rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md flex items-center justify-center gap-2`}
                          >
                            {method.icon}
                            {method.action}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                 
                </div>
              </motion.div>

              {/* FORM CARD */}
              <motion.div variants={fadeUp} className="lg:col-span-2 flex">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-blue-200 w-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Request Support</h2>
                        <p className="text-blue-700 text-sm md:text-base max-w-2xl">
                          Share your situation with us confidentially. We'll connect you with the right support and guidance for your needs.
                        </p>
                      </div>
                    </div>

                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6"
                      >
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-emerald-800 text-sm md:text-base">Support Request Sent!</h4>
                            <p className="text-emerald-600 text-xs md:text-sm">We'll contact you shortly with guidance and support options.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-6 text-rose-700 text-sm">
                        Something went wrong. Please try again later or contact us directly.
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          id="name"
                          label="Full Name *"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          error={errors.name}
                          required
                        />
                        <FormField
                          id="email"
                          label="Email Address *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          error={errors.email}
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <FormField
                          id="phone"
                          label="Phone Number *"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          error={errors.phone}
                          required
                        />
                        <div>
                          <label className="block text-sm font-semibold text-blue-700 mb-2">Type of Support Needed *</label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleChange}
                            className={`w-full px-3 md:px-4 py-2 md:py-3 bg-blue-50 border ${errors.inquiryType ? "border-rose-400" : "border-blue-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base`}
                            aria-invalid={!!errors.inquiryType}
                          >
                            <option value="">Select support type</option>
                            {inquiryTypes.map((type, idx) => (
                              <option key={idx} value={type}>{type}</option>
                            ))}
                          </select>
                          {errors.inquiryType && <p className="text-rose-600 text-sm mt-2">{errors.inquiryType}</p>}
                        </div>
                      </div>

                      <div>
                        <FormField
                          id="subject"
                          label="Subject *"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Brief description of your situation"
                          error={errors.subject}
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-blue-700 mb-2">Tell Us Your Situation *</label>
                        <textarea
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please share details about your current situation, challenges you're facing, type of support needed, and any immediate concerns. All information is kept confidential."
                          className={`w-full px-3 md:px-4 py-2 md:py-3 bg-blue-50 border ${errors.message ? "border-rose-400" : "border-blue-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base`}
                          aria-invalid={!!errors.message}
                        />
                        <div className="flex justify-between items-center mt-2">
                          {errors.message ? (
                            <p className="text-rose-600 text-sm">{errors.message}</p>
                          ) : (
                            <p className="text-blue-600 text-xs md:text-sm">Please provide detailed information for better assistance</p>
                          )}
                          <p className="text-blue-400 text-xs md:text-sm">{formData.message.length}/1000</p>
                        </div>
                      </div>

                      {/* Honeypot field */}
                      <div style={{ display: "none" }} aria-hidden="true">
                        <label htmlFor="website">Website</label>
                        <input
                          id="website"
                          name="website"
                          type="text"
                          value={formData.website}
                          onChange={handleChange}
                        />
                        {errors.website && <p className="text-rose-600">{errors.website}</p>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 md:py-4 rounded-lg font-bold text-white transition-all duration-300 text-sm md:text-base ${isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl"}`}
                        aria-busy={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 md:mr-3"></div>
                            Sending Your Request...
                          </div>
                        ) : (
                          "Request Support & Guidance →"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
        >
          <div onClick={() => setShowModal(false)} className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white rounded-xl shadow-xl p-6 max-w-md w-full z-10"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Help is on the way.</h3>
              <p className="text-gray-600 text-sm mb-4">Our support team will contact you shortly with guidance and assistance.</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactAnandSevaTrust;

/* ---------------- FORM FIELD COMPONENT ---------------- */
function FormField({ id, label, name, type = "text", value, onChange, placeholder, error, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-blue-700 mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-blue-50 border ${error ? "border-rose-400" : "border-blue-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm md:text-base`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p id={`${id}-error`} className="text-rose-600 text-sm mt-2">
          {error}
        </p>
      )}
    </div>
  );
}