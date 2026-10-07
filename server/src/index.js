import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json({ message: "Backend is working!" });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});