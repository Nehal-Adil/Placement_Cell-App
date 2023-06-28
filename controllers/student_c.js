
const Student=require('../models/student');

module.exports.createStudent=function(req,res){
    Student.create(req.body, function(err, student){
        if(err){console.log('err in adding the student',err); return}

       console.log('student added');
        res.redirect('/emp/profile');
        
    })
}



module.exports.update=function(req,res){
console.log(req.body._id);
console.log(req.body);
Student.findByIdAndUpdate(req.body._id,{webd:req.body.webd,react:req.body.react,dsa:req.body.dsa,status:req.body.status},function(err){
    console.log(err);
    return;
})

  console.log("updated");
    res.redirect('/emp/profile');
}