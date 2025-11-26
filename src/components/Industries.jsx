import React, { useState, useEffect } from "react";
import { Heart, HelpingHand, School, UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";





function Industries() {
  const [monthlyOptions] = useState(["₹500","₹1000","₹1500","₹2500","₹5000"]);
  const [oneTimeOptions] = useState(["₹250","₹500","₹1000","₹2500","₹5000","₹10000","₹20000"]);

  const [mode, setMode] = useState("monthly");
  const [selectedMonthly, setSelectedMonthly] = useState(null);
  const [selectedOneTime, setSelectedOneTime] = useState(null);
  const [customMonthly, setCustomMonthly] = useState("");
  const [customOneTime, setCustomOneTime] = useState("");
  const [coverFees, setCoverFees] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  // IMAGE-ONLY CAROUSEL
  const carouselSlides = [
    "https://thumbs.dreamstime.com/b/applause-happy-teacher-kids-classroom-learning-support-assessment-group-celebration-child-development-401193168.jpg",
    "https://lirp.cdn-website.com/3f4c882c/dms3rep/multi/opt/Top+10+Genuine+Charity+Organizations+in+India+%281%29-21cf4d8a-640w.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkcCd2subBwtWy6T7k8Mc9rebdAbzRSIZ3w&s",
  ];

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselIndex]);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCarouselIndex((carouselIndex + 1) % carouselSlides.length);
      setFade(true);
    }, 150);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCarouselIndex(
        carouselIndex === 0 ? carouselSlides.length - 1 : carouselIndex - 1
      );
      setFade(true);
    }, 150);
  };

  const goToInfo = () => {
  const amount =
    mode === "monthly"
      ? selectedMonthly || customMonthly
      : selectedOneTime || customOneTime;

  if (!amount) {
    alert("Please select or enter an amount");
    return;
  }

  // Save to localStorage
  const donationData = { mode, amount, coverFees };
  localStorage.setItem("donationData", JSON.stringify(donationData));

  // Navigate to Info page
  navigate("/info");  // ⭐ FIXED
};



  return (
    <div className="bg-gradient-to-br from-yellow-600 via-orange-500 to-blue-700 overflow-hidden py-16">
      <div className="container mx-auto px-6 md:px-12">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">EMPOWER CHILDREN & FAMILIES</h2>
          <p className="text-blue-600 mt-2 font-semibold uppercase">
            Donate to Anand Seva Trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT COLUMN: CAROUSEL + CONTENT */}
          <div className="space-y-6">

            {/* IMAGE CAROUSEL */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">

              <img
                src={carouselSlides[carouselIndex]}
                className={`w-full h-full object-cover transition-opacity duration-700 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
                alt="carousel content"
              />

              {/* LEFT ARROW */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
              >
                ◀
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-1 rounded-full shadow"
              >
                ▶
              </button>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-700 leading-relaxed text-lg">
              Anand Seva Trust supports families and children in need.
              We uplift, guide, and protect vulnerable individuals.
              Education and emotional care are our foundation.
              Your support restores hope and strengthens lives.
              Together, we build brighter and safer futures.
            </p>

            {/* THREE FIXED IMAGES BELOW */}
            <div className="grid grid-cols-3 gap-4">
            
            
            <img src="data:image/jpeg;base64,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" className="rounded-lg shadow h-28 object-cover" />

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjkD7RnYcSsnovmFJ7JSFNZUIXIa5VRm6IA&s" className="rounded-lg shadow h-28 object-cover" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-Srnfn_impAv1mu_qaH5VMU5dORfs__zHg&s" className="rounded-lg shadow h-28 object-cover" />
            </div>
          </div>

          {/* RIGHT DONATION CARD */}
          <div className="bg-white rounded-xl shadow-md border overflow-hidden">

            {/* TOGGLE */}
            <div className="flex items-center justify-center gap-4 p-6 border-b">
              <button
                onClick={() => setMode("monthly")}
                className={`px-6 py-3 rounded-full font-semibold border transition 
                  ${mode === "monthly" ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white text-black border-gray-300 hover:bg-orange-100"}`}
              >
                MONTHLY
              </button>

              <button
                onClick={() => setMode("oneTime")}
                className={`px-6 py-3 rounded-full font-semibold border transition 
                  ${mode === "oneTime" ? "bg-orange-500 text-white border-orange-600"
                  : "bg-white text-black border-gray-300 hover:bg-orange-100"}`}
              >
                ONE-TIME
              </button>
            </div>

            <div className="p-8">

              {/* ICONS */}
              <div className="flex justify-center gap-6 mb-6">
                <Heart size={44} className="text-orange-500" />
                <HelpingHand size={44} className="text-blue-600" />
                <School size={44} className="text-green-600" />
                <UsersRound size={44} className="text-purple-600" />
              </div>

              {/* MONTHLY */}
              {mode === "monthly" && (
                <>
                  <h3 className="text-center text-lg font-bold mb-4">Monthly Support Plan</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {monthlyOptions.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedMonthly(amount);
                          setCustomMonthly("");
                        }}
                        className={`px-4 py-3 rounded-lg border font-semibold transition 
                          ${selectedMonthly === amount
                            ? "bg-orange-500 text-white border-orange-600"
                            : "bg-white text-black border-gray-400 hover:bg-orange-200"}`}
                      >
                        {amount}/MO
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Custom Monthly Amount (₹)"
                    value={customMonthly}
                    onChange={(e) => {
                      setCustomMonthly(e.target.value);
                      setSelectedMonthly(null);
                    }}
                    className="w-full mt-5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                  />
                </>
              )}

              {/* ONE-TIME */}
              {mode === "oneTime" && (
                <>
                  <h3 className="text-center text-lg font-bold mb-4">One-Time Donation</h3>

                  <div className="grid grid-cols-3 gap-4">
                    {oneTimeOptions.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedOneTime(amount);
                          setCustomOneTime("");
                        }}
                        className={`px-4 py-3 rounded-lg border font-bold transition 
                          ${selectedOneTime === amount
                            ? "bg-orange-500 text-white border-orange-600"
                            : "bg-white text-black border-gray-400 hover:bg-orange-200"}`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Custom One-Time Amount (₹)"
                    value={customOneTime}
                    onChange={(e) => {
                      setCustomOneTime(e.target.value);
                      setSelectedOneTime(null);
                    }}
                    className="w-full mt-5 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
                  />
                </>
              )}

              {/* COVER FEES */}
              <label className="flex items-center gap-3 mt-6 cursor-pointer">
                <input
                  type="checkbox"
                  checked={coverFees}
                  onChange={() => setCoverFees(!coverFees)}
                  className="w-4 h-4"
                />
                <span className="text-gray-700 text-sm">I’ll cover my transaction fees.</span>
              </label>

              {/* DONATE BUTTON */}
              <div className="text-center mt-8">
<button
  onClick={goToInfo}
  className="px-12 py-3 bg-green-600 text-white font-bold rounded-lg shadow hover:bg-green-700"
>
  {mode === "monthly" ? "Donate Monthly" : "Donate Once"}
</button>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries;
