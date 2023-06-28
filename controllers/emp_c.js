const Employee = require("../models/employee");
const Student = require("../models/student");
const Interview = require("../models/interview");
const passport = require("passport");

module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  let user = await Employee.findOne({ email: req.body.email });

  if (!user) {
    Employee.create(req.body);

    return res.redirect("/emp/sign-in");
  } else {
    return res.redirect("back");
  }
};

//Sign Up
module.exports.signup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/emp/profile");
  }
  res.render("sign_up");
};

//Sign In
module.exports.singnin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/emp/profile");
  }
  res.render("signin");
};

//user login{}
module.exports.createSession = function (req, res) {
  return res.redirect("/emp/profile");
};

//profile and rendr all students in a list
module.exports.profile = function (req, res) {
  Student.find({}, function (err, student) {
    return res.render("profile", {
      students: student,
    });
  });
};

//Sign Out
module.exports.signout = function (req, res) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

module.exports.addStudent = function (req, res) {
  res.render("student_form");
};
