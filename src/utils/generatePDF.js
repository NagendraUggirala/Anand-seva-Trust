import express from "express";
import cors from "cors";
import { jsPDF } from "jspdf";
import { JSDOM } from "jsdom";

const app = express();
app.use(cors());
app.use(express.json());

// Create DOM for jsPDF (required in node environment)
const dom = new JSDOM();
global.window = dom.window;
global.document = dom.window.document;

// Convert Number → Words (Indian Format)
const numberToWords = (num) => {
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight",
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen",
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  if (num === 0) return "Zero";

  const inWords = (n) => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + " " + a[n % 10];
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred " + inWords(n % 100);
    if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand " + inWords(n % 1000);
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh " + inWords(n % 100000);
    return inWords(Math.floor(n / 10000000)) + " Crore " + inWords(n % 10000000);
  };

  return inWords(num).trim() + " Rupees Only";
};

// Generate Transaction ID
const generateTransactionId = () =>
  "TXN-" + Math.floor(100000000 + Math.random() * 900000000);

// ----------------------------
// 🚀 MAIN API ENDPOINT
// ----------------------------
app.post("/generate-receipt", (req, res) => {
  try {
    const { donor, amount } = req.body;

    if (!donor || !amount) {
      return res.status(400).json({ error: "Missing donor or amount" });
    }

    const doc = new jsPDF();
    const transactionId = generateTransactionId();

    const clean = amount.toString().replace(/[₹,]/g, "");
    const normalAmount = `₹${clean}`;
    const amountInWords = numberToWords(Number(clean));

    // HEADER
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("ANAND SEVA TRUST", 105, 20, { align: "center" });

    doc.setFontSize(16);
    doc.text("Donation Receipt", 105, 30, { align: "center" });

    doc.line(20, 35, 190, 35);

    // DETAILS
    doc.setFontSize(12);
    doc.text(`Receipt No: ${transactionId}`, 20, 50);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 60);
    doc.text(`Donor Name: ${donor.title} ${donor.name}`, 20, 80);
    doc.text(`Phone: ${donor.phone}`, 20, 90);
    doc.text(`Email: ${donor.email}`, 20, 100);
    doc.text(`Address: ${donor.address}`, 20, 115);
    doc.text(`City: ${donor.city}`, 20, 125);
    doc.text(`State: ${donor.state}`, 20, 135);
    doc.text(`Pincode: ${donor.pincode}`, 20, 145);

    // Amount Box
    doc.setDrawColor(255, 165, 0);
    doc.rect(40, 160, 130, 20);

    doc.setFontSize(16);
    doc.text(`Donation Amount: ${normalAmount}`, 105, 172, { align: "center" });

    // Words
    doc.setFontSize(12);
    doc.text(amountInWords, 105, 188, { align: "center" });

    // Footer
    doc.setFont("helvetica", "italic");
    doc.text(
      "Thank you for your generous contribution.\nYour support helps us change lives!",
      105,
      220,
      { align: "center" }
    );

    // Convert to base64 PDF
    const pdf = doc.output("arraybuffer");

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=AnandSeva_Receipt_${transactionId}.pdf`
    );

    return res.send(Buffer.from(pdf));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Receipt generation failed" });
  }
});

// START SERVER
app.listen(5000, () => console.log("Server running on port 5000"));
