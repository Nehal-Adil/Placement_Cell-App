const { setEngine } = require("crypto");
const express = require("express");
const app = express();
const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");
app.use(expressLayouts);
const cookieParser = require("cookie-parser");
const session = require("express-session");

const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo");
app.use(express.urlencoded());

//Static Files
app.use(express.static("./assets"));

//Set Up - Extract Styles from Sub Pages into the Layout.
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(cookieParser());

//mongo store is used to store the session cookie in the db
app.use(
  session({
    // TODO change the secret before deployement in production  mode
    name: "placement",
    secret: "secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl: "mongodb://localhost/placement_development",
        autoRemove: "disabled",
      },
      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

app.use("/", require("./routes"));

app.set("view engine", "ejs");
app.set("views", "./views");

//Run the ExpressJS Server
app.listen(port, function (err) {
  if (err) {
    console.log("err in runnig the server", err);
  }

  console.log("running on port", port);
});
