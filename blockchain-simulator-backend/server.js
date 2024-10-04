import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/SessionRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  res.send("Blockchain simulator backend running");
});

// Importing session routes

app.use("/api/sessions", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
