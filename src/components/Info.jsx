import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const [donationData, setDonationData] = useState(null);

  const [title, setTitle] = useState("Mr");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // ⭐ Address Fields
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("donationData"));
    if (!data) {
      navigate("/industries");
      return;
    }
    setDonationData(data);
  }, []);

  const goToPayment = () => {
    if (!name || !phone || !email || !address || !city || !state || !pincode) {
      alert("Please fill all fields");
      return;
    }

    const donorDetails = {
      title,
      name,
      phone,
      email,
      address,
      city,
      state,
      pincode,
    };

    localStorage.setItem("donorDetails", JSON.stringify(donorDetails));
    navigate("/payment");
  };

  if (!donationData) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">

      {/* 🔽 Increased Width Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">

        <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">
          Donor Information
        </h2>

        {/* TITLE */}
        <label className="font-medium text-sm">Title</label>
        <select
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option>Mr</option>
          <option>Mrs</option>
          <option>Ms</option>
        </select>

        {/* NAME */}
        <label className="font-medium text-sm">Full Name</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* PHONE */}
        <label className="font-medium text-sm">Phone</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* EMAIL */}
        <label className="font-medium text-sm">Email</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* ADDRESS */}
        <label className="font-medium text-sm">Address</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* CITY */}
        <label className="font-medium text-sm">City</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* STATE */}
        <label className="font-medium text-sm">State</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        {/* PINCODE */}
        <label className="font-medium text-sm">Pincode</label>
        <input
          className="w-full p-3 mb-4 border rounded-lg text-sm"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        {/* AMOUNT */}
        <label className="font-medium text-sm">Donation Amount</label>
        <input
          readOnly
          className="w-full p-3 mb-4 border rounded-lg bg-gray-100 font-semibold text-sm"
          value={donationData.amount}
        />

        {/* BUTTONS */}
        <div className="flex justify-between mt-2">

          <Link
            to="/industries"
            className="px-5 py-2 rounded-lg border text-sm hover:bg-gray-100"
          >
            Back
          </Link>

          <button
            onClick={goToPayment}
            className="px-6 py-2 bg-green-600 text-white text-sm rounded-lg shadow hover:bg-green-700"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
}

export default Info;
