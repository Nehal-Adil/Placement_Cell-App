const { ConnectionStates } = require("mongoose");
const Interview = require("../models/interview");

module.exports.home = function (req, res) {
  res.render("interview_form");
};

// Scheduling interview for students
module.exports.create = async (req, res) => {
  console.log(req.body.student_id);
  let interview = await Interview.create(req.body);
  if (err) {
    console.log("err in scheduling the interviw", err);
    return;
  }
  console.log("inteview scheduled");
  res.redirect("/emp/profile");
};

module.exports.update = async function (req, res) {
  console.log(req.params.id);
  let interviews = await Interview.find({ student_id: req.params.id });
  if (err) {
    throw err;
    return;
  }
  console.log(interviews);
  res.render("interviewUP", {
    interviews: interviews,
  });
};

module.exports.result = function (req, res) {
  res.render("resultUP", {
    id: req.params.id,
  });
};

//find and update the result of student in interview
module.exports.resultupdate = function (req, res) {
  console.log(req.body.result);
  Interview.findByIdAndUpdate(req.params.id, { result: req.body.result });
  console.log("successfully updated", req.body.result);

  res.redirect("/emp/profile");
};
