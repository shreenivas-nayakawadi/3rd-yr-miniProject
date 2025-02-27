import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/authRoutes.js";

const app = express();
const prisma = new PrismaClient();

dotenv.config();
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);

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
