const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_c');


router.get('/',homeController.home);

router.use('/emp',require('./emp'));
router.use('/student',require('./student'));
router.use('/interview',require('./interview'));
router.use('/download',require('./download')); 
module.exports=router;