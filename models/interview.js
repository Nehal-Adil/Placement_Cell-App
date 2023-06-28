const mongoose=require('mongoose');
const interviewSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    companyname:{
        type:String,
        required:true
    },
    time:{
        type:Date
    },
    result:{
        type:String,
        enum: ['pass','fail','on hold','not attempted']
    },
    student_id:{
        type:String
    }
},{
    timestamps:true
});


const Interview=mongoose.model('Interview',interviewSchema)


module.exports=Interview;
