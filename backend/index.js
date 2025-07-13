const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/todos", require("./routes/todos"));

app.get("/test", (req, res) => {
  res.send("✅ Express is working");
});


console.log("🔍 MONGO_URL:", process.env.MONGO_URL);


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch(err => console.error("MongoDB connection error:", err));
