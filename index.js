const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// used for sessions
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require("connect-mongo");

app.use(cookieParser());

// set up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// mongo-store is used to store session cookies in database
app.use(
  session({
    name: "placement-cell",
    secret: "asewe",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/placement_development",
      autoRemove: "disabled",
    }),
    function(err) {
      console.log(err || "connect-mongodb setup ok");
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// sets the authenticated user in the response
app.use(passport.setAuthenticatedUser);

// using express routers
app.use(require("./routes"));

// using bodyParser
app.use(bodyParser.json());

//Run the ExpressJS Server
app.listen(port, function (err) {
  if (err) {
    console.log("err in runnig the server", err);
  }

  console.log("running on port", port);
});
