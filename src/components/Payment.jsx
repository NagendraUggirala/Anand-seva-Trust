import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const icons = {
  card: "💳",
  bank: "🏦",
  upi: "📱",
};

function Payment() {
  const navigate = useNavigate();
  const [donationData, setDonationData] = useState(null);
  const [donorDetails, setDonorDetails] = useState(null);

  const [paymentType, setPaymentType] = useState("");

  // FORM FIELDS
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [bankName, setBankName] = useState("");

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem("donationData"));
    const donor = JSON.parse(localStorage.getItem("donorDetails"));

    if (!donation || !donor) {
      navigate("/industries");
      return;
    }

    setDonationData(donation);
    setDonorDetails(donor);
  }, []);

  if (!donationData || !donorDetails) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">

        <h2 className="text-xl font-bold text-center mb-6 text-orange-500">
          Select Payment Method
        </h2>

        {/* AMOUNT */}
        <p className="text-md mb-4 text-gray-700">
          <strong>Amount:</strong> {donationData.amount}
        </p>

        {/* PAYMENT CARDS */}
        <div className="space-y-3 mb-4">

          {/* UPI CARD */}
          <div
            onClick={() => setPaymentType("upi")}
            className={`p-3 border rounded-lg flex items-center gap-3 cursor-pointer transition hover:bg-gray-100 ${
              paymentType === "upi" ? "border-orange-500 bg-orange-50" : ""
            }`}
          >
            <span className="text-xl">{icons.upi}</span>
            <span className="font-medium text-sm">UPI Payment</span>
          </div>

          {/* CARD PAYMENT */}
          <div
            onClick={() => setPaymentType("card")}
            className={`p-3 border rounded-lg flex items-center gap-3 cursor-pointer transition hover:bg-gray-100 ${
              paymentType === "card" ? "border-orange-500 bg-orange-50" : ""
            }`}
          >
            <span className="text-xl">{icons.card}</span>
            <span className="font-medium text-sm">Credit / Debit Card</span>
          </div>

          {/* NET BANKING */}
          <div
            onClick={() => setPaymentType("bank")}
            className={`p-3 border rounded-lg flex items-center gap-3 cursor-pointer transition hover:bg-gray-100 ${
              paymentType === "bank" ? "border-orange-500 bg-orange-50" : ""
            }`}
          >
            <span className="text-xl">{icons.bank}</span>
            <span className="font-medium text-sm">Net Banking</span>
          </div>

        </div>

        {/* ------------------- */}
        {/* UPI FORM            */}
        {/* ------------------- */}
        {paymentType === "upi" && (
          <div className="border p-4 rounded-lg mb-3 bg-gray-50">
            <h3 className="font-semibold text-orange-500 mb-2 flex items-center gap-1">
              {icons.upi} UPI Payment
            </h3>

            <label className="text-sm font-medium">UPI ID</label>
            <input
              className="w-full p-2 mb-3 border rounded-lg text-sm"
              placeholder="example@upi"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />

     <button
  onClick={() => navigate("/success")}
  className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm shadow hover:bg-green-700"
>
  Pay ₹{donationData.amount}
</button>

          </div>
        )}

        {/* ------------------- */}
        {/* CARD FORM           */}
        {/* ------------------- */}
        {paymentType === "card" && (
          <div className="border p-4 rounded-lg mb-3 bg-gray-50">
            <h3 className="font-semibold text-orange-500 mb-2 flex items-center gap-1">
              {icons.card} Credit / Debit Card
            </h3>

            <label className="text-sm">Card Number</label>
            <input
              className="w-full p-2 mb-3 border rounded-lg text-sm"
              maxLength={16}
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />

            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="text-sm">Expiry</label>
                <input
                  className="w-full p-2 mb-3 border rounded-lg text-sm"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>

              <div className="w-1/2">
                <label className="text-sm">CVV</label>
                <input
                  className="w-full p-2 mb-3 border rounded-lg text-sm"
                  maxLength={3}
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>

        <button
  onClick={() => navigate("/success")}
  className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm shadow hover:bg-green-700"
>
  Pay ₹{donationData.amount}
</button>

          </div>
        )}

        {/* ------------------- */}
        {/* NET BANKING FORM    */}
        {/* ------------------- */}
        {paymentType === "bank" && (
          <div className="border p-4 rounded-lg mb-3 bg-gray-50">
            <h3 className="font-semibold text-orange-500 mb-2 flex items-center gap-1">
              {icons.bank} Net Banking
            </h3>

            <label className="text-sm">Select Bank</label>
            <select
              className="w-full p-2 mb-3 border rounded-lg text-sm"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            >
              <option value="">-- Choose Bank --</option>
              <option value="SBI">SBI</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="AXIS">AXIS Bank</option>
              <option value="PNB">Punjab National Bank</option>
            </select>

 <button
  onClick={() => navigate("/success")}
  className="px-5 py-2 bg-green-600 text-white rounded-lg text-sm shadow hover:bg-green-700"
>
  Pay ₹{donationData.amount}
</button>

          </div>
        )}

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/info")}
          className="mt-4 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100 w-full"
        >
          Back
        </button>

      </div>
    </div>
  );
}

export default Payment;
