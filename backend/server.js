import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   GODADDY SMTP
========================= */
const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net", // 🔥 CHANGE THIS
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS.trim(),
  },
});
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY ✅");
  }
});

/* =========================
   ROUTES
========================= */
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.post("/enquiry", async (req, res) => {
  const { name, phone, email, company, message, services } = req.body;

  try {
    const serviceHTML = services?.length
      ? services
          .map(
            (s, i) =>
              `<p><b>${i + 1}. ${s.name}</b> - ${s.quantity}</p>`
          )
          .join("")
      : "<p>No products selected</p>";

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry",
      html: `
        <h2>New Enquiry</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>

        <h3>Products</h3>
        ${serviceHTML}

        <h3>Message</h3>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
  console.error("MAIL ERROR:", err);
  res.json({ success: false, error: err.message });
}
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});