const express = require("express");
const dotenv = require(`dotenv`).config();
const Colors = require("Colors");
const goalsRoute = require(`./Routes/goalsRoute`);
const { errorHandler } = require("./Middleware/errorMiddleware");
const connectDB = require("./Config/DB");
const app = express();
const port = process.env.PORT || 5000;
// Coonect To the Database
connectDB();
// MiddleWare Befor The Routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/app/goals", goalsRoute);

// MiddleWare After The Routs
// ErrorMidleware
app.use(errorHandler);

// Starting Server
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${port}`);
});
