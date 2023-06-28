const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    student_id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    college:{
        type:String
    },
    status: {
        type: String,
        enum: ['placed','not_placed'],
        required : true 
    },
    dsa:{
        type:String
    },
    webd:{
        type:String
       
    },
    react:{
        type:String
        
    }

},{
    timestamps:true
});

const Student=mongoose.model('Student',studentSchema);

module.exports=Student;