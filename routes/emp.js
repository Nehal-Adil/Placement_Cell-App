const express=require('express');
const router=express.Router();
const passport = require('passport');

const empController=require('../controllers/emp_c');




router.get('/profile',passport.checkAuthentication,empController.profile);
router.get('/sign-in',empController.singnin);


router.get('/sign-up',empController.signup);

router.post('/create',empController.create);

router.get('/add-student',passport.checkAuthentication,empController.addStudent);

router.get('/sign-out',empController.signout);

router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/emp/sign-in'},

),empController.createSession);


module.exports=router;