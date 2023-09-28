// imports
const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const listingController = require("./controllers/listingController");
const passport = require("passport");
const session = require("express-session");
// put these inside of env variables
const PORT = 3000;
const database_URI = "mongodb://127.0.0.1:27017/scout";

// connections
mongoose.connect(database_URI);
const app = express();

// require routers
const listing = require("./routes/listingRouter.js");
const login = require("./routes/loginRouter.js");
const signup = require("./routes/signupRouter.js");

// middleware
app.use(express.json());
app.use("/signup", signup);
app.use("/login", login);
app.use("/listing", listing);

// app.use(cors);
// app.use(express.static(path.resolve(__dirname, "../client")));
// app.post("/listing", listingController.setAddress, (req, res) => {
//   return res.sendStatus(200);
// });
// app.put("/listing", listingController.updateListing, (req, res) => {
//   console.log("test33333");

//   return res.sendStatus(200);
// });
// app.delete("/listing", listingController.deleteListing, (req, res) =>
//   res.sendStatus(200)
// );

// visiting endpoint that is not defined
// app.use((req, res) =>
//   res.status(404).send("This is not the page you're looking for...")
// );

// global error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
