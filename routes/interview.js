const express=require('express');

const router=express.Router();

const intervieController=require('../controllers/interview_c');

const passport=require('passport');



router.get('/update/:id',passport.checkAuthentication,intervieController.update);

router.get('/result/:id',passport.checkAuthentication,intervieController.result);

router.post('/create',passport.checkAuthentication,intervieController.create);

router.post('/result-update/:id',passport.checkAuthentication,intervieController.resultupdate);

module.exports=router;