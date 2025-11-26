import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const Success = () => {
  const navigate = useNavigate();

  // ⭐ Generate PDF Receipt
  const downloadPDF = () => {
    const donor = JSON.parse(localStorage.getItem("donorDetails"));
    const donation = JSON.parse(localStorage.getItem("donationData"));

    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.setTextColor("#28a745");
    doc.text("✔ Donation Successful", 60, 20);

    doc.setFontSize(16);
    doc.setTextColor("#000000");
    doc.text("Donation Receipt", 75, 35);

    doc.setFontSize(12);
    doc.text(`Name: ${donor.title} ${donor.name}`, 20, 60);
    doc.text(`Email: ${donor.email}`, 20, 70);
    doc.text(`Phone: ${donor.phone}`, 20, 80);
    doc.text(`Address: ${donor.address}`, 20, 90);
    doc.text(`City: ${donor.city}`, 20, 100);
    doc.text(`State: ${donor.state}`, 20, 110);
    doc.text(`Pincode: ${donor.pincode}`, 20, 120);

    doc.text(`Donation Amount: ₹${donation.amount}`, 20, 140);

    doc.setFontSize(14);
    doc.setTextColor("#28a745");
    doc.text("Thank you for supporting Anand Seva Trust!", 20, 160);

    doc.save("Donation_Receipt.pdf");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full animate-fadeIn">

        {/* Success Icon */}
        <div className="text-green-600 text-6xl mb-4 animate-bounce">
          ✔
        </div>

        <h2 className="text-3xl font-bold text-green-700">
          Payment Successful!
        </h2>

        <p className="mt-3 text-gray-600 text-lg">
          Thank you for your kind donation.  
          Your receipt is ready to download.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-4">

          {/* PDF BUTTON */}
          <button
            onClick={downloadPDF}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            📄 Download Receipt (PDF)
          </button>

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/industries")}
            className="px-6 py-3 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400 transition"
          >
            ⬅ Back to Industries
          </button>

        </div>

      </div>
    </div>
  );
};

export default Success;
