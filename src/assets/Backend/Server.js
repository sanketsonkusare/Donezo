import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

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
