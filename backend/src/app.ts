import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import quotationRoutes from "./routes/quotationRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";
import visitorRoutes from "./routes/visitorRoutes";
import otpRoutes from "./routes/otpRoutes";

const app = express();

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Parse JSON
app.use(express.json());

// Parse URL Encoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/quotations", quotationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/visitors", visitorRoutes);
app.use("/api/otp", otpRoutes);

// Home
app.get("/", (req, res) => {
  res.send("NEW APS Backend Running 🚀");
});

export default app;