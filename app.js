import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://yashmishra77738:${process.env.MONGOOSE_PASSWORD}@cluster0.1rc2t55.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () => console.log("✅ Server & DB Connected on port 5000"));
  })
  .catch((e) => console.error(`Mongo Error: ${e.message}`));

// Routes
app.use("/api/auth", authRoutes);
