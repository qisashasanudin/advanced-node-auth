require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./app/config/db");
const errorHandler = require("./app/middleware/error");

connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", require("./app/routes/auth"));
app.use("/api/private", require("./app/routes/private"));
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
