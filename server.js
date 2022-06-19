require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const router = require("./routes/users");

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.get("/api", (req, res) =>
  res.json({
    message: "Welcome to the Contact Keeper API...",
  })
);

// TODO: Creating a index router, to encapsulate all api routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || "5000";

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
