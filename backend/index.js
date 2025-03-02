import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";

const app = express();
const prisma = new PrismaClient();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
dotenv.config();
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/budget", budgetRoutes);

const PORT = process.env.PORT || 5000;

async function checkDatabaseConnection() {
      try {
            await prisma.$connect();
            console.log("Successfully connected to the database!");
      } catch (error) {
            console.error("Error connecting to the database:", error.message);
      } finally {
            await prisma.$disconnect();
      }
}

app.listen(PORT, () => {
      checkDatabaseConnection();
      console.log(`Server running on port ${PORT}`);
});
