const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true
});



const Employee=mongoose.model('Employee',employeeSchema);

module.exports=Employee;