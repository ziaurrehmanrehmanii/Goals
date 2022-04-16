const express = require("express");
const dotenv = require(`dotenv`).config();
const goalsRoute = require(`./Routes/goalsRoute`);
const { errorHandler } = require("./Middleware/errorMiddleware");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/app/goals", goalsRoute, errorHandler);

// app.use(errorHandler);

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${port}`);
});
