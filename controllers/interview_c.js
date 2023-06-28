const { ConnectionStates } = require('mongoose');
const Interview=require('../models/interview');

module.exports.home=function(req,res){

    res.render('interview_form');

}



module.exports.create=(req,res)=>{
    console.log(req.body.student_id);
    Interview.create(req.body,function(err,interview){
        if(err){
            console.log("err in scheduling the interviw",err);
            return;
        }
        console.log("inteview scheduled");
        res.redirect('/emp/profile');
    })
}


module.exports.update=function(req,res){
    console.log(req.params.id);
    Interview.find({student_id:req.params.id},function(err,interviews){
        if(err){
            throw(err);
            return;
        }
        console.log(interviews);
        res.render('interviewUP',{
                interviews:interviews
        });
    })
   
}




module.exports.result=function(req,res){
  res.render('resultUP',{
    id:req.params.id
  });
}


//find and update the result of student in interview
module.exports.resultupdate=function(req,res){
    console.log(req.body.result);
    Interview.findByIdAndUpdate(req.params.id,{result:req.body.result},function(err){
            console.log(err);
            return;
        })
        console.log('successfully updated',req.body.result);
        
    
    res.redirect('/emp/profile');
}


