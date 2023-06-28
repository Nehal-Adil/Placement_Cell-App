const express=require('express');
const router=express.Router();
const studentController=require('../controllers/student_c');
const passport = require('passport');

router.post('/create',studentController.createStudent);

router.post('/update',studentController.update);




module.exports=router