import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const authRoutes = require("./Routes/auth");
const taskRoutes = require("./Routes/tasks");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


dotenv.config();

if (!process.env.MONGO_URL) {
  throw new Error("MONGO_URL is not defined in the environment variables");
}

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error(err));

app.get("/", (req, res) => res.send("API is running"));

app.listen(5000, () => console.log("Server running on port 5000"));
